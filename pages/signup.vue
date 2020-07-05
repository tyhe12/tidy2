<template>
    <div class="signup-page">
        <v-container>
            <v-row align-content="center">
                <v-col cols="12">
                    <v-card>
                        <v-card-title>
                            <h2>Starts to clean with Cooley</h2>
                        </v-card-title>
                        <v-card-text>
                            <signup-form />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import SignupForm from '~/components/SignupForm'

export default {
    components: {
        SignupForm
    }
}
</script>
