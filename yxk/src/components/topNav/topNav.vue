<template>
    <div class="public_head">
        <div class="public_head_auto">
            <ul class="public_head_nav">
                <li class="logo"><a href="https://www.youxiake.com"></a></li>
                <li><a href="https://www.youxiake.com">首页</a></li>
                <li><a href="/">社区</a></li>
                <li><router-link to="/circle">圈子</router-link></li>
                <li><<router-link to="/destination">目的地</router-link></li>
                <li><a href="https://bbs.youxiake.com/wenda" id="wenda">问答</a></li>
                <li><a href="https://www.youxiake.com/gonglue">攻略</a></li>
                <li><a href="https://www.youxiake.com/film/" target="_blank">视频</a></li>
                <li><a href="https://www.youxiake.com/leader" target="_blank">领队</a></li>
                <li><a href="http://www.youxiake.net" target="_blank">摄影</a></li>
                <li class="yaoyao_box">
                    <a href="javascript:;" class="yaoyao_a">旅游</a>
                    <div class="yaoyao_ul">
                        <a href="http://www.youxiake.com/around" target="_blank" class="yaoyao_li">周边游</a> 
                        <a href="http://www.youxiake.com/cn" target="_blank" class="yaoyao_li">国内游</a> <a href="http://www.youxiake.com/out" target="_blank"
                            class="yaoyao_li">出境游</a> <a href="http://www.youxiake.com/wanle" target="_blank"
                            class="yaoyao_li">当地玩乐</a> <a href="http://www.youxiake.com/qinzi" target="_blank"
                            class="yaoyao_li">亲子游</a> <a href="http://www.youxiake.com/huwai" target="_blank"
                            class="yaoyao_li">户外游</a> <a href="http://www.youxiake.com/dingzhi" target="_blank"
                            class="yaoyao_li">定制游</a> <a href="http://www.youxiake.com/sport" target="_blank"
                            class="yaoyao_li">活动赛事</a>
                    </div>
                </li>
                <input type="hidden" value="https://www.youxiake.com/login?refer=https%3A%2F%2Fbbs.youxiake.com"
                    id="yxklogin">
                <li style="float: right;"><a href="https://www.youxiake.com/reg">注册</a></li>
                <li style="float: right;"><a href="https://www.youxiake.com/login?refer=https://bbs.youxiake.com">登录</a>
                </li>
            </ul>
            <div class="search_home search_home2 head_search">
                <div class="search_type">
                    <input type="text" autocomplete="off" class="input">
                    <button class="button" id="search_button"></button>
                    <div class="search-select">
                        <ul mode="out-in"></ul>
                    </div>
                </div>
            </div>
            <div class="punch">
                <div class="day_btn">签到</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        
    }
</script>

<style scoped>
    .search_home.head_search .search_type .input{
    width: 0px;
    border: none;
    padding: 0;
}
.search_home .search_type .input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: 400;
    border-radius: 5px 0 0 5px;
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
.search_home.head_search .search_type .button {
    background: url(../../assets/head_fdj1.png) no-repeat;
    height: 17px;
    width: 17px;
    background-size: 100% auto;
    float: left;
    outline: none;
    margin-top: 5px;
}
button {
    overflow: visible;
}   

.search_home .search-select {
    position: absolute;
    top: 46px;
    width: 368px;
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
.search-select {
    position: absolute;
    top: 48px;
    width: 598px;
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
.search-select ul {
    margin: 0;
    text-align: left;
}
.public_head ul {
    display: block;
}
.search_home.search_home2::before {
    width: 1px;
    content: "";
    height: 20px;
    display: block;
    position: absolute;
    right: -13px;
    top: 3px;
    background: #fff;
}

.punch .day_btn{
    position: absolute;
    right: 200px;
    top: 25px;
    width: 55px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    color: #333;
    background: #ffd731;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;
}




    ul {
        padding: 0;
        margin: 0;
    }

    li,
    ol {
        list-style: none;
    }

    .public_head {
        font-family: Microsoft YaHei;
        width: 100%;
        height: 70px;
        background: #000;
        position: relative;
        top: 0;
        left: 0;
    }

    .public_head_auto {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    .public_head ul {
        display: block;
    }

    .public_head .public_head_nav li.logo {
        width: 120px;
        height: 50px;
        margin-top: 10px;
        margin-right: 35px;
        margin-left: 0;
    }

    .public_head .public_head_nav li {
        display: inline-block;
        position: relative;
        margin: 0 17px;
        vertical-align: top;
        height: 70px;
    }

    .public_head .logo a {
        width: 127px;
        height: 50px;
        background-image: url(../../assets/logo.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .public_head li a {
        display: inline-block;
        height: 70px;
        line-height: 70px;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        font-family: Microsoft YaHei;
    }
    .yaoyao_a, .yaoyao_box {
    position: relative!important;
}
.public_head li a {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    font-family: Microsoft YaHei;
}
.yaoyao_a {
    padding-right: 15px;
}
.yaoyao_ul {
    display: none;
    position: absolute;
    left: -35px;
    top: 70px;
    width: 120px;
    background: #fff;
    z-index: 1001;
    padding: 0 0 10px;
}
.public_head li a.yaoyao_li {
    display: block;
    margin-left: 32px;
    width: 88px;
    height: 39px!important;
    line-height: 39px!important;
    font-size: 14px!important;
    color: #333;
}
.search_home.head_search {
    position: absolute;
    z-index: 8;
    width: 17px;
    right: 285px;
    bottom: 20px;
    font-size: 18px;
    color: #666;
    height: 27px;
    line-height: 27px;
    margin-left: 0;
    left: auto;
    border-radius: 3px;
}
.search_home.head_search .search_type {
    height: 27px;
    padding: 0;
    border-radius: 3px !important;
}
.yaoyao_a:after {
    content: "";
    display: block!important;
    position: absolute!important;
    right: 0;
    top: 0;
    width: 10px;
    height: 70px;
    background-image: url(../../assets/down.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 7px 4px;
}
</style>