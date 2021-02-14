<template lang="html">
  <div class="">
  <router-view v-slot="{ Component }">
    <component :is="Component">
      <p>In Vue Router 3, I render inside the route component</p>
    </component>
  </router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
