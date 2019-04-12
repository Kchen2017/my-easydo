<template>
	<div class="search_where_tab">
		<div v-if="historyshow" class="historyList">
			<p>
				<span>最近搜索</span>
				<span @click="historyshow=false" class="mui-icon mui-icon-trash"></span>
			</p>
			<div>
				<button type="button" >飞翔</button>
			</div>
		</div>
		<div class="hotSearch">
			<p>热门搜索</p>
			<div class="hotList">
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				historyshow: true
			} 
		}
	}
</script>