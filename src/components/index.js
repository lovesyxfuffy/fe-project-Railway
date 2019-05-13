// define class
class Components {
    constructor(data) {
        this.data = data;
    }

    install(Vue) {
        this.data.forEach((item) => {
            Vue.component(item.name, item);
        });
    }
}

export default new Components([
])
