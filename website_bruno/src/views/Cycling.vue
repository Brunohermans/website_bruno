<template>
  <div id="app">
    <div id="nav">
      <router-link to="Home"></router-link>|
      <router-link to="Cycling"></router-link>
    </div>


    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
