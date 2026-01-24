<script setup>
import useThemeSwitcher from '@/composables/useThemeSwitcher'

const { currentTheme, themes, setToTheme } = useThemeSwitcher()

const emit = defineEmits(['selection'])

const items = [
  ...Object.entries(themes).map(([key, item]) => ({
    value: key,
    title: item.title,
    props: {
      onClick: () => {
        setToTheme(key)
        emit('selection')
      },
    },
  })),
  {
    value: 'system',
    title: 'System',
    props: {
      onClick: () => {
        setToTheme('system')
        emit('selection')
      },
    },
  },
]
</script>

<template>
  <BaseSelect v-model="currentTheme" :items="items" label="Theme" icon="mdi-theme-light-dark" />
</template>
