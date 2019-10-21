<template>
    <v-app class="app">
        <navigation-bar app @click:icon="clickIconHandler" />

        <navigation-drawer app :drawer.sync="drawer" />

        <v-content class="content mt-16">
            <v-container grid-list-lg>
                <nuxt />
            </v-container>
        </v-content>

        <footer-bar app />
    </v-app>
</template>

<script>
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
    methods: {
        clickIconHandler() {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style lang="scss"></style>
