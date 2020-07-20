import Vue from "vue";
import Vuex from "vuex";
import MainApi from "@/api/MainApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: null,
    validationRules: null
  },
  mutations: {
    SET_COUNTRIES: (state, payload) => {
      state.countries = payload;
    },
    SET_VALIDATION_RULES: (state, payload) => {
      state.validationRules = payload;
    }
  },
  actions: {
    fetchCountries: ({ commit }) => {
      MainApi.fetchCountries().then(response => {
        if (response.data) {
          commit('SET_COUNTRIES', response.data.countries);
          commit('SET_VALIDATION_RULES', response.data.zipValidationRules);
        }
      }).catch(error => {
        Vue.toasted(error);
      });
    }
  },
});
