// import libs
import Vue from 'vue'
import Element from 'element-ui'
import 'babel-polyfill'
// import style
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/common.css'
import './assets/icon/iconfont.css'
// import root node
import App from './App'
// import common plugins
import components from './components'
import getConstants from './constants'
import utils from './utils';
import filters from './filters';
// import modules
import getRouter from './router';
import store from './store'
import getModels from './models'

// import Icon from 'vue-svg-icon/Icon.vue'

// import other components
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

// install element-ui
Vue.use(Element);

// install components
Vue.use(components);

// install constants
Vue.use(
    getConstants()
);

Vue.use(
    getModels()
)

Vue.use(utils);

// install filters
Vue.use(filters);

// Vue.component('icon', Icon);

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: getRouter(),
    store,
    components: {App},
    template: '<App/>'
})

