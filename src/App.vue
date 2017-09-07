<template>
  <v-app light>

    <v-toolbar fixed :dark="true">
        <v-btn icon>
          <v-icon>extension</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title" class="white--text">
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-carousel>
        <carousel-text :place-name="gym.name" :full-address="gym.address">
        </carousel-text>
        <v-carousel-item v-for="(item,i) in pictures" :src="item.src" :key="i"></v-carousel-item>
      </v-carousel>

      <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
              <v-flex
                v-bind="{ [`xs${12} sm${checkin.length > 100 ? 6 : 4}`]: true }"
                v-for="(checkin, i) in checkins"
                :key="i"
              >
                <checkin-card
                  :checkinAuthor="checkin.author"
                  :checkinImgUrl="checkin.imageUrl"
                  :checkinText="checkin.text"
                  :checkinDate="checkin.date"
                  >
                </checkin-card>
              </v-flex>
          </v-layout>

      </v-container>
    </main>
    <!-- <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
    import CarouselText from './components/CarouselText.vue'
    import CheckinCard from './components/CheckinCard.vue'
    export default {
        components: {
            CarouselText, CheckinCard
        },
        data () {
          return {
            title: 'MonkeyFit',
            fixed: true,
            placePathUrl: "villa-sport-club",
            startPlaceUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/places/",
            endingPlacePathUrl: "/?format=json",
            placeUrl: "",
            pictures: [
                { src: "../public/4.png"}
            ],
            checkins: [],
            gym: {}
          }
        },
        methods: {
            setCarouselImages: function (pictures) {
                this.pictures = []
                this.pictures = pictures
            },
            fetchGymInfo: function () {
                // this.gym = { name: "ASQWE", schedule: "45/78" }
                this.gym = {}
                this.$http.get(this.placeUrl).then(res => {
                    this.gym.name = res.data.place_name
                    this.gym.address = res.data.full_address
                    this.gym.imageUrl = res.data.place_image

                    let pictures = []
                    pictures.push({ src: this.gym.imageUrl })
                    this.setCarouselImages(pictures)
                }, err => {

                })
            },
            fetchChekins: function () {
                this.checkins = [
                    { text: "abc", imageUrl: "", author: "xyz", date: "15/78/91" },
                    { text: "abc", imageUrl: "", author: "xyz", date: "15/78/91" },
                    { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" },
                    { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" },
                    { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" }
                ]
            }
        },
        created: function () {

            this.placeUrl = this.startPlaceUrl + this.placePathUrl + this.endingPlacePathUrl

            this.fetchChekins()
            this.fetchGymInfo()
        }
    }
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
