
import { CartService } from "@/service/cart.service";

// declare class CartService
const cartService = new CartService();

const cartRootStore = {
    //Allow modules to have namespace to avoid conflicts with other modules
    namespaced: true,

    state: {
        loadingApp: false,
        // save cake data
        cart: []
    },

    mutations: {
        isLoading(state, loading) {
            state.loadingApp = loading;
        },

        setCakeData(state, data) {
            state.cart = data
        },

        addCakeCart(state, newData) {
            state.cart = [...state.cart, newData ]
        },

        updateCakeCart(state, update) {
            const index = state.cart.findIndex(item => item.id === update.id);
            if(index !== -1){
                state.cart[index] = update
            }
        },

        deleteCakeCart(state, id) {
            state.cart = state.cart.filter(item => item.id !== id);
        }
    },

    actions: {

        async getAll({ commit }, { params }) {
            try {
                commit('isLoading', true)
                const queryString = Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&');
                const response = await cartService.getCarts(`/api/users/home/cart?${ queryString }`)
                if (response) {
                    commit('setCakeData', response)
                    setTimeout(() => {
                        commit('isLoading', false);
                    },1000)
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async cartDetail ({ commit }, id ) {
            try {
                commit('isLoading', true)
                const response = await cartService.getCart(`/api/users/home/product_detail/`+ id)
                if (response) {
                    commit('setCakeData', [ response ])
                    setTimeout(() => {
                        commit('isLoading', false);
                    },1000)
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async createCart ({ commit }, params ) {
            try {
                commit('isLoading', true)
                const response = await cartService.addToCart(`/api/users/cart/store/${params.product_id}`,params)
                if (response) {
                    commit('addCakeCart', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async updateHeartCart ({commit}, params) {
            try {
                commit('isLoading', true)
                const response = await cartService.updateCart(`/api/users/home/put_product_heart/${params.id}`,params)
                if (response) {
                    commit('updateCakeCart', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async deleteCart ({commit}, id ) {
            try {
                commit('isLoading', true)
                const response = await cartService.deleteCart(`/api/admins/cart/destroy/${id}`)
                if (response) {
                    commit('deleteCakeCart', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        }
    },

    getters: {
        //TODO: Computed properties
        loadData: (state) => state.loadingApp,
        dataCart: (state) => state.cart,
        getCartById: (state) => (id) => {
            return state.cart.find(b => b.id === id)
        }
    }
}
export default cartRootStore;