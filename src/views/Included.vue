<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12 v-for="(room, index) in rooms" :key="index">
            <v-card color="included-section">
                <v-layout align-center row wrap>
                    <v-flex xs12 sm5>
                        <v-img :src="room.img" height="200px" contain></v-img>
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
import Livingroom from '../assets/img/blc.jpg'
import Kitchen from '../assets/img/kitchen.jpg'
import Everyroom from '../assets/img/everyroom.jpg'
import Bathroom from '../assets/img/bathroom.jpg'

export default {
    data: () => ({
        rooms: [
            {
                img: Livingroom,
                title: 'Bedrooms, Living Room & Common Areas',
                text:
                    'General tidying up, mirrors cleaned, make bed (change linen by request). Dust all accessible surfaces also wipe and clean window sills.'
            },
            {
                img: Bathroom,
                title: 'Bathrooms',
                text:
                    'Shower/bathtub and tile wall scrubbed clean and disinfected. Toilet scrubbed clean and disinfected including base and behind toilet. Vanity and sink scrubbed clean and disinfected, mirrors cleaned, fixtures cleaned and shined.'
            },
            {
                img: Kitchen,
                title: 'Kitchens',
                text:
                    'Clean the stovetop and backsplash. Clean and sanitize interior and exterior of microwave. Clean the exterior of appliances, clean and disinfect the sink. Hand-wash and disinfect counters, wipe down table and chairs. Cabinets wiped down. Hand-wipe outside of the trash can. General tidying up.'
            },
            {
                img: Everyroom,
                title: 'Every Room',
                text:
                    'General tidying up, clean all floor surfaces (vacuum & mop), remove trash & recycling.'
            }
        ]
    })
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
