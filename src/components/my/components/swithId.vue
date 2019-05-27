<template>
    <div class="SwithId">
        <h3 class="title">Easy Go</h3>
        <div>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558700032868&di=e94ae9985c59971532779fb9d5d32456&imgtype=0&src=http%3A%2F%2Fjkcdn.pajk.com.cn%2Fimage%2FT1IkVKBgCT1RCvBVdK.jpg%3Fimg%3D%2Ftf%2Cd_jpg%2Cq_70%2Frs%2Cw_500" alt="">
        </div>
        
        <h4>您当前的身份为“运动者”</h4>
        <div @click="swithV" class="btnsw">切换为“商家”身份</div>
        <div @click="goBack" class="btnback">返回</div>
   </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        swithV(){
            let iden = this.$cookies.get("identity")
            let idenVal = ""
            if(iden === "business"){
                idenVal = "sporter"
            }else {
                idenVal = "business"
            }
            this.$cookies.set("identity", idenVal)
            window.location.reload()
        }
    }
}
</script>
<style>
    .SwithId {
        height: 100%;
        background-color: #5eaef3;
    }
    .SwithId .title {
        padding: 1em;
        color: #fff;
    }
    .SwithId img {
        width: 274px;
        height: 389px;
    }
    .SwithId h4 {
        padding: 1em;
        color: #fff;
    }
    .SwithId .btnsw {
        height: 50px;
        line-height: 50px;
        background-color: #fff;
    }
    .SwithId .btnback{
        margin-top: 1em;
        height: 50px;
        line-height: 50px;
        background-color: #edf124;
    }
</style>

