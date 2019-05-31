<template>
    <div class="create-adopt">
        <div class="info-header">
            <p class="title">请输入宠物的信息,您填写的信息越完整,送出率越高</p>
            <span class="earning"> 我们提倡免费偿领养送养宠物，严禁宠物买卖</span>
        </div>
        <div class="info-body">
            <el-form ref="form" label-width="80px" label-position="left">
                <el-form-item label="宠物类别">
                    <el-select v-model.trim="category" placeholder="请选择宠物所属的类别">
                        <el-option
                            v-for="item in animalCategoryList"
                            :key="item.animalCategoryId"
                            :value="item.categoryName"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标题名称" prop="title">
                    <el-input v-model.trim="title" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="文章内容">
                    <!-- 富文本编辑器容器 -->
                    <div id="editor"></div>
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
                animalCategoryList: [],
                category: '',
                title: '',
                editor: null
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
                    console.log(this.category);
                    console.log(this.title);
                    console.log(this.editor.getContent());
                    /*this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });*/
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消！'
                    });
                });
            },
            _initEditor() {
                UEDITOR_CONFIG.UEDITOR_HOME_URL = '../../static/ueditor/';
                this.editor = UE.getEditor('editor');
            },
            _initAnimalCategoryList() {
                this.$axios.get('/petadopt/member/article/animalCategoryList').then((res) => {
                    let data = res.data;
                    if (data.status == 0) {
                        this.animalCategoryList = data.data;
                    } else {
                        alert(data.message);
                    }
                })
            }
        },
        mounted() {
            this._initEditor();
            this._initAnimalCategoryList();
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
