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
    plugins: [
        {
            src: '~/plugins/amplify',
            mode: 'client'
        }
    ],
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
        '@nuxtjs/axios',
        '@nuxtjs/auth',
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
        transpile: ['vee-validate/dist/rules'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    'google-gtag': {
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    env: {
        reviewsUrl: `${process.env.API_URL}\\reviews`,
        usersUrl: `${process.env.API_URL}\\users`,
        cleansUrl: `${process.env.API_URL}\\cleans`
    },
    auth: {
        strategies: {
            facebook: {
                client_id: '1622772391204199'
            },
            google: {
                client_id:
                    '665965630767-s95ma00tu5b95pvc2c6hq73q8dpu5hml.apps.googleusercontent.com'
            }
        }
    },
    sitemap: {
        hostname: 'https://cleaningwithcooley.com',
        lastmod: '2020-06-05'
    }
}
