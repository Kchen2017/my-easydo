<template>
	<div class="search_page">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span @click="goToindex" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
			<div  class="mui-input-row mui-search">
				<input v-model="inputCon" ref="searchInput" type="search" class="mui-input-clear" :placeholder="inputTip">
				<span class="mui-icon mui-icon-search"></span>
			</div>
			<span @click="goTofilter" class="mui-pull-right">搜索</span>
		</header>
		<div class="search_content">
			<mt-navbar v-model="selected">
				<mt-tab-item id="where">Go Where</mt-tab-item>
				<mt-tab-item id="who">With Who</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="selected">
			    <mt-tab-container-item id="where">
					<search-where-tab></search-where-tab>
			    </mt-tab-container-item>
			    <mt-tab-container-item id="who">
					<search-who-tab></search-who-tab>
			    </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>
<script>
	import "@/assets/searchPage.css"
	import  searchWhereTab from "./searchWhereTab.vue"
	import  searchWhoTab from "./searchWhoTab.vue"
	export default {
		components: {
			searchWhereTab,
			searchWhoTab
		},
		data(){
			return {
				inputTip: "定位去哪玩？",
				selected: "where",
				inputCon: ""
			}
		},
		watch: {
			selected(newVal){
				if(newVal=="where"){
					this.inputTip = "定位去哪玩？"
				}else if(newVal=="who"){
					this.inputTip = "寻找和谁玩？"
				}
			}
		},
		methods: {
			goToindex(){
				this.$router.push({
					name: "index"
				})
			},
			goTofilter(){
				if(!this.inputCon) return
				this.$router.push({
					name: "filter",
					query: {
						inputCon: this.inputCon
					}
				})
			}
		},
		mounted(){
			this.$refs.searchInput.focus()
		}
	}
</script>
<style >
	
</style>