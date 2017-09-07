<template>
  <v-app light>

    <v-toolbar fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-carousel>
        <carousel-text>
        </carousel-text>
        <v-carousel-item v-for="(item,i) in pictures" v-bind:src="item.src" :key="i"></v-carousel-item>
      </v-carousel>

      <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
              <v-flex
                v-bind="{ [`xs${checkin.length > 100 ? 6 : 3}`]: true }"

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
    <v-footer :fixed="fixed">
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
            title: 'MonkeyFit',
            fixed: true,
            pictures: [
              {
                src: '/public/3.jpeg'
              },
              {
                src: '/public/1.jpg'
              },
              {
                src: '/public/2.png'
              }
            ],
            checkins: [],
            gym: {}
          }
        },
        methods: {
            fetchGymInfo: function () {
                this.gym = { name: "ASQWE", schedule: "45/78" }
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
            this.fetchChekins()
            this.fetchGymInfo()
        }
    }
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
