<template lang="html">
    <v-card>
      <v-container >
        <div class="right">{{ checkinDate }}</div>
          <v-layout row>
            <v-flex xs3>
            <v-avatar v-if="checkinProfPic !== null">
           <img
                :src="checkinProfPic"
                height="50px"
                weight="auto"
            >
          </img>
          </v-avatar>
          <v-avatar v-else>
            <img src="../../public/Profpic_default.png" height="50px" weight="auto">
            </img>
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
            <div><h5>{{ checkinText }}</h5></div>
        </v-card-text>
        <v-card-media
            v-if="checkinImgUrl !== null"
            :src="checkinImgUrl"
            height="200px"
        >
      </v-card-media>
            <!-- Podrian agregarle mas funciones a los checkins
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
        checkinDate: String,
        checkinProfPic: {
            type: String,
            default: ""
        }
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
