<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <v-card>
                <v-layout align-center justify-center row wrap>
                    <v-flex xs12>
                        <v-card-title>
                            <span
                                class="about-title display-1 font-weight-light text-center text-uppercase"
                                >Who I Am</span
                            >
                        </v-card-title>
                    </v-flex>

                    <v-flex xs12 d-flex justify-center>
                        <v-avatar size="200">
                            <img :src="headshot" alt="avatar" />
                        </v-avatar>
                    </v-flex>

                    <v-flex xs12>
                        <v-card-text class="font-weight-bold">
                            <p class="body-1">
                                I started Cleaning with Cooley in 2018. After
                                keeping homes for over 15 years, I found that a
                                successful clean depended on attention to
                                detail, quality products and absolute integrity.
                            </p>

                            <p class="body-1">
                                I take pride in my work and believe in open,
                                honest relationships with my clients. Their
                                trust is the highest compliment they can give
                                me.
                            </p>

                            <p class="body-1">
                                My mission is to give every customer a little
                                time back each week by keeping their home clean
                                and beautiful so they can focus on their goals.
                            </p>

                            <p class="body-1">
                                Outside of the business, I enjoy reading, a good
                                Netflix binge and traveling.
                            </p>

                            <p class="body-1 mt-5 mb-0">
                                Tracy Cooley, Cleaning with Cooley LLC
                            </p>

                            <p class="body-1">
                                Founder and CEO
                            </p>

                            <p class="body-1">
                                Privately owned and operated company.
                            </p>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout>
</template>

<script>
import Headshot from '../assets/img/headshot.png'

export default {
    data: () => ({
        headshot: Headshot
    }),
    metaInfo: {
        title: 'About',
        meta: [
            {
                name: 'description',
                content: 'About page for Cleaning With Cooley'
            }
        ]
    }
}
</script>

<style lang="scss" scoped>
.about-title {
    width: 100%;
}
</style>
