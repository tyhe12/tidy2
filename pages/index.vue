<template>
    <div class="home">
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
                        <v-row align="stretch">
                            <v-col cols="12" md="4" class="pa-3 card-container">
                                <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    height="320"
                                >
                                    <v-card-title>
                                        <v-icon
                                            color="primary"
                                            large
                                            left
                                            class="mr-4"
                                        >
                                            fas fa-user-tie
                                        </v-icon>
                                        <span class="title font-weight-bold"
                                            >Who We Are</span
                                        >
                                    </v-card-title>
                                    <v-card-text class="subheading">
                                        Cleaning with Cooley is a Chicago
                                        Cleaning Service located in the downtown
                                        Chicago area. We offer a wide range of
                                        services to residential clients and
                                        business owners, from general room
                                        cleaning, office cleaning and much more!
                                    </v-card-text>
                                </v-card>
                            </v-col>

                            <v-col cols="12" md="4" class="pa-3 card-container">
                                <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    height="320"
                                >
                                    <v-card-title>
                                        <v-icon
                                            color="primary"
                                            large
                                            left
                                            class="mr-4"
                                        >
                                            fas fa-bullseye
                                        </v-icon>
                                        <span class="title font-weight-bold"
                                            >Our Mission</span
                                        >
                                    </v-card-title>

                                    <v-card-text class="subheading">
                                        Our goal is to provide a clean and a
                                        positive atmosphere in our clients’ home
                                        by delivering world class customer
                                        service and cleaning. We value open and
                                        honest relationships with our clients
                                        and love giving them a little time back
                                        in their week to focus on their goals.
                                        We want to always deliver the “Wow”
                                        through our services.
                                    </v-card-text>
                                </v-card>
                            </v-col>

                            <v-col cols="12" md="4" class="pa-3 card-container">
                                <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    height="320"
                                >
                                    <v-card-title>
                                        <v-icon
                                            color="primary"
                                            large
                                            left
                                            class="mr-4"
                                        >
                                            fas fa-hand-sparkles
                                        </v-icon>
                                        <span class="title font-weight-bold"
                                            >What We Do</span
                                        >
                                    </v-card-title>

                                    <v-card-text class="subheading">
                                        We tailored Our residential and
                                        commercial cleaning service to make sure
                                        every space - whether it’s a studio
                                        apartment in Wicker Park, a brownstone
                                        in Lincoln Park, or an office in The
                                        Loop - is as beautiful as it can be.
                                    </v-card-text>
                                </v-card>
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
                        <v-row class="my-4" align="stretch" justify="center">
                            <v-card
                                class="card-container ma-4"
                                max-width="400"
                                height="100%"
                            >
                                <v-card-title>
                                    <v-icon
                                        color="primary"
                                        large
                                        left
                                        class="mr-4"
                                    >
                                        fas fa-leaf
                                    </v-icon>
                                    <span class="title font-weight-bold"
                                        >Eco Friendly</span
                                    >
                                </v-card-title>

                                <v-card-text class="subheading">
                                    Our goal is to provide a clean and a
                                    positive atmosphere in our clients’ home by
                                    delivering world class customer service and
                                    cleaning. We value open and honest
                                    relationships with our clients and love
                                    giving them a little time back in their week
                                    to focus on their goals. We want to always
                                    deliver the “Wow” through our services.
                                </v-card-text>
                            </v-card>

                            <v-card
                                class="card-container ma-4"
                                max-width="400"
                                height="100%"
                            >
                                <v-card-title>
                                    <v-icon
                                        color="primary"
                                        large
                                        left
                                        class="mr-4"
                                    >
                                        fas fa-id-badge
                                    </v-icon>
                                    <span class="title font-weight-bold"
                                        >Licensed, Insured &amp; Bonded</span
                                    >
                                </v-card-title>

                                <v-card-text class="subheading">
                                    Our goal is to provide a clean and a
                                    positive atmosphere in our clients’ home by
                                    delivering world class customer service and
                                    cleaning. We value open and honest
                                    relationships with our clients and love
                                    giving them a little time back in their week
                                    to focus on their goals. We want to always
                                    deliver the “Wow” through our services.
                                </v-card-text>
                            </v-card>
                        </v-row>

                        <v-row class="my-4" align="stretch" justify="center">
                            <v-card
                                class="card-container ma-4"
                                max-width="400"
                                height="100%"
                            >
                                <v-card-title>
                                    <v-icon
                                        color="primary"
                                        large
                                        left
                                        class="mr-4"
                                    >
                                        fas fa-smile
                                    </v-icon>
                                    <span class="title font-weight-bold"
                                        >Great Customer Service</span
                                    >
                                </v-card-title>

                                <v-card-text class="subheading">
                                    Our goal is to provide a clean and a
                                    positive atmosphere in our clients’ home by
                                    delivering world class customer service and
                                    cleaning. We value open and honest
                                    relationships with our clients and love
                                    giving them a little time back in their week
                                    to focus on their goals. We want to always
                                    deliver the “Wow” through our services.
                                </v-card-text>
                            </v-card>

                            <v-card
                                class="card-container ma-4"
                                max-width="400"
                                height="100%"
                            >
                                <v-card-title>
                                    <v-icon
                                        color="primary"
                                        large
                                        left
                                        class="mr-4"
                                    >
                                        fas fa-thumbs-up
                                    </v-icon>
                                    <span class="title font-weight-bold"
                                        >100% Satisfaction Guarantee
                                    </span>
                                </v-card-title>

                                <v-card-text class="subheading">
                                    Our goal is to provide a clean and a
                                    positive atmosphere in our clients’ home by
                                    delivering world class customer service and
                                    cleaning. We value open and honest
                                    relationships with our clients and love
                                    giving them a little time back in their week
                                    to focus on their goals. We want to always
                                    deliver the “Wow” through our services.
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="section--big">
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
        </section>

        <section class="section--big">
            <v-row class="d-flex justify-center py-8">
                <v-btn to="/services" large class="ma-8" color="primary"
                    >Check Out Our Services</v-btn
                >
                <v-btn
                    href="mailto:info@cleaningwithcooley.com"
                    large
                    class="ma-8"
                    color="primary"
                    >Start Cleaning With Cooley</v-btn
                >
            </v-row>
        </section>
    </div>
</template>

<script>
import CarouselImage1 from '~/assets/img/carousel_1.jpg'
import CarouselImage2 from '~/assets/img/carousel_2.jpg'
import CarouselImage3 from '~/assets/img/carousel_3.jpg'
import CarouselImage4 from '~/assets/img/carousel_4.jpg'
import BondedImage from '~/assets/img/bonded.png'
import RoundLogo from '~/assets/img/logo_round.png'
import LivingRoom from '~/assets/img/living.jpg'

export default {
    scrollToTop: true,
    data() {
        return {
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
    }
}
</script>

<style lang="scss" scoped>
// .section--gray {
//     background-color: ;
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

.card-container {
    height: 100%;
}
</style>
