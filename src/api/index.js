import Vue from "vue"
import axios from "axios"

const api = "http://127.0.0.1:8989/api/v1/";

export const http = axios.create({
    baseURL: api,
})

http.defaults.headers.post = {
    'X-Requested-With': 'XMLHttpRequest',
};

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


http.interceptors.response.use((r) => { return r }, (e) => {
    console.log(e)
})

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return http
        }
    })
}