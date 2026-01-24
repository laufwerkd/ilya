<script setup>
import { ref } from 'vue'

const items = ref([
  { value: 'a', title: 'A' },
  { value: 'b', title: 'B' },
])
</script>

<template>
  <BaseCard>
    <h1>Test</h1>
    <v-divider />
    <div class="d-flex flex-column ga-3">
      <div class="d-flex ga-3">
        <BaseButton text="Button" />
        <BaseButton text="Icon Button" icon="mdi-check" />
        <BaseButton icon="mdi-check" />
      </div>
      <BaseSelect :items="items" label="Selection" />
      <BaseSelect :items="items" label="Icon Selection" icon="mdi-check" />
    </div>
  </BaseCard>
</template>

<style scoped></style>
