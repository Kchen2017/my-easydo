<template>
	<div class="zugeju">
		<span class="mui-icon mui-icon-closeempty closeIcn"></span>
		<ul>
			<li>
				<span class="title">群标志：</span>
				<span class="mui-icon mui-icon-camera pic"></span>
			</li>
			<li>
				<span class="title">群名：</span>
				<input type="text" placeholder="请输入群名" max=10>
			</li>
			<li><span class="title">人数：</span></li>
			<li><span class="title">付费方式：</span></li>
			<li><span class="title">标签：</span></li>
			<li><span class="title">签名：</span></li>
			<li><span class="title">时间：</span></li>
			<li>
				<span class="title">其他：</span>
				<textarea rows="3" cols="20"></textarea>
			</li>
		</ul>
		<button type="button" class="mui-btn mui-btn-primary mui-btn-block" style="margin-top: 4em;height: 3em;">组个局</button>
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
	.zugeju{
		padding: 2em 1em;
		/*height: 100%;*/
		background-color: #fff;
		text-align: left;
	}
	.zugeju .closeIcn{
		position: fixed;
		top: 0;
		left: 0;
		font-size: 2em
	}
	.zugeju ul li {
		padding: 1em;
		height: 4em;
		position: relative;
	}
	.zugeju ul li .pic{
		margin: 3px;
		width: 50px;
		height: 50px;
		display: inline-block;
		text-align: center;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 25px;
		background-clip: padding-box;
	}
	.zugeju ul li:not(:last-child):before{
		position: absolute;
		content: "";
	    position: absolute;
	    bottom: 0em;
	    width: 22.5em;
	    height: 0;
	    border: 0.3px solid #ebe9e9;
	}
	.zugeju ul li input {
		width: 75%;
		border: 1px solid rgba(0, 0, 0, 0);
	}
	.zugeju ul li textarea{
		border: 1px solid rgba(0, 0, 0, 0.24);
		vertical-align: text-top;
	}
	.zugeju .title {
		font-size: 0.8em;
		display: inline-block;
		width: 5em;
		text-align: right;
	}
</style>