import colors from 'vuetify/es5/util/colors'

require('dotenv').config()

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~/assets/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify',
        '@nuxtjs/dotenv'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/google-gtag',
        '@nuxtjs/sitemap'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            themes: {
                light: {
                    primary: '#F48FB1',
                    secondary: '#00bcd4',
                    accent: '#03a9f4',
                    error: '#f44336',
                    warning: '#ff5722',
                    info: '#009688',
                    success: '#4caf50'
                }
            }
        },
        defaultAssets: {
            font: {
                family: 'Quicksand'
            },
            icons: 'fa'
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    'google-gtag': {
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    env: {
        reviewsUrl: process.env.API_REVIEWS
    },
    sitemap: {
        hostname: 'https://cleaningwithcooley.com',
        lastmod: '2020-03-28'
    }
}
