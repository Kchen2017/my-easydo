<template>
	<div class="search_page">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span @click="goToindex" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
			<div  class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="">
				<span class="mui-icon mui-icon-search"></span>
			</div>
			<span class="mui-pull-right">搜索</span>
		</header>
		<div class="search_content">
			
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods: {
			goToindex(){
				this.$router.push({
					name: "index"
				})
			}
		}
	}
</script>
<style >
	.search_page {
		height: 100%
	}
	.search_page .mui-pull-right{
		position: relative;
	    float: right;
	    top: -4.5em;
	}
	.headerstyle{
		height: 4em;
	}
	.headerstyle .mui-pull-left{
		font-size: 1em;
		margin-top: 1em;
	}
	.search_page .headerstyle .mui-search {
	    width: 17em;
	    left: 1.5em;
	    bottom: 2.2em;
	    height: 3em;
	}
	.headerstyle .mui-icon-search {
	    position: absolute;
	    top: 0px;
	    left: 5.5em;
	}
	.search_content{
		padding-top: 4.2em;
    	height: 100%;

	}
</style>