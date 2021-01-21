import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import ContractOverview from '../views/ContractOverview.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
  {
    path: '/contracts',
    component: ContractOverview,
    name: 'ContractOverview'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
});

export default router;
