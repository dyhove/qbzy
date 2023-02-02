<template>
  <div>
    <h2>这是demo01组件</h2>
    <button @click="add">点击向dome02组件发送消息</button>
  </div>
</template>

<script>
import Bus from "../utils/bus";

export default {
  methods: {
    // 点击按钮发送Bus消息
    add() {
      // 发送 myMsg 主题 的Bus消息
      Bus.$emit("myMsg", "你好啊，我是七七");
      // 打印一下日志
      console.log("dome01组件发送完消息：bus事件触发了");
    },
  },
};
</script>
