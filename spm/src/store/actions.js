export default {
    /**异步属性方法  用来异步计算全局变量的方法*/
    add(context,payload){
      // let olid =null
      // for(let i of state.shanpins){
      //     if (i.id===payload.id){
      //         olid = i
      //     }
      // }
      let product = context.state.shanpins.find(i => i.id === payload.id)
      if (product){
          context.commit('addconunter',product)
      }else{
         
          payload.count = 1
          payload.chaeck = true
          // context.state.shanpins.push(payload)
          context.commit('addnewshanpin',payload)
      }

     
  },
  addjiage(context){
    console.log("1111");
    // var jiage1 = 0
    // for (let i = 0; i <context.state.shanpins.lenght; i++) {
    //   console.log(context.state.shanpins.lenght)
    //   console.log(i.jiage);
    //   if (context.state.shanpins.lenght == 0){
    //     return 0
    //   }
    //  jiage1 +=  i.jiage * i.count
      
    // }
    // console.log(jiage1);
    // return jiage1
    return context.state.state.shanpins.filter(item=>{
      return item.chaeck
    }).reduce((preValue,item)=>{
      return item.jiage * item.count
    },0)
  }

    /**要传入上下文这个参数 context */
  //   addjiage1(context){

  //     /**异步操作1秒后才计算 */
  //       setTimeout(()=>{
  //           context.commit("addjiage") /**把下标gettrts方法添加进去 */
  //       },1000)
  //   }
}