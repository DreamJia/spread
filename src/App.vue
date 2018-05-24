<template>
  <div id="app">
    <el-container v-if="$route.path!='/login'">
      <el-aside width="300px">
        <div class="index-logo">
          <img src="./assets/logo_zuocejuzhong.png" alt="">
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="border:none;">
          <el-menu-item index="0">
            <router-link to="/index" tag="div" class="router-button">
              <i class="el-icon-location"></i>
              首页
            </router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link to="/agentManagement" tag="div" class="router-button">
              <i class="el-icon-phone"></i>
              代理商管理
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/modulesManagement" tag="div" class="router-button">
              <i class="el-icon-menu"></i>
              模块功能管理
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/defaultAgent" tag="div" class="router-button">
              <i class="el-icon-edit-outline"></i>
              默认代理商管理
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/orderManagement" tag="div" class="router-button">
              <i class="el-icon-document"></i>
              订单管理
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/systemSetup" tag="div" class="router-button">
              <i class="el-icon-setting"></i>
              系统设置
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main ref="main">
        <div>
          <!-- 头部 -->
          <div class="header" :style="{width:mainWidth+'px'}">
            <div style="position:relative;">
              <h1>会推广超级管理后台</h1>
              <!-- 退出登录 -->
              <div class="return-login">
                <img src="./assets/tuichu.png" alt="">
              </div>
              <div class="msg-num">
                <el-badge :value="200" :max="99" class="item">
                  <i class="el-icon-message" style="font-size:30px;"></i>
                </el-badge>
              </div>
              <div class="remind-num">
                <el-badge :value="10" :max="99" class="item">
                  <i class="el-icon-bell" style="font-size:30px;"></i>
                </el-badge>
              </div>
              <div class="person-name">
                <h3>administrator</h3>
                <h4>超级管理员</h4>
              </div>
              <div class="person-img">
                <img src="./assets/katong.jpg" alt="">
              </div>
            </div>
          </div>
          <!-- 页面主题 -->
          <div class="page-theme" style="padding-left:20px;">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <router-view :menutree="menutree"></router-view>
              </keep-alive>
            </transition>
          </div>
          <div class="footer" :style="{width:mainWidth+'px'}">
            <p>Copyright &copy; 2017-2018 weixin.com their respective owners.Tel:0431-80860086</p>
          </div>
        </div>

      </el-main>
    </el-container>
    <keep-alive v-if="$route.path=='/login'">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            menutree: {},
            mainWidth: ""
        };
    },
    components: {},
    watch: {
        $route: (to, from) => {
            // console.log(to);
        }
    },
    // computed: {

    // },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        add() {
            console.log(this.www);
        }
    },

    created() {
        this.$nextTick(() => {
            var w = this.$refs.main._vnode.elm.clientWidth;
            this.mainWidth = w;
        });
    },
    monuted() {},
    updated() {}
};
</script>

<style lang="stylus" type="text/stylus">
* {
  margin: 0;
  padding: 0;
}

.index-logo {
  width: 300px;
  height: 100px;
  box-sizing: border-box;
  padding-top: 28px;
  padding-left: 60px;

  // border-right: 1px solid #e6e6e6;
  img {
    width: 180px;
    height: 44px;
  }
}

// 头部
.header {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 20;
  top: 0;
  box-shadow: 2px 2px 3px #e6e6e6;

  h1 {
    width: 300px;
    height: 100px;
    line-height: 100px;
    color: #448bcb;
    font-size: 22px;
    margin: 0;
    text-align: center;
    position: absolute;
    left: 0;
  }

  .return-login {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 50px;
    top: 35px;
    cursor: pointer;
  }

  .remind-num {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 110px;
    top: 30px;
    cursor: pointer;
  }

  .msg-num {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 180px;
    top: 30px;
    cursor: pointer;
  }

  .person-name {
    width: 150px;
    height: 100px;
    position: absolute;
    right: 230px;
    box-sizing: border-box;
    padding: 20px 0;

    h3 {
      line-height: 30px;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }

    h4 {
      line-height: 30px;
      font-size: 16px;
      color: #999;
      font-weight: 500;
      text-align: center;
    }
  }

  .person-img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: blue;
    position: absolute;
    right: 380px;
    top: 25px;
    background: blue;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

// 页面主题
.page-theme {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 50px;
  position: relative;
  z-index: 10;
}

// 尾部
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;

  p {
    text-align: center;
    line-height: 50px;
    color: #888888;
    font-size: 14px;
  }
}

.el-aside {
  height: 100vh;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  position: relative;
}

.el-main {
  background-color: #fff;
  color: #333;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  padding-right: 20px;
  position: relative;
  box-shadow: -2px 2px 3px #448aca;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside, .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

// .el-menu-vertical-demo {
// height: 100%;
// }
.router-button {
  font-size: 16px;
}

.router-link-active {
  color: #468acb;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>

