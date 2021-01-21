import { SET_LOGGED_IN } from './mutation_types';

export default {
  [ SET_LOGGED_IN ](state, data) {
    state.loggedIn = data;
  }
};
