<template>
    <div class="header">
        <div class="menu-wrapper">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                     background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">领养</el-menu-item>
                <el-menu-item index="3">助养</el-menu-item>
                <el-menu-item index="4">知识</el-menu-item>
                <el-menu-item index="5">百科</el-menu-item>
                <el-menu-item index="6">秀宠回访</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header
        width 100%
        background-color #545c64
        .menu-wrapper
            width 1140px
            margin 0 auto
</style>
