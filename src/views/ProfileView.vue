<template>
<Pages>
    <div class="container-fluid">
        <div class="row row-cols-1">
            <!-- alert begin -->
            <div id="liveAlert"></div>
            <!-- alert end -->
            <div class="col-lg-12 mb-4 mb-sm-5">
                <div class="card border-0">
                    <div class="card-body">
                        <vee-form
                        novalidate
                        @submit="updateProfileData"
                        :validation-schema="formValidate">
                            <div class="d-flex flex-row align-items-center">
                                <div class="flex-grow-1">
                                    <div class="form-group py-1-9 px-1-9 px-sm-6 rounded">
                                        <label for="fullname" class="form-label">Full Name</label>
                                        <input 
                                        v-model="formData.fullname" 
                                        type="text" 
                                        class="form-control" 
                                        id="fullname"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="form-label">Email</label>
                                        <input 
                                        v-model="formData.email" 
                                        type="email" 
                                        class="form-control" 
                                        id="email"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="nik" class="form-label">NIK (Nomor Induk Kependudukan)</label>
                                        <input 
                                        v-model="formData.nik" 
                                        type="text" 
                                        class="form-control" 
                                        id="nik"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input 
                                        v-model="formData.phone" 
                                        type="tel" 
                                        class="form-control" 
                                        id="phone"
                                        />
                                    </div>
                                </div>
                                <div class="">
                                    <img src="/public/uknown-profile.jpg" alt="Profile Image">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" id="change-profile-submit-btn">Ubah Profile</button>
                        </vee-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Pages>
</template>

<script setup>
import * as Yup from 'yup';
import { onMounted, ref, shallowRef } from 'vue';
import Pages from '../components/template/Pages.vue';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_HOST}:${parseInt(import.meta.env.VITE_API_PORT)}`;

const user = shallowRef(null);

const formValidate = Yup.object().shape({
    nik: Yup.string()
        .max(20, 'NIK tidak boleh lebih dari 20 karakter.')
        .nullable(),
    fullname: Yup.string()
        .max(200, 'Nama lengkap tidak boleh lebih dari 200 karaketer.')
        .nullable(),
    phone: Yup.string()
        .max(20, 'Nomor handphone tidak boleh lebih dari 20 karakter.')
        .nullable(),
    email: Yup.string()
        .max(255, 'Email tidak boleh lebih dari 255 karakter')
        .email('Email tidak valid, gunakan format email yang resmi!')
        .nullable(),
    name: Yup.string()
        .max(50, 'Username tidak boleh lebih dari 50 karaketer')
        .nullable(),
    password: Yup.string()
        .required('Password diperlukan, tidak dapat kosong!')
        .max(100, 'Password tidak boleh lebih dari 100 karakter')
        .min(8, 'Password harus minimal memiliki 8 karakter')
    // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});

const formData = ref({
    nik: null,
    fullname: null,
    email: null,
    phone: null,
});

function fetchUserData() {
    const userData = localStorage.getItem("user");

    if (userData) {
        user.value = JSON.parse(userData);

        formData.value.email = user.value.email;
        formData.value.fullname = user.value.fullname;
        formData.value.nik = user.value.nik;
        formData.value.phone = user.value.phone;
    } else {
        redirectToLoginPage();
    }
}

async function updateProfileData(userNumber) {
    try {
        const response = await axios.patch(`${API_URL}/api/v1/salesmen/${userNumber}/profiles`, {
            nik: formData.value.nik,
            fullname: formData.value.fullname,
            email: formData.value.email,
            phone: formData.value.phone,
        });

        console.log("Successfully update profile: ", response);

        triggerAlert(response.data.message, 'success');
    } catch (error) {
        console.error("Failed to update profile: ", error);
        
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

    const alertTrigger = document.getElementById('change-profile-submit-btn')
    
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert(message, type)
        });
    }
}

function redirectToLoginPage() {
  setTimeout(() => {
    router.push({ path: '/login' });
  }, 1000);
}


onMounted(() => {
    fetchUserData();
})

</script>

<style scoped>

</style>
