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
            </div>
            <div class="content-wrapper">
                <span style="font-size: 14px;color: #515151;">
                    奶白色，2岁，公，限天津地区，免费
                    要求以后可以看狗
                    送110X70的狗笼子和一袋狗粮（40斤）
                    留微信联系方式，我加你
                </span>
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
        name: "AdoptDetail"
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
            .content-wrapper
                box-sizing border-box
                padding 30px 0
                border-bottom 1px solid #e6e6e6
            .comment
                margin-top 30px
        .content-right
            width 302px
            box-sizing border-box
            border 1px solid #e6e6e6
            background-color #fff
</style>
