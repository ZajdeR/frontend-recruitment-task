<template>
  <v-autocomplete
    :value="selectedCountry"
    :items="countries"
    :label="$t('COUNTRY')"
    item-text="code"
    outlined
    class="required"
    @change="onChange"
  >
    <template v-slot:selection="slotProps">
      <img :src="`https://www.countryflags.io/${slotProps.item.code.toLowerCase()}/flat/24.png`" class="mr-4" /> {{ slotProps.item.code }}
    </template>
    <template v-slot:item="slotProps">
      <img :src="`https://www.countryflags.io/${slotProps.item.code.toLowerCase()}/flat/24.png`" class="mr-4" /> {{ slotProps.item.code }}
    </template>
  </v-autocomplete>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "SelectCountry",
    props: {
      selectedCountry: {
        type: Object,
        default: null
      },
    },
    computed: mapState([
      'countries'
    ]),
    methods: {
      onChange(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
