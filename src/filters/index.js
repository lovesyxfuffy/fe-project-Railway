// define class
class Filters {
    constructor(data) {
        this.data = data
    }

    install(Vue) {
        // exposed $filters to instance
        Object.assign(Vue.prototype, {
            $filters: this.data
        });

        // exposed filter to template
        Object.keys(this.data).forEach((sName) => {
            Vue.filter(sName, this.data[sName])
        });
    }
}

// export instance
export default new Filters({
});
