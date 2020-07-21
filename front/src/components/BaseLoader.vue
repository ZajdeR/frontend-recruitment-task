<template>
  <div class="d-flex flex-column full-width align-center mt-16">
    <v-icon x-large>fas fa-circle-notch fa-10x fa-spin</v-icon>
    <h1>
      {{ $t('LOADING') }}
    </h1>
  </div>
</template>

<script>
  export default {
    name: "BaseLoader"
  };
</script>
