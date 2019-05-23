<template>
    <div class="whereking">
        <ul>
            <li class="kingItem" @click="pushDetail(item)">  
                <div class="photo">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559127813&di=a95ed281c1ab6e9eafd15755c944f992&imgtype=jpg&er=1&src=http%3A%2F%2F04.imgmini.eastday.com%2Fmobile%2F20180227%2F20180227211012_e4aad37f9c9b62d481bcf4b51bc4432f_1.jpeg" alt="">
                </div>
                <div class="info">
                    <h3>库里</h3>
                    <p>身高：<span>192cm</span></p>
                    <p>战绩：<span>100%</span></p>
                </div>
                <div>
                    
                </div>
            </li>
            <li class="kingItem"> 
                <div class="photo">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558586001024&di=63597fbd34917a501b8e780d74aace5c&imgtype=0&src=http%3A%2F%2F07.imgmini.eastday.com%2Fmobile%2F20170828%2F20170828090711_c1a0ed1e58c9970e953d3fb3f13d9764_1.jpeg" alt="">
                </div>
                <div class="info">
                    <h3>杜兰特</h3>
                    <p>身高：<span>210cm</span></p>
                    <p>战绩：<span>90%</span></p>
                </div>
                <div>
                    
                </div>
            </li>
            <li class="kingItem"> 
                <div class="photo">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2252804407,3529059593&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="info">
                    <h3>詹姆斯.哈登</h3></h3>
                    <p>身高：<span>208cm</span></p>
                    <p>战绩：<span>80%</span></p>
                </div>
                <div>
                    
                </div>
            </li>
            <li class="kingItem"> 
                <div class="photo">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558586126702&di=bd52262c2f7d5546b28012af8758af8e&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F314e251f95cad1c899ffb99e743e6709c83d51c6.jpg" alt="">
                </div>
                <div class="info">
                    <h3>詹姆斯</h3>
                    <p>身高：<span>198cm</span></p>
                    <p>战绩：<span>70%</span></p>
                </div>
                <div>
                    
                </div>
            </li>
            <li class="kingItem"> 
                <div class="photo">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558586176793&di=ada2e5624550705f8298e6f00d802f6e&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2Fnewscenter%2Ftyxw%2F201111%2FW020111104841405173919.jpg" alt="">
                </div>
                <div class="info">
                    <h3>科比</h3>
                    <p>身高：<span>192cm</span></p>
                    <p>战绩：<span>100%</span></p>
                </div>
                <div>
                    
                </div>
            </li>
            <li class="kingItem"> 
                <div class="photo">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558586211251&di=5ee4d554ab01b57910b3b0c2b5276ae9&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fphoto%2F0074%2F2008-08-23%2F4K2H4TNK05OI0074.jpg" alt="">
                </div>
                <div class="info">
                    <h3>马琳</h3>
                    <p>身高：<span>192cm</span></p>
                    <p>战绩：<span>100%</span></p>
                </div>
                <div>
                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        pushDetail(){
            this.$router.push({
                name: "kingDetail"
            })
        }
    }
}
</script>
<style>
    .whereking {
        padding: 1em;
    }
    .whereking .kingItem {
        display: flex;
        justify-content: flex-start;
        padding-top: 1em;
    }
    .whereking .photo img {
        width: 7em;
    }
    .whereking .kingItem .info {
        text-align: left;
        padding-left: 1em;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }

</style>


