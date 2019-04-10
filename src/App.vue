<template>
  <div id="app">
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
      <a @click="selectedFun('go')" class="mui-tab-item" :class="{'mui-active': selected=='go'}" href="javascript:void(0)">
        <span class="mui-icon icon-qiuchang1"></span>
        <span class="mui-tab-label">Go-Where</span>
      </a>
      <a @click="selectedFun('who')" class="mui-tab-item" :class="{'mui-active': selected=='who'}" href="javascript:void(0)">
        <span class="mui-icon icon-tubiaozhizuomoban"></span>
        <span class="mui-tab-label">W-Who</span>
      </a>
      <a @click="selectedFun('news')" class="mui-tab-item" :class="{'mui-active': selected=='news'}" href="javascript:void(0)">
        <span class="mui-icon icon-tuandui"></span>
        <span class="mui-tab-label">news</span>
      </a>
      <a @click="selectedFun('my')" class="mui-tab-item" :class="{'mui-active': selected=='my'}" href="javascript:void(0)">
        <span class="mui-icon icon-xiaolian"></span>
        <span class="mui-tab-label">my</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected: "go"
    }
  },
  methods: {
    selectedFun(flag){
      this.selected = flag
      this.$router.push({
        name: flag
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
