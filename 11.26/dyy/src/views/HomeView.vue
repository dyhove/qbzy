<template>
  <div>
    <!-- //模板字符串渲染 -->
    <h1>{{msg}}</h1>
    <div>
      <span v-bind:title="message">
        鼠标悬停提示
      </span>
    </div>
    <ul>
      <li v-for="(item,index) in week" :key="index">
        {{item.name}}
      </li>
      <button @click="xg">666</button>
    </ul>
    <input type="text" v-model="value" @input="dy">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"我想睡觉",
      message: '页面加载于 ' + new Date().toLocaleString(),
      week:[
        {name:"周一",id:1},
        {name:"周二",id:2},
        {name:"周三",id:3},
        {name:"周四",id:4},
        {name:"周五",id:5},
      ],
      value:""
    };
  },
  methods: {
    xg() {
      this.week[0].name = "周六";
    },
    dy(e) {
      console.log(e.target.value);
      console.log(this.value);
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
