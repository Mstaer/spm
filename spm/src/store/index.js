import Vue from "vue"
import Vuex from "vuex"

//安装插件
Vue.use(Vuex)

//创建对象
const gouwuche ={
    state:{},
    mutations:{},
    actions:{},
    getters:{},
    modules:{}
}
const store =new Vuex.Store({
  state:{ /**存放全局变量的地方 */
      counter:1000
  },
  mutations:{
    //修改全局变量的方法
    add(){
        this.state.counter++
    },
    sub(){
        this.state.counter--
    }
  },
  actions:{
      /**异步属性方法  用来异步计算全局变量的方法*/

      /**要传入上下文这个参数 context */
      addjiage1(context){

        /**异步操作1秒后才计算 */
          setTimeout(()=>{
              context.commit("addjiage") /**把下标gettrts方法添加进去 */
          },1000)
      }
  },
  getters:{
      /**计算属性方法  用来计算全局变量的方法*/
      addjiage(state){ /**传入  state 存放全局变量 这个对象  */
          return  state.counter * state.counter
      }
  },
  modules:{
      /**定义模块 就是有很多计算方法或者多个全局变量的话，可以加进来这里 */
      gouwuche,
      gouwuche2:{
        state:{},
        mutations:{},
        actions:{},
        getters:{},
        modules:{}
    }
  }
})

export default store