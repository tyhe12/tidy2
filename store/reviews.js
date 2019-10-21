import axios from 'axios'

export const state = () => ({
    reviews: []
})

export const mutations = {
    set(state, reviews) {
        state.reviews = reviews.data
    },
    add(state, newReview) {
        state.reviews.push(newReview)
    }
}

export const actions = {
    async load({ commit }) {
        const reviews = await axios.get(process.env.reviewsUrl)
        commit('set', reviews)
    },
    async add({ commit }, newReview) {
        commit('add', newReview)
        await axios.post(process.env.reviewsUrl, newReview)
    }
}

export const getters = {
    reviews: (state) => state.reviews,
    count: (state) => state.reviews.length
}
