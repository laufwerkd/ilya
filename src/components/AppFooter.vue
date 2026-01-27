<script setup>
import { MAIL, SOCIALS } from '@/constants/artist'
</script>

<template>
  <footer class="position-sticky bottom-0 left-0 pa-3 d-flex justify-center" style="z-index: 1; margin-top: 10vh;">
    <BaseCard class="px-3" v-if="SOCIALS.length || MAIL">
      <div class="d-flex ga-3">
        <a v-if="SOCIALS.length" v-for="social in SOCIALS" :key="social.url" :href="social.url" target="_blank">
          <v-icon :icon="social.icon" color="secondary" />
        </a>
        <a v-if="MAIL" :href="`mailto:${MAIL}`">
          <v-icon icon="mdi-email" color="secondary" />
        </a>
      </div>
    </BaseCard>
  </footer>
</template>

<style scoped></style>
