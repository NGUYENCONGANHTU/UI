<script setup>
import Iphbanner_on_sale_1 from "@/assets/OnSale/banner_on_sale_1.png";
import Iphbanner_on_sale_2 from "@/assets/OnSale/banner_on_sale_2.png";
import Iphbanner_on_sale_3 from "@/assets/OnSale/banner_on_sale_3.png";
import Iphbanner_on_sale_4 from "@/assets/OnSale/banner_on_sale_4.png";
import Iphbanner_on_sale_5 from "@/assets/OnSale/banner_on_sale_5.png";
import Iphbanner_on_sale_6 from "@/assets/OnSale/banner_on_sale_6.png";
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="row w-100">
      <section>
        <h3>KHUYẾN MẠI GIẢM GIÁ</h3>
      </section>
      <div class="col-lg-4 col-md-4 col-sm-12 py-3">
        <div class="product item1 w-100">
          <img :src="Iphbanner_on_sale_1" alt="" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 py-3">
        <div class="product item2">
          <img :src="Iphbanner_on_sale_2" alt="" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 py-3">
        <div class="product item3">
          <img :src="Iphbanner_on_sale_3" alt="" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 py-3">
        <div class="product item1 w-100">
          <img :src="Iphbanner_on_sale_4" alt="" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 py-3">
        <div class="product item2">
          <img :src="Iphbanner_on_sale_5" alt="" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 py-3">
        <div class="product item3">
          <img :src="Iphbanner_on_sale_6" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
}
section h3 {
  color: #4a5291;
  font-weight: 700;
  font-size: 35px;
  margin-top: 15px;
}
.product {
  border-radius: 20px;
  width: 100%;
  height: auto;
  transition: all 0.5s;
}
.product:hover {
  cursor: pointer;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.05);
}
.product img {
  border-radius: 20px;
  width: 100%;
  height: auto;
}
</style>
