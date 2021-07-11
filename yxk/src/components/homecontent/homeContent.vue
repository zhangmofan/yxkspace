<template>
    <div class="home_content">
        <div class="home_left">
            <div class="article_notes">
                <div class="article_nav">
                    <ul class="nav_big">
                        <li v-for="(item,index) in arr" class="nav_li" :class="index==selectIndex?'active':''"
                            @click="chooseNav(index)">{{item}}</li>
                        <li class="screening" @click="showMoal">
                            <span> <i></i>筛选</span>
                        </li>
                    </ul>
                </div>
                <div class="search_pop" :class="flag?'Modal-show':''">
                    <i class="icon_close2" @click="closeModel"></i>
                    <div class="search_mdd">
                        <label for="">目的地</label>
                        <input type="text" placeholder="输入你想查看的目的地" autocomplete="off" class="search_mdd_input"
                            :value="searchitem" @input="search">
                        <div class="search-select j_select" v-if="searchitem.length>0">
                            <ul>
                                <li v-if="!searchcontent[0]">没有找到"{{searchitem}}"</li>
                                <li v-for="(item,index) in searchcontent"
                                    class="search-select-option search-select-list">
                                    <span class="mdd_name" v-html="item.name"></span>
                                    <span class="city_name">{{item.cityname}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="hot_mdd_list">
                        <li v-for="(item,index) in model">
                            <div class="hot_mdd_pic">
                                <img :src="item.cover" alt="">
                                <h3>{{item.name}}</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="loadingIndex"></div>
                <div class="home_article_list">
                    <div class="article_item" v-for="(item,index) in articleList">
                        <div class="f_pic">
                            <a :href="item.link" target="_blank">
                                <img :src="item.cover" alt="">
                            </a>
                        </div>
                        <div class="f_right">
                            <dl>
                                <a :href="item.link" target="_blank">
                                    <dt>
                                        {{item.title}}
                                    </dt>
                                    <dd>{{item.summary}}</dd>
                                </a>
                            </dl>
                            <div class="article_item_info">
                                <span class="tz_mdd">
                                    <i></i>
                                    {{item.mddName}}
                                </span>
                                <a :href="item.link" target="_blank" class="auth">
                                    <img :src="item.authorAvatar" alt="">
                                    {{item.authorGroupName}}
                                </a>
                                <span class="tz_look">
                                    <i></i>
                                    {{item.views}}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="pagination">
                    <span class="count">
                        共<span>{{pageCount}}</span>页/
                        <span>{{total}}条</span>
                    </span>
                    <a href="javascript:;" class="ti first active" v-if="page!=1" @click="first">首页</a>
                    <a href="javascript:;" class="ti prev active" v-if="page!=1" @click="prev">前一页</a>
                    <a href="javascript:;" class="ti" v-for="item in showpageNumber" :class="item==page?'active':''"
                        @click="choosePage(item)">
                        {{item}}
                    </a>
                    <a href="javascript:;" class="ti next active" v-if="page!=pageCount" @click="nextPage">后一页</a>
                    <a href="javascript:;" class="ti last active" v-if="page!=pageCount" @click="endPage">末页</a>
                </div>
            </div>
        </div>
        <div class="home_right">
            <div class="home_ggw">
                <a :href="thumb.url">
                    <img :src="thumb.thumb" alt="">
                </a>
            </div>
            <div class="announcement">
                <div class="home_write">
                    <a href="https://bbs.youxiake.com/travel_article/write">
                        <i></i>
                        写笔记
                    </a>
                </div>
                <div class="home_notice">
                    <h3>社区公告</h3>
                    <ul>
                        <li v-for="(item,index) in recommend">
                            <a :href="item.thumb">
                                <i></i>
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pic_toggle">
                <h3 class="title">游侠客攻略</h3>
                <el-carousel trigger="click" height="220px">
                    <el-carousel-item v-for="(item,index) in recommends" :key="index">
                        <a :href="item.url">
                            <img :src="item.thumb" alt="">
                        </a>
                        <h3>{{item.title}}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="pic_toggle">
                <h3 class="title">游侠客视频</h3>
                <el-carousel trigger="click" height="220px">
                    <el-carousel-item v-for="(item,index) in recommendt" :key="index">
                        <a :href="item.url">
                            <img :src="item.thumb" alt="">
                        </a>
                        <h3>{{item.title}}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="join_yxk">
                <h3 class="title">加入游侠客</h3>
                <div class="joinPic">
                    <a href="http://www.youxiake.com/zhaopin"></a>
                    <img src="https://img3.youxiake.com/static/images/goodJob.jpg?imageMogr2/thumbnail/!280x170r/strip/gravity/Center/crop/!280x170/quality/90"
                        alt="">
                </div>
                <ul>
                    <li v-for="(item,index) in recommendf">
                        <a :href="item.url">{{item.title}}</a>
                        <i></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                arr: ["热门游记", "推荐游记", "最新游记"],
                selectIndex: 0,
                flag: false,
                searchcontent: [],
                searchitem: "",
                model: [],
                articleList: [],
                thumb: {},
                recommend: [],
                recommends: [],
                recommendt: [],
                recommendf: [],
                showpageNumber: [],
                pageCount: 0,
                total: 0,
                page: 1,
                type: 1
            }
        },
        created() {
            this.$axios.get("https://bbs.youxiake.com/api/home/recommendMdd").then(res => {
                this.model = res.data.data
            })
            this.getContentData(this.type,this.page)
            this.$axios.get("https://bbs.youxiake.com/api/home/adData?type=2").then(res => {
                this.thumb = res.data.data
            })
            this.$axios.get("https://bbs.youxiake.com/api/home/recommendData?type=7").then(res => {
                this.recommend = res.data.data
            })
            this.$axios.get("https://bbs.youxiake.com/api/home/recommendData?type=4").then(res => {
                this.recommends = res.data.data
            })
            this.$axios.get("https://bbs.youxiake.com/api/home/recommendData?type=5").then(res => {
                this.recommendt = res.data.data
            })
            this.$axios.get("https://bbs.youxiake.com/api/home/recommendData?type=6").then(res => {
                this.recommendf = res.data.data
            })
        },
        methods: {
            getContentData(type,page) {
                this.$axios.get("https://bbs.youxiake.com/api/home/articleList?type=" +type + "&mddId=0&page=" + page).then(res => {
                    this.pageCount = res.data.data.pageCount
                    for (var i = 0; i < 9; i++) {
                        this.showpageNumber[i] = i + 1
                    }
                    this.total = res.data.data.total
                    this.articleList = res.data.data.articles
                })
            },
            chooseNav(index) {
                console.log(index)
                this.selectIndex = index
                this.type = index+1
                this.getContentData(this.type,1)
            },
            showMoal() {
                this.flag = !this.flag
            },
            search(e) {
                this.searchitem = e.target.value.trim()
                this.$axios.get("https://bbs.youxiake.com/api/mdd/search?keyword=" + e.target.value + "&type=1").then(res => {
                    this.searchcontent = res.data.data
                })

            },
            closeModel() {
                this.flag = !this.flag
            },
            first() {
                this.page = 1;
                this.pageStyle(this.page)
            },
            choosePage(index) {
                this.pageStyle(index)
            },
            nextPage() {
                this.page = this.page + 1
                this.pageStyle(this.page)
            },
            prev() {
                this.page = this.page - 1
                this.pageStyle(this.page)
            },
            endPage() {
                this.page = this.pageCount
                this.pageStyle(this.page)
            },
            pageStyle(index) {
                this.page = index
                if (this.page != this.pageCount) {
                    console.log(this.pageCount);

                    if (index == 9) {
                        for (var i = 0; i < 9; i++) {
                            this.showpageNumber[i] = this.showpageNumber[i] + 4
                            this.$forceUpdate()
                        }
                        console.log(this.showpageNumber)
                    } else if (9 < index) {
                        console.log(index);
                        for (var i = 0; i < this.showpageNumber.length; i++) {
                            this.showpageNumber[i] = index - 4 + i
                            this.$forceUpdate()
                        }
                        console.log(this.showpageNumber);

                    } else {
                        for (var i = 0; i < 9; i++) {
                            this.showpageNumber[i] = i + 1
                        }
                    }
                    if (index > this.pageCount - 8) {
                        for (var i = 0; i < 9; i++) {
                            this.showpageNumber[i] = this.pageCount - 8 + i
                            this.$forceUpdate()
                        }
                    }
                } else {
                    for (var i = 0; i < 9; i++) {
                        this.showpageNumber[i] = this.pageCount - 8 + i
                        this.$forceUpdate()
                    }
                }


                this.$axios.get("https://bbs.youxiake.com/api/home/articleList?type=1&mddId=0&page=" + index).then(res => {
                    this.articleList = res.data.data.articles
                })
            }
        },
    }
</script>

<style scoped>
    body {
        box-sizing: border-box;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
    }

    h3 {
        margin: 0;
        padding: 0;
    }

    .home_content {
        width: 1200px;
        margin: 30px auto 0;

    }

    .home_content .home_left {
        width: 880px;
        float: left;


    }

    .home_content::after {
        content: "";
        display: block;
        clear: both;
        overflow: hidden;
    }

    .article_notes {
        position: relative;
    }

    .article_nav {
        width: 100%;
        height: 55px;
        line-height: 55px;
        text-align: center;
        display: inline-block;
        position: relative;
        margin: 0 0 30px;
        border-bottom: 1px solid #e4e4e4;
    }

    .article_nav .nav_big .nav_li {
        cursor: pointer;
        list-style: none;
        float: left;
        width: 200px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        font-size: 18px;
        color: #333;
        position: relative;
        cursor: pointer;
    }

    .article_nav .nav_big .nav_li.active {
        height: 55px;
        border-bottom: 3px solid #ff9a00;
        color: #ff9a00;
        position: relative;
    }

    .article_nav .nav_big .screening {
        text-align: right;
        cursor: pointer;
        float: right;
    }

    .article_nav .nav_big .screening span {
        border: 1px solid #e8e8e8;
        font-size: 12px;
        color: #666;
        padding: 2px 7px;
    }

    .article_nav .nav_big .screening span i {
        background: url(../../assets/icon_sx.png) no-repeat;
        height: 16px;
        width: 17px;
        background-size: 100% auto;
        display: inline-block;
        vertical-align: -5px;
        margin-right: 4px;
    }

    .search_pop {
        position: absolute;
        z-index: 3;
        margin: -37px 0 0 270px;
        width: 610px;
        height: 366px;
        padding: 2px 0;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
        box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: all 0.25s ease-in-out;
        transition: all 0.25s ease-in-out;
    }

    .search_pop.Modal-show {
        visibility: visible;
        opacity: 1;
        -webkit-transition: all 0.25s ease-in-out;
        transition: all 0.25s ease-in-out;
    }

    .icon_close2,
    .icon_close2:hover {
        -webkit-transition: 1s ease-in-out 0s;
        transition: 1s ease-in-out 0s;
    }

    .icon_close2 {
        background: url(../../assets/close2.png) no-repeat;
        height: 10px;
        width: 10px;
        background-size: 100% auto;
        display: block;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }

    .search_pop .search_mdd {
        margin: 30px 20px;
        position: relative;
    }

    .search_pop .search_mdd .search_mdd_input {
        box-sizing: border-box;
        width: 446px;
        height: 38px;
        line-height: 38px;
        text-align: left;
        padding: 0 35px 0 15px;
        border: 1px solid #efefef;
        background-color: #efefef;
        border-radius: 4px;
        font-size: 14px;
        vertical-align: top;
        -webkit-transition: 0.2s linear 0s;
        transition: 0.2s linear 0s;
    }

    .search_pop .search_mdd label {
        font-size: 16px;
        color: #666;
        padding: 0 10px;
        line-height: 38px;
        font-weight: normal;
    }

    .search_pop .search_mdd .search-select {
        position: absolute;
        top: 45px;
        left: 72px;
        width: 440px;
        max-height: 320px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 4;
        background-color: #fff;
        -webkit-box-shadow: 0 0 3px rgb(0 0 0 / 30%);
        box-shadow: 0 0 3px rgb(0 0 0 / 30%);
        border-radius: 4px;
        overflow: hidden;
    }

    .search_pop .search_mdd .search_mdd_input:focus {
        border-color: #ff9d00;
        -webkit-box-shadow: 0 0 3px rgb(255 157 0 / 60%);
        box-shadow: 0 0 3px rgb(255 157 0 / 60%);
        outline: 0;
        background-color: #fff;
    }

    .search_pop .search_mdd .search-select li,
    .search_pop .search_mdd .nofound[data-v-1ea90c79] {
        padding: 0 20px;
        line-height: 40px;
        font-size: 14px;
        color: #666;
        cursor: pointer;
    }

    .search_pop .search_mdd .search-select-list {
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .search_pop .search_mdd .search-select li,
    .search_pop .search_mdd .nofound[data-v-1ea90c79] {
        padding: 0 20px;
        line-height: 40px;
        font-size: 14px;
        color: #666;
        cursor: pointer;
    }

    .search_pop .hot_mdd_list {
        margin: 0 20px 15px;
    }

    .search_pop .hot_mdd_list li {
        width: 130px;
        height: 113px;
        line-height: auto;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
        padding: 8px 0px;
        float: left;
        margin: 0 1px 15px;
        -webkit-transition: 0.2s linear 0s;
        transition: 0.2s linear 0s;
    }

    img {
        vertical-align: middle;
    }

    .search_pop .hot_mdd_list li h3 {
        font-size: 14px;
        color: #666;
        line-height: 30px;
    }
</style>
<style scoped>
    .article_item {
        padding: 10px 0;
        height: 165px;
        margin-bottom: 20px;
        cursor: pointer;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .article_item .f_pic {
        float: left;
        width: 258px;
        height: 145px;
        overflow: hidden;
        position: relative;
        background: #f5e2c4;
    }

    .article_item .f_pic a {
        position: relative;
        display: block;
    }

    a,
    a:focus,
    a:hover {
        color: #ff9a00;
    }

    .article_item .f_pic img {
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    img {
        vertical-align: middle;
    }

    .article_item .f_pic .fag {
        position: absolute;
        top: 0;
        left: 0;
    }

    .article_item .f_right {
        float: right;
        width: 605px;
        height: 145px;
    }

    .article_item .f_right dl {
        height: 120px;
        position: relative;
    }

  
    .article_item .f_right dl a {
        display: block;
        height: 100%;
    }

    .article_item .f_right dl a dt {
        color: #333;
        width: 525px;
    }

    .article_item .f_right dt {
        height: 26px;
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 26px;
        font-weight: normal;
        margin-top: -3px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 26px;
    }

    .article_item .f_right dl a dd {
        color: #666;
    }

    .article_item .f_right dd {
        line-height: 23px;
        font-size: 12px;
        height: 69px;
        overflow: hidden;
    }

    .article_item .article_item_info {
        height: 33px;
        overflow: hidden;
        line-height: 33px;
        font-size: 12px;
    }

    .article_item .tz_mdd {
        color: #646464;
        margin-right: 27px;
    }

    .article_item .tz_mdd i {
        background: url(../../assets/wz_mdd.png) no-repeat;
        height: 16px;
        width: 14px;
        background-size: 100% auto;
        display: inline-block;
        vertical-align: -3px;
        margin-right: 8px;
    }

    .article_item .auth img {
        margin-right: 3px;
        width: 24px;
        height: 24px;
        overflow: hidden;
        border-radius: 50%;
        vertical-align: -5px;
    }

    .article_item .auth {
        margin-right: 35px;
    }

    .article_item .tz_look {
        color: #999;
    }

    .article_item .tz_look i {
        background: url(../../assets/wz_look.png) no-repeat;
        height: 15px;
        width: 19px;
        background-size: 100% auto;
        display: inline-block;
        vertical-align: -3px;
        margin-right: 8px;
    }

    .article_item:hover {
        background-color: #f8f8f8;
        padding: 10px;
        margin: 0 -10px 20px;
    }
</style>
<style scoped>
   

    .home_content .home_right {
        width: 280px;
        float: right;
    }

    .home_ggw {
        margin-bottom: 20px;
        width: 100%;
        height: 111px;
        overflow: hidden;
    }

    .home_ggw a {
        display: block;
    }

    .announcement {
        width: 100%;
    }

    .home_content .home_write {
        height: 55px;
        line-height: 55px;
        background: #ff9a00;
        margin: 0 0 40px;
        text-align: center;
    }

    .home_content .home_write a {
        display: block;
        color: #fff;
        font-size: 18px;
        text-decoration: none;
    }

    .home_content .home_write a i {
        background: url(../../assets/home_write.png) no-repeat;
        height: 24px;
        width: 23px;
        background-size: 100% auto;
        display: inline-block;
        vertical-align: -5px;
        margin-right: 14px;
    }

    .announcement .home_notice {
        margin-bottom: 30px;
    }

    .announcement .home_notice h3 {
        font-size: 18px;
        border-left: 3px solid #ff9a00;
        padding-left: 7px;
        color: #636b6f;
    }

    .announcement .home_notice ul {
        margin-top: 10px;
    }

    .announcement .home_notice ul li {
        line-height: 30px;
        list-style: none;
    }

    .announcement .home_notice ul li i {
        background: url(../../assets/n_li1.png) no-repeat;
        height: 13px;
        width: 8px;
        background-size: 100% auto;
        background-position: center left;
        display: inline-block;
        background-size: auto;
        -webkit-transition: width 0.25s;
        transition: width 0.25s;
    }

    .announcement .home_notice ul li a {
        color: #666;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: block;
    }

    .home_content .home_right .pic_toggle {
        margin-bottom: 42px;
    }


    .home_content .home_right .pic_toggle h3.title {
        font-size: 18px;
        border-left: 3px solid #ff9a00;
        padding-left: 7px;
        font-weight: 500;
        color: #636b6f;
    }

    .pic_toggle>>>.el-carousel__container h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        margin: 0;
        border: 1px solid #e9e9e9;
    }

    .el-carousel {
        margin-top: 20px;
    }

    .el-carousel {
        overflow-x: hidden;
        position: relative;
    }

    .el-carousel__container {
        position: relative;
        height: 300px;
    }

    .el-carousel__item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
        z-index: 0;
    }

    .pic_toggle>>>.el-carousel__container h3 {
        color: #475669;
        font-size: 14px;
        opacity: 1;
        margin: 0;
        border-top: none;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
    }

    .pic_toggle>>>.el-carousel {
        border-bottom: 1px solid #e9e9e9;
    }

    .join_yxk {
        margin-bottom: 30px;
    }

    .join_yxk h3 {
        font-size: 18px;
        border-left: 3px solid #ff9a00;
        padding-left: 7px;
        margin-bottom: 20px;
    }

    .join_yxk ul {
        margin-top: 10px;
    }

    .join_yxk ul li {
        line-height: 28px;
    }

    .join_yxk ul li a {
        color: #666;
        display: inline-block;
        max-width: 255px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .join_yxk ul li i {
        background: url(../../assets/small_hot.png) no-repeat;
        height: 10px;
        width: 23px;
        background-size: 100% auto;
        display: inline-block;
        -webkit-transition: transform 0.25s;
        -webkit-transition: -webkit-transform 0.25s;
        transition: -webkit-transform 0.25s;
        transition: transform 0.25s;
        transition: transform 0.25s, -webkit-transform 0.25s;
        margin-left: 8px;
        vertical-align: 9px;
    }
</style>
<style scoped>
    .pagination {
        width: 100%;
        text-align: right;
        font-size: 12px;
        margin: 40px 0;
    }

    .pagination .count {
        color: #999;
        padding-right: 12px;
    }

    .pagination .first,
    .pagination .prev,
    .pagination .next,
    .pagination .last,
    .pagination .active {
        display: inline-block;
        margin-right: 5px;
        background-color: #ff9a00;
        padding: 3px 8px;
        border-radius: 4px;
        color: #fff;
        vertical-align: middle;
    }

    .pagination .ti {
        display: inline-block;
        margin-right: 1px;
        margin-left: 1px;
        padding: 0 7px;
        border: 0 none;
        background: 0;
        border-radius: 4px;
        color: #666;
        vertical-align: middle;
    }

    .pagination .active {
        display: inline-block;
        margin-right: 5px;
        background-color: #ff9a00;
        padding: 3px 8px;
        border-radius: 4px;
        color: #fff;
        vertical-align: middle;
    }
</style>