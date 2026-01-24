<script setup></script>

<template>
  <BaseButton
    @click="console.error('missing action')"
    text="Toggle Theme"
    icon="mdi-theme-light-dark"
    color="secondary"
  />
</template>
