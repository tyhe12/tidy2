<template>
    <div class="dashboard-page">
        <v-container>
            <div v-if="signedIn" class="dashboard-content">
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-row class="mt-8">
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-avatar size="60" color="primary">
                                        <span class="white--text headline">{{
                                            initials
                                        }}</span>
                                    </v-avatar>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-card class="mx-8 px-8">
                                        <v-card-title class="px-0"
                                            >Personal Information</v-card-title
                                        >
                                        <v-row class="">
                                            <v-col cols="12">
                                                <v-form>
                                                    <v-row>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="
                                                                    localName
                                                                "
                                                                label="Name"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" md="6">
                                                            <v-text-field
                                                                v-model="
                                                                    localEmail
                                                                "
                                                                label="E-mail"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>

                                                    <!-- <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                                v-model="
                                                                    user.password
                                                                "
                                                                :append-icon="
                                                                    showPassword
                                                                        ? 'far fa-eye'
                                                                        : 'far fa-eye-slash'
                                                                "
                                                                :type="
                                                                    showPassword
                                                                        ? 'text'
                                                                        : 'password'
                                                                "
                                                                label="Password"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row> -->

                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                                v-model="
                                                                    localAddress
                                                                "
                                                                label="Address"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-form>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-card class="mx-8 px-8 mb-8">
                                        <v-card-title class="px-0"
                                            >Previous Cleans</v-card-title
                                        >
                                        <v-row>
                                            <v-col
                                                v-if="cleans.length > 0"
                                                cols="12"
                                            >
                                                <v-expansion-panels
                                                    class="mb-4"
                                                    hover
                                                >
                                                    <clean-panel
                                                        v-for="(clean,
                                                        index) in cleans"
                                                        :key="index"
                                                        :date="clean.date"
                                                        :items="clean.items"
                                                        :total="clean.price"
                                                    >
                                                    </clean-panel>
                                                </v-expansion-panels>
                                            </v-col>
                                            <div v-else class="pb-4">
                                                No previous cleans found
                                            </div>
                                        </v-row>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
            <div v-else class="dashboard-content">
                <v-row>
                    <v-col cols="12">
                        <h2>Please log in to access this page.</h2>
                    </v-col>
                    <v-col cols="12">
                        <v-btn to="/login">Log in</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CleanPanel from '@/components/CleanPanel'

export default {
    components: {
        CleanPanel
    },
    data: () => ({
        localName: '',
        localAddress: '',
        localEmail: '',
        showPassword: false
    }),
    computed: {
        ...mapGetters({
            user: 'user/user',
            signedIn: 'user/signedIn',
            token: 'user/token',
            cleans: 'cleans/cleans'
        }),
        initials() {
            return this.signedIn
                ? this.user.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .toUpperCase()
                : ''
        }
    },
    mounted() {
        if (this.signedIn) {
            this.loadUser()
            this.loadCleans()
        }
    },
    methods: {
        ...mapActions('cleans', ['load']),
        async loadCleans() {
            this._cleans = await this.load({
                token: this.token,
                customerId: this.user.id
            })
        },
        loadUser() {
            this.localName = this.user.name || ''
            this.localAddress = this.user.address
            this.localEmail = this.user.email
        }
    }
}
</script>
