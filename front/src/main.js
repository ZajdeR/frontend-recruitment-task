import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;

Vue.use(Toasted);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
