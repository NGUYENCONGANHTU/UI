import { ContactsService } from "@/service/contacts.service";
// declare class AuthService
const contactService = new ContactsService();

const contactStore = {
  //Allow modules to have namespace to avoid conflicts with other modules
  namespaced: true,

  state: {
    loadingApp: false,
    // save cake data
    contact: [],
  },

  mutations: {
    isLoading(state, loading) {
      state.loadingApp = loading;
    },

    setCakeData(state, data) {
      state.contact = data;
    },

    addCakeContact(state, newData) {
        state.contact = [...state.contact, newData];
    },
  },

  actions: {
    async createContact({ commit }, params) {
        try {
          commit("isLoading", true);
          console.log(params);
          const response = await contactService.createContact(
            `/api/admins/contact/store`,
            params
          );
          console.log(response);
          if (response) {
            commit("addCakeContact", response);
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
    dataContact: (state) => state.contact,
    getContactById: (state) => (id) => {
      return state.contact.find((b) => b.id === id);
    },
  },
};
export default contactStore;
