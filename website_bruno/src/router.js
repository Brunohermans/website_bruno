import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
    {
      path: '/cycling',
      name: 'cycling',
      component: () => import('./views/Cycling.vue'),
    },
    {
      path: '/music',
      name: 'Music',
      component: () => import('./views/Music.vue'),
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: () => import('./views/Projects.vue'),
    },

  ]
})
