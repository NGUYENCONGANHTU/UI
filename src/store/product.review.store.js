import { ProductReviewService } from "@/service/product_review.service";

// declare class ProductReviewService
const productReviewService = new ProductReviewService();

const productReviewStore = {
    //Allow modules to have namespace to avoid conflicts with other modules
    namespaced: true,

    state: {
        loadingApp: false,
        // save cake data
        productReview: []
    },

    mutations: {
        isLoading(state, loading) {
            state.loadingApp = loading;
        },

        setCakeData(state, data) {
            state.productReview = data
            console.log(state.productReview);
        },

        addCakeProductReview(state, newData) {
            state.productReview = [...state.productReview, newData ]
        },

        updateCakeProductReview(state, update) {
            const index = state.productReview.findIndex(item => item.id === update.id);
            if(index !== -1){
                state.productReview[index] = update
            }
        },

        deleteCakeProductReview(state, id) {
            state.productReview = state.productReview.filter(item => item.id !== id);
        }
    },

    actions: {

        async getAll({ commit }, { params }) {
            try {
                commit('isLoading', true)
                const queryString = Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&');
                const response = await productReviewService.getProductReviews(`/api/users/home/product_review?${ queryString }`)
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

       
        async createProductReview ({ commit }, params ) {
            try {
                commit('isLoading', true)
                const response = await productReviewService.createProductReview('/api/users/home/post_product_review/',params)
                if (response) {
                    commit('addCakeProductReview', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async updateHeartProductReview ({commit}, params) {
            try {
                commit('isLoading', true)
                const response = await productReviewService.updateProductReview(`/api/users/home/put_product_heart/${params.id}`,params)
                if (response) {
                    commit('updateCakeProductReview', response)
                    commit('isLoading', false);
                }
            } catch (error) {
                commit('isLoading', true)
                throw new Error(error.message)
            }
        },

        async deleteProductReview ({commit}, id ) {
            try {
                commit('isLoading', true)
                const response = await productReviewService.deleteProductReview(`/api/users/home/delete_product_review/${id}`)
                if (response) {
                    commit('deleteCakeProductReview', response)
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
        dataProductReview: (state) => state.productReview,
        getProductReviewById: (state) => (id) => {
            return state.productReview.find(b => b.id === id)
        }
    }
}
export default productReviewStore;