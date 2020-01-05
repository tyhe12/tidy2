<template>
    <div class="faqs">
        <v-layout align-center justify-center row wrap class="faq-layout">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header class="title">
                        What’s all included in your cleaning services?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        We will clean every room for you, for more details
                        please check out
                        <nuxt-link to="/included">What Is Included</nuxt-link>.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
                    <v-expansion-panel-header class="title">{{
                        faq.title
                    }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ faq.text }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-layout>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    data: () => ({
        faqs: [
            {
                title: 'Are you insured?',
                text:
                    'Yes, Cleaning with Cooley is fully Bonded & Insured to protect your home and give you a peace of mind.'
            },
            {
                title: 'How do I pay?',
                text:
                    'We accept Cash payments, Checks, Credit Cards, Zelle, Cash App, Venmo, PayPal and Apple Pay.'
            },
            {
                title: 'Is a long-term contract required for service?',
                text:
                    'Absolutely not. Our services are provided as needed to suit your busy lifestyle. There are no long-term contracts or obligations required.'
            },
            {
                title: 'What time do you clean?',
                text:
                    'We’re able to clean day and night, depending on your preference.'
            },
            {
                title: 'What towns do you service?',
                text: 'Chicago and the surrounding areas'
            },
            {
                title: 'Do you furnish the cleaning supplies?',
                text:
                    'Yes. We furnish everything needed to clean your home. If you have any preference in regards to what cleaning products we use, feel free to let us know and we’ll do everything we can to work with your requests.'
            },
            {
                title: 'Do you offer Green or Eco-Friendly Cleaning?',
                text: 'Yes, we do offer Eco-friendly House cleaning products.'
            },
            {
                title:
                    'Are you a pet friendly service and do your cleaning teams use non toxic products?',
                text:
                    'We love animals as much as you do! Our teams are familiar with the proper treatment of dogs, cats and other pets. We also use non-toxic, eco-friendly products so your pets are safe on any surface we clean. Please make sure to request an eco-friendly cleaning if this applies to you.'
            },
            {
                title: 'What should I expect on my first appointment?',
                text:
                    'We will arrive at your home we will be equipped with all cleaning supplies and equipment needed to thoroughly clean your home. Your first appointment generally takes the longest, as we need time to get acquainted with a new environment. Subsequent appointments will move along faster.'
            },
            {
                title: 'Do I need to be home the day of the cleaning?',
                text:
                    'This is up to you. Some customers prefer scheduling cleaning appointments while they are at work or away for the day, while others like to be at home during the process. Regardless of your schedule, you are certain to receive superior housekeeping and customer service!'
            },
            {
                title: 'Can I skip or reschedule an appointment?',
                text:
                    'Ideally, we would like a minimum of 24 hours in advance. We’ll move your visit to another, more convenient time or if you wish, cancel it all together.'
            },
            {
                title:
                    'How will you enter my home on my scheduled days of cleaning?',
                text:
                    'We leave this strictly up to you, whatever you feel most comfortable with.'
            },
            {
                title: 'How many hours is a typical service?',
                text:
                    'There is no set amount of time - it all depends on the current condition of your home.'
            },
            {
                title: 'Do you offer hourly service?',
                text:
                    'In some instances it may make sense to do an hourly service. We have a minimum fo 4 hours when booking hourly services. This is generally reserved for very large homes.'
            },
            {
                title: 'What if something is missed?',
                text:
                    'It is rare to find a company that stand behind its work. At Cleaning with Cooley we do just that! We are so confident in our cleaning service that we guarantee them. If for any reason you’re not satisfied with our work let us know within 48 hours and we will return to re clean any of the areas missed, free of charge.'
            },
            {
                title: 'What if something’s damaged during a service?',
                text:
                    'Cleaning with Cooley treat every home with the utmost respect. If something happens to break during our service, we’ll do our best to repair it or replace it. Our company and housekeepers are fully insured, so claims can be filed when appropriate.'
            },
            {
                title: 'How often can you provide service?',
                text:
                    'We leave this all up to you. Cleaning with Cooley will provide service weekly, bi-weekly, monthly, one time clean etc. It all depends on your cleaning needs.'
            },
            {
                title:
                    'Can I provide my housekeeper with special instructions?',
                text:
                    'Yes, your preference gives us the structure we need to enhance your cleaning experience and it also ensure that you’re completely happy & satisfied.'
            }
        ]
    }),
    head() {
        return {
            title: 'FAQs',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Cleaning with Cooley try our best to accommodate each customer by making our website unique. We’ve answered some of the most frequently asked questions for our customers convenience. We try to provide every service our customers need and answer every question our customers provide.'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.faq-layout {
    margin: 0 !important;
}
</style>
