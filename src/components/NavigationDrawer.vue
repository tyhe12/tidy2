<template>
    <v-navigation-drawer v-model="show" fixed temporary>
        <v-layout column fill-height>
            <v-list class="pa-1">
                <v-list-item to="/">
                    <v-list-item-content>
                        <v-img :src="logo" contain width="230"></v-img>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
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
import Logo from '../assets/logo_main.png'

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
                    title: 'Who I Am',
                    icon: 'fas fa-user-circle',
                    link: '/about'
                },
                {
                    title: 'My Services',
                    icon: 'fas fa-tags',
                    link: '/offerings'
                },
                {
                    title: 'What Is Included',
                    icon: 'fas fa-box-open',
                    link: '/included'
                },
                {
                    title: 'What People Say',
                    icon: 'fas fa-comments',
                    link: '/reviews'
                },
                { title: 'FAQs', icon: 'fas fa-question-circle', link: '/faqs' }
            ],
            contact: [
                {
                    icon: 'fas fa-phone',
                    text: '708-308-8582',
                    link: 'tel:708-308-8582'
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
.link {
    cursor: pointer;
}

.link:hover {
    color: $primary-color;
}
</style>
