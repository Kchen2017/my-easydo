<template>
	<ul   v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10">
		<li v-for="item in listData" class="go_list">
            <div class="go_list_img">
            	<img :src="item.imageUrl" style="width: ">
            </div>
            <ul class="go_list_context">
            	<li>{{item.backCateName}}</li>
            	<li>{{item.backCateName}}</li>
            	<li><span class="mui-icon icon-tubiao-qiuchang">{{item.areaname}}</span></li>
            </ul>
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
		}
	},
	mounted(){
		this.list()
	}
}
</script>