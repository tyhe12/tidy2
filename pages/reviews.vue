<template>
    <div class="reviews">
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

            <v-flex v-for="(review, index) in reviews" :key="index" xs12>
                <review-card :rating="review.rating" :title="review.title">
                    {{ review.review }}
                </review-card>
            </v-flex>

            <v-container v-if="loading">
                <v-skeleton-loader
                    v-for="n in 5"
                    :key="n"
                    class="mb-4"
                    type="article"
                    :loading="loading"
                ></v-skeleton-loader>
            </v-container>

            <v-flex xs12>
                <review-form
                    id="review-form"
                    @submit="submitHandler"
                ></review-form>
            </v-flex>
        </v-layout>
        <v-snackbar
            v-model="showAlert"
            top
            color="primary"
            :timeout="timeout"
            class="title review-form__snackbar"
        >
            Your review has been submitted! We really appreciate your review!
        </v-snackbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReviewCard from '../components/ReviewCard.vue'
import ReviewForm from '../components/ReviewForm.vue'

export default {
    scrollToTop: true,
    components: {
        ReviewCard,
        ReviewForm
    },
    data: () => ({
        timeout: 5000,
        showAlert: false,
        target: '#review-form',
        options: {
            offset: 75
        }
    }),
    computed: {
        ...mapGetters({
            reviews: 'reviews/reviews',
            reviewsCount: 'reviews/count'
        }),
        loading() {
            return this.reviewsCount === 0
        }
    },
    fetch({ store }) {
        return store.dispatch('reviews/load')
    },
    methods: {
        submitHandler(review) {
            this.$store.dispatch('reviews/add', review)
            this.showAlert = true
        }
    },
    head() {
        return {
            title: 'Reviews',
            meta: [
                {
                    name: 'description',
                    content: 'Reviews page for Cleaning With Cooley'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.write-review-button {
    flex: none !important;
}

.review-form__snackbar {
    padding-left: 32px;
    padding-right: 32px;
}
</style>
