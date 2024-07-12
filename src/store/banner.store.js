import { BannerService } from "@/service/banner.service";

// declare class AuthService
const bannerService = new BannerService();

const bannerStore = {
  //Allow modules to have namespace to avoid conflicts with other modules
  namespaced: true,

  state: {
    loadingApp: false,
    // save cake data
    banner: [],
  },

  mutations: {
    isLoading(state, loading) {
      state.loadingApp = loading;
    },

    setCakeData(state, data) {
      state.banner = data;
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
        const response = await bannerService.getBanners(
          `/api/users/home/banner?${queryString}`
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
    dataBanner: (state) => state.banner,
    getBannerById: (state) => (id) => {
      return state.banner.find((b) => b.id === id);
    },
  },
};
export default bannerStore;
