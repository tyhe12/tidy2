export const state = () => ({
    firstload: true
})

export const mutations = {
    firstload(state, reviews) {
        state.firstload = false
    }
}

export const actions = {
    firstload({ commit }) {
        commit('firstload')
    }
}

export const getters = {
    firstload: (state) => state.firstload
}
