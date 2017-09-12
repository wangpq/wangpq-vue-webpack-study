import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import SecondPage from '@/pages/SecondPage'
import ThirdPage from '@/pages/ThirdPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/second',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/third',
      name: 'ThirdPage',
      component: ThirdPage
    }
  ]
})
