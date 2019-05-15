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
            <el-dropdown :hide-on-click="false">
                <router-link to="/user-center" tag="span" class="el-dropdown-link">个人中心<i class="el-icon-arrow-down el-icon--right"></i></router-link>
                <el-dropdown-menu slot="dropdown">
                  <!--<el-dropdown-item>]我的信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>我的发布</el-dropdown-item>
                    <el-dropdown-item>我的消息</el-dropdown-item>-->
                  <el-dropdown-item><span>基本资料</span></el-dropdown-item>
                  <el-dropdown-item><span>退出系统</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
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

<style lang="stylus">
    header
        width 100%
        background-color #545c64
        .menu-wrapper
            display flex
            justify-content space-between
            align-items center
            width 1140px
            margin 0 auto
            .el-menu
                border-bottom none
                .el-menu-item
                    margin 0px 20px
                    font-size 18px
            .el-dropdown
                color #fff
                &:hover
                    cursor pointer
</style>
