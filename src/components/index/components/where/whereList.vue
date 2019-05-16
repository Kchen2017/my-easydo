<template>
	<ul   v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10" class="go_loadinglist">
		<li v-for="item in listData" :key="item" @click="goToDetail(item)" class="go_list">
            <div class="go_list_img">
            	<img :src="item&&item.imageUrl" >
            </div>
            <ul class="go_list_context">
            	<li>{{item.name}}</li>
            	<li>{{item.type}}</li>
            	<li><span class="mui-icon icon-location1">{{item.address}}</span></li>
            	<li><span class="mui-icon icon-qianbao1">线上预定</span><span>￥20/人</span></li>
            </ul>
        </li>
       	<p v-if="isFinish">哥..这下这没了</p>
	</ul>
</template>
<script>
	import goWhereApi from "../../../../api/goWhere"
export default {
	data(){
		return{
			listData: [],
			pageNumber: 1,
			totleCount: 0,
			isFinish: false
	    }
	},
	methods: {
		list(){
			goWhereApi.getList({
				pageSize: 10,
				pageNumber: this.pageNumber
			}).then(result => {
				if(result && result.listData){
					this.totleCount = result.totleCount
					this.listData = this.listData.concat(result.listData)
				}
				
			})
		},
		loadMore() {
			if(this.totleCount/10 <= this.pageNumber) {
				this.isFinish = true; 
				return
			}
			this.loading = true;
			this.pageNumber++
			this.list().then(()=>{
				this.loading = false;
			})
		},
		goToDetail(item){
			this.$router.push({
				name: "whereDetail",
				params: {
					id: item.id
				}
			})
		}
	},
	mounted(){
	}
}
</script>
<style>
	.go_loadinglist p{
		background-color: #ebe9e9;
		height: 2em;
	    line-height: 2em;
	}
</style>