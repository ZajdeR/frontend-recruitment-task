<template>
  <v-form v-model="valid">
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
          <input-zip-code v-model="zipCodeFrom" :hint="hintFrom" :rules="zipCodeRuleFrom" />
        </v-col>

        <v-col cols="2">
          <v-subheader class="pa-0">
            {{ $t('LABEL_TO') }}
          </v-subheader>
          <select-country v-model="selectedCountryTo" />
        </v-col>
        <v-col cols="2">
          <v-subheader />
          <input-zip-code v-model="zipCodeTo" :hint="hintTo" :rules="zipCodeRuleTo" />
        </v-col>

        <v-col v-if="!valid" cols="1">
          <v-subheader />
          <tooltip-delivery-form v-if="ruleTo" :rules="ruleTo.message" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  import {mapActions, mapGetters, mapState} from "vuex";
  import BaseLoader from "@/components/BaseLoader";
  import SelectCountry from "@/components/SelectCountry";
  import InputZipCode from "@/components/InputZipCode";
  import TooltipDeliveryForm from "@/components/TooltipDeliveryForm";

  export default {
    name: "FormDelivery",
    components: {TooltipDeliveryForm, InputZipCode, SelectCountry, BaseLoader},
    data: () => ({
      valid: true,

    }),
    computed: {
      ...mapState([
        'isLoading',
      ]),
      ...mapGetters([
        'ruleFrom',
        'ruleTo'
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
      },
      hintFrom() {
        if (!this.ruleFrom || !this.ruleFrom.message || this.ruleFrom.message.length === 0) {
          return null;
        }

        return this.ruleFrom.message[0].split('\\N').join('X');
      },
      hintTo() {
        if (!this.ruleTo || !this.ruleTo.message || this.ruleTo.message.length === 0) {
          return null;
        }

        return this.ruleTo.message[0].split('\\N').join('X');
      },
      zipCodeRuleFrom() {
        return [
          v => !!v || this.$t('REQUIRED_FIELD'),
          v => this.ruleFrom && v && new RegExp(this.ruleFrom.regexp).test(v) || this.$t('INVALID_FORMAT'),
        ];
      },
      zipCodeRuleTo() {
        return [
          v => !!v || this.$t('REQUIRED_FIELD'),
          v => this.ruleTo && v && new RegExp(this.ruleTo.regexp).test(v) || this.$t('INVALID_FORMAT'),
        ];
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

