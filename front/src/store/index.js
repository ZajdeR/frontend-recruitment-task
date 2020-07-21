import Vue from "vue";
import Vuex from "vuex";
import MainApi from "@/api/MainApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: null,
    validationRules: null,
    selectedCountryFrom: null,
    selectedCountryTo: null,
    zipCodeFrom: null,
    zipCodeTo: null,
    isLoading: false,
  },
  mutations: {
    SET_COUNTRIES: (state, payload) => {
      state.countries = payload;
    },
    SET_VALIDATION_RULES: (state, payload) => {
      state.validationRules = payload;
    },
    SET_SELECTED_COUNTRY_FROM: (state, payload) => {
      state.selectedCountryFrom = payload;
    },
    SET_SELECTED_COUNTRY_TO: (state, payload) => {
      state.selectedCountryTo = payload;
    },
    SET_ZIP_CODE_FROM: (state, payload) => {
      state.zipCodeFrom = payload;
    },
    SET_ZIP_CODE_TO: (state, payload) => {
      state.zipCodeTo = payload;
    },
    SET_LOADING: (state, payload) => {
      state.isLoading = payload;
    }
  },
  actions: {
    fetchCountries: ({commit}) => {
      commit('SET_LOADING', true);
      MainApi.fetchCountries().then(response => {
        if (response.data) {
          commit('SET_COUNTRIES', response.data.countries);
          commit('SET_VALIDATION_RULES', response.data.zipValidationRules);
        }
      }).catch(error => {
        Vue.toasted(error);
      }).finally(() => {
        commit('SET_LOADING', false);
      });
    }
  },
  getters: {
    ruleFrom: state => {
      if (!state.selectedCountryFrom) {
        return null;
      }

      return state.validationRules[state.selectedCountryFrom];
    },
    ruleTo: state => {
      if (!state.selectedCountryTo) {
        return null;
      }

      return state.validationRules[state.selectedCountryTo];
    },
  }
});
