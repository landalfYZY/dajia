<template>
    <transition name="el-fade-in-linear">
        <div>
            <div style="width:100%">
            <div style="maxWidth:935px;margin:auto" >
                <Button icon="printer" type="ghost" @click="doPrint()">打印</Button>
                <Button icon="edit" type="ghost">编辑</Button>
                <div id="pri">
                    <div class="font-title" style="width:100%;text-align:center">主体公司单位</div>
                    <DjDetail style="margin-top:15px" :td-data="tableData"></DjDetail>

    
                </div>
            </div>
        </div>
            
        </div>
    </transition>
</template>

<script>
var that;
import DjDetail from "../../template/detail";
export default {
    components:{
        DjDetail
    },
    data(){
        return {
            tableData:[
                [
                    {td:'名称',width:'20%'},{td:'浙江大家地理信息科技有限公司',width:'80%'}
                ],
                [
                    {td:'英文名称'},{td:'Zhe Jiang Da Jia'}
                ],
                [
                    {td:'法人代表'},{td:'赵四'}
                ],
                [
                    {td:'负责人'},{td:'张三'}
                ],
                [
                    {td:'所在城市'},{td:'湖州'}
                ],
                [
                    {td:'地址'},{td:'德清科技城'}
                ],
                [
                    {td:'电话'},{td:'0572-5959596'}
                ]
            ],
            
        }
    },
    methods:{
        doPrint(){
            var oldhtml = window.document.body.innerHtml;
            var newhtml = $("#pri").html()
            window.document.body.innerHTML=newhtml;
            window.print();
            window.location.reload(); 
            window.document.body.innerHTML=oldhtml;
        }
    }
}
</script>
