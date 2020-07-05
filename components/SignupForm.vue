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
                            label="Your Name"
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
                        @click="confirm"
                        color="primary"
                        class="mt-4"
                    >
                        Confirm Code
                    </v-btn>
                </v-form>
            </validation-observer>
        </div>
    </div>
</template>

<script>
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
        terms: false,
        signedup: false,
        confirmed: false,
        user: {},
        error: false,
        errorMessage: ''
    }),
    methods: {
        async signup() {
            this.error = false
            try {
                this.user = await Auth.signUp({
                    username: this.email,
                    password: this.password,
                    attributes: {
                        email: this.email,
                        name: this.name
                    }
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
                await Auth.confirmSignUp(this.email, this.code)
                this.$store.dispatch('user/signIn', {
                    email: this.email,
                    password: this.password
                })
                this.$router.push('/')
            } catch (err) {
                this.error = true
                this.errorMessage =
                    'We cannot confirm the code you have provided, please try again.'
            }
        }
    }
}
</script>
