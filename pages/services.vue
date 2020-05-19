<template>
    <v-container grid-list-lg>
        <v-layout align-center row wrap class="mb-4">
            <v-flex xs12>
                <v-tabs
                    v-model="active"
                    background-color="blue-grey lighten-5"
                    centered
                    grow
                    slider-color="pink lighten-3"
                >
                    <v-tab
                        v-for="(tab, index) in tabs"
                        :key="index"
                        class="services__tab"
                        ripple
                    >
                        <span class="title services__tab-title">
                            {{ tab.name }}
                        </span>
                    </v-tab>
                </v-tabs>
            </v-flex>

            <v-tabs-items v-model="active" class="services__tabs-items">
                <v-tab-item v-for="(tab, index) in tabs" :key="index">
                    <v-layout align-center row wrap class="section">
                        <v-flex
                            v-for="(item, idx) in tab.items"
                            :key="idx"
                            xs12
                            md6
                        >
                            <pricing-card
                                :title="item.title"
                                :price="item.price"
                                :subtitle="item.subtitle"
                                :hourly="item.hourly"
                            />
                        </v-flex>
                    </v-layout>
                </v-tab-item>
            </v-tabs-items>
        </v-layout>
    </v-container>
</template>

<script>
import PricingCard from '../components/PricingCard.vue'

export default {
    scrollToTop: true,
    components: {
        PricingCard
    },
    data: () => {
        const cleans = [
            {
                title: 'Studio/One Bedroom',
                price: 80
            },
            {
                title: 'Two Bedroom',
                price: 90
            },
            {
                title: 'Three Bedroom',
                price: 120
            },
            {
                title: 'Condo/House 1000-3000 Sq. ft',
                price: 45,
                hourly: true
            },
            {
                title: 'Condo/House over 3000 Sq. ft',
                price: 50,
                hourly: true
            },
            {
                title: 'Office Clean',
                price: 40,
                hourly: true
            },
            {
                title: 'Special Event Clean',
                price: 45,
                hourly: true
            },
            {
                title: 'Airbnb Turnover Clean',
                price: 40,
                hourly: true
            },
            {
                title: 'Condo Association Clean',
                price: 40,
                hourly: true
            },
            {
                title: 'Move In/Out Clean',
                price: 120,
                subtitle: 'Prices vary with sizes'
            },
            {
                title: 'Individual Room Clean',
                price: 25,
                subtitle: 'Prices vary with sizes'
            }
        ]
        const addons = [
            {
                title: 'Interior Window Clean',
                price: 30
            },
            {
                title: 'Interior Refrigerator Clean',
                price: 35
            },
            {
                title: 'Interior Oven Clean',
                price: 30
            },
            {
                title: 'Laundry - Wash, Dry & Fold',
                price: 35,
                subtitle: 'Up to 2 loads, Additional $5/load'
            },
            {
                title: 'General Closet Organization',
                price: 40,
                subtitle: 'Up to 2 closets, Additional $25/closet'
            },
            {
                title: 'General Cabinet Organization',
                price: 40
            }
        ]
        return {
            active: null,
            tabs: [
                {
                    name: 'Services',
                    key: 'cleans',
                    items: cleans
                },
                {
                    name: 'Add-on Services',
                    key: 'addons',
                    items: addons
                }
            ]
        }
    },
    head() {
        return {
            title: 'Services Provided',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Cleaning with Cooley offer different services to meet each customer needs. We offer hourly cleaning services and flat rate cleaning services. Our cleaning company want to accommodate everyone, so we also offer office cleaning and commercial cleaning. We have so many add on services for cleaning needs. We Clean interior/exterior of refrigeration and ovens. We clean windows, we offer a laundry service and general organization.'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.page-header {
    margin-bottom: 24px;
}

.services__tab {
    width: 50%;
}

.services__tab-title {
    color: black;
}

.services__tabs-items {
    background-color: transparent !important;
}
</style>
