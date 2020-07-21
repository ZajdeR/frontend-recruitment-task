<template>
  <v-text-field
    :value="zipCode"
    :rules="rules"
    :label="$t('ZIP_CODE')"
    :hint="!hint ? hint : $t('HINT', {format: hint})"
    persistent-hint
    outlined
    class="required"
    @input="onInput"
  />
</template>

<script>
  export default {
    name: "InputZipCode",
    props: {
      zipCode: {
        type: String,
        default: null
      },
      hint: {
        type: String,
        default: null
      },
      rules: {
        type: Array,
        default: () => ([])
      }
    },
    methods: {
      onInput(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
