<script setup>
defineProps({
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
</script>

<template>
  <v-tooltip :="{ ...$attrs }" :text="text" />
</template>
