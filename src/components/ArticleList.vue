<template>
    <div class="article-list">
        <div class="content-left">
            <div class="article-wrapper">
                <article class="article" v-for="article in content.list" :key="article.articleId">
                    <div class="img-wrapper">
                        <img :src="article.mainImage">
                    </div>
                    <div class="content-wrapper">
                        <router-link :to="{path: '/article/' + article.articleId}" target="_blank" class="title">{{article.title}}</router-link>
                        <p class="meta">
                            <span class="meta-class">{{article.animalCategory.categoryName}}</span>
                            <span class="meta-date">{{article.createTime}}</span>
                        </p>
                        <p class="description">{{article.description}}</p>
                    </div>
                </article>
            </div>
            <div class="pagination-wrapper" v-if="content.page">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="content.page.totalElements"
                    :current-page="content.page.number"
                    @current-change="pageChange">
                </el-pagination>
            </div>
        </div>
        <div class="content-right">
            <div class="class-title">
                下级分类
            </div>
            <div class="class-wrapper">
                <a href="javascript:;" v-for="animalCategory in animalCategoryList" @click="changeAnimalCategory(animalCategory.categoryName)">{{animalCategory.categoryName}}</a>
            </div>
            <div class="recommend-title">
                推荐阅读
            </div>
            <div class="recommend-wrapper">
                <div class="recommend">
                    <a href="javascript:;" class="title">带着宠物一起来一场露营之旅吧</a>
                    <div class="content-wrapper">
                        <div class="left">
                            <img src="http://www.petly.net/data/attachment/common/a5/common_38_icon.png">
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
                            <img src="http://www.petly.net/data/attachment/common/a5/common_38_icon.png">
                        </div>
                        <div class="right">
                            由北京雄鹰国际展览有限公司主办的第六届北京国际宠物用品展览会（简称：雄鹰京宠展）即将于3月1
                        </div>
                    </div>
                </div>
            </div>
            <div class="latest-theme-title">
                最新主题
            </div>
            <div class="latest-theme-wrapper">
                <ul>
                    <li><a href="javascript:;">真心想领养一只狗</a></li>
                    <li><a href="javascript:;">真心想领养一只狗</a></li>
                    <li><a href="javascript:;">真心想领养一只狗</a></li>
                    <li><a href="javascript:;">真心想领养一只狗</a></li>
                    <li><a href="javascript:;">真心想领养一只狗</a></li>
                    <li><a href="javascript:;">真心想领养一只狗</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations,mapGetters} from 'vuex';

    export default {
        name: "ArticleList",
        props: {
            content: {
                type: Object
            }
        },
        methods: {
            ...mapMutations(['initAnimalCategoryList']),
            _initAnimalCategoryList() {
                this.$axios.get('/petadopt/member/article/animalCategoryList').then((res) => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.initAnimalCategoryList(data.data);
                    } else {
                        this.$notify({
                            title: '警告',
                            message: data.message,
                            type: 'error'
                        });
                    }
                });
            },
            pageChange(val) {
                this.$emit('current-change', val);
            },
            changeAnimalCategory(categoryName) {
                this.$emit('changeAnimalCategory', categoryName);
            }
        },
        computed: {
            ...mapGetters({
                animalCategoryList: 'getAnimalCategoryList'
            })
        },
        created() {
            this._initAnimalCategoryList();
        }
    }
</script>

<style lang="stylus" scoped>
    .article-list
        display flex
        justify-content space-between
        width 100%
        margin-bottom 40px
        .content-left
            width 812px
            box-sizing border-box
            padding 15px 0 0 0
            border 1px solid #e6e6e6
            background-color #fff
            .article-wrapper
                width 100%
                box-sizing border-box
                padding 10px 20px
                .article
                    display flex
                    justify-content space-between
                    width 100%
                    padding-bottom 25px
                    border-bottom 1px solid #eeeeee
                    margin-bottom 25px
                    .img-wrapper
                        width 265px
                        height 170px
                        img
                            width inherit
                            height inherit
                    .content-wrapper
                        width 485px
                        .title
                            margin-bottom 10px
                            line-height 25px
                            font-weight 600
                            font-size 18px
                            color #444444
                        .meta
                            margin 10px 0
                            line-height 26px
                            font-size 0
                            color #afafaf
                            .meta-class
                                margin-right 13px
                                font-size 14px
                            .meta-date
                                font-size 14px
                        .description
                            height 92px
                            overflow hidden
                            line-height 22px
                            font-size 12px
                            color #777777
            .pagination-wrapper
                width 100%
                margin 10px 0 30px 0
                text-align center
                .el-pagination
                    display inline-block
        .content-right
            width 302px
            box-sizing border-box
            padding 0 20px
            border 1px solid #e6e6e6
            background-color #fff
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
