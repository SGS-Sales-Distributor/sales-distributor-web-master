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

// export excel pembelajaran kak david
import JsonExcel from "vue-json-excel3";

// pembelajaran firestore kak kasino
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);

// firestore
app.use(Notifications);

app.component("download excel", JsonExcel);
app.component("v-select", vSelect);
app.component("VueDatePicker", VueDatePicker);
// provide global properties
app.config.globalProperties.$axios = axios;

app.use(createPinia());
//app.use(router);
// app.use(router);
app.mount("#app");
