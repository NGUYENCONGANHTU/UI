<template>
  <the-header />
  <div class="container contact-page d-flex flex-nowrap">
    <ContactLeft />
    <ContactRight />
  </div>

  <Footer />
</template>
<script setup>
import TheHeader from "@/layout/TheHeader.vue";
import ContactLeft from "@/components/Contact/ContactLeft.vue";
import ContactRight from "@/components/Contact/ContactRight.vue";
import Footer from "@/components/PageHome/Footer.vue";
</script>
<style scoped>
.contact-page {
  margin-top: 40px;
}
</style>
