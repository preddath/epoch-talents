<script>
export default {
  name: "NavPoint",
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  computed: {
    currentClass() {
      return window.location.pathname.split("/").pop();
    }
  }
}
</script>

<template>
  <RouterLink :to="'/'+name" class="h-10 w-10 border-amber-400 rounded-full overflow-hidden" :class="currentClass===name ? 'border-4': 'border-2'">
    <img :src="'/'+name+'/classicon_'+name+'.webp'" :alt="name" />
  </RouterLink>
</template>
