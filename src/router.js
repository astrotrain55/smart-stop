import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('./views/MapView.vue'),
    },
    {
      path: '/route/:id/:type/:name/:route',
      name: 'detail-route',
      component: () => import('./views/DetailRouteView.vue'),
    },
    {
      path: '/map/:id/:type/:name/:route',
      name: 'detail-map',
      component: () => import('./views/MapView.vue'),
    },
  ],
});
