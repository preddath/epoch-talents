<script>
import { m } from '@src/paraglide/messages.js'
export default {
  name: 'BaseTree',
  props: {
    name: String,
    spec: String,
    image: String,
    icon: String,
    total: Number,
  },
  computed: {
    label() {
      return m[this.name + '.' + this.spec + '.name']()
    },
  },
}
</script>

<template>
  <div class="w-1/5 bg-gray-500 rounded-lg overflow-hidden">
    <header class="h-12 bg-zinc-700 flex items-center text-amber-400 font-bold text-2xl">
      <img :src="icon" alt="spec" class="h-10 rounded-full ml-1" />
      <p class="grow flex justify-center">{{ label }} ({{ total }})</p>
      <button
        type="button"
        class="bg-red-900 w-5 h-5 cursor-pointer mx-4 text-white text-sm text-center"
        @click="$emit('reset', spec)"
      >
        X
      </button>
    </header>
    <main
      :id="'tree_' + spec"
      class="grid grid-cols-4 grid-rows-9 gap-y-8 place-items-center relative px-2 py-4"
      :style="'background-image: url(' + image + ')'"
      style="background-size: cover; background-position: center center; background-repeat: repeat"
    >
      <slot></slot>
    </main>
  </div>
</template>
