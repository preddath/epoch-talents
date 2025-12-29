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
  <div class="h-[96%] w-1/5 bg-gray-500 rounded-lg overflow-hidden">
    <header
      class="h-12 bg-zinc-700 flex items-center justify-center text-amber-400 font-bold text-2xl"
    >
      {{ name }} ({{ total }})
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
