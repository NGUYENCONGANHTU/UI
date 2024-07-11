import { CategoryService } from "@/service/category.service";
// declare class AuthService
const categoryService = new CategoryService();

const categoryStore = {
  //Allow modules to have namespace to avoid conflicts with other modules
  namespaced: true,

  state: {
    loadingApp: false,
    // save cake data
    category: [],
  },

  mutations: {
    isLoading(state, loading) {
      state.loadingApp = loading;
    },

    setCakeData(state, data) {
      state.category = data;
    }
    
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
        const response = await categoryService.getCategories(
          `/api/users/home/category?${queryString}`
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
    dataCategory: (state) => state.category,
    getCategoryById: (state) => (id) => {
      return state.category.find((b) => b.id === id);
    },
  },
};
export default categoryStore;
