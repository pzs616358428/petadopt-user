<template>
    <div class="knowledge">
        <div class="article-list-wrapper">
            <article-list :content="knowledgeContent" @current-change="pageChange" @changeAnimalCategory="changeAnimalCategory"></article-list>
        </div>
    </div>
</template>

<script>
    import ArticleList from '../../components/ArticleList';
    import {mapMutations, mapGetters} from 'vuex';

    export default {
        name: "Knowledge",
        data() {
            return {
                animalCategoryName: ''
            }
        },
        methods: {
            ...mapMutations(['updateKnowledgeContent']),
            _initKnowledgeContent(pageNum = 1) {
                if (this.animalCategoryName) {
                    // 加载知识文章数据
                    this.$axios.get(`/petadopt/member/article/articleList?articleCategoryName=知识&pageNum=${pageNum}&animalCategoryName=${this.animalCategoryName}`).then((res) => {
                        const data = res.data;
                        if (data.status == 0) {
                            // 调用方法将值设置到vuex上
                            this.updateKnowledgeContent(data.data);
                        } else {
                            this.$notify({
                                title: '警告',
                                message: data.message,
                                type: 'error'
                            });
                        }
                    });
                } else {
                    // 加载知识文章数据
                    this.$axios.get(`/petadopt/member/article/articleList?articleCategoryName=知识&pageNum=${pageNum}`).then((res) => {
                        const data = res.data;
                        if (data.status == 0) {
                            // 调用方法将值设置到vuex上
                            this.updateKnowledgeContent(data.data);
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
            pageChange(val) {
                this._initKnowledgeContent(val);
            },
            changeAnimalCategory(categoryName) {
                if (this.animalCategoryName != categoryName) {
                    this.animalCategoryName = categoryName;
                    this._initKnowledgeContent();
                }
            }
        },
        computed: {
            ...mapGetters({
                knowledgeContent: 'getKnowledgeContent'
            })
        },
        components: {
            ArticleList
        },
        created() {
            this._initKnowledgeContent();
        }
    }
</script>

<style lang="stylus" scoped>
    .knowledge
        width 100%
        margin-top 30px
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
