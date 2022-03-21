import TV from "@/components/trandingView.vue"

const compon = [TV]

const install = function (Vue) {
    compon.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
    TV,
}