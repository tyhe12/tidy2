<template>
    <v-expansion-panel expand class="faq-item">
        <v-expansion-panel-header>
            <template v-slot:header class="faq-item__title">
                <div class="title">{{ title }}</div>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <template v-slot:actions>
                <v-icon>fa-angle-up</v-icon>
            </template>
            <slot />
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.faq-item {
    width: 100%;
}

.v-expansion-panel__container--active .v-expansion-panel__header {
    border-bottom: 1px solid #e0e0e0;
}
</style>
