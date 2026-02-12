<script setup>
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
    default: 'solo-filled',
  },
  density: {
    type: String,
    default: 'comfortable',
  },
  hideDetails: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <v-select :="{ ...$attrs, ...props, listProps: { density: 'compact' } }">
    <template #prepend-inner>
      <v-icon v-if="icon" :icon="icon" size="small" class="me-1" />
    </template>
    <template #selection="{ item }">
      <v-icon v-if="item.raw.icon" :icon="item.raw.icon" />
      <span v-else>{{ item[props.itemTitle] }}</span>
    </template>
  </v-select>
</template>
