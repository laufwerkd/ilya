<script setup>
import { ref } from 'vue'
import { IMAGES } from '@/constants/artist'

defineProps({
  project: {
    type: String,
    required: true,
  },
})

const imagePreview = ref({
  visible: false,
  src: null,
})

const onOpenImage = (src) => {
  imagePreview.value.visible = true
  imagePreview.value.src = src
}

const onCloseImage = () => {
  imagePreview.value.visible = false
}
</script>

<template>
  <div class="project-container">
  <div class="galery-grid justify-center ga-1">
    <div
      v-for="(image, index) in IMAGES.projects[project]"
      :key="index"
      @click="onOpenImage(image)"
      class="image-preview overflow-hidden cursor-pointer"
>
      <img :src="`${IMAGES.root}/${image}`" class="thumbnail d-block w-100 h-100" />
    </div>
  </div>
  <div class="project-description">
    {{ IMAGES.descriptions[project] }}
  </div>
  </div>

  <v-dialog v-model="imagePreview.visible" width="fit-content" style="backdrop-filter: blur(4px)">
    <div class="d-flex flex-column ga-1">
      <div class="d-flex justify-end">
        <BaseButton @click="onCloseImage()" icon="mdi-close" variant="text" size="default" />
      </div>
      <img :src="`${IMAGES.root}/${imagePreview.src}`" class="preview-image" />
    </div>
  </v-dialog>
</template>

<style scoped>
.galery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 380px);
  gap: 12px;

  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  width: auto;
}
@media (max-width: 768px) {
  .galery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .thumbnail {
    aspect-ratio: 16 / 9; /* сохраняем горизонтальную ориентацию */
  }
}
@media (max-width: 480px) {
  .galery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

.image-preview {
  overflow: hidden;
  cursor: pointer;
}

.image-preview:hover .thumbnail {
  transform: scale(1.05);
}

.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9; /* альбом */
  object-fit: cover;
  transition: transform 0.33s ease;
}

.preview-image {
  max-height: 90vh;
  max-width: 90vw;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
