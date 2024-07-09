<template>
  <div class="container-fluid">
    <div class="container d-flex">
      <div class="produce text-white">
        <h2 class="titleText">Oppo</h2>
        <p class="des-title">Reno 10 Pro Plus 5G - 512GB</p>
        <button class="btn btn-danger text-center border-1">View More</button>
      </div>
      <div class="produce-image">
        <img :src="Oppo" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Oppo from "@/assets/Banner2/Oppo.png";
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
  right: 190px;
  top: 35px;
}
.produce-image img {
  height: 520px;
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
  font-size: 50px;
  font-weight: bold;
}
</style>
