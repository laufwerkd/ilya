<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import useThemeSwitcher from './composables/useThemeSwitcher'

onMounted(() => {
  useThemeSwitcher()
})
</script>

<template>
  <AppMenu />
  <div id="wrapper" class="mx-auto pa-3">
    <RouterView />
  </div>
</template>

<style scoped>
#wrapper {
  position: relative;
  max-width: 1264px;
}
</style>
