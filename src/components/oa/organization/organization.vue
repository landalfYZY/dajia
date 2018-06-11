<template>
    <div>
        <DjTable title="首页" content="asdsdas" :query='query' api="sunwou/miniProMod/find" :table-data="tableData" :search-filter='searchFilter' :preview-data="previewData"></DjTable>
    </div>
</template>
<script>
import DjTable from "../../template/table";
export default {
  components: {
    DjTable
  },
  data() {
    return {
      query: {
        fields: [],
        wheres: [
          { value: "isDelete", opertionType: "equal", opertionValue: false },
          { value: "status", opertionType: "equal", opertionValue: "上架" }
        ],
        sorts: [{ value: "createTime", asc: false }],
        pages: { currentPage: 1, size: 10 }
      },
      searchFilter: ["modelName", "createTime"],
      tableData: {
        data: [
          {
            label: "全选",
            type: "checkBox",
            value: "modelCover",
            width: "70px"
          },
          { label: "图片", type: "img", value: "modelCover" },
          { label: "名称", type: "text", value: "modelName" },
          { label: "价格", type: "text", value: "modelPrice" },
          {
            label: "状态",
            type: "tag",
            value: "status",
            filter: [
              { label: "上架", value: "上架", color: "primary" },
              { label: "下架", value: "下架", color: "warning" }
            ]
          },
          { label: "时间", type: "text", value: "createTime" },
          { label: "操作", type: "op", width: "150px", size: "small" }
        ]
      },
      previewData: {
        titleFilter:'modelName',
        data: [
          {
            type: "img",
            style: 'width: 100%;height: 200px;background-size:cover;background-position:center;' ,
            filter: "modelCover"
          },
          {
            type: "text",
            style: { width: "100%", height: "auto",padding:'10px ',borderBottom:'1px solid #e1e1e1'},
            filter: "modelPrice",label:'价格'
          },
          {
            type: "text",
            style: { width: "100%", height: "auto",padding:'10px ',borderBottom:'1px solid #e1e1e1'},
            filter: "status",label:'状态'
          },
          {
            type: "text",
            style: { width: "100%", height: "auto",padding:'10px ',borderBottom:'1px solid #e1e1e1' },
            filter: "relation",label:'关系'
          },
          {
            type: "textarea",
            style: { width: "100%", height: "auto",padding:'10px ',borderBottom:'1px solid #e1e1e1' },
            filter: "funcDesc",label:'功能描述'
          }
        ]
      }
    };
  }
};
</script>
