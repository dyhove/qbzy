<template>
  <div id="app">
    <nav>
      <router-link to="/">父传子</router-link> |
      <router-link to="/about">v-model</router-link> |
      <router-link to="/local">本地存储</router-link> |
      <router-link to="/from">子传父</router-link> |
      <router-link to="/vuexs">vuex</router-link> |
      <router-link to="/refs">refs</router-link> |
      <router-link to="/attrs">attrs</router-link> |
      <router-link to="/provide">provide</router-link> |
      <router-link to="/dome1">dome1</router-link> |
      <router-link to="/dome2">dome2</router-link> |
      <router-link to="/slot">slot</router-link> |
      <router-link to="/childrenparent">childrenparent</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
