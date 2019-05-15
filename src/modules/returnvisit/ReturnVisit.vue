<template>
    <div class="return-visit">
        <div class="content-left">
            <div class="leave-comments">
                <div class="top">
                    <img src="../../../static/img/new.png">
                </div>
                <div class="center">
                    <el-input
                        type="textarea"
                        rows="5"
                        placeholder="秀出你的宠物，做一个爱分享的铲屎官。"
                        v-model="textarea">
                    </el-input>
                </div>
                <div class="buttom">
                    <el-upload
                        :on-preview="handlePictureCardPreview"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-button type="primary">发表</el-button>
                </div>
            </div>
            <div class="show-comments">
            
            </div>
            <div class="show-comments1">
    
            </div>
        </div>
        <div class="content-right">
        
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReturnVisit",
        data(){
            return{
                textarea:"",
                dialogVisible:true
            }
        },
        methods: {
            handlePictureCardPreview(file) {
                console.log(file)
            }
        }
    }
</script>

<style lang="stylus">
    .return-visit
        width 1140px
        margin 30px auto
        display flex
        justify-content space-between
        .content-left
            display flex
            flex-direction column
            justify-content space-between
            width 812px
            box-sizing border-box
            padding 20px
            border 1px solid #e6e6e6
            background-color #fff
            .leave-comments
                display flex
                flex-direction column
                justify-content space-between
                width 770px
                min-height 284px
                /*margin 10px auto*/
                border 1px solid #d8dde4
                box-shadow 1px 2px 20px #eee inset;
                .top
                    width 100%
                    height 46px
                    line-height 46px
                    padding 0 15px
                .center
                    padding 10px 20px
                .buttom
                    display flex
                    justify-content inherit
                    width 700px
                    box-sizing border-box
                    padding 0 30px
                    margin-bottom 20px
                    .el-upload
                        display flex
                        justify-content center
                        align-items center
                        width 80px
                        height 80px
                    .el-button
                        position relative
                        top 20px
                        width 110px
                        height 50px
            .show-comments
                width 100%
                height 300px
                background-color wheat
            .show-comments1
                width 100%
                height 300px
                /*margin-top 10px*/
                background-color yellow
        .content-right
            width 302px
            box-sizing border-box
            padding 0 20px
            border 1px solid #e6e6e6
            background-color #fff
</style>
