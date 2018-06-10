<template>
    <div>
        <div class="font-title" style="width:100%;text-align:center;margin-bottom:20px">{{title}}</div>
        <table class="table-de" cellpadding="0" cellspacing="0" border="0">
            <tbody>
                <tr>
                    <td>1</td><td>1</td><td>1</td>
                </tr>
                <tr>
                    <td>1</td><td colspan="2">1</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        title:{ type:String , required: true}
    },
    data(){
        return {

        }
    },
    mounted(){},
    methods:{
        
    }
}
</script>
