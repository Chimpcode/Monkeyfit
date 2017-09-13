<template lang="html">
  <v-card>
    <v-container>
      <div>{{placeAdress}}</div>
      <v-layout  row>
        <v-flex xs10>
        <v-list>
        </v-line>
        </v-flex>
        <v-flex xs2>
        <h6>{{placeThumbsup}}</h6>
        </v-flex>
      </v-layout>
    </v-container>

  </v-card>
</template>
<script>
export default {
    name: "InfoCard",
    props: {
        placeAdress: String,
        placePhone1: String,
        placePhone2: String,
        placewhatsapp: String,
        placeWeb: String,
        placeSports: Array,
        placeThumbsup: Number,
        placeFacebook: String,
        placeInstagram: String,
        PlaceYoutube: String,
        placeTwitter: String,
        placePublic: Boolean,
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="css">
</style>
