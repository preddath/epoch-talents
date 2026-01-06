<script>
import { pathPart } from '@src/enviroment.js'

export default {
  name: 'RightArrow',
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
    elementHeight: null,
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
      const startElement = this.startElement.getBoundingClientRect()
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

      this.elementHeight =
        'width:' + (endElement.left - startElement.right - (this.headless ? -8 : 10)) + 'px;'
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
      style="height: 17px; margin-right: -2px"
      :style="elementHeight + `background-image: url('` + pathPart() + `arrow_body_h.webp');`"
    />
    <div
      v-if="!headless"
      :style="`background-image: url('` + pathPart() + `arrow_head_r.webp'); height: 25px`"
      class="w-4 -ml-1"
    />
  </div>
</template>
