<template>
    <div class="create-adopt">
        <div class="info-header">
            <p class="title">请输入宠物的信息,您填写的信息越完整,送出率越高</p>
            <span class="earning"> 我们提倡免费偿领养送养宠物，严禁宠物买卖</span>
        </div>
        <div class="info-body">
            <el-form ref="form" :model="form" label-width="80px" label-position="left" :rules="rules">
                <el-form-item label="宠物类别">
                    <el-select v-model.trim="category" placeholder="请选择宠物所属的类别">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标题名称" prop="title">
                    <el-input v-model.trim="form.title" placeholder="请输入标题"></el-input>
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
                form: {
                    title: ""
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
                rules: {
                    title: [{required: true, message: '标题名称不能为空', trigger: 'blur'}]
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
            .center-bitton
                position relative
                left 50%
</style>
