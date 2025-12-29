<script>
import Popup from '@base/Popup.vue'

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
    currentText() {},
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
    <header class="text-xl font-bold">{{ name }}</header>
    <article>Increases your total Stamina by 1% and your total Strength by 1%.</article>
    <hr class="my-2" />
    <p>Next Level:</p>
    <article>Increases your total Stamina by 2% and your total Strength by 2%.</article>
  </Popup>
</template>
