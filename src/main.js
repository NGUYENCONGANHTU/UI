import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store';
import Vue3Toasity from "vue3-toastify";

// css vue3-toastify
import "vue3-toastify/dist/index.css";

const app = createApp(App);
app.use(Vue3Toasity, {
    autoClose: 3000
});
app.use(store)
app.use(router);

app.mount("#app");
