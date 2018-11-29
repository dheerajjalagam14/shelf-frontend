import api from '../../api/shelfuserapi.js';
import VueRouter from 'vue-router';

export const UPDATE_LOGIN = 'UPDATE_LOGIN';

export const initialState = {
  loggedIn: false,
  userToken: null,
  loginPending: false,
  loginError: false,
};

export const getters = {
  getUserToken: state => state.userToken,
};

export const mutations = {
  [UPDATE_LOGIN](state, result) {
    if(result.token === undefined) {
      state.loginPending = false;
      state.loginError = true;
    } else {
      state.userToken = result.token;
      state.loggedIn = true;
      state.loginError = false;
      state.loginPending = false;
      this.$router.push('/');
    }
  },
};

export const actions = {
  attemptLogin: ({state, commit}, payload) =>{
    state.loginPending = true;
    state.loginError = false;
    commit(UPDATE_LOGIN, api.login(payload));
  }
};

// Exports
export default {
  namespaced: true,
  state: { ...initialState },
  getters,
  mutations,
  actions,
}