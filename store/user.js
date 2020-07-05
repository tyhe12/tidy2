// import axios from 'axios'
import { Auth } from 'aws-amplify'

export const state = () => ({
    user: {},
    signedIn: false
})

export const mutations = {
    setUser(state, user) {
        state.user = user
    },
    toggleSignedIn(state) {
        state.signedIn = !state.signedIn
    },
    setSignedIn(state, flag) {
        state.signedIn = flag
    }
}

export const actions = {
    async loadUser({ commit }, userInfo) {
        try {
            const user = await Auth.currentAuthenticatedUser()
            commit('setUser', user)
            commit('setSignedIn', true)
        } catch (err) {
            commit('setSignedIn', false)
        }
    },
    async signIn({ commit }, { email, password }) {
        const user = await Auth.signIn(email, password)
        commit('setUser', user)
        commit('setSignedIn', true)
    },
    async signOut({ commit }) {
        await Auth.signOut()
        commit('setUser', {})
        commit('setSignedIn', false)
    }
}

export const getters = {
    user: (state) => state.user,
    signedIn: (state) => state.signedIn
}
