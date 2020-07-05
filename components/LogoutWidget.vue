<template>
    <v-btn @click="logout" text tile large class="logout-widget full-width">
        Logout
    </v-btn>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$store.dispatch('user/signOut')
        }
    }
}
</script>

<style lang="scss" scoped>
.full-width {
    width: 100%;
}
</style>
