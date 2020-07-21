<template>
  <v-app>
    <menu-bar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import MenuBar from "@/components/MenuBar";

  export default {
    name: 'App',
    components: {MenuBar},

  };
</script>

<style lang="scss">
  .required .v-label::after {
    content: " *";
    color: red;
  }
</style>
