<template>
  <div class="user-center-infos">
    <el-form  label-width="100px">
      <el-form-item label=原始密码 prop="password">
        <el-input type="password" v-model="password" clearable></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="newPassword" clearable></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="confirmPassword" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  size="small" type="primary" @click="saveInfo">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "userPassword",
    data(){
      return {
        password:"",
        newPassword:"",
        confirmPassword:""
      }
    },
    methods:{
      saveInfo(){
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
