<script>
import ClassView from '@base/ClassView.vue'

export default {
  name: 'NotFound',
  components: { ClassView },
}
</script>

<template>
  <ClassView>
    <div class="flex justify-center items-center text-9xl text-white">
      <div class="flex flex-col justify-center items-center">
        <p>404</p>
        <p>Not Found</p>
        <p class="text-2xl">This Page is still being made.</p>
      </div>
    </div>
  </ClassView>
</template>
