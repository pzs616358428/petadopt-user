<template>
    <div>
        <!--<div class="title">
            <img src="../../../static/img/message.png" alt="">
        </div>-->
        <!--<div class="body-item">
            <div class="body-name">头像</div>
            <el-upload
                class="upload-demo"
                :file-list="updateMember.fileList"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>-->
        <div class="body-item">
            <div class="body-name">昵称</div>
            <el-input
                placeholder="ysycathy"
                v-model="updateMember.memberInfo.nickname"
                clearable>
            </el-input>
        </div>
        <div class="body-item">
            <div class="body-name">邮箱</div>
            <el-input
                placeholder="请输入邮箱"
                v-model="updateMember.memberInfo.email"
                clearable>
            </el-input>
        </div>
        <div class="body-item">
            <div class="body-name">手机号</div>
            <el-input
                style="margin-left:65px"
                placeholder="请输入手机号"
                v-model="updateMember.memberInfo.phone"
                clearable>
            </el-input>
        </div>
        <el-button style="margin-left: 380px;" size="small" type="primary" @click="save">保存</el-button>
    </div>
</template>

<script>
    export default {
        name: "Information",
        props: {
            member: {
                type: Object
            }
        },
        data() {
            return {
                updateMember: {}
            }
        },
        methods: {
            save() {
                /*console.log(this.updateMember.memberInfo.nickname);
                console.log(this.updateMember.memberInfo.email);
                console.log(this.updateMember.memberInfo.phone);*/
                this.$emit('changeInfo', this.updateMember);
            }
        },
        created() {
            this.updateMember = this.$props.member;
        }
    }
</script>

<style lang="stylus">
    .title
        margin 20px 0
        img
            width 100%
            height 100%
    
    .body-item
        display flex
        align-items: center
        color #666
        width 780px
        overflow hidden
        .body-name
            float left
            padding 9px 15px
            font-weight 400
            line-height 30px
            text-align left
        .el-upload
            margin 10px 0 15px 100px
        .el-upload-list
            float left
            width 200px
            margin-left 62px
            .el-upload-list__item
                width 80%
                margin 0 auto
        .el-input
            width 520px
            height 38px
            margin 25px 0 25px 82px
</style>
