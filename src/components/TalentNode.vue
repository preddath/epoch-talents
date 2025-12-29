<script>
export default {
  name: "TalentNode",
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
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue
    };
  },
  methods: {
    handleClick() {
      if (this.active && this.value < this.max) {
        this.value++;
        this.$emit("update:modelValue", this.value);
      }
    },
    handleRClick(event) {
      event.preventDefault();
      if (this.value > 0) {
        this.value--
        this.$emit("update:modelValue", this.value);
      }
    }
  },
  computed: {
    active() {
      return this.totalRequirement <= this.total;
    }
  }
}
</script>

<template>
  <div class="h-12 w-12 rounded-lg border-2 border-amber-400 relative cursor-pointer" @click="handleClick" @contextmenu="handleRClick">
    <img :src="path" :alt="name" :style="active ? 'filter: none;' : 'filter: grayscale(1);'" class="rounded-lg"/>
    <span class="absolute bg-zinc-700 rounded text-amber-400 px-1 text-[0.65rem] font-semibold -bottom-2 -right-2">{{modelValue}}/{{max}}</span>
  </div>
</template>
