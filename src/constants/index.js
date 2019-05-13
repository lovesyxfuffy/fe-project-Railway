// theme color
const themeColor = '#0a7bc7'
const containerWidth = '65%'

// define class
class Constants {
    constructor(data) {
        this.data = data;
    }

    install(Vue) {
        // exposed $constants to Vue class
        Object.assign(Vue, {
            $constants: this.data
        });

        // exposed $constants to instance
        Object.assign(Vue.prototype, {
            $constants: this.data
        });
    }
}

const getConstants = (modules = {}) =>
    new Constants({
        ...modules,
        themeColor,
        containerWidth
    })
// export instance
export default getConstants
