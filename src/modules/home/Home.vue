<template>
    <div class="home">
        <div class="content-wrapper">
            <div class="content-left">
                <el-carousel :interval="4000" type="card" height="300px">
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201608/24/052141lhk88z7tu8trcv89.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201606/21/080635t2whu39i99w32wz6.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201606/21/080144aqbe4yt6qqww2qqo.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201605/15/225124hs99hjtcpnp9th55.jpg">
                    </el-carousel-item>
                </el-carousel>
                <div class="tips">
                    <h4><span class="yel">最新</span><span class="gra">救助</span></h4>
                    <div class="tips-count" v-if="assistAdvert.length >= 4">共计<strong style="color:#ffd04b;">4</strong>篇
                        <em></em></div>
                    <div class="tips-count" v-else>共计<strong style="color:#ffd04b;">{{assistAdvert.length}}</strong>篇
                        <em></em></div>
                </div>
                <div class="list">
                    <div class="list-item" v-for="item in assistAdvert">
                        <div class="img-wrapper">
                            <img :src="item.mainImage">
                        </div>
                        <div class="info-wrapper">
                            <router-link :to="{path: '/article/' + item.articleId}" class="title">{{item.title}}</router-link>
                            <p class="publisher">发布人：{{item.user.userInfo.nickname}}</p>
                            <p class="description">{{item.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <div class="latest-title">
                    最新知识
                </div>
                <div class="latest-theme-wrapper" v-if="knowledgeAdvert.length">
                    <div class="img-info">
                        <div class="info-detail">
                            <img :src="knowledgeAdvert[0].mainImage" alt="">
                            <p><router-link :to="{path: '/article/' + knowledgeAdvert[0].articleId}" class="title">{{knowledgeAdvert[0].title}}</router-link></p>
                        </div>
                        <div class="info-detail">
                            <img :src="knowledgeAdvert[1].mainImage" alt="">
                            <p><router-link :to="{path: '/article/' + knowledgeAdvert[1].articleId}" class="title">{{knowledgeAdvert[1].title}}</router-link></p>
                        </div>
                    </div>
                    <ul>
                        <li><router-link :to="{path: '/article/' + knowledgeAdvert[2].articleId}">{{knowledgeAdvert[2].title}}</router-link></li>
                        <li><router-link :to="{path: '/article/' + knowledgeAdvert[3].articleId}">{{knowledgeAdvert[3].title}}</router-link></li>
                        <li><router-link :to="{path: '/article/' + knowledgeAdvert[4].articleId}">{{knowledgeAdvert[4].title}}</router-link></li>
                    </ul>
                </div>
                <div class="latest-title">
                    最新百科
                </div>
                <div class="latest-theme-wrapper" v-if="encyclopediasAdvert.length">
                    <div class="img-info">
                        <div class="info-detail">
                            <img :src="encyclopediasAdvert[0].mainImage" alt="">
                            <p><router-link :to="{path: '/article/' + encyclopediasAdvert[0].articleId}" class="title">{{encyclopediasAdvert[0].title}}</router-link></p>
                        </div>
                        <div class="info-detail">
                            <img :src="encyclopediasAdvert[1].mainImage" alt="">
                            <p><router-link :to="{path: '/article/' + encyclopediasAdvert[1].articleId}" class="title">{{encyclopediasAdvert[1].title}}</router-link></p>
                        </div>
                    </div>
                    <ul>
                        <li><router-link :to="{path: '/article/' + encyclopediasAdvert[2].articleId}">{{encyclopediasAdvert[2].title}}</router-link></li>
                        <li><router-link :to="{path: '/article/' + encyclopediasAdvert[3].articleId}">{{encyclopediasAdvert[3].title}}</router-link></li>
                        <li><router-link :to="{path: '/article/' + encyclopediasAdvert[4].articleId}">{{encyclopediasAdvert[4].title}}</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                assistAdvert: [],
                knowledgeAdvert: [],
                encyclopediasAdvert: []
            }
        },
        methods: {
            _initAdvert() {
                this.$axios.get('/petadopt/member/advert/assistAdvert').then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        if (data.data.length > 4) {
                            this.assistAdvert = data.data.slice(0, 4);
                        } else {
                            this.assistAdvert = data.data;
                        }
                    }
                });
                this.$axios.get('/petadopt/member/advert/knowledgeAdvert').then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        if (data.data.length > 4) {
                            this.knowledgeAdvert = data.data.slice(0, 5);
                        } else {
                            this.knowledgeAdvert = data.data;
                        }
                    }
                });
                this.$axios.get('/petadopt/member/advert/encyclopediasAdvert').then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        if (data.data.length > 4) {
                            this.encyclopediasAdvert = data.data.slice(0, 5);
                        } else {
                            this.encyclopediasAdvert = data.data;
                        }
                    }
                });
            }
        },
        created() {
            this._initAdvert();
        }
    }
</script>

<style lang="stylus" scoped>
    .home
        width 100%
        margin-top 20px
        .content-wrapper
            display flex
            justify-content space-between
            width 1140px
            margin 0 auto
            box-sizing border-box
            padding 20px 20px 30px 20px
            /*background-color #fff*/
            .content-left
                width 788px
                border 1px solid #e6e6e6
                background-color #fff
                .el-carousel__item h3
                    color #475669
                    font-size 14px
                    opacity 0.75
                    line-height 200px
                    margin 0
                .el-carousel__item:nth-child(2n)
                    background-color #99a9bf
                .el-carousel__item:nth-child(2n+1)
                    background-color #d3dce6
                .el-carousel__item
                    img
                        width 100%
                        height 100%
                .tips
                    display flex
                    justify-content space-between
                    height: 37px
                    margin 20px 0
                    border-bottom: solid 2px #D6D6D6
                    line-height: 37px
                    h4
                        font-size 28px
                        font-weight bold
                        line-height 1
                        padding-bottom 9px
                        border-bottom solid 2px #666666
                        .yel
                            color #ffd04b
                    .tips-count
                        background #F2F2F2
                        padding 0 10px
                        color #333
                        font-size 18px
                        margin-right 8px
                .list
                    .list-item
                        display flex
                        justify-content space-between
                        padding-bottom 25px
                        margin-bottom 25px
                        border-bottom 1px solid #eee
                        .img-wrapper
                            width 265px
                            height 170px
                            img
                                width inherit
                                height inherit
                        .info-wrapper
                            width 485px
                            .title
                                line-height 25px
                                font-weight 600
                                font-size 18px
                                color #444
                            .publisher
                                margin-top 10px
                                line-height 26px
                                font-size 14px
                                color #afafaf
                            .description
                                height 98px
                                overflow hidden
                                margin-top 10px
                                line-height 22px
                                font-size 12px
                                color #777
            .content-right
                width 302px
                /*max-height 656px*/
                box-sizing border-box
                padding 0 20px
                border 1px solid #e6e6e6
                background-color #fff
                .show
                    width 260px
                    height 180px
                    img
                        width 100%
                        height 100%
                .latest-title
                    height: 50px
                    border-bottom 1px solid #e8e8e8
                    margin-bottom 15px
                    line-height 50px
                    font-size 18px
                    color #333
                .latest-theme-wrapper
                    .img-info
                        display flex
                        justify-content space-between
                        .info-detail
                            width 140px
                            margin-bottom 10px
                            img
                                width 110px
                                height 110px
                                &:hover
                                    cursor pointer
                            a
                                font-size 13px
                                color #333333
                                &:hover
                                    color #409EFF
                    li
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
                            &:hover
                                color #409EFF
                                text-decoration underline
</style>
