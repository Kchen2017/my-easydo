<template>
	<div class="easy_go">
		<header class="mui-bar mui-bar-nav">
			<span class="mui-pull-left mui-title">Easy_go</span>
	        <a @click="moreFun" class="mui-icon mui-icon-plusempty mui-pull-right" href="javascript:void(0)"></a>
		</header>
		<div class="easy_goCon">
			<div class="mui-card">
				<ul class="mui-table-view">
					<li @click="friFlag=!friFlag" class="mui-table-view-cell mui-collapse" :class="{'mui-active': friFlag}">
						<a class="mui-navigate-right" href="javascript:void(0)">好友</a>
						<div class="mui-collapse-content list_con">
							<ul>
								<li v-for="item in friendsArr" @click="goToTalk">
									<div class="img_con">
										<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg"  alt="">
									</div>
									<p class="person_msg">woshiren</p>
								</li>
							</ul>
						</div>
					</li>
					<li @click="qunFlag=!qunFlag" class="mui-table-view-cell mui-collapse" :class="{'mui-active': qunFlag}">
						<a class="mui-navigate-right" href="javascript:void(0)">群</a>
						<div class="mui-collapse-content list_con">
							<ul>
								<li v-for="item in friendsArr">
									<div class="img_con">
										<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg"  alt="">
									</div>
									<p class="person_msg">woshiren</p>
								</li>
							</ul>
						</div>
					</li>
				</ul>
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
				friFlag: false,
				qunFlag: false,
				friendsArr: [{},{},{},{},{},{}]
			}
		},
		methods: {
			moreFun(){
				this.isShowMore = !this.isShowMore
			},
			goToTalk(){
				this.$router.push({
					name: "Easy_talk"
				})
			}
		}
	}
</script>
<style>
	.easy_go{
		height: 100%;
	}
	.mui-popover {
		height: 300px;
		width: 117px;
	}
	.easy_go .detail_topPopover{
		position: fixed;
		top: 46px;
		right: 6px;
	}
	.easy_go .detail_topPopover .mui-popover-arrow{
		left: auto;
		right: 6px;
	}
	.easy_go .easy_goCon{
		height: 36em;
  		padding-top: 3em;
  		overflow-y: scroll;
	}
	.list_con img {
		width: 3.5em;
		height: 3.5em;
	}
	.list_con ul li{
		padding: 1em 0;
		display: flex;
		justify-content: space-between;
		text-align: left;
	}
	.list_con ul li .person_msg{
		width: 19em;
		height: 4em;
		position: relative;
	}
	.list_con ul li .person_msg:before{
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 18em;
	    height: 0;
	    border: 1px solid #bcb7b7;
	}
	.list_con ul li .img_con{
		width: 4em;
		height: 4em
	}
</style>