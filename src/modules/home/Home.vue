<template>
    <div class="home">
        <div class="content-wrapper">
            <div class="content-left">
                <el-carousel :interval="4000" type="card" height="300px">
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201608/24/052141lhk88z7tu8trcv89.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201606/21/080635t2whu39i99w32wz6.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201606/21/080144aqbe4yt6qqww2qqo.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="http://www.petly.net/data/attachment/portal/201605/15/225124hs99hjtcpnp9th55.jpg">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="content-right">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="stylus" scoped>
    .home
        width 100%
        margin-top 20px
        .content-wrapper
            display flex
            justify-content space-between
            width 1140px
            margin 0 auto
            box-sizing border-box
            padding 20px 20px 30px 20px
            background-color #fff
            .content-left
                width 788px
                .el-carousel__item h3
                    color #475669
                    font-size 14px
                    opacity 0.75
                    line-height 200px
                    margin 0
                .el-carousel__item:nth-child(2n)
                    background-color #99a9bf
                .el-carousel__item:nth-child(2n+1)
                    background-color #d3dce6
                .el-carousel__item
                    img
                        width 100%
                        height 100%
            .content-right
                width 270px
</style>
