import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#fffbf5',
          primary: '#f2e8c9',
          secondary: '#734e40',
          dark: '#0d0d0d',
          error: '#ec0a3f',
          info: '#0088fc',
          success: '#25d366',
          warning: '#ffff80',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#000000',
          surface: '#1b1a17',
          primary: '#cbb98f',
          secondary: '#b08978',
          dark: '#000000',
          error: '#ff5c7a',
          info: '#4dabff',
          success: '#3ddc84',
          warning: '#ffd966',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
