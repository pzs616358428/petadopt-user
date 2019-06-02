<template>
    <div class="adopt-list">
        <div class="content-left">
            <el-menu default-active="0" class="el-menu-demo" mode="horizontal" text-color="#555" @select="animalCategoryChange">
                <el-menu-item index="0">全部</el-menu-item>
                <el-menu-item :index="item.animalCategoryId.toString()" v-for="item in animalCategoryList" :key="item.animalCategoryId">{{item.categoryName}}</el-menu-item>
            </el-menu>
            <div class="notice">
                <img src="/static/img/ann_icon.gif">
                <span>公告：</span>
                <span>宠物领养网提示您,注意有骗子以运费为名，骗取大家钱财!</span>
            </div>
            <div class="list">
                <div class="list-item" v-for="adopt in adoptData.adoptList">
                    <div class="img-wrapper">
                        <img v-if="adopt.member.memberInfo.headImage" :src="adopt.member.memberInfo.headImage" >
                        <img v-else src="/static/img/noavatar_small.gif"/>
                    </div>
                    <div class="content-wrapper">
                        <router-link :to="{path: '/adopt-detail/' + adopt.adoptId}" class="title">{{adopt.title}}</router-link>
                        <p class="info">
                            楼主：
                            <span class="landlord">{{adopt.member.memberInfo.nickname}}</span>
                            <span class="date">{{adopt.createTime}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="pagination-wrapper" v-if="adoptData.page">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="adoptData.page.totalElements"
                    @current-change="pageChange"
                >
                </el-pagination>
            </div>
        </div>
        <div class="content-right">
            <el-button type="info" @click="createAdopt">发布新帖</el-button>
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
    </div>
</template>

<script>
    export default {
        name: "AdoptList",
        data() {
            return {
                regionId: '',
                pageNum: 1,
                adoptData: [],
                animalCategoryList: [],
                animalCategoryId: '0'
            }
        },
        methods: {
            createAdopt() {
                this.$router.push({path: `/create-adopt?regionId=${this.regionId}`})
            },
            _initAdoptData() {
                let path = '/petadopt/member/adopt/adoptList';
                path += '?regionId=' + this.regionId;
                path += '&pageNum=' + this.pageNum;
                if (this.animalCategoryId != '0') {
                    path += '&animalCategoryId=' + this.animalCategoryId;
                }
                this.$axios.get(path).then(res => {
                    let data = res.data;
                    if (data.status == 0) {
                        this.adoptData = data.data;
                    } else {
                        alert(data.message);
                    }
                })
            },
            _initAnimalCategoryList() {
                this.$axios.get('/petadopt/member/article/animalCategoryList').then((res) => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.animalCategoryList = data.data;
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
                this.pageNum = val;
                this._initAdoptData();
            },
            animalCategoryChange(index) {
                this.animalCategoryId = index;
                this._initAdoptData();
            }
        },
        created() {
            // 获取地区id
            this.regionId = this.$route.params.regionId;
            this._initAdoptData();
            this._initAnimalCategoryList();
        }
    }
</script>

<style lang="stylus" scoped>
    .adopt-list
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        padding-bottom 60px
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
            padding 20px
            border 1px solid #e6e6e6
            background-color #fff
            .el-button
                display block
                width 100%
                border-radius 0
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
