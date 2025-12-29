<script>
import Popup from '@base/Popup.vue'
import { m } from '@src/paraglide/messages.js'

export default {
  name: 'TalentNode',
  components: {
    Popup,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    spec: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    totalRequirement: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    ability: {
      type: Boolean,
      default: false,
    },
    levels: {
      type: Array,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue,
    }
  },
  methods: {
    handleClick() {
      if (this.active && this.value < this.max) {
        this.value++
        this.$emit('update:modelValue', this.value)
        document.getElementById('tooltip_' + this.spec + '_' + this.name).showPopover()
      }
    },
    handleRClick() {
      if (this.value > 0) {
        this.value--
        this.$emit('update:modelValue', this.value)
        document.getElementById('tooltip_' + this.spec + '_' + this.name).showPopover()
      }
    },
    getMessage(value) {
      let variables = {}
      if (this.levels.length > 0) {
        if (value > 0) {
          variables = { a: this.levels[0][value - 1] }
        } else {
          variables = { a: this.levels[0][0] }
        }
        if (this.levels[1]) {
          if (value > 0) {
            variables.b = this.levels[1][value - 1]
          } else {
            variables.b = this.levels[1][0]
          }
        }
        if (this.levels[2]) {
          if (value > 0) {
            variables.c = this.levels[2][value - 1]
          } else {
            variables.c = this.levels[2][0]
          }
        }
      }
      const key = this.spec + '.' + this.name + '.description'
      if (m[key]) {
        return m[key](variables)
      } else {
        return key
      }
    },
  },
  computed: {
    active() {
      return this.totalRequirement <= this.total
    },
    classes() {
      let classes = ''
      if (this.active && this.value < this.max) {
        classes += 'border-green-400'
      } else if (this.active && this.value === this.max) {
        classes += 'border-amber-400'
      } else {
        classes += 'border-gray-400'
      }
      return classes
    },
    texts() {
      let messages = {
        current: this.getMessage(this.value),
      }
      if (this.value < this.max) {
        messages.next = this.getMessage(this.value + 1)
      }
      return messages
    },
    label() {
      if (m[this.spec + '.' + this.name + '.label']) {
        return m[this.spec + '.' + this.name + '.label']()
      } else {
        return this.name
      }
    },
  },
}
</script>

<template>
  <div
    class="h-12 w-12 rounded-lg border-2 relative cursor-pointer"
    :class="classes"
    @click="handleClick"
    @contextmenu.prevent="handleRClick"
    :name="spec + '_' + name"
  >
    <img
      :src="path"
      :alt="name"
      :style="active ? 'filter: none;' : 'filter: grayscale(1);'"
      class="rounded-lg"
    />
    <span
      class="absolute bg-zinc-700 rounded text-amber-400 px-1 text-[0.65rem] font-semibold -bottom-2 -right-2"
      >{{ modelValue }}/{{ max }}</span
    >
  </div>
  <Popup :to="spec + '_' + name">
    <header class="text-xl font-bold">{{ label }}</header>
    <p>{{ texts.current }}</p>
    <template v-if="texts.next && value >= 1">
      <hr class="my-2" />
      <p>Next Level:</p>
      <p>{{ texts.next }}</p>
    </template>
  </Popup>
</template>
