<template>
    <div style="padding:20px">
        <div class="panel-between" style="width:100%">
            <div>
                <div class="font-title">{{title}}</div>
                <div class="font-text">{{content}}</div>
            </div>
            <div>
                <Select v-model="pageSize" style="width:100px" size="large" @on-change="pageSizeChange()">
                    <Option v-for="item in pageSizeList" :value="item" :key="item">每页{{ item }}条</Option>
                </Select>
                <Tooltip content="刷新" placement="bottom-start">
                    <Button type="default" @click="doRefresh()"><Icon size="20" type="ios-refresh-empty"></Icon></Button>
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
                <Input v-model="searchText" placeholder="输入关键字搜索" @keyup.native.13="search()">
                    <Button slot="append" icon="ios-search" @click="search()"></Button>
                </Input>
            </div>
        </div>
        <table class="table-bo" cellpadding="0" cellspacing="0">
            <thead >
                <tr>
                    <th v-for="(item,index) in tableData.data" :key="index"  :style="'width:'+item.width">
                        <Checkbox v-if="item.type == 'checkBox'" v-model="checkedAll" @on-change="checkedAllChange">{{item.label}}</Checkbox>
                        <span v-if="item.type == 'text' || item.type == 'img'|| item.type == 'op'|| item.type == 'tag'">{{item.label}}</span>                  
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in listData" :key="index">
                    <td v-for="(li,lin) in tableData.data" :key="lin"  >
                        <Checkbox v-if="li.type == 'checkBox'" v-model="item.active" @on-change="checkedChange">&nbsp;</Checkbox>
                        <img v-if="li.type == 'img'" :src="item[li.value]" height="30px">
                        <span v-if="li.type == 'text'">{{item[li.value]}}</span>
                        <div v-if="li.type == 'tag'">
                            <div v-for="(er,ei) in li.filter" :key="ei" v-if="er.value == item[li.value]" :class="'tag-'+er.color">{{er.label}}</div>
                        </div>
                        <div v-if="li.type == 'op'">
                                <Tooltip content="查看" placement="bottom">
                                    <Button type="ghost" :size="item.size" icon="ios-undo-outline" @click="previewIndex = index,previewModal = true"></Button>
                                </Tooltip>
                                <Tooltip content="编辑" placement="bottom">
                                    <Button type="ghost" :size="item.size" icon="ios-compose-outline" @click="test()"></Button>
                                </Tooltip>
                                <Tooltip content="删除" placement="bottom">
                                <Button type="ghost" :size="item.size" icon="ios-trash-outline"></Button>
                                </Tooltip>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-show="loading" style="width:100%;padding:20px 0"><Spin style="margin-left:50%"></Spin></div>
        <div style="float:right;margin-top:20px">
            <Page :total="total" size="small" :page-size="pageSize" @on-change="pageOnChange" show-elevator show-total></Page>
        </div>
        <Modal v-model="previewModal" :title="previewData.titleFilter ? listData[previewIndex][previewData.titleFilter]:''" ok-text="关闭" cancel-text="">
          <div  v-for="(item,index) in previewData.data" :key="index">
            <div v-if="item.type == 'img' " :style="item.style+'background-image:url('+listData[previewIndex][item.filter]+')'"></div>
            <div v-if="item.type == 'text'"  :style="item.style">
              <div class="panel-between">
                <div>{{item.label}}</div>
                <div>{{listData[previewIndex][item.filter]}}</div>
              </div>
            </div>
            <div v-if="item.type == 'textarea'" :style="item.style">
              <div>{{item.label}}</div>
              <div style="margin-top:10px">{{listData[previewIndex][item.filter]}}</div>
            </div>
          </div>
        </Modal>
    </div>
</template>
<script>
var that;
export default {
  props: {
    title: { type: String, required: true },
    content: String,
    url: { type: String, default: sessionStorage.getItem("API") },
    api: { type: String, required: true },
    query: {
      type: Object,
      default: function() {
        return {
          fields: [],
          wheres: [],
          sorts: [],
          pages: { currentPage: 1, size: 10 }
        };
      }
    },
    tableData: { type: Object, required: true },
    searchFilter: { type: Array, required: true },
    previewData:{ type:Object }
  },
  data() {
    return {
      previewModal: false,
      previewIndex:0,
      checkedAll: false,
      loading: false,
      listData: [],
      tempListSize: 0,
      total: 0,
      searchText: "",
      pageSize: 10,
      pageSizeList: [10, 20, 30, 50, 100, 500, 1000]
    };
  },
  mounted() {
    that = this;
    this.getList();
  },
  methods: {
    test(){
      $.post('http://localhost:8000/api/user/insert',{telNumber:'18768398916',password:'单位'},function(res){
        console.log(res)
      })
    },
    //获取IDS
    getIds() {
      var list = [];
      for (var i in this.listData) {
        list.push(this.listData[i].sunwouId);
      }
      return list;
    },
    //监听全选
    checkedAllChange(e) {
      for (var i in this.listData) {
        this.listData[i].active = e;
      }
      this.tempListSize = e ? this.listData.length : 0;
    },
    //监听单选
    checkedChange(e) {
      if (e) {
        this.tempListSize += 1;
      } else {
        this.tempListSize -= 1;
      }
      if (this.tempListSize == this.listData.length) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
    //刷新
    doRefresh() {
      this.getList();
    },
    //改变本页条数
    pageSizeChange() {
      this.query.pages.size = this.pageSize;
      this.getList();
    },
    //改变页码
    pageOnChange(e) {
      this.query.pages.currentPage = e;
      this.getList();
    },
    //搜索
    search() {
      console.log(this.searchText);
    },
    getList() {
      this.loading = true;
      $.ajax({
        url: this.url + this.api,
        method: "post",
        dataType: "json",
        data: { query: JSON.stringify(this.query) },
        success(res) {
          if (res.code) {
            for (var i in res.params.result) {
              res.params.result[i].active = false;
            }
            that.listData = res.params.result;
            that.total = res.params.total;
          }
        },
        complete() {
          that.loading = false;
        }
      });
    },
    removeItem() {}
  }
};
</script>
