<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-autocomplete
          v-model="selectedCountry"
          :items="countries"
          :label="$t('COUNTRY')"
          item-text="code"
          outlined
        >
          <template v-slot:selection="slotProps">
            <img :src="`https://www.countryflags.io/${slotProps.item.code.toLowerCase()}/flat/24.png`" class="mr-4" /> {{ slotProps.item.code }}
          </template>
          <template v-slot:item="slotProps">
            <img :src="`https://www.countryflags.io/${slotProps.item.code.toLowerCase()}/flat/24.png`" class="mr-4" /> {{ slotProps.item.code }}
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from "vuex";

  export default {
    name: "FieldZipCode",
    computed: mapState([
      'countries',
      'selectedCountry'
    ]),
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

