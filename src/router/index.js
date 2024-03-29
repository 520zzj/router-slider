import Vue from 'vue'
import Router from 'vue-router'
import All from './../components/all'
import Recommend from './../components/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
     component: Recommend
    },
    {
      path: '/all',
     component: All
    },
  ]
})
