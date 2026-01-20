<script setup>
import { ref, onMounted } from 'vue'
import useThemeSwitcher from '@/composables/useThemeSwitcher.js'

const { theme, setToTheme } = useThemeSwitcher()

const navItems = [{ name: 'home', text: 'Home' }]
const isMenuOpen = ref(false)

const onCloseMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  setToTheme(theme)
})
</script>

<template>
  <v-menu v-model="isMenuOpen" transition="fade-transition" location="start" :close-on-content-click="false">
    <template #activator="{ props }">
      <BaseButton :="props" icon="mdi-menu" size="default" class="opener" />
    </template>
    <BaseCard class="me-3">
      <div class="d-flex flex-column ga-1">
        <BaseButton v-for="item in navItems" :to="{ name: item.name }" :text="item.text" @click="onCloseMenu" />
      </div>
      <v-divider />
      <AppThemeSwitcher />
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
