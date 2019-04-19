<template>
	<div class="filter_context">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span @click="goToback" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
			<div  class="mui-input-row mui-search">
				<input ref="searchInput" type="search" class="mui-input-clear" :placeholder="inputTip">
				<span class="mui-icon mui-icon-search"></span>
			</div>
			<span class="mui-pull-right">搜索</span>
		</header>
		<div class="filter_content">
			<filter-bar 
		      top="0" 
		      :bar-menus="barMenus" 
		      @showDialog="handleShowDialog" 
		      @closeDialog="handleCloseDialog" 
		      @changeTab="handleChangeTab"
		      @changeMainItem="handleChangeMainItem" 
		      @changeSelect="changeData">
		    </filter-bar>
		    <div class="list_con">
		    	<where-list v-if="typefilter=='where'"  ref="where"></where-list>
		    	<who-list v-else  ref="who"></who-list>
		    </div>
		    
		</div>
	</div>
</template>

<script>
	import FilterBar from 'vue-filter-bar'
	import barMenus from '@/common/barMenus'
	import whereList from "./where/whereList.vue"
	import whoList from "./who/whoList.vue"
	import "@/assets/css/index.css"
	export default {
		components: {
			FilterBar,
			whereList,
			whoList
		},
		data(){
			return {
				inputTip: "",
				barMenus: barMenus,
				typefilter: "where"
			}
		},
		methods: {
			goToback(){
				this.$router.go(-1)
			},
			handleShowDialog(v) {
	          // console.log(v);
	        },
	        handleCloseDialog(v) {
	          // console.log(v);
	        },
	        handleChangeTab(v) {
	          // console.log(v);
	        },
	        handleChangeMainItem(v) {
	          // console.log(v)
	        },
	        changeData(v) {
	          console.log(v);
	        }
		},
		created(){
			if(this.$route.query.inputCon) {
				this.inputTip = this.$route.query.inputCon
			}else{
				this.inputTip = this.$route.query.flag
			}
		}
	}
</script>

<style>
	.filter_context {
		height: 100%
	}
	.filter_context .mui-pull-right{
		position: relative;
	    float: right;
	    top: -4.5em;
	}
	.filter_context .headerstyle{
		height: 4em;
	}
	.filter_context .headerstyle .mui-pull-left{
		font-size: 1em;
		margin-top: 1em;
	}
	.filter_context .headerstyle .mui-search {
	    width: 17em;
	    left: 1.5em;
	    bottom: 2.2em;
	    height: 3em;
	}
	.filter_context .headerstyle .mui-icon-search {
	    position: absolute;
	    top: 0px;
	    left: 0em;
	}
	.filter_context .filter_content{
		padding-top: 4.2em;
    	height: 100%;
	}
	.filter_context .filterbar{
		position: relative;
	}
	.list_con{
		height: 100%;
    	overflow-y: scroll;
	}
</style>