<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)

onMounted(() => {
  document.documentElement.style.setProperty('--app-header-height', `${headerRef.value.offsetHeight}px`)
})
</script>

<template>
  <header ref="headerRef" class="position-sticky top-0 left-0 pa-3 d-flex justify-space-between" style="z-index: 1">
    <AppLogo />
    <AppMenu />
  </header>
</template>

<style scoped></style>
