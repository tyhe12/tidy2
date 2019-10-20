import axios from 'axios'

export const state = () => ({
    reviews: []
})

export const mutations = {
    refresh: async (state) => {
        const reviews = await axios.get(process.env.reviewsUrl)
        state.reviews = reviews.data
    },
    add(state, newReview) {
        state.reviews.push(newReview)
        axios.post(process.env.reviewsUrl, newReview)
    }
}

export const actions = {
    async load({ commit }) {
        await commit('refresh')
    },
    add({ commit }, newReview) {
        commit('add', newReview)
    }
}

export const getters = {
    reviews: (state) => state.reviews,
    count: (state) => state.reviews.length
}
