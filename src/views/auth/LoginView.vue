<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div id="liveAlert"></div>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center">
          <img src="/public/1630597076257.jpeg" alt="PT. Sinergi Global Service Logo" class="img-fluid">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <Form 
          novalidate 
          method="post" 
          @submit="login" 
          :validation-schema="formValidate"
          >
            <!-- Email input -->
            <div class="mb-3">
              <label class="form-label fw-semibold" for="email-input">Email address</label>
              <Field 
              v-model="formData.email" 
              :type="emailFieldType" 
              name="email" 
              id="email-input" 
              class="form-control"
              placeholder="Masukkan email yang terdaftar." />
            </div>

            <!-- Password input -->
            <div class="mb-3">
              <label class="form-label fw-semibold" for="password-input">Password</label>
              <div class="input-group">
                <Field 
                v-model="formData.password" 
                :type="passwordFieldType" 
                name="password" 
                id="password-input"
                class="form-control" placeholder="Masukkan password anda." />
                <button 
                class="btn btn-outline-secondary" 
                type="button" 
                @click="togglePasswordVisibility"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                </button>
              </div>
            </div>

            <div class="d-flex justify-content-end align-items-end">
              <a href="#!" class="text-body">Lupa Password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;" id="login-submit-btn">
                Login
              </button>
            </div>
          </Form>
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
import { Form, Field } from "vee-validate";
import { API_URL } from "../../services/globalVariables";
import { redirectToHomePage } from "../../services/redirectHandlers";

const emailFieldType = ref('email');
const passwordFieldType = ref('password');

const formData = ref({
  email: null,
  password: null,
});

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

function togglePasswordVisibility() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
}

async function login() {
  try {
    const response = await axios.post(`${API_URL.value}/api/v1/auth/login`, {
      email: formData.value.email,
      password: formData.value.password,
    });

    const tokens = JSON.stringify(response.data.resource.tokens);

    localStorage.setItem("tokens", tokens);

    console.log("Successfully logged in: ", response);

    redirectToHomePage();
  } catch (error) {
    console.error('Failed to logged in: ', error);
  }
}
</script>

<style scoped>
.divider:after,
.divider:before {
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