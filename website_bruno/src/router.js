import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cycling',
      name: 'cycling',
      component: () => import('./views/Cycling.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    }
  ]
})
