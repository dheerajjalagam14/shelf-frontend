import Vue from 'vue';
import Router from 'vue-router';
import ListOverview from './components/ListOverview.vue';
import LoginPage from './components/LoginPage.vue';
import SettingsPage from './components/SettingsPage.vue';
import ShelfOverview from './components/ShelfOverview.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage,
    },
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
  ],
});
