<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@base/Navigation.vue'
</script>

<template>
  <main class="flex flex-col bg-zinc-900 h-screen relative">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </main>
</template>
