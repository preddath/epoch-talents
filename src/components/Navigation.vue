<script>
import NavPoint from "@base/NavPoint.vue";
export default {
  name: "Navigation",
  components: {NavPoint},
}
</script>

<template>
  <nav class="h-12 bg-zinc-800 flex items-center justify-center gap-3 px-4">
    <NavPoint name="rogue"/>
    <NavPoint name="shaman"/>
    <NavPoint name="hunter"/>
    <NavPoint name="warrior"/>
    <NavPoint name="paladin"/>
    <NavPoint name="druid"/>
    <NavPoint name="priest"/>
    <NavPoint name="warlock"/>
    <NavPoint name="mage"/>
  </nav>
</template>