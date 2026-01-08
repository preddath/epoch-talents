<script>
import Navigation from '@base/Navigation.vue'

export default {
  name: 'ClassView',
  components: { Navigation },
  methods: {
    share() {
      this.$emit('share')
      this.$refs.alert.showPopover()
      setTimeout(() => {
        this.$refs.alert.hidePopover()
      }, 3000)
    },
  },
}
</script>

<template>
  <Navigation @share="share()" @reset="$emit('reset')" />
  <div
    ref="alert"
    popover="auto"
    class="bg-zinc-700 border-l-4 border-green-400 h-16 text-zinc-200 p-4"
  >
    Link copied to Clipboard!
  </div>
  <article class="grow flex items-center justify-around pt-2">
    <slot></slot>
  </article>
</template>

<style scoped>
:popover-open {
  position: absolute;
  inset: unset;
  top: 10px;
  right: 10px;
}
</style>
