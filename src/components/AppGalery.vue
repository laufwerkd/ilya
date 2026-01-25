<script setup>
import { PROJECTS } from '@/constants/projects'
</script>

<template>
  <div class="galery-grid justify-center ga-1">
    <div
      v-for="project in PROJECTS"
      :key="project.name"
      @click="() => console.log(project.meta.name)"
      class="project-preview overflow-hidden cursor-pointer"
    >
      <img :src="`/art/${project.files.path}/${project.files.thumbnail}`" class="thumbnail d-block w-100 h-100" />
    </div>
  </div>
</template>

<style scoped>
.galery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 256px));
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
