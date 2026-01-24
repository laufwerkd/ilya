<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  itemTitle: {
    type: String,
    default: 'title',
  },
  icon: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'solo',
  },
  density: {
    type: String,
    default: 'compact',
  },
  hideDetails: {
    type: Boolean,
    default: true,
  },
})

const commonAttrs = computed(() => {})
</script>

<template>
  <v-select :="{ ...$attrs, ...props, ...commonAttrs }">
    <template #prepend-inner>
      <v-icon v-if="icon" :icon="icon" size="small" class="me-1" />
    </template>
    <template #selection="{ item }">
      <v-icon v-if="item.raw.icon" :icon="item.raw.icon" />
      <span v-else>{{ item[props.itemTitle] }}</span>
    </template>
  </v-select>
</template>

<style>
.v-field--variant-solo,
.v-field--variant-solo-filled {
  box-shadow: unset !important;
}
</style>
