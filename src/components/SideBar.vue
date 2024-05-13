<template>
    <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 d-flex sticky-top" id="sidebar-main">
        <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2" id="sidebar-sub-main">
            <router-link
            :to="{ name: 'dashboard' }"
            class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-decoration-none text-nowrap">
            <img 
            src="/public/1630597076257.jpeg" 
            alt="PT. Sinergi Global Service"
            class="img-fluid rounded shadow"
            title="PT. Sinergi Global Service" />    
            </router-link>
            <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="sidebar-sub-main-menu">
                <li>
                    <router-link
                    :to="{ name: 'dashboard' }" 
                    class="nav-link px-sm-0 px-2">
                        <span id="sidebar-sub-main-menu-link-text">Dashboard</span>
                    </router-link>
                </li>
                <li class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle px-sm-0 px-2" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="ms-0 d-none d-sm-inline" id="sidebar-sub-main-menu-link-dropdown">Programs</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdown">
                        <li>
                            <router-link
                            :to="{ name: 'program' }" 
                            class="dropdown-item">
                                <span id="">Daftar Program</span>
                            </router-link>
                        </li>
                        <li><a class="dropdown-item" href="#">Daftar Program Usang</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="ms-0 d-none d-sm-inline" id="sidebar-sub-main-menu-link-dropdown">Call Plans</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdown">
                        <li><a class="dropdown-item" href="#">Daftar Salesman</a></li>
                        <li><a class="dropdown-item" href="#">Master Call Plan</a></li>
                    </ul>
                </li>
            </ul>
            <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/public/uknown-profile.jpg" alt="Uknown Profile Image" width="28" height="28" class="rounded-circle">
                    <span v-if="user" class="d-none d-sm-inline mx-1" id="sidebar-profile-fullname">{{ user.fullname }}</span><span v-else class="d-none d-sm-inline mx-1">John Doe</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li>
                        <router-link
                        :to="{ name: 'profile' }" 
                        class="dropdown-item">
                            <span>Profile</span>
                        </router-link>
                    </li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" @click.prevent="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, shallowRef } from 'vue';
import router from '../router';

const user = shallowRef(null);

function fetchUserData() {
  const userData = localStorage.getItem("user");

  if (userData) {
    user.value = JSON.parse(userData);
  } else {
    redirectToLoginPage();
  }
}

function redirectToLoginPage() {
  setTimeout(() => {
    router.push({ path: '/login' });
  }, 1000);
}


function logout() {
  localStorage.clear();

  redirectToLoginPage();
}

onMounted(() => {
    fetchUserData();
})
</script>

<style scoped>
#sidebar-main {
    background: #7EA1FF;
}

#sidebar-sub-main-menu-link-text {
    position: relative;
    color: #31363F;
    text-decoration: none;
    transition: 0.5s;
}

#sidebar-sub-main-menu-link-text:hover {
    color: #000;
}

#sidebar-sub-main-menu-link-text::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

#sidebar-sub-main-menu-link-text:hover::before {
    transform: scaleX(1);
}

#sidebar-sub-main-menu-link-dropdown {
    color: #31363F;
    text-decoration: none;
    transition: 0.5s;
}

#sidebar-sub-main-menu-link-dropdown:hover {
    color: #000;
}

#sidebar-profile-fullname {
    color: #000;
}
</style>