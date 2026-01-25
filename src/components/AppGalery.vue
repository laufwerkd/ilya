<script setup>
import { ref } from 'vue'
import { IMAGES_ROOT, IMAGES_FILES } from '@/constants/artist'

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
  <div class="galery-grid justify-center ga-1">
    <div v-for="image in IMAGES_FILES" @click="onOpenImage(image)" class="image-preview overflow-hidden cursor-pointer">
      <img :src="`${IMAGES_ROOT}/${image}`" class="thumbnail d-block w-100 h-100" />
    </div>
  </div>

  <v-dialog v-model="imagePreview.visible" width="fit-content" style="backdrop-filter: blur(4px)">
    <div class="d-flex flex-column ga-1">
      <div class="d-flex justify-end">
        <BaseButton @click="onCloseImage()" icon="mdi-close" variant="text" size="default" />
      </div>
      <img :src="`${IMAGES_ROOT}/${imagePreview.src}`" width="100%" height="auto" />
    </div>
  </v-dialog>
</template>

<style scoped>
.galery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 256px));
}

.image-preview:hover .thumbnail {
  transform: scale(1.1);
}

.thumbnail {
  object-fit: cover;
  aspect-ratio: 1 / 1.414;
  transition: transform 0.33s ease;
}
</style>
