<template>
    <div>
        
        <table class="table-de" cellpadding="0" cellspacing="0" border="0">
            <tbody>
                <tr v-for="(item,index) in tdData" :key="index">
                    <td v-for="(item2,index2) in item" :key="index2" :height="item2.height" :width="item2.width" :rowspan="item2.rowspan" :colspan="item2.colspan">{{item2.td}}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        tdData:{type:Array}
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
