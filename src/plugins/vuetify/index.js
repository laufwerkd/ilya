import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { THEMES } from '@/constants'
import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

const systemIsDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false

const customThemes = {
  ...THEMES,
  system: {
    title: 'System',
    dark: systemIsDark,
    colors: systemIsDark ? THEMES.dark.colors : THEMES.light.colors,
  },
}

export default createVuetify({
  theme: {
    defaultTheme: systemIsDark ? 'dark' : 'light',
    themes: customThemes,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
