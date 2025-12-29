function item(el) {
  const uuid = crypto.randomUUID()
  el.setAttribute('popovertarget', uuid)
  el.setAttribute('style', 'anchor-name: --my-anchor'+uuid)
  let popover = document.createElement('div')
  popover.popover = 'auto'
  popover.id = uuid
  popover.innerHTML = el.getAttribute('data-title')
  popover.classList.add(
    'popup',
    'p-3',
    'rounded-lg',
    'bg-white',
    'dark:bg-slate-500',
    'shadow-lg',
    'z-20',
    'text-slate-700',
    'dark:text-slate-300',
    'text-sm',
    'm-2'
  )
  popover.setAttribute(
    'style',
    'position:fixed; position-anchor: --my-anchor'+uuid+';position-area:top;position-try-fallbacks: bottom, left, right;',
  )
  el.after(popover)
  return popover
}

export default function popup(el, binding) {
  if (!(binding.value === false)) {
    let pop = null;
    if (el.title) {
      el.setAttribute('data-title', el.title)
      el.removeAttribute('title')
    }
    el.addEventListener('mouseenter', () => {
      pop = item(el)
      pop.showPopover()
    })
    el.addEventListener('mouseleave', () => {
      if (pop) {
        pop.hidePopover()
      }
      el.removeAttribute('popovertarget')
    })
  }
}
