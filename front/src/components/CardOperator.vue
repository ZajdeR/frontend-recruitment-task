<template>
  <v-card
    :color="operator.color"
    class="d-flex align-center justify-center full-width"
    width="170"
    @click="$emit('onClick')"
  >
    <v-scroll-y-transition>
      <div class="d-flex flex-column align-center text-center full-width">
        <v-img v-if="operator.logo" :src="operator.logo" width="100" :alt="operator.name" />
        <div class="full-width white--text">
          {{ operator.name }}
        </div>
        <base-loader v-if="isPriceLoading" />
        <div v-else-if="operator.prices && operator.prices[0]" class="white--text font-weight-bold">
          {{ operator.prices[0].priceNet }} {{ operator.prices[0].currency }}
        </div>
      </div>
    </v-scroll-y-transition>
  </v-card>
</template>

<script>
  import {mapActions} from "vuex";
  import BaseLoader from "@/components/BaseLoader";

  export default {
    name: "CardOperator",
    components: {BaseLoader},
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      operator: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      isPriceLoading: false
    }),
    async created() {
      this.isPriceLoading = true;
      await this.fetchOperatorPrices(this.operator.id).finally(() => {
        this.isPriceLoading = false;
      });
    },
    methods: {
      ...mapActions([
        'fetchOperatorPrices'
      ])
    },
  };
</script>
