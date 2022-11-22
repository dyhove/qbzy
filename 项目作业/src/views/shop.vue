<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="name"> </el-table-column>
      <el-table-column label="店铺地址" prop="address"> </el-table-column>
      <el-table-column label="店铺介绍" prop="description"> </el-table-column>
      <el-table-column label="操作" prop="">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)">编辑</el-button>
          <el-button>添加食品</el-button>
          <el-button type="danger" @click="del">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" :label-width="formLabelWidth">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.image_path" :src="form.image_path" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-image
            style="width: 100px; height: 100px"
            :src="form.image_path"
          ></el-image>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editor"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      offset: 0,
      limit: 20,
      latitude: 40.10038,
      longitude: 116.36867,
      total: 3875,
      dialogFormVisible: false,
      form: {
        name: "",
        address: "",
        description: "",
        phone: "",
        category: "",
        image_path: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    edit(row) {
      console.log(row);
      this.dialogFormVisible = true;
      this.form = {
        ...row,
      };
      console.log(this.form);
    },
    editor() {
      this.$message({
        message: "编辑成功",
        type: "success",
      });
      this.dialogFormVisible = false;
    },
    del() {
      this.$message.error("您的权限不足");
    },
    handleAvatarSuccess(res, file) {
      this.form.image_path = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isJPG && isLt2M) {
        this.form.image_path = URL.createObjectURL(file);
        this.$message.success("上传成功");
      }
      return isJPG && isLt2M;
    },
    tabs() {
      this.$axios
        .get("http://elm.cangdu.org/shopping/restaurants?", {
          params: {
            offset: this.offset,
            limit: this.limit,
            latitude: this.latitude,
            longitude: this.longitude,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data;
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.limit = val;
      this.tabs();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.offset = val;
      this.tabs();
    },
  },
  created() {
    this.tabs();
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
