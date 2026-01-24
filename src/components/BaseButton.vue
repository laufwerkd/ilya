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
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'flat',
  },
  size: {
    type: String,
    default: null,
  },
  tooltip: {
    type: String,
    default: null,
  },
})

const isIcon = computed(() => !props.text && props.icon)

const commonAttrs = computed(() => {
  return {
    color: props.color,
    variant: props.variant,
    size: !props.text && props.icon && !props.size ? 'small' : props.size || 'default',
    icon: !props.text && props.icon,
  }
})
</script>

<template>
  <v-btn :="{ ...$attrs, ...commonAttrs }" :class="{ rounded: !props.icon || props.text }">
    <div class="d-flex ga-2">
      <v-icon v-if="icon" :icon="icon" />
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
