<template>
    <div id="container">
      <!-- Display the login form with username and password fields and a submit button -->
      <div class="body-container">
        <div class="login-title center">
          <img src="https://sinergiglobalservis.com/images/logo_sgs.png" />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="username"
            placeholder="Nama Pengguna"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            v-model="password"
            placeholder="Kata Sandi"
            @keyup.enter="submit"
          />
        </div>
        <div class="center">
          <button class="btn btn-primary" @click="submit">Masuk</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Input from '@/components/forms/FormInput.vue';
  import Button from '@/components/forms/FormButton.vue';
  import toast from "@/assets/js/toast"; // Import the toast library for displaying messages
  
  export default {
    components: {
        Input,
        Button,
    },
    setup() {
    },
    data() {
      return {
        title: "Login Page",
        username: "jenyta",
        password: "jenyta",
        showPassword: false,
      };
    },
    methods: {
      // Validate the form fields and submit the login request
      submit() {
        if (!this.validation()) {
          return;
        }
  
        // Store the user's data in local storage and redirect to the dashboard page
        localStorage.setItem(
          "auth",
          JSON.stringify({
            id: 1,
            email: "admninstrator@gmail.com",
            full_name: "ADMINISTRATOR",
            token: "HSADIH819yhjsahd89h1j3hjkkA*&jkSLA*!HJ!KSA1qdjkasjdk",
            customer_code: "MC001",
            mst_roles_id: 2,
            pic: "",
          })
        );
  
        sessionStorage.setItem("page", "DashboardView");
        this.goto("DashboardView");
      },
      // Validate the form fields
      validation() {
        if (!this.username) {
          toast.warning("Nama pengguna tidak boleh kosong");
          return false;
        }
  
        if (!this.password) {
          toast.warning("Kata sandi tidak boleh kosong");
          return false;
        }
  
        return true;
      },
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
</style>