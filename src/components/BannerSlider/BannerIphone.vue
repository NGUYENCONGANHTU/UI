<template>
  <div class="container-fluid">
    <div class="container d-flex">
      <div class="produce text-white">
        <h2 class="titleText">IPHONE 14 PROMAX</h2>
        <p class="">
          iPhone 14 Pro Max là mẫu điện thoại cao cấp mới nhất của Apple, nổi
          bật với thiết kế sang trọng, màn hình Super Retina XDR 6.7 inch, và hệ
          thống camera cải tiến vượt trội. Thiết bị này được trang bị chip A16
          Bionic mạnh mẽ, hỗ trợ khả năng chụp ảnh chuyên nghiệp và hiệu suất ấn
          tượng.
        </p>
        <button class="btn btn-danger text-center border-1">View More</button>
      </div>
      <div class="produce-image">
        <img :src="Iphone" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Iphone from "@/assets/SlideImage/Iphone.png";
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
  right: 160px;
}
.produce-image img {
  height: 599px;
}
.produce {
  position: absolute;
  top: 240px;
  width: 50%;
}
.produce .titleText {
  font-size: 72px;
}
.produce p {
  font-size: 20px;
}
</style>
