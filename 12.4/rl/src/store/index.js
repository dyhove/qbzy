import Vue from 'vue'
import Vuex from 'vuex'
import per from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [per()],
  state: {
    //存放添加的数据
    list: []
  },
  getters: {},
  mutations: {
    //添加的事件
    add(state, obj) {
      state.list.push({
        ...obj
      })
    },
    //编辑修改
    edit(state, obj) {
      state.list[obj.i].resource = obj.resource
      state.list[obj.i].name = obj.name
      state.list[obj.i].time = obj.time
    },
    del(state, i) {
      state.list.splice(i, 1)
    }
  },
  actions: {},
  modules: {}
})