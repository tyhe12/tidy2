import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
    console.debug('disabling analytics...')
    gtag('config', process.env.VUE_APP_GOOGLE_ANALYTICS_ID, {
        send_page_view: false
    })
} else {
    router.afterEach(to => {
        gtag('config', process.env.VUE_APP_GOOGLE_ANALYTICS_ID, {
            page_path: to.path
        })
    })
}

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
