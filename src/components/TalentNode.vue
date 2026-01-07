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
    requires: {
      type: String,
      required: false,
    },
    ability: {
      type: Object,
      default: null,
    },
    levels: {
      type: Array,
    },
    spellIds: {
      type: Array,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      requiredTalent: null,
    }
  },
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
  mounted() {
    if (this.requires) {
      this.requiredTalent = this.$parent.$parent.$parent[this.spec.split('.')[1]][this.requires]
    }
  },
  computed: {
    m() {
      return m
    },
    model() {
      return this.$parent.$parent.$parent.model[this.spec.split('.')[1]]
    },
    active() {
      return (
        this.totalRequirement <= this.total &&
        (!this.requires || this.model[this.requires] === this.requiredTalent.max)
      )
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
      <p class="text-sm px-2 bg-amber-400 text-black text-center rounded" v-if="ability !== null">
        {{ m.ability() }}
      </p>
    </header>
    <div class="flex justify-between text-white text-xs">
      <p>{{ m.rank() }} {{ modelValue }}/{{ max }}</p>
      <p>ID: {{ spellIds[modelValue - 1] ?? spellIds[modelValue] }}</p>
    </div>
    <p v-if="!active" class="text-red-400">
      {{ m.needed_rank({ a: totalRequirement, b: m[spec + '.name']() }) }}
    </p>
    <p v-if="!active && requiredTalent !== null" class="text-red-400">
      {{ m.needed_talent({ a: requiredTalent.max, b: m[spec + '.' + requires + '.label']() }) }}
    </p>
    <div v-if="ability" class="flex flex-wrap text-white my-2">
      <div class="w-1/2 text-start">{{ ability.castTime }}</div>
      <div class="w-1/2 text-end">{{ ability.cooldown }}</div>
      <div class="w-1/2 text-start">{{ ability.range }}</div>
      <div class="w-1/2 text-end">{{ ability.cost }}</div>
      <div class="w-full font-semibold">{{ ability.items }}</div>
    </div>
    <p v-html="texts.current" class="text-amber-400" />
    <template v-if="texts.next && modelValue >= 1">
      <hr class="my-2" />
      <p class="text-white">{{ m.next_level() }}:</p>
      <p v-html="texts.next" class="text-amber-400" />
    </template>
    <p class="text-green-400 font-semibold" v-if="active && modelValue < max">
      {{ m.click_increase() }}
    </p>
    <p class="text-green-400 font-semibold" v-else-if="active">
      {{ m.click_decrease() }}
    </p>
  </Popup>
</template>
