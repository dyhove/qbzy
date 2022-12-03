<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
        <!-- <li>消息编号：{{$route.params.id}}</li> -->
        <!-- <li>消息标题：{{$route.params.title}}</li> -->
    </ul>
    <ul>
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
};
</script>
