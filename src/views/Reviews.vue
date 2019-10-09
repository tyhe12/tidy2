<template>
    <div class="reviews">
        <v-alert
            v-model="showAlert"
            type="success"
            transition="fade-transition"
            dismissible
        >
            Your review has been submitted! We really appreciate your review!
        </v-alert>
        <v-layout align-center justify-center row wrap>
            <v-flex xs12 class="d-flex justify-end">
                <v-btn
                    class="write-review-button"
                    color="primary"
                    @click="$vuetify.goTo(target, options)"
                >
                    Write a Review
                </v-btn>
            </v-flex>

            <v-flex xs12 v-for="(review, index) in reviews" :key="index">
                <review-card :rating="review.rating" :title="review.title">
                    {{ review.review }}
                </review-card>
            </v-flex>

            <v-flex xs12>
                <review-form
                    id="review-form"
                    @submit="submitHandler"
                ></review-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReviewCard from '../components/ReviewCard.vue'
import ReviewForm from '../components/ReviewForm.vue'

export default {
    components: {
        ReviewCard,
        ReviewForm
    },
    data: () => ({
        showAlert: false,
        target: '#review-form',
        options: {
            offset: 10
        }
    }),
    computed: {
        ...mapGetters(['reviews', 'reviewsCount'])
    },
    methods: {
        submitHandler(review) {
            this.$store.dispatch('addReview', review)
            this.showAlert = true
        }
    }
}
</script>

<style scoped lang="scss">
.write-review-button {
    flex: none !important;
}
</style>
