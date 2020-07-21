<template>
  <v-container fluid>
    <base-loader v-if="isLoading" />
    <v-row v-else>
      <v-col cols="2">
        <v-subheader class="pa-0">
          {{ $t('LABEL_FROM') }}
        </v-subheader>
        <select-country v-model="selectedCountryFrom" />
      </v-col>
      <v-col cols="2">
        <v-subheader />
        <input-zip-code v-model="zipCodeTo" :hint="hintFrom" />
      </v-col>

      <v-col cols="2">
        <v-subheader class="pa-0">
          {{ $t('LABEL_TO') }}
        </v-subheader>
        <select-country v-model="selectedCountryTo" />
      </v-col>
      <v-col cols="2">
        <v-subheader />
        <input-zip-code v-model="zipCodeTo" :hint="hintTo" />
      </v-col>

      <v-col cols="1" class="d-flex justify-center">
        <v-icon>far fa-question-circle</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import BaseLoader from "@/components/BaseLoader";
  import SelectCountry from "@/components/SelectCountry";
  import InputZipCode from "@/components/InputZipCode";

  export default {
    name: "FormDelivery",
    components: {InputZipCode, SelectCountry, BaseLoader},
    computed: {
      ...mapState([
        'isLoading',
        'hintFrom',
        'hintTo'
      ]),
      selectedCountryFrom: {
        get() {
          return this.$store.state.selectedCountryFrom;
        },
        set(value) {
          this.$store.commit('SET_SELECTED_COUNTRY_FROM', value);
        }
      },
      selectedCountryTo: {
        get() {
          return this.$store.state.selectedCountryTo;
        },
        set(value) {
          this.$store.commit('SET_SELECTED_COUNTRY_TO', value);
        }
      },
      zipCodeFrom: {
        get() {
          return this.$store.state.zipCodeFrom;
        },
        set(value) {
          this.$store.commit('SET_ZIP_CODE_FROM', value);
        }
      },
      zipCodeTo: {
        get() {
          return this.$store.state.zipCodeTo;
        },
        set(value) {
          this.$store.commit('SET_ZIP_CODE_TO', value);
        }
      }
    },
    async created() {
      await this.fetchCountries();
    },
    methods: {
      ...mapActions([
        'fetchCountries'
      ])
    },
  };
</script>

