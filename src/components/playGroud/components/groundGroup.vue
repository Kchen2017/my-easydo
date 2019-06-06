<template>
    <ul class="groundPart">
        <li v-for="(item, index) in list" :key="index" class="itemp">
            <div class="pic"></div>
            <div class="msg">
                <span class="go_swipLabel">{{index+1}}号场地</span>
                <span class="type">
                    <span class="mui-icon mui-icon-eye">全场/半场/散场</span>
                </span>
                <button>预定</button>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: ["type"],
    data(){
        return {
            list: [{},{},{},{}]
        }
        
    }
}
</script>
<style>
    .groundPart {
        /* height: 100%; */
        background-color: #fff;
        margin-top: 5px;
        display: flex;
        justify-content: flex-start;
		flex-wrap: wrap;
		align-content: stretch;
        padding: 1em;
    }
    .groundPart .itemp {
        /* height: 200px; */
        width: 153px;
        /* background-color: aquamarine; */
        margin-left: 1em;
        margin-bottom: 1em;
        border: 1px solid #eee;
    }
    .groundPart .itemp .pic {
        width: 100%;
        height: 285px;
        /* background-color: blueviolet; */
        background-image: url("../../../assets/img/basketball.jpeg");
        background-size:cover;
    }
    .groundPart .itemp .msg {
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
    }
    .groundPart .itemp .msg .type {
        margin-top: 1em;
        font-size: 10px;
    }
    .groundPart .itemp .msg .type .mui-icon{
        font-size: 10px;
    }
</style>


