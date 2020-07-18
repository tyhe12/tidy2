<template>
    <v-container class="login-page">
        <v-row justify="center">
            <v-col v-if="!signedIn" cols="10" md="8">
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
                        <social-login />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <p>
                            <nuxt-link to="recover">Forgot password?</nuxt-link>
                        </p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col v-else cols="10" md="8">
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginWidget from '~/components/LoginWidget'
import LogoutWidget from '~/components/LogoutWidget'
import SocialLogin from '~/components/SocialLogin'

export default {
    components: {
        LoginWidget,
        LogoutWidget,
        SocialLogin
    },
    computed: {
        ...mapGetters({
            signedIn: 'user/signedIn'
        })
    }
}
</script>
