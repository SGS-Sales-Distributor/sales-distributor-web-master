<template>
  <header>
    <RouterView />
  </header>
  <!-- <component :is="activeRoute" :params="params"></component>
  <component :is="mainMenu" :menu="menus"></component>
  <component :is="configMenu" :menu="configMenus"></component>
  <FormLoader :active="loader" /> -->
  <!-- <notifications position="bottom right" width="500" /> -->
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.title {
  margin: 0;
  padding: 0px;
  font-size: 16px;
  color: #ffffff;
}

.my-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 15px;
  color: #ffffff;

  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}
</style>
