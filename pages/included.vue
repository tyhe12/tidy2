<template>
    <v-layout align-center justify-center row wrap>
        <v-flex v-for="(room, index) in rooms" :key="index" xs12>
            <v-card color="included-section">
                <v-layout align-center row wrap>
                    <v-flex xs12 sm5>
                        <v-img
                            :src="room.img"
                            :alt="room.alt"
                            height="200px"
                            contain
                        ></v-img>
                    </v-flex>
                    <v-flex xs12 sm7>
                        <v-card-title primary-title>
                            <div class="title">
                                {{ room.title }}
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <p class="body-1">
                                {{ room.text }}
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
import Livingroom from '~/assets/img/livingroom.jpg'
import Kitchen from '~/assets/img/kitchen.jpg'
import Everyroom from '~/assets/img/everyroom.jpg'
import Bathroom from '~/assets/img/bathroom.jpg'

export default {
    scrollToTop: true,
    data: () => ({
        rooms: [
            {
                img: Livingroom,
                alt: 'Image of a cleaned living room',
                title: 'Bedrooms & Living Room',
                text:
                    'General tidying up, mirrors cleaned, make bed (change linen by request). Dust all accessible surfaces also wipe and clean window sills.'
            },
            {
                img: Bathroom,
                alt: 'Image of a cleaned bathroom',
                title: 'Bathrooms',
                text:
                    'Shower/bathtub and tile wall scrubbed clean and disinfected. Toilet scrubbed clean and disinfected including base and behind toilet. Vanity and sink scrubbed clean and disinfected, mirrors cleaned, fixtures cleaned and shined.'
            },
            {
                img: Kitchen,
                alt: 'Image of a cleaned kitchen',
                title: 'Kitchens',
                text:
                    'Clean the stovetop and backsplash. Clean and sanitize interior and exterior of microwave. Clean the exterior of appliances, clean and disinfect the sink. Hand-wash and disinfect counters, wipe down table and chairs. Cabinets wiped down. Hand-wipe outside of the trash can.'
            },
            {
                img: Everyroom,
                alt: 'Image of a cleaned room',
                title: 'Every Room',
                text:
                    'General tidying up, clean all floor surfaces (vacuum & mop). Dust exposed baseboards and remove smudges from light switch plates. Clean window sills and remove trash and recycling.'
            }
        ]
    }),
    head() {
        return {
            title: 'Services Included',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Cleaning with Cooley is very detailed and we try to make things easy as possible for our customers. Each room in your home is cleaned to perfection! We detail clean every room up to customer and company’s standards. Each room is cleaned, disinfected and scrubbed to perfection. Every room floors are vacuumed and mopped so everything can be clean and welcoming.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.included-title {
    margin-top: 32px;
}

.included-section {
    padding: 16px;
}
</style>
