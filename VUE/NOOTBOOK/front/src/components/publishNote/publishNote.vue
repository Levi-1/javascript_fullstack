<template>
  <div class="publish-note">
    <quill-editor v-model="content" 
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
    >
      
    </quill-editor>
    <div class="note-wrap">
      <div class="note-title">
        <h2>输入标题</h2>
        <van-field v-model="title"  placeholder="请在此输入笔记标题" />
      </div>
      <div class="note-title">
        <h2>上传图片</h2>
        <!-- <van-uploader v-model="fileList" multiple /> -->
        <van-uploader :after-read="onRead" accept="image/*.*">
          <van-icon name="photograph" style="font-size:15px; color:red;margin-left:15px;">
          </van-icon>
        </van-uploader>
        <img class="preImg" :src="preImg" alt="" v-if="preImg">
      </div>
      <div class="note-title">
        <h2>请选择分类</h2>
        <span class="note-type" @click="selectType">选择分类 &gt;{{selectCon}}</span>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" cancel-text="取消" @cancel="onCancel" />
        <div class="publish-btn" @click="publish">发布笔记</div>
      </div>
    </div>
  </div>
</template>

<script>
// 富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'

export default {
  name: 'publishNote',
  data() {
    return {
      content: '',
      title: '',
      preImg: '',
      selectCon: '',
      show: false,
      actions: [
        {
          name: "选项"
        },
        {
          subname: "美食"
        },
        {
          subname: "旅行"
        },
        {
          subname: "汽车"
        },
        {
          subname: "时尚"
        },
        {
          subname: "科技"
        }
      ],
      editorOption: {
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "image",
              "clean",
              { color: [] },
              { background: [] },
              { font: [] },
              { size: ["small", false, "large", "huge"] },
              { header: [1, 2, 3, 4, 5, 6, false] },
              { indent: "-1" },
              { indent: "+1" }
            ], // toggled buttons
            ["blockquote"]
          ]
        }
      }
    }
  },
  components:{
    quillEditor
  },
  methods: {
    onEditorBlur(){},
    onEditorFocus() {},
    onEditorChange() {},
    onRead(file) {
      this.preImg = file.content
    },
    onSelect(item) {
      this.selectCon = item.subname
      this.show = false
    },
    onCancel() {
      this.show = false
    },
    selectType() {
      this.show = true
    },
    publish() {
      let curUserId = JSON.parse(sessionStorage.getItem('userInfo')).id
      let curUserName = JSON.parse(sessionStorage.getItem('userInfo')).nickname
      console.log(curUserId)
      this.$http({
        method: "post",
        url: "http://localhost:3000/users/insertNote",
        data: {
          note_content: this.content,
          head_img: this.preImg,
          title: this.title,
          note_type: this.selectCon,
          useId: curUserId,
          nickname: curUserName
        }
      }).then((res) => {
        console.log(res);
        this.$toast(res.data.mess)
        setTimeout(() => {
          this.$router.push({path:'/noteClass'})
        }, 1000)
      })
    }
  }
}
</script>

<style lang="less">
.van-uploader{
  padding:10px 15px;
  display: flex;
  align-items: center;
}
.ql-container {
  height: 6.666667rem;
  overflow-y: scroll;
}
.note-wrap {
  margin-top: 20px;
  h2 {
    font-weight: 400;
    font-size: 0.373333rem;
    color: rgba(69, 90, 100, 0.6);
    padding: 10px;
    background: #f5f5f5;
  }
  .preImg{
    width: 100px;
    height: 100px;
    margin-left: 15px;
  }
  .note-type {
    box-sizing: border-box;
    width: 100%;
    display: inline-block;
    font-size: 0.373333rem;
    color: #333;
    line-height: 24px;
    padding: 10px 15px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #ccc;
      width: 200%;
      height: 1px;
      transform: scale(0.5);
      transform-origin: left bottom;
    }
  }
  .publish-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 44px;
    margin: 40px auto;
    font-size: 0.453333rem;
    border-radius: 6px;
    background-color: rgba(139, 195, 74, 1);
    color: #fff;
  }
}
</style>
