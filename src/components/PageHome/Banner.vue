<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">

      <div v-for="(item, index) in data" :key="index" :class="`carousel-item ${ item.id === 1 ? 'active' : ''}`">
        <Banner :url="URL" :data="item" />
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
import { defineEmits, ref, defineProps, onMounted ,computed} from "vue";
import { useStore } from "vuex";
import { URL_API } from "@/constants/env";
import Banner from "../BannerSlider/Banner.vue"

// declare store
const store = useStore();
const URL = ref(URL_API)
const data = computed(() => store.getters["banner/dataBanner"]);

onMounted( async() => {
  await store.dispatch("banner/getAll",{ params: "" })
})
</script>
