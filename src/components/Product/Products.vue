<template>
  <div class="main-item">
    <div class="cart-img">
      <img
        :src="props.url + '/' +  props.data?.images "
        class="w-100 h-100 item-img border-bottom-0"
        alt="img "
      />
    </div>
    <div class="border-top-0 p-3 height_item">
      <h6 class="py-2">{{ props.data?.name.length > 50 ? props.data?.name.substr(0, 50) + '...' : props.data?.name  }}</h6>
      <div class="d-flex align-items-center">
        <h6
          :class="`${
            props.data?.sale_price > 0
              ? 'text-decoration-line-through text-danger'
              : ''
          }`"
        >
          {{ formatToVND(props.data?.price) }}
        </h6>
        <h6 v-show="props.data?.sale_price > 0" class="pt-1 px-2">
          {{ formatToVND(props.data?.sale_price) }}
        </h6>
      </div>
      <div class="d-flex justify-content-between">
        <div class="item-star">
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
        </div>
        <div>
          <p class="mb-0 p-0 m-0">
            {{ `Đã bán:${props.data?.is_purchases ?? 0} ${props.data?.is_purchases.length >= 3 ? 'k' : 'c'}` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, ref, defineProps, onMounted, computed } from "vue";
import { formatToVND } from '/src/components/helpers/format-to-vdn.js';
const props = defineProps({
  data: { type: {}, required: true },
  url: { type: String, required: true },
});

</script>
<style scoped>
.title {
  text-align: center;
}
.cart-img {
  height: 250px;
}

.item-img {
  object-fit: cover;
}
.height_item{
    height: 170px;
}

.item-star i {
  font-size: 14px;
}

.title {
  text-align: center;
}

.main-item {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.item {
  margin: 0 10px 10px 0;
  width: calc(1 / 5 * 100% - (1 - 1 / 5) * 10px);
  background: #fff;
  box-shadow: 0 4px 6px #00000029;
  border-radius: 8px;
  text-align: center;
  position: relative;
}

.item img {
  width: 150px;
  margin: 30px auto 0 auto;
}

.item .cover {
  position: absolute;
  width: 100%;
  top: 100px;
}

a {
  text-decoration: none;
  color: black;
}

.card-detail {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>