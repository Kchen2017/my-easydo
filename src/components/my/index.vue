<template>
	<div class="myIndex">
		<header class="mui-bar mui-bar-nav">
	        <a class="mui-icon mui-icon-camera mui-pull-right" href="javascript:void(0)"></a>
		</header>
		<div class="my_con">
			<div class="my_info">
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
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
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
	}
</style>