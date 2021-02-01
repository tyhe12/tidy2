<template>
    <v-hover>
        <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 8 : 2}`"
            max-width="450"
            height="152"
            class="pricing-card d-flex flex-column"
        >
            <v-spacer />
            <v-card-title primary-title class="pricing-card__title pb-0">
                <h3 class="title mb-0">{{ title }}</h3>
            </v-card-title>

            <v-card-text class="grey--text subtitle-2 pricing-card__subtitle">
                {{ subtitle }}
            </v-card-text>
            <v-spacer />
            <v-divider light></v-divider>

            <v-card-actions v-if="!hidePrice" class="pricing-section body-2">
                <div class="estimate">
                    {{ hourly ? 'Hourly Rate' : 'Estimate' }}
                </div>
                <v-spacer></v-spacer>
                <div class="price">{{ priceTag }}</div>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: {
        price: {
            type: Number,
            required: true,
            default: 0
        },
        title: {
            type: String,
            require: true,
            default: 'title'
        },
        subtitle: {
            type: String,
            default: ''
        },
        hourly: {
            type: Boolean,
            default: false
        },
        hidePrice: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        priceTag() {
            return this.hourly ? `$${this.price}/hr` : `$${this.price}`
        }
    }
}
</script>

<style scoped lang="scss">
.pricing-card {
    margin: 0 auto;
}

.pricing-section {
    height: 36px;
}

.pricing-card__subtitle {
    word-break: break-word;
}
</style>
