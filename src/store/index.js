import { createApp } from "vue";
import { createStore } from "vuex";
import productReviewStore from "./product.review.store";
import productRootStore from "./product.store";
import categoryStore from "./category.store";
import trademarkStore from "./trademark.store";
import bannerStore from "./banner.store";
import contactStore from "./contact.store";
import userStore from "./auth.store";

const store = createStore({
  modules: {
    auth: userStore,
    banner: bannerStore,
    productRoot: productRootStore,
    productReview: productReviewStore,
    category: categoryStore,
    trademark: trademarkStore,
    contact: contactStore,
  },
});

const app = createApp({});
app.use(store);

export default store;
