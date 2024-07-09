<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <BannerIphone />
      </div>
      <div class="carousel-item">
        <BannerSamSung />
      </div>
      <div class="carousel-item">
        <banner-xiaomi />
      </div>
      <div class="carousel-item">
        <banner-oppo />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
import BannerIphone from "../BannerSlider/BannerIphone.vue";
import BannerOppo from "../BannerSlider/BannerOppo.vue";
import BannerSamSung from "../BannerSlider/BannerSamSung.vue";
import BannerXiaomi from "../BannerSlider/BannerXiaomi.vue";
</script>
