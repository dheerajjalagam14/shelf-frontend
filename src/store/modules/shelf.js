// remove mock data once api is hooked up.
import mockData from '@/mockData/dataMock';

// import api

// Constants
// export const NAME = 'NAME';
export const SET_SHELF_LIST = 'SET_SHELF_LIST';
export const SET_ITEM_LIST = 'SET_ITEM_LIST';
export const SET_ITEM = 'SET_ITEM';
export const SET_ERROR = 'SET_ERROR';

// Helper Functions

// Initial State
export const initialState = {
  shelfList: {},
  itemList: {},
  item: {},
  errorMsgs: {
    fetchShelfList: null,
    fetchItemList: null,
    fetchItem: null,
  }
};

// Getters
export const getters = {
  getShelfList: state => state.shelfList,
  getItemList: state => state.itemList,
  getItem: state => state.item,
};

// Mutations
export const mutations = {
  [SET_SHELF_LIST](state, fetchedShelfList) {
    state.shelfList = { ...fetchedShelfList };
  },
  [SET_ITEM_LIST](state, fetchedItemList) {
    state.itemList = { ...fetchedItemList };
  },
  [SET_ITEM](state, fetchedItem) {
    state.item = { ...fetchedItem };
  },
  [SET_ERROR](state, { message, field }) {
    state.errorMsgs[field] = message;
  },
};

// Actions
export const actions = {
  // When the user first logs in fetch their shelves.
  fetchShelfList: ({commit}, userID) => {
    const onSuccess = (result) => {
      commit(SET_SHELF_LIST, result);
    };

    const onFailure = (error) => {
      commit(SET_ERROR, { message: error.message, field: 'fetchShelfList' });
    };

    // api call here
  },

  fetchItemList: ({commit}, shelfID) => {
    const onSuccess = (result) => {
      commit(SET_ITEM_LIST, result);
    };

    const onFailure = (error) => {
      commit(SET_ERROR, { message: error.message, field: 'fetchItemList' });
    };

    // api call here
  },

  fetchItem: ({commit}, itemID) => {
    const onSuccess = (result) => {
      commit(SET_ITEM, result);
    };

    const onFailure = (error) => {
      commit(SET_ERROR, { message: error.message, field: 'fetchItem' });
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