<script>
import { pathPart } from '@src/enviroment.js'

export default {
  name: 'NavPoint',
  methods: { pathPart },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentClass() {
      return this.$route.path.split('/')[2] ?? this.$route.path.split('/')[1]
    },
  },
}
</script>

<template>
  <RouterLink
    :to="pathPart() + name"
    class="h-10 w-10 rounded-full overflow-hidden"
    :class="currentClass === name ? 'border-4 border-amber-400' : 'border-2 border-green-400'"
  >
    <img :src="pathPart() + name + '/classicon_' + name + '.webp'" :alt="name" />
  </RouterLink>
</template>
