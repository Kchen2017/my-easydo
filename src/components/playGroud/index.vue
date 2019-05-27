<template>
    <div class="playGroup">
        <ul class="groupTypes">
	   		<li @click="goToFilter('basketball')">
	   			<span class="mui-icon icon-lanqiu"></span>
	   			<span class="go_swipLabel">篮球</span>
	   		</li>
	   		<li @click="goToFilter('badminton')">
	   			<span class="mui-icon icon-yumaoqiu"></span>
	   			<span class="go_swipLabel">羽毛球</span>
	   		</li>
	   		<li @click="goToFilter('tennis')">
	   			<span class="mui-icon mui-icon-plusempty"></span>
	   			<span class="go_swipLabel">添加</span>
	   		</li>
	   	</ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.playGroup {
    height: 100%;
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

</style>


