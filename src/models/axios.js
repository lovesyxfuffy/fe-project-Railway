// 统一异常处理 每个请求的token验证等统一处理 base_url等
// import libs
// import Vue from 'vue'
import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'

// create instance axios实例
const instance = axios.create({
    // api的base_url
    baseURL: process.env.BASE_API,
    headers: {
        'Content-Type': 'application/json'
    },
    // axios 默认发送请求的时候不会带上cookie，需要设置withCredentials为true来解决。
    withCredentials: true
});
// interceptors是axios的拦截器，可以截取请求或者响应在被then或者catch处理之前
// request interceptor
instance.interceptors.request.use((config) => {
    // 可以处理一些请求统一加token等
    config.headers['Auth-Token'] = store.getters['user/userToken'] || '';
    config.headers['User-Name'] = store.getters['user/userName'] === '未知' ? '' : store.getters['user/userName'];
    return config
});

// reponse interceptor
instance.interceptors.response.use(
    response => {
        if (response.data.status !== 1) {
            Message({
                message: response.data.message,
                type: 'error',
                duration: 5 * 1000
            })
        }
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误(400)';
                    break;
                case 401:
                    error.message = '未授权，请重新登录(401)';
                    break;
                case 403:
                    error.message = '拒绝访问(403)';
                    break;
                case 404:
                    error.message = '请求出错(404)';
                    break;
                case 408:
                    error.message = '请求超时(408)';
                    break;
                case 500:
                    error.message = '服务器错误(500)';
                    break;
                case 501:
                    error.message = '服务未实现(501)';
                    break;
                case 502:
                    error.message = '请求后端接口失败';
                    break;
                case 503:
                    error.message = '服务不可用(503)';
                    break;
                case 504:
                    error.message = '网络超时(504)';
                    break;
                case 505:
                    error.message = 'HTTP版本不受支持(505)';
                    break
            }
        } else {
            error.message = '与服务器连接断开'
        }
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error)
    }
);

// config
export default instance
