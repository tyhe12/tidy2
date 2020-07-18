<template>
    <div class="dashboard-page">
        <v-container>
            <div v-if="signedIn" class="dashboard-content">
                <v-row>
                    <v-col cols="12">
                        <h2>You are logged in as {{ user.name }}</h2>
                    </v-col>
                </v-row>
            </div>
            <div v-else class="dashboard-content">
                <v-row>
                    <v-col cols="12">
                        <h2>Please log in to access this page.</h2>
                    </v-col>
                    <v-col cols="12">
                        <v-btn to="/login">Log in</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            user: 'user/user',
            signedIn: 'user/signedIn',
            token: 'user/token'
        })
    }
}
</script>
