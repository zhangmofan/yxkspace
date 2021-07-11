<template>
    <div class="min_height">
        <div id="slideBox" class="slideBox">
            <div class="bd">
                <ul class="bdul">
                    <li v-for="(item,index) in articles" :class="index==slideIndex-1?'bannerShow':'bannerNone'"
                        class="mySlides fade" @mouseenter="enter" @mouseleave="leave">
                        <a :href="item.link" target="_blank">
                            <img :src="item.headerImageUrl">
                        </a>
                        <h3>{{item.title}}</h3>
                    </li>
                </ul>
            </div>
            <div class="hd">
                <ul class="">
                    <li v-for="(item,index) in articles" :class="index==slideIndex-1?'on':''">
                        <a :href="item.link" target="_blank">
                            <img
                                :src="item.headerImageUrl+'?imageMogr2/thumbnail/!110x62r/gravity/Center/crop/!110x62/quality/90'">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="search_home">
                <div class="search_type">
                    <input type="text" autocomplete="off" @input="search" placeholder="游记/旅行攻略/目的地" class="input"
                        name="" id="">
                    <button class="button" @click="pushSearch">搜索</button>
                    <div class="search-select j_select" v-if="searchitem.length>0">
                        <ul>
                            <li v-if="!searchcontent[0]">没有找到"{{searchitem}}"</li>
                            <li v-for="(item,index) in searchcontent" class="search-select-option search-select-list"  @mouseenter="enters(index)" :class="index==enterIndex?'selectback':''" >
                                <span class="mdd_name" v-html="item.name"></span>
                                <span class="city_name">{{item.cityname}}</span>
                            </li>
                        </ul>
                    </div>
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
                articles: [],
                slideIndex: 1,
                time: "",
                searchcontent:[],
                searchitem:'',
                enterIndex:-1
            }
        },
        created() {
            this.$axios.get("https://bbs.youxiake.com/api/home/topArticle").then(res => {
                this.articles = res.data.data.articles
            }).then(() => {
                this.time = setInterval(this.showSlides, 4000);
            })

        },

        methods: {
            showSlides() {
                this.slideIndex++;
                if (this.slideIndex > this.articles.length) {
                    this.slideIndex = 1
                }
            },
            // 鼠标移入时轮播图取消
            enter() {
                clearInterval(this.time);
            },
            // 鼠标离开时轮播图继续
            leave() {
                this.time = setInterval(this.showSlides, 4000);
            },
            search(e) {
                
                this.searchitem = e.target.value.trim()
                this.$axios.get("https://bbs.youxiake.com/api/mdd/search?keyword=" + e.target.value + "&type=1").then(res => {
                    this.searchcontent = res.data.data
                    localStorage
                })
            },
            enters(index){
                this.enterIndex = index
            },
            pushSearch(){
                if(this.searchitem.length>0){
                    location.href = "https://bbs.youxiake.com/search?keyword="+this.searchitem
                }
            }

        },
    }
</script>
<style>
 
</style>
<style scoped>
   

    .slideBox {
        position: relative;
    }

    .slideBox .bd {
        position: relative;
        z-index: 0;
        overflow: hidden;
    }

    .slideBox .bd li a {
        display: block;
    }

    .slideBox .bd img {
        width: 100%;
        height: 100%;
        vertical-align: top;
    }

    .bdul {
        width: 1519px;
        height: 502px;
        position: relative;
    }

    .slideBox .bd li h3 {
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -590px;
        color: #fff;
        font-size: 26px;
        text-shadow: 0 1px 3px rgb(0 0 0 / 90%);
        text-align: left;
    }

    /* 淡出动画 */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 4s;
        animation-name: fade;
        animation-duration: 4s;
    }

    @-webkit-keyframes fade {
        from {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    @keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    .bannerNone {
        display: none;
    }

    .bannerShow {
        display: block;
    }

    .slideBox .hd {
        position: absolute;
        right: 170px;
        top: 45%;
        margin-top: -166px;
        width: 110px;
        z-index: 2;
    }

    .slideBox .hd ul li {
        width: 110px;
        height: 62px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 5px;
    }

    .slideBox .hd ul li.on {
        outline: 2px solid #ffba00;
    }
</style>
<style scoped>
    .search_home {
        position: absolute;
        z-index: 2;
        width: 630px;
        left: 50%;
        bottom: 90px;
        margin-left: -315px;
        font-weight: 700;
        font-size: 18px;
        color: #666;
    }

    .search_home .search_type {
        padding: 13px 18px;
        width: 100%;
        height: 67px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 4px;
    }

    .search_home .search_type {
        height: 40px;
        position: relative;
    }

    .search_home .search_type .input {
        width: 505px;
        height: 40px;
        margin: 0;
        padding: 0;
        line-height: 40px;
        font-weight: normal;
        border-radius: 5px 0 0 5px;
        border: 1px solid transparent;
        outline: none;
        float: left;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 16px;
        padding: 0 10px;
    }

    .search_home .search_type .button {
        width: 89px;
        border: none;
        height: 40px;
        float: left;
        background: #ff9a00;
        text-align: center;
        color: #fff;
        line-height: 40px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        outline: none;
    }

    .search_home .search-select {
        position: absolute;
        top: 58px;
        width: 593px;
        max-height: 328px;
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

    .search_home .search-select ul {
        margin: 0;
        text-align: left;
    }
    .search_home .search-select li {
    padding: 0 20px;
    line-height: 40px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
}
.search_home .selectback {
    background-color: #ffebd3!important;
    cursor: pointer;
}
.search_home .search-select li .city_name {
    color: #999;
    float: right;
    font-weight: normal;
    font-size: 12px;
}
.search_home .search-select li .mdd_name{
    padding-right: 12px;
    color: #111;
    font-size: 16px;
    font-weight: normal;
}

</style>