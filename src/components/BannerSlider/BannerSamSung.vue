<template>
  <div class="container-fluid">
    <div class="container d-flex">
      <div class="produce text-white">
        <h2 class="titleText">Samsung</h2>
        <p class="des-title">Galaxy S24 Ultra 5G</p>
        <button class="btn btn-danger text-center border-1">View More</button>
      </div>
      <div class="produce-image">
        <img :src="BannerSamSunggg" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import BannerSamSunggg from "@/assets/Banner2/BannerSamSunggg.png";
</script>
<style scoped>
.container-fluid {
  margin-top: 10px;
  border: 1px solid;
  background-image: url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeo6kejU9KhUFqZNVpnlXPwm7HCTsyGLmzU4TXblgQ86Oid8_p");
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
}
.produce-image {
  position: absolute;
  right: 70px;
  top: 20px;
}
.produce-image img {
  height: 550px;
}
.produce {
  position: absolute;
  top: 240px;
  width: 50%;
}
.produce .titleText {
  font-size: 50px;
}
.produce p {
  font-size: 20px;
}
.produce p {
  font-size: 70px;
  font-weight: bold;
}
</style>
