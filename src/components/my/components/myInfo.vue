<template>	
	<div class="myInfo">
		<header class="mui-bar mui-bar-nav" style="text-align: left;line-height: 44px;">
	        <span @click="goToBack" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
	         <span class="mui-pull-left mui-title">个人信息</span>
		</header>
		<div class="infoCon">
			<ul class="info_oper">
				<li>
					<span>头像</span>
					<span class="imaginfo">
						<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
						<span class="mui-icon mui-icon-arrowright"></span>
					</span>
				</li>
				<li>
					<span>昵称</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</li>
				<li>
					<span>Easy号</span>
					<span style="padding-right: 1em">Kchen01</span>
				</li>
				<li>
					<span>二维码</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</li>
				<li>
					<span>更多</span>
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
			goToBack(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.myInfo{
		height: 100%
	}
	.myInfo .infoCon{
		height: 100%;
		padding-top: 3em;
	}

	.infoCon .info_oper{
		padding: 1em;
	}
	.info_oper li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 3em;
		position: relative;
	}
	.info_oper li:first-child{
		height: 6em;
	}
	.info_oper li:before{
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 20.5em;
	    height: 0;
	    border: 1px solid #bcb7b7;	
	}
	.info_oper li img{
		width: 4em;
		height: 4em;
	}
	.imaginfo{
		display: flex;
		align-items: center;
	}

</style>