<template>
    <div class="whereking">
        <ul>
            <li class="kingItem"> 
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
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .whereking {
        padding: 1em;
    }
    .whereking .kingItem {
        display: flex;
        justify-content: flex-start;
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


