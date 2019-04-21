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
                    <!-- 文章列表 end -->
                   <div id="listloopbottom" class="area"></div>
                </div>
                
            </div>
            
    
            <div class="sd pph">
                <div class="drag">
                    <div id="diyrighttop" class="area"></div>
                </div>
        
                <!-- 分类 -->
                <div class="list_box cl" style="margin: 0;">
                    <div class="tit01 cl" style="margin: 11px 0 20px 0;">
                        <h2>下级分类</h2>
                    </div>
                    <div class="portal_sort Framebox2 cl" style="margin: 0 0 15px 0;">
                        <ul>
                            <li>狗</li>
                            <li>猫</li>
                            <li>水族</li>
                            <li>爬行</li>
                            <li>昆虫</li>
                            <li>鸟</li>
                            <li>鼠</li>
                            <li>兔</li>
                            <li>其他</li>
                        </ul>
                    </div>
                </div>
                <!-- 推荐阅读 -->
                <div class="sbody cl" style="margin: 10px 0 0 0;">
                    <div id="sbody" class="area"><div id="frameHI7cRJ" class="frame move-span cl frame-1"><div id="frameHI7cRJ_left" class="column frame-1-c"><div id="frameHI7cRJ_left_temp" class="move-span temp"></div><div id="portal_block_60" class="block move-span"><div id="portal_block_60_content" class="dxb_bc">      <div class="tit01 cl">
                        <h2>推荐阅读</h2>
                    </div>
                        <div class="bd Framebox2 cl">
                            <ul>
                                <li>
                                    <h3>长春宠物文化节 | 关爱宠物健康与福祉，第三届北部宠物医师大会全面升级</h3>
                                    <div class="pic"><img src="http://sc.chgie.com/u/cms/cips/201902/25113149aeof.jpg" width="auto" height="auto" alt="长春宠物文化节 | 关爱宠物健康与福祉，第三届北部宠物医师大会全面升级"></div>
                                    <p>随着国民生活水平的提高，宠物在中国正在走进千家万户，成为都市人高层次精神追求的一种“心灵呵护”。在中国宠物市场日渐繁荣的今天，如何关爱小动物、人与宠物如何和谐共处，文明养宠，这些问题日益受到社会的关注。
                                        互动和交流，凝聚人心、共谋发展，推进宠物医疗行业的发展，提高从业人员职业素养，为中国北部地区带来优质的医疗及宠物用品。</p>
                                </li>
                                <li>
                                    <h3>2019中国宠物文化节战略升级，五城联动点燃消费市场</h3>
                                    <div class="pic"><img src="http://sc.chgie.com/u/cms/cips/201901/21132707sw39.jpg" width="auto" height="auto" alt="2019中国宠物文化节战略升级，五城联动点燃消费市场"></div>
                                    <p>中国宠物文化节是由有着23年专业会展经验的长城宠物展精心打造，成为中国首个将大宠物概念全部涵盖的全国宠物主题巡回展。 中国宠物文化节重在宠物品牌产品的区域销售渠道下沉同时，强调消费者通过现场的活动参与和互动而了解产品.
                                        2019年，迎来了一个全新的开始，中国宠物文化节全面起航，将在五大城市点燃梦想，携手千余品牌商打造国内爱宠人士狂欢盛典。</p>
                                </li>
                            </ul>
                        </div>
            
                    </div>
                    </div>
                    </div>
                    </div>
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
        name: "Knowledge",
        data() {
            return {
                content:[{
                    title:"季节交替当心宠物'闹脾气'",
                    date:"知识 2018-12-19 06:17",
                    event:"本报讯　　昨日，记者从海口市多家医院了解到，春夏之交动物狂躁易伤人，市民要多留心。此外，猫、狗、蛇、老鼠等动物最易致人受伤。记者 张宏波　　春季是发情期，夏季天气炎热　　喵星人和汪星人情绪容易不稳 ..."
                 },{
                    title:"狗狗真的是色盲吗？ 狗狗的眼睛是否真的看不到颜色？",
                    date:"知识 2018-12-15 22:40",
                    event:"人的眼睛都拥有能够捕捉光线的感受体称为光感受体，而光感受体分两种，一种是杆状细胞（Rod Cell)，负责夜间的视觉，另一种细胞称为椎状细胞或是视椎细胞(Cone Cell)，负责日间视力。　　在1995年Journal of the ..."
                }],
                imgContent:[{
                    title:"有了这些狗狗能安心过冬了",
                    date:"知识 2018-10-31 06:40",
                    imgUrl:"http://www.petly.net/data/attachment/portal/201605/03/072304w59s6pikqsv56t9t.jpg",
                    event:"本报记者 叶易冷空气一阵接着一阵，市民身上的衣服也越穿越厚，冬天的脚步似乎越来越近了。除了给自己添衣，家中有“汪星人”的，是否也准备好帮它过冬了呢？“汪星人”过冬很讲究，除了要为它们布置好温暖的窝，换 ..."
                },{
                    title:"宠物狗狗厕所怎么训练狗狗使用?",
                    date:"知识 2018-10-30 06:40",
                    imgUrl:"http://www.petly.net/data/attachment/portal/201604/27/040757zfwk5yejy3kfg353.jpeg",
                    event: "宠物狗狗能够很好的解决狗狗随处排便的问题，宠物狗狗厕所的种类也有很多，但很多主人也面临一个问题，精挑细选了狗厕所之后，怎么训练狗狗在里面大小便呢? 要想训练狗狗在狗狗厕所里定点排便，那主人首先要会了解 ..."
                },{
                    title:"为什么狗狗散步会要一直看着主人?",
                    date:"知识 2018-10-21 11:00",
                    imgUrl:"http://www.petly.net/data/attachment/portal/201604/14/055244uu550qbjuhv5hhc8.jpg",
                    event:"为什么在散步的时候狗狗要一直看着主人？ 带着狗狗散步的时候，偶尔你想看看狗狗，转过头却发现狗狗却带着笑瞇瞇的表情 ，一边注目着你，一边踩着小小的步伐开心的跑着，为什么他要老是看着你呢？　这种灼热的视线是 ..."
                },{
                    title:"带着宠物自驾游的十个小建议",
                    date:"知识 2018-10-18 20:09",
                    imgUrl:"",
                    event:"自驾游是一件令人兴奋的事情，但是如果你想带着宠物一起出游，那么你不得不多考虑一些事情。在车里为宠物安排空间，计划足够的休息站点，以下的一些建议能为你和你的宠物准备一次舒适的自驾游旅程。　　1. 准备 ..."
                },{
                    title:"野猪遭核污染变异性情大变 你家的猪需要宠物保险吗？",
                    date:"知识 2018-10-15 14:35",
                    imgUrl:"http://www.petly.net/data/attachment/portal/201604/14/055118bscszicofcqgdqmf.jpg",
                    event:"4月13日讯：日本福岛核泄漏之后，当地的人类全部搬走，但是动物和植物无法搬家，它们在经过长期的核污染后发生变异。记者爆料福岛的野猪遭受核污染后变异，体形变大，而且性情暴躁，会主动攻击一切物体。据日媒报道 ..."
    
                },{
                    title:"宠物兔怎么养 什么兔子好看又好养？",
                    date:"知识 2018-10-11 21:20",
                    imgUrl:"http://www.petly.net/data/attachment/portal/201604/14/054959mqz480a9h6are803.jpg",
                    event:"兔子是非常普遍的小宠动物。它外形敦厚可爱，性格温顺安静，因此得到人们的喜爱。宠物兔从体型上来看有大型兔、中型兔、小型兔之分。大型兔子体重一般在3-7公斤，中型兔体重在2-3公斤左右，而小型兔的体重一般在2公 ..."
                },{
                    title:"猫总是闷闷不乐 肿么办 ？！",
                    date:"知识 2018-10-10 16:59",
                    imgUrl:"http://www.petly.net/data/attachment/portal/201512/16/200017lgvx6vogovt9omoo.gif",
                    event:"不少猫奴都遇到过一个同样的问题，喵星人因为犯了错误而受到指责，就会变的闷闷不乐的。"
                }]
                
            }
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
