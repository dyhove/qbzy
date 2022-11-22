<template>
  <div>
    <div class="con">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <div class="content">
                <div class="left">
                  <el-form-item label="食品名称">
                    <span>{{ scope.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="食品ID">
                    <span>{{ scope.row.item_id }}</span>
                  </el-form-item>
                  <el-form-item label="食品介绍">
                    <span>{{ scope.row.description }}</span>
                  </el-form-item>
                  <el-form-item label="食品评分">
                    <span>{{ scope.row.rating }}</span>
                  </el-form-item>
                  <el-form-item label="月销量">
                    <span>{{ scope.row.month_sales }}</span>
                  </el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="餐馆名称">
                    <span>{{ scope.row.pinyin_name }}</span>
                  </el-form-item>
                  <el-form-item label="餐馆 ID">
                    <span>{{ scope.row.restaurant_id }}</span>
                  </el-form-item>
                  <el-form-item label="餐馆地址">
                    <span>{{ scope.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="食品分类">
                    <span>{{ scope.row.tips }}</span>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="name"> </el-table-column>
        <el-table-column label="食品介绍" prop="description"> </el-table-column>
        <el-table-column label="评分" prop="rating"> </el-table-column>
        <el-table-column label="操作" prop="desc">
          <template slot-scope="scope">
            <div class="btn">
              <button @click="edit(scope.$index)">编辑</button>
              <button class="del" @click="del(scope.$index)">删除</button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 6, 10, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <el-dialog title="修改店铺消息" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="食品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="食品分类">
          <el-select v-model="form.category" placeholder="请选择"></el-select>
        </el-form-item>
        <el-form-item label="食品图片">
          <img :src="form.image_path" alt="" />
        </el-form-item>
      </el-form>
      <el-table :data="tableDatas" style="width: 100%">
        <el-table-column prop="standard" label="规格" width="180">
        </el-table-column>
        <el-table-column prop="packing" label="包装费" width="180">
        </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" @click="deltable(scope.$index)"
              >删除</el-button
            > </template
          >em
        </el-table-column>
      </el-table>
      <div class="add">
        <el-button type="primary" @click="specification = true"
          >添加规格</el-button
        >
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editOk">确 定</el-button>
      </div>

      <!-- 规格弹框开始 -->
      <el-dialog
        width="30%"
        title="添加规格"
        :visible.sync="specification"
        append-to-body
      >
        <el-form :model="addstandard">
          <el-form-item label="规格" label-width="100px">
            <el-input
              v-model="addstandard.standard"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="包装费" label-width="100px">
            <div class="div">
              <input type="text" v-model="addstandard.packing" /><button
                @click="addstandard.packing == 0 ? 0 : addstandard.packing--"
              >
                -</button
              ><button @click="addstandard.packing++">+</button>
            </div>
          </el-form-item>
          <el-form-item label="价格" label-width="100px">
            <div class="div">
              <input type="text" v-model="addstandard.price" /><button
                @click="addstandard.price == 0 ? 0 : addstandard.price--"
              >
                -</button
              ><button @click="addstandard.price++">+</button>
            </div>
          </el-form-item>
          <div class="btn-right">
            <el-button @click="specification = false">取消</el-button>
            <el-button type="primary" @click="standardadd">确定</el-button>
          </div>
        </el-form>
      </el-dialog>
      <!-- 规格弹框结束 -->
    </el-dialog>

    <!-- 规格弹框开始 -->
    <!-- <el-dialog title="收货地址" :visible.sync="specification">
      <el-form :model="form">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="specification = false">取 消</el-button>
        <el-button type="primary" @click="specification = false"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
    <!-- 规格弹框结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      pagesize: 10,
      pagenum: 1,
      _tableData: [],
      total: 0,
      dialogFormVisible: false,
      form: {
        address: "",
        name: "",
        phone: "",
        category: "",
        description: "",
        image_path: "",
      },
      editIndex: -1,
      tableDatas: [],
      specification: false, //规格弹框
      addstandard: {
        standard: "",
        packing: 0,
        price: 20,
      },
    };
  },
  methods: {
    getshop() {
      this.$axios
        .get(
          "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined"
        )
        .then((res) => {
          this.tableData = res.data;
          this._tableData = JSON.stringify(res.data);
          this.getpagin();
          this.total = res.data.length;
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getpagin();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getpagin();
    },
    getpagin() {
      let data = JSON.parse(this._tableData);
      this.tableData = data.slice(
        (this.pagenum - 1) * this.pagesize,
        this.pagesize * this.pagenum
      );
    },
    del(i) {
      this.tableData.splice(i, 1);
    },
    edit(i) {
      console.log(i);
      this.editIndex = i;
      this.dialogFormVisible = true;
      this.form = this.tableData[i];
    },
    editOk() {
      this.tableData[this.editIndex] = this.form;
      this.dialogFormVisible = false;
    },
    standardadd() {
      this.specification = false;
      this.tableDatas.push(this.addstandard);
    },
    deltable(i) {
      this.tableDatas.splice(i, 1);
    },
  },
  created() {
    this.getshop();
  },
  mounted() {},
  components: {  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.btn-right {
  text-align: right;
}
.div {
  input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  button {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
.add {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
.el-dialog .el-form-item {
  height: 80px !important;
}
.el-form-item__content {
  // margin-top: 20px !important;
  height: 60px !important;
}
.con {
  margin-top: 20px;
}
.content {
  display: flex;
  height: 260px;
  background-color: #eef1f6;
}
.left,
.right {
  padding-left: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.el-form-item {
  height: 33px !important;
}
.del {
  background-color: #d00;
  color: #fff;
}
.btn {
  button {
    margin: 5px 10px;
    border: 0;
    outline: none;
  }
}
</style>
