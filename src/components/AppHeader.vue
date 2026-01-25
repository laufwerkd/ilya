<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)

onMounted(() => {
  const height = headerRef.value.offsetHeight
  document.documentElement.style.setProperty('--app-header-height', `${height}px`)
})
</script>

<template>
  <header ref="headerRef" class="position-sticky top-0 left-0 pa-3 d-flex justify-space-between" style="z-index: 1">
    <img alt="logo" />
    <AppMenu />
  </header>
</template>

<style scoped></style>
