<template>
    <div class="knowledge">
        <div id="ct" class="ct2 wp inside_box cl">
            <div class="mn">
                <div class="bm">
                    <!-- 文章列表 begin -->
                    <div class="list_new Framebox cl">
                        
                        <div class="news_list cl" v-for="(item,index) in content" :key="index">
                            <div class="cl">
                                <div class="new_body">
                                    <h2>{{item.title}}</h2>
                                    <div class="meta"><span class="meta-class"></span><span class="meta-date">{{item.date}}</span>
                                    </div>
                                    <p>{{item.event}}</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="news_list cl" v-for="(i,k) in imgContent" :key="k">
                            <div class="cl">
                                <div class="new_pic">
                                    <div class="bubba"><img :src="i.imgUrl" :alt="i.title"></div>
                                </div>
                                <div class="new_body">
                                    <h2>{{i.title}}</h2>
                                    <div class="meta"><span class="meta-class"></span><span class="meta-date">{{i.date}}</span>
                                    </div>
                                    <p>{{i.event}}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div>
    
    
            <div class="sd pph">
                <div class="drag">
                    <div id="diyrighttop" class="area"></div>
                </div>
        
                <!-- 分类 -->
                <div class="list_box cl" style="margin: 0;">
                    <div class="tit01 cl" style="margin: 11px 0 20px 0;">
                        <slot name="title"></slot>
                    </div>
                    <div class="portal_sort Framebox2 cl" style="margin: 0 0 15px 0;">
                        <slot name="list"></slot>
                    </div>
                </div>
                <!-- 推荐阅读 -->
                <div class="sbody cl" style="margin: 10px 0 0 0;">
                    <h2>推荐阅读</h2>
                    <div class="bd Framebox2 cl">
                        <ul v-for="(u,i) in asideContent" :key="i">
                            <li>
                                <h3>{{u.title}}</h3>
                                <div class="pic"><img :src="u.imgUrl"
                                                      width="auto" height="auto"
                                                      alt="u.title"></div>
                                <p>{{u.content}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <el-pagination
            :current-page="1"
            :page-size="9"
            layout="total, sizes, prev, pager, next, jumper"
            :total="72">
        </el-pagination>
    </div>
</template>

<script>
  export default {
      name: "knowledge",
      props:{
          content:Array,
          imgContent:Array,
          asideContent:Array
      }
  }
</script>

<style lang="stylus" scoped>
    #wp .wp
        width auto
    #ct
        min-height 300px
    .inside_box
        background none
    .wp
        margin 0 auto
        width 960px
    .ct2 .mn
        float left
        margin-top 40px
        margin-left -70px
        width 810px
        padding 15px 0 0 0
        border 1px solid #E6E6E6
        box-shadow 0 0 4px #ECECEC
        background #FFFFFF
        .bm
            margin-bottom 10px
        .Framebox
            padding 10px 20px
        .news_list
            margin-bottom 25px
            padding-bottom 25px
            border-bottom 1px solid #EEEEEE
            .new_body
                font-size 14px
                color #999999
                line-height 26px
            h2
                color #444444
                font-size 18px
                font-weight 600
                margin-bottom 10px
                line-height 25px
            .meta
                margin-top 10px
            p
                margin-top 10px
                font-size 14px
                line-height 22px
                color  #777777
            .new_pic
                width 265px
                height 170px
                overflow hidden
                float left
                margin-right 20px
                display table-cell
                vertical-align middle
                text-align center
                .bubba
                    width 265px
                    height 170px
                    img
                        width 100%
                        height 100%
    
    .sd
        position absolute
        top 100px
        right 80px
        width 260px
        padding 0 20px
        border 1px solid #E6E6E6
        box-shadow 0 0 4px #ECECEC
        background #FFFFFF
        .tit01
            height 50px
            line-height 50px
            border-bottom 1px solid #E8E8E8
            position relative
        h2
            color #333333
            font-weight bolder
        .Framebox2
            padding 10px 0
        .portal_sort li
            float left
            margin 0 10px 5px 0
            text-decoration none
            padding 2px 12px
            font-size 14px
            color #FFFFFF
            background #555555
        .sbody .bd li
            width 250px
            float left
            overflow hidden
            padding-bottom 10px
            margin-bottom 10px
            border-bottom 1px solid #EEEEEE
            h3
                padding-bottom 8px
                color #303030ed
            .pic
                width 180px
                height 186px
                float left
                img
                    width 100%
                    height 100%
            p
                text-indent 20px
                line-height 24px
                color #8C8C8C
                margin 10px 0
    .cl:after
        content "."
        display block
        height 0
        clear both
        visibility hidden
    .el-pagination
        margin 20px 0 30px 250px
</style>
