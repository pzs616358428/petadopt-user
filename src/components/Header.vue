<template>
    <header>
        <div class="menu-wrapper">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                     text-color="#fff" active-text-color="#ffd04b" :router="defaultRouter">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/adopt">领养</el-menu-item>
                <el-menu-item index="/assist-raise">救助</el-menu-item>
                <el-menu-item index="/return-visit">秀宠回访</el-menu-item>
                <el-menu-item index="/knowledge">知识</el-menu-item>
                <el-menu-item index="/encyclopedias">百科</el-menu-item>
            </el-menu>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '/',
                defaultRouter: true
            }
        },
        created() {
            // 初始化activeIndex
            this.activeIndex = this.$route.path;
        }
    }
</script>

<style lang="stylus" scoped>
    header
        width 100%
        background-color #545c64
        .menu-wrapper
            width 1140px
            margin 0 auto
            .el-menu
                border-bottom none
                .el-menu-item
                    margin 0px 20px
                    font-size 18px
</style>
