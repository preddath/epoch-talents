<script>
import { pathPart } from '@src/enviroment.js'

export default {
  name: 'Arrow',
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
        (startElement.bottom - tree.top) +
        'px;left:' +
        (startElement.left - tree.left + startElement.width / 2 - 12.5) +
        'px;'
    },
    setHeight() {
      const startElement = this.startElement.getBoundingClientRect()
      const endElement = this.endElement.getBoundingClientRect()

      this.elementHeight = 'height:' + (endElement.top - startElement.bottom - 10) + 'px;'
    },
  },
}
</script>

<template>
  <div
    v-if="startElement && endElement && tree"
    class="absolute flex flex-col items-center z-10"
    :style="startPosition"
  >
    <div
      :style="`background-image: url('` + pathPart() + `arrow_body.webp');` + elementHeight"
      class="w-4.25"
    />
    <div
      :style="
        `background-image: url('` +
        pathPart() +
        `arrow_head.webp'); height: 15px; margin-top: -3px;`
      "
      class="w-6.25"
    />
  </div>
</template>
