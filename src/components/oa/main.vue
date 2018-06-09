<template>
    <transition name="el-fade-in-linear">
        <div>
            
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
        this.$router.push('/oa_overview')
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