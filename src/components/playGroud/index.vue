<template>
    <div class="playGroup">
		<header class="mui-bar mui-bar-nav">
	        <h1 class="mui-title">我的场地</h1>
	    </header>
		<div class="groudCon">
			<ul class="groupTypes">
				<li  @click="selectFun('basket')" :class="{active: select === 'basket'}">
					<span class="mui-icon icon-lanqiu"></span>
					<span class="go_swipLabel">篮球</span>
				</li>
				<li @click="selectFun('yu')" :class="{active: select === 'yu'}">
					<span class="mui-icon icon-yumaoqiu"></span>
					<span class="go_swipLabel">羽毛球</span>
				</li>
				<li>
					<span class="mui-icon mui-icon-plusempty"></span>
					<span class="go_swipLabel">添加</span>
				</li>
			</ul>
			<groundGroup :type="select"></groundGroup>
		</div>   
    </div>
</template>
<script>
import groundGroup from "./components/groundGroup.vue"
export default {
	components: {
		groundGroup
	},
    data(){
		return {
			select: "basket"
		}
	},
	methods: {
		selectFun(flag){
			this.select = flag
		}
	}
}
</script>
<style>
.playGroup {
    height: 100%;
}
.playGroup .mui-bar {
	background-color: #5eaef3;
}
.playGroup .mui-bar .mui-title {
        color: #fff;
    }
.playGroup .groudCon{
	height: 100%;
	padding-top: 3em;
}
.playGroup .groupTypes {
    display: flex;
    background-color: #fff;
}
.playGroup .groupTypes li {
    padding: 1em;
}
.playGroup .go_swipLabel {
    font-size: 0.8em;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.playGroup .mui-icon{
	font-size: 2em;
}
.playGroup .groudCon .groupTypes .active  span{
	color: #007aff;
}

</style>


