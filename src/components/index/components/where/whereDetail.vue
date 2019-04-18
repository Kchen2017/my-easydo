<template>
	<div class="whereDetail">
		<header class="mui-bar mui-bar-nav">
	        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-back mui-pull-left" href="javascript:void(0)"></a>
	        <a @click="moreFun" class="mui-action-back mui-icon mui-icon-bars mui-pull-right paddinglink" href="javascript:void(0)"></a>
	        <a class="mui-action-back mui-icon mui-icon-star mui-pull-right paddinglink" href="javascript:void(0)"></a>
	        <a class="mui-action-back mui-icon mui-icon-redo mui-pull-right paddinglink" href="javascript:void(0)"></a>
	    </header>
		<div class="detailContent">
			<div @click="goToImagePre" class="imagContainer">
				<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
				<span class="mui-icon mui-icon-image flag">20</span>
			</div>
			<div class="title">
				<h4>不服就干场</h4>
				<p>
					热度：<span class="mui-icon icon-star_light"></span>
					<span class="mui-icon icon-star_light"></span>
					<span class="mui-icon icon-star_light"></span>
					<span class="mui-icon icon-banxing"></span>
					<span class="mui-icon icon-xing"></span>&ensp;&ensp;&ensp;
					<span>评论：200条</span>&ensp;&ensp;&ensp;
					<span>￥30/人</span>
				</p>
				<p>
					<span>篮球</span>&ensp;&ensp;&ensp;<span>朝阳</span>
				</p>
			</div>
			<div class="openningTime">
				<p>
					<span class="mui-icon mui-icon-eye">营业中</span>&ensp;&ensp;&ensp;
					<span>8:00~22:00</span>
				</p>
			</div>
			<div class="address">
				<span class="mui-icon mui-icon-location"></span>
				<span>北辰西路8号院1号楼国家会议中心大酒店2楼(近鸟巢)</span>
				<span class="mui-icon mui-icon-phone"></span>
			</div>
			<div class="group_tab">
				<mt-navbar class="page-part" v-model="selected">
				    <mt-tab-item id="group">群</mt-tab-item>
				    <mt-tab-item id="talk">圈子</mt-tab-item>
				    <mt-tab-item id="video">王者榜</mt-tab-item>
			    </mt-navbar>
			    <mt-tab-container v-model="selected">
			        <mt-tab-container-item id="group">
				        group
				    </mt-tab-container-item>
				    <mt-tab-container-item id="talk">
				        talk
				    </mt-tab-container-item>
				    <mt-tab-container-item id="video">
				        video
				    </mt-tab-container-item>
			      </mt-tab-container>
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
			return{
				isShowMore: false,
				selected: 'group'
			}
		},
		methods: {
			goToindex(){
				this.$router.go(-1)
			},
			moreFun(){
				this.isShowMore = !this.isShowMore
			},
			goToImagePre(){
				this.$router.push({
					name: "imagePre"
				})
			}
		}
	}
</script>
<style>
	.whereDetail{
		height: 100%;
	}
	.whereDetail .detailContent{
		height: 100%;
  		padding-top: 3em;
	}
	.whereDetail .detailContent .imagContainer{
		height: 10em
	}
	.whereDetail .detailContent .imagContainer{
		position: relative;
	}
	.whereDetail .detailContent .flag{
		position: absolute;
	    bottom: 1em;
	    right: 2em;
	    font-size: 1em;
	    background-color: #97aae2;
	    border-radius: 0.8em;
	    padding: 0.3em;
	}
	.whereDetail .detailContent .imagContainer img {
	    height: 100%;
	    width: 95%;
	    border-radius: 2em;
	}
	.detailContent .title{
		padding: 1em;
		text-align: left;
  		position: relative;
	}
	.mui-popover {
		height: 300px;
		width: 117px;
	}
	.whereDetail .detail_topPopover{
		position: fixed;
		top: 46px;
		right: 6px;
	}
	.whereDetail .detail_topPopover .mui-popover-arrow{
		left: auto;
		right: 6px;
	}
	.whereDetail .mui-bar-nav.mui-bar .mui-icon{
		margin-right: 0;
	}
	.whereDetail .title .mui-icon {
		font-size: 1em
	}
	.whereDetail .title p {
		margin-top: 0.5em
	}
	.whereDetail .title:before {
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 20.5em;
	    height: 0;
	    border: 1px solid #bcb7b7;
	}
	.whereDetail .openningTime{
		text-align: left;
		padding: 0.5em 1em;
		font-size: 1em;
		position: relative;
	}
	.whereDetail .openningTime .mui-icon {
		font-size: 1em;
		position: relative;
	}
	.whereDetail .openningTime .mui-icon:after{
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 0em;
	    height: 1em;
	    right: -1em;
	    border: 1px solid #bcb7b7;
	}
	.whereDetail .openningTime:before {
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 20.5em;
	    height: 0;
	    border: 1px solid #bcb7b7;
	}
	.whereDetail .address .mui-icon {
		font-size: 1em;
		position: relative;
	}
	.whereDetail .address{
		padding: 0.5em 1em;
		text-align: left;
		display: flex;
		justify-content: space-between;
	}
	.whereDetail .address span:nth-child(2){
		position: relative;
		width: 17em; 
	}
	.whereDetail .address span:nth-child(2):before{
		content: "";
	    position: absolute;
	    bottom: 0.5em;
	    width: 0em;
	    height: 1.5em;
	    right: 0.5em;
	    border: 1px solid #bcb7b7;
	}
	.whereDetail .address .mui-icon-phone:before{
		position: absolute;
	    font-size: 1.5em;
	    left: -18px;
	    top: 4px;
	}
	.whereDetail .group_tab{
		height: 9em;
		margin-top: 0.5em;
	}
</style>