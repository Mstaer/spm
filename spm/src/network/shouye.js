
import { request } from "./request"

export function getshouyedata(){
    return request({
        url:"/shouye"
    })
}

export function geishouyedatas(type,page){
    return request({
        url:"/shouye",
        params:{
            type,
            page
        }
    })
}