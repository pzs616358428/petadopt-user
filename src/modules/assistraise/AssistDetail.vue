<template>
    <div class="assist-detail">
        <div class="content-left">
            <div class="content">
                <img src="/static/img/tmp.png" width="700">
            </div>
            <div class="info-wrapper">
                <span class="title">一只可爱的英短需要帮助</span>
                <span class="date">发布时间：2019-05-04</span>
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
        <div class="content-right"></div>
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
            &>.info-wrapper
                width 100%
                margin-top 20px
                font-size 12px
                color #888
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
                    line-height 20px
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
                        line-height 20px
        .content-right
            width 302px
            box-sizing border-box
            background-color #fff
</style>
