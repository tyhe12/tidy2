<template>
    <div>
        <v-layout align-center class="section--big">
            <v-flex xs12>
                <v-hover>
                    <v-carousel
                        slot-scope="{ hover }"
                        :show-arrows="false"
                        hide-delimiters
                        continuous
                        cycle
                    >
                        <v-carousel-item
                            v-for="(item, i) in items"
                            :key="i"
                            :src="item.src"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="v-carousel--reveal white--text"
                                    style="height: 100%;"
                                >
                                    <div
                                        class="font-weight-bold headline text-xs-center v-carousel__headline"
                                    >
                                        "Cleaning with Cooley Mission Statement"
                                    </div>
                                    <div
                                        class="text-xs-center subheading v-carousel__text"
                                    >
                                        We are here to provide a clean and a
                                        positive atmosphere in our clients’ home
                                        by delivering world class customer
                                        service and cleaning. We value open and
                                        honest relationships with our clients
                                        and love giving them a little time back
                                        in their week to focus on their goals.
                                        We want to always deliver the “Wow”
                                        through our services.
                                    </div>
                                </div>
                            </v-expand-transition>
                        </v-carousel-item>
                    </v-carousel>
                </v-hover>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md7>
                <div
                    class="headline font-weight-bold headline-text text-center"
                >
                    "Mission Statement"
                </div>
                <p class="text-center subheading" color="pink lighten-3">
                    Our goal is to provide a clean and a positive atmosphere in
                    our clients’ home by delivering world class customer service
                    and cleaning. We value open and honest relationships with
                    our clients and love giving them a little time back in their
                    week to focus on their goals. We want to always deliver the
                    “Wow” through our services.
                </p>
            </v-flex>
            <v-flex xs12 md5 d-flex align-center justify-center>
                <v-img
                    :src="roundLogo"
                    :height="imgSize"
                    :width="imgSize"
                    contain
                    alt="Logo"
                ></v-img>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md6 order-md2>
                <div
                    class="headline font-weight-bold headline-text text-center"
                >
                    "Referral Incentives"
                </div>
                <p class="text-center subheading" color="pink lighten-3">
                    Get 25% off your next clean and get your friend 15% off.
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

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md6>
                <div
                    class="headline font-weight-bold headline-text text-center"
                >
                    "Why Clean With Cooley"
                </div>
                <v-list dense class="transparent">
                    <v-list-item>
                        <p class="list-text text-center subheading">
                            Licensed, Insured &amp; Bonded
                        </p>
                    </v-list-item>

                    <v-list-item>
                        <p class="list-text text-center subheading">
                            Background checked employees
                        </p>
                    </v-list-item>

                    <v-list-item>
                        <p class="list-text text-center subheading">
                            Eco friendly cleaning products
                        </p>
                    </v-list-item>

                    <v-list-item>
                        <p class="list-text text-center subheading">
                            Professionally trained and great customer service
                        </p>
                    </v-list-item>
                </v-list>
            </v-flex>
            <v-flex xs12 md6 d-flex align-center justify-center>
                <v-img
                    :src="bondedImg"
                    :height="imgSize"
                    :width="imgSize"
                    contain
                    alt="Bonded and Insured"
                ></v-img>
            </v-flex>
        </v-layout>
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
                    name: 'description',
                    content:
                        'Home page, Cleaning With Cooley is a privately owned house cleaning services based in Chicago. We take pride in our cleaning, and our goal is to provide a clean and a positive atmosphere for you'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
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
