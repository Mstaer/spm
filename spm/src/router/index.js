import Vue from "vue"
import VueRouter from 'vue-router';

//懒加载
const shouye = ()=> import("../views/shouye/shouye.vue")
const fenlei = ()=> import("../views/fenlei/fenlei.vue")
const gouwuche = ()=> import("../views/gouwuche/gouwuche.vue")
const wode = ()=> import("../views/wode/wode.vue")

// 安装插件
Vue.use(VueRouter) 

//创建路由对象
const routes = [
    {
        path:"",
        redirect:"/shouye"
    },
    {
        path:"/shouye",
        component: shouye
    },
    {
        path:"/gouwuche",
        component: gouwuche
    },
    {
        path:"/fenlei",
        component: fenlei
    },
    {
        path:"/wode",
        component: wode
    },
]
const router= new VueRouter({
    routes,
    mode:"history"
})

//导出路由
export default router

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}