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
            <ul class="show-comments">
                <li>
                    <p>hello，我介绍一下我家猫咪叫小拉婷，一岁了是一可爱的小母猫。 带着我家主子去楼下的公园去散步，我们要和春天有个约会。
                        我把猫放在笼子里，铺上的尿垫，穿上了小衣服和带上了牵引绳，因为小拉婷不经常出门怕出去会丢了，所以带上了牵引绳不让它受到外界的惊吓变成流浪猫，所以出门必带牵引绳和背包或者运输笼。
                        绿油油的树叶感觉到了春天的气息。</p>
                    
                    <ul class="img-wrapper">
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/0278f71c1cdc4921962dae5d2621d6ba.jpg" alt="">
                        </li>
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/2c08175a823744b9b82ee00fce45c434.jpg" alt="">
                        </li>
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/243f26146ee74d19a5559d68cb7e6d09.jpg" alt="">
                        </li>
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/5ea7646b1f744ff8bbd7dd99a7472424.jpg" alt="">
                        </li>
                    </ul>
                    <div class="attribute">
                        <span>威利·旺卡·野原💖</span>
                        <span>2019-04-16</span>
                        <span class="watch-count"><img src="../../../static/img/watch.png" alt="">159</span>
                        <span class="watch-count"><img src="../../../static/img/comment.png" alt="">2</span>
                    </div>
                </li>
                <li>
                    <p>hello，我介绍一下我家猫咪叫小拉婷，一岁了是一可爱的小母猫。 带着我家主子去楼下的公园去散步，我们要和春天有个约会。
                        我把猫放在笼子里，铺上的尿垫，穿上了小衣服和带上了牵引绳，因为小拉婷不经常出门怕出去会丢了，所以带上了牵引绳不让它受到外界的惊吓变成流浪猫，所以出门必带牵引绳和背包或者运输笼。
                        绿油油的树叶感觉到了春天的气息。</p>
        
                    <ul class="img-wrapper">
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/0278f71c1cdc4921962dae5d2621d6ba.jpg" alt="">
                        </li>
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/2c08175a823744b9b82ee00fce45c434.jpg" alt="">
                        </li>
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/243f26146ee74d19a5559d68cb7e6d09.jpg" alt="">
                        </li>
                        <li>
                            <img src="http://cdn.lazyer.net/show/image/5ea7646b1f744ff8bbd7dd99a7472424.jpg" alt="">
                        </li>
                    </ul>
                    <div class="attribute">
                        <span>威利·旺卡·野原💖</span>
                        <span>2019-04-16</span>
                        <span class="watch-count"><img src="../../../static/img/watch.png" alt="">159</span>
                        <span class="watch-count"><img src="../../../static/img/comment.png" alt="">2</span>
                    </div>
                </li>
            </ul>
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
                <div class="img-info">
                    <div class="info-detail">
                        <img src="http://www.petly.net/data/attachment/common/a5/common_38_icon.png" alt="">
                        <p><a href="#">4个月小白猫</a></p>
                    </div>
                    <div class="info-detail">
                        <img src="https://pet-1254154566.cos.ap-chengdu.myqcloud.com/23a5fba5-4ce0-48bb-9305-e28e21e74a18.jpg" alt="">
                        <p><a href="#">一岁半萨摩耶寻主</a></p>
                    </div>
                </div>
                <ul>
                    <li><a href="javascript:;">浦东陆家嘴附近猫咪领养</a></li>
                    <li><a href="javascript:;">4年雪橇犬</a></li>
                    <li><a href="javascript:;">6个月阿拉斯加 好心人领养</a></li>
                    <li><a href="javascript:;">上海虹桥附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京西红门附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京大兴附近猫咪领养</a></li>
                    <li><a href="javascript:;">北京三元桥附近狗狗领养</a></li>
                    <li><a href="javascript:;">南京雨花桥附近狗狗领养</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReturnVisit",
        data() {
            return {
                textarea: "",
                dialogVisible: true
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
            background-color #fff
            .leave-comments
                display flex
                flex-direction column
                justify-content space-between
                width 100%
                min-height 284px
                border 1px solid #f2f2f2
                &:after
                    display block
                    content ""
                    width 100%
                    height 40px
                    background-color #f2f2f2
                    border none
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
                padding 10px 20px 10px 20px
                li
                    width 780px
                    color #333
                    font-size 16px
                    p
                        line-height 1.5em
                    .img-wrapper
                        display flex
                        justify-content space-between
                        flex-wrap wrap
                        width 780px
                        li
                            width 380px
                            height 310px
                            padding 8px
                            border 1px solid #eee
                            box-sizing border-box
                            img
                                width 100%
                                height 100%
                    .attribute
                        width 780px
                        font-size 14px
                        color #979fa8
                        margin-top 15px
                        span
                            margin-right 40px
                        .watch-count
                            display inline-block
                            img
                                width 28px
                                height 28px
                                vertical-align middle
                                margin-right 4px
        .content-right
            width 302px
            max-height 960px
            box-sizing border-box
            padding 0 20px
            border 1px solid #f2f2f2
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
