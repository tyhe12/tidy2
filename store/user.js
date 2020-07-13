// import axios from 'axios'
import { Auth } from 'aws-amplify'

export const state = () => ({
    user: {},
    signedIn: false,
    token: ''
})

export const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setToken(state, token) {
        state.token = token
    },
    toggleSignedIn(state) {
        state.signedIn = !state.signedIn
    },
    setSignedIn(state, flag) {
        state.signedIn = flag
    }
}

export const actions = {
    async loadUser({ commit }) {
        try {
            const user = await Auth.currentAuthenticatedUser()
            const { email, name } = user.attributes
            const { jwtToken: token } = user.signInUserSession.idToken
            commit('setUser', { email, name })
            commit('setToken', token)
            commit('setSignedIn', true)
            return user
        } catch (err) {
            commit('setSignedIn', false)
        }
    },
    async signIn({ commit }, { email, password }) {
        const user = await Auth.signIn(email, password)
        const { name } = user.attributes
        const { jwtToken: token } = user.signInUserSession.idToken
        commit('setUser', { email, name })
        commit('setToken', token)
        commit('setSignedIn', true)
    },
    async signOut({ commit }) {
        await Auth.signOut()
        commit('setUser', {})
        commit('setToken', '')
        commit('setSignedIn', false)
    }
}

export const getters = {
    user: (state) => state.user,
    signedIn: (state) => state.signedIn,
    token: (state) => state.token
}
