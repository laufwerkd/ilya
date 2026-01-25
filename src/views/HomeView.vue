<script setup>
import { ref } from 'vue'

const items = ref([
  { value: 'a', title: 'A' },
  { value: 'b', title: 'B' },
])
</script>

<template>
  <BaseCard>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde pariatur possimus veritatis velit tempora
      quaerat eaque sapiente atque odit obcaecati harum iste, sit debitis quisquam quod numquam consequatur non?
    </p>
    <v-divider />
    <h2>Buttons</h2>
    <div class="d-flex ga-3">
      <BaseButton text="Button" />
      <BaseButton text="Icon Button" icon="mdi-check" />
      <BaseButton icon="mdi-check" />
    </div>
    <v-divider />
    <h2>Selection</h2>
    <BaseSelect :items="items" label="Selection" />
    <BaseSelect :items="items" label="Icon Selection" icon="mdi-check" />
  </BaseCard>
</template>

<style scoped></style>
