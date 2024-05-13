import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import router from './router';

import "./assets/main.css";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.min";

import "vue3-toastify/dist/index.css";

import '@coreui/coreui/dist/css/coreui.min.css';

import vSelect from "vue-select"; //import vue-select

import "vue-select/dist/vue-select.css"; //import css vue-select

import "@/assets/css/custom-vue-select.css";

import { ErrorMessage, Field, Form } from 'vee-validate';

const app = createApp(App);

app.component("v-select", vSelect);
app.component('vee-form', Form);
app.component('vee-field', Field);
app.component('vee-error-message', ErrorMessage);

app.use(createPinia());

app.use(router);
app.mount("#app");
