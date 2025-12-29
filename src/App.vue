<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@base/Navigation.vue'
</script>

<template>
  <main class="flex flex-col bg-zinc-900 h-screen">
    <Navigation/>
    <article class="grow">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </article>
  </main>
</template>