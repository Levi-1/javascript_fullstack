<template>
  <div id="app">
    <div class=""> 
      <input type="file" name="" id=" " @change="handleFileChange">
      <el-button @click="handleUpload">上传</el-button>
    </div>
    <div class="">
      <div class="">计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
      <div class="">
        总进度
      </div>
      <el-progress :percentage="fakeUploadPercentage">
      </el-progress>
    </div>
    <div class="">
      <!-- 切片上传进度 -->
      <el-table :data="data">
        <el-table-column prop="hash" label="切片hash" align="center"></el-table-column>
        <el-table-cloumn label="大小(kb)" align="center" width="120">
          <template v-slot="{row}">
            {{row.size | transformByte}} <!-- transform 数据过滤 -->
          </template>
        </el-table-cloumn>
        <el-table-column label="进度" align="center">
          <template v-slot="{row}">
            <el-progress :percentage="row.percentage">
            </el-progress>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const Status = { // 定义常量 enum
  waiting: 'waiting',
  pause: 'pause',
  uploading: 'uploading'
}
const SIZE = 1024*1024
export default {
  name: 'App',
  filters: {
    transformByte(val) {
      return Number(val/1024).toFixed(0)
    }
  },
  computed: {
    uploadPercentage() {
      if (!this.container.file || !this.data.length) return 0
      const loaded = this.data.map(item => item.size * item.percentage).reduce((acc, cur) => acc + cur) // 得出每个blob的已上传大小
      return parseInt((loaded/ this.container.file.size).toFixed(2))
    }
  },
  watch: {
    uploadPercentage(now) { // 新的值
      if (now > this.fakeUploadPercentage)
        this.fakeUploadPercentage = now
    }
  },
  data: () => ({
    fakeUploadPercentage: 0,
    container: { // 将任务放置到一起
      file: null,
      hash: ''
    },
    status: Status.waiting,
    hashPercentage: 0,
    data: [], // 页面需上传的数据
    requestList: [] // 放置xhr
  }),
  methods: {
    async calculateHash( fileChunkList) {
      return new Promise(resolve => {
        // 封装花时间的任务
        // webworks
        // js 单线程的语言 UI主线程
        // html5 web workers 单独开启一个线程  进行worker操作
        // 不会影响UI
        this.container.worker = new Worker('/hash.js')
        this.container.worker.postMessage({ fileChunkList })
        this.container.worker.onmessage = e => {
          console.log(e.data)
          const { percentage, hash } = e.data
          this.hashPercentage = percentage
          if (hash) {
            resolve(hash)
          }
        }
      })
    },
      handleFileChange (e) {
        // 文件分割
        // console.log(e.target.files)
        const [file] = e.target.files // 拿到第一个文件
        this.container.file = file
      },
      async handleUpload (e) {
        if( !this.container.file) return;
        this.status = Status.uploading
        const fileChunkList = this.createFileChunk(this.container.file)
        console.log(fileChunkList)
        this.container.hash = await this.calculateHash(fileChunkList)
        // 多次上传同一个文件 没必要多次上传 
        // 上传验证
        const { shouldUpload, uploadedList } = await this.verifyUpload(this.container.file.name, this.container.hash)
        console.log(shouldUpload, uploadedList)
        if (!shouldUpload) {
          this.$message.success("已上传成功")
          this.status = Status.waiting
          return
        } else {
          this.data = fileChunkList.map(({file}, index) => ({
            fileHash: this.container.hash,
            index,
            hash: this.container.hash + '-' + index, // 每个chunk携带index，可进行排序，追踪
            chunk: file,
            size: file.size,
            percentage: uploadedList.includes(index)?100:0 // 当前切片是否已经上传
          }))
          await this.uploadChunks(uploadedList)
        }
      },
      async uploadChunks (uploadChunks = []) { // 开始上传切片
        console.log(this.data)
        const requestList = this.data.map(({ chunk, hash, index }) => {
          const formData = new FormData()
          formData.append('chunk', chunk) // 当前切片blob文件
          formData.append('hash', hash) // 当前切片的hash
          formData.append('filename', this.container.file.name) // 总文件的文件名
          formData.append('filehash', this.container.hash) // 总文件的hash
          return { formData, index }
        }).map( async ({ formData, index }) => 
          this.request({
            url: "http://localhost:3000",
            data: formData,
            onProgress: this.createProgressHandler(this.data[index]),
            requestList: this.requestList // ///// ///// //// //// //// ///
          })
        )
        await Promise.all(requestList)
        console.log('可发送合并请求')
      },
      createProgressHandler (item) {
        return e => {
          item.percentage = parseInt(String(e.loaded/e.total)*100)
        }
      },
      async verifyUpload (filename, fileHash) {
        const {data} = await this.request({
          url: 'http://localhost:3000/verify',
          headers: {
            'content-type': 'application/json'
          },
          data: JSON.stringify({ // 字符串化
            filename,
            fileHash
          })
        })
        return JSON.parse(data)
      },
      request({
          url,
          method = 'POST',
          data,
          headers = {},
          requestList,
          onProgress = e => e ///////???/////????///??////////?//////////?/?/?/

      }) {
          return new Promise(resolve => {
              const xhr = new XMLHttpRequest() // js ajax 对象
              xhr.open(method, url) // 请求
              xhr.upload.onprogress = onProgress // 调用onProgress 从createProgressHandler返回的函数
              Object.keys(headers).forEach(key=>xhr.setRequestHeader(key, headers[key])) // 请求头信息
              xhr.send(data)
              xhr.onload = e => {
                if (requestList) {
                  // xhr 完成传输
                  const xhrIndex = requestList.findIndex(item => item === xhr)
                  requestList.slice(xhrIndex, 1) // 从中移除
                }
                  resolve({
                      data: e.target.response
                  })
              }
              if (requestList) {
                requestList.push(xhr) // 保存每个xhr请求对象
                console.log(this.requestList)
              }
          })
      },
      // 设置默认参数 SIZE
      createFileChunk (file, size = SIZE) {
        const fileChunkList = []
        let cur = 0
        while (cur < file.size) {
          fileChunkList.push({
            file: file.slice(cur, cur + size)
          })
          cur += size
        }
        return fileChunkList
      }

  },
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
