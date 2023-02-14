<script setup>
import { RouterView } from 'vue-router'
import Filters from './components/Filters.vue'
</script>

<template>
  <div class="main">
    <Filters />

    <RouterView />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
