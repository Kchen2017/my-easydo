<template>
	<div class="who_Detail">
		<header class="mui-bar mui-bar-nav">
	        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-back mui-pull-left" href="javascript:void(0)"></a>
	        <a @click="moreFun" class="mui-action-back mui-icon mui-icon-bars mui-pull-right paddinglink" href="javascript:void(0)"></a>
	        <a class="mui-action-back mui-icon mui-icon-star mui-pull-right paddinglink" href="javascript:void(0)"></a>
	        <a class="mui-action-back mui-icon mui-icon-redo mui-pull-right paddinglink" href="javascript:void(0)"></a>
	    </header>
	    <div class="who_con">
	    	<div class="who_title">
	    		<div class="img">
	    			<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
	    		</div>
				<div class="info">
					<h4>龙骑士</h4>
					<p>地区： 北京海淀</p>
					<p>签名： 干翻一切！</p>
				</div>
	    	</div>
	    	<div class="group_msg">
	    		<p>地址：接口接口接口将分开发家会计师康师傅</p>
	    		<p>人数限制：10/12</p>
	    		<p>付费方式： AA</p>
	    	</div>
	    	<p style="padding: 1em">群成员：</p>
	    	<div class="group_member">
	    		<div class="memberInfo" v-for="item in members">
	    			<p>
	    				<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
	    			</p>
	    			<p>Kchen</p>
	    		</div>
	    	</div>
	    	<div class="operation">
	    		<mt-button type="primary" >参局</mt-button>
	    		<mt-button type="primary" >加入群</mt-button>
	    	</div>
	    	
	    	
	    </div>
	    <!--右上角弹出菜单-->
	    <div  class="mui-popover detail_topPopover" :class="{'mui-active': isShowMore}" v-if="isShowMore" style="display: block;">
			<div class="mui-popover-arrow"></div>
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<a href="javascript:void(0)">Item1</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item2</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item3</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item4</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item5</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item6</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item7</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item8</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item9</a>
						</li>
						<li class="mui-table-view-cell"><a href="javascript:void(0)">Item10</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isShowMore: false,
				members: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
			}
		},
		methods: {
			goToindex(){
				this.$router.go(-1)
			},
			moreFun(){
				this.isShowMore = !this.isShowMore
			},


		}
	}
</script>
<style>
	.who_Detail{
		height: 100%;
	}
	.who_Detail .who_con{
		height: 100%;
  		padding-top: 3em;
  		text-align: left;
	}
	.who_Detail .detail_topPopover{
		position: fixed;
		top: 46px;
		right: 6px;
	}
	.who_Detail .detail_topPopover .mui-popover-arrow{
		left: auto;
		right: 6px;
	}
	.who_con .who_title{
		display: flex;
		justify-content: space-between;
		padding: 1em
	}
	.who_con img{
		width: 4em;
		height: 4em;
	}
	.who_con .who_title .info{
		height: 4em;
		width: 15em;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.group_msg{
		height: 7em;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 1em
	}
	.group_member{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: stretch;
		padding: 1em;
		height: 10em;
		overflow-y: scroll
	}
	.group_member .memberInfo{
		width: 3em;
		text-align: center;
	}
	.group_member .memberInfo img{
		width: 3em;
		height: 3em;
	}
	.operation{
		padding: 1em;
		height: 5em;
	}
</style>