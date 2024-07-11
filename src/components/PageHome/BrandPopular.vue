<template>
  <div class="brand-popular container">
    <h3 class="brand-title">THƯƠNG HIỆU PHỐ BIẾN</h3>
    <div class="brand-items">
      <div v-for="(item, index) in data" :key="index">
        <div :class="`item item${index + 1}`">
          <router-link :to="`/trademark_detail_product/${item.id}`" class="title-items">{{  item.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, ref, defineProps, onMounted ,computed} from "vue";
import { useStore } from "vuex";

// declare store
const store = useStore();

const data = computed(() => store.getters["trademark/dataTrademark"]);

onMounted( async () => {
  const query = {
    limit: 4
  }
  await store.dispatch("trademark/getAll",{ params: query })
})
</script>
<style scoped>
.brand-popular {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  padding: 10px;
}
.brand-title {
  color: #4a5291;
  font-weight: 700;
  font-size: 35px;
  margin-top: 15px;
}
.brand-items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 10px;
}
.item {
  border-radius: 16px;
  width: 500px;
  border: 1px solid;
  height: 150px;
  width: 566px;
  height: 260px;
  position: relative;
}
.item1 {
  background-image: url("@/assets/BrandPopular/Iphone.jpg");
  background-size: cover;
  transition: all 0.5s;
}
.item1:hover {
  cursor: pointer;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.03);
}
.item2:hover {
  cursor: pointer;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.03);
}
.item3:hover {
  cursor: pointer;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.03);
}
.item4:hover {
  cursor: pointer;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.03);
}
.item2 {
  background-image: url("@/assets/BrandPopular/SamSung.jpg");
  background-size: cover;
  transition: all 0.5s;
}
.item3 {
  background-image: url("@/assets/BrandPopular/XiaoMi.jpg");
  background-size: cover;
  transition: all 0.5s;
}
.item4 {
  background-image: url("@/assets/BrandPopular/Oppo.jpg");
  background-size: cover;
  transition: all 0.5s;
}
.title-items {
  position: absolute;
  top: 40%;
  left: 35%;
  opacity: 0.8;
  font-size: 50px;
  text-decoration: none;
  color: aliceblue;
}
</style>
