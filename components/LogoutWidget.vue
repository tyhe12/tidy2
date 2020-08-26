<template>
    <v-btn @click="logout" text tile large class="logout-widget full-width">
        Logout
    </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions('user', ['signOut']),
        ...mapActions('cleans', ['clear']),
        async logout() {
            await this.signOut()
            this.clear()
        }
    }
}
</script>

<style lang="scss" scoped>
.full-width {
    width: 100%;
}
</style>
