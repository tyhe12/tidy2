<template>
    <div class="login-page">
        <v-container v-if="!signedIn">
            <v-row>
                <v-col cols="12">
                    <h2>Sign in</h2>
                    <p>
                        Not a member?
                        <nuxt-link to="signup">Join us</nuxt-link> now.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <login-widget />
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <p>
                        <nuxt-link to="recover">Forgot password?</nuxt-link>
                    </p>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else>
            <v-row>
                <v-col cols="12">
                    <h2>You are already signed in.</h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <logout-widget />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginWidget from '~/components/LoginWidget'
import LogoutWidget from '~/components/LogoutWidget'

export default {
    components: {
        LoginWidget,
        LogoutWidget
    },
    computed: {
        ...mapGetters({
            signedIn: 'user/signedIn'
        })
    }
}
</script>
