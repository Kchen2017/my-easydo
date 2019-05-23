<template>
  <div class="mapCon">
    	<header class="mui-bar mui-bar-nav">
	        <span class="mui-pull-left mui-title" style="color: #fff">EasyGo</span>
	    </header>
      <div class="mapcontainer">
        <filter-bar 
		      top="0" 
		      :bar-menus="barMenus" 
		      @showDialog="handleShowDialog" 
		      @closeDialog="handleCloseDialog" 
		      @changeTab="handleChangeTab"
		      @changeMainItem="handleChangeMainItem" 
		      @changeSelect="changeData">
		    </filter-bar>
        <div id="allmap" ref="allmap"></div>
      </div>
    
  </div>
</template>
<script>
import FilterBar from 'vue-filter-bar'
import barMenus from '@/common/barMenus'
export default {
  components: {
    FilterBar
  },
  data() {
    return {
      barMenus
    }
  },
  methods: {
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(new BMap.MapTypeControl({ //添加地图类型控件
        mapTypes: [
	        BMAP_NORMAL_MAP,
	        BMAP_HYBRID_MAP
        ]
      }));
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

      // 编写自定义函数,创建标注
      function addMarker(point) {
        	var marker = new BMap.Marker(point);
       		map.addOverlay(marker);
      }
      // 随机向地图添加25个标注
      var bounds = map.getBounds();
      var sw = bounds.getSouthWest();
      var ne = bounds.getNorthEast();
      var lngSpan = Math.abs(sw.lng - ne.lng);
      var latSpan = Math.abs(ne.lat - sw.lat);
      for (var i = 0; i < 25; i++) {
        var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker(point);
      }
    },
    handleShowDialog(v) {
	          // console.log(v);
	        },
	        handleCloseDialog(v) {
	          // console.log(v);
	        },
	        handleChangeTab(v) {
	          // console.log(v);
	        },
	        handleChangeMainItem(v) {
	          // console.log(v)
	        },
	        changeData(v) {
	          console.log(v);
	        }
  },
  mounted() {
    this.map()
  }
}

</script>
<style>
  .mapCon{
		height: 100%;
	}
	.mapCon .mui-bar {
		background-color: #5eaef3;
		color: #fff;
	}
  .mapcontainer {
    height: 100%;
    padding-top: 5em;
  }

#allmap {
  height: 100%;
  width: 100%;

}
.mapCon .mapcontainer .filterbar{
  top: 46px !important;
    z-index: 10000;
}

</style>
