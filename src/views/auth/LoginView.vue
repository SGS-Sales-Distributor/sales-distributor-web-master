<template>
<section class="vh-100">
    <div class="container-fluid h-custom">
        <div id="liveAlert"></div>
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center">
                <img src="https://sinergiglobalservis.com/images/logo_sgs.png" alt="PT. Sinergi Global Service Logo" class="img-fluid">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Form novalidate method="post" @submit="login" :validation-schema="formValidate">
                    <!-- Email input -->
                    <div class="mb-3">
                        <label class="form-label fw-semibold" for="email-input">Email</label>
                        <input v-model="formData.email" type="email" name="email" id="email-input" class="form-control" placeholder="Masukkan email yang terdaftar." />
                        <span>{{ errorMessage }}</span>
                    </div>

                    <!-- Password input -->
                    <div class="mb-3">
                        <label class="form-label fw-semibold" for="password-input">Password</label>
                        <div class="input-group">
                            <input v-model="formData.password" :type="passwordFieldType" name="password" id="password-input" class="form-control" placeholder="Masukkan password yang terdaftar." />
                            <button class="btn btn-outline-secondary" type="button" @click="togglePasswordVisibility">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                </svg>
                            </button>
                        </div>
                        <span>{{ errorMessage }}</span>
                        <!-- <ErrorMessage name="password" /> -->
                    </div>

                    <div class="d-flex justify-content-end align-items-end">
                        <a href="#!" class="text-body">Lupa Password?</a>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" @click="login()" class="btn btn-primary btn-lg" style="width: 100%;" id="login-submit-btn">
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

<script>
import axios from "axios";
import Input from '@/components/forms/FormInput.vue';
import Button from '@/components/forms/FormButton.vue';
import toast from "@/assets/js/toast"; // Import the toast library for displaying messages
import * as Yup from "yup";
import {
    ErrorMessage,
    Field,
    Form
} from 'vee-validate';
// import router from '../../router';

export default {
    components: {
        Form,
        Input,
        Button,
    },
    setup() {},
    data() {
        const passwordFieldType = 'password';

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
        return {
            passwordFieldType,
            formValidate,
            errorMessage: null,
            title: "Login Page",
            username: "",
            password: "",
            showPassword: false,

            formData: {
                email: null,
                password: null,
            }
        };
    },
    methods: {
        redirectToHomePage() {
            this.$root.goto('DashboardView');
        },
        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        },

        async login() {
            try {
                const response = await axios.post(mythis.$root.API_URL + `v2/auth/login`, this.formData);

                const tokens = JSON.stringify(response.data.resource.tokens);

                localStorage.setItem("tokens", tokens);

                console.log("Successfully logged in: ", response);

                localStorage.setItem("auth", JSON.stringify({
                    id: 1,
                    email: this.formData.email,
                    full_name: '',
                    token: tokens,
                    customer_code: 0,
                    mst_roles_id: 0,
                    pic: 0
                }))

                location.reload();

                sessionStorage.setItem('page', 'DashboardView')

                that.$root.goto('DashboardView');
            } catch (error) {
                const errorMessage = error.response.data.message;
                toast.error(errorMessage, {
                    theme: "colored"
                });
                console.error('Failed to logged in: ', error);
            }
        },

        // Validate the form fields and submit the login request
        submit() {
            if (!this.validation()) {
                return;
            }

            // Store the user's data in local storage and redirect to the dashboard page
            // localStorage.setItem(
            //     "auth",
            //     JSON.stringify({
            //         id: 1,
            //         email: "admninstrator@gmail.com",
            //         full_name: "ADMINISTRATOR",
            //         token: "HSADIH819yhjsahd89h1j3hjkkA*&jkSLA*!HJ!KSA1qdjkasjdk",
            //         customer_code: "MC001",
            //         mst_roles_id: 2,
            //         pic: "",
            //     })
            // );

            sessionStorage.setItem("page", "DashboardView");
            this.goto("DashboardView");
        },
        // // Validate the form fields
        // validation() {
        //     if (!this.username) {
        //         toast.warning("Nama pengguna tidak boleh kosong");
        //         return false;
        //     }

        //     if (!this.password) {
        //         toast.warning("Kata sandi tidak boleh kosong");
        //         return false;
        //     }

        //     return true;
        // },
        // Navigate to a different page
        goto(comp, p) {
            console.log(comp);
            this.$root.goto(comp);
        },
    },
};
</script>

<style scoped>
#container {
    display: flex;
    place-items: center;
    height: 100vh;
}

#container>* {
    max-width: 270px;
    margin: 0 auto;
    padding: 2em;
    background: var(--vt-color-step-950);
    box-shadow: 0 1em 4em var(--vt-color-step-100);
    border-radius: 2em;
}

.login-title {
    font-size: 24px;
}

.login-title img {
    width: 100px;
    height: auto;
}

.center {
    margin: 10px 0;
}

a {
    text-decoration: none;
}

.show-password {
    text-decoration: underline;
    display: block;
    text-align: right;
    font-size: 11px;
    margin: 2px 5px;
    background: none;
    color: black;
}

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

span {
    color: red;
}
</style>
