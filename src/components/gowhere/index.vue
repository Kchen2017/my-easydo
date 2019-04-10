<template>
	<div class="goCom">
		<header class="mui-bar mui-bar-nav headerstyle">
			<span class="mui-icon icon-tubiao-qiuchang mui-pull-left">北京</span>
			<div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="">
				<span class="mui-icon mui-icon-search"></span>
			</div>
		</header>
		<div class="go_content">
			<div class="go_swip">
				<mt-swipe >
				   <mt-swipe-item>
				   	<ul style="display: flex;justify-content:space-between;padding: 1em 1em">
				   		<li>
				   			<span class="mui-icon icon-lanqiu"></span>
				   			<span class="go_swipLabel">篮球</span>
				   		</li>
				   		<li>
				   			<span class="mui-icon icon-zuqiu"></span>
				   			<span class="go_swipLabel">足球</span>
				   		</li>
				   		<li>
				   			<span class="mui-icon icon-yumaoqiu"></span>
				   			<span class="go_swipLabel">羽毛球</span>
				   		</li>
				   		<li>
				   			<span class="mui-icon icon-wangqiu2"></span>
				   			<span class="go_swipLabel">网球</span>
				   		</li>
				   		<li><span class="mui-icon icon-golf"></span>
				   			<span class="go_swipLabel">高尔夫</span></li>
				   	</ul>
				   </mt-swipe-item>
				   <mt-swipe-item>
				   	<ul style="display: flex;justify-content:space-between;padding: 1em 1em">
				   		<li>
				   			<span class="mui-icon icon-taiqiu3"></span>
				   			<span class="go_swipLabel">台球</span>
				   		</li>
				   		<li>
				   			<span class="mui-icon icon-youyong4"></span>
				   			<span class="go_swipLabel">游泳</span>
				   		</li>
				   		<li>
				   			<span class="mui-icon icon-paiqiu1"></span>
				   			<span class="go_swipLabel">排球</span>
				   		</li>
				   		<li>
				   			<span class="mui-icon icon-jianshen"></span>
				   			<span class="go_swipLabel">健身</span>
				   		</li>
				   		<li><span class="mui-icon icon-qita"></span>
				   			<span class="go_swipLabel">其他</span></li>
				   	</ul>
				   </mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="go_recommend">
				<mt-navbar v-model="selected">
					<mt-tab-item id="where">Go Where</mt-tab-item>
					<mt-tab-item id="who">With Who</mt-tab-item>
				</mt-navbar>

				<mt-tab-container v-model="selected">
				    <mt-tab-container-item id="where">
				    	<ul>
				    		<li v-for="item in listData" style="display: flex;justify-content: space-between;">
                                <div style="height: 100%;width: 20px;background-color: blue">
                                	<img src="item.img" >
                                </div>
                                <ul>
                                	<li>1</li>
                                	<li>2</li>
                                	<li>3</li>
                                	<li>4</li>
                                </ul>
                            </li>
				    	</ul>
				    </mt-tab-container-item>
				    <mt-tab-container-item id="who">
				    	who
				    </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				selected: "where",
				listData: [
	                {
	                  img: '../../statics/img/timg.jpg',
	                  title: '安宁庄羽毛球',    
	                  des: '羽毛球',
	                  area: '海淀区',
	                  distance:'500米',
	                  bookWay:'线上预订',
	                  bookPrice:'￥200'
	                },
	                {
	                  img:  '../../statics/img/timg.jpg',
	                  title: '清河篮球馆',
	                  des: '羽毛球',
	                  area: '朝阳区',
	                  distance:'600米',
	                  bookWay:'线上预订',
	                  bookPrice:'￥200'
	                },
	                {
	                  img:  '../../statics/img/timg.jpg',
	                  title: '西小口排球馆',
	                  des: '羽毛球',
	                  area: '东城区',
	                  distance:'700米',
	                  bookWay:'线上预订',
	                  bookPrice:'￥200'
	                }
	            ],
			}
		}
	}
</script>
<style scoped>	
	.goCom{
		height: 100%;
	}
	.go_content{
		padding-top: 4.2em;
		height: 100%;
	}
	.go_content .go_swip{
		height: 6em;
	}
	
	.go_content .go_swip .go_swipLabel {
	    font-size: 0.8em;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.go_content .go_swip .mui-icon{
		font-size: 2em;
	}
	.headerstyle{
		height: 4em;
	}
	.headerstyle .mui-pull-left{
		font-size: 1em;
		margin-top: 1em;
	}
	.headerstyle .mui-search {
	    width: 19em;
	    left: 3.5em;
	    bottom: 2.2em;
	    height: 3em;
	}
	.headerstyle .mui-icon-search {
	    position: absolute;
	    top: 0px;
	    left: 6em;
	}
	.go_style_list{
		width: '100%';
        height: '1px';
        background-color: '#eee';
	}
</style>