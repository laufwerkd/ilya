import { useTheme } from 'vuetify'
import { useLocalStorageStore } from '@/stores/localStorageStore.js'
import { computed } from 'vue'

export default function useThemeSwitcher() {
  const localStorageStore = useLocalStorageStore()
  const vuetifyTheme = useTheme()

  const currentTheme = computed(() => ({
    localStorage: localStorageStore.getItem('theme'),
    vuetifyTheme: { value: vuetifyTheme.global.name.value, ...vuetifyTheme.current.value },
  }))

  const themes = vuetifyTheme.themes.value

  const setToTheme = (value) => {
    if (!themes[value]) value = 'system' // fallback
    vuetifyTheme.global.name.value = value
    localStorageStore.setItem('theme', value)
  }

  // auto apply on startup
  const saved = localStorageStore.getItem('theme')
  setToTheme(saved ?? 'system')

  return {
    currentTheme,
    themes,
    setToTheme,
  }
}
