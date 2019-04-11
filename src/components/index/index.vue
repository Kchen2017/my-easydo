<template>
	<div class="goCom">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span @click="goToCity" class="mui-icon icon-location1 mui-pull-left">北京</span>
			<div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="">
				<span class="mui-icon mui-icon-search"></span>
			</div>
		</header>
		<div class="go_content">
			<div class="go_swip">
				<swip></swip>
			</div>
			<div class="go_recommend">
				<mt-navbar v-model="selected">
					<mt-tab-item id="where">Go Where</mt-tab-item>
					<mt-tab-item id="who">With Who</mt-tab-item>
				</mt-navbar>

				<mt-tab-container v-model="selected">
				    <mt-tab-container-item id="where">
				    	<recommend-list  ref="where"></recommend-list>
				    </mt-tab-container-item>
				    <mt-tab-container-item id="who">
				    	<recommend-list  ref="who"></recommend-list>
				    </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</div>
</template>
<script>
	import swip from "./components/swipCom.vue"
	import recommendList from "./components/recommendList.vue"
	import "@/assets/css/index.css"
	export default {
		components: {
			swip,
			recommendList
		},
		data(){
			return {
				selected: "where",
				
			}
		},
		methods: {
			goToCity(){
				this.$router.push({
					name: "city"
				})
			}
		},
		watch:{
			selected(newVal){
				if(newVal == "where"){
					// this.$refs.where.list(newVal)
				}else if(newVal == "who"){
					// this.$refs.who.list(newVal)
				}
			}
		}
	}
</script>