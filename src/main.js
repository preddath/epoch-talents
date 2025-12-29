import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "@src/router/index.js";
import popup from "@src/directives/popup.js";

const app = createApp(App)

app.directive('popup', (el, binding) => popup(el, binding))
app.use(createPinia())
app.use(router)

app.mount('#app')


//Extend Object with a?.jsonClone() method
if (!Object.prototype.hasOwnProperty.call(Object.prototype, 'jsonClone')) {
    Object.defineProperty(Object.prototype, 'jsonClone', {
        enumerable: false,
        value: function () {
            return JSON.parse(JSON.stringify(this))
        },
    })
}