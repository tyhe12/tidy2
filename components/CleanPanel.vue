<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{ formattedDate }}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Item Name
                            </th>
                            <th class="text-left">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.name">
                            <td>
                                {{ item.name }}
                            </td>
                            <td>${{ item.price }}</td>
                        </tr>
                        <tr>
                            <th>
                                Subtotal
                            </th>
                            <th>${{ total }}</th>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
            validator: (items) => {
                items.every(
                    (item) =>
                        typeof item.price === 'number' &&
                        typeof item.name === 'string'
                )
            }
        },
        date: {
            type: Date,
            default: () => new Date()
        },
        total: {
            type: Number,
            default: 0
        }
    },
    computed: {
        formattedDate() {
            return new Date(this.date).toDateString()
        }
    }
}
</script>
