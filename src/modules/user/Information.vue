<template>
    <div>
        <div class="title">
            <img src="../../../static/img/message.png" alt="">
        </div>
        <div class="body-item">
            <div class="body-name">头像</div>
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
        <div class="body-item">
            <div class="body-name">昵称</div>
            <el-input
                placeholder="ysycathy"
                v-model="name"
                clearable>
            </el-input>
        </div>
        <div class="body-item">
            <div class="body-name">邮箱</div>
            <el-input
                placeholder="请输入邮箱"
                v-model="email"
                clearable>
            </el-input>
        </div>
        <div class="body-item">
            <div class="body-name">手机号</div>
            <el-input
                style="margin-left:65px"
                placeholder="请输入手机号"
                v-model="telNum"
                clearable>
            </el-input>
        </div>
      <el-button style="margin-left: 380px;" size="small" type="primary">保存</el-button>
    </div>
</template>

<script>
  export default {
    name: "Information",
    data(){
      return {
        name:"ysycathy",
        telNum:"",
        email:"278097089@qq.com"
      }
    },
  }
</script>

<style lang="stylus">
    .title
        margin 20px 0
        img
            width 100%
            height 100%
    .body-item
        color #666
        width 780px
        .body-name
            float left
            padding 9px 15px
            font-weight 400
            line-height 30px
            text-align left
        .el-upload
            margin 10px 0 15px 100px
            .el-upload__tip
                display inline-block!important
                margin-left 4px
        .el-input
            width 520px
            height 38px
            margin 25px 0 25px 82px
</style>
