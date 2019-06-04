<template>
    <article class="article">
        <div class="content-left" v-if="article.articleId">
            <h1 class="title">{{article.title}}</h1>
            <div class="info-wrapper">
                <span class="create-time">{{article.createTime}}</span>
                <span class="vertical-line">|</span>
                <span class="user">发布者：{{article.user.username}}</span>
            </div>
            <div class="count-wrapper">
                <span>共有{{article.watchCount}}人围观</span>
                <span>{{article.commentCount}}条评论</span>
            </div>
            <div class="content-wrapper" v-html="article.content"></div>
        </div>
        <div class="content-right">
            <div class="class-wrapper">
                <div class="show">
                    <a href="http://www.cpse-expo.com" target="_blank">
                        <img src="../../../static/img/show.jpg">
                    </a>
                </div>
            </div>
            <div class="latest-title">
                最新主题
            </div>
            <div class="latest-theme-wrapper">
                <div class="img-info">
                    <div class="info-detail">
                        <img src="http://www.petly.net/data/attachment/common/a5/common_38_icon.png" alt="">
                        <p><a href="#">4个月小白猫</a></p>
                    </div>
                    <div class="info-detail">
                        <img
                            src="https://pet-1254154566.cos.ap-chengdu.myqcloud.com/23a5fba5-4ce0-48bb-9305-e28e21e74a18.jpg"
                            alt="">
                        <p><a href="#">一岁半萨摩耶寻主</a></p>
                    </div>
                </div>
                <ul>
                    <li><a href="javascript:;">（上海徐汇区）家里的母猫生了4只小猫希望</a></li>
                    <li><a href="javascript:;">免费领养4年法斗</a></li>
                    <li><a href="javascript:;">4个月金毛 好心人领养</a></li>
                </ul>
            </div>
            <div class="latest-title">
                领养推荐
            </div>
            <div class="latest-theme-wrapper">
                <ul>
                    <li><a href="javascript:;">浦东陆家嘴附近猫咪领养</a></li>
                    <li><a href="javascript:;">4年雪橇犬</a></li>
                    <li><a href="javascript:;">6个月阿拉斯加 好心人领养</a></li>
                    <li><a href="javascript:;">上海虹桥附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京西红门附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京大兴附近猫咪领养</a></li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "Article",
        data() {
            return {
                articleId: 0,
                article: {}
            }
        },
        methods: {
            _initArticleDetail() {
                this.$axios.get(`/petadopt/member/article/articleDetail?articleId=${this.articleId}`).then((res) => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.article = data.data;
                    } else {
                        this.$notify({
                            title: '警告',
                            message: data.message,
                            type: 'error'
                        });
                    }
                });
            }
        },
        created() {
            this.articleId = this.$route.params.articleId;
            this._initArticleDetail();
        }
    }
</script>

<style lang="stylus" scoped>
    .article
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        .content-left
            width 812px
            box-sizing border-box
            padding 25px 30px 15px 30px
            border 1px solid #e6e6e6
            background-color #fff
            .title
                padding 5px 0 20px 0
                font-size 30px
                color #1a1a1a
            .info-wrapper
                height 22px
                padding-bottom 15px
                border-bottom 1px dotted #d8d8d8
                line-height 22px
                font-size 0
                .create-time
                    font-size 12px
                    color #888888
                .vertical-line
                    margin 0 5px
                    font-size 12px
                    color #ccc
                .user
                    font-size 12px
                    color #888888
            .count-wrapper
                padding 24px 0
                span
                    padding 4px 12px
                    background-color #9f9f9f
                    font-size 12px
                    color #fff
        .content-right
            width 302px
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
            .class-wrapper
                display flex
                flex-wrap wrap
                padding 10px 0
                margin-bottom 15px
            .latest-theme-wrapper
                .img-info
                    display flex
                    justify-content space-between
                    .info-detail
                        width 140px
                        margin-bottom 10px
                        img
                            width 110px
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
