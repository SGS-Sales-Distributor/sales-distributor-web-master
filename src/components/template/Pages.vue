<template>
    <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
            <SideBar />
            <div class="col d-flex flex-column h-sm-100">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../SideBar.vue';

</script>

<style scoped>

</style>