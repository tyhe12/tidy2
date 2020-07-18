<template>
    <div class="login-widget">
        <div v-if="error" class="errors">
            <v-alert type="error"> {{ errorMessage }} </v-alert>
        </div>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <v-form ref="form">
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

                <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required|password:8"
                >
                    <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        :append-icon="show ? 'far fa-eye' : 'far fa-eye-slash'"
                        :type="show ? 'text' : 'password'"
                        @click:append="show = !show"
                        label="Password"
                        hint="Please enter your password"
                        required
                    ></v-text-field>
                </validation-provider>

                <div class="d-flex justify-end">
                    <v-btn
                        :disabled="invalid"
                        @click="login"
                        color="primary"
                        class="mt-4"
                    >
                        Login
                    </v-btn>
                </div>
            </v-form>
        </validation-observer>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
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
        error: false,
        errorMessage: '',
        show: false
    }),
    methods: {
        ...mapActions('user', ['signIn']),
        async login() {
            this.error = false
            try {
                await this.signIn({
                    email: this.email,
                    password: this.password
                })
                this.$router.push('/')
            } catch (err) {
                // return error message
                this.error = true
                if (
                    [
                        'UserNotFoundException',
                        'NotAuthorizedException'
                    ].includes(err.code)
                ) {
                    this.errorMessage =
                        'Incorrect credential entered. Please try again.'
                } else {
                    this.errorMessage =
                        'Something wrong at our side. We are fixing them soon.'
                }
            }
        },
        validate() {
            this.$refs.observer.validate()
        }
    }
}
</script>
