import Vue from 'vue';

export default {
  fetchCountries() {
    return Vue.axios.post('/internal/courier-u/initialize');
  },
};
