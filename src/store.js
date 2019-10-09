import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        reviews: []
    },
    mutations: {
        refreshReviews: async state => {
            const reviews = await axios.get(process.env.VUE_APP_API_REVIEWS)
            state.reviews = reviews.data
        },
        addReview(state, newReview) {
            state.reviews.push(newReview)
            axios.post(process.env.VUE_APP_API_REVIEWS, newReview)
        }
    },
    actions: {
        loadReviews({ commit }) {
            commit('refreshReviews')
        },
        addReview({ commit }, newReview) {
            commit('addReview', newReview)
        }
    },
    getters: {
        reviews: state => state.reviews,
        reviewsCount: state => state.reviews.length
    }
})
