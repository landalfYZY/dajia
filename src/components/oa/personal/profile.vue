<template>
    <transition name="el-fade-in-linear">
        <div style="width:100%">
            <div style="maxWidth:935px;margin:auto" >
                <Button icon="printer" type="ghost" @click="doPrint()">打印</Button>
                <Button icon="edit" type="ghost">编辑</Button>
                <div id="pri">
                    <div class="font-title" style="width:100%;text-align:center">个人资料</div>
                    <div class="font-title-mini" style="margin-top:15px">基础资料</div>
                    <DjDetail style="margin-top:5px" :td-data="tableData"></DjDetail>

                    <div class="font-title-mini" style="margin-top:15px">状态信息</div>
                    <DjDetail style="margin-top:5px" :td-data="tableData2"></DjDetail>

                    <div class="font-title-mini" style="margin-top:15px">个人档案</div>
                    <DjDetail style="margin-top:5px" :td-data="tableData3"></DjDetail>

                    <div class="font-title-mini" style="margin-top:15px">联系方式</div>
                    <DjDetail style="margin-top:5px" :td-data="tableData4"></DjDetail>
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
                    {td:'姓名',width:'20%'},{td:'张三',width:'30%'},{td:'照片',rowspan:3,width:'20%'},{td:'照片',rowspan:3,width:'30%'}
                ],
                [
                    {td:'部门'},{td:'开发部'}
                ],
                [
                    {td:'职位'},{td:'项目主管'}
                ]
            ],
            tableData2:[
                [
                    {td:'状态',width:'20%'},{td:'正式',width:'30%'},{td:'入职日期',width:'20%'},{td:'2018-06-01',width:'30%'}
                ],
                [
                    {td:'试用期到期'},{td:'2018-07-01'},{td:'转正日期'},{td:'2018-07-02'}
                ],
                [
                    {td:'所属单位'},{td:'浙江大家地理信息科技有限公司'},{td:'离职日期'},{td:''}
                ]
            ],
            tableData3:[
                [
                    {td:'学历',width:'20%'},{td:'本科',width:'30%'},{td:'民族',width:'20%'},{td:'汉',width:'30%'}
                ],
                [
                    {td:'生日'},{td:'1996-03-22'},{td:'籍贯'},{td:'德清'}
                ],
                [
                    {td:'婚姻'},{td:'未婚'},{td:''},{td:''}
                ],
                [
                    {td:'证件类型'},{td:'居民身份证'},{td:'证件号码'},{td:'330521199503051515'}
                ],
                [
                    {td:'现住址'},{td:'德清',colspan:3}
                ],
                [
                    {td:'家庭住址'},{td:'德清',colspan:3}
                ]
            ],
            tableData4:[
                [
                    {td:'手机号',width:'20%'},{td:'17858959662',width:'30%'},{td:'QQ',width:'20%'},{td:'892538405',width:'30%'}
                ],
                [
                    {td:'邮箱'},{td:'landalf@qq.com'},{td:'微信'},{td:'yzyman'}
                ],
                [
                    {td:'备用联系人'},{td:'张锋'},{td:'备用联系人电话'},{td:'10086'}
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
