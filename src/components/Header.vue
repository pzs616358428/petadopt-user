<template>
    <header>
        <div class="menu-wrapper">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                     text-color="#fff" active-text-color="#ffd04b" :router="defaultRouter">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4236003410,1743588750&fm=26&gp=0.jpg" alt="">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/adopt">领养</el-menu-item>
                <el-menu-item index="/assist-raise">救助</el-menu-item>
                <el-menu-item index="/return-visit">秀宠回访</el-menu-item>
                <el-menu-item index="/knowledge">知识</el-menu-item>
                <el-menu-item index="/encyclopedias">百科</el-menu-item>
            </el-menu>
            <span class="log" @click="login">登录</span>
            <span class="log" @click="userRegister">注册</span>
            <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">个人中心<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><router-link to="/user-center" tag="span">基本资料</router-link></el-dropdown-item>
                  <el-dropdown-item><span>退出系统</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog
            title="用户登录"
            :visible.sync="logStatus"
            width="35%"
        >
            <el-form label-position="left" label-width="80px" :model="formLogin">
                <el-form-item label="用户名">
                    <el-input v-model.trim="formLogin.userName" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model.trim="formLogin.password" clearable></el-input>
                </el-form-item>
                <el-button type="primary">立即登录</el-button>
            </el-form>
        </el-dialog>
        <el-dialog
            title="用户注册"
            :visible.sync="regStatus"
            width="35%"
        >
            <el-form label-position="left" label-width="80px" :model="formReg" :rules="rules">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model.trim="formReg.userName" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="tel">
                    <el-input v-model.trim="formReg.tel" placeholder="请输入手机号" clearable></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model.trim="formReg.email" placeholder="请输入邮箱" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model.trim="formReg.password" placeholder="请输入密码" clearable></el-input>
                </el-form-item>
                <el-button type="primary">立即注册</el-button>
            </el-form>
        </el-dialog>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            let phoneCheck = (rule, value, callback)=>{
                let data = this.formReg.tel;
                
                if(/1([3456789])\d{9}/.test(data)){
                    callback();
                }else{
                    callback(new Error('手机号格式不正确'));
                }
            }
            
            let emailCheck = (rule, value, callback)=>{
                let email = this.formReg.email;
                
                if(/^([a-zA-Z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-zA-Z]{2,4})$/.test(email)){
                    callback();
                }else{
                    callback(new Error('邮箱格式不正确'));
                }
            }
    
            let psdCheck = (rule, value, callback) => {
                if (/^(?![0-9]+$|[a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(v)) {
                    callback();
                } else {
                    callback(new Error('密码长度在6-12位，且是数字与字母的组合'))
                }
            }
            let confirmCheck = (rule, value, callback) => {
                if (this.formReg.confirmPassword !== this.formReg.password) {
                    callback(new Error('两次输入的密码不一致'));
                } else {
                    callback()
                }
            }
            
            
            return {
                activeIndex: '/',
                defaultRouter: true,
                logStatus:false,
                regStatus:false,
                formLogin:{
                    userName:'',
                    password:'',
                },
                formReg:{
                    userName:'',
                    password:'',
                    tel:"",
                    email:""
                },
                rules: {
                    userName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    tel: [{required: true, message: '手机号不能为空', trigger: 'blur'},{validator: phoneCheck, trigger: 'blur'}],
                    email: [{required: true, message: '邮箱地址不能为空', trigger: 'blur'},{validator: emailCheck, trigger: 'blur'}],
                    password: [{required: true, message: '请设置密码', trigger: 'blur'},{min: 6, message: '长度在不少于6位', trigger: 'blur'},{validator: psdCheck, trigger: 'blur'}],
                }
                
            }
        },
        created() {
            // 初始化activeIndex
            this.activeIndex = this.$route.path;
        },
        methods:{
            login(){
                this.dialogVisible = true
                this.logStatus = !this.logStatus;
            },
            userRegister(){
                this.dialogVisible = true
                this.regStatus = !this.regStatus;
            }
            
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
                overflow hidden
                .el-menu-item
                    margin 0px 20px
                    font-size 16px
                img
                    float left
                    width 94px
                    height 68px
                    border-radius 2em
            .log
                font-size 14px
                color #fff
            .el-dropdown
                color #fff
                &:hover
                    cursor pointer
    .el-dialog
        .el-dialog__header
            background #f1f6f8
            text-align center
            .el-dialog__title
                color #606266
                font-weight 600
        .el-dialog__body
            .el-button--primary
                position relative
                left 40%

</style>
