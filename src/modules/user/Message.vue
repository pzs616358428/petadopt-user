<template>
    <ul>
        <li class="order-item" v-for="item in messages">
            <div class="item-title">
                <p>申请编号:<span class="detail">{{item.applyId}}</span></p>
                <p>申请时间:<span class="detail">{{item.createTime}}</span></p>
                <p>申请状态:
                    <span class="detail" v-if="item.applyStatus == 0">申请中</span>
                    <span class="detail" v-else-if="item.applyStatus == 1">已通过</span>
                    <span class="detail" v-else>已拒绝</span>
                </p>
                <p>联系电话:<span class="detail">{{item.applyPhone}}</span></p>
            </div>
            <div class="item-main">
                <div class="left">
                    <p class="left-item">主题帖 :
                        <router-link to="/user-center" class="title">{{item.adopt.title}}</router-link>
                    </p>
                    <p class="left-item">申请人 :<span>{{item.applyPerson}}</span></p>
                    <p class="left-item">申请原因 :<span>{{item.applyReason}}</span></p>
                </div>
                <p class="right" v-if="item.applyStatus == 0">
                    <span class="review" @click="pass(item.applyId)">通过申请</span>
                    <span class="review" @click="refuse(item.applyId)">拒绝申请</span>
                </p>
                <p class="right" v-else-if="item.applyStatus == 1">
                    <span class="review">已通过</span>
                </p>
                <p class="right" v-else>
                    <span class="review">已拒绝</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                messages: []
            }
        },
        methods: {
            _initMessages() {
                this.$axios.get('/petadopt/member/adopt/applyList').then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.messages = data.data;
                    }
                })
            },
            pass(applyId) {
                this.$axios.get(`/petadopt/member/adopt/changeApplyStatus?applyId=${applyId}&status=1`).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this._initMessages();
                    }
                })
            },
            refuse(applyId) {
                this.$axios.get(`/petadopt/member/adopt/changeApplyStatus?applyId=${applyId}&status=2`).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this._initMessages();
                    }
                })
            }
        },
        created() {
            this._initMessages();
        }
    }
</script>

<style lang="stylus" scoped>
    .order-item
        height 194px
        margin 12px 0 18px 0
        border 1px solid #dcdcdc
        box-sizing border-box
        transition all 0.35s
        &:hover
            box-shadow: 0px 0px 24px 2px #d3d3d3;
        .item-title
            position relative
            height 46px
            font-size 12px
            color #939393
            padding 18px 0 12px 20px
            border-bottom 1px solid #dcdcdc
            box-sizing border-box
            p
                display inline-block
                margin-right 30px
                .detail
                    color #444444
                    margin-left 12px
        .item-main
            display inline-flex
            padding 22px 40px 27px 34px
            .left
                position relative
                width 593px
                height 100px
                background-color #f6f6f6
                margin-right 20px
                padding 12px 0 12px 18px
                font-size 14px
                box-sizing border-box
                .left-item
                    margin-bottom 14px
                    color #9c9c9c
                    span
                        position absolute
                        width 500px
                        left 90px
                        color #444444
                        text-overflow ellipsis
                        overflow hidden
                        white-space nowrap
                    .title
                        margin-left 20px
                        color #409EFF
                        cursor pointer
            .right
                width 90px
                margin 16px 0
                span
                    display block
                    width 82px
                    height 30px
                    font-size 14px
                    text-align center
                    border-radius 4px
                    padding-top 6px
                    margin-bottom 12px
                    box-sizing border-box
                    cursor pointer
                .review
                    border 1px solid #dcdfe6
                    background-color #909399
                    color #fff
    .el-pagination
        text-align center
</style>
