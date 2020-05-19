<template>
    <div v-resize="onResize" class="home">
        <section class="section--big">
            <v-row align="center">
                <v-col class="mt-0 pt-0" cols="12">
                    <v-carousel
                        :show-arrows="false"
                        hide-delimiters
                        continuous
                        height="600"
                        cycle
                    >
                        <v-carousel-item
                            v-for="(item, i) in items"
                            :key="i"
                            :src="item.src"
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </section>

        <section class="section--big">
            <v-container>
                <v-row align="stretch">
                    <v-col
                        cols="12"
                        class="headline font-weight-bold headline-text text-center"
                    >
                        What is Cleaning with Cooley
                    </v-col>

                    <v-col cols="12">
                        <v-row align="stretch" align-content="center">
                            <v-col
                                v-for="(item, index) in summarySection"
                                :key="index"
                                cols="12"
                                md="4"
                                class="pa-3 card-container"
                            >
                                <v-row justify="center">
                                    <simple-card
                                        :height="isMedium ? 320 : 270"
                                        :icon="item.icon"
                                        :title="item.title"
                                        class="mx-2"
                                        max-width="400"
                                    >
                                        {{ item.text }}
                                    </simple-card>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="section--big grey lighten-4 py-8">
            <v-container>
                <v-row justify="center">
                    <v-col
                        cols="12"
                        class="headline font-weight-bold headline-text text-center"
                    >
                        Why Clean with Cooley
                    </v-col>

                    <v-col cols="12">
                        <v-row
                            v-for="(row, rowid) in benefitSection"
                            :key="rowid"
                            class="my-4"
                            align="stretch"
                            justify="center"
                        >
                            <simple-card
                                v-for="(card, idx) in row"
                                :key="idx"
                                :icon="card.icon"
                                :title="card.title"
                                class="ma-4"
                                max-width="400"
                                height="100%"
                            >
                                {{ card.text }}
                            </simple-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- <section class="section--big">
            <v-layout class="py-8" align-center justify-center row wrap>
                <v-flex xs12 md6 order-md2>
                    <div
                        class="headline font-weight-bold headline-text text-center"
                    >
                        Referral Incentives
                    </div>
                    <p class="text-center subheading" color="pink lighten-3">
                        Get 20% off your next clean and get your friend 20% off.
                    </p>
                    <p class="text-center subheading" color="pink lighten-3">
                        Get a free clean when you refer 3 friends.
                    </p>
                    <p class="text-center subheading" color="pink lighten-3">
                        *Contact for more details.
                    </p>
                </v-flex>
                <v-flex xs12 md6 d-flex align-center justify-center>
                    <v-avatar :size="imgSize">
                        <img :src="livingRoomImg" alt="Living room avatar" />
                    </v-avatar>
                </v-flex>
            </v-layout>
        </section> -->

        <section class="section--big">
            <v-container>
                <v-row align="stretch">
                    <v-col
                        cols="12"
                        class="headline font-weight-bold headline-text text-center"
                    >
                        Cooley's Royalty Program
                    </v-col>

                    <v-col cols="12">
                        <v-row align="stretch" align-content="center">
                            <v-col
                                v-for="(item, index) in royaltySection"
                                :key="index"
                                cols="12"
                                md="4"
                                class="pa-3 card-container"
                            >
                                <v-row justify="center">
                                    <simple-card
                                        :icon="item.icon"
                                        :title="item.title"
                                        height="100%"
                                        class="mx-2"
                                        max-width="400"
                                    >
                                        {{ item.text }}
                                    </simple-card>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="section--big">
            <v-row class="d-flex justify-center py-8">
                <v-btn to="/services" large class="ma-8 px-8" color="primary"
                    >Check Out Our Services</v-btn
                >
                <v-btn
                    href="mailto:info@cleaningwithcooley.com"
                    large
                    class="ma-8 px-8"
                    color="primary"
                    >Contact Us Today</v-btn
                >
            </v-row>
        </section>
    </div>
</template>

<script>
import SimpleCard from '@/components/SimpleCard'
import CarouselImage1 from '~/assets/img/carousel_1.jpg'
import CarouselImage2 from '~/assets/img/carousel_2.jpg'
import CarouselImage3 from '~/assets/img/carousel_3.jpg'
import CarouselImage4 from '~/assets/img/carousel_4.jpg'
import BondedImage from '~/assets/img/bonded.png'
import RoundLogo from '~/assets/img/logo_round.png'
import LivingRoom from '~/assets/img/living.jpg'

export default {
    scrollToTop: true,
    components: {
        SimpleCard
    },
    data() {
        return {
            windowSize: {
                x: 0,
                y: 0
            },
            bondedImg: BondedImage,
            roundLogo: RoundLogo,
            livingRoomImg: LivingRoom,
            imgSize: 200,
            items: [
                {
                    src: CarouselImage1
                },
                {
                    src: CarouselImage2
                },
                {
                    src: CarouselImage3
                },
                {
                    src: CarouselImage4
                }
            ],
            summarySection: [
                {
                    title: 'Who We Are',
                    icon: 'fas fa-user-tie',
                    text:
                        'Cleaning with Cooley is a Chicago Cleaning Service located in the downtown Chicago area. We offer a wide range of services to residential clients and business owners, from general room cleaning, office cleaning and much more!'
                },
                {
                    title: 'Our Mission',
                    icon: 'fas fa-bullseye',
                    text:
                        'Our goal is to provide a clean and a positive atmosphere in our clients’ home by delivering world class customer service and cleaning. We value open and honest relationships with our clients and love giving them a little time back in their week to focus on their goals. We want to always deliver the “Wow” through our services.'
                },
                {
                    title: 'What We Do',
                    icon: 'fas fa-hand-sparkles',
                    text:
                        'We tailored our residential and commercial cleaning service to make sure every space - whether it’s a studio apartment in Wicker Park, a brownstone in Lincoln Park, or an office in The Loop - is as beautiful as it can be with complete satisfaction!'
                }
            ],
            benefitSection: [
                [
                    {
                        title: 'Eco Friendly',
                        icon: 'fas fa-leaf',
                        text:
                            'We offer Eco-friendly house cleaning products that don’t contain harsh nor harmful chemicals.  We always want to help you maintain a clean & healthy home.'
                    },
                    {
                        title: 'Licensed, Insured & Bonded',
                        icon: 'fas fa-shield-alt',
                        text:
                            'Cleaning with Cooley is fully Licensed, Bonded & Insured to protect your home and give you a piece of mind.'
                    }
                ],
                [
                    {
                        title: 'Great Customer Service',
                        icon: 'fas fa-smile',
                        text:
                            'Our #1 goal is to deliver world class customers service to our clients. We provide exceptional training to all our professional housekeepers/cleaners.  All our employees undergo a back ground check because we value open and honest relationships with our clients. We always want to provide a clean and positive atmosphere in our clients’ home!'
                    },
                    {
                        title: '100% Satisfaction Guarantee',
                        icon: 'fas fa-thumbs-up',
                        text:
                            'It’s rare to find a company that stands behind its work. If for any reason you’re not satisfied with our work let us know within 48 hours and we will return to re-clean any of the areas missed free of charge!  Our goal is to always put you and your home first.'
                    }
                ]
            ],
            royaltySection: [
                {
                    title: 'New Customer',
                    icon: 'fas fa-broom',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    title: 'Referral Incentives',
                    icon: 'fas fa-user-friends',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    title: 'Discounted Cleaning',
                    icon: 'fas fa-tags',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        }
    },
    head() {
        return {
            title: 'Home',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Cleaning with Cooley is a housekeeping company here to make your home sparkle. We take pride in our work. We care about the details, use only eco-friendly products, and customize our service to fit your specific needs. Our customers love us, and we know you will too!'
                }
            ]
        }
    },
    computed: {
        isMedium() {
            return this.windowSize.x > 960 && this.windowSize.x < 1264
        }
    },
    mounted() {
        this.onResize()
    },
    methods: {
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        }
    }
}
</script>

<style lang="scss" scoped>
// .home-large-botton {
//     font-size: ;
// }

.v-carousel--reveal {
    display: flex;
    align-items: center;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
    background: rgba(244, 143, 177, 0.7);
    position: absolute;
    width: 100%;
}

.v-carousel__headline {
    margin-bottom: 32px;
}

.v-carousel__text {
    max-width: 600px;
}

.headline-card {
    margin-left: auto;
    margin-right: auto;
}

.headline-text {
    padding-top: 32px;
    padding-bottom: 32px;
}

.list-text {
    width: 100%;
}
</style>
