<script setup>
const props = defineProps({
  pa: {
    type: String,
    default: '3',
  },
  bgColor: {
    type: String,
    default: 'surface',
  },
})
</script>

<template>
  <v-card :class="`pa-${props.pa} d-flex flex-column ga-3 bg-${props.bgColor} rounded`">
    <slot />
  </v-card>
</template>

<style scoped>
.v-card {
  box-shadow:
    rgba(var(--v-theme-dark), 0.1) 0px 4px 6px -1px,
    rgba(var(--v-theme-dark), 0.06) 0px 2px 4px -1px;
}
</style>
