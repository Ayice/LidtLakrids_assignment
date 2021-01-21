import { SET_LOGGED_IN } from './mutation_types';

export default {
  setLoggedIn({ commit }, data) {
    commit(SET_LOGGED_IN, data);
  }
};
