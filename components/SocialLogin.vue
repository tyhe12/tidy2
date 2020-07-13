<template>
    <div class="federated-signin d-flex justify-space-around">
        <div class="mx-4">
            <v-btn @click="loginFacebook" icon>
                <v-icon>fab fa-facebook</v-icon>
            </v-btn>
        </div>
        <div class="mx-4">
            <v-btn @click="loginGoogle" icon>
                <v-icon>fab fa-google</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
    methods: {
        loginFacebook() {
            Auth.federatedSignIn({ provider: 'Facebook' })
        },
        loginGoogle() {
            Auth.federatedSignIn({ provider: 'Google' })
        }
    }
}
</script>
