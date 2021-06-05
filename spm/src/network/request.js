import axios from "axios"
//导入贾科斯框架

// 贾科斯封装网络请求
export function request(config){
   const instance = axios.create({
    baseURL:"http://localhost:8090",
    timeout:5000
   })
   
   //axios请求拦截器
   instance.interceptors.request.use(config=>{  //请求拦截
    //    console.log(config);
        // 比如config中的一些信息不符合服务器的要求。可以再这拦截下来更改
        // 比如每次发送网络请求时，在用户节目显示个请求图标
        // 比如某些网络请求（登录时）需要携带用户一下特殊信息
       return config //返回config操作
   },err=>{
       console.log(err);
       return err
   })

   // axios响应拦截器
   instance.interceptors.response.use(res=>{
    //    console.log(res);
       return res.data  //把数据返回 
   },err=>{
       console.log(err);
       return err
   })

   return instance(config)

}

// export function request(config){
//     return new Promise((resolve,reject)=>{
//         1创建axios的实例
//         const instance = axios.create({
//             baseURL:"http://222.207.31.33:8000",
//             timeout:5000
//         })
//         instance(config)
//         .then(res=>{
//             resolve(res)
//         })
//         .catch(err=>{
//             reject(err)
//         })
//     })

// }

// export function request(config,success,failure){
//      1创建axios的实例
//     const url1 = axios.create({
//         baseURL:"http://222.207.31.33:8000",
//         timeout:5000
//     })
//        url1(config)
//        .then(res=>{
//            console.log(res);
//            success(res)
//        })
//        .catch(err=>{
//            console.log(err);
//            failure(err)
//        })
    

// }

/**常用贾科斯操作*/
// axios.defaults.baseURL="http://123.207.31.31:8000" ;/**设置全局的url前缀。后面再请求就不用重复写这个前缀 */
// axios.defaults.timeout=5000; /**设置全局请求超时超时时间 */
// axios({
//   url:"/home/mutidata",
//   method:"get",
//   params:{ /**针对 get 请求的参数拼接  如果url 后面不需要拼接参数可以不写 */
//     type:"pop",
//     page:1
//   }
// }).then((data)=>{
//    console.log(data);
// })

// axios.request()
// axios.get()
// axios.delete()
// axios.head()
// axios.post()
// axios.put()
// axios.patch()

// axios.all([ /**并发请求。同时请求两个url */
//   axios.get(),
//   axios.post()
// ]).then((data)=>{
//     console.log(data);
//     })


    /**axios 实例 */

    // const urlshili = axios.create({
    //   baseURL:"http://222.207.31.33:8000",
    //   timeout:5000
    // })

    // urlshili({
    //   url:"/fenlei"
    // }).then((data)=>{
    //   console.log(data);
    // })