import axios from 'axios'

export const state = () => ({
    cleans: []
})

export const mutations = {
    set(state, cleans) {
        state.cleans = cleans
    }
}

export const actions = {
    async load({ commit }, { token, customerId }) {
        const { data } = await axios({
            method: 'get',
            url: `${process.env.cleansUrl}?customer=${customerId}`,
            headers: {
                Authorization: token
            }
        })
        const { cleans } = data.body
        commit('set', cleans)
    },
    async add({ commit }, { token, customer, items, price }) {},
    clear({ commit }) {
        commit('set', [])
    }
}

export const getters = {
    cleans: (state) => state.cleans,
    count: (state) => state.cleans.length
}
