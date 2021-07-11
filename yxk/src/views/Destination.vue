<template>
    <div>
        <div class="mdd_banner">
            <div class="bg" :style="{backgroundImage: 'url(' + banner.img + ')'}">
                <div class="auto-x">
                    <h1>
                        <a target="_blank" href="https://www.youxiake.com/gonglue/view?id=4571">
                            独库公路通车倒计时！
                        </a>
                    </h1>
                    <p class="text">
                        {{banner.desc}}
                    </p>
                    <a class="more" href="https://www.youxiake.com/gonglue/view?id=4571">
                        阅读全文>
                    </a>
                    <div class="search">
                        <div class="searchbar">
                            <input type="text" placeholder="我要去……" autocomplete="off" class="search-input">
                            <button role="button" class="search-button">搜索</button>
                            <div class="search-select">
                                <ul mode=out-in>

                                </ul>
                            </div>
                        </div>
                        <div class="place_hot">
                            <a href="" v-for="(item,index) in banner.list">{{item.name}}</a>
                        </div>
                    </div>
                </div>
                <div class="pic_info"></div>
            </div>
        </div>
        <des-content></des-content>
    </div>
</template>

<script>
    import desContent from "@/components/desContent/desContent.vue"
    export default {
        name: '',
        data() {
            return {
                banner: []
            }
        },
        created() {
            this.$axios.get("https://bbs.youxiake.com/api/mdd/banner").then(res => {
                this.banner = res.data.data
                console.log(this.banner);
            })
           
    },
    components: {
        desContent
    }
    }
</script>

<style scoped>
    .mdd_banner {
        box-sizing: border-box;
    }

    .mdd_banner .bg {
        position: relative;
        height: 700px;
        background-position: center;
        background-repeat: no-repeat;
    }

    .mdd_banner {
        background: #f5e2c4;
        height: 700px;
    }

    .mdd_banner .auto-x {
        width: 1200px;
        margin: 0 auto;
        padding-top: 260px;
        color: #fff;
    }

    .mdd_banner .auto-x h1 {
        width: 610px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
        margin-bottom: 35px;
        margin-left: 10px;
    }

    .mdd_banner .auto-x .text {
        width: 610px;
        height: 100px;
        font-size: 18px;
        line-height: 25px;
        margin-left: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        margin-bottom: 20px;
        text-shadow: 0 2px 3px rgb(0 0 0 / 80%);
    }

    .mdd_banner .auto-x .more {
        font-size: 16px;
        padding-left: 13px;
    }

    .mdd_banner .auto-x .search {
        width: 620px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        padding: 12px 10px;
        margin-top: 50px;
    }

    .mdd_banner .auto-x .searchbar {
        position: relative;
    }

    .mdd_banner .auto-x .place_hot {
        line-height: 30px;
        font-size: 12px;
    }

    .mdd_banner .auto-x .search-input {
        float: left;
        width: 520px;
        height: 41px;
        padding: 0 10px;
        background-color: #fff;
        border: 0 none;
        line-height: 41px;
        font-size: 16px;
        color: #111;
        border-radius: 4px 0 0 4px;
    }

    input {
        outline: none;
    }

    .mdd_banner .auto-x .search-button {
        float: left;
        width: 79px;
        height: 41px;
        line-height: 41px;
        display: block;
        background-color: #ff9a00;
        border-radius: 0 4px 4px 0;
        font-size: 18px;
        border: none;
        outline: none;
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

    .search-select ul {
        margin: 0;
        text-align: left;
    }

    .mdd_banner .auto-x .searchbar:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        line-height: 0;
    }

    .mdd_banner .auto-x .place_hot {
        line-height: 30px;
        font-size: 12px;
    }

    .mdd_banner .auto-x a {
        color: #fff;
    }

    .mdd_banner .auto-x .place_hot a {
        margin-right: 10px;
        display: inline-block;
    }
</style>