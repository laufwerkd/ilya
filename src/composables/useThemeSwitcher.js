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
    let themeToApply = value

    if (value === 'system') {
      themeToApply = getSystemTheme()
    }

    if (!themes[themeToApply]) {
      themeToApply = 'dark' // fallback
    }

    vuetifyTheme.global.name.value = themeToApply
    localStorageStore.setItem('theme', themeToApply)
  }

  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  // auto apply on startup
  const saved = localStorageStore.getItem('theme')
  setToTheme(saved ?? 'system')

  // auto switch on system theme
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const listener = (e) => setToTheme('system')
  if (saved === 'system') mediaQuery.addEventListener('change', listener)
  else mediaQuery.removeEventListener('change', listener)

  return {
    currentTheme,
    themes,
    setToTheme,
  }
}
