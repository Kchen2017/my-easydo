<template>
    <div class="quan">
        <ul>
            <li class="quanItem">
                <div class="quanHead">
				    <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                </div>
                <div class="quanCon">
                    <div class="nameTitle">科比</div>
                    <p>我见过凌晨四点钟洛杉矶的太阳！！！</p>
                    <div class="photos">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                    </div>
                    <div class="commit">
                        <span>一小时前</span>
                        <span class="mui-icon icon-gengduo"></span>
                    </div>
                    <div class="zanzan">
                        <span class="mui-icon icon-buoumaotubiao16 diandian"></span> 
                        <span>James</span>
                        <span>Curry</span>
                    </div>
                    <div class="pinlun">
                        <p><span>艾弗森:</span>过你一百遍！！</p>
                        <p><span>奥尼尔:</span>good for you buddy！！</p>
                        <p><span>库里:</span>大哥带上我！！</p>
                    </div>
                </div>
            </li>
            <li class="quanItem">
                <div class="quanHead">
				    <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                </div>
                <div class="quanCon">
                    <div class="nameTitle">科比</div>
                    <p>我见过凌晨四点钟洛杉矶的太阳！！！</p>
                    <div class="photos">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
                    </div>
                    <div class="commit">
                        <span>一小时前</span>
                        <span class="mui-icon icon-gengduo"></span>
                    </div>
                    <div class="zanzan">
                        <span class="mui-icon icon-buoumaotubiao16 diandian"></span> 
                        <span>James</span>
                        <span>Curry</span>
                    </div>
                    <div class="pinlun">
                        <p><span>艾弗森:</span>过你一百遍！！</p>
                        <p><span>奥尼尔:</span>good for you buddy！！</p>
                        <p><span>库里:</span>大哥带上我！！</p>
                    </div>
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
    .quan {
        padding: 1em;
    }
    .quan .quanItem {
        display: flex;
        justify-content: flex-start;
        padding-top: 1em;
    }
    .quanItem .quanHead img{
        width: 3em;
        height: 3em;
    }
    .quanItem .quanCon{
        text-align: left;
        padding-left: 1em;
    }
    .quanItem .quanCon .nameTitle {
        color: cornflowerblue;
        padding-bottom: 0.5em
    }
    .quanItem .quanCon .photos {
        display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: stretch;
    }
    .quanItem .quanCon .photos img {
        width: 3em;
        height: 3em;
        margin: 0 1em 1em 0;
    }
    .quanItem .quanCon .commit {
        display: flex;
        justify-content: space-between;
    }
    .quanItem .quanCon .commit span:nth-child(1) {
        font-size: 8px;
        color: #9a9494;
    }
    /* .quanItem .quanCon .commit span:nth-child(2) {
        background-color: #f3f1f1;
        display: inline-block;
        width: 2em;
        text-align: center;
        border-radius: 1em;
    } */
    .quanItem .quanCon .zanzan{
        font-size: 16px;
        line-height: 16px;
        color: cornflowerblue;
        background-color: #f9f7f7;
        padding: 0.5em;
        margin-top: 5px;
    }
    .quanItem .quanCon .zanzan span {
        margin-right: 1em;
    }
    
    .quanItem .quanCon .diandian{
        font-size: 16px;
        color: #d2578d;
    }
    .quanItem .quanCon .pinlun{
        border-top: 1px solid #eae6e6;
        padding: 0.5em;
        background-color: #f9f7f7;
    }
    .quanItem .quanCon .pinlun span {
        color: cornflowerblue;
        margin-right: 5px;
    }
</style>


