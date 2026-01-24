<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: 'top',
  },
  openDelay: {
    type: undefined,
    default: 500,
  },
  activator: {
    type: undefined,
    default: 'parent',
  },
})

const commonAttrs = computed(() => {})
</script>

<template>
  <v-tooltip :="{ ...$attrs, ...props, ...commonAttrs }" :text="text" />
</template>
