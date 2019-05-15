<template>
    <div class="create-adopt">
        <div class="info-header">
            <p class="title">请输入宠物的信息,您填写的信息越完整,送出率越高</p>
            <span class="earning"> 我们提倡免费或者小偿领养送养宠物，严禁宠物买卖</span>
        </div>
        <div class="info-body">
            <el-form ref="form" :model="form" label-width="80px" label-position="left">
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
                <el-form-item label="宠物性别">
                    <el-select v-model="gender" placeholder="请选择宠物所属的类别">
                        <el-option
                            v-for="item in sex"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="宠物年龄">
                    <el-input v-model="form.title" placeholder="请输入宠物的年龄"></el-input>
                </el-form-item>
                <el-form-item label="领养要求">
                    <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入领养要求"
                        v-model="form.recommend">
                    </el-input>
                </el-form-item>
                <el-form-item label="标题名称">
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="所在地区">
                    <el-input v-model="form.area" placeholder="请输入您所在的地区"></el-input>
                </el-form-item>
                <el-form-item label="宠物介绍">
                    <el-input
                        type="textarea"
                        :rows="10"
                        placeholder="请输入宠物介绍"
                        v-model="form.introduce">
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
        name: "CreateAdopt",
        data() {
            return {
                category: "",
                gender: "",
                form: {
                    age: "",
                    title: "",
                    area: "",
                    introduce: "",
                    recommend: ""
                },
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
                sex: [{
                    value: '女崽',
                    label: '女崽'
                }, {
                    value: '男崽',
                    label: '男崽'
                }],
                fileList: [{url: '../../../static/img/head.png'}]
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
            .center-bitton
                position relative
                left 50%
</style>
