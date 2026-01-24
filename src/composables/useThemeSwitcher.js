import { useTheme } from 'vuetify'
import { useLocalStorageStore } from '@/stores/localStorageStore.js'
import { computed } from 'vue'

export default function useThemeSwitcher() {
  const localStorageStore = useLocalStorageStore()
  const vuetifyTheme = useTheme()

  const currentTheme = computed(() => vuetifyTheme.global.name.value)
  const themes = vuetifyTheme.themes.value

  const setToTheme = (value) => {
    vuetifyTheme.global.name.value = value
    localStorageStore.setItem('theme', value)
  }

  const saved = localStorageStore.getItem('theme')
  setToTheme(saved && themes[saved] ? saved : 'system')

  return {
    currentTheme,
    themes,
    setToTheme,
  }
}
