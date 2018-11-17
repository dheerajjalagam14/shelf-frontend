import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import shelf from './modules/shelf';
import login from './modules/login';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    shelf,
    login,
  },
  strict: debug,
});
