// 通过内容计算md5值
self.importScripts('/spark-md5.min.js')
self.onmessage = e => { // self-this 当前的线程
    // self.postMessage({
    //     'msg': 'hello world'
    // })
    const { fileChunkList } = e.data
    const spark = new self.SparkMD5.ArrayBuffer()
    //  计算出hash值
    let percentage = 0
    let count = 0
    const loadNext = index => {
        const reader = new FileReader() // 文件读取对象
        reader.readAsArrayBuffer(fileChunkList[index].file)
        reader.onload = e => {
            count++
            spark.append(e.target.result)
            if (count === fileChunkList.length) {
                self.postMessage({
                    percentage: 100,
                    hash: spark.end()
                })
                self.close()
            } else {
                percentage += 100/fileChunkList.length
                self.postMessage({
                    percentage
                })
                loadNext(count)
            }
        }
    }
    loadNext(0) 
}