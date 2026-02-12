<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'flat',
  },
  tooltip: {
    type: String,
    default: null,
  },
})

const commonAttrs = computed(() => {
  return {
    size: !props.text && props.icon && !props.size ? '36' : props.size,
    icon: !props.text && props.icon,
  }
})
</script>

<template>
  <v-btn v-bind="{ ...$attrs, ...props, ...commonAttrs.value }" :class="{ rounded: !props.icon || props.text }">
    <div class="d-flex align-center ga-2">
      <v-icon v-if="icon" :icon="icon" :class="{ 'ms-n1': text && icon }" size="small" />
      <span v-if="text">{{ text }}</span>
      <slot />
    </div>
    <BaseTooltip v-if="tooltip" :text="tooltip" />
  </v-btn>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
