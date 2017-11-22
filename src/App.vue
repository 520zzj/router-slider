<template>
  <div id="app">
    <tab></tab>
    <v-touch @swipeleft="goRight" @swiperight="goLeft">
      <transition name="slide-fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-touch>
  </div>
</template>

<script>
  import Tab from './components/tab'
  import VueTouch from 'vue-touch'
  import Vue from 'vue'
  import Vuex from 'vuex'
  import router from './router'
  import {mapGetters, mapMutations} from 'vuex'

  Vue.use(VueTouch, {name: 'v-touch'})

  export default {
    name: 'app',
    data() {
      return {
        pathArr: []
      }
    },
    computed: {
      ...mapGetters([
        'currentPathIndex'
      ])
    },
    methods: {
      ...mapMutations({
        setCurrentPathIndex: 'SET_CURRENT_PATH_INDEX'
      }),
      goRight() {
        console.log("goright")
        let pathObj = this.$router.options.routes
        console.log("pathObj: " + pathObj)
        console.log("currentPathIndex: " + this.currentPathIndex)
        let nextIndex = this.currentPathIndex + 1
        console.log("nextIndex: " + nextIndex)
        this.setCurrentPathIndex(nextIndex)
        if (nextIndex >2) {
          nextIndex = 2
          this.setCurrentPathIndex(2)
        }
        router.push(pathObj[nextIndex])
      },
      goLeft() {
        let pathObj = this.$router.options.routes
        let nextIndex = this.currentPathIndex - 1
        this.setCurrentPathIndex(nextIndex)
        if (nextIndex <= 1) {
          nextIndex = 1
          this.setCurrentPathIndex(1)
        }
        router.push(pathObj[nextIndex])
      }
    },
    components: {
      Tab
    },
  }
</script>

<style lang="stylus" scoped>
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
    .slide-fade-enter-active
      transition all .3s ease
    .slide-fade-leave-active
      transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    .slide-fade-enter, .slide-fade-leave-to
      transform translateX(10px)
      opacity 0

</style>

