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
  frosted: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <v-card
    :class="[`pa-${props.pa}`, 'd-flex flex-column ga-3 rounded', props.frosted ? 'frosted' : `bg-${props.bgColor}`]"
    :style="props.frosted ? { '--frost-color': `var(--v-theme-${props.bgColor})` } : {}"
  >
    <slot />
  </v-card>
</template>

<style scoped>
.frosted {
  backdrop-filter: blur(8px) saturate(140%);
  background-color: rgba(var(--frost-color), 0.33) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
}
</style>
