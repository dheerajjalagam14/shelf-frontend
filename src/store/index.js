import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import shelf from './modules/shelf';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    shelf,
  },
  strict: debug,
});
