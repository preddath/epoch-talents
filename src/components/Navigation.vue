<script>
import NavPoint from '@base/NavPoint.vue'
export default {
  name: 'Navigation',
  components: { NavPoint },
}
</script>

<template>
  <div class="flex h-12 bg-zinc-800 px-8">
    <div class="w-1/3"></div>
    <nav class="flex items-center justify-center gap-3 px-4 w-1/3">
      <NavPoint name="rogue" />
      <NavPoint name="shaman" />
      <NavPoint name="hunter" />
      <NavPoint name="warrior" />
      <NavPoint name="paladin" />
      <NavPoint name="druid" />
      <NavPoint name="priest" />
      <NavPoint name="warlock" />
      <NavPoint name="mage" />
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
