import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/what-we-do',
      name: 'what-we-do',
      component: () => import('../views/WhatWeDoView.vue'),
      props: true, 
      meta: {
        title: 'What we do'
      }
    },
    {
      path: '/the-digital-divide',
      name: 'the-digital-divide',
      component: () => import('../views/TheDigitalDivideView.vue'),
      props: true, 
      meta: {
        title: 'The Digital Divide'
      }
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: () => import('../views/GetInvolvedView.vue'),
      props: true, 
      meta: {
        title: 'Get Involved'
      }
    },
    {
      path: '/our-network',
      name: 'our-network',
      component: () => import('../views/OurNetworkView.vue'),
      props: true, 
      meta: {
        title: 'Our Network'
      }
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../views/InsightsView.vue'),
      props: true, 
      meta: {
        title: 'Insights'
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/LearnView.vue'),
      props: true, 
      meta: {
        title: 'Learn'
      }
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue'),
      props: true, 
      meta: {
        title: 'Donate'
      }
    },
  ]
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' - Good Things Foundation';
  }
});

export default router
