import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//首页
import IndexPage from '@/components/indexPage/Index'
//代理商管理
import AgentManagement from '@/components/agentManagement/AgentManagement'
//新建代理商
import AddAgent from '@/components/agentManagement/AddAgent'
//默认代理商
import DefaultAgent from '@/components/defaultAgent/DefaultAgent'
//模块管理
import ModulesManagement from '@/components/modulesManagement/ModulesManagement'
//系统设置
import SystemSetup from '@/components/systemSetup/SystemSetup'
//订单管理
import OrderManagement from '@/components/orderManagement/OrderManagement'
import Login from '@/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: IndexPage
    }, {
      path: '/agentManagement',
      name: 'AgentManagement',
      component: AgentManagement,
    }, {
      path: '/agentManagement/addAgent',
      name: 'AddAgent',
      component: AddAgent,
    }, {
      path: '/defaultAgent',
      name: 'DefaultAgent',
      component: DefaultAgent
    }, {
      path: '/modulesManagement',
      name: 'ModulesManagement',
      component: ModulesManagement
    }, {
      path: '/systemSetup',
      name: 'SystemSetup',
      component: SystemSetup
    }, {
      path: '/orderManagement',
      name: 'OrderManagement',
      component: OrderManagement
    }
  ]
})
