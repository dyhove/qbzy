<template>
  <div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="店铺简介">
          <el-input v-model="form.abstract"></el-input>
        </el-form-item>
        <el-form-item label="店铺标语">
          <el-input v-model="form.slogan"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类">
          <el-select v-model="form.region" placeholder="店铺分类">
            <el-option label="选择一" value="shanghai"></el-option>
            <el-option label="选择二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="店铺特点">
          <span>
            品牌保证
            <el-switch v-model="form.delivery"></el-switch>
          </span>
          <span>
            蜂鸟专送
            <el-switch v-model="form.delivery"></el-switch>
          </span>
          <span>
            新开店铺
            <el-switch v-model="form.delivery"></el-switch>
          </span>
          <span>
            外卖保
            <el-switch v-model="form.delivery"></el-switch>
          </span>
          <span>
            准时达
            <el-switch v-model="form.delivery"></el-switch>
          </span>
          <span>
            开发票
            <el-switch v-model="form.delivery"></el-switch>
          </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        <el-form-item label="配送费">
          <div class="div">
            <input type="text" v-model="form.packing" /><button
              @click="form.packing == 0 ? 0 : form.packing--"
            >
              -</button
            ><button @click="form.packing++">+</button>
          </div>
        </el-form-item>
        <el-form-item label="起送价">
          <div class="div">
            <input type="text" v-model="form.price" /><button
              @click="form.price == 0 ? 0 : form.price--"
            >
              -</button
            ><button @click="form.price++">+</button>
          </div>
        </el-form-item>
        <el-form-item label="营业时间">
          <el-time-select
            placeholder="起始时间"
            v-model="form.startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
          >
          </el-time-select>
          <el-time-select
            placeholder="结束时间"
            v-model="form.endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
          >
          </el-time-select>
        </el-form-item>
        <el-form-item label="上传店铺头像">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传营业执照">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传餐饮服务许可证">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="优惠活动">
          <el-select v-model="form.value" placeholder="优惠活动"> </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="活动标题" width="180">
        </el-table-column>
        <el-table-column prop="name" label="活动名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="活动详情"> </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
      </el-table>
    </div>
    <div class="add-btn">
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: "", //店铺名称
        address: "", //详细地址
        phone: "", //联系电话
        abstract: "", //店铺简介
        slogan: "", //店铺标语
        region: "", //店铺分类
        delivery: true, //特点
        packing: 5, //配送费
        price: 20, //起价送
        startTime: "", //起始时间
        endTime: "", //结束时间
        value: "满减优惠",
      },
      tableData: [],
      rules: {
        name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入店铺地址", trigger: "blur" },
        ],
        phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(form) {
      console.log(this.$refs);
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$message({
            message: "添加成功",
            type: "success",
          });
        } else {
          console.log("添加失败");
          return false;
        }
      });
    },
  },
  created() {},
  mounted() {},
  components: {  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.form {
  width: 60%;
  margin: 40px auto;
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
  }
}
.table {
  width: 70%;
  margin: 20px auto;
}
.add-btn {
  text-align: center;
  line-height: 40px;
}
</style>
