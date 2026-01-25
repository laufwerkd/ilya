<script setup>
import { SOCIALS } from '@/constants/artist'
</script>

<template>
  <header class="position-sticky bottom-0 left-0 pa-3 d-flex justify-center" style="z-index: 1">
    <BaseCard class="px-3">
      <div class="d-flex ga-3">
        <a v-for="social in SOCIALS" :key="social.url" :href="social.url" target="_blank">
          <v-icon :icon="social.icon" color="primary" />
        </a>
      </div>
    </BaseCard>
  </header>
</template>

<style scoped></style>
