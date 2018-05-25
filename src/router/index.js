import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '../components/login'
import table from '../components/template/table'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/login', name: '登录', component: login },
    { path: '/table', name: '表格', component: table }
  ]
})
