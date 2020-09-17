<template>
    <div class="signup-form">
        <v-alert v-if="error" type="error">
            {{ errorMessage }}
        </v-alert>
        <div v-if="!signedup" class="signup">
            <validation-observer ref="observer-signup" v-slot="{ invalid }">
                <v-form ref="form" v-model="valid">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required"
                    >
                        <v-text-field
                            v-model="name"
                            :error-messages="errors"
                            type="text"
                            label="Full Name"
                            hint="Please enter your name"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="E-mail"
                        rules="required|email"
                    >
                        <v-text-field
                            v-model="email"
                            :error-messages="errors"
                            type="email"
                            label="E-mail"
                            hint="Please enter a valid e-mail"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="Address"
                        rules="required"
                    >
                        <v-text-field
                            v-model="address"
                            :error-messages="errors"
                            type="text"
                            label="Address"
                            hint="Please enter your address"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        vid="password"
                        rules="required|password:8"
                    >
                        <v-text-field
                            v-model="password"
                            :error-messages="errors"
                            type="password"
                            label="Password"
                            hint="Please enter a password"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="Confirm Password"
                        rules="required|password:8|confirm:@password"
                    >
                        <v-text-field
                            v-model="passwordCopy"
                            :error-messages="errors"
                            type="password"
                            label="Confirm Password"
                            hint="Please confirm your password"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        :rules="{ agreed: { allowFalse: false } }"
                        name="terms"
                    >
                        <v-checkbox
                            v-model="terms"
                            :error-messages="errors"
                            label="Agree To Our Terms of Service"
                            type="checkbox"
                            required
                        ></v-checkbox>
                    </validation-provider>

                    <v-btn
                        :disabled="invalid"
                        @click="signup"
                        color="primary"
                        class="mt-4"
                    >
                        Signup
                    </v-btn>
                </v-form>
            </validation-observer>
        </div>

        <div v-else class="confirm">
            <v-alert type="info">
                You should have received your confirmation code in an e-mail
                from us, please check your inbox and enter your code here.
            </v-alert>

            <validation-observer ref="observer-confirm" v-slot="{ invalid }">
                <v-form ref="form" v-model="valid">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Code"
                        rules="required"
                    >
                        <v-text-field
                            v-model="code"
                            :error-messages="errors"
                            type="text"
                            label="Confirmation Code"
                            hint="Please enter the confirmation code we have sent"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <v-btn
                        :disabled="invalid"
                        @click="resend"
                        color="primary"
                        class="mt-4"
                    >
                        Resend Code
                    </v-btn>

                    <v-btn
                        :disabled="invalid"
                        @click="confirm"
                        color="primary"
                        class="mt-4"
                    >
                        Confirm Code
                    </v-btn>
                </v-form>
            </validation-observer>
            <v-snackbar
                v-model="resent"
                :timeout="5000"
                bottom
                color="primary"
                class="title"
            >
                We have resent your confirmation code in the e-mail you have
                provided, please check your inbox.
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Auth } from 'aws-amplify'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/mixins/validators'

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data: () => ({
        valid: true,
        name: '',
        email: '',
        password: '',
        passwordCopy: '',
        code: '',
        address: '',
        terms: false,
        signedup: false,
        confirmed: false,
        user: {},
        error: false,
        errorMessage: '',
        resent: false
    }),
    methods: {
        ...mapActions('user', ['signIn', 'signUp', 'confirmUser']),
        async signup() {
            this.error = false
            try {
                this.user = await this.signUp({
                    username: this.email,
                    password: this.password,
                    name: this.name,
                    address: this.address
                })
                this.signedup = true
            } catch (err) {
                this.error = true
                this.errorMessage =
                    'There is something wrong with the information you have provided, we cannot sign you up right now.'
            }
        },
        async confirm() {
            this.error = false
            try {
                const result = await this.confirmUser({
                    username: this.email,
                    code: this.code,
                    password: this.password
                })
                if (!result) return
                this.$router.push('/')
            } catch (err) {
                this.error = true
                this.errorMessage =
                    'We cannot confirm the code you have provided, please try again.'
            }
        },
        async resend() {
            try {
                await Auth.resendSignUp(this.email)
                this.resent = true
            } catch (err) {
                this.error = true
                this.errorMessage =
                    'We cannot resend the code at the moment, sorry for the inconvenience.'
            }
        }
    }
}
</script>
