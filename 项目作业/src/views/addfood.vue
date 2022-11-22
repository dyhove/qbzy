<template>
  <div class="goods">
    <div class="top">
      <el-col :span="16">
        <el-card shadow="hover">
          <h3>选择食品种类</h3>
          <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="食品种类" prop="region">
              <el-select
                class="select"
                v-model="region"
                placeholder="请选择食品种类"
              >
                <el-option label="热销榜" value="rexiaobang"></el-option>
                <el-option label="折扣榜" value="zhekoubang"></el-option>
                <el-option label="好吃的" value="haochide"></el-option>
                <el-option label="招牌" value="zhaopai"></el-option>
                <el-option label="测试榜" value="ceshibang"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-card>
        <el-card shadow="hover">
          <h3>添加食品</h3>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="食品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="食品活动" prop="goods">
              <el-input v-model="ruleForm.goods"></el-input>
            </el-form-item>
            <el-form-item label="食品详情" prop="detailed">
              <el-input v-model="ruleForm.detailed"></el-input>
            </el-form-item>
            <el-form-item label="上传食品图片"> </el-form-item>
            <el-form-item label="食品特点">
              <el-select v-model="ruleForm.chara" placeholder="请选择食品种类">
                <el-option label="新品" value="xinpin"></el-option>
                <el-option label="招牌" value="zhaopai"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="食品规格">
              <el-radio-group v-model="ruleForm.norms" @input="norms">
                <el-radio label="单规格"></el-radio>
                <el-radio label="多规格"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="包装费" prop="goods">
              <el-input-number
                v-model="ruleForm.num"
                :min="1"
                label="描述文字"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="价格" prop="goods">
              <el-input-number
                v-model="ruleForm.price"
                :min="1"
                label="描述文字"
              ></el-input-number>
            </el-form-item>
            <div>
              <div class="btn">
                <el-button type="primary" @click="specification = true"
                  >添加规格</el-button
                >
              </div>
              <el-table :data="tableData1" style="width: 100%" border>
                <el-table-column prop="standard" label="规格">
                </el-table-column>
                <el-table-column prop="packing" label="包装费">
                </el-table-column>
                <el-table-column prop="price" label="价格"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type="danger"
                      size="mini"
                      @click="deltable(scope.$index)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-form-item>
              <el-button class="add" type="primary">确认添加食品</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: "",
      ruleForm: {
        name: "",
        goods: "",
        detailed: "",
        chara: "",
        norms: "",
        num: "",
        price: "",
      },
      rules: {
        name: [{ required: true, message: "请输入食品名称", trigger: "blur" }],
      },
      list: [],
      flag: 0,
    };
  },
  methods: {
    norms(val) {},
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.goods {
  // display: flex;
  justify-content: center;
}
.top {
  width: 70%;
  margin: 20px auto;
}
h3 {
  text-align: center;
}
.select {
  width: 100%;
}
.btn {
  text-align: center;
  margin-bottom: 10px;
}
.add {
  margin-top: 15px;
}
</style>
