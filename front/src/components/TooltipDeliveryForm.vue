<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>far fa-question-circle</v-icon>
      </v-btn>
    </template>
    <div>
      {{ $t('RULES_LIST') }}
    </div>
    <template v-for="(rule, index) in rules">
      <div :key="index">
        {{ rule }}
      </div>
    </template>
    <div>
      {{ $t('RULES_DESCRIPTION') }}
    </div>
    <div>
      {{ $t('RULES_DESCRIPTION_1') }}
    </div>
    <div>
      {{ $t('RULES_DESCRIPTION_2') }}
    </div>
    <div>{{ $t('RULES_FOOTER') }}</div>
  </v-tooltip>
</template>

<script>
  export default {
    name: "TooltipDeliveryForm",
    props: {
      rules: {
        type: Array,
        default: () => ([])
      }
    }
  };
</script>

