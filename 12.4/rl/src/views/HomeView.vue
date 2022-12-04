<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true"
      >添加ToDo</el-button
    >
    <el-calendar>
      <template slot="dateCell" slot-scope="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(2).join("-") }}
        </p>
        <ul>
          <li
            @click="xg(item, i)"
            :class="item.resource == '已完成' ? 'ywc' : 'ysb'"
            v-for="(item, i) in $store.state.list"
            :key="i"
            v-show="item.time == data.day"
          >
            {{ item.name }}
          </li>
        </ul>
      </template>
    </el-calendar>
    <!-- 添加弹框 -->
    <el-dialog title="新增事件" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.time"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改弹框 -->
    <el-dialog title="修改事件" :visible.sync="dialogFormVisibles">
      <el-form :model="forms">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="forms.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="forms.time"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="forms.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibles = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 弹框显示
      dialogFormVisible: false,
      dialogFormVisibles: false,
      //添加内容表单
      form: {},
      //修改表单内容
      forms: {},
      i: -1,
      formLabelWidth: "120px",
    };
  },
  methods: {
    //添加事件
    add() {
      // 处理时间格式
      console.log(this.form);
      let times = this.form.time
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      console.log(times);
      // 判断是否需要补0
      if (times.length < 10) {
        let newtime = this.insertStr(times, 8, "0");
        this.form.time = newtime;
      } else {
        this.form.time = times;
      }
      console.log(this.form);

      this.$store.commit("add", this.form);
      this.dialogFormVisible = false;
      this.form = {};
    },
    //时间个数补0
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start);
    },
    //回填
    xg(item, i) {
      this.dialogFormVisibles = true;
      this.forms = {
        ...item,
      };
      this.i = i;
    },
    // 确定修改
    edit() {
      let times = this.forms.time
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      if (times.length < 10) {
        let newtime = this.insertStr(times, 8, "0");
        this.forms.time = newtime;
      } else {
        this.forms.time = times;
      }
      this.$store.commit("edit", { ...this.forms, i: this.i });

      this.dialogFormVisibles = false;
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss'>
.is-selected {
  color: #1989fa;
}

ul {
  width: 100%;
  height: 60px;

  overflow: auto;
  font-size: 14px;

  li {
    width: 60%;
    line-height: 20px;
    margin: 5px;
    color: #fff;
  }
}

.ywc {
  padding: 5px;
  background: #409eff;

  border-radius: 4px;
}

.ysb {
  padding: 5px;
  background: red;
  border-radius: 4px;
}
</style>
