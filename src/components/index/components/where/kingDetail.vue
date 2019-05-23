<template>
    <div class="kingDe">
	    <a class="mui-action-back mui-icon mui-icon-back mui-pull-left paddinglink" href="javascript:void(0)"></a>
        <div class="king_con">
            <div class="imgCon">
                <span class="name">Steven Curry</span>
            </div>
            <div class="introduction">
                <p>职业：球员</p>
                <p>球队：金州勇士</p>
                <p>战绩：73胜8负</p>
                <p>荣誉：3个NBA总冠军、两次常规赛MVP、一次得分王</p>
            </div>
            <div class="oprator">
                <div class="zhanji">
                    <div>战绩表</div>
                    <div>
                        <img src="" alt="">
                    </div>
                    <span class="mui-icon mui-icon-arrowright"></span>
                </div>
                <div class="vedio">
                    <div>个人视频</div>
                    <div>
                        
                    </div>
                    <span class="mui-icon mui-icon-arrowright"></span>
                </div>
            </div>
            

            <button><span class="mui-icon icon-running-copy"></span> 挑战king</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .kingDe {
        height: 100%;
    }
    .kingDe .mui-bar{
		background-color: #5eaef3;
	}
    .kingDe .paddinglink{
		color: #fff;
        position: fixed;
        left: 8px;
        top: 7px;
        z-index: 100000;
	}
    .kingDe .king_con{
        height: 100%;
  		/* padding-top: 2.5em; */
  		/* background-color: #fff; */
    }
    .kingDe .king_con .imgCon {
        width: 100%;
        height: 13em;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559127813&di=a95ed281c1ab6e9eafd15755c944f992&imgtype=jpg&er=1&src=http%3A%2F%2F04.imgmini.eastday.com%2Fmobile%2F20180227%2F20180227211012_e4aad37f9c9b62d481bcf4b51bc4432f_1.jpeg);
        background-repeat:no-repeat;
        background-size:cover;
        position: relative;
    }
    .kingDe .king_con .imgCon .name {
        position: absolute;
        bottom: 5px;
        left: 5px;  
        color: #fff;
    }
    .kingDe .king_con .introduction{
        background-color: #fff;
        text-align: left;
        padding: 1em;
    }
    .kingDe .king_con .oprator {
        border-top: 1px solid #eae5e5;
        border-bottom: 1px solid #eae5e5;
        margin-top: 1em;
         background-color: #fff;
    }
    .kingDe .king_con .oprator .zhanji,.vedio {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        background-color: #fff;
        line-height: 50px;
        margin-left: 1em;
        position: relative;
   }
   .kingDe .king_con .oprator .vedio .mui-icon{
        position: absolute;
        right: 27px;
        top: 10px;
        z-index: 100000;
        color: #b7b4b4;
   }
   .kingDe .king_con .oprator .zhanji .mui-icon{
       position: absolute;
        right: 27px;
        top: 10px;
        z-index: 100000;
        color: #b7b4b4;
   }
   .kingDe .king_con .oprator .zhanji {
       border-bottom: 1px solid #eae5e5;
   }


    .kingDe .king_con button {
        width: 373px;
        background-color: #94a3cc;
        height: 47px;
        font-size: 18px;
        position: relative;
        margin-top: 1em
    }
    .kingDe .king_con button span{
        position: absolute;
        left: 109px;
        top: 2px;
    }
    .kingDe .king_con button .mui-icon{
        font-size: 40px;
    }
</style>


