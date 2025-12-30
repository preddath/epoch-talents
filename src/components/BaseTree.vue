<script>
export default {
  name: 'BaseTree',
  props: {
    name: String,
    image: String,
    total: Number,
  },
}
</script>

<template>
  <div class="w-1/5 bg-gray-500 rounded-lg overflow-hidden">
    <header class="h-12 bg-zinc-700 flex items-center text-amber-400 font-bold text-2xl">
      <p class="grow flex justify-center">{{ name }} ({{ total }})</p>
      <button
        type="button"
        class="bg-red-900 w-4 h-4 cursor-pointer mx-4 text-white text-sm text-center"
        @click="$emit('reset', name.toLowerCase())"
      >
        X
      </button>
    </header>
    <main
      :id="'tree_' + name.toLowerCase()"
      class="grid grid-cols-4 grid-rows-10 gap-y-8 place-items-center relative p-2"
      :style="'background-image: url(' + image + ')'"
      style="background-size: cover; background-position: center center; background-repeat: repeat"
    >
      <slot></slot>
    </main>
  </div>
</template>
