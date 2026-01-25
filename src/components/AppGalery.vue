<script setup>
import { ref, computed } from 'vue'
import { PROJECTS } from '@/constants/projects'

const preview = ref({
  visible: false,
  project: null,
})

const image = ref({
  visible: false,
  src: null,
})

const onOpenPreview = (project) => {
  preview.value.visible = true
  preview.value.project = project
}

const onClosePreview = () => {
  preview.value.visible = false
}

const onOpenImage = (src) => {
  image.value.visible = true
  image.value.src = src
}

const onCloseImage = () => {
  image.value.visible = false
}
</script>

<template>
  <div class="galery-grid justify-center ga-1">
    <div
      v-for="project in PROJECTS"
      :key="project.meta.name"
      @click="onOpenPreview(project)"
      class="project-preview overflow-hidden cursor-pointer"
    >
      <img :src="`/art/${project.files.path}/${project.files.thumbnail}`" class="thumbnail d-block w-100 h-100" />
    </div>
  </div>

  <v-dialog v-model="preview.visible" max-width="824" style="backdrop-filter: blur(4px)">
    <BaseCard>
      <div class="d-flex justify-space-between">
        <h1>{{ preview?.project.meta.name }}</h1>
        <BaseButton @click="onClosePreview()" icon="mdi-close" variant="text" size="default" />
      </div>
      <div class="scrollable-grid justify-center ga-1 w-100">
        <div
          v-for="image in preview?.project.files.images"
          :key="image"
          @click="onOpenImage(image)"
          class="project-preview overflow-hidden cursor-pointer"
        >
          <img :src="`/art/${preview?.project.files.path}/${image}`" class="thumbnail d-block w-100 h-100" />
        </div>
      </div>
      <span class="text-disabled text-end">{{ preview?.project.meta.date }}</span>
    </BaseCard>
  </v-dialog>

  <v-dialog v-model="image.visible" width="fit-content" style="backdrop-filter: blur(4px)">
    <div class="d-flex flex-column ga-1">
      <div class="d-flex justify-end">
        <BaseButton @click="onCloseImage()" icon="mdi-close" variant="text" size="default" />
      </div>
      <img :src="`/art/${preview?.project.files.path}/${image.src}`" width="100%" height="auto" />
    </div>
  </v-dialog>
</template>

<style scoped>
.galery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 256px));
}

.scrollable-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 256px));
  overflow-y: auto;
  max-height: 60vh;
}

.project-preview:hover .thumbnail {
  transform: scale(1.1);
}

.thumbnail {
  object-fit: cover;
  aspect-ratio: 1 / 1.414;
  transition: transform 0.33s ease;
}
</style>
