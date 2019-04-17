<template>
	<div class="my_col">
		<header class="mui-bar mui-bar-nav">
	        <span @click="goToBack" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
	        <span class="mui-pull-left mui-title">我的收藏</span>
		</header>
		<div class="coContainer">
			<mt-navbar class="page-part" v-model="selected">
			    <mt-tab-item id="where">go Where</mt-tab-item>
			    <mt-tab-item id="who">with Who</mt-tab-item>
		    </mt-navbar>
		    <mt-tab-container v-model="selected">
		        <mt-tab-container-item id="where">
			        group
			    </mt-tab-container-item>
			    <mt-tab-container-item id="who">
			        talk
			    </mt-tab-container-item>
		      </mt-tab-container>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				selected: "where"
			}
		},
		methods: {
			goToBack(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.my_col{
		height: 100%
	}
	.my_col .coContainer{
		height: 100%;
		padding-top: 3em;
	}
</style>