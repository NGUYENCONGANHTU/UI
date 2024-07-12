<template>
  <the-header />
  <div class="container-fluid py-3">
    <div class="card d-flex flex-column justify-content-start">
      <div class="container">
        <div class="wrapper row">
          <div class="preview col-md-6">
            <div class="preview-pic tab-content">
              <div class="tab-pane active" :id="`pic-${dataDetail?.id}`">
                <img :src="URL + '/' + dataDetail?.images" />
              </div>
              <div
                v-for="(item, index) in dataProductImage"
                :key="index"
                class="tab-pane"
                :id="`pic-${index + 1}`"
              >
                <img :src="URL + '/' + item?.file_name" />
              </div>
            </div>
            <ul class="preview-thumbnail nav nav-tabs">
              <li v-for="(item, index) in dataProductImage" :key="index">
                <a
                  :data-target="`#pic-${item.id}`"
                  :id="`#pic-${item.id}`"
                  data-toggle="tab"
                  @click="updateActiveTab(item.id)"
                  ><img :src="URL + '/' + item?.file_name"
                /></a>
              </li>
            </ul>
          </div>
          <div class="details col-md-6">
            <h3 class="product-title">
              {{ dataDetail?.name }}
            </h3>
            <div class="rating-star">
              <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" />
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" />
                <label title="text" for="star4"></label>
                <input
                  value="3"
                  name="rate"
                  id="star3"
                  type="radio"
                  checked=""
                />
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" />
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" />
                <label title="text" for="star1"></label>
              </div>
              <br />
              <p class="review-no mt-3">41 Đánh giá</p>
            </div>
            <span
              v-show="dataDetail?.sale_price > 0"
              class="text-decoration-line-through text-danger"
              >{{ formatToVND(dataDetail?.price) }}</span
            >
            <h4 class="price">
              Giá hiện tại:
              <span>{{
                formatToVND(
                  dataDetail?.sale_price
                    ? dataDetail?.sale_price
                    : dataDetail?.price
                )
              }}</span>
            </h4>
            <p class="vote">
              <strong>91%</strong> người mua đã thích sản phẩm này
              <strong>(87 đánh giá)</strong>
            </p>
            <div class="choice-rom d-flex flex-nowrap mt-2 mb-3">
              <span
                class="box03 group desk"
                v-for="(item, index) in dataDetail?.attributes"
                :key="index"
              >
                <div
                  @click="updateIdAttributeIds(item.id)"
                  :style="{
                    background: item?.productAttribute.value,
                    color: '#b36800',
                  }"
                  data-index="0"
                  :class="[
                    'box03__item',
                    'item',
                    {
                      'border border-primary': pushIdAttributeIds.includes(
                        item.id
                      ),
                    },
                  ]"
                >
                  {{ item?.productAttribute.value }}
                </div>
              </span>
            </div>
            <form @submit.prevent="addToCart">
              <div class="d-flex">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-default-add-count"
                >
                  <i class="bi bi-plus-square"></i>
                </button>
                <input
                  v-model="model.quantity"
                  type="number"
                  class="input-group w-25 mx-2 input_cart_base"
                />
                <button
                  type="button"
                  class="btn btn-outline-danger btn-default-add-count"
                >
                  <i class="bi bi-eraser-fill"></i>
                </button>
              </div>
              <div class="action mt-4">
                <button class="add-to-cart btn btn-default" type="submit">
                  add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-5 w-100 bg-white">
          <h3 class="px-4 pt-5">Chi tiết sản phẩm</h3>
          <p class="p-4" v-html="dataDetail?.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineComponent,
  ref,
  reactive,
  watchEffect,
  toRefs,
  onMounted,
  computed,
} from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import { URL_API } from "@/constants/env";
import { useStore } from "vuex";
import TheHeader from "@/layout/TheHeader.vue";
import { formatToVND } from "/src/components/helpers/format-to-vdn.js";

const store = useStore();
const URL = ref(URL_API);
const router = useRouter();
const route = useRoute();
const pushIdAttributeIds = ref([]);

const model = reactive({
  quantity: 0,
  productAttributeId: pushIdAttributeIds.value,
  product_id: Number(route.params.id),
});


const dataDetail = computed(() =>
  store.getters["productRoot/getProductById"](Number(route.params.id))
);

const dataProductImage = computed(
  () => store.getters["productImage/dataProductImage"]
);

const updateIdAttributeIds = (value) => {
  const index = pushIdAttributeIds.value.indexOf(value);
  if (index === -1) {
    pushIdAttributeIds.value.push(value);
  } else {
    pushIdAttributeIds.value.splice(index, 1);
  }
  const productAttributeIdsString = pushIdAttributeIds.value.join(',');
  model.productAttributeId = productAttributeIdsString;
};

const addToCart = async () => {
  try {
    await store.dispatch("cart/createCart", model)
      // router.push("/").then(() => {
      //   toast.success(
      //     `status: ${'200'}: Đăng nhập tài khoản thành công !!`
      //   );
      // });
  } catch (error) {
      toast.error(
        `status: ${'500'}: Đăng nhập tài khoản không công !!`
      );
  }
};

const updateActiveTab = (id) => {
  const tabId = `pic-${id}`;
  const tabPane = document.querySelector(`#${tabId}`);
  if (tabPane) {
    tabPane.classList.add("active");
  }
};

onMounted(async () => {
  const query = {
    product_id: Number(route.params.id),
  };
  await store.dispatch("productRoot/productDetail", Number(route.params.id));
  await store.dispatch("productImage/getAll", { params: query });
});
</script>

<style scoped>
/* Globals */
.btn-default-add-count {
  border-radius: 0;
}
.action button {
  font-size: 13px;
  border-radius: 0;
  width: 45%;
}
.btn-default-add-count i {
  font-size: 18px;
}
.input_cart_base {
  outline: none;
}
img {
  max-width: 100%;
}
.item-color-gray {
  width: 80px;
  height: 30px;
}

.preview {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}
.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  animation-name: opacity;
  animation-duration: 0.3s;
}

.card {
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: flex;
  }
}

.details {
  display: flex;
  flex-direction: column;
}

.colors {
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: uppercase;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff9f1a;
}

.product-title,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  transition: background 0.3s ease;
}
.add-to-cart:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}
.ram-rom {
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 8px;
}
.item {
  margin-left: 20px;
}
.color-gray {
  background-color: gray;
  width: 50px;
  height: 20px;
}
.color-white {
  background-color: white;
  width: 50px;
  height: 20px;
}
.color-black {
  background-color: black;
  width: 50px;
  height: 20px;
}
.color-gold {
  background-color: gold;
  width: 50px;
  height: 20px;
}
.box03__item {
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  color: #333;
  display: inline-block;
  font-size: 13px;
  min-width: 67px;
  padding: 0 15px;
  text-align: center;
  margin-bottom: 5px;
  margin-right: 2px;
  vertical-align: top;
  height: 36px;
  line-height: 36px;
  position: relative;
  text-decoration: none;
  margin-left: 8px;
}
.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@keyframes opacity {
  0% {
    opacity: 0;
    transform: scale(3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Start Rating */
.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 30px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: "★";
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}

.rating-star {
}
.rating {
  float: left;
}

/* Choice Color */
.choice-color {
  margin-top: 15px;
  margin-bottom: 20px;
}
.title {
  padding: 20px 10px 20px 20px;
  background-color: #9b9a9a;
}
</style>
