<template>
    <div style="padding:20px">
        <div class="panel-between" style="width:100%">
            <div >
                <div class="font-title">这是一张表格</div>
                <div class="font-text">这里是表格描述</div>
            </div>
            <div>
                <Select v-model="pageSize" style="width:100px" size="large">
                    <Option v-for="item in pageSizeList" :value="item" :key="item">每页{{ item }}条</Option>
                </Select>
                <Tooltip content="刷新" placement="bottom-start">
                    <Button type="default" ><Icon size="20" type="ios-refresh-empty"></Icon></Button>
                </Tooltip>
            </div>
        </div>

        <div class="panel-between" style="margin-top:20px">
            <div>
                <ButtonGroup>
                    <Button>批量删除</Button>
                    <Button type="primary">批量下架</Button>
                    <Button type="primary">批量下架</Button>
                    <Button type="primary">批量下架</Button>
                </ButtonGroup>
            </div>
            <div>
                <Input v-model="searchText" placeholder="输入关键字搜索">
                    <Button slot="append" icon="ios-search"></Button>
                </Input>
            </div>
        </div>
        <table class="table" cellpadding="0" cellspacing="0">
            <thead >
                <tr>
                    <th style="width:70px"><Checkbox>全选</Checkbox></th>
                    <th>图片</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>状态</th>
                    <th>时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in listData" :key="index">
                    <td><Checkbox>&nbsp;</Checkbox></td>
                    <td><img :src="item.modelCover" height="30px"></td>
                    <td>{{item.modelName}}</td>
                    <td>{{item.modelPrice}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.createTime}}</td>
                    <td>{{item.status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
var that;
export default {
    data(){
        return {
            listData:[],
            searchText:'',
            pageSize:10,
            pageSizeList:[10,20,30,50,100,500,1000],
            query:{
                "fields":[],
                "wheres":[
                    {"value":"isDelete","opertionType":"equal","opertionValue":false},
                    {"value":"status","opertionType":"equal","opertionValue":"上架"}],
                "sorts":[{"value":"createTime","asc":false}],
                "pages":{"currentPage":1,"size":10}
            }
        }
    },
    mounted(){
        that = this;
        this.getList()
    },
    methods:{
        getList(){
            $.ajax({
                url:sessionStorage.getItem('API')+'sunwou/miniProMod/find',
                method:'post',
                dataType:'json',
                data:{query:JSON.stringify(this.query)},
                success(res){
                    if(res.code){
                        that.listData = res.params.result
                    }
                }
            })     
        },
        removeItem(){},
        prePage(){},
        nextPage(){}
    }
}
</script>
