<template lang="html">
    <v-layout class="title-carousel">
        <div class="container">
            <h4>{{ placeName }}</h4>
            <p>{{ placeSum }}</p>
        </div>
    </v-layout>
</template>

<script>
export default {
    name: "CarouselText",
    props: {
        placeName: String,
        placeSum: String
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus">
@import '../stylus/carousel_text'
</style>
