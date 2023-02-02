<template>
  <div>
    <h2>这是dome02组件</h2>
    <h3>这个地方展示dome01组件的命令</h3>
    <span>{{ msg }}</span>
  </div>
</template>
  
  <script>
// 引入bus.js文件
import Bus from "../utils/bus";

export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    Bus.$on("myMsg", (myMsg) => {
      console.log("dome02组件收到bus消息：", myMsg);
      this.msg = myMsg;
    });
  },
};
</script>
  