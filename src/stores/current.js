import { defineStore } from 'pinia'

export const useCurrentStore = defineStore('current', {
  state: () => ({
    selected: null,
    total: 0,
  }),
})
