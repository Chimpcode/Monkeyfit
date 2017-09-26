<template lang="html">
    <v-app light>

      <v-toolbar fixed :dark="true" :prominent="true" class="blue darken-4">

            <img src="../../public/Logo.png" style="width: 50px; height: auto; padding-bottom: 5px">

          <v-toolbar-title v-text="title" class="white--text">
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <a class="text-xs-right" href='http://play.google.com/store/monkeyfit?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img alt='Disponible en Google Play' style="width: 25%" src='https://play.google.com/intl/en_us/badges/images/generic/es-419_badge_web_generic.png'/>
            </a>
          </v-toolbar-items>
      </v-toolbar>
      <main>
        <v-carousel>
          <carousel-text :place-name="gym.name" :place-sum="gym.sum">
          </carousel-text>
          <v-carousel-item v-for="(item,i) in pictures" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>


        <v-container fluid grid-list-md class="grey lighten-4">

          <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <infor-card
                      :placeAddress="gym.address"
                      :placePhone1="gym.phone1"
                      :placePhone2="gym.phone2"
                      :placewhatsapp="gym.wsp"
                      :placeWeb="gym.web"
                      :placeFacebook="gym.fb"
                      :placeInstagram="gym.insta"
                      :PlaceYoutube="gym.yt"
                      :placeTwitter="gym.twit"
                      :placeSports="gym.sports"
                      :placeThumbsup="gym.thumbs"
                      :placePublic="gym.public"
                      :placeScore="gym.score"
                      >
                      <!--<v-card>
                          <v-card-title>
                              Informacion
                          </v-card-title>
                          <v-layout row wrap>

                          </v-layout>
                      </v-card>-->
                    </infor-card>
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
                                    style="width: 100%; height: 250px"
                                  ></gmap-map>
                              </div>
                          </v-layout>
                      </v-card>
                  </v-flex>
          </v-layout>
    <!--Checkins-->
            <v-layout row wrap>
                <v-flex
                  v-bind="{ [`xs${12} sm${checkin.length > 100 ? 6 : 4}`]: true }"
                  v-for="(checkin, i) in checkins"
                  :key="i"
                >
                  <checkin-card
                    :checkinAuthor="checkin.full_username"
                    :checkinProfPic="checkin.profile_image"
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
        <span>monkeyfit &copy; 2017</span>
      </v-footer>
    </v-app>
</template>

<script>
import CarouselText from '../components/CarouselText.vue'
import CheckinCard from '../components/CheckinCard.vue'
import InforCard from '../components/InforCard.vue'
export default {
    name: 'Main',
    components: {
        CarouselText, CheckinCard, InforCard
    },
    data () {
      return {
        title: 'monkeyfit',
        fixed: true,
        startCheckinsPathUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/check-in/place/",
        placePathUrl: "academia-de-natacion-angel-romero",
        startPlaceUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/places/",
        formatJsonUrl: "/?format=json",
        endPhotosUrl:"/photos",
        placeUrl: "",
        checkinsUrl: "",
        PhotosUrl:"",
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
                this.gym.phone1 = res.data.telephone1
                this.gym.phone2 = res.data.telephone2
                this.gym.wsp = res.data.whatsapp
                this.gym.web = res.data.webpage
                this.gym.fb = res.data.facebook_url
                this.gym.insta = res.data.instagram_url
                this.gym.yt = res.data.youtube_url
                this.gym.twit = res.data.twitter_url
                this.gym.sum = res.data.summary
                this.gym.thumbs = res.data.thumbsup_counter
                this.gym.sports = res.data.sports
                this.gym.public = res.data.is_public_place
                this.gym.score = res.data.review_score

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

        this.placeUrl = this.startPlaceUrl + (this.$route.params.param_id || this.placePathUrl) + this.formatJsonUrl
        this.checkinsUrl = this.startCheckinsPathUrl + (this.$route.params.param_id || this.placePathUrl) + this.formatJsonUrl
        this.PhotosUrl = this.startPlaceUrl + (this.$route.params.param_id || this.placePathUrl) + this.endPhotosUrl + this.formatJsonUrl

        this.fetchChekins()
        this.fetchGymInfo()

        // MAX >>> AQUI RECIBES EL ID DEL POST / CHECKIN LO QUE SEA QUE DEBIA ESTAR AQUI
        console.log(this.$route.params)
    }
}
</script>

<style lang="css">
</style>
