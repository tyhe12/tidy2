import axios from 'axios'

export const state = () => ({
    reviews: []
})

export const mutations = {
    set(state, reviews) {
        state.reviews = reviews
    },
    add(state, review) {
        state.reviews.push(review)
    }
}

export const actions = {
    async load({ commit }) {
        const reviews = await axios.get(process.env.reviewsUrl)
        commit('set', reviews.data)
    },
    async add({ commit }, review) {
        commit('add', review)
        await axios.post(process.env.reviewsUrl, review)
    }
}

export const getters = {
    reviews: (state) => state.reviews,
    count: (state) => state.reviews.length
}
