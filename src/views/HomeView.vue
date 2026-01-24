<script setup>
import { ref } from 'vue'

const items = ref([
  { value: 'flash', title: 'Flash' },
  { value: 'cat', title: 'Cat' },
])
</script>

<template>
  <BaseCard>
    <h1>Test</h1>
    <v-divider />
    <div class="d-flex flex-column ga-3">
      <div class="d-flex ga-3">
        <BaseButton text="Button" />
        <BaseButton text="Prepend Icon" icon="mdi-flash" />
        <BaseButton icon="mdi-flash" />
      </div>
      <BaseSelect :items="items" label="Theme" />
    </div>
  </BaseCard>
</template>

<style scoped></style>
