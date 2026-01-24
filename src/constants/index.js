const FEATURES = {
  themes: true,
}

const THEMES = {
  light: {
    title: 'Light',
    dark: false,
    colors: {
      background: '#ffffff',
      surface: '#fffbf5',
      primary: '#f2e8c9',
      secondary: '#734e40',
      shadow: '#000000',
      error: '#ec0a3f',
      info: '#0088fc',
      success: '#25d366',
      warning: '#ffff80',
    },
  },
  dark: {
    title: 'Dark',
    dark: true,
    colors: {
      background: '#000000',
      surface: '#1b1a17',
      primary: '#cbb98f',
      secondary: '#b08978',
      shadow: '#000000',
      error: '#ff5c7a',
      info: '#4dabff',
      success: '#3ddc84',
      warning: '#ffd966',
    },
  },
}

export { FEATURES, THEMES }
