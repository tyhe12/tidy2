<template>
    <div class="recover-page">
        <v-container>
            <v-row align-content="center">
                <v-col cols="12">
                    <v-card>
                        <v-card-title>
                            <h2>Reset Password</h2>
                        </v-card-title>
                        <v-card-text>
                            <recover-form />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import RecoverForm from '~/components/RecoverForm'

export default {
    components: {
        RecoverForm
    }
}
</script>
