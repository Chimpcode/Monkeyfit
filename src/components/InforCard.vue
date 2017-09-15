<template lang="html">
  <v-card>
    <v-container>
      <div>{{placeAdress}}</div>
      <v-layout  row>
        <v-flex xs10>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="blue--text text--darken-2">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{placePhone1}}</v-list-tile-title>
              <v-list-tile-sub-title>Telefono</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="blue--text text--darken-2">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{placePhone2}}</v-list-tile-title>
              <v-list-tile-sub-title>Telefono</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="blue--text text--darken-2">public</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><a href=":placeWeb">{{placeWeb}}</a></v-list-tile-title>
              <v-list-tile-sub-title>pagina web</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="green--text text--darken-2">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{placewhatsapp}}</v-list-tile-title>
              <v-list-tile-sub-title>whatsapp</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        </v-flex>
        <v-flex xs2 center>
        <v-icon x-large class="blue--text text--darken-2">thumb_up</v-icon>
        <h6>{{placeThumbsup}}</h6>
        </v-flex>
      </v-layout>
    </v-container>

  </v-card>
</template>
<script>
export default {
    name: "InforCard",
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
