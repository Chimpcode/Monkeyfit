<template lang="html">
    <v-card>
        <v-card-title primary-title>
            <div class="headline">{{ checkinAuthor }}</div>
            <div>{{ checkinText }}</div>
            <div>{{ checkinDate }}</div>
        </v-card-title>

        <v-card-media
            v-if="checkinImgUrl.length > 0"
            :src="checkinImgUrl"
            height="200px"
        >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="checkinAuthor"></span>
                </v-flex>
              </v-layout>
            </v-container>
        </v-card-media>

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
        </v-card-actions>
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
        checkinDate: String
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="css">
</style>
