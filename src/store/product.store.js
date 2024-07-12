
import { ProductService } from "@/service/product.service";

// declare class ProductService
const productService = new ProductService();

const productRootStore = {
    //Allow modules to have namespace to avoid conflicts with other modules
    namespaced: true,

    state: {
        loadingApp: false,
        // save cake data
        product: []
    },

    mutations: {
        isLoading(state, loading) {
            state.loadingApp = loading;
        },

        setCakeData(state, data) {
            state.product = data
        },

        addCakeProduct(state, newData) {
            state.product = [...state.product, newData ]
        },

        updateCakeProduct(state, update) {
            const index = state.product.findIndex(item => item.id === update.id);
            if(index !== -1){
                state.product[index] = update
            }
        },

        deleteCakeProduct(state, id) {
            state.product = state.product.filter(item => item.id !== id);
        }
    },

    actions: {

        async getAll({ commit }, { params }) {
            try {
                commit('isLoading', true)
                const queryString = Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&');
                const response = await productService.getProducts(`/api/users/home/product?${ queryString }`)
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

        async productDetail ({ commit }, id ) {
            try {
                commit('isLoading', true)
                const response = await productService.getProduct(`/api/users/home/product_detail/`+ id)
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

        async createProduct ({ commit }, params ) {
            try {
                commit('isLoading', true)
                const response = await productService.createProduct('/api/admins/product/store/',params)
                if (response) {
                    commit('addCakeProduct', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async updateHeartProduct ({commit}, params) {
            try {
                commit('isLoading', true)
                const response = await productService.updateProduct(`/api/users/home/put_product_heart/${params.id}`,params)
                if (response) {
                    commit('updateCakeProduct', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async deleteProduct ({commit}, id ) {
            try {
                commit('isLoading', true)
                const response = await productService.deleteProduct(`/api/admins/product/destroy/${id}`)
                if (response) {
                    commit('deleteCakeProduct', response)
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
        dataProduct: (state) => state.product,
        getProductById: (state) => (id) => {
            return state.product.find(b => b.id === id)
        }
    }
}
export default productRootStore;