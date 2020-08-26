<template>
    <v-card class="review-card">
        <v-card-title primary-title>
            <v-layout align-center row wrap class="review-title">
                <v-flex xs12 sm6>
                    <h3 class="title mb-0">{{ title }}</h3>
                    <h4 class="caption font-weight-light">
                        {{ date.toLocaleDateString() }}
                    </h4>
                </v-flex>
                <v-flex xs12 sm6>
                    <star-rating
                        v-model="rating"
                        background-color="pink lighten-3"
                        color="pink"
                        readonly
                        small-right
                    ></star-rating>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text class="review-card__text body-2">
            <slot />
        </v-card-text>
    </v-card>
</template>

<script>
import StarRating from './StarRating.vue'

export default {
    components: {
        StarRating
    },
    props: {
        rating: {
            type: Number,
            default: 5
        },
        title: {
            type: String,
            default: ''
        },
        date: {
            type: Date,
            default: () => new Date()
        }
    }
}
</script>

<style scoped lang="scss">
.review-card__text {
    margin-top: 0;
    padding-top: 0;
}
</style>
