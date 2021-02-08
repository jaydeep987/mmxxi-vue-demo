import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import EventList from '../views/EventList.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/create-event',
    name: 'CreateEvent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateEvent.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
