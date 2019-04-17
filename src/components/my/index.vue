<template>
	<div class="myIndex">
		<header class="mui-bar mui-bar-nav">
	        <a class="mui-icon mui-icon-camera mui-pull-right" href="javascript:void(0)"></a>
		</header>
		<div class="my_con">
			<div @click="goToInfo" class="my_info">
				<div>
					<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
				</div>
				<div>
					<h2>Angel</h2>
					<p>
						<span>Easy号：1244555</span>
						<span>
							<span class="mui-icon mui-icon-paperplane"></span>
							<span class="mui-icon mui-icon-arrowright"></span>
						</span>
					</p>
				</div>
			</div>
		 	<ul class="my_operation">
		 		<li @click="goToCollection">
		 			<span class="mui-icon icon-shoucang1">收藏</span>
					<span class="mui-icon mui-icon-arrowright"></span>
		 		</li>
		 		<li>
		 			<span class="mui-icon icon-x">浏览记录</span>
					<span class="mui-icon mui-icon-arrowright"></span>
		 		</li>
		 		<li>
		 			<span class="mui-icon icon-qianbao2">钱包</span>
					<span class="mui-icon mui-icon-arrowright"></span>
		 		</li>
		 		<li>
		 			<span class="mui-icon icon-shezhi1">设置</span>
					<span class="mui-icon mui-icon-arrowright"></span>
		 		</li>
		 	</ul>
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
			goToInfo(){
				this.$router.push({
					name: "my_info"
				})
			},
			goToCollection(){
				this.$router.push({
					name: "my_collection"
				})
			}
		}
	}
</script>
<style>
	.myIndex{
		height: 100%
	}
	.myIndex .my_con{
		height: 100%;
  		padding-top: 3em;
	}
	.my_info{
		display: flex;
		justify-content: space-between;
		padding: 1em;
	}
	.my_info div:nth-child(2){
		width: 15em;
    	text-align: left;
	}
	.my_info img{
		width: 4em;
		height: 4em;
	}
	.my_info p {
		height: 4em;
    	line-height: 4em;
    	display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.my_operation{
		padding: 1em;
	}
	.my_operation li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 3em;
	}
	.myIndex .my_operation .mui-icon{
		font-size: 1em
	}
</style>