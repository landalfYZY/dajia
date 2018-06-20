<template>
    <transition name="el-fade-in-linear">
        <div>
            <BackTop></BackTop>
            <Layout>
                <Header>
                    <Menu mode="horizontal" theme="dark" active-name="oa_overview" @on-select="meunSelect">
                        <div class="panel-between">
                            <div class="panel-start item-center">
                                <!-- logo st -->
                                <div class="panel-start item-center">
                                    <div class="logo-img panel-center item-center" ><img src="../../assets/logo/logo.png" alt=""></div>
                                    <div class="logo-text font-title-sm">大家地理</div>
                                </div><!-- logo end -->
                                <div class="layout-nav" style="margin-left:20px">
                                    <MenuItem name="oa_overview">
                                        <Icon type="ios-navigate"></Icon>
                                        OA办公
                                    </MenuItem>
                                    <MenuItem name="dk_overview">
                                        <Icon type="coffee"></Icon>
                                        达咖平台
                                    </MenuItem>
                                    <MenuItem name="pay_overview">
                                        <Icon type="ios-analytics"></Icon>
                                        缴费平台
                                    </MenuItem>
                                    <MenuItem name="minsu">
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
                        <BreadcrumbItem v-for="(item,index) in routes" :key="index">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                    <router-view/>
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
            routes:[]
        }
    },
    watch:{
        $route(){
            this.routes = this.$route.matched
            if(this.$route.fullPath == '/oa_main' || this.$route.fullPath == '/'){
                this.meunSelect('/oa_overview')
            }
        }
    },
    mounted(){
        that = this;
        this.windowResize()
        this.routes = this.$route.matched
        if(this.$route.fullPath == '/oa_main' || this.$route.fullPath == '/'){
                this.meunSelect('/oa_overview')
        }
    },
    methods:{
        windowResize(){
            this.contentHeight = window.innerHeight-64-62-60;
            $(window).resize(function(){
                that.contentHeight = window.innerHeight-64-62-60;
            })
        },
        meunSelect(e){
            this.$router.push(e)
        }
    }
}
</script>
