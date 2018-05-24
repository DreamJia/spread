<template>
    <div style="width:100%;height:100%;overflow-y:auto;">
        <div id="main-box" ref="box">
            <ul class="index-block clearfix">
                <li class="fl agent-num">
                    <div class="magnet-head">
                        <img src="./img/dailishangrenshu.png" alt="">
                        <span>代理商人数</span>
                    </div>
                    <h2 class="num-show">{{initData.agenters}}
                        <img src="./img/shangshengjiantou.png" alt="">
                    </h2>
                </li>
                <li class="fl sale-mode">
                    <div class="magnet-head">
                        <img src="./img/dingdanzongshu.png" alt="">
                        <span>售出模块总数</span>
                    </div>
                    <h2 class="num-show">{{initData.saleModes}}
                        <img src="./img/shangshengjiantou.png" alt="">
                    </h2>
                </li>
                <li class="fl order-total">
                    <div class="magnet-head">
                        <img src="./img/zongjine.png" alt="">
                        <span>订单总金额</span>
                    </div>
                    <h2 class="num-show">{{initData.orderTotal}}
                    </h2>
                </li>
                <li class="fl user-total">
                    <div class="magnet-head">
                        <img src="./img/yonghuszongshu.png" alt="">
                        <span>用户总数</span>
                    </div>
                    <h2 class="num-show">{{initData.userTotal}}
                        <img src="./img/shangshengjiantou.png" alt="">
                    </h2>
                </li>
                <li class="fl overall-trend">
                    <div class="magnet-head">
                        <img src="./img/zongtiqushi.png" alt="">
                        <span>总体趋势</span>
                    </div>
                </li>
                <li class="fl system-msg">
                    <div class="magnet-head">
                        <img src="./img/xiaoxiliebiao.png" alt="">
                        <span>消息列表</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            initData: {
                agenters: 1000,
                saleModes: 236,
                orderTotal: 3600,
                userTotal: 500
            }
        };
    },
    created() {
        this.$nextTick(() => {
            // this.mainWidth = w;
        });
    }
};
</script>
<style  lang="stylus" type="text/stylus">
#main-box {
    padding: 20px;
}

li {
    // list-style: none;
    // position: absolute;
    margin-right: 20px;
    margin-bottom: 20px;
}

.index-block {
    // position: relative;
    z-index: 10;
}

.agent-num, .sale-mode, .order-total, .user-total {
    width: 300px;
    height: 200px;
    background: #fff;
    box-shadow: 2px 2px 3px #448aca;
    left: 0;
    top: 0;
}

.sale-mode {
    left: 360px;
}

.order-total {
    left: 720px;
}

.user-total {
    top: 260px;
}

.overall-trend {
    width: 656px;
    height: 410px;
    background: #fff;
    box-shadow: 2px 2px 3px #448aca;
    left: 360px;
    top: 260px;
}

.system-msg {
    width: 400px;
    height: 300px;
    background: #fff;
    box-shadow: 2px 2px 3px #448aca;
    right: 64px;
    top: 0;
}

.num-show {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 30px;
}

.magnet-head {
    height: 56px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    padding-top: 18px;

    img {
        width: 20px;
        height: 20px;
        vertical-align: top;
    }

    span {
        display: inline-block;
        height: 20px;
        line-height: 10px;
        margin-left: 14px;
        color: #54c3f1;
    }
}
</style>


