// import models
import axios from './axios';

// define class
class Models {
    constructor(data) {
        this.data = data;
    }

    install(Vue) {
        // exposed $http to Vue class
        Object.assign(Vue, {
            $http: axios
        });

        // exposed $model to Vue class
        Object.assign(Vue, {
            $models: this.data
        });

        // exposed $model to instance
        Object.assign(Vue.prototype, {
            $models: this.data
        });
    }
}




export const constantModelsObj = {}


// 可自选module
function requireModule(modules) {
    let apiModules = {};
    const requireContext = require.context('./api', false, /\.js$/);
    requireContext.keys().forEach(api => {
        let apiModule = api.replace(/\.\//gi, '').replace(/\.js/gi, '')
        let obj = {}
        obj[apiModule] = requireContext(api).default
        if (modules && modules.constructor === Array) {
            if (modules.includes(apiModule)) {
                Object.assign(apiModules, obj)
            }
        } else {
            Object.assign(apiModules, obj)
        }
    });
    return apiModules
}
const models = requireModule()
const getModels = (module = {}) =>
    new Models(Object.assign({}, module, models));

// export instance
export default getModels
