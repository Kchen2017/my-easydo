<template>
    <div class="setConfig">
        <header class="mui-bar mui-bar-nav">
	        <a @click="goToBack" class="mui-action-back mui-icon mui-icon-back mui-pull-left" href="javascript:void(0)"></a>
	        <h1 class="mui-title">设置</h1>
	    </header>
        <div class="container">
            <ul class="basic">
                <li><span>修改手机</span><span class="mui-icon mui-icon-arrowright"></span></li>
                <li><span>修改密码</span><span class="mui-icon mui-icon-arrowright"></span></li>
                <li><span>绑定微信号</span><i>未绑定</i><span class="mui-icon mui-icon-arrowright"></span></li>
            </ul>
            <ul class="vison">
                <li><span>版本更新</span><i>当前1.0</i><span class="mui-icon mui-icon-arrowright"></span></li>
                <li><span>帮助与反馈</span><span class="mui-icon mui-icon-arrowright"></span></li>
                <li><span>关于我们</span><span class="mui-icon mui-icon-arrowright"></span></li>
            </ul>
            <ul class="swith">
                <li @click="gotoSwith"><span>切换身份</span><i>运动者</i><span class="mui-icon mui-icon-arrowright"></span></li>
            </ul>
            <div class="login">
                退出登录
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        goToBack(){
            this.$router.go(-1)
        },
        gotoSwith(){
            this.$router.push({
                name: "switch"
            })
        }
    }
}
</script>
<style>
    .setConfig {
        height: 100%;
    } 
    .setConfig .mui-bar {
        background-color: #5eaef3;
    }
    .setConfig .mui-bar .mui-icon,.mui-title {
        color: #fff;
    }
    .setConfig .container {
        height: 100%;
        padding-top: 3em;
        text-align: left;
        /* background-color: #fff; */
    }
    .setConfig .container ul {
        background-color: #fff;
        margin-bottom: 1em;
    }
    .setConfig .container ul li {
        display: flex;
        width: 100%;
        padding: 1em;
        justify-content: space-between;
        /* height: 2em;
        line-height: 2em; */
        font-size: 14px;
        position: relative;
    }
    .setConfig .container ul li i {
        position: absolute;
        top: 18px;
        right: 39px;
    }
    .setConfig .container .login {
        text-align: center;
        height: 40px;
        line-height: 40px;
        width: 100%;
        background-color: #fff;
    }
</style>


