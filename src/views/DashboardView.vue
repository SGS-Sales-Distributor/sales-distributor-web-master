<template>
    <Pages title="Beranda">
      <!-- Display a welcome message and recent activity and notifications -->
      <div class="col-md-12">
        <h2>Selamat datang, {{ user.name }} !</h2>
        <p>
          Anda telah login sebagai {{ user.role }}. Silakan gunakan menu di samping
          untuk navigasi.
        </p>
        <hr />
        <h3>Aktivitas Terakhir</h3>
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
        <hr />
        <h3>Notifikasi</h3>
        <ul>
          <li>
            <strong>1 April 2024:</strong> Anda memiliki 3 tugas baru.
          </li>
          <li>
            <strong>1 April 2024:</strong> Anda memiliki 2 pesan baru.
          </li>
        </ul>
      </div>
    </Pages>
  </template>
  
  <script>
  import Pages from "@/components/template/Pages.vue";
  
  export default {
    // Define components used in the template
    components: {
      Pages,
    },
    // Define data properties for the component
    data() {
      return {
        user: {
          name: "Jenyta",
          role: "Admin",
        },
      };
    },
    // Define mounted lifecycle hook for the component
    mounted() {
      // Fetch the user's data from local storage and assign it to the user property
      const user = JSON.parse(localStorage.getItem("auth"));
      this.user = user;
    },
  };
</script>
  
<style scoped></style>