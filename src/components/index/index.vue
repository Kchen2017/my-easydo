<template>
	<div class="goCom">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span @click="goToCity" class="mui-icon icon-location1 mui-pull-left">{{gpsCity}}</span>
			<div @click="goToSearch" class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="">
				<span class="mui-icon mui-icon-search"></span>
			</div>
		</header>
		<div class="go_content">
			<div class="go_swip">
				<swip></swip>
			</div>
			<div class="index_pic">
				<p>精选</p>
				<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg">
			</div>
			<div class="go_recommend" id="searchBar">
				<div  class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary" style="padding: 10px 10px;height: 4em" :class="{'isfixed': searchBarFixed}">
					<a @click="selected='where'" class="mui-control-item " :class="{'mui-active': selected=='where'}">
						找场地
					</a>
					<a @click="selected='who'" class="mui-control-item" :class="{'mui-active': selected=='who'}">
						找局
					</a>
				</div>
				<div  style="height: 100%;">
					<div  class="mui-slider-item mui-control-content" :class="{'mui-active': selected=='where'}" style="height: 100%">
						<div class="mui-scroll-wrapper" style="height: 100%">
							<div class="mui-scroll">
								<where-list  ref="where"></where-list>
							</div>
						</div>
					</div>

					<div  class="mui-slider-item mui-control-content" :class="{'mui-active': selected=='who'}" style="height: 100%">
						<div class="mui-scroll-wrapper" style="height: 100%">
							<div class="mui-scroll">
								<who-list  ref="who"></who-list>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</template>
<script>
	import swip from "./components/common/swipCom.vue"
	import whereList from "./components/where/whereList.vue"
	import whoList from "./components/who/whoList.vue"
	import "@/assets/css/index.css"
	export default {
		components: {
			swip,
			whereList,
			whoList
		},
		data(){
			return {
				selected: "where",
				gpsCity: this.$route.query.city || "北京",
				searchBarFixed: false
			}
		},
		methods: {
			goToCity(){
				this.$router.push({
					name: "city"
				})
			},
			goToSearch(){
				this.$router.push({
					name: "search"
				})
			},

			handleScroll () {
			  	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			 	let offsetTop = document.querySelector('#searchBar').offsetTop
			 	offsetTop-scrollTop<=65 ? this.searchBarFixed = true : this.searchBarFixed = false
			 	console.log(offsetTop-scrollTop)
			}
		},
		watch:{
			selected(newVal){
				if(newVal == "where"){
					// this.$refs.where.list(newVal)
				}else if(newVal == "who"){
					// this.$refs.who.list(newVal)
				}
			}
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll)
		},		
		destroyed () {
		  	window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style>
	.go_content .index_pic{
		padding: 1em;
		background-color: #fff;
		margin-top: 0.5em;
	}
	.go_content .index_pic p{
		text-align: left;
		height: 2em;
		line-height: 2em;
		position: relative;
		padding-left:1em; 
		margin-bottom: 1em;
	}
	.go_content .index_pic p:before{
		content: "";
	    position: absolute;
	    bottom: 0em;
	    left: 0;
	    width: 0em;
	    height: 2em;
	    border: 2px solid #bcb7b7;

	}
	.go_content .index_pic img{
		width: 100%;
		height: 7em;
	}
	.go_recommend .isfixed{
		position: fixed;
		background-color: #fff;
		top:4em;
    	z-index:999;
	}
	.go_recommend .scroll_con{
		position: fixed;
		top: 8em;
		width: 100%;
	}
</style>