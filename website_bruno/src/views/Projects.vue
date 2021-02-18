<template>
  <div id="projects">
    <p>On this page you can find an overview of the projects I do in my free time.</p>
    <ISSproject></ISSproject>
  </div>
</template>

<script>
import ISSproject from '../components/ISSproject.vue'
export default {
  name: 'Projects',
  components: {
    ISSproject
  }
}
</script>

<style>

</style>
