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

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";


import vSelect from "vue-select"; //import vue-select
import "vue-select/dist/vue-select.css"; //import css vue-select
import "@/assets/css/custom-vue-select.css";

// import router from './router';
import axios from "axios";

const app = createApp(App);
app.component("v-select", vSelect);
app.component("VueDatePicker", VueDatePicker);
// provide global properties
app.config.globalProperties.$axios = axios;

app.use(createPinia());
//app.use(router);
// app.use(router);
app.mount("#app");
