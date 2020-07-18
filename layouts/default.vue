<template>
    <v-app class="app">
        <navigation-bar
            :user="user"
            :signed-in="signedIn"
            @click:icon="clickIconHandler"
            app
        />

        <navigation-drawer :drawer.sync="drawer" app />

        <v-content class="content mt-16">
            <nuxt />
        </v-content>

        <footer-bar app />
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavigationBar from '~/components/NavigationBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import NavigationDrawer from '~/components/NavigationDrawer.vue'

export default {
    components: {
        NavigationBar,
        NavigationDrawer,
        FooterBar
    },
    data: () => ({
        drawer: false
    }),
    computed: {
        ...mapGetters({
            user: 'user/user',
            signedIn: 'user/signedIn',
            first: 'globals/firstload'
        })
    },
    mounted() {
        if (this.first) {
            if (!this.signedIn) {
                this.loadUser()
            }
            this.firstload()
        }
    },
    methods: {
        ...mapActions('user', ['loadUser']),
        ...mapActions('globals', ['firstload']),
        clickIconHandler() {
            this.drawer = !this.drawer
        }
    },
    head() {
        return {
            titleTemplate: `%s - ${process.env.PROJECT_NAME}`,
            title: process.env.PROJECT_NAME,
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Cleaning With Cooley is a privately owned house cleaning services based in Chicago.'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        'clean with cooley, cleaning with cooley, clean, cleaning, cooley, chicago, house cleaning service, cleaning service, chicago cleaner, clean service'
                }
            ]
        }
    }
}
</script>

<style lang="scss"></style>
