<script setup>
import { ref } from 'vue'
import { FEATURES } from '@/constants'

const isMenuOpen = ref(false)

const onCloseMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <v-menu :close-on-content-click="false" location="start" transition="none" v-model="isMenuOpen">
    <template #activator="{ props }">
      <BaseButton :="props" icon="mdi-menu" size="default" class="box-shadow" />
    </template>
    <BaseCard class="me-3">
      <template v-if="FEATURES.themes">
        <AppThemeSwitcher @selection="onCloseMenu" />
      </template>
    </BaseCard>
  </v-menu>
</template>
