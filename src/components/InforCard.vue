<template lang="html">
  <v-card>
    <v-container>
      <div>{{placeAdress}}</div>
      <v-layout  row>
        <v-flex xs8>
        <v-list>
          <v-list-tile :href="callphone1">
            <v-list-tile-action>
              <v-icon class="blue--text text--darken-2">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{placePhone1}}</v-list-tile-title>
              <v-list-tile-sub-title>Telefono</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :href="callphone2">
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
        <v-flex xs4 center>
        <v-icon x-large class="blue--text text--darken-2">thumb_up</v-icon>
        <h6>{{placeThumbsup}}</h6>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs9>
        <v-flex xs3 center
        v-if="placeFacebook != null">
          <a href="placeFacebook">
            <v-icon class="blue--text text--darken-2">mdi-facebook-box</v-icon>
          </a>
        </v-flex>
        <v-flex xs3 center
        v-if="placeTwitter != null">
          <a href="placeTwitter">
            <v-icon class="light-blue--text">mdi-twitter-box</v-icon>
          </a>
        </v-flex>
        <v-flex xs3 center
        v-if="placeInstagram != null">
          <a href="placeInstagram">
            <v-icon class="pink--text text--darken-3">mdi-instagram</v-icon>
          </a>
        </v-flex>
        <v-flex xs3 center
        v-if="PlaceYoutube != null">
          <a href="PlaceYoutube">
            <v-icon class="red--text">mdi-youtube-play</v-icon>
          </a>
        </v-flex>
      </v-flex>
      <v-flex xs3>

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
        placeScore: Number,
        placePhone1: String,
        placePhone2: String,
        placewhatsapp: String,
        placeWeb: String,
        placeSports: Array,
        placeThumbsup: Number,
        placeFacebook: {
          type:String,
          default:"http://google.com"
        },
        placeInstagram: {
          type: String,
          default:"null"
        },
        PlaceYoutube:  {
          type:String,
          default:"null"
        },
        placeTwitter:  {
          type:String,
          default:"null"
        },
        placePublic: Boolean,
    },
    data() {
        return {
          callphone1:"",
          callphone2:"",
          openwtsap:"",
          phonedial:"tel:+"
        }
    },

    created: function () {
      this.callphone1 = this.phonedial + this.placePhone1
      this.callphone2 = this.phonedial + this.placePhone2
    }
}
</script>
<style lang="css">
</style>
