// remove mock data once api is hooked up.
import mockData from '@/mockData/dataMock';

// import api

// Constants
// export const NAME = 'NAME';
export const SET_SHELF_LIST = 'SET_SHELF_LIST';
export const SET_ITEM_LIST = 'SET_ITEM_LIST';
export const SET_ITEM = 'SET_ITEM';
// Helper Functions

// Initial State
export const initialState = {
  shelfList: {},
  itemList: {},
  item: {},
};

// Getters
export const getters = {
  getShelfList: state => state.shelfList,
  getItemList: state => state.itemList,
  getItem: state => state.item,
};

// Mutations
export const mutations = {
  [SET_SHELF_LIST](state, payload) {
    state.shelfList = { ...payload };
  },
  [SET_ITEM_LIST](state, payload) {
    state.itemList = { ...payload };
  },
  [SET_ITEM](state, payload) {
    state.item = { ...payload };
  }
};

// Actions
export const actions = {
  /*
    nameofaction: ({commit, state}, payload) => commit(MUTATION, payload),
   */
  fetchShelfList: ({commit}, payoad) => {
    const onSuccess = (result) => {
      commit(SHELF_LIST)
    };

    const onFailure = (error) => {

    };

    // api call here
  },
};

// Exports
export default {
  namespaced: true,
  state: { ...initialState },
  getters,
  mutations,
  actions,
}