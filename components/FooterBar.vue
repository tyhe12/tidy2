<template>
    <v-footer color="primary" height="auto" padless>
        <v-card dark flat tile width="100%" color="primary">
            <v-img :src="logo" class="ma-8" height="100" contain> </v-img>
            <v-card-text class="d-flex justify-center mb-4">
                <v-btn
                    v-for="icon in icons"
                    :key="icon.name"
                    :href="icon.link"
                    class="mx-4"
                    icon
                >
                    <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text
                class="white--text d-flex align-center justify-space-between"
            >
                <div>
                    <v-btn to="/privacy" link text>
                        Privacy Policies
                    </v-btn>
                </div>
                <div>
                    {{ new Date().getFullYear() }} —
                    <strong>Cleaning With Cooley</strong>
                </div>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import RoundLogo from '../assets/img/logo_round.png'

export default {
    data: () => ({
        logo: RoundLogo,
        items: [
            { title: 'Home', icon: 'fas fa-home', link: '/' },
            { title: 'Who I Am', icon: 'fas fa-user-circle', link: '/about' },
            { title: 'My Services', icon: 'fas fa-tags', link: '/services' },
            {
                title: 'What People Say',
                icon: 'fas fa-comments',
                link: '/reviews'
            },
            {
                title: 'What Is Included',
                icon: 'fas fa-box-open',
                link: '/included'
            },
            { title: 'FAQs', icon: 'fas fa-question-circle', link: '/faqs' },
            { title: 'Privacy Policy', icon: 'fas fa-key', link: '/privacy' }
        ],
        icons: [
            {
                name: 'Facebook',
                icon: 'fab fa-facebook',
                link: 'https://www.facebook.com/CleaningwithCooley'
            },
            {
                name: 'Instagram',
                icon: 'fab fa-instagram',
                link: 'https://www.instagram.com/cleaningwithcooley/'
            },
            {
                name: 'Twitter',
                icon: 'fab fa-twitter',
                link: 'https://twitter.com/CleaningwCooley'
            },
            {
                name: 'Phone',
                icon: 'fas fa-phone',
                link: 'tel:708-308-8582'
            },
            {
                name: 'Email',
                icon: 'fas fa-envelope',
                link: 'mailto:info@cleaningwithcooley.com'
            }
        ]
    })
}
</script>

<style>
.footer__card--fullwidth {
    width: 100%;
}

.footer__content-title {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
}

.footer__text {
    color: white;
}

.footer__text--no-space-top {
    margin-top: 0;
    padding-top: 0;
}

.footer__navigate-item {
    min-height: 0 !important;
}

.footer__connect--no-space-top {
    margin-top: 0;
    padding-top: 0;
}
</style>
