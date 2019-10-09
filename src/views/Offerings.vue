<template>
    <v-layout align-center row wrap class="mb-4">
        <v-flex xs12>
            <v-tabs
                v-model="active"
                color="grey lighten-3"
                centered
                grow
                slider-color="pink lighten-3"
            >
                <v-tab
                    class="offerings__tab"
                    v-for="(tab, index) in tabs"
                    :key="index"
                    ripple
                >
                    <span class="title offerings__tab-title">
                        {{ tab.name }}
                    </span>
                </v-tab>
            </v-tabs>
        </v-flex>

        <v-tabs-items v-model="active">
            <v-tab-item v-for="(tab, index) in tabs" :key="index">
                <v-layout align-center row wrap class="section">
                    <v-flex
                        xs12
                        md6
                        v-for="(item, idx) in tab.items"
                        :key="idx"
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
</template>

<script>
import PricingCard from '../components/PricingCard.vue'

export default {
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
                title: 'Winter/Spring Clean',
                price: 45,
                subtitle:
                    'Regular cleaning and hard-to-reach corners, you need this twice a year!',
                hourly: true
            },
            {
                title: 'Pre-party Clean',
                price: 40,
                subtitle: 'Common Areas, Prices vary with sizes',
                hourly: true
            },
            {
                title: 'After Party Clean',
                price: 45,
                subtitle: 'Prices vary with sizes',
                hourly: true
            },
            {
                title: 'Move In/Out Clean',
                price: 120,
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
                title: 'Wash, Dry & Fold',
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
    }
}
</script>

<style scoped lang="scss">
.page-header {
    margin-bottom: 24px;
}

.offerings__tab {
    width: 50%;
}

.offerings__tab-title {
    color: black;
}
</style>
