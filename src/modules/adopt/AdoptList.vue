<template>
    <div class="adopt-list">
        <div class="content-left">
            <el-menu default-active="1" class="el-menu-demo" mode="horizontal" text-color="#555">
                <el-menu-item index="1">全部</el-menu-item>
                <el-menu-item index="2">狗</el-menu-item>
                <el-menu-item index="3">猫</el-menu-item>
                <el-menu-item index="4">爬行</el-menu-item>
                <el-menu-item index="5">昆虫</el-menu-item>
            </el-menu>
            <div class="notice">
                <img src="/static/img/ann_icon.gif">
                <span>公告：</span>
                <span>宠物领养网提示您,注意有骗子以运费为名，骗取大家钱财!</span>
            </div>
            <div class="list">
                <div class="list-item">
                    <div class="img-wrapper">
                        <img src="/static/img/noavatar_small.gif">
                    </div>
                    <div class="content-wrapper">
                        <h1 class="title">举报！昌吉路的基地是骗子，大家别上当，别捐钱</h1>
                        <p class="info">
                            楼主：
                            <span class="landlord">Joyce君</span>
                            <span class="date">2019-5-9</span>
                            <span class="vertical-line">|</span>
                            最后发表：
                            <span class="last-published">阿苏 2019-5-9 13:14</span>
                        </p>
                    </div>
                </div>
                <div class="list-item">
                    <div class="img-wrapper">
                        <img src="/static/img/noavatar_small.gif">
                    </div>
                    <div class="content-wrapper">
                        <h1 class="title">举报！昌吉路的基地是骗子，大家别上当，别捐钱</h1>
                        <p class="info">
                            楼主：
                            <span class="landlord">Joyce君</span>
                            <span class="date">2019-5-9</span>
                            <span class="vertical-line">|</span>
                            最后发表：
                            <span class="last-published">阿苏 2019-5-9 13:14</span>
                        </p>
                    </div>
                </div>
                <div class="list-item">
                    <div class="img-wrapper">
                        <img src="/static/img/noavatar_small.gif">
                    </div>
                    <div class="content-wrapper">
                        <h1 class="title">举报！昌吉路的基地是骗子，大家别上当，别捐钱</h1>
                        <p class="info">
                            楼主：
                            <span class="landlord">Joyce君</span>
                            <span class="date">2019-5-9</span>
                            <span class="vertical-line">|</span>
                            最后发表：
                            <span class="last-published">阿苏 2019-5-9 13:14</span>
                        </p>
                    </div>
                </div>
                <div class="list-item">
                    <div class="img-wrapper">
                        <img src="/static/img/noavatar_small.gif">
                    </div>
                    <div class="content-wrapper">
                        <h1 class="title">举报！昌吉路的基地是骗子，大家别上当，别捐钱</h1>
                        <p class="info">
                            楼主：
                            <span class="landlord">Joyce君</span>
                            <span class="date">2019-5-9</span>
                            <span class="vertical-line">|</span>
                            最后发表：
                            <span class="last-published">阿苏 2019-5-9 13:14</span>
                        </p>
                    </div>
                </div>
                <div class="list-item">
                    <div class="img-wrapper">
                        <img src="/static/img/noavatar_small.gif">
                    </div>
                    <div class="content-wrapper">
                        <h1 class="title">举报！昌吉路的基地是骗子，大家别上当，别捐钱</h1>
                        <p class="info">
                            楼主：
                            <span class="landlord">Joyce君</span>
                            <span class="date">2019-5-9</span>
                            <span class="vertical-line">|</span>
                            最后发表：
                            <span class="last-published">阿苏 2019-5-9 13:14</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="pagination-wrapper">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
        <div class="content-right"></div>
    </div>
</template>

<script>
    export default {
        name: "AdoptList",
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    .adopt-list
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        .content-left
            width 817px
            box-sizing border-box
            border 1px solid #e6e6e6
            padding 20px
            background-color #fff
            .el-menu
                border-bottom none
            .notice
                width 100%
                margin-top 20px
                font-size 14px
                color #363636
                img
                    vertical-align middle
                span
                    vertical-align middle
                    &:nth-child(3)
                        color #ff0000
            .list
                .list-item
                    display flex
                    width 100%
                    box-sizing border-box
                    border-bottom 1px solid #e6e6e6
                    padding 16px 0
                    .img-wrapper
                        width 44px
                        height 44px
                        img
                            width inherit
                            height inherit
                            border-radius 50%
                    .content-wrapper
                        box-sizing border-box
                        padding-left 20px
                        .title
                            font-size 16px
                            color #888
                        .info
                            margin-top 12px
                            font-size 12px
                            color #c0c0c0
            .pagination-wrapper
                margin-top 25px
        .content-right
            width 302px
            box-sizing border-box
            border 1px solid #e6e6e6
            background-color #fff
</style>
