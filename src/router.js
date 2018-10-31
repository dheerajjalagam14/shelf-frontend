import Vue from 'vue';
import Router from 'vue-router';
import ShelfOverview from './components/ShelfOverview.vue';
import ListOverview from './components/ListOverview.vue';
import NewShelfForm from './components/NewShelfForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShelfOverview',
      component: ShelfOverview,
    },
    {
      path: '/list-overview',
      name: 'ListOverview',
      component: ListOverview,
    },
    {
      path: '/new-shelf',
      name: 'NewShelfForm',
      component: NewShelfForm,
    },
  ],
});
