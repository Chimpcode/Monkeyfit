<template lang="html">
  <v-card>

    <v-container>
      <span class="headline">{{placeAdress}}</span>
      <v-layout  row>
        <v-flex xs12 class="text-xs-center">
          <v-icon x-large class="blue--text text--darken-2">thumb_up</v-icon>
          <h6>{{placeThumbsup}}</h6>
        </v-flex>
      </v-layout>
      <v-layout  row>
        <v-flex xs12>
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
            <v-list-tile :href="placeWeb">
              <v-list-tile-action>
                <v-icon class="blue--text text--darken-2">public</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title><a href=":placeWeb">{{placeWeb}}</a></v-list-tile-title>
                <v-list-tile-sub-title>pagina web</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :href="startchat">
              <v-list-tile-action>
                <v-icon class="green--text text--darken-2">mdi-whatsapp</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{placewhatsapp}}</v-list-tile-title>
                <v-list-tile-sub-title>whatsapp</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
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
        <div class="center">

        </div>
        <div class="center">
        </div>
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
          default:"http://facebook.com"
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
          openwtsap:"https://api.whatsapp.com/send?phone=",
          phonedial:"tel:+",
          startchat:""
        }
    },
    watch: { 
      placePhone1: function(newVal, oldVal) { // watch it
      
        this.updatePhoneNumbers(newVal, 'phone1')
      },
      placePhone2: function(newVal, oldVal) { // watch it

        this.updatePhoneNumbers(newVal, 'phone2')
      },
      placewhatsapp: function(newVal, oldVal) { // watch it

        this.updatePhoneNumbers(newVal, 'wzp')
      }
    },
    methods: {
      updatePhoneNumbers: function (new_val, new_type) {
  
        if( new_type === 'phone1') {
          this.callphone1 = this.phonedial + new_val
          
        
        }
        else if(new_type === 'phone2') {
          this.callphone2 = this.phonedial + new_val


        }
        else if(new_type === 'wzp') {
          this.startchat = this.openwtsap + new_val


        }
      }
    },

    created: function () {
      this.updatePhoneNumbers(undefined, undefined, undefined)
    }
}
</script>
<style lang="css">
</style>
