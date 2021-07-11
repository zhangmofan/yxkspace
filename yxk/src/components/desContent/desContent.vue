<template>
    <div>
        <div class="hot_mdd h_parent">
            <h2>热门目的地</h2>
            <ul class="h_nav">
                <li v-for="(item,index) in area" class="h_item">
                    {{item}}
                </li>
            </ul>
            <div class="h_tab">
                <div class="h_list h_common show">
                    <dl v-for="(item,index) in contryList[0]">
                        <dt><a href="">{{item.name}}</a></dt>
                        <dd>
                            <a href="" v-for="(items,index) in item.citryList">
                                {{Object.keys(items)[0]}}
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="hot_mdd them_mdd h_parent">
            <h2>当季热门</h2>
            <ul>
                 <ul class="h_nav">
                <li v-for="(item,index) in month" class="h_item">
                    {{item}}
                </li>
            </ul>
            </ul>
            <div class="h_tab">
                <div class="h_list h_common show">
                     <ul>
                         <li v-for="(item,index) in monthList">
                             <a href="">
                                 <img :src="item.imgurl" alt="">
                                 <div class="title">{{item.title}}</div>
                             </a>
                         </li>
                     </ul>
                </div>
            </div>
        </div>
        <div class="hot_mdd them_mdd h_parent">
            <h2>主题推荐</h2>
            <ul>
                 <ul class="h_nav">
                <li v-for="(item,index) in type" class="h_item">
                    {{item}}
                </li>
            </ul>
            </ul>
            <div class="h_tab">
                <div class="h_list h_common show">
                     <ul>
                         <li v-for="(item,index) in typeList">
                             <a href="">
                                 <img :src="item.imgurl" alt="">
                                 <div class="title">{{item.title}}</div>
                             </a>
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
                content: [],
                area: [],
                contryList: [],
                month: [],
                monthList: [],
                type: [],
                typeList: []
            }
        },
        created() {
            fetch("http://localhost:8080/getdata.json").then(res => {
                return res.json()
            }).then(res => {
                this.area = res[0].area
                this.contryList = res[0].contryList
                this.month = res[1].month
                this.monthList = res[1].imgList
                this.type = res[2].type
                this.typeList = res[2].imgList
                console.log(this.contryList);
            })
        },
        methods: {

        },
    }
</script>
<style scoped>
    .hot_mdd {
        text-align: center;
        width: 1200px;
        margin: 50px auto;
        color: #333;
    }

    .hot_mdd h2 {
        font-size: 28px;
        margin-bottom: 30px;
    }

    .hot_mdd .h_nav {
        display: inline;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 5px;
    }

    .hot_mdd .h_tab {
        margin-top: 30px;
    }

    .hot_mdd .h_tab .h_list {
        margin-right: -90px;
        column-width: 550px;
        -moz-column-width: 550px;
        -webkit-column-width: 550px;
        display: none;
    }

    .hot_mdd .h_tab .h_list:after,
    .hot_mdd .h_tab .h_list:before {
        content: " ";
        display: table;
    }

    .hot_mdd .h_tab dl {
        border-bottom: 1px dashed #eee;
        padding: 20px 0 20px 100px;
        display: inline-block;
        margin-right: 90px;
        width: 550px;
        box-sizing: border-box;
    }

    .hot_mdd .h_tab dl dt {
        float: left;
        font-size: 16px;
        color: #333;
        line-height: 25px;
        margin-left: -100px;
        font-weight: 400;
    }

    .hot_mdd .h_tab dl dt a {
        color: #333;
        font-size: 16px;
        font-family: "Microsoft Yahei";
        text-decoration: underline !important;
        padding: 0 3px;
    }

    .hot_mdd .h_tab dl dd {
        line-height: 25px;
        text-align: left;
    }

    .hot_mdd .h_tab dl dd a {
        margin-right: 16px;
        color: #666;
    }

    .hot_mdd .h_nav li {
        display: inline-block;
        cursor: pointer;
        font-size: 18px;
        margin: 0 20px 0;
        padding: 0 5px 1px;
    }

    .hot_mdd .h_tab .h_list {
        margin-right: -90px;
        column-width: 550px;
        -moz-column-width: 550px;
        -webkit-column-width: 550px;
        display: none;
    }

    .show {
        display: block !important;
    }
    .them_mdd .h_tab li {
    float: left;
    margin: 0 20px 20px 0;
    width: 285px;
    height: 160px;
    position: relative;
    background-color: #f2f2f2;
    font-size: 20px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.them_mdd .h_tab li .title {
    text-align: left;
    color: #fff;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 12px 20px 0;
    height: 57px;
    font-weight: normal;
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#99000000",GradientType=0);
    -webkit-transition: opacity 0.5s ease 0s;
    transition: opacity 0.5s ease 0s;
}
.hot_mdd .h_tab dl dd {
    line-height: 25px;
    text-align: left;
}
</style>