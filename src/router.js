import Vue from 'vue';
import Router from 'vue-router';
import ListOverview from './components/ListOverview.vue';
import LoginPage from './components/LoginPage.vue';
import SettingsPage from './components/SettingsPage.vue';
import ShelfOverview from './components/ShelfOverview.vue';
import Register from './components/Register.vue';
import ItemView from './components/ItemView.vue';
import NewShelfForm from './components/NewShelfForm.vue';
import NewItemForm from './components/NewItemForm.vue';
import LoadingPage from './components/LoadingPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShelfOverview',
      component: ShelfOverview,
    },
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
      path: '/list-overview',
      name: 'ListOverview',
      component: ListOverview,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/item-view',
      name: 'ItemView',
      component: ItemView,
    },
    {
      path: '/new-shelf',
      name: 'NewShelfForm',
      component: NewShelfForm,
    },
    {
      path: '/new-item',
      name: 'NewItemForm',
      component: NewItemForm,
    },
    {
      path: '/loading',
      name: 'LoadingPage',
      component: LoadingPage,
    },
  ],
});
