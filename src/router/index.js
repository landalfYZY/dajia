import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login'
import table from '../components/template/table'
import main from '../components/main'
import test from '../components/test'

/**
 * oa办公系统
 */
import oamain from '../components/oa/main'
import oaOverview from '../components/oa/overview'

/**
 * 达咖系统
 */
import dkmain from '../components/daka/main'
import dkOverview from '../components/daka/overview'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: '登录', component: login },
    { path: '/table', name: '表格', component: table },
    { path: '/', name: '--', component: main ,children:[
      { path: '/oa_main', name: 'OA办公系统', component: oamain,children:[
        { path: '/test', name: '测试', component: test },
        { path: '/oa_overview', name: '概览', component: oaOverview },
      ] },
      { path: '/dk_main', name: '达咖平台', component: dkmain,children:[
        { path: '/dk_overview', name: '概览', component: dkOverview },
      ] },
    ]}
  ]
})
