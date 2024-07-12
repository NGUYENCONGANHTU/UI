<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12 col-md-3">
        <!-- list category -->
        <div>
          <div class="d-flex">
            <i class="bi bi-list-ul fs-5 fw-bold"></i>
            <h6 class="pt-1 mx-3 pb-2">Tất Cả Danh mục</h6>
          </div>
          <div>
            <div
              class="form-check pb-2"
              v-for="(item, index) in dataCategory"
              :key="index"
            >
              <input
                class="form-check-input"
                type="radio"
                v-model="paramCategory.model"
                :value="item.id"
                name="category_"
                :id="`category_${item.id}`"
                @click="updateFilterCategory(item.id)"
              />
              <label
                class="form-check-label item_data_base"
                for="flexCheckIndeterminate"
              >
                {{ item.name }}
              </label>
            </div>
          </div>
          <div class="my-3">
            <div class="d-flex">
              <i class="bi bi-badge-tm"></i>
              <p class="pt-1 mx-3">Thương hiệu</p>
            </div>
            <div>
              <div
                class="form-check"
                v-for="(item, index) in dataTrademark"
                :key="index"
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="trademark_"
                  v-model="paramSelect.model"
                  :value="item.id"
                  :id="`trademark_${item.id}`"
                  @click="updateFilterTrademark(item.id)"
                />
                <label
                  class="form-check-label item_data_base"
                  for="flexCheckIndeterminate"
                >
                  {{ item.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
        <button @click="reloadPage" type="button" class="btn btn-danger w-100 mt-5">Xóa filter</button>
        </div>
      </div>
      <div class="col-12 col-md-9 bg-light">
        <div class="d-flex align-items-center mb-5">
          <p class="mb-0">Sắp xếp theo</p>
          <button
            @click="updateQuery(1)"
            type="button"
            :class="query.sort ? 'btn_active btn_base mx-3' : 'btn_base mx-3'"
          >
            Mới nhất
          </button>
          <button
            @click="updateQuery(2)"
            type="button"
            :class="
              query.sortPurchases ? 'btn_active btn_base me-3' : 'btn_base me-3'
            "
          >
            Bán chạy
          </button>

          <button
            @click="updateQuery('asc')"
            type="button"
            :class="
              query.sortPrice === 'asc'
                ? 'btn_active btn_base me-3'
                : 'btn_base me-3'
            "
          >
            Gía: Từ thấp đến cao
          </button>

          <button
            @click="updateQuery('desc')"
            type="button"
            :class="
              query.sortPrice == 'desc'
                ? 'btn_active btn_base me-3'
                : 'btn_base me-3'
            "
          >
            Gía: Từ cao đến thấp
          </button>
        </div>

        <div class="row">
          <div
            v-if="dataProduct.length > 0"
            class="col-12 col-md-3"
            v-for="(item, index) in dataProduct"
            :key="index"
          >
            <div class="main-item">
              <div class="cart-img">
                <img
                  :src="URL + '/' + item?.images"
                  class="w-100 h-100 item-img border-bottom-0"
                  alt="img "
                />
              </div>
              <div class="border-top-0 p-3 height_item">
                <h6 class="py-2" style="font-size: 13px">
                  {{
                    item?.name.length > 50
                      ? item?.name.substr(0, 50) + "..."
                      : item?.name
                  }}
                </h6>
                <div class="d-flex align-items-center w-100">
                  <h6
                    style="font-size: 11px"
                    :class="`${
                      item?.sale_price > 0
                        ? 'text-decoration-line-through text-danger'
                        : ''
                    }`"
                  >
                    {{ formatToVND(item?.price) }}
                  </h6>
                  <h6
                    v-show="item?.sale_price > 0"
                    class="pt-1 px-1"
                    style="font-size: 13px"
                  >
                    {{ formatToVND(item?.sale_price) }}
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
                    <p class="mb-0 p-0 m-0" style="font-size: 11px">
                      {{
                        `Đã bán:${item?.is_purchases ?? 0} ${
                          item?.is_purchases.length >= 3 ? "k" : "c"
                        }`
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h6 class="text-center">Sản phẩm không tồn tại!!</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  defineEmits,
  ref,
  defineProps,
  onMounted,
  computed,
  watchEffect,
  reactive,
} from "vue";
import { useStore } from "vuex";
import Product from "../Product/Products.vue";
import { URL_API } from "@/constants/env";
import { formatToVND } from "/src/components/helpers/format-to-vdn.js";
import { reloadPage } from "/src/components/helpers/reload.js";

// declare store
const store = useStore();

const URL = ref(URL_API);

// computed store
const dataCategory = computed(() => store.getters["category/dataCategory"]);
const dataTrademark = computed(() => store.getters["trademark/dataTrademark"]);
const dataProduct = computed(() => store.getters["productRoot/dataProduct"]);

const paramSelect = reactive({
  model: 0,
});

const paramCategory = reactive({
  model: 0,
});

// default query
const query = ref({
  sort: "",
  sortPurchases: "",
  sortPrice: "",
});

const updateQuery = async (value) => {
  switch (value) {
    case 1:
      query.value.sort = "desc";
      // reset
      query.value.sortPurchases = "";
      query.value.sortPrice = "";
      paramSelect.model = 0;
      paramCategory.model = 0;
      break;
    case 2:
      query.value.sortPurchases = "desc";
      // reset
      query.value.sort = "";
      query.value.sortPrice = "";
      paramSelect.model = 0;
      paramCategory.model = 0;
      break;
    case "asc":
      query.value.sortPrice = "asc";
      // reset
      query.value.sortPurchases = "";
      query.value.sort = "";
      paramSelect.model = 0;
      paramCategory.model = 0;
      break;
    case "desc":
      query.value.sortPrice = "desc";
      // reset
      query.value.sortPurchases = "";
      query.value.sort = "";
      paramSelect.model = 0;
      paramCategory.model = 0;
      break;
    default:
      break;
  }
  if (query.value) {
    await store.dispatch("productRoot/getAll", { params: query.value });
  }
};

const updateFilterCategory = async (value) => {
  if (value) {
    const query = {
      category_id: value,
    };
    await store.dispatch("productRoot/getAll", { params: query });
  }
};

const updateFilterTrademark = async (value) => {
  if (value) {
    const query = {
      trademark_id: value,
    };
    await store.dispatch("productRoot/getAll", { params: query });
  }
};

onMounted(async () => {
  const query = {
    limit: 100,
  };

  // fetch api
  await store.dispatch("category/getAll", { params: "" });
  await store.dispatch("trademark/getAll", { params: query });
  await store.dispatch("productRoot/getAll", { params: query });
});
</script>
<style scoped>
.btn_base {
  outline: none;
  border: none;
  padding: 5px 8px;
  font-size: 13px;
}
.btn_active {
  background-color: rgb(238, 77, 45);
  color: #fff;
}
ul li {
  list-style: none;
}
p {
  font-size: 14px;
}
.cart-img {
  height: 200px;
}
.height_item {
  height: 160px;
}
.box {
  width: 80px;
  height: 28px;
  border: 1px solid #2e2e2e29;
}
.box p {
  font-size: 12px;
}

.item_data_base {
  font-size: 13px;
}

.box_active p {
  font-size: 12px;
}
.box_active {
  width: 80px;
  height: 28px;
  background-color: rgb(238, 77, 45);
}

.item-img {
  object-fit: scale-down;
}

.item-star i {
  font-size: 11px;
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
