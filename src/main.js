import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from './router';

import "./assets/main.css";
import "vue3-toastify/dist/index.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min";
import '@coreui/coreui/dist/css/coreui.min.css';



import axios from "axios";

const app = createApp(App);

// provide global properties
app.config.globalProperties.$axios = axios;

app.use(createPinia());

// app.use(router);
app.mount("#app");
