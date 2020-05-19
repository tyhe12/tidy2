<template>
    <div class="simple-card">
        <v-card :max-width="maxWidth" :height="height" class="card-container">
            <v-card-title v-if="title">
                <v-icon color="primary" large left class="mr-4">
                    {{ icon }}
                </v-icon>
                <span class="title font-weight-bold">{{ title }}</span>
            </v-card-title>

            <v-card-text class="subheading">
                <slot />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'SimpleCard',
    props: {
        height: {
            type: [String, Number],
            default: '100%'
        },
        maxWidth: {
            type: [String, Number],
            default: '100%'
        },
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
