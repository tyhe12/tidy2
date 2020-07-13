<template>
    <v-card class="review-form">
        <v-card-text>
            <validation-observer ref="observer-review" v-slot="{ invalid }">
                <v-form ref="form">
                    <legend class="review-form__legend">
                        <h3 class="title mb-0">
                            Please leave us a review
                        </h3>
                    </legend>

                    <validation-provider
                        v-slot="{ errors }"
                        name="title"
                        rules="required"
                    >
                        <v-text-field
                            v-model="title"
                            :error-messages="errors"
                            name="Title"
                            label="Title"
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="review"
                        rules="required"
                    >
                        <v-textarea
                            v-model="review"
                            :error-messages="errors"
                            name="Review"
                            label="Please leave your comments here"
                            hint="Please tell us what you think to help us get better"
                        ></v-textarea>
                    </validation-provider>

                    <star-rating
                        v-model="rating"
                        background-color="pink lighten-3"
                        color="pink"
                        centered
                    ></star-rating>

                    <v-btn
                        @click="submit"
                        :disabled="!loggedIn || invalid"
                        color="primary"
                        aria-label="Submit"
                    >
                        Submit
                    </v-btn>
                </v-form>
            </validation-observer>
        </v-card-text>
    </v-card>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import StarRating from './StarRating.vue'

export default {
    components: {
        StarRating,
        ValidationObserver,
        ValidationProvider
    },
    props: {
        user: {
            type: Object,
            default: () => ({})
        },
        loggedIn: {
            type: Boolean,
            default: false
        }
    },
    data: () => {
        const rating = 5
        const title = null
        const review = null
        return {
            title,
            review,
            rating
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                // submit review
                this.$emit('submit', {
                    rating: this.rating,
                    title: this.title,
                    review: this.review,
                    user: this.email
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.review-form__legend {
    margin-bottom: 16px;
}
</style>
