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
  <v-card :class="[`pa-${props.pa}`, 'd-flex flex-column ga-3', `bg-${props.bgColor}`]">
    <slot />
  </v-card>
</template>
