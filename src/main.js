import Vue from 'vue';
import store from './store/store.js';
import router from './router/index.js';

import App from './App.vue';

new Vue({
  el: '#lidt-lakrids',
  store,
  router,
  render: h => h(App)
});
