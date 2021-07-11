<template>
    <div class="min_height">
        <div class="qz_banner"></div>
        <div class="home_content">
            <div class="home_left">
                <div class="qz_column">
                    <h3>城市圈</h3>
                    <div class="qz_type_list">
                        <ul>
                            <li v-for="(item,index) in type1" @click="push(item.link)">
                                <router-link to="#">
                                    <div class="img">
                                        <img :src="item.cover" alt="">
                                    </div>
                                    <div class="tag">{{item.name}}</div>
                                    <div class="info">
                                        <span class="qz_hot">
                                            <i></i>
                                            {{item.hot_value}}
                                        </span>
                                        <span class="qz_rs">
                                            <i></i>
                                            {{item.member_num}}
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="qz_column xq_column">
                    <h3 class="border">兴趣圈</h3>
                    <div class="qz_type_list">
                        <ul>
                            <li v-for="(item,index) in type2" @click="push(item.link)">
                                <router-link to="#">
                                    <div class="img">
                                        <img :src="item.cover" alt="">
                                    </div>
                                    <div class="tag">{{item.name}}</div>
                                    <div class="info">
                                        <span class="qz_hot">
                                            <i></i>
                                            {{item.hot_value}}
                                        </span>
                                        <span class="qz_rs">
                                            <i></i>
                                            {{item.member_num}}
                                        </span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
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

            </div>
        </div>
    </div>
</template>

<script>
  
    export default {
        name: '',
        data() {
            return {
                type1: [],
                type2: [],
                thumb: {},
                recommends: [],
                recommendt:[]
            }
        },
        created() {
            this.$axios.get("https://bbs.youxiake.com/api/quanzi/get?type=1").then(res => {
                this.type1 = res.data.data
                console.log(this.type1);
            })
            this.$axios.get("https://bbs.youxiake.com/api/quanzi/get?type=2").then(res => {
                this.type2 = res.data.data
                console.log(this.type2);
            })
            this.$axios.get("https://bbs.youxiake.com/api/home/adData?type=2").then(res => {
                this.thumb = res.data.data
            })
            this.$axios.get("https://bbs.youxiake.com/api/home/recommendData?type=4").then(res => {
                this.recommends = res.data.data
            })
             this.$axios.get("https://bbs.youxiake.com/api/home/recommendData?type=5").then(res => {
                this.recommendt = res.data.data
            })
        },
        methods: {
            push(link){
                location.href = link
            }
        },
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    .qz_column h3 span.border {
        border-bottom: 3px solid #ff9a00;
        display: inline-block;
        height: 47px;
    }

    .home_content:after,
    .home_content:before {
        content: " ";
        display: table;
        clear: both;

    }

    .qz_column .qz_type_list ul:after,
    .qz_column .qz_type_list ul:before {
        content: " ";
        display: table;
        clear: both;
    }

    .qz_column.xq_column {
        margin-top: 50px;
    }

    .qz_banner {
        background: url(../assets/qz_banner.jpg);
        height: 260px;
        width: 100%;
        background-position: 50%;
    }

    .home_content {
        width: 1200px;
        margin: 30px auto 0;
    }

    .home_content .home_left {
        width: 880px;
        float: left;
    }

    .home_content .home_right {
        width: 280px;
        float: right;
    }

    .qz_column.xq_column {
        margin-top: 50px;
    }

    .qz_column h3 {
        border-bottom: 2px solid #f2f2f2;
        height: 47px;
        line-height: 47px;
        margin-top: -10px;
        color: #333;
    }

    .qz_column .qz_type_list {
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .qz_column .qz_type_list ul {
        margin-right: -20px;
    }

    .qz_column .qz_type_list ul li {
        width: 205px;
        height: 175px;
        position: relative;
        margin: 0 20px 20px 0;
        float: left;
    }

    .qz_column .qz_type_list ul li .img {
        height: 115px;
        overflow: hidden;
        width: 100%;
    }

    .qz_column .qz_type_list ul li img {
        height: 115px;
        -webkit-transition: all .3s;
        transition: all .3s;
    }

    .qz_column .tag {
        background: url(../assets/qz_bg1.png);
        height: 28px;
        width: 80px;
        font-size: 14px;
        text-align: center;
        line-height: 28px;
        color: #333;
        position: absolute;
        left: 9px;
        bottom: 44px;
    }

    .qz_column .qz_type_list ul li .info {
        border: 1px solid #e9e9e9;
        border-top: none;
        padding: 34px 0 0 15px;
        color: #999;
        font-size: 12px;
    }

    .qz_column .qz_type_list ul li .info span {
        padding-right: 18px;
    }

    .qz_hot {
        margin-top: 30px;
    }

    .qz_column .qz_type_list ul li .info span.qz_hot i {
        background: url(../assets/qz_hot.png);
        height: 13px;
        width: 11px;
        display: inline-block;
        vertical-align: -1px;
        margin-right: 8px;
    }

    .qz_column .qz_type_list ul li .info span {
        padding-right: 18px;
    }

    .qz_column .qz_type_list ul li .info span.qz_rs i {
        background: url(../assets/qz_rs.png);
        height: 12px;
        width: 16px;
        display: inline-block;
        vertical-align: -1px;
        margin-right: 8px;
    }
</style>
<style scoped>
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }

    a {
        text-decoration: none;
    }

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
        background: url(../assets/home_write.png) no-repeat;
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
        background: url(../assets/n_li1.png) no-repeat;
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
        background: url(../assets/small_hot.png) no-repeat;
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