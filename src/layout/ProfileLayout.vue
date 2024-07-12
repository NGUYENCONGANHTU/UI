<template>
  <div class="d-flex flex-nowrap">
    <SidebarProfile />
    <slot></slot>
  </div>
</template>
<script setup>
import SidebarProfile from "@/components/Profile/SidebarProfile/SidebarProfile.vue";
</script>
<style scoped></style>
