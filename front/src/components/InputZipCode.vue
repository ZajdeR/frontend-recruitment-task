<template>
  <v-text-field
    :label="$t('ZIP_CODE')"
    :hint="hint"
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
      }
    },
    methods: {
      onInput(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
