<template>
    <v-navigation-drawer v-model="show" fixed temporary>
        <v-layout column fill-height>
            <v-list class="pa-1">
                <v-list-item
                    class="link__logo"
                    to="/"
                    active-class="link__logo--active"
                >
                    <v-list-item-content>
                        <v-img
                            :src="logo"
                            contain
                            width="230"
                            alt="Cleaning With Cooley Logo"
                        ></v-img>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    :aria-label="item.label"
                >
                    <v-list-item-action class="mr-4">
                        <v-icon small>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content class="subtitle-2">{{
                        item.title
                    }}</v-list-item-content>
                </v-list-item>
            </v-list>

            <v-spacer />

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-item
                    v-for="(item, idx) in contact"
                    :key="idx"
                    :href="item.link"
                >
                    <v-list-item-action class="mr-1">
                        <v-icon small>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content class="subtitle-2">{{
                        item.text
                    }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
import Logo from '../assets/img/logo_main.png'

export default {
    props: {
        drawer: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            logo: Logo,
            show: this.drawer,
            items: [
                {
                    title: 'About',
                    icon: 'fas fa-user',
                    link: '/about',
                    label: 'More about me'
                },
                {
                    title: 'Our Services',
                    icon: 'fas fa-tags',
                    link: '/services',
                    label: 'More about our services'
                },
                {
                    title: 'What Is Included',
                    icon: 'fas fa-box-open',
                    link: '/included',
                    label: 'More about what is included in our services'
                },
                {
                    title: 'What People Say',
                    icon: 'fas fa-comments',
                    link: '/reviews',
                    label: 'More about reviews'
                },
                {
                    title: 'FAQs',
                    icon: 'fas fa-question-circle',
                    link: '/faqs',
                    label: 'More about FAQs'
                },
                {
                    title: 'Privacy Policy',
                    icon: 'fas fa-key',
                    link: '/privacy',
                    label: 'Privacy Policy of Cleaning With Cooley'
                }
            ],
            contact: [
                {
                    icon: 'fas fa-phone',
                    text: '708-261-2306',
                    link: 'tel:708-261-2306'
                },
                {
                    icon: 'fas fa-envelope',
                    text: 'info@cleaningwithcooley.com',
                    link: 'mailto:info@cleaningwithcooley.com'
                }
            ]
        }
    },
    watch: {
        show(newValue) {
            this.$emit('update:drawer', newValue)
        },
        drawer(newValue) {
            this.show = newValue
        }
    }
}
</script>

<style lang="scss" scoped>
.link__logo--active {
    color: transparent !important;
}
</style>
