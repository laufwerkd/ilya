<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import useThemeSwitcher from './composables/useThemeSwitcher'

onMounted(() => {
  useThemeSwitcher()
})
</script>

<template>
  <v-container class="pa-0" max-width="1800">
    <AppHeader />
    <RouterView />
  </v-container>
</template>
