<script setup>
import { IMAGES } from '@/constants/artist'
</script>

<template>
  <BaseSection height="100" class="d-flex flex-column justify-center ga-1">
    <AppGalery v-for="(images, projectKey) in IMAGES.projects" :key="projectKey" :project="projectKey" />
  </BaseSection>
  <BaseSection height="75" class="pa-3 d-flex flex-column justify-center align-center">
    <div class="d-flex flex-column ga-3">
      <div class="pt-5 px-9 d-flex align-center ga-9">
        <div class="text-hand text-primary text-center font-weight-bold" style="font-size: 4rem">Résumé</div>
        <v-divider class="border-surface border-md border-opacity-100 rounded-pill" />
      </div>
      <BaseCard class="w-100" style="max-width: 800px" pa="9">
        <h2 class="text-primary text-decoration-underline">Цель</h2>
        <p>
          Стремлюсь к профессиональному развитию в области концепт арта и иллюстрации, чтобы вносить вклад в создание
          миров для видеоигр, кино, анимации. Моя цель — создавать интересные, уникальные, запоминающиеся локации и
          персонажей, которые смогут вдохновить и лучше погрузить зрителя в фантастические вселенные.
        </p>
      </BaseCard>
      <BaseCard class="w-100" style="max-width: 800px" pa="9">
        <h2 class="text-primary text-decoration-underline">Образование</h2>
        <div>
          <h3>Оператор по информационной безопасности автоматизированных систем</h3>
          <div><i>НППК</i> — Новосибирск, Россия</div>
          <div class="text-disabled"><i>2021 - 2024</i></div>
        </div>
        <div>
          <h3 class="text-accent">Дополнительное образование и курсы</h3>
          <ul class="ps-9">
            <li>Jama Jurabaev - Narrative Concept Art</li>
            <li>Concept art with Marc Brunet</li>
            <li>Jama Jurabaev - Workflow and Brush Efficiency</li>
            <li>Intro to Environment Painting with Maciej Kuciara</li>
          </ul>
        </div>
      </BaseCard>
      <BaseCard class="w-100" style="max-width: 800px" pa="9">
        <h2 class="text-primary text-decoration-underline">Навыки</h2>
        <v-list density="compact" class="pa-0">
          <v-list-item>
            <template #prepend>
              <v-icon color="primary" icon="mdi-application" />
            </template>
            <v-list-item-title class="text-accent font-weight-bold">Программное обеспечение</v-list-item-title>
            Adobe Photoshop, Clip Studio Paint, Blender, SketchUp
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <v-icon color="primary" icon="mdi-palette" />
            </template>
            <v-list-item-title class="text-accent font-weight-bold">Техники</v-list-item-title>
            Цифровая живопись, меттпейнт, скетчинг, традиционная живопись
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <v-icon color="primary" icon="mdi-brush" />
            </template>
            <v-list-item-title class="text-accent font-weight-bold">Стиль</v-list-item-title>
            Фэнтези, научная фантастика, реализм
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <v-icon color="primary" icon="mdi-account-group" />
            </template>
            <v-list-item-title class="text-accent font-weight-bold">Командная работа</v-list-item-title>
            Опыт работы в междисциплинарных командах, коммуникация с клиентами и разработчиками
          </v-list-item>
        </v-list>
      </BaseCard>
      <BaseCard class="w-100" style="max-width: 800px" pa="9">
        <h2 class="text-primary text-decoration-underline">О себе</h2>
        <div>
          <h3 class="text-accent">Личные качества</h3>
          <ul class="ps-9">
            <li>Креативность и внимание к деталям</li>
            <li>Быстрая обучаемость</li>
            <li>Способность к самостоятельной работе и эффективной коммуникации</li>
            <li>Гибкость и готовность к обучению новым техникам и стилям</li>
            <li>Хорошее восприятие критики и умение с ней работать</li>
          </ul>
        </div>
        <div>
          <h3 class="text-accent">Интересы</h3>
          <ul class="ps-9">
            <li>Фотография, видеоигры, книги, спорт, кино, анимация</li>
          </ul>
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>
