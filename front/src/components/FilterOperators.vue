<template>
  <div>
    <span>{{ $t('SORTING') }}</span>
    <v-btn :class="{ 'warning': sort === 'name'}" text>
      {{ $t('SORT_NAME') }}
    </v-btn>
    |
    <v-btn :class="{ 'warning': sort === 'price'}" text>
      {{ $t('SORT_PRICE') }}
    </v-btn>
    |
    <v-btn :class="{ 'warning': sort === 'time'}" text>
      {{ $t('SORT_TIME') }}
    </v-btn>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "FilterOperators",
    computed: mapState([
      'sort'
    ])
  };
</script>
