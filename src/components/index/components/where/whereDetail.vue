<template>
	<div class="whereDetail">
		<header class="mui-bar mui-bar-nav">
	        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-back mui-pull-left paddinglink" href="javascript:void(0)"></a>
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
				<h4>{{detail.name||"--"}}</h4>
				<p>
					热度：<span class="mui-icon icon-star_light"></span>
					<span class="mui-icon icon-star_light"></span>
					<span class="mui-icon icon-star_light"></span>
					<span class="mui-icon icon-banxing"></span>
					<span class="mui-icon icon-xing"></span>&ensp;&ensp;
					<span>评论：200条</span>&ensp;&ensp;
					<span>￥30/人</span>
				</p>
				<p>
					<span>篮球</span>&ensp;&ensp;&ensp;<span>{{detail.city}}</span>
				</p>
				<div @click="goZu" class="mui-btn mui-btn-primary zugejuBtn">
					组<br>个<br>局
				</div>
			</div>
			<div class="openningTime">
				<p>
					<span class="mui-icon mui-icon-eye">营业中</span>&ensp;&ensp;&ensp;
					<span>8:00~22:00</span>
				</p>
			</div>
			<div class="address">
				<span class="mui-icon mui-icon-location"></span>
				<span>{{detail.address}}</span>
				<span class="mui-icon mui-icon-phone"></span>
			</div>
			<div id="searchBar" class="group_tab">
				<div  class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary" style="padding: 10px 10px;height: 4em" :class="{'isfixed': searchBarFixed}">
					<a @click="selected='group'" class="mui-control-item " :class="{'mui-active': selected=='group'}">
						局
					</a>
					<a @click="selected='part'" class="mui-control-item" :class="{'mui-active': selected=='part'}">
						圈子
					</a>
					<a @click="selected='kinglist'" class="mui-control-item" :class="{'mui-active': selected=='kinglist'}">
						王者榜
					</a>
				</div>
				<div :class="{'scroll_con': searchBarFixed}">
					<div  class="mui-slider-item mui-control-content" :class="{'mui-active': selected=='group'}">
						<who-list  ref="who"></who-list>
					</div>

					<div  class="mui-slider-item mui-control-content" :class="{'mui-active': selected=='part'}">
						<where-quan></where-quan>
					</div>
					<div  class="mui-slider-item mui-control-content" :class="{'mui-active': selected=='kinglist'}">
						<where-king-list></where-king-list>
					</div>
				</div>
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
					</ul>
				</div>
			</div>
		</div>


	</div>
</template>
<script>
	import whoList from "../who/whoList.vue"
	import whereQuan from './whereQuan.vue'
	import whereKingList from './wherekinglist.vue'
	import goWhereApi from "../../../../api/goWhere"
	export default {
		components:{
			whoList,
			whereQuan,
			whereKingList
		},
		data(){
			return{
				isShowMore: false,
				selected: 'group',
				searchBarFixed: false,
				detail: {}
			}
		},
		methods: {
			getDetail(){
				goWhereApi.getDetail({
					id: this.$route.params.id
				}).then(result=>{
					this.detail = result.detailData
				})
			},
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
			},
			goZu(){
				this.$router.push({
					name: "zugeju"
				})
			},
			handleScroll () {
			  	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			 	let offsetTop = document.querySelector('#searchBar').offsetTop
			 	offsetTop-scrollTop<=40 ? this.searchBarFixed = true : this.searchBarFixed = false
			 	console.log(offsetTop-scrollTop)
			}
		},
		mounted(){
			this.getDetail()
			window.addEventListener('scroll', this.handleScroll)
		},		
		destroyed () {
		  	window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style>
	.whereDetail{
		height: 100%;
	}
	.whereDetail .mui-bar{
		background-color: #5eaef3;
	}
	.whereDetail .mui-bar .paddinglink{
		color: #fff;
	}
	.whereDetail .detailContent{
		height: 100%;
  		padding-top: 3em;
  		background-color: #fff;
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
	.detailContent .title .zugejuBtn{
		position: absolute;
	    top: 3.5em;
	    right: 1.3em;
	    width: 3em;
	    height: 5em;
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
	    border: 0.5px solid #ebe9e9;
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
	    border: 0.5px solid #ebe9e9;
	}
	.whereDetail .openningTime:before {
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 20.5em;
	    height: 0;
	    border: 0.5px solid #ebe9e9;
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
	    bottom: -0.5em;
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
		margin-top: 0.5em;
		background-color: #fff;
	}
	.whereDetail .isfixed{
		position: fixed;
		background-color: #fff;
		top:44px;
    	z-index:999;
	}
	.whereDetail .scroll_con{
		padding-top: 64px
	}
</style>