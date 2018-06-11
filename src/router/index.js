import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login'
import main from '../components/main'
import test from '../components/test'
/**
 * template
 */
import table from '../components/template/table'
import detail from '../components/template/detail'

/**
 * oa办公系统
 */
import oamain from '../components/oa/main'
import oaOverview from '../components/oa/overview'
import oaProfile from '../components/oa/personal/profile'  //个人资料
import oaCompany from '../components/oa/organization/company'
import oaOrganization from '../components/oa/organization/organization'
import oaApplication from '../components/oa/procedure/application' //申请流程

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
        { path: '/detail', name: '详情', component: detail },
        { path: '/oa_overview', name: '概览', component: oaOverview },
        { path: '/oa_profile', name: '个人资料', component: oaProfile },
        { path: '/oa_company', name: '公司单位', component: oaCompany },
        { path: '/oa_organization', name: '组织结构', component: oaOrganization },
        { path: '/oa_application', name: '申请流程', component: oaApplication },
      ] },
      { path: '/dk_main', name: '达咖平台', component: dkmain,children:[
        { path: '/dk_overview', name: '概览', component: dkOverview },
      ] },
      
    ]}
  ]
})
