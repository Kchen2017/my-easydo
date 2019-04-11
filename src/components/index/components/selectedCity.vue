<template>
  <div class="page-indexlist select_city_list" >
    <header class="mui-bar mui-bar-nav headerstyle">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    </header>
    <div class="page-indexlist-wrapper">
      <div class="city_gps">
        
      </div>
      <mt-index-list>
        <mt-index-section v-for="item in alphabet" :index="item.initial">
          <mt-cell v-for="city in item.list" :title="city.name"></mt-cell>
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
    mounted(){
    }
  };
</script>
<style>
  .page-indexlist {
    padding-top: 3em;
    text-align: left;
  }
  .city_gps{
    
  }
</style>