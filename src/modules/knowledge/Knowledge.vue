<template>
    <common-knowledge :content="content" :imgContent="imgContent" :asideContent="asideContent">
        <h2 slot="title">下级分类</h2>
        <ul slot="list">
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
    </common-knowledge>
</template>

<script>
    import CommonKnowledge from '../../components/knowledge'
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
                }],
                asideContent:[{
                    title:"长春宠物文化节 | 关爱宠物健康与福祉，第三届北部宠物医师大会全面升级",
                    imgUrl:"http://sc.chgie.com/u/cms/cips/201902/25113149aeof.jpg",
                    content:"随着国民生活水平的提高，宠物在中国正在走进千家万户，成为都市人高层次精神追求的一种“心灵呵护”。在中国宠物市场日渐繁荣的今天，如何关爱小动物、人与宠物如何和谐共处，文明养宠，这些问题日益受到社会的关注。互动和交流，凝聚人心、共谋发展，推进宠物医疗行业的发展，提高从业人员职业素养，为中国北部地区带来优质资源。"
                },{
                    title:"2019中国宠物文化节战略升级，五城联动点燃消费市场",
                    imgUrl:"",
                    content:"中国宠物文化节是由有着23年专业会展经验的长城宠物展精心打造，成为中国首个将大宠物概念全部涵盖的全国宠物主题巡回展。中国宠物文化节重在宠物品牌产品的区域销售渠道下沉同时，强调消费者通过现场的活动参与和互动而了解产品。2019年，迎来了一个全新的开始，中国宠物文化节全面起航，将在五大城市点燃梦想，携手千余品牌商打造国内爱宠人士狂欢盛典。"
                }]
                
            }
        },
        components:{
            CommonKnowledge
        }
    }
</script>

<style lang="stylus" scoped>
</style>
