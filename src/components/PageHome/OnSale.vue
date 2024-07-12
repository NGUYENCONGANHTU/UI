<script setup>
import { defineEmits, ref, defineProps, onMounted ,computed} from "vue";
import { useStore } from "vuex";
import { URL_API } from "@/constants/env";
import Product from "../Product/Products.vue"

// declare store
const store = useStore();
const URL = ref(URL_API)
const data = computed(() => store.getters["productRoot/dataProduct"]);

onMounted( async() => {
  const query = {
    sortPurchases: 'desc',
    limit: 8
  }
  await store.dispatch("productRoot/getAll",{ params: query })
})
</script>
<template>
  <div class="container">
    <section>
      <h3 class="pt-3 pb-5">SẢN PHẨM BÁN CHẠY</h3>
    </section>
    <div class="row" >
        <div  class="col-12 col-sm-6 col-md-3" v-for="(item,index) in data" :key="index"> 
          <product :data="item" :url="URL" />
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
