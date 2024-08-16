<template>
  <Pages title="Beranda">
    <!-- Display a welcome message and recent activity and notifications -->
    <div class="col-md-12">
      <h2>Selamat datang Kak, {{ user.fullname }} !</h2>
      <p>
        Anda telah login sebagai {{ user.role }}. Silakan gunakan menu di samping
        untuk navigasi.
      </p>
      <hr />


      <!-- <h3>Aktivitas Terakhir</h3>
        <ul>
          <li>
            <strong>1 April 2024:</strong> Anda telah menambahkan data baru.
          </li>
          <li>
            <strong>1 April 2024:</strong> Anda telah mengubah data kontak.
          </li>
          <li>
            <strong>1 April 2024:</strong> Anda telah mengirim pesan kepada tim.
          </li>
        </ul>
        <hr /> -->
      <!-- <h3>Notifikasi</h3>
        <ul>
          <li>
            <strong>1 April 2024:</strong> Anda memiliki 3 tugas baru.
          </li>
          <li>
            <strong>1 April 2024:</strong> Anda memiliki 2 pesan baru.
          </li>
        </ul> -->
    </div>
  </Pages>
</template>

<script>
import Pages from "@/components/template/Pages.vue";
import axios from "axios";
import { toHandlerKey } from "vue";

export default {
  // Define components used in the template
  components: {
    Pages,
  },
  // Define data properties for the component
  data() {
    return {

      user: {
        name: null,
        role: "Admin",
      },
    };
  },
  methods: {
    async fetchAuthUser() {
      const tokens = localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens")) : null;

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens.access_token}`
      }

      const response = await axios.get(import.meta.env.VITE_API_PATH +'api/v2/auth/me', {
        headers: headers,
      });

      const authUserData = response.data.resource.data;

      localStorage.setItem("user", JSON.stringify(authUserData));

      console.log(JSON.parse(localStorage.getItem("user")));
    }
  },
  // Define mounted lifecycle hook for the component
  mounted() {
    this.fetchAuthUser();
    // Fetch the user's data from local storage and assign it to the user property
    const auth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : "";
    const user2 = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
    //this.user = user;
    
    //testing firestore
    this.$root.sendNotifFirebase("Selamat Datang Kak, " + user2.fullname, "Ini Adalah Aplikasi Web SIDIA (SGS Distribution Application)");
    // this.$root.sendNotifFirebase("Selamat Datang Kak"+user.email); 
  },
};
</script>

<style scoped></style>