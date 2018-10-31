import Vue from 'vue';
import Router from 'vue-router';
import ListOverview from './components/ListOverview.vue';
import LoginPage from './components/LoginPage.vue';
import SettingsPage from './components/SettingsPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/listoverview',
      name: 'List',
      component: ListOverview,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage
    }
  ],
});
