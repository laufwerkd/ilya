<script setup>
import { ref } from 'vue'
import { FEATURES } from '@/constants'

const navItems = [{ name: 'home', text: 'Home' }]
const isMenuOpen = ref(false)

const onCloseMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    location="start"
    min-width="255"
    transition="fade-transition"
    v-model="isMenuOpen"
  >
    <template #activator="{ props }">
      <BaseButton :="props" icon="mdi-menu" size="default" class="opener" />
    </template>
    <BaseCard class="me-3">
      <div class="d-flex flex-column ga-1">
        <BaseButton v-for="item in navItems" :to="{ name: item.name }" :text="item.text" @click="onCloseMenu" />
      </div>
      <template v-if="FEATURES.themes">
        <v-divider />
        <AppThemeSwitcher @selection="onCloseMenu" />
      </template>
    </BaseCard>
  </v-menu>
</template>

<style scoped>
.opener {
  position: fixed;
  top: 12px;
  right: 12px;
}
</style>
