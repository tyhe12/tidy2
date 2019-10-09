<template>
    <div class="star-rating">
        <v-rating
            class="star-rating__rating"
            v-model="localValue"
            :background-color="backgroundColor"
            :color="color"
            :readonly="readonly"
            :half-increments="halfIncrements"
            :class="{
                'star-rating__rating--sm-right': smallRight,
                'star-rating__raiting--centered': centered
            }"
        ></v-rating>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        },
        readonly: {
            type: Boolean,
            default: false
        },
        backgroundColor: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        halfIncrements: {
            type: Boolean,
            default: false
        },
        smallRight: {
            type: Boolean,
            default: false
        },
        centered: {
            type: Boolean,
            default: false
        }
    },
    data() {
        const localValue = this.value
        return {
            localValue
        }
    },
    watch: {
        localValue(newValue) {
            this.$emit('input', newValue)
        },
        value(newValue) {
            this.localValue = newValue
        }
    }
}
</script>

<style lang="scss">
.star-rating__rating {
    display: flex;
    justify-content: flex-start;
}

.star-rating__raiting--centered {
    justify-content: center;
}

@media only screen and (min-width: 600px) {
    .star-rating__rating.star-rating__rating--sm-right {
        justify-content: flex-end;
    }
}
</style>
