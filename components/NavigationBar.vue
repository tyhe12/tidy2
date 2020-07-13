<template>
    <v-app-bar fixed>
        <v-app-bar-nav-icon
            @click="iconClickHandler"
            aria-label="Navigation Menu"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
            <nuxt-link class="link-title" tag="span" to="/">
                <v-img
                    :src="logo"
                    contain
                    height="100%"
                    width="230"
                    alt="Cleaning With Cooley Logo"
                ></v-img>
            </nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                class="link link-btn"
                text
                tile
                large
                to="/about"
                aria-label="More about me"
            >
                About
            </v-btn>

            <v-btn
                class="link link-btn"
                text
                tile
                large
                to="/services"
                aria-label="More about services we offer"
            >
                Our Services
            </v-btn>

            <v-menu
                open-on-hover
                bottom
                right
                transition="slide-y-transition"
                nudge-bottom="64"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        v-on="on"
                        class="link"
                        text
                        tile
                        large
                        aria-label="More links"
                    >
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
                            :to="item.link"
                            :aria-label="`More about ${item.title}`"
                            class="link link-menu"
                            text
                            tile
                            large
                        >
                            {{ item.title }}
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-menu
                :close-on-content-click="false"
                open-on-hover
                bottom
                left
                transition="slide-y-transition"
                nudge-bottom="64"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        v-on="on"
                        to="/login"
                        class="link"
                        text
                        tile
                        large
                        aria-label="Dashboard"
                    >
                        <v-icon>fas fa-user-circle</v-icon>
                    </v-btn>
                </template>

                <div v-if="!signedIn" class="login-menu pa-4">
                    <login-widget v-if="!signedIn" />
                    <v-btn class="mt-2" to="/login" text color="primary"
                        >Login with Social Account</v-btn
                    >
                </div>
                <div v-else>
                    <v-list dense class="navigation__menu-list">
                        <v-list-item class="navigation__menu-list-item">
                            <v-btn aria-label="hello" text tile large>
                                Hello, {{ firstName }}
                            </v-btn>
                        </v-list-item>
                        <v-list-item class="navigation__menu-list-item">
                            <logout-widget />
                        </v-list-item>
                    </v-list>
                </div>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import Logo from '../assets/img/logo_main.png'
import LoginWidget from './LoginWidget'
import LogoutWidget from './LogoutWidget'

export default {
    components: {
        LoginWidget,
        LogoutWidget
    },
    props: {
        user: {
            type: Object,
            required: true
        },
        signedIn: {
            type: Boolean,
            default: false
        }
    },
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
            },
            {
                title: 'Privacy Policy',
                link: '/privacy'
            }
        ]
    }),
    computed: {
        name() {
            return this.signedIn ? this.user.name : ''
        },
        firstName() {
            return this.name.split(' ')[0]
        }
    },
    methods: {
        iconClickHandler() {
            this.$emit('click:icon')
        }
    }
}
</script>

<style lang="scss" scoped>
.login-menu {
    background-color: white;
    width: 300px;
}

.link-menu {
    width: 100%;
}

.link-title {
    cursor: pointer;
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
