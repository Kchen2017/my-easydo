<template>
	<div class="easy_talking">
		<header class="mui-bar mui-bar-nav">
	        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-back mui-pull-left" href="javascript:void(0)"></a>
	        <span class="mui-pull-left mui-title" style="text-align: left;color:#fff;">科大爷</span>
	        <a  class="mui-action-back mui-icon mui-icon-bars mui-pull-right paddinglink" href="javascript:void(0)"></a>
	    </header>
	    <div class="talking_msg">
	    	<ul>
				<template v-for="item in members">
					<li v-if="!item.isme" class="reciveMsg">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558612336065&di=c43f10a8867566ae08a483357fba0279&imgtype=0&src=http%3A%2F%2Fimages.dunkhome.com%2Fnewsitem%2Fimage%2F14369%2Fapp_image_BbsImg142803829890801_689-463.png" alt="">
						<span>{{item.msg}}</span>
					</li>
					<li v-else class="sendMag">
						<span>{{item.msg}}</span>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559203361&di=539c4b7da0f63a3807b46cddd93bb87c&imgtype=jpg&er=1&src=http%3A%2F%2Fi3.sinaimg.cn%2Fent%2Fm%2Fc%2F2010-07-06%2FU2520P28T3D3008805F329DT20100706130537.jpg" alt="">
					</li>
				</template>
				
			</ul>
	    </div>
	    <div class="footer_bar">
	    	<div class="send_foot">
		    	<span @click="ishowBar=!ishowBar" class="mui-action-back mui-icon icon-yuyin4"></span>
		    	<input v-model="message" type="text">
		    	<span class="mui-action-back mui-icon icon-biaoqing"></span>
		    	<span v-if="!this.message" class="mui-action-back mui-icon icon-jiahao"></span>
				<span v-if="this.message" @click="sendMsgFun">发送</span>

		    </div>
		    <div v-if="ishowBar" class="operation_bar">
		    	<div class="memberInfo" v-for="item in members">
	    			<p>
	    				<span class="mui-action-back mui-icon icon-liulanjiluzuji"></span>
	    			</p>
	    			<p>相册</p>
	    		</div>
		    </div>
	    </div>
	    
	</div>
</template>
<script>
import { setInterval } from 'timers';
	export default{
		data(){
			return {
				message: "",
				ishowBar: false,
				members: []
			}
		},
		methods: {
			goToindex(){
				this.$router.go(-1)
			},
			sendMsgFun(){
				this.members.push({
					isme: true,
					msg: this.message
				})
				setTimeout(() => {
					this.members.push({
						isme: false,
						msg: "come on, bitch!!"
					})
				},1000)
				this.message = ""
			}
		}
	}
</script>
<style>
	.easy_talking{
		height: 100%
	}
	.easy_talking .mui-bar {
		background-color: #5eaef3;
		color: #fff;
	}

	.easy_talking .mui-bar .mui-icon{
		color: #fff;
	}
	.easy_talking .talking_msg{
		padding-top: 3em;
		  overflow-y: scroll;
		  height: 100%;
	}
	.easy_talking .talking_msg ul .reciveMsg {
		width: 100%;
		height: 5em;
		display: flex;
		justify-content: flex-start;
		padding: 1em;
		line-height: 3em;
	}
	.easy_talking .talking_msg ul li img {
		height: 3em;
		width: 3em;
		border-radius: 1.5em;
	}
	.easy_talking .talking_msg ul li span {
		margin-left: 10px;
		padding-left: 10px;
		padding-right: 10px;
		font-size: 14px;
		background-color: #fff;
		border-radius: 1em;
	}

	.easy_talking .talking_msg ul .sendMag {
		width: 100%;
		height: 5em;
		display: flex;
		justify-content: flex-end;
		padding: 1em;
		line-height: 3em;
	}
	.easy_talking .talking_msg ul .sendMag span {
		margin-right: 10px;
		background-color: #a1ea7c;
	}
 	.easy_talking .footer_bar{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.easy_talking .send_foot{
		height: 3em;
		width: 100%;
		background-color:#f1f1f1;
		border-top: 1px solid #bbb;
		text-align: left;
		padding-top: 0.2em;
		padding-right: 0.5em;
		padding-left: 0.5em;
		display: flex;
		justify-content: space-between;
		line-height: 42px;
	}
	.easy_talking .send_foot input{
		width: 70%;
		vertical-align:middle;
	}
	.easy_talking .send_foot .icon-yuyin4{
		position: relative;
		width: 1em
	}
	.easy_talking .send_foot .icon-yuyin4:before{
		position: absolute;
		top: 10px;
	}
	.easy_talking .send_foot .icon-biaoqing{
		position: relative;
		width: 1em
	}
	.easy_talking .send_foot .icon-biaoqing:before{
		position: absolute;
		top: 10px;
	}
	.easy_talking .send_foot .icon-jiahao{
		position: relative;
		width: 1em
	}
	.easy_talking .send_foot .icon-jiahao:before{
		position: absolute;
		top: 10px;
	}
	.operation_bar{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-content: stretch;
		padding: 1em;
		height: 10em;
		overflow-y: scroll
	}
	.operation_bar .memberInfo{
		width: 3em;
		text-align: center;
	}
</style>