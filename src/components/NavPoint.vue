<script>
import { pathPart } from '@src/enviroment.js'
import { useCurrentStore } from '@src/stores/current.js'

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
    isActive() {
      return this.$route.path.split('/')[2] ?? this.$route.path.split('/')[1] === this.name
    },
    currentStore() {
      return useCurrentStore()
    },
  },
}
</script>

<template>
  <div class="h-10 rounded-full overflow-hidden flex bg-amber-400 items-center">
    <RouterLink
      :to="pathPart() + name"
      class="h-10 w-10 rounded-full overflow-hidden"
      :class="isActive ? 'border-4 border-amber-400' : 'border-2 border-green-400'"
      @click="currentStore.total = 0"
    >
      <img :src="pathPart() + name + '/classicon_' + name + '.webp'" :alt="name" />
    </RouterLink>
    <div v-if="isActive" class="text-xl text-amber-800 font-semibold px-2 flex items-center gap-1">
      <p>{{ currentStore.total }}/61</p>
      <button
        type="button"
        class="bg-red-900 w-4 h-4 cursor-pointer text-white text-xs text-center"
        @click="$emit('reset')"
      >
        x
      </button>
    </div>
  </div>
</template>
