<template>
    <div class="adopt-detail">
        <div class="content-left">
            <template v-if="adopt.adoptId">
                <h1 class="title">{{adopt.animalCategory.categoryName}} --- {{adopt.title}} --
                    {{adopt.region.regionName}}</h1>
                <div class="info-wrapper">
                    <div class="img-wrapper">
                        <img v-if="adopt.member.memberInfo.headImage" :src="adopt.member.memberInfo.headImage">
                        <img v-else src="/static/img/noavatar_small.gif"/>
                    </div>
                    <img src="/static/img/ico_see.png" class="watch-img">
                    <span class="watch-count">{{adopt.watchCount}}</span>
                    <img src="/static/img/ico_reply.png" class="comment-img">
                    <span class="comment-count">{{adopt.commentCount}}</span>
                    <a href="javascript:;" class="member-name">{{adopt.member.memberInfo.nickname}}</a>
                    发表于
                    <span class="date">{{adopt.createTime}}</span>
                    <el-button type="warning" plain @click="apply" v-if="member && member.memberId != adopt.member.memberId">申请领养</el-button>
                </div>
                <div class="content-wrapper">
                    <p style="font-size: 14px;color: #515151; overflow: hidden;" v-html="adopt.content"></p>
                    <div>
                        <p class="process">领养流程</p>
                        <img src="../../../static/img/process.jpeg">
                    </div>
                </div>
                <div class="comment-wrapper">
                    <div class="comment-item" v-for="item in commentList">
                        <div class="head-wrapper">
                            <img :src="item.member.memberInfo.headImage" class="head-img" v-if="item.member.memberInfo.headImage">
                            <img src="/static/img/noavatar_small.gif" class="head-img" v-else>
                            <span class="member-name">{{item.member.memberInfo.nickname}}</span>
                            <span class="date">发表于 {{item.createTime}}</span>
                        </div>
                        <div class="content">
                            {{item.content}}
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <textarea placeholder="发表评论"
                              style="width: 100%;height: 120px;box-sizing: border-box;padding: 15px;resize: none"
                              v-model="content"
                    ></textarea>
                    <el-button type="primary" style="margin-top: 10px;" @click="addComment">发表评论</el-button>
                </div>
            </template>
        </div>
        <div class="content-right">
            <div class="class-wrapper">
                <div class="show">
                    <a href="http://www.cpse-expo.com" target="_blank">
                        <img src="../../../static/img/show.jpg">
                    </a>
                </div>
            </div>
            <div class="latest-title">
                最新主题
            </div>
            <div class="latest-theme-wrapper">
                <div class="img-info">
                    <div class="info-detail">
                        <img src="http://www.petly.net/data/attachment/common/a5/common_38_icon.png" alt="">
                        <p><a href="#">4个月小白猫</a></p>
                    </div>
                    <div class="info-detail">
                        <img
                            src="https://pet-1254154566.cos.ap-chengdu.myqcloud.com/23a5fba5-4ce0-48bb-9305-e28e21e74a18.jpg"
                            alt="">
                        <p><a href="#">一岁半萨摩耶寻主</a></p>
                    </div>
                </div>
                <ul>
                    <li><a href="javascript:;">（上海徐汇区）家里的母猫生了4只小猫希望</a></li>
                    <li><a href="javascript:;">免费领养4年法斗</a></li>
                    <li><a href="javascript:;">4个月金毛 好心人领养</a></li>
                </ul>
            </div>
            <div class="latest-title">
                领养推荐
            </div>
            <div class="latest-theme-wrapper">
                <ul>
                    <li><a href="javascript:;">浦东陆家嘴附近猫咪领养</a></li>
                    <li><a href="javascript:;">4年雪橇犬</a></li>
                    <li><a href="javascript:;">6个月阿拉斯加 好心人领养</a></li>
                    <li><a href="javascript:;">上海虹桥附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京西红门附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京大兴附近猫咪领养</a></li>
                </ul>
            </div>
        </div>
        <el-dialog
            title="填写领养申请"
            :visible.sync="dialogVisible"
            width="35%"
        >
            <el-form label-position="left" label-width="80px" :model="form">
                <el-form-item label="申请人">
                    <el-input v-model.trim="form.userName" placeholder="请输入您的名字" clearable></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model.trim="form.tel" placeholder="请输入手机号" clearable></el-input>
                </el-form-item>
                <el-form-item label="领养原因" prop="password">
                    <el-input type="textarea" :rows="10" v-model.trim="form.reason" placeholder="请输入申请原因"
                              clearable></el-input>
                </el-form-item>
                <el-button type="primary" @click="submit">立即申请</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AdoptDetail",
        data() {
            return {
                textarea: '',
                dialogVisible: false,
                form: {
                    userName: "",
                    tel: "",
                    reason: ""
                },
                adoptId: '',
                adopt: {},
                member: {},
                content: '',
                commentList: []
            }
        },
        methods: {
            apply() {
                this.dialogVisible = true;
            },
            submit() {
                this.$confirm('请您核对信息是否填写完整，是否提交?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    let param = new FormData();
                    param.append('applyPerson', this.form.userName);
                    param.append('applyPhone', this.form.tel);
                    param.append('applyReason', this.form.reason);
                    param.append('adoptId', this.adoptId);
                    this.$axios.post('/petadopt/member/adopt/addApply', param).then(res => {
                        const data = res.data;
                        if (data.status == 0) {
                            this.$message({
                                type: 'success',
                                message: '提交成功!'
                            });
                            this.dialogVisible = false;
                        } else {
                            this.$message({
                                type: 'info',
                                message: data.message
                            });
                        }
                    })


                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消！'
                    });
                });
            },
            _initAdopt() {
                this.$axios.get(`/petadopt/member/adopt/adoptDetail?adoptId=${this.adoptId}`).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.adopt = data.data;
                    } else {
                        alert(data.message);
                    }
                })
            },
            addComment() {
                const param = new FormData();
                param.append('adoptId', this.adoptId);
                param.append('content', this.content);
                this.$axios.post('/petadopt/member/adopt/addComment', param).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.content = '';
                        this._initCommentList();
                    } else {
                        alert(data.message);
                    }
                })
            },
            _initCommentList() {
                this.$axios.get(`/petadopt/member/adopt/commentList?adoptId=${this.adoptId}`).then(res => {
                    const data = res.data;
                    if (data.status == 0) {
                        this.commentList = data.data;
                    }
                })
            }
        },
        created() {
            // 获取地址栏领养id
            this.adoptId = this.$route.params.adoptId;
            // 获取当前登录的用户信息
            this.member = JSON.parse(localStorage.getItem('member'));
            this._initAdopt();
            this._initCommentList();
        }
    }
</script>

<style lang="stylus" scoped>
    .adopt-detail
        display flex
        justify-content space-between
        width 1140px
        margin 30px auto
        .content-left
            width 817px
            box-sizing border-box
            padding 20px
            border 1px solid #e6e6e6
            background-color #fff
            .title
                font-size 18px
                color #363636
            .info-wrapper
                display flex
                align-items center
                position relative
                margin-top 10px
                font-size 14px
                color #999
                .img-wrapper
                    width 44px
                    height 44px
                    img
                        width inherit
                        height inherit
                        border-radius 50%
                .watch-img
                    width 18px
                    height 18px
                    margin-left 10px
                .watch-count
                    margin-left 10px
                .comment-img
                    width 18px
                    height 18px
                    margin-left 10px
                .comment-count
                    margin-left 10px
                .member-name
                    margin 0 10px
                    font-size 14px
                    font-weight bold
                    color #555
                .date
                    margin-left 5px
                .el-button--warning
                    position absolute
                    right 15px
                    color #795548
                    background #9e9e9e21
                    border-color #9e9e9e40
                    &:hover
                        background-color #d2d2d2
            .content-wrapper
                box-sizing border-box
                padding 30px 0
                .process
                    font-size: 16px
                    line-height: 1.5em
                    padding-left: 30px
                    font-weight normal
                    color #333
                    margin 40px 0px
                    background url("../../../static/img/icon.png") no-repeat left center
                    border-top 1px solid #e6e6e6
                    .icon
                        margin-right 4px
            .comment-wrapper
                width 100%
                border-top 1px solid #e8e8e8
                padding-top 15px
                .comment-item
                    width 100%
                    border-bottom 1px solid #e8e8e8
                    margin-bottom 15px
                    .head-wrapper
                        display flex
                        align-items center
                        width 100%
                        .head-img
                            width 44px
                            height 44px
                            border-radius 50%
                        .member-name
                            font-size 14px
                            font-weight bold
                            color #555
                            margin 0 10px
                        .date
                            font-size 14px
                            color #999
                    .content
                        box-sizing border-box
                        padding 15px 0
                        font-size 14px
                        color #515151
            .comment
                margin-top 30px
        .content-right
            width 302px
            max-height 960px
            box-sizing border-box
            padding 0 20px
            border 1px solid #e6e6e6
            background-color #fff
            .show
                width 260px
                height 180px
                img
                    width 100%
                    height 100%
            .latest-title
                height: 50px
                border-bottom 1px solid #e8e8e8
                margin-bottom 15px
                line-height 50px
                font-size 18px
                color #333
            .class-wrapper
                display flex
                flex-wrap wrap
                padding 10px 0
                margin-bottom 15px
            .latest-theme-wrapper
                .img-info
                    display flex
                    justify-content space-between
                    .info-detail
                        width 140px
                        margin-bottom 10px
                        img
                            width 110px
                            &:hover
                                cursor pointer
                        a
                            font-size 13px
                            color #333333
                            &:hover
                                color #409EFF
                li
                    a
                        display inline-block
                        overflow hidden
                        width 260px
                        height 40px
                        line-height 40px
                        font-size 13px
                        color #333333
                        white-space nowrap
                        text-overflow ellipsis
                        &:hover
                            color #409EFF
                            text-decoration underline
</style>
