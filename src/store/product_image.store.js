import { ProductImageService } from "@/service/product_image.service";
// declare class AuthService
const productImageService = new ProductImageService();

const productImageStore = {
  //Allow modules to have namespace to avoid conflicts with other modules
  namespaced: true,

  state: {
    loadingApp: false,
    // save cake data
    productImage: [],
  },

  mutations: {
    isLoading(state, loading) {
      state.loadingApp = loading;
    },

    setCakeData(state, data) {
      state.productImage = data;
    },
  },

  actions: {
    async getAll({ commit }, { params }) {
      try {
        commit("isLoading", true);
        const queryString = Object.keys(params)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
          )
          .join("&");
        const response = await productImageService.productImages(
          `/api/users/home/product_images?${queryString}`
        );
        if (response) {
          commit("setCakeData", response);
          commit("isLoading", false);
        }
      } catch (error) {
        commit("isLoading", true);
        throw new Error(error.message);
      }
    },
  },

  getters: {
    //TODO: Computed properties
    loadData: (state) => state.loadingApp,
    dataProductImage: (state) => state.productImage,
    getProductImageById: (state) => (id) => {
      return state.productImage.find((b) => b.id === id);
    },
  },
};
export default productImageStore;
