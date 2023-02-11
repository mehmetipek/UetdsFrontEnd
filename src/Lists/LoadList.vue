<template>
<div class="col-md-12" style="padding-top:10px">
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputPlak">Plaka Giriniz</label>
      <input type="text" v-model="yukBildirimiListesiResponse.plaka" class="form-control" id="inputPlak" placeholder="Plaka 11 XXX 11">
    </div>
    <div class="form-group col-md-4">
      <label for="inputTarih">Tarih Giriniz</label>
      <input type="text" v-model="yukBildirimiListesiResponse.tarih" class="form-control" id="inputTarih" placeholder="XX/XX/XXXX">
    </div>
    <div class="form-group col-md-2" style="margin-top:1.9%">
      <button  class="btn btn-info" @click="saveYukListesi">BUL</button>
    </div>
</div>
<hr>
  
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" >{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showReviewer" label="Reviewer" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Imp" width="80px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>
      <el-table-column label="Readings" align="center" width="95">
        <template slot-scope="{row}">
          <span v-if="row.pageviews" class="link-type">{{ row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" >
            Edit
          </el-button>
          <el-button v-if="row.status!='published'" size="mini" type="success" >
            Publish
          </el-button>
          <el-button v-if="row.status!='draft'" size="mini" >
            Draft
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import appModel from '@/Services/appModel';
import elDragDialog from "@/directive/el-drag-dialog"; 
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination'
  export default {
    name:"YukListesi",
    directives: { elDragDialog,waves },
    components: { Pagination },
    data() {
      return {
        yukBildirimiListesiResponse:{
          plaka:"33EBC70",
          tarih:"01/11/2019",
        wsuser:{
          kullaniciAdi:"922571",
          sifre:"0OKYGH0PVB"
        }
        },
        bildirimListesi:[],
        search: '',
        tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      showReviewer: false,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      }
    },
    methods: {
       getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
      saveYukListesi(){
        this.$store.dispatch("savePackageL", this.yukBildirimiListesiResponse).then(res => {
          console.log(res);
          if(res.sonucMesaji=="İŞLEM BAŞARILI"){
        this.$message({
          title: 'İşlem Başarıyla Gerçekleşti.',
          message: 'İşlem Başarıyla Gerçekleşti',
          type: 'success'
        });
      }
      else{
      this.$message.error({
        title: 'Error',
        message: 'Hata işlem yapılamadı',
        type: 'success'
      });
    }  
        },
        err => {
          console.log(err);
        });
      },
       sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}`
        ? 'ascending'
        : sort === `-${key}`
          ? 'descending'
          : ''
    }
    },
  }
</script>
<style scoped>

</style>