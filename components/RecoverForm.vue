<template>
    <div class="recover-form">
        <v-alert v-if="error" type="error">
            {{ errorMessage }}
        </v-alert>
        <div v-if="stepOne" class="step-one">
            <validation-observer ref="observer-step-one" v-slot="{ invalid }">
                <v-form ref="form" v-model="valid">
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
                            hint="Please enter your e-mail"
                            required
                        ></v-text-field>
                    </validation-provider>

                    <v-btn
                        :disabled="invalid"
                        @click="submit"
                        color="primary"
                        class="mt-4"
                    >
                        Submit
                    </v-btn>
                </v-form>
            </validation-observer>
        </div>

        <div v-else class="step-two">
            <v-alert type="info">
                You should have received the confirmation code, please enter
                below to confirm with your new password
            </v-alert>
            <validation-observer ref="observer-step-two" v-slot="{ invalid }">
                <v-form ref="form" v-model="valid">
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
                            label="Password"
                            hint="Please confirm your password"
                            required
                        ></v-text-field>
                    </validation-provider>

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
                        Confirm
                    </v-btn>
                </v-form>
            </validation-observer>
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
        email: '',
        password: '',
        passwordCopy: '',
        code: '',
        stepOne: true,
        error: false,
        errorMessage: ''
    }),
    methods: {
        ...mapActions('user', ['signIn']),
        async submit() {
            this.user = await Auth.forgotPassword(this.email)
            this.stepOne = false
        },
        async confirm() {
            this.error = false
            try {
                await Auth.forgotPasswordSubmit(
                    this.email,
                    this.code,
                    this.password
                )
                this.signIn({
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
