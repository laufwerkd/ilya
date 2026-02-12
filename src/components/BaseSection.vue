<script setup>
defineProps({
  height: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section
    :style="{
      minHeight: `calc(${height}vh - var(--app-header-height))`,
    }"
  >
    <slot />
  </section>
</template>

<style scoped>
section {
  min-height: calc(100vh - var(--app-header-height));
}
</style>
