<script>
import { pathPart } from '@src/enviroment.js'

export default {
  name: 'LeftArrow',
  props: {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    tree: {
      type: String,
      required: true,
    },
    headless: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    startElement: null,
    endElement: null,
    treeElement: null,
    startPosition: null,
    elementWidth: null,
  }),
  mounted() {
    this.startElement = document.getElementById(this.from)
    this.treeElement = document.getElementById(this.tree)
    this.endElement = document.getElementById(this.to)
    this.$nextTick(() => {
      this.setStart()
      this.setHeight()
    })
  },
  methods: {
    pathPart,
    setStart() {
      const startElement = this.endElement.getBoundingClientRect()
      const tree = this.treeElement.getBoundingClientRect()

      this.startPosition =
        'top:' +
        (startElement.top - tree.top + startElement.height / 2 - (this.headless ? 6 : 12)) +
        'px;left:' +
        (startElement.left - tree.left + startElement.width) +
        'px;'
    },
    setHeight() {
      const startElement = this.startElement.getBoundingClientRect()
      const endElement = this.endElement.getBoundingClientRect()

      this.elementWidth =
        'width:' + (startElement.left - endElement.right - (this.headless ? -8 : 10)) + 'px;'
    },
  },
}
</script>

<template>
  <div
    v-if="startElement && endElement && tree"
    class="absolute flex items-center z-10"
    :style="startPosition"
  >
    <div
      v-if="!headless"
      :style="`background-image: url('` + pathPart() + `arrow_head_l.webp'); height: 25px`"
      class="w-4 -ml-1 z-10"
    />
    <div
      style="height: 17px; margin-left: -2px"
      :style="elementWidth + `background-image: url('` + pathPart() + `arrow_body_h.webp');`"
    />
  </div>
</template>
