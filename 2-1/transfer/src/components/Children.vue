<template>
  <section>
    <p>孙组件收到</p>
    <p>父的名字：{{ name }}</p>
    <p>父的性别：{{ sex }}</p>
    <p>父的年龄：{{ age }}</p>
    <p>父的爱好：{{ hobby }}</p>
    <button @click="sayKnow">我知道啦</button>
  </section>
</template>
  
  <script>
export default {
  // 由于父组件已经接收了name属性，所以name不会传到子组件了
  props: ["sex", "age", "hobby", "name"],
  methods: {
    sayKnow() {
      this.$emit("sayKnow", "我知道啦");
    },
  },
};
</script>
  