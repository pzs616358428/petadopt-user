<template>
    <div class="create-adopt">
        <div class="info-header">
            <p class="title">当您的宠物丢失需要寻找或者您的宠物健康状况出现问题需要救助，请您填写此表</p>
            <span class="earning">请完整输入需要救助宠物的信息,您填写的信息越完整,被救助、被找到的几率越高</span>
        </div>
        <div class="info-body">
            <el-form ref="form" :model="form" label-width="80px" label-position="left" :rules="rules">
                <el-form-item label="宠物类别">
                    <el-select v-model="category" placeholder="请选择宠物所属的类别">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系人" class="reduceWidth" prop="name">
                    <el-input v-model.trim="form.name" placeholder="请输入联系人姓名"></el-input>
                </el-form-item>
                <el-form-item label="手机号" class="reduceWidth" prop="tel">
                    <el-input v-model.trim="form.tel" placeholder="请输入联系人手机号"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" class="reduceWidth" prop="email">
                    <el-input v-model.trim="form.email" placeholder="请输入联系人邮箱"></el-input>
                </el-form-item>
                <el-form-item label="标题名称" prop="title">
                    <el-input v-model.trim="form.title" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="发现地址" prop="area">
                    <el-input v-model.trim="form.area" placeholder="请输入您发现地址"></el-input>
                </el-form-item>
                <el-form-item label="救助情况" prop="description">
                    <el-input
                        type="textarea"
                        :rows="10"
                        placeholder="请输入宠物的救助情况"
                        v-model.trim="form.introduce"
                        prop="introduce"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item label="宠物图片">
                    <el-upload
                        class="upload-demo"
                        :file-list="fileList"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div class="el-upload__tip">只能上传jpg/png文件，且不超过1MB</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <el-button class="center-bitton" size="medium" type="primary" @click="open">提交</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateAssistraise",
        data() {
            return {
                category: "",
                options: [{
                    value: "兔",
                    label: "兔"
                }, {
                    value: "狗狗",
                    label: "狗狗"
                }, {
                    value: "猫咪",
                    label: "猫咪",
                }, {
                    value: "爬行",
                    label: "爬行"
                }, {
                    value: "宠物鼠",
                    label: "宠物鼠"
                }, {
                    value: "其他",
                    label: "其他"
                }],
                form: {
                    age: "",
                    title: "",
                    name:"",
                    are:"",
                    tel:"",
                    email:"",
                    introduce: ""
                },
                fileList: [{url: '../../../static/img/head.png'}],
                rules:{
                    name: [{required: true, message: '联系人不能为空', trigger: 'blur'}],
                    tel: [{required: true, message: '手机号不能为空', trigger: 'blur'}],
                    title: [{required: true, message: '标题名称不能为空', trigger: 'blur'}],
                    email: [{required: true, message: '邮箱地址不能为空', trigger: 'blur'}],
                    area: [{required: true, message: '发现地址不能为空', trigger: 'blur'}],
                    description: [{required: true, message: '救助情况描述不能为空', trigger: 'blur'}]
                }
                
            }
        },
        methods: {
            open() {
                this.$confirm('确认提交后交由管理员审核, 一经提交将无法修改。是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消！'
                    });
                });
            }
        }
    }
</script>

<style lang="stylus">
    .create-adopt
        width 1000px
        margin 30px auto
        background-color #fff
        .info-header
            border-bottom 1px solid #f6f6f6
            padding: 30px 20px
            text-align center
            color #333
            .title
                width 100%
                height 42px
                line-height 42px
                font-size 20px
                margin-bottom 10px
            .earning
                font-size 14px
        .info-body
            width 720px
            padding 30px 100px
            margin 0 auto
            color #666
            font-size 14px
            .el-form-item
                margin-bottom 30px
                &:after
                    display block
                    border-bottom 1px solid #f6f6f6
                    padding 20px 0px
            .reduceWidth
                width 350px
            .center-bitton
                position relative
                left 50%
</style>
