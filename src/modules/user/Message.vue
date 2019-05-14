<template>
    <ul>
        <li class="order-item">
            <div class="item-title">
                <p>申请编号:<span class="detail">018090</span></p>
                <p>申请时间:<span class="detail">2019-05-01 19:03</span></p>
                <p>申请状态:<span class="detail">申请中</span></p>
                <p>联系电话:<span class="detail">13987712546</span></p>
            </div>
            <div class="item-main">
                <div class="left">
                    <p class="left-item">主题帖 :
                        <router-link to="/user-center" class="title">一只可爱的狗狗</router-link>
                    </p>
                    <p class="left-item">申请人 :<span>miytgh</span></p>
                    <p class="left-item">申请原因 :<span>能够接受定期查看宠物近况</span></p>
                </div>
                <p class="right">
                    <span class="review">通过申请</span>
                    <span class="review">拒绝申请</span>
                </p>
            </div>
        </li>
        <li class="order-item">
            <div class="item-title">
                <p>申请编号:<span class="detail">018089</span></p>
                <p>申请时间:<span class="detail">2019-05-01 14:00</span></p>
                <p>申请状态:<span class="detail">申请中</span></p>
                <p>联系电话:<span class="detail">13172029623</span></p>
            </div>
            <div class="item-main">
                <div class="left">
                    <p class="left-item">主题帖 :
                        <router-link to="/user-center" class="title">一只可爱的狗狗</router-link>
                    </p>
                    <p class="left-item">申请人 :<span>nnn</span></p>
                    <p class="left-item">申请原因 :<span>能够接受定期查看宠物近况</span></p>
                </div>
                <p class="right">
                    <span class="review">通过申请</span>
                    <span class="review">拒绝申请</span>
                </p>
            </div>
        </li>
        <li class="order-item">
            <div class="item-title">
                <p>申请编号:<span class="detail">018088</span></p>
                <p>申请时间:<span class="detail">2019-05-01 11:23</span></p>
                <p>申请状态:<span class="detail">申请中</span></p>
                <p>联系电话:<span class="detail">13372009623</span></p>
            </div>
            <div class="item-main">
                <div class="left">
                    <p class="left-item">主题帖 :
                        <router-link to="/user-center" class="title">一只可爱的狗狗</router-link>
                    </p>
                    <p class="left-item">申请人 :<span>ttt</span></p>
                    <p class="left-item">申请原因 :<span>能够接受定期查看宠物近况</span></p>
                </div>
                <p class="right">
                    <span class="review">通过申请</span>
                    <span class="review">拒绝申请</span>
                </p>
            </div>
        </li>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="3"
            :total="30"
        >
        </el-pagination>
    </ul>
</template>

<script>
    export default {
        name: "Message"
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
