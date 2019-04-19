<template>
	<div class="easy_talking">
		<header class="mui-bar mui-bar-nav">
	        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-back mui-pull-left" href="javascript:void(0)"></a>
	        <span class="mui-pull-left mui-title" style="text-align: left;">我是人</span>
	        <a  class="mui-action-back mui-icon mui-icon-bars mui-pull-right paddinglink" href="javascript:void(0)"></a>
	    </header>
	    <div class="talking_msg">
	    	
	    </div>
	    <div class="footer_bar">
	    	<div class="send_foot">
		    	<span @click="ishowBar=!ishowBar" class="mui-action-back mui-icon icon-yuyin4"></span>
		    	<input type="text">
		    	<span class="mui-action-back mui-icon icon-biaoqing"></span>
		    	<span class="mui-action-back mui-icon icon-jiahao"></span>
		    </div>
		    <div v-if="ishowBar" class="operation_bar">
		    	<div class="memberInfo" v-for="item in members">
	    			<p>
	    				<span class="mui-action-back mui-icon icon-liulanjiluzuji"></span>
	    			</p>
	    			<p>相册</p>
	    		</div>
		    </div>
	    </div>
	    
	</div>
</template>
<script>
	export default{
		data(){
			return {
				ishowBar: false,
				members: [{},{},{},{},{},{},{},{},{},{},{},{}]
			}
		},
		methods: {
			goToindex(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.easy_talking{
		height: 100%
	}
	.easy_talking .footer_bar{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.easy_talking .send_foot{
		height: 3em;
		width: 100%;
		background-color: #d9d9d9;
		border-top: 1px solid #bbb;
		text-align: left;
		padding-top: 0.2em;
		padding-right: 0.5em;
		padding-left: 0.5em;
		display: flex;
		justify-content: space-between;
	}
	.easy_talking .send_foot input{
		width: 70%;
		vertical-align:middle;
	}
	.easy_talking .send_foot .icon-yuyin4{
		position: relative;
		width: 1em
	}
	.easy_talking .send_foot .icon-yuyin4:before{
		position: absolute;
		top: 10px;
	}
	.easy_talking .send_foot .icon-biaoqing{
		position: relative;
		width: 1em
	}
	.easy_talking .send_foot .icon-biaoqing:before{
		position: absolute;
		top: 10px;
	}
	.easy_talking .send_foot .icon-jiahao{
		position: relative;
		width: 1em
	}
	.easy_talking .send_foot .icon-jiahao:before{
		position: absolute;
		top: 10px;
	}
	.operation_bar{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-content: stretch;
		padding: 1em;
		height: 10em;
		overflow-y: scroll
	}
	.operation_bar .memberInfo{
		width: 3em;
		text-align: center;
	}
</style>