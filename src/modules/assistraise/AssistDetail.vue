<template>
    <div class="assist-detail">
        <div class="content-left">
            <div class="user-wrapper">
                <span class="article-title">一只可爱的英短需要帮助</span>
                <div class="about-user">
                    <img src="/static/img/head.png"  alt="">
                    <span class="user-name">管理员</span>
                    <span class="date">发表于2019-05-04 23:11:22</span>
                    <div class="count">
                        <img src="/static/img/watch.png" class="icon" alt="">
                        <span>14</span>
                        <img src="/static/img/comment.png" class="icon" alt="">
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div class="content">
                <img src="/static/img/tmp.png" width="700">
            </div>
            <div class="description-wrapper">
                <div class="title-wrapper">
                    <img src="/static/img/pencil.svg">
                    <h1 class="title">宠物描述</h1>
                </div>
                <p class="description">养不要求一定要领养，但是希望如果有能力，可以帮助一下这位个人救助流浪动的的刘姨，
                    因为她真的很不容易！狗粮、猫粮、或是力所能及的一些金钱，都可以缓解一下阿姨的情况！如果自己没有能力，
                    但是您转发一下，可以让更多人看到也是一种帮助！</p>
            </div>
            <div class="contacts-wrapper">
                <div class="title-wrapper">
                    <img src="/static/img/contacts_info.svg">
                    <h1 class="title">联系人信息</h1>
                </div>
                <div class="info-wrapper">
                    <p class="name">姓名：杨阿姨</p>
                    <p class="address">发现地址：天津市红桥区</p>
                    <p class="phone">手机号：13333333333</p>
                    <p class="email">邮箱:xxx@xxx.com</p>
                </div>
            </div>
        </div>
        <div class="content-right">
            <div class="class-title">
                所在地区
            </div>
            <div class="class-wrapper">
                <a href="javascript:;">天津</a>
                <a href="javascript:;">武汉</a>
                <a href="javascript:;">北京</a>
                <a href="javascript:;">厦门</a>
                <a href="javascript:;">深圳</a>
            </div>
            <div class="recommend-title">
                推荐阅读
            </div>
            <div class="recommend-wrapper">
                <div class="recommend">
                    <a href="javascript:;" class="title">带着宠物一起来一场露营之旅吧</a>
                    <div class="content-wrapper">
                        <div class="left">
                            <img
                                src="http://img.pconline.com.cn/images/upload/upc/tx/ladyproduct/1702/28/c1/38320174_1488264438605_medium.jpg">
                        </div>
                        <div class="right">
                            由北京雄鹰国际展览有限公司主办的第六届北京国际宠物用品展览会（简称：雄鹰京宠展）即将于3月1
                        </div>
                    </div>
                </div>
                <div class="recommend">
                    <a href="javascript:;" class="title">第六届京宠物展倒计时10天12展馆展位图</a>
                    <div class="content-wrapper">
                        <div class="left">
                            <img src="http://pq55ce8xx.bkt.clouddn.com/1db686cc-4573-4f69-b700-4e24e748da10">
                        </div>
                        <div class="right">
                            由北京雄鹰国际展览有限公司主办的第六届北京国际宠物用品展览会（简称：雄鹰京宠展）即将于3月1
                        </div>
                    </div>
                </div>
            </div>
            <div class="latest-theme-title">
                最新救助
            </div>
            <div class="latest-theme-wrapper">
                <ul>
                    <li><a href="javascript:;">嘉兴市的狗狗咕噜丢失请帮忙</a></li>
                    <li><a href="javascript:;">南京的猫咪丢失请帮忙</a></li>
                    <li><a href="javascript:;">嘉兴市的狗狗咕噜丢失请帮忙</a></li>
                    <li><a href="javascript:;">嘉兴市的狗狗咕噜丢失请帮忙</a></li>
                    <li><a href="javascript:;">嘉兴市的狗狗咕噜丢失请帮忙</a></li>
                    <li><a href="javascript:;">嘉兴市的狗狗咕噜丢失请帮忙</a></li>
                    <li><a href="javascript:;">嘉兴市的狗狗咕噜丢失请帮忙</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AssistDetail"
    }
</script>

<style lang="stylus" scoped>
    .assist-detail
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        .content-left
            width 812px
            box-sizing border-box
            padding 25px 30px 15px 30px
            background-color #fff
            .user-wrapper
                width 100%
                margin 0 20px 20px 20px
                border-bottom: 1px solid #e8e8e8
                .article-title
                    font-size 18px
                    color #414952
                .about-user
                    margin 15px 10px
                    color #9999
                    img
                        width 44px
                        height 44px
                        border-radius 50%
                    .user-name
                        padding 0 5px 0 0
                        color #979fa8
                        font-size 14px
                        font-weight bold
                    .count
                        display inline-block
                        margin-left 14px
                        span
                            margin-right 8px
                        .icon
                            width 22px
                            height 22px
                            vertical-align middle
            .description-wrapper
                .title-wrapper
                    display flex
                    align-items center
                    margin-top 24px
                    img
                        width 20px
                        height 20px
                    .title
                        margin-left 10px
                        font-size 18px
                        font-weight bold
                        color #1a1a1a
                .description
                    margin-top 10px
                    box-sizing border-box
                    padding 0 15px
                    line-height 2.5em
                    font-size 14px
                    color #666
            .contacts-wrapper
                .title-wrapper
                    display flex
                    align-items center
                    margin-top 24px
                    img
                        width 20px
                        height 20px
                    .title
                        margin-left 10px
                        font-size 18px
                        font-weight bold
                        color #1a1a1a
                .info-wrapper
                    margin-top 10px
                    box-sizing border-box
                    padding 0 15px
                    font-size 14px
                    color #666
                    p
                        line-height 2.5em
        .content-right
            width 302px
            box-sizing border-box
            padding 0 20px
            border 1px solid #e6e6e6
            background-color #fff
            overflow hidden
            .class-title
                height 50px
                border-bottom 1px solid #e8e8e8
                margin 12px 0 20px 0
                line-height 50px
                font-size 18px
                color #333333
            .class-wrapper
                display flex
                flex-wrap wrap
                padding 10px 0
                margin-bottom 15px
                a
                    padding 2px 12px
                    margin 0 10px 5px 0
                    background #555555
                    line-height 25px
                    font-size 14px
                    color #ffffff
            .recommend-title
                height 50px
                border-bottom 1px solid #e8e8e8
                margin-bottom 15px
                line-height 50px
                font-size 18px
                color #333333
            .recommend-wrapper
                padding 10px 0
                .recommend
                    width 250px
                    padding-bottom 10px
                    margin-bottom 10px
                    border-bottom 1px solid #eeeeee
                    .title
                        display block
                        padding-bottom 8px
                        line-height 20px
                        font-size 15px
                        color #444444
                    .content-wrapper
                        display flex
                        width 100%
                        .left
                            width 90px
                            height 90px
                            margin-right 10px
                            img
                                width inherit
                                height inherit
                        .right
                            line-height 24px
                            font-size 12px
                            color #8c8c8c
                            text-indent 20px
            .latest-theme-title
                height 50px
                border-bottom 1px solid #e8e8e8
                line-height 50px
                font-size 18px
                color #333333
            .latest-theme-wrapper
                padding 15px 0
                ul
                    li
                        height 40px
                        line-height 40px
                        a
                            display inline-block
                            overflow hidden
                            width 260px
                            height 40px
                            line-height 40px
                            font-size 13px
                            color #333333
                            white-space nowrap
                            text-overflow ellipsis
                        a:hover
                            text-decoration underline
</style>
