<template>
	<div style="height: 100%">
		<router-view/>
		<nav class="mui-bar mui-bar-tab" style="background-color: #fff">
				<template v-if="identity==='sporter'">
						<a @click="selectedFun('index')" class="mui-tab-item" :class="{'mui-active': selected=='index'}" href="javascript:void(0)">
							<span class="mui-icon icon-qiuchang1"></span>
							<span class="mui-tab-label">首页</span>
						</a>
						<a @click="selectedFun('gogo')" class="mui-tab-item" :class="{'mui-active': selected=='gogo'}" href="javascript:void(0)">
							<span class="mui-icon icon-paobu1"></span>
							<span class="mui-tab-label">Go Go</span>
						</a>
				</template>
				<template v-else-if="identity==='business'">
						<a @click="selectedFun('playGroud')" class="mui-tab-item" :class="{'mui-active': selected=='playGroud'}" href="javascript:void(0)">
							<span class="mui-icon icon-paobu1"></span>
							<span class="mui-tab-label">场地</span>
						</a>
				</template>
	      <a @click="selectedFun('easy_go')" class="mui-tab-item" :class="{'mui-active': selected=='easy_go'}" href="javascript:void(0)">
	        <span class="mui-icon icon-tubiaozhizuomoban"></span>
	        <span class="mui-tab-label">Easy Do</span>
	      </a>
	      <a @click="selectedFun('my')" class="mui-tab-item" :class="{'mui-active': selected=='my'}" href="javascript:void(0)">
	        <span class="mui-icon icon-xiaolian"></span>
	        <span class="mui-tab-label">我的</span>
	      </a>
	    </nav>
	</div>
</template>
<script>
export default {
  data(){
    return{
			selected: "index",
			identity: "sporter"
    }
  },
  methods: {
    selectedFun(flag){
      this.selected = flag
      this.$router.push({
        name: flag
      })
    }
	},
	created(){
		this.identity = this.$cookies.get("identity") 
	}
}
</script>