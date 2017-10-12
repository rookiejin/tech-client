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


http.form = function(path, data, options) {
    var str = [];
    for (var i in data) {
        if (typeof data[i] == Object) {
            data[i] = JSON.stringify(data[i]);
        }
        str.push(i + "=" + data[i]);
    }
    str = str.join("&")
    return this.post(path, str, options);
}

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return http
        }
    })
}