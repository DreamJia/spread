// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './Login'
import router from './router'
import Vuex from 'vuex'
import Reset from './style/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'normalize.css/normalize.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
// const routers = new VueRouter({
//   router
// })
let isLogin = {
  App
};
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('uid') && to.path != '/login') {
    isLogin = {
      Login
    };
    next({
      path: '/login'
    });
  } else {
    next();
  }
})

new Vue({
  // el: '#app',
  router,
  components: isLogin,
  template: '<App/>'
}).$mount('#app');
