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
            <v-btn class="link link-btn" text tile large to="/about">
                Who I Am
            </v-btn>

            <v-btn class="link link-btn" text tile large to="/offerings">
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
                    <v-btn class="link" text tile large v-on="on">
                        More
                        <v-icon small class="ml-2">fa-angle-down</v-icon>
                    </v-btn>
                </template>

                <v-list dense class="navigation__menu-list">
                    <v-list-item
                        v-for="(item, idx) in menu"
                        :key="idx"
                        class="navigation__menu-list-item"
                    >
                        <v-btn
                            class="link link-menu"
                            text
                            tile
                            large
                            :to="item.link"
                        >
                            {{ item.title }}
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
        logo: Logo,
        menu: [
            {
                title: 'What is Included',
                link: '/included'
            },
            {
                title: 'What People Say',
                link: '/reviews'
            },
            {
                title: 'FAQs',
                link: '/faqs'
            }
        ]
    }),
    methods: {
        iconClickHandler() {
            this.$emit('click:icon')
        }
    }
}
</script>

<style lang="scss" scoped>
// .link:hover {
//     &::before {
//         background: none;
//     }
//     color: $primary-color;
// }

.link-menu {
    width: 100%;
}

.link-title {
    cursor: pointer;
}

.link-title:hover {
    color: $primary-color;
}

.navigation__menu-list {
    padding-top: 0;
    padding-bottom: 0;
}

.navigation__menu-list-item {
    padding-left: 0;
    padding-right: 0;
}
</style>
