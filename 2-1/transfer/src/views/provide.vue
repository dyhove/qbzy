<template>
  <div>
    <button @click="changeMsg">祖组件触发</button>
    <h1>祖组件</h1>
    <providechild></providechild>
  </div>
</template>
  
  <script>
import providechild from "../components/providechild.vue";
export default {
  data() {
    return {
      obj: {
        name: "原神",
      },
      developer: "大伟哥",
      year: 2018,
      update: "2029年06月",
    };
  },
  provide() {
    return {
      obj: this.obj, // 方式1.传入一个可监听的对象
      developerFn: () => this.developer, // 方式2.通过 computed 来计算注入的值
      year: this.year, // 方式3.直接传值
      app: this, // 4. 提供祖先组件的实例 缺点：实例上挂载很多没有必要的东西 比如：props，methods。
    };
  },
  components: {
    providechild,
  },
  methods: {
    changeMsg() {
      this.obj.name = "原神";
      this.developer = "大伟丘";
      this.year = 2014;
      this.update = "2088年6月27日";
    },
  },
};
</script>
  