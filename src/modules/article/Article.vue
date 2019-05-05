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
        <div class="content-right"></div>
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
        margin 25px auto 0
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
</style>
