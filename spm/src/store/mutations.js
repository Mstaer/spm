 export default  {
    //修改全局变量的方法
    addconunter(state,payload){
        payload.count++

    },
    addnewshanpin(state,payload){
        payload.chaeck = true
        state.shanpins.push(payload)
    },
    // sub(){
    //     this.state.counter--
    // }
    
  }