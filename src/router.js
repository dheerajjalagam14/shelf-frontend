import Vue from 'vue';
import Router from 'vue-router';
import ShelfOverview from './components/ShelfOverview.vue';
import ListOverview from './components/ListOverview.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: ListOverview,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/shelf-overview',
      name: 'ShelfOverview',
      component: ShelfOverview,
    },
  ],
});
