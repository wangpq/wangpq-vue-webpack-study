import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Second from '@/components/Second'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
