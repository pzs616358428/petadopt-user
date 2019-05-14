<template>
    <div class="wrapper">
        <div class="title-name">
            <p><img src="../../../static/img/title.png" alt="">标题</p>
            <p><img src="../../../static/img/diqu.png" alt="">所属地区</p>
            <p><img src="../../../static/img/time.png" alt="">发布时间</p>
            <p><img src="../../../static/img/time.png" alt="">操作</p>
        </div>
        <div>
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    一只可爱的狗狗
                </p>
                <p>天津</p>
                <p>2019-05-04 14:45</p>
                <p>
                    <el-button type="info" size="mini">删除</el-button>
                </p>
            </div>
        </div>
        <div>
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    3个月猫猫求带走
                </p>
                <p>天津</p>
                <p>2019-05-03 14:20</p>
                <p>
                    <el-button type="info" size="mini">删除</el-button>
                </p>
            </div>
        </div>
        <div>
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    一只可爱的兔子
                </p>
                <p>天津</p>
                <p>2019-05-02 11:00</p>
                <p>
                    <el-button type="info" size="mini">删除</el-button>
                </p>
            </div>
        </div>
        <div>
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    泰迪求带走
                </p>
                <p>天津</p>
                <p>2019-05-01 22:07</p>
                <p>
                    <el-button type="info" size="mini">删除</el-button>
                </p>
            </div>
        </div>
        <div>
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    哈士奇求带走
                </p>
                <p>天津</p>
                <p>2019-05-01 21:03</p>
                <p>
                    <el-button type="info" size="mini">删除</el-button>
                </p>
            </div>
        </div>
        <div>
            <div class="publication-content">
                <p style="width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    粘人猫人另寻主人
                </p>
                <p>天津</p>
                <p>2019-05-01 19:03</p>
                <p>
                    <el-button type="info" size="mini">删除</el-button>
                </p>
            </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="6"
            :total="14">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Publication"
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
