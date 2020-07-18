<template>
    <div class="dashboard-component">
        <v-card>
            <div></div>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }
}
</script>
