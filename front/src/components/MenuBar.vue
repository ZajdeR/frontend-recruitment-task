<template>
  <v-app-bar app color="primary" dark>
    <v-btn class="mx-2" @click.prevent="$router.push('/')">
      {{ $t('MENU.BUTTON.0') }}
    </v-btn>
    <v-btn v-for="menuItem in menuItems" :key="menuItem.id" :class="['mx-2', menuItem.class]" @click.prevent="doRedirect(`/task/${menuItem.id}`)">
      {{ $t(`MENU.BUTTON.${menuItem.id}`) }}
    </v-btn>
    <v-spacer />
    <v-btn text @click="$root.$i18n.locale = 'pl'">
      <v-img src="../assets/pl.svg" max-width="30" class="rounded-circle" />
    </v-btn>
    <v-btn text @click="$root.$i18n.locale = 'en'">
      <v-img src="../assets/en.svg" max-width="30" class="rounded-circle" />
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: "MenuBar",
    data: () => ({
      menuItems: [
        {id: 1, class: 'red'},
        {id: 2, class: 'green'},
        {id: 3, class: 'orange'},
      ]
    }),
    methods: {
      doRedirect(to) {
        if (this.$route.path !== to) {
          this.$router.push(to);
        }
      }
    }
  };
</script>
