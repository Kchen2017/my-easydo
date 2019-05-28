<template>
    <div class="groundPart">
        <div v-for="(item, index) in list" :key="index">
            <span class="mui-icon icon-qiuchang1"></span>
			<span class="go_swipLabel">{{index+1}}号场地</span>
        </div>
    </div>
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
        height: 100%;
        background-color: #fff;
        margin-top: 5px;
        display: flex;
        justify-content: flex-start;
		flex-wrap: wrap;
		/* align-content: stretch; */
        padding: 1em;
    }
    .groundPart div {
        height: 200px;
        width: 145px;
        /* background-color: aquamarine; */
        margin-left: 1em;
    }
    .groundPart div .mui-icon {
        font-size: 160px
    }
</style>


