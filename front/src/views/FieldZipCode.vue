<template>
  <div />
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "FieldZipCode",
    created() {
      this.fetchCountries();
    },
    methods: {
      ...mapActions([
        'fetchCountries'
      ])
    },
  };
</script>

