<script>
import Popup from '@base/Popup.vue'
import { m } from '@src/paraglide/messages.js'
import { pathPart } from '@src/enviroment.js'

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
  methods: {
    pathPart,
    handleClick() {
      if (this.active && this.modelValue < this.max) {
        this.$emit('update:modelValue', this.modelValue + 1)
        document.getElementById('tooltip_' + this.spec + '_' + this.name).showPopover()
      }
    },
    handleRClick() {
      if (this.modelValue > 0) {
        this.$emit('update:modelValue', this.modelValue - 1)
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
    m() {
      return m
    },
    active() {
      return this.totalRequirement <= this.total
    },
    classes() {
      let classes = ''
      if (this.active && this.modelValue < this.max) {
        classes += 'border-green-400'
      } else if (this.active && this.modelValue === this.max) {
        classes += 'border-amber-400'
      } else {
        classes += 'border-gray-400'
      }
      return classes
    },
    texts() {
      let messages = {
        current: this.getMessage(this.modelValue),
      }
      if (this.modelValue < this.max) {
        messages.next = this.getMessage(this.modelValue + 1)
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
    :id="name"
    class="h-12 w-12 rounded-lg border-2 relative cursor-pointer"
    :class="classes"
    @click="handleClick"
    @contextmenu.prevent="handleRClick"
    :name="spec + '_' + name"
  >
    <img
      :src="pathPart() + path"
      :alt="name"
      :style="active ? 'filter: none;' : 'filter: grayscale(1);'"
      class="rounded-lg"
      style="user-select: none; user-drag: none"
    />
    <span
      class="absolute bg-zinc-700 rounded border text-amber-400 border-amber-400 px-1 z-20 text-[0.65rem] font-semibold -bottom-2 -right-2"
      >{{ modelValue }}/{{ max }}</span
    >
  </div>
  <Popup :to="spec + '_' + name">
    <header class="text-xl font-bold flex items-center justify-between">
      <p class="text-white">{{ label }}</p>
      <p class="text-sm pr-4" v-if="ability">{{ m.ability() }}</p>
    </header>
    <p class="text-white">{{ m.rank() }} {{ modelValue }}/{{ max }}</p>
    <p v-if="!active" class="text-red-400">
      {{ m.needed_rank({ a: totalRequirement, b: m[spec + '.name']() }) }}
    </p>
    <p v-html="texts.current" class="text-amber-400 font-semibold" />
    <template v-if="texts.next && modelValue >= 1">
      <hr class="my-2" />
      <p class="text-white">{{ m.next_level() }}:</p>
      <p v-html="texts.next" class="text-amber-400 font-semibold" />
    </template>
    <p class="text-green-400 text-sm font-semibold" v-if="active && modelValue < max">
      {{ m.click_increase() }}
    </p>
    <p class="text-green-400 text-sm font-semibold" v-else-if="active">
      {{ m.click_decrease() }}
    </p>
  </Popup>
</template>
