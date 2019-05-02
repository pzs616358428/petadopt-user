<template>
    <div class="encyclopedias">
        <h1 class="title">
            百科
        </h1>
        <div class="article-list-wrapper">
            <article-list></article-list>
        </div>
    </div>
</template>

<script>
    import ArticleList from '../../components/ArticleList';

    export default {
        name: "Encyclopedias",
        data() {
            return {}
        },
        components: {
            ArticleList
        }
    }
</script>

<style lang="stylus" scoped>
    .encyclopedias
        width 100%
        .title
            width 1140px
            height 50px
            margin 12px auto
            line-height 50px
            font-size 26px
            color #666666
        .article-list-wrapper
            width 1140px
            margin 0 auto
</style>
