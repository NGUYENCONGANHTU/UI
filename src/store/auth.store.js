import { AuthService } from "@/service/auth.service";
import Cookies from 'js-cookie';
import { Constants } from "@/constants/constants";
import { UserLoginInfo } from '@/cheetah-core/mixins/user-login-info';
// declare class AuthService
const authService = new AuthService();

const userStore = {
  //Allow modules to have namespace to avoid conflicts with other modules
  namespaced: true,

  state: {
    loadingApp: false,
    // save cake data
    user: [],
  },

  mutations: {
    isLoading(state, loading) {
      state.loadingApp = loading;
    },

    setCakeData(state, data) {
      state.user = data;
    },

    addCakeUser(state, newData) {
      state.user = [...state.user, newData];
    },

    updateCakeUser(state, update) {
      const index = state.user.findIndex((item) => item.id === update.id);
      if (index !== -1) {
        state.user[index] = update;
      }
    },

    deleteCakeUser(state, id) {
      state.user = state.user.filter((item) => item.id !== id);
    },
  },

  actions: {

    async userInfo({ commit }, id) {
      try {
        commit("isLoading", true);
        const response = await authService.userInfo(
          `/api/users/user_authenticate/user_info/` + id
        );
        if (response) {
          commit("setCakeData", [response]);
          commit("isLoading", false);
        }
      } catch (error) {
        commit("isLoading", true);
        throw new Error(error.message);
      }
    },

    async login({ commit }, params) {
      try {
        commit('isLoading', true)
        const response = await authService.login('/api/users/user_authenticate/userLogin', params)
        if (response && response.token) {
          // Set token cookie
          Cookies.set(Constants.tokenUser, response.token);
          // save user info localStorage
          UserLoginInfo.methods.setUser(response)
          commit('isLoading', false);
        } else {
          throw new Error('Invalid response or token missing');
        }
      } catch (error) {
        commit('isLoading', true)
        throw new Error(error.message)
      }
    },

    async logout({ commit }) {
      try {
        commit('isLoading', true)
        await authService.logout('/api/users/user_authenticate/logout')
        Cookies.remove(Constants.tokenUser);
        UserLoginInfo.methods.removeUser()
        commit('isLoading', false)
      } catch (error) {
        commit('isLoading', true)
        throw new Error(error.message)
      }
    },

    async register({ commit }, params) {
      try {
        commit("isLoading", true);
        const response = await authService.register(
          "/api/users/user_authenticate/userRegister",
          params
        );
        if (response) {
          commit("addCakeUser", response);
          commit("isLoading", false);
        }
      } catch (error) {
        commit("isLoading", true);
        throw new Error(error.message);
      }
    },

    async changePassword({ commit }, params) {
      try {
        commit("isLoading", true);
        const response = await authService.changePassword(
          `/api/users/user_authenticate/change_password/${params.id}`,
          params
        );
        if (response) {
          commit("updateCakeUser", response);
          commit("isLoading", false);
        }
      } catch (error) {
        commit("isLoading", true);
        throw new Error(error.message);
      }
    },

    async refreshToken({ commit }, params) {
      try {
        commit("isLoading", true);
        const response = await authService.refreshToken(
          `/api/users/user_authenticate/refreshToken`,
          params
        );
        if (response) {
          commit("updateCakeUser", response);
          commit("isLoading", false);
        }
      } catch (error) {
        commit("isLoading", true);
        throw new Error(error.message);
      }
    },

    // async deleteUser({ commit }, id) {
    //   try {
    //     commit("isLoading", true);
    //     const response = await categoryService.deleteUser(
    //       `/api/admins/user/destroy/${id}`
    //     );
    //     if (response) {
    //       commit("deleteCakeUser", id);
    //       commit("isLoading", false);
    //     }
    //   } catch (error) {
    //     commit("isLoading", true);
    //     throw new Error(error.message);
    //   }
    // },
  },

  getters: {
    //TODO: Computed properties
    loadData: (state) => state.loadingApp,
    dataUser: (state) => state.user,
    getUserById: (state) => (id) => {
      return state.user.find((b) => b.id === id);
    },
  },
};
export default userStore;
