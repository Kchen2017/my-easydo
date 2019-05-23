<template>
	<div class="easy_go">
		<header class="mui-bar mui-bar-nav">
			<span class="mui-pull-left mui-title" style="color: #fff">EasyTalk</span>
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
										<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559203361&di=539c4b7da0f63a3807b46cddd93bb87c&imgtype=jpg&er=1&src=http%3A%2F%2Fi3.sinaimg.cn%2Fent%2Fm%2Fc%2F2010-07-06%2FU2520P28T3D3008805F329DT20100706130537.jpg"  alt="">
									</div>
									<div class="person_msg">
										<p class="name"><span>科大爷</span>	  <span class="time">一小时前</span></p>
										<p class="msg"><span>下午两点我约的场，等你来战啊</span>  <span class="mui-badge mui-badge-danger">3</span></p>
									</div>
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
										<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558608643421&di=d6ce0e96df5ce5f689d554f13e173f78&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170823%2F06201U452-5.jpg"  alt="">
									</div>
									<div class="person_msg">
										<p class="name"><span>科大爷</span>	  <span class="time">一小时前</span></p>
										<p class="msg"><span>下午两点我约的场，等你来战啊</span>  <span class="mui-badge mui-badge-danger">3</span></p>
									</div>
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
	.easy_go .mui-bar {
		background-color: #5eaef3;
		color: #fff;
	}
	.easy_go .mui-bar .mui-icon{
		color: #fff;
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
		border-radius: 2em;
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
	.list_con ul li .person_msg p {
		width: 100%;
		display: flex;
		justify-content:space-between;
	}
	.list_con ul li .person_msg .name {
		color: black;
		padding-bottom: 5px;
	}
	.list_con ul li .person_msg .name .time {
		color: #d2d0d0;
    	font-size: 7px;
	}
	.list_con ul li .person_msg:before{
		content: "";
		position: absolute;
		bottom: 0em;
		left: -60px;
		width: 23em;
		height: 0;
		border: 0.5px solid #f1eded;
	}
	.list_con ul li .img_con{
		width: 4em;
		height: 4em
	}
</style>