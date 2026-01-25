<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
section {
  min-height: calc(100vh - var(--app-header-height));
}
</style>
