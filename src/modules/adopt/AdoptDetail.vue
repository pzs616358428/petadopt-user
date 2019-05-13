<template>
    <div class="adopt-detail">
        <div class="content-left">
            <h1 class="title">猫 --- 想领养一只猫--北京通州</h1>
            <div class="info-wrapper">
                <div class="img-wrapper">
                    <img src="/static/img/noavatar_small.gif">
                </div>
                <img src="/static/img/ico_see.png" class="watch-img">
                <span class="watch-count">1444</span>
                <img src="/static/img/ico_reply.png" class="comment-img">
                <span class="comment-count">2344</span>
                <a href="javascript:;" class="member-name">会飞的鱼</a>
                发表于
                <span class="date">2019-05-11 14:03</span>
                <el-button type="warning" plain>申请领养</el-button>
            </div>
            <div class="content-wrapper">
                <p style="font-size: 14px;color: #515151;">
                    奶白色，2岁，公，限天津地区，免费
                    要求以后可以看狗。送110X70的狗笼子和一袋狗粮（40斤），有需要的申请领养，
                    有问题可在留言区与我沟通
                </p>
                <div>
                    <p class="process">领养流程</p>
                    <img src="../../../static/img/process.jpeg">
                </div>
            </div>
            <div class="comment">
                <img src="/static/img/comment-tmp.png">
            </div>
        </div>
        <div class="content-right"></div>
    </div>
</template>

<script>
    export default {
        name: "AdoptDetail",
        data() {
            return {
                textarea: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .adopt-detail
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        .content-left
            width 817px
            box-sizing border-box
            padding 20px
            border 1px solid #e6e6e6
            background-color #fff
            .title
                font-size 18px
                color #363636
            .info-wrapper
                display flex
                align-items center
                margin-top 10px
                font-size 14px
                color #999
                .img-wrapper
                    width 44px
                    height 44px
                    img
                        width inherit
                        height inherit
                        border-radius 50%
                .watch-img
                    width 18px
                    height 18px
                    margin-left 10px
                .watch-count
                    margin-left 10px
                .comment-img
                    width 18px
                    height 18px
                    margin-left 10px
                .comment-count
                    margin-left 10px
                .member-name
                    margin 0 10px
                    font-size 14px
                    font-weight bold
                    color #555
                .date
                    margin-left 5px
                .el-button--warning
                    position relative
                    left 200px
                    color #795548de
                    background #9e9e9e21
                    border-color #9e9e9e40
                    &:hover
                        background-color #d2d2d2
            .content-wrapper
                box-sizing border-box
                padding 30px 0
                .process
                    font-size: 16px
                    line-height: 1.5em
                    padding-left: 30px
                    font-weight normal
                    color #333
                    margin 40px 0px
                    background url("../../../static/img/icon.png") no-repeat left center
                    border-top 1px solid #e6e6e6
                    .icon
                        margin-right 4px
            .comment
                margin-top 30px
        .content-right
            width 302px
            box-sizing border-box
            border 1px solid #e6e6e6
            background-color #fff
</style>
