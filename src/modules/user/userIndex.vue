<template>
    <div class="center-wrapper">
        <div class="content-left">
            <div class="info-header">
                <img src="../../../static/img/head.png">
                <p>ysycathy</p>
            </div>
            <div class="info-body">
                <ul class="body-time">
                    <li>加入时间：2019-05-01 11:11:57</li>
                    <li>登录时间：2019-05-01 17:15:22</li>
                </ul>
                <ul class="body-info">
                    <li>昵称：ysycathy1</li>
                    <li>邮箱：278097089@qq.com</li>
                    <li>手机：15087709636</li>
                </ul>
            </div>
        </div>
        <div class="content-right">
            <div class="right-wrapper">
                <el-tabs type="border-card">
                    <el-tab-pane label="个人信息"><information></information></el-tab-pane>
                    <el-tab-pane label="修改密码"><user-password></user-password></el-tab-pane>
                    <el-tab-pane label="我的发布"><publication></publication></el-tab-pane>
                    <el-tab-pane label="我的消息">我的消息</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
  import information from './Information'
  import userPassword from './Password'
  import publication from './Publication'
  import message from './Message'
  export default {
    name: "userIndex",
    components:{
        information,
        userPassword,
        publication,
        message
    }
  }
</script>

<style lang="stylus">
    .center-wrapper
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        .content-left
            width 285px
            margin-right 15px
            border 1px solid #dcdfe6
            background-color #fff
            box-shadow 0 2px 4px 0 rgba(0,0,0,.12)
            .info-header
                width 285px
                height auto
                box-sizing border-box
                padding 30px 20px 20px 20px
                text-align center
                border-bottom 1px solid #f6f6f6
                color #333
                border-radius 2px 2px 0 0
                font-size 14px
                img
                    width 128px
                    height 128px
                p
                    margin 10px 0
            .info-body
                position relative
                padding 10px 15px
                line-height 24px
                ul
                    color #666
                    font-size 14px
                    border-top 1px solid #d8dde4
                    li
                        margin-bottom: 12px
                        line-height 20px
                .body-time
                    padding 20px 20px
                    border-top 0
                .body-info
                    padding 20px 20px
        .content-right
            width 855px
            background-color #fff
            box-shadow 0 2px 4px 0 rgba(0,0,0,.12)
            .right-wrapper
                padding 30px 10px 10px 30px
                
</style>
