import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  loggedIn: false,
  contracts: [
    {
      company: 'Top Construction A/S',
      jobDescription: 'Reparation af vinduesramme.',
      worker: 'Anders Andersen',
      email: 'anders@topconstruction.dk',
      phone: '31 10 10 10',
      status: 'Kladde',
      price: '56,000',
      priceDescription: 'Fast Pris'
    },
    {
      company: 'Electric ApS',
      jobDescription: 'Installation af stikkontakt til køkkenmaskiner.',
      worker: 'Lars Larsen',
      email: 'lars@electric.dk',
      phone: '81 81 81 81',
      status: 'Sendt',
      price: '12,000',
      priceDescription: 'Fast Pris'
    },
    {
      company: 'Electric ApS',
      jobDescription: 'Installation af stikkontakt til køkkenmaskiner.',
      worker: 'Lars Larsen',
      email: 'lars@electric.dk',
      phone: '81 81 81 81',
      status: 'Sendt',
      price: '12,000',
      priceDescription: 'Fast Pris'
    },
    {
      company: 'VVS King A/S',
      jobDescription: 'Installation af toilet i badeværelset.',
      worker: 'Kim Olesen',
      email: 'kim@vvsking.dk',
      phone: '12 12 12 12',
      status: 'Accepteret',
      price: '55,000',
      priceDescription: 'Fast Pris'
    },
    {
      company: 'Rengøring',
      jobDescription: 'Rengøring efter renovation.',
      worker: 'Laura Nielsen',
      email: 'laura@rengøring.dk',
      phone: '23 23 23 23',
      status: 'Revision',
      price: '5,000',
      priceDescription: 'Overlag'
    },
    {
      company: 'Rengøring',
      jobDescription: 'Rengøring efter renovation.',
      worker: 'Laura Nielsen',
      email: 'laura@rengøring.dk',
      phone: '23 23 23 23',
      status: 'Revision',
      price: '5,000',
      priceDescription: 'Overlag'
    },
    {
      company: 'Rengøring',
      jobDescription: 'Rengøring efter renovation.',
      worker: 'Laura Nielsen',
      email: 'laura@rengøring.dk',
      phone: '23 23 23 23',
      status: 'Revision',
      price: '5,000',
      priceDescription: 'Overlag'
    }
  ]
};

const getters = {
  isLoggedIn: state => state.loggedIn,
  drafts: state => state.contracts.filter(contract => contract.status === 'Kladde'),
  send: state => state.contracts.filter(contract => contract.status === 'Sendt'),
  accepted: state => state.contracts.filter(contract => contract.status === 'Accepteret'),
  revisions: state => state.contracts.filter(contract => contract.status === 'Revision')
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
