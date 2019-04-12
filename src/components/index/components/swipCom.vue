<template>
	<mt-swipe >
	   <mt-swipe-item>
	   	<ul style="display: flex;justify-content:space-between;padding: 1em 1em">
	   		<li @click="goToFilter('basketball')">
	   			<span class="mui-icon icon-lanqiu"></span>
	   			<span class="go_swipLabel">篮球</span>
	   		</li>
	   		<li @click="goToFilter('football')">
	   			<span class="mui-icon icon-zuqiu"></span>
	   			<span class="go_swipLabel">足球</span>
	   		</li>
	   		<li @click="goToFilter('badminton')">
	   			<span class="mui-icon icon-yumaoqiu"></span>
	   			<span class="go_swipLabel">羽毛球</span>
	   		</li>
	   		<li @click="goToFilter('tennis')">
	   			<span class="mui-icon icon-wangqiu2"></span>
	   			<span class="go_swipLabel">网球</span>
	   		</li>
	   		<li @click="goToFilter('golf')">
	   			<span class="mui-icon icon-golf"></span>
	   			<span class="go_swipLabel">高尔夫</span>
	   		</li>
	   	</ul>
	   </mt-swipe-item>
	   <mt-swipe-item>
	   	<ul style="display: flex;justify-content:space-between;padding: 1em 1em">
	   		<li @click="goToFilter('billiards')">
	   			<span class="mui-icon icon-taiqiu3"></span>
	   			<span class="go_swipLabel">台球</span>
	   		</li>
	   		<li @click="goToFilter('swimming')">
	   			<span class="mui-icon icon-youyong4"></span>
	   			<span class="go_swipLabel">游泳</span>
	   		</li>
	   		<li @click="goToFilter('volleyball')">
	   			<span class="mui-icon icon-paiqiu1"></span>
	   			<span class="go_swipLabel">排球</span>
	   		</li>
	   		<li @click="goToFilter('gym')">
	   			<span class="mui-icon icon-jianshen"></span>
	   			<span class="go_swipLabel">健身</span>
	   		</li>
	   		<li @click="goToFilter('others')">
	   			<span class="mui-icon icon-qita"></span>
	   			<span class="go_swipLabel">其他</span>
	   		</li>
	   	</ul>
	   </mt-swipe-item>
	</mt-swipe>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			goToFilter(flag){
				this.$router.push({
					name: "filter",
					query: {
						flag: flag
					}
				})
			}
		}
	}
</script>