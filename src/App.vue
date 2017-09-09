<template>
  <v-app light>

    <v-toolbar fixed :dark="true" :prominent="true" class="blue darken-4">

          <img src="../public/Logo.png" style="width: 50px; height: auto; padding-bottom: 5px">

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

        <v-layout row wrap class="mb-4">
                <v-flex xs12 sm6>
                    <v-card>
                        <v-card-title>
                            Informacion
                        </v-card-title>
                        <v-layout row wrap>

                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-card>
                        <v-card-title>
                            Ubicacion
                        </v-card-title>
                        <v-layout row wrap>
                            <div class="ma-2 pa-2">
                                <gmap-map
                                  :center="{lat:10, lng:10}"
                                  :zoom="7"
                                  map-type-id="terrain"
                                  style="width: 100%; height: 300px"
                                ></gmap-map>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
        </v-layout>

          <v-layout row wrap>
              <v-flex
                v-bind="{ [`xs${12} sm${checkin.length > 100 ? 6 : 4}`]: true }"
                v-for="(checkin, i) in checkins"
                :key="i"
              >
                <checkin-card
                  checkinAuthor=""
                  checkinProfilepicture=""
                  :checkinImgUrl="checkin.checkin_image"
                  :checkinText="checkin.comment"
                  :checkinDate="checkin.timesince"
                  >
                </checkin-card>
              </v-flex>
          </v-layout>

      </v-container>
    </main>
    <v-footer :fixed="false">
      <span>&copy; 2017</span>
    </v-footer>
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
            title: 'monkeyfit',
            fixed: true,
            startCheckinsPathUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/check-in/place/",
            placePathUrl: "villa-sport-club",
            startPlaceUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/places/",
            formatJsonUrl: "/?format=json",
            placeUrl: "",
            checkinsUrl: "",
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
                // this.checkins = [
                //     { text: "abc", imageUrl: "", author: "xyz", date: "15/78/91" },
                //     { text: "abc", imageUrl: "", author: "xyz", date: "15/78/91" },
                //     { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" },
                //     { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" },
                //     { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" }
                // ]
                var self = this
                this.$http.get(this.checkinsUrl).then(res => {

                    res.data.map(function (checkinItem) {
                        self.checkins.push(checkinItem)
                    })

                }, err => {

                })
            }
        },
        created: function () {

            this.placeUrl = this.startPlaceUrl + this.placePathUrl + this.formatJsonUrl
            this.checkinsUrl = this.startCheckinsPathUrl + this.placePathUrl + this.formatJsonUrl

            this.fetchChekins()
            this.fetchGymInfo()
        }
    }
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
