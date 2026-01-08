<script>
import NavPoint from '@base/NavPoint.vue'
import { pathPart } from '@src/enviroment.js'
export default {
  name: 'Navigation',
  methods: { pathPart },
  components: { NavPoint },
}
</script>

<template>
  <div class="flex h-12 bg-zinc-800 px-8">
    <div class="w-1/3 flex justify-start items-center">
      <a href="https://ascension.gg" target="_blank"
        ><img :src="pathPart() + 'epoch-full-logo.webp'" alt="Project Epoch" class="h-8"
      /></a>
    </div>
    <nav class="flex items-center justify-center gap-3 px-4 w-1/3">
      <NavPoint @reset="$emit('reset')" name="rogue" />
      <NavPoint @reset="$emit('reset')" name="shaman" />
      <NavPoint @reset="$emit('reset')" name="hunter" />
      <NavPoint @reset="$emit('reset')" name="warrior" />
      <NavPoint @reset="$emit('reset')" name="paladin" />
      <NavPoint @reset="$emit('reset')" name="druid" />
      <NavPoint @reset="$emit('reset')" name="priest" />
      <NavPoint @reset="$emit('reset')" name="warlock" />
      <NavPoint @reset="$emit('reset')" name="mage" />
    </nav>
    <div class="w-1/3 flex justify-end items-center">
      <button
        type="button"
        class="bg-amber-300 px-2 rounded-lg shadow text-zinc-900 cursor-pointer font-semibold"
        @click="$emit('share')"
      >
        SHARE
      </button>
    </div>
  </div>
</template>
