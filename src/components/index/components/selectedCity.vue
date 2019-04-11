<template>
  <div class="page-indexlist select_city_list" >
    <header class="mui-bar mui-bar-nav headerstyle">
        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-closeempty mui-pull-left"></a>
    </header>
    <div class="page-indexlist-wrapper">
      <ul class="city_gps">
        <li>
          <span class="mui-icon icon-location1">北京</span>
          <span>GPS定位</span>
        </li>
        <li>历史访问城市</li>
        <li>
          <button type="button" >北京</button>
        </li>
      </ul>
      <mt-index-list>
        <mt-index-section v-for="item in alphabet" :index="item.initial">
          <mt-cell v-for="city in item.list" :title="city.name" @click.native="goToindex(city)"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script >
  import cityList from "@/common/city"
  export default {
    data() {
      return {
        alphabet: cityList.city
      }
    },
    methods: {
      goToindex(city){
        let params = {
          name: "index"
        }
        if(city){
          params.query = {
            city: city.name
          }
        }

        this.$router.push(params)
      }
    },
    mounted(){
    }
  };
</script>
<style>
  .page-indexlist {
    padding-top: 4em;
    text-align: left;
  }
  .city_gps{
    height: 8em;
    padding: 1em;
  }
  .city_gps li{
    padding-bottom: 1em;
  }
  .city_gps li:nth-child(2){
    font-size: 0.7em;
    color: #c1b7b7;
  }
</style>