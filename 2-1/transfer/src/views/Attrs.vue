<template>
  <section>
    <parent
      name="grandParent"
      sex="男"
      age="88"
      hobby="code"
      @sayKnow="sayKnow"
    >
    </parent>
  </section>
</template>

<script>
import Parent from "../components/Parent.vue";
export default {
  components: {
    Parent,
  },
  methods: {
    sayKnow(val) {
      console.log(val);
    },
  },
  mounted() {},
};
</script>
