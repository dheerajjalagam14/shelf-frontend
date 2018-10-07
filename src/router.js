import Vue from 'vue';
import Router from 'vue-router';
import Form from './views/Form.vue'
import ListOverview from './components/ListOverview.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: ListOverview,
    },
  ]
});
