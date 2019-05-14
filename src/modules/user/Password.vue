<template>
    <div class="user-center-infos">
        <el-form label-width="100px" :model="userForm" :rules="rules">
            <el-form-item label=原始密码 prop="password">
                <el-input type="password" v-model="userForm.password" clearable></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" v-model="userForm.newPassword" clearable></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input type="password" v-model="userForm.confirmPassword" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="primary" @click="saveInfo">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "userPassword",
        data() {
            let confirmCheck = (rule, value, callback) => {
                if (this.userData.newPassword && this.userData.confirmPassword && this.userData.newPassword !== this.userData.confirmPassword) {
                    callback(new Error('两次输入的密码不一致'));
                } else {
                    callback()
                }
            }
            let psdCheck = (r, v, c) => {
                if (/^(?![0-9]+$|[a-zA-Z]+$)[0-9a-zA-Z]{6,18}$/.test(v)) {
                    c();
                } else {
                    c(new Error('密码长度在6-18位，且是数字与字母的组合'))
                }
            }
            
            return {
                userForm:{
                    password: "",
                    newPassword: "",
                    confirmPassword: "",
                },
                rules: {
                    password: [{required: true, message: '请输入原密码', trigger: 'blur'},{min: 6, message: '密码长度不少于6位', trigger: 'blur'}],
                    newPassword: [{required: true, message: '请设置新密码', trigger: 'blur,change'},{validator:psdCheck, trigger: 'blur'}],
                    confirmPassword: [{required: true, message: '请再次输入密码', trigger: 'blur'},{validator: confirmCheck, trigger: 'blur'}]
                }
            }
        },
        methods: {
            saveInfo() {
                console.log(1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .user-center-infos
        margin 40px 0px
        .el-form
            padding 0 76px
            .el-input
                width 300px
                margin-left 56px
            .el-button
                margin-left 180px
</style>
