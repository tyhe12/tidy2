<template>
    <v-toolbar fixed>
        <v-app-bar-nav-icon @click="iconClickHandler"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
            <router-link class="link-title" tag="span" to="/">
                <v-img :src="logo" contain height="100%" width="230"></v-img>
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="link link-btn" text large to="/about" active-class="">
                Who I Am
            </v-btn>

            <v-btn
                class="link link-btn"
                text
                large
                to="/offerings"
                active-class=""
            >
                My Services
            </v-btn>

            <v-menu
                open-on-hover
                bottom
                right
                transition="slide-y-transition"
                nudge-bottom="64"
            >
                <template v-slot:activator="{ on }">
                    <v-btn class="link" text large v-on="on" active-class="">
                        More
                        <v-icon small class="ml-2">fa-angle-down</v-icon>
                    </v-btn>
                </template>

                <v-list dense class="grey lighten-4">
                    <v-list-item>
                        <v-btn
                            class="link link-menu"
                            text
                            large
                            to="/included"
                            active-class=""
                        >
                            What is Included
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn
                            class="link link-menu"
                            text
                            large
                            to="/reviews"
                            active-class=""
                        >
                            What People Say
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn
                            class="link link-menu"
                            text
                            large
                            to="/faqs"
                            active-class=""
                        >
                            FAQs
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import Logo from '../assets/logo_main.png'

export default {
    data: () => ({
        logo: Logo
    }),
    methods: {
        iconClickHandler() {
            this.$emit('click:icon')
        }
    }
}
</script>

<style lang="scss" scoped>
.link:hover {
    &::before {
        background: currentColor;
    }
    color: $primary-color;
}

.link-menu {
    width: 100%;
}

.link-title {
    cursor: pointer;
}

.link-title:hover {
    color: $primary-color;
}
</style>
