<script>
export default {
  name: 'Popup',
  props: {
    placement: {
      type: String,
      default: 'top',
      description: 'The placement of the popup relative to the element it is attached to',
    },
    to: {
      type: String,
      required: true,
      description: 'The name of the element to attach the popup to',
    },
    method: {
      type: String,
      default: 'click',
      description: 'The method to open the popup',
    },
  },
  data() {
    return {
      uuid: null,
    }
  },
  methods: {
    getDirection() {
      switch (this.placement) {
        case 'top':
          return 'popup-top w-[17vw]'
        case 'right':
          return 'popup-right max-w-1/2'
        case 'bottom':
          return 'popup-bottom'
        case 'left':
          return 'popup-left'
        default:
          return 'popup-top'
      }
    },
  },
  mounted() {
    this.uuid = crypto.randomUUID()
    document.getElementsByName(this.to).forEach((element) => {
      element.setAttribute('popovertarget', this.uuid)
      element.setAttribute(
        'style',
        (element.getAttribute('style') ?? '') + ' anchor-name: --anchor-' + this.uuid,
      )
      element.addEventListener('mouseenter', () => {
        this.$refs[this.uuid].showPopover()
      })
      element.addEventListener('mouseleave', () => {
        this.$refs[this.uuid].hidePopover()
      })
    })
  },
}
</script>

<template>
  <div
    :ref="uuid"
    :id="'tooltip_' + to"
    popover="manual"
    :class="getDirection()"
    class="popup fixed p-3 rounded-lg bg-gray-700 opacity-90 text-amber-400 shadow-xl z-20 text-sm m-2"
    :style="'position-anchor: --anchor-' + uuid"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.popup-top {
  position-area: top;
  position-try-fallbacks: bottom, right, left;
}
.popup-right {
  position-area: right;
  position-try-fallbacks: left, bottom, top;
}
.popup-bottom {
  position-area: bottom;
  position-try-fallbacks: top, right, left;
}
.popup-left {
  position-area: left;
  position-try-fallbacks: right, top, bottom;
}
</style>
