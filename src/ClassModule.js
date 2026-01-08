export function resetTree(tree) {
  Object.keys(this.model[tree]).forEach((item) => {
    this.model[tree][item] = 0
  })
}

export function resetTotal() {
  Object.keys(this.model).forEach((tree) => {
    this.resetTree(tree)
  })
  this.currentStore.total = 0
}

export function share() {
  navigator.clipboard.writeText(this.shareLink)
}
