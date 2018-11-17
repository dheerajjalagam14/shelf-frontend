// import api from '../../api/shelfuserapi.js';

export const UPDATE_LOGIN = 'UPDATE_LOGIN';

export const initialState = {
  loggedIn: false,
};

export const getters = {

};

export const mutations = {
  [UPDATE_LOGIN](state, value) {
    state.loggedIn = value;
  },
};

export const actions = {
  attemptLogin: ({commit}, payload) =>{
    // api.login(payload);
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