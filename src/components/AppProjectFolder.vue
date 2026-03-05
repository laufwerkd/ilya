<script setup>
import { ref, computed } from 'vue'
import { IMAGES } from '@/constants/artist'

const props = defineProps({
  project: {
    type: String,
    required: true,
  },
})

const folderOpen = ref(false)

const previewSrc = computed(() => `${IMAGES.root}/${IMAGES.projects[props.project][0]}`)
const description = computed(() => IMAGES.descriptions[props.project])
const imageCount = computed(() => IMAGES.projects[props.project].length)
</script>

<template>
  <div class="folder-card cursor-pointer" @click="folderOpen = true">
    <div class="folder-preview overflow-hidden">
      <img :src="previewSrc" class="folder-thumb d-block w-100" />
      <div class="folder-overlay d-flex flex-column justify-end pa-3">
        <div class="folder-title">{{ description }}</div>
        <div class="folder-count">{{ imageCount }} images</div>
      </div>
    </div>
  </div>

  <v-dialog v-model="folderOpen" max-width="1200" scrollable style="backdrop-filter: blur(4px)">
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center py-2 px-4">
        <span>{{ description }}</span>
        <BaseButton icon="mdi-close" variant="text" size="default" @click="folderOpen = false" />
      </v-card-title>
      <v-divider />
      <v-card-text class="pa-4">
        <AppGalery :project="project" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.folder-card {
  width: 380px;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.folder-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.folder-preview {
  position: relative;
}

.folder-thumb {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.33s ease;
}

.folder-card:hover .folder-thumb {
  transform: scale(1.05);
}

.folder-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.folder-card:hover .folder-overlay {
  opacity: 1;
}

.folder-title {
  color: #fff;
  font-size: clamp(0.85rem, 1.2vw, 1.1rem);
  font-weight: 600;
  line-height: 1.3;
}

.folder-count {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.8rem;
  margin-top: 2px;
}
</style>
