import Vue from "vue"
import Vuex from "vuex"

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './modules'
//安装插件
Vue.use(Vuex)

//创建对象
// const gouwuche ={
//     state:{},
//     mutations:{},
//     actions:{},
//     getters:{},
//     modules:{}
// }
const state = {
    /**存放全局变量的地方 */
        //   counter:1000,
          shanpins:[]
      
}
const store =new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules,
})

export default store