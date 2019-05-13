# jdstack-auto-web-fe

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 文件夹说明
> src
>
>> components : 组件.vue
>
>> pages : 页面.vue
>
>> models : api管理
>
>> constants : 常量定义
>
>> assets : 静态资源, font images css
>
>> router : 路由管理
>
>> store : 状态管理，vuex
>
>> utils : 工具函数


## 约定
* `pages` 和 `models` 里的api，一一对应。
* store：`vuex` 的使用要节制，像一些数据是不会和其他组件共享的，就不需要放在store里面。但是像用户信息这样的全局设置，就需要用vuex统一管理。
* 不建议使用 `cnpm install` ，避免bug；建议：`npm install --registry=https://registry.npm.taobao.org`
