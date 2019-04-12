<template>
	<div class="goCom">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span @click="goToCity" class="mui-icon icon-location1 mui-pull-left">{{gpsCity}}</span>
			<div @click="goToSearch" class="mui-input-row mui-search">
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
				    	<where-list  ref="where"></where-list>
				    </mt-tab-container-item>
				    <mt-tab-container-item id="who">
				    	<who-list  ref="who"></who-list>
				    </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</div>
</template>
<script>
	import swip from "./components/swipCom.vue"
	import whereList from "./components/whereList.vue"
	import whoList from "./components/whoList.vue"
	import "@/assets/css/index.css"
	export default {
		components: {
			swip,
			whereList,
			whoList
		},
		data(){
			return {
				selected: "where",
				gpsCity: this.$route.query.city || "北京"
			}
		},
		methods: {
			goToCity(){
				this.$router.push({
					name: "city"
				})
			},
			goToSearch(){
				this.$router.push({
					name: "search"
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