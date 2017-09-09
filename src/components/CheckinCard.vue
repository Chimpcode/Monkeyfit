<template lang="html">
    <v-dialog v-model="dialog" width="600px" lazy absolute>
    <v-card slot="activator">
      <v-container grid-list-lg>
        <div>{{ checkinDate }}</div>
                <v-layout row>
                  <v-flex xs3>
                  <v-avatar>\
                  <!-- utilizando el servicio de profile picture de Beto
                  <v-card-media
                      v-if="checkinImgUrl !== null"
                      :src="checkinImgUrl"
                      height="200px"
                  >
                  -->
                </v-avatar>
                  </v-flex>
                  <v-flex xs9>
                    <div>
                      <div class="headline">{{checkinAuthor}}</div>
                    </div>
                  </v-flex>
                </v-layout>
      </v-container>
        <v-card-text>
            <div>{{ checkinText }}</div>
        </v-card-text>
        <v-card-media
            v-if="checkinImgUrl !== null"
            :src="checkinImgUrl"
            height="200px"
        >

        </v-card-media>

        <!--Podrian agregarle mas funciones a los checkins
            reutilizar el direccionamiento de las redes
            sociales o el perfil de los autores, de momento se busca persentar
            un dialog con la foto publicada y el comentario del checkin. Mxlr
        <v-card-actions class="white">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
        </v-card-actions>-->
    </v-card>
    <v-card>
      <v-container fluid grid-list-lg>
        <div>{{ checkinDate }}</div>
                <v-layout row>
                  <v-flex xs3>
                  <v-avatar>\
                  <!-- utilizando el servicio de profile picture de Beto
                  <v-card-media
                      v-if="checkinImgUrl !== null"
                      :src="checkinImgUrl"
                      height="200px"
                  >
                  -->
                  </v-avatar>
                  </v-flex>
                  <v-flex xs9>
                    <div>
                      <div class="headline">{{checkinAuthor}}</div>
                    </div>
                  </v-flex>
                </v-layout>
      </v-container>
        <v-card-text>
            <div>{{ checkinText }}</div>
        </v-card-text>
        <v-card-media
            v-if="checkinImgUrl !== null"
            :src="checkinImgUrl"
            height="700px"
            weight=auto
        >

        </v-card-media>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: "CheckinCard",
    props: {
        checkinText: String,
        checkinImgUrl: {
            type: String,
            default: ""
        },
        checkinAuthor: String,
        checkinDate: String
    },
    data() {
        return {
            dialog: false
        }
    }
}
</script>

<style lang="css">
</style>
