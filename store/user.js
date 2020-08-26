import axios from 'axios'
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
            const { email, name, sub: id } = user.attributes
            const { jwtToken: token } = user.signInUserSession.idToken
            const { data } = await axios({
                method: 'get',
                url: `${process.env.usersUrl}/${id}`,
                headers: {
                    Authorization: token
                }
            })
            // console.log(data)
            const { address } = data.body.customer
            commit('setUser', { email, name, id, address })
            commit('setToken', token)
            commit('setSignedIn', true)
            return user
        } catch (err) {
            commit('setSignedIn', false)
        }
    },
    async signIn({ commit }, { email, password }) {
        const user = await Auth.signIn(email, password)
        const { username: id } = user
        const { name } = user.attributes
        const { jwtToken: token } = user.signInUserSession.idToken
        const { data } = await axios({
            method: 'get',
            url: `${process.env.usersUrl}/${id}`,
            headers: {
                Authorization: token
            }
        })
        // console.log(data)
        const { address } = data.body.customer
        commit('setUser', { email, name, id, address })
        commit('setToken', token)
        commit('setSignedIn', true)
    },
    async signOut({ commit }) {
        await Auth.signOut()
        commit('setUser', {})
        commit('setToken', '')
        commit('setSignedIn', false)
    },
    async signUp({ commit }, { email, password, name, address }) {
        try {
            const user = await Auth.signUp({
                username: this.email,
                password: this.password,
                attributes: {
                    email: this.email,
                    name: this.name
                }
            })
            const { username: id } = user
            const { jwtToken: token } = user.signInUserSession.idToken
            await axios({
                method: 'post',
                url: `${process.env.usersUrl}`,
                headers: {
                    Authorization: token
                },
                data: {
                    email,
                    name,
                    id,
                    password
                }
            })
            return user
        } catch (err) {
            throw err
        }
    }
}

export const getters = {
    user: (state) => state.user,
    signedIn: (state) => state.signedIn,
    token: (state) => state.token
}
