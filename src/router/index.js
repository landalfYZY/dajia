import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login'
import table from '../components/template/table'
import test from '../components/test'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: '登录', component: login },
    { path: '/table', name: '表格', component: table },
    { path: '/', name: '测试', component: test }
  ]
})
