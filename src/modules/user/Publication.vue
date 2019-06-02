<template>
    <div class="wrapper">
        <div class="title-name">
            <p><img src="../../../static/img/title.png" alt="">标题</p>
            <p><img src="../../../static/img/diqu.png" alt="">所属地区</p>
            <p><img src="../../../static/img/time.png" alt="">发布时间</p>
            <p><img src="../../../static/img/time.png" alt="">操作</p>
        </div>
        <div v-for="adopt in adoptData.adoptList">
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    {{adopt.title}}
                </p>
                <p>{{adopt.region.regionName}}</p>
                <p>{{adopt.createTime}}</p>
                <p>
                    <el-button type="info" size="mini" @click="deleteAdopt(adopt.adoptId)">删除</el-button>
                </p>
            </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="6"
            :total="adoptData.page.totalElements"
            v-if="adoptData.page"
            @current-change="pageChange"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Publication",
        data() {
            return {
                adoptData: {},
                pageNum: 1
            }
        },
        methods: {
            _initAdoptData() {
                this.$axios.get(`/petadopt/member/adopt/adoptListByMember?pageNum=${this.pageNum}`).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.adoptData = data.data;
                    }
                })
            },
            pageChange(val) {
                this.pageNum = val;
                this._initAdoptData();
            },
            deleteAdopt(adoptId) {
                this.$axios.get(`/petadopt/member/adopt/deleteAdopt?adoptId=${adoptId}`).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this._initAdoptData();
                    } else {
                        alert(data.message);
                    }
                })
            }
        },
        created() {
            this._initAdoptData();
        }
    }
</script>

<style lang="stylus">
    .wrapper
        width 100%
        padding 15px 0
        .title-name
            display flex
            justify-content space-around
            font-size 14px
            color #666
            border-bottom 1px solid #d8dde4
            p
                display inline-block
                img
                    width 18px
                    margin-right 4px
        .publication-content
            height 60px
            display flex
            justify-content space-around
            align-items center
            font-size 15px
            color #333
            border-bottom 1px solid #d8dde48c
        .el-pagination
            margin 26px 0 8px 0
            text-align center
</style>
