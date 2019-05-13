// import

// define class
class Utils {
    constructor(data) {
        this.data = data
    }

    install(Vue) {
        // exposed $utils to Vue class
        Object.assign(Vue, {
            $utils: this.data
        });
        // exposed $utils to instance
        Object.assign(Vue.prototype, {
            $utils: this.data
        });
    }
}

// export instance
export default new Utils({
});
