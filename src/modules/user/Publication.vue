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
                <p>2019-05-11 14:03</p>
                <p><el-button type="info" size="mini">删除</el-button></p>
            </div>
        </div>
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
            height 40px
            display flex
            justify-content space-around
            margin 15px 0 0 0
            font-size 15px
            line-height 40px
            color #333
            border-bottom  1px solid #d8dde48c
</style>
