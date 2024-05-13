<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div id="liveAlert"></div>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center">
        <img 
        src="/public/1630597076257.jpeg"
        alt="PT. Sinergi Global Service Logo"
        class="img-fluid">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <vee-form
        novalidate
        method="post"
        @submit="login"
        :validation-schema="formValidate">
          <!-- Email input -->
          <div class="mb-3">
            <label class="form-label fw-semibold" for="email-input">Email address</label>
            <vee-field 
            v-model="formData.email"
            type="email" 
            name="email"
            id="email-input" 
            class="form-control"
            placeholder="Masukkan email yang terdaftar." />
          </div>

          <!-- Password input -->
          <div class="mb-3">
            <label class="form-label fw-semibold" for="password-input">Password</label>
            <vee-field 
            v-model="formData.password"
            type="password" 
            name="password"
            id="password-input" 
            class="form-control"
            placeholder="Masukkan password anda." />
          </div>

          <div class="d-flex justify-content-end align-items-end">
            <a href="#!" class="text-body">Lupa Password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button 
            type="submit" 
            class="btn btn-primary btn-lg"
            style="width: 100%;"
            id="login-submit-btn">
            Login
            </button>
          </div>
        </vee-form>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-center py-4 px-4 px-xl-5">
    <!-- Copyright -->
    <div class="text-black mb-3 mb-md-0">
      © PT. Sinergi Global Service 2024. All rights reserved.
    </div>
    <!-- Copyright -->
  </div>
</section>    
</template>
  
<script setup>
import axios from "axios";
import * as Yup from 'yup';
import { ref } from "vue";
import router from "../../router";

const API_URL = `${import.meta.env.VITE_API_HOST}:${parseInt(import.meta.env.VITE_API_PORT)}`;

const formData = ref({
  email: null,
  password: null,
});
const showPassword = ref(false);

const formValidate = Yup.object().shape({
  email: Yup.string()
  .required('Email diperlukan, tidak dapat kosong!')
  .max(255, 'Email tidak boleh lebih dari 255 karakter')
  .email('Email tidak valid, gunakan format email yang resmi!'),
  password: Yup.string()
  .required('Password diperlukan, tidak dapat kosong!')
  .max(100, 'Password tidak boleh lebih dari 100 karakter')
  .min(8, 'Password harus minimal memiliki 8 karakter')
  // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});

function redirectToHomePage() {
  setTimeout(() => {
    router.push({
      path: '/dashboard'
    })
  }, 1000);
}

async function login() {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
      email: formData.value.email,
      password: formData.value.password,
    });
    
    const user = JSON.stringify(response.data.resource);

    localStorage.setItem("user", user);

    console.log("Successfully logged in: ", response);

    triggerAlert(response.data.message, 'success');

    redirectToHomePage();
  } catch (error) {
    console.error('Failed to logged in: ', error);

    triggerAlert(error.message, 'danger');
  }
}

function triggerAlert(message, type) {
    const customAlert = document.getElementById("liveAlert");

    const appendAlert = (message, type) => {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `<div>${message}</div>`,
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        customAlert.append(wrapper);
    }

    const alertTrigger = document.getElementById('login-submit-btn')
    
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert(message, type)
      });
    }
}
</script>

<style scoped>
.divider:after, .divider:before {
  content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }

  .h-custom {
    height: calc(100% - 73px);
  }

  @media (max-width: 450px) {
    .h-custom {
    height: 100%;
  }
}
</style>