import { TrademarkService } from "@/service/trademark.service";
// declare class AuthService
const trademarkService = new TrademarkService();

const trademarkStore = {
  //Allow modules to have namespace to avoid conflicts with other modules
  namespaced: true,

  state: {
    loadingApp: false,
    // save cake data
    trademark: [],
  },

  mutations: {
    isLoading(state, loading) {
      state.loadingApp = loading;
    },

    setCakeData(state, data) {
      state.trademark = data;
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
        const response = await trademarkService.getTrademarks(
          `/api/users/home/trademark?${queryString}`
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
    dataTrademark: (state) => state.trademark,
    getTrademarkById: (state) => (id) => {
      return state.trademark.find((b) => b.id === id);
    },
  },
};
export default trademarkStore;
