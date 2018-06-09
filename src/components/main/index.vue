<template>
    <transition name="el-fade-in-linear">
        <div>
            <Layout>
                <Header>
                    <Menu mode="horizontal" theme="dark" active-name="1">
                        <div class="panel-between">
                            <div class="panel-start item-center">
                                <!-- logo st -->
                                <div class="panel-start item-center">
                                    <div class="logo-img panel-center item-center" ><img src="../../assets/logo/logo.png" alt=""></div>
                                    <div class="logo-text font-title-sm">大家地理</div>
                                </div><!-- logo end -->
                                <div class="layout-nav" style="margin-left:20px">
                                    <MenuItem name="1">
                                        <Icon type="ios-navigate"></Icon>
                                        OA办公
                                    </MenuItem>
                                    <MenuItem name="2">
                                        <Icon type="ios-keypad"></Icon>
                                        达咖平台
                                    </MenuItem>
                                    <MenuItem name="3">
                                        <Icon type="ios-analytics"></Icon>
                                        缴费平台
                                    </MenuItem>
                                    <MenuItem name="4">
                                        <Icon type="ios-paper"></Icon>
                                        民宿平台
                                    </MenuItem>
                                </div>
                            </div>
                            <div class="panel-end item-center">
                                <Badge count="3">
                                    <Button type="ghost" icon="ios-chatboxes-outline" size="small" style="color:#fff;font-size:16px"></Button>
                                </Badge>
                                <Badge count="3" style="margin-left:20px">
                                    <Button type="ghost" icon="ios-bell-outline" size="small" style="color:#fff;font-size:16px"></Button>
                                </Badge>
                                <Dropdown trigger="click"  style="margin-left:50px">
                                    <a href="javascript:void(0)" style="display:block">
                                        <div class="panel-start item-center">
                                            <img src="../../assets/logo/logo.png" width="25px" alt="">
                                            <div class="font-white" style="margin-left:10px">admin</div>
                                            <Icon class="font-white" style="margin-left:10px" type="arrow-down-b"></Icon>
                                        </div>
                                    </a>
                                    <DropdownMenu slot="list" >
                                        <DropdownItem>
                                            <div class="smeun-item panel-start item-center">
                                                <Icon type="ios-gear-outline" size="16"></Icon>
                                                <div style="margin-left:10px">个人设置</div>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div class="smeun-item panel-start item-center">
                                                <Icon type="ionic" size="16"></Icon>
                                                <div style="margin-left:10px">安全中心</div>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div class="smeun-item panel-start item-center">
                                                <Icon type="log-out" size="16"></Icon>
                                                <div style="margin-left:10px">退出登录</div>
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </Menu>
                </Header>
                <Layout :style="{padding: '0 50px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px 0', minHeight: contentHeight+'px', background: '#fff'}">
                        <Layout>
                            <Sider hide-trigger :style="{background: '#fff'}">
                                <!-- <Cascader v-model="searchNavText" :data="navUrl.items" filterable></Cascader> -->
                                <Menu active-name="0" theme="light" width="auto" :open-names="['0']" :style="{minHeight: (contentHeight-50)+'px'}" accordion >
                                    <MenuItem name="0">
                                        <Icon type="ios-home"></Icon>
                                        首页
                                    </MenuItem>
                                    <Submenu v-for="(item,index) in navUrl.items" :key="index" :name="index" >
                                        <template slot="title">
                                            <Icon :type="item.icon"></Icon>
                                            {{item.label}}
                                        </template>
                                        <MenuItem  v-for="(item2,index2) in item.children" v-if="item2.path" :key="index2" :name="index-index2">{{item2.label}}</MenuItem>
                                        <Submenu v-for="(item2,index2) in item.children" v-if="!item2.path" :key="index2" :name="item2.label" >
                                            <template slot="title">
                                                {{item2.label}}
                                            </template>
                                            <MenuItem  v-for="(item3,index3) in item2.children"  :key="index3" :name="index-index2-index3">{{item3.label}}</MenuItem>
                                        </Submenu>
                                    </Submenu>
                                </Menu>
                            </Sider>
                            <Content :style="{padding: '0 24px', background: '#fff'}">
                                <router-view/>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
                <Footer class="layout-footer-center">2018 &copy; 浙江大家地理信息科技有限公司</Footer>
            </Layout>
        </div>
    </transition>
</template>
<script>
var navUrl = require('../../assets/js/nav.js')
var that;
export default {
    data(){
        return{
            searchNavText:'',
            contentHeight:0,
            navUrl:navUrl.nav
        }
    },
    mounted(){
        that = this;
        this.windowResize()
        this.$router.push('/test')
    },
    methods:{
        windowResize(){
            this.contentHeight = window.innerHeight-64-62-60;
            $(window).resize(function(){
                that.contentHeight = window.innerHeight-64-62-60;
            })
        }
    }
}
</script>
