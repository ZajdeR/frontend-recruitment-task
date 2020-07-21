<template>
  <v-container>
    <base-loader v-if="isLoading" />
    <v-row v-else>
      <v-col cols="12" class="text-right">
        <filter-operators />
      </v-col>
      <v-col cols="12">
        <v-item-group class="d-flex full-width flex-wrap justify-center">
          <template v-for="operator in operators">
            <v-item :key="operator.id" v-slot:default="{ active, toggle }" class="ma-2">
              <card-operator :is-active="active" :operator="operator" @onClick="toggle" />
            </v-item>
          </template>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import BaseLoader from "@/components/BaseLoader";
  import CardOperator from "@/components/CardOperator";
  import FilterOperators from "@/components/FilterOperators";

  export default {
    name: "ListOperators",
    components: {FilterOperators, CardOperator, BaseLoader},
    computed: {
      ...mapState([
        'isLoading',
        'operators'
      ]),
    },
    async created() {
      await this.fetchOperators();
    },
    methods: {
      ...mapActions([
        'fetchOperators'
      ])
    },
  };
</script>

<style scoped lang="scss">

</style>
