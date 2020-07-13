<template>
    <v-container grid-list-lg class="reviews">
        <v-row align-center justify-center>
            <v-col cols="12" class="d-flex justify-end">
                <v-btn
                    @click="$vuetify.goTo(target, options)"
                    class="write-review-button"
                    color="primary"
                    aria-label="Write a Review"
                >
                    Write a Review
                </v-btn>
            </v-col>

            <v-col v-for="(review, index) in reviews" :key="index" cols="12">
                <review-card :rating="review.rating" :title="review.title">
                    {{ review.review }}
                </review-card>
            </v-col>

            <v-container v-if="loading">
                <v-skeleton-loader
                    v-for="n in 5"
                    :key="n"
                    :loading="loading"
                    class="mb-4"
                    type="article"
                ></v-skeleton-loader>
            </v-container>

            <v-col cols="12">
                <review-form
                    id="review-form"
                    :user="user"
                    :loggedIn="signedIn"
                    @submit="submitHandler"
                ></review-form>
            </v-col>

            <v-col cols="12">
                <div v-if="!signedIn" class="alert__info">
                    <v-alert type="info">
                        Please log in to leave us a review
                    </v-alert>
                </div>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="showAlert"
            :timeout="timeout"
            top
            color="primary"
            class="title review-form__snackbar"
        >
            Your review has been submitted! We really appreciate your review!
        </v-snackbar>
    </v-container>
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
            reviewsCount: 'reviews/count',
            user: 'user/user',
            signedIn: 'user/signedIn',
            token: 'user/token'
        }),
        loading() {
            return this.reviewsCount === 0
        }
    },
    fetch({ store }) {
        store.dispatch('reviews/load')
    },
    created() {
        // seems like a hack
        if (!this.reviewsCount) {
            this.$store.dispatch('reviews/load')
        }
    },
    methods: {
        submitHandler(review) {
            this.$store.dispatch('reviews/add', {
                review,
                token: this.token
            })
            this.showAlert = true
        }
    },
    head() {
        return {
            title: 'Reviews',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Cleaning with Cooley love to hear from our clients. We made a page for everyone to write about their experience with Cleaning with Cooley. We love to hear feedback on your experience with our company and also this gives us ways to improve and keep excelling for our customers.'
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
