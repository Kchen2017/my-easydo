<template>
	<ul   v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10">
		<li v-for="item in listData" class="who_list" @click="goDetail(item)">
            <div class="list_img">
            	<img :src="item.imageUrl">
            </div>
            <div class="list_con">
            	<h3>{{item.backCateName}}</h3>
            	<p>{{item.backCateName}}</p>
            </div>
        </li>
	</ul>
</template>
<script>
export default {
	data(){
		return{
			listData: [],
			pageNumber: 1,
			totleCount: 0
	    }
	},
	methods: {
		list(){
			return new Promise((resolve, reject) => {
				fetch('http://127.0.0.1:3090/goWhere/list?pageSize=10&pageNumber='+this.pageNumber)
				  .then((response) => {
				    return response.json();
				  })
				  .then((myJson) => {
				  	this.totleCount = myJson.totleCount
				    this.listData = this.listData.concat(myJson.listData)
				    resolve()
				  });
			}) 
		},
		loadMore() {
			if(this.totleCount/10 <= this.pageNumber) return
			this.loading = true;
			this.pageNumber++
			this.list().then(()=>{
				this.loading = false;
			})
		},
		goDetail(){
			this.$router.push({
				name: "whoDetail",
				query: {
					id: "jkjkjk"
				}
			})
		}
	},
	mounted(){
		this.list()
	}
}
</script>
<style>
	.who_list{
		display: flex;
		justify-content: space-between;
		padding: 0.3em 1em;
		align-items: center;
		text-align: left;
	}
	.who_list .list_img img{
		width: 3em;
		height: 3em;
	}
	.who_list .list_con{
		height: 3em;
		width: 16em;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
</style>