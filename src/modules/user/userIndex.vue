<template>
    <div class="center-wrapper" v-if="member.memberId">
        <div class="content-left">
            <div class="info-header">
                <img src="../../../static/img/head.png">
                <p>{{member.memberName}}</p>
            </div>
            <div class="info-body">
                <ul class="body-time">
                    <li>加入时间：{{member.createTime}}</li>
                    <li>登录时间：{{member.lastLoginTime}}</li>
                </ul>
                <ul class="body-info">
                    <li>昵称：{{member.memberInfo.nickname}}</li>
                    <li>邮箱：{{member.memberInfo.email}}</li>
                    <li>手机：{{member.memberInfo.phone}}</li>
                </ul>
            </div>
        </div>
        <div class="content-right">
            <div class="right-wrapper">
                <el-tabs type="border-card">
                    <el-tab-pane label="个人信息">
                        <information :member="member"></information>
                    </el-tab-pane>
                    <el-tab-pane label="修改密码">
                        <user-password></user-password>
                    </el-tab-pane>
                    <el-tab-pane label="我的发布">
                        <publication></publication>
                    </el-tab-pane>
                    <el-tab-pane label="我的消息">
                        <message></message>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import information from './Information'
    import userPassword from './Password'
    import publication from './Publication'
    import message from './Message'

    export default {
        name: "userIndex",
        data() {
            return {
                member: {}
            }
        },
        components: {
            information,
            userPassword,
            publication,
            message
        },
        methods: {
            _initMember() {
                this.$axios.get('/petadopt/member/user/getMemberInfo').then((res) => {
                    let data = res.data;
                    if (data.status == 0) {
                        this.member = data.data;
                    } else {
                        localStorage.removeItem('member');
                        this.$router.push('/');
                        alert('请登录');
                        location.reload();
                    }
                });
            }
        },
        created() {
            this._initMember();
        }
    }
</script>

<style lang="stylus">
    .center-wrapper
        display flex
        justify-content space-between
        width 1140px
        min-height 650px
        margin 30px auto
        .content-left
            width 285px
            height 456px
            margin-right 15px
            border 1px solid #dcdfe6
            background-color #fff
            box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12)
            .info-header
                width 285px
                height auto
                box-sizing border-box
                padding 30px 20px 20px 20px
                text-align center
                border-bottom 1px solid #f6f6f6
                color #333
                border-radius 2px 2px 0 0
                font-size 14px
                img
                    width 128px
                    height 128px
                p
                    margin 10px 0
            .info-body
                position relative
                padding 10px 15px
                line-height 24px
                ul
                    color #666
                    font-size 14px
                    border-top 1px solid #d8dde4
                    li
                        margin-bottom: 12px
                        line-height 20px
                .body-time
                    padding 20px 20px
                    border-top 0
                .body-info
                    padding 20px 20px
        .content-right
            width 855px
            background-color #fff
            box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12)
            .right-wrapper
                padding 50px 30px 30px 30px

</style>
