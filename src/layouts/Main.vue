<template lang="html">
    <v-app light>

      <v-toolbar fixed :dark="true" :prominent="true" class="blue darken-4">

            <img src="../../public/Logo.png" style="width: 50px; height: auto; padding-bottom: 5px">

          <v-toolbar-title v-text="title" class="white--text">
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <a class="text-xs-right hidden-sm-and-down" href='http://play.google.com/store/monkeyfit?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img alt='Disponible en Google Play' style="width: 25%" src='https://play.google.com/intl/en_us/badges/images/generic/es-419_badge_web_generic.png'/>
            </a>
          </v-toolbar-items>
          <v-toolbar-items>
            <a class="text-xs-right hidden-sm-and-down" href='http://play.google.com/store/monkeyfit?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img alt='Disponible en Google Play' style="width: 100%; padding-top:12px;" src='/public/appstoresvg.svg'/>
            </a>
          </v-toolbar-items>
      </v-toolbar>
      <main>
        <v-carousel>
          <carousel-text :place-name="gym.name" :place-sum="gym.sum">
          </carousel-text>
          <v-carousel-item v-for="(item,i) in pictures" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>


        <v-container fluid grid-list-md class="background-img">

            <v-layout row wrap class="mb-4" v-if="$route.query.id === undefined">
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

                        </infor-card>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-card height="315px">
                            <v-card-title>
                                Ubicacion
                            </v-card-title>
                            <v-layout row wrap>
                                    <div class="ma-2 pa-2">
                                        <gmap-map
                                            v-if="gym.lat !== undefined && gym.lon !== undefined"
                                            :center="{lat:gym.lat, lng: gym.lon}"
                                            :zoom="15"
                                            map-type-id="terrain"
                                            style="width: 98%; height: 250px; position: absolute; left:6px; top:50px;"
                                        >
                                            <gmap-marker
                                                :position="{lat:gym.lat, lng: gym.lon}"
                                                :clickable="true"
                                                :draggable="false"
                                                @click="center={lat:gym.lat, lng: gym.lon}"
                                            ></gmap-marker>
                                    </gmap-map>
                                    </div>
                            </v-layout>
                        </v-card>
                    </v-flex>
            </v-layout>
            <v-layout row wrap v-else >    
                <v-flex xs12 sm4>
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

                        </infor-card>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <checkin-card
                            :checkinAuthor="starredCheckin.full_username"
                            :checkinProfPic="starredCheckin.profile_image"
                            :checkinImgUrl="starredCheckin.checkin_image"
                            :checkinText="starredCheckin.comment"
                            :checkinDate="starredCheckin.timesince"
                            >
                        </checkin-card>
                        <!-- <v-card height="315px">
                            <v-card-title>
                                Ubicacion
                            </v-card-title>
                            <v-layout row wrap>
                                    <div class="ma-2 pa-2">
                                        <h4>Hola</h4> 
                                    </div>
                            </v-layout>
                        </v-card> -->
                    </v-flex>
                    <v-flex xs12 sm4>
                        <v-card height="315px">
                            <v-card-title>
                                Ubicacion
                            </v-card-title>
                            <v-layout row wrap>
                                    <div class="ma-2 pa-2">
                                        <gmap-map
                                            v-if="gym.lat !== undefined && gym.lon !== undefined"
                                            :center="{lat:gym.lat, lng: gym.lon}"
                                            :zoom="12"
                                            map-type-id="terrain"
                                            style="width: 98%; height: 250px; position: absolute; left:6px; top:50px;"
                                        >
                                            <gmap-marker
                                                :position="{lat:gym.lat, lng: gym.lon}"
                                                :clickable="true"
                                                :draggable="false"
                                                @click="center={lat:gym.lat, lng: gym.lon}"
                                            ></gmap-marker>
                                    </gmap-map>
                                    </div>
                            </v-layout>
                        </v-card>
                    </v-flex>
            </v-layout>    
            <p class="checkin-list-title">Experiencias</p>
    <!--Checkins-->
            <v-layout row wrap>
                <v-flex
                  v-bind="{ [`xs${12} sm${checkin.length > 100 ? 6 : 4}`]: true }"
                  v-for="(checkin, i) in checkins"
                  :key="i"
                >
                  <checkin-card
                    :checkinId="i"
                    :checkinsLength="checkins.length"
                    :checkinAuthor="checkin.full_username"
                    :checkinProfPic="checkin.profile_image"
                    :checkinImgUrl="checkin.checkin_image"
                    :checkinText="checkin.comment"
                    :checkinDate="checkin.timesince"
                    @click.native.stop="onClickCheckinCard(i)"
                    >
                  </checkin-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-4 mt-5">
                <v-flex xs12 offset-sm3 sm6 class="text-sm-center">
                    <v-btn flat v-if="isLoadingMore">
                        <v-progress-circular indeterminate style="color: blue;"></v-progress-circular>
                    </v-btn>
                    <v-btn flat :disabled="nextLink === null" v-on:click="loadMore()" v-else>
                      CARGAR M&aacute;S
                    </v-btn>
                </v-flex>
            </v-layout>

        </v-container>
      </main>
      <v-footer :fixed="false">
        <span>monkeyfit &copy; 2017</span>
      </v-footer>

      <v-dialog v-model="dialog"  persistent width="50%">
        <v-card>
          <v-layout row>
              <v-flex sm1 class="dialog-arrows">
                  <template v-if = "checkinInDialog.checkinId > 0" >
                      <v-icon x-large v-on:click="goPrev(checkinInDialog.checkinId)">chevron_left</v-icon>
                  </template>

              </v-flex>
              <v-flex xs12 sm10>

                  <v-layout row>
                      <v-flex xs2 class="text-xs-right">
                          <v-avatar style="margin: 10px;"
                                    v-if="checkinInDialog.checkinProfPic === null || checkinInDialog.checkinProfPic === undefined">

                                <img src="../../public/Profpic_default.png" height="50px" weight="auto">
                                </img>
                          </v-avatar>
                          <v-avatar v-else >
                              <img
                                    :src="checkinInDialog.checkinProfPic"
                                    height="50px"
                                    weight="auto"
                                    style="margin: 10px"

                                >
                              </img>
                          </v-avatar>
                      </v-flex>
                    <v-flex xs10>
                      <div>
                        <div class="headline">{{checkinInDialog.checkinAuthor}}</div>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-card-media
                  :src="checkinInDialog.checkinImgUrl"
                  height="400px"
                  weight="auto"
                  >
                  </v-card-media>
                  <v-card-text>
                      <div><h6>{{ checkinInDialog.checkinText }}</h6></div>
                  </v-card-text>
              </v-flex>
              <v-flex sm1 class="dialog-arrows">
                  <template v-if = "checkinInDialog.checkinId < (checkinInDialog.checkinLength - 1)">
                      <v-icon x-large @click.native="goNext(checkinInDialog.checkinId)">chevron_right</v-icon>
                  </template>
              </v-flex>
          </v-layout row>
        </v-card>
      </v-dialog>
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
        starredCheckin: {},
        startCheckinsPathUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/check-in/place/",
        placePathUrl: "academia-de-natacion-angel-romero",
        startPlaceUrl: "https://monkeyfit-test.herokuapp.com/api/v1.1/places/",
        formatJsonUrl: "/?format=json",
        endPhotosUrl:"/photos",
        placeUrl: "",
        checkinsUrl: "",
        PhotosUrl:"",
        isLoadingMore: false,
        nextLink: null,
        pictures: [
            { src: "../public/4.png" },
            { src: "../public/4.png" }
        ],
        checkins: [],
        gym: {},
        dialog: false,
        checkinInDialog: {
            checkinId: 0,
            checkinLength: 1,
            checkinProfPic: "",
            checkinAuthor: "",
            checkinImgUrl: "",
            checkinText: ""
        }
      }
    },
    methods: {
        setCarouselImages: function (pictures) {
            this.pictures = []
            this.pictures = pictures

        },

        fetchGymPhoto: function () {

            let image_p = 0
            var p_images = [] // only p images
            var mix_images = [] // only p + c images
            this.$http.get(this.PhotosUrl)
            .then(function (res) {
                res.data.results.map(function (image) {
                    if (image.photo_type === 'P') {
                        image_p++
                        p_images.push({ src: image.photo_url})
                        mix_images.push({ src: image.photo_url})
                    } else if(image.photo_type === 'C') {
                        mix_images.push({ src: image.photo_url})
                    }
                })
                if (image_p > 2) {
                    this.setCarouselImages(p_images)
                } else {
                    this.setCarouselImages(mix_images)
                }
            })
            .catch(function (err) {

            })
        },

        fetchGymInfo: function () {
            // this.gym = { name: "ASQWE", schedule: "45/78" }
            this.gym = {}
            this.$http.get(this.placeUrl).then(res => {
                this.gym.name = res.data.place_name
                this.gym.address = res.data.full_address
                this.gym.lon = Number(res.data.longitude)
                this.gym.lat = Number(res.data.latitude)
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
                // this.setCarouselImages(pictures)

               this.fetchGymPhoto()

            }, err => {

            })
        },
        fetchChekins: function (url_checkins) {
            // this.checkins = [
            //     { text: "abc", imageUrl: "", author: "xyz", date: "15/78/91" },
            //     { text: "abc", imageUrl: "", author: "xyz", date: "15/78/91" },
            //     { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" },
            //     { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" },
            //     { text: "abc", imageUrl: "asdads", author: "xyz", date: "15/78/91" }
            // ]
            // if (url_checkins !== undefined) {
                this.isLoadingMore = true
                var self = this
                this.$http.get(url_checkins).then(res => {

                    this.isLoadingMore = false
                    res.data.results.map(function (checkinItem) {
                        self.checkins.push(checkinItem)
                    })
                    this.nextLink = res.data.next
                    

                }, err => {

                })
            // } else {
            //     var self = this
            //     this.$http.get(this.checkinsUrl).then(res => {

            //         res.data.results.map(function (checkinItem) {
            //             self.checkins.push(checkinItem)
            //         })
            //         if (res.data.next !== null) {
            //             this.nextLink = res.data.next
            //         }

            //     }, err => {

            //     })
            // }
        },
        fetchStarredCheckin: function(checkin_id) {
            this.$http.get("http://monkeyfit-test.herokuapp.com/api/v1.1/check-in/"+checkin_id)
            .then(function(res) {
                // res.data.checkin_image
                // res.data.comment
                // res.data.thumbs_down
                // res.data.thumbs_up
                // res.data.timesince
                // res.data.timestamp

                this.starredCheckin = res.data
            })
            .catch(function(err){

            })
            
        },
        onClickCheckinCard: function (index) {

            this.checkinInDialog = {}

            this.checkinInDialog.checkinId = index
            this.checkinInDialog.checkinLength = this.checkins.length
            this.checkinInDialog.checkinProfPic = this.checkins[index].profile_image
            this.checkinInDialog.checkinAuthor = this.checkins[index].full_username
            this.checkinInDialog.checkinImgUrl = this.checkins[index].checkin_image
            this.checkinInDialog.checkinText = this.checkins[index].comment


            this.dialog = true
        },
        goPrev: function (index) {
            // this.checkinId

            if (this.checkinInDialog.checkinId !== 0) {

                this.checkinInDialog.checkinId = index-1
                this.checkinInDialog.checkinLength = this.checkins.length
                this.checkinInDialog.checkinProfPic = this.checkins[index-1].profile_image
                this.checkinInDialog.checkinAuthor = this.checkins[index-1].full_username
                this.checkinInDialog.checkinImgUrl = this.checkins[index-1].checkin_image
                this.checkinInDialog.checkinText = this.checkins[index-1].comment
            }

        },
        goNext: function (index) {
            // this.dialog = false
            if (index < (this.checkins.length-1)) {

                this.checkinInDialog.checkinId = index+1
                this.checkinInDialog.checkinLength = this.checkins.length
                this.checkinInDialog.checkinProfPic = this.checkins[index+1].profile_image
                this.checkinInDialog.checkinAuthor = this.checkins[index+1].full_username
                this.checkinInDialog.checkinImgUrl = this.checkins[index+1].checkin_image
                this.checkinInDialog.checkinText = this.checkins[index+1].comment
            }
        },
        loadMore: function () {
            if (this.nextLink !== null) {
                console.log("loadmores")
                this.fetchChekins(this.nextLink)
            }
        }
    },
    created: function () {

        this.placeUrl = this.startPlaceUrl + (this.$route.params.param_id || this.placePathUrl) + this.formatJsonUrl
        this.checkinsUrl = this.startCheckinsPathUrl + (this.$route.params.param_id || this.placePathUrl) + this.formatJsonUrl
        this.PhotosUrl = this.startPlaceUrl + (this.$route.params.param_id || this.placePathUrl) + this.endPhotosUrl + this.formatJsonUrl

        this.fetchChekins(this.checkinsUrl)
        this.fetchGymInfo()

        if(this.$route.query.id !== undefined) {
            this.fetchStarredCheckin(this.$route.query.id)
        }
                
        // MAX >>> AQUI RECIBES EL ID DEL POST / CHECKIN LO QUE SEA QUE DEBIA ESTAR AQUI
    }
}
</script>

<style lang="stylus">
.background-img
    background-image: url("../../public/background_4.jpg");
    background-repeat: repeat;
.checkin-list-title
    color: #90a5bb
    text-align: center
    font-style: italic
    font-size: 30px
    font-weight: 100
    margin-bottom: 20px
.dialog-arrows
    line-height: 35
</style>
