<template>
  <div id="home">
    <Banner></Banner>
    <div id="projects"  align="center">
      <Cards></Cards>
    </div>

  </div>

</template>

<script>
import Banner from '../components/Banner.vue'
import Cards from '../components/Cards.vue'


export default {
  name: 'Home',
  components: {
    Banner,
    Cards
  },
  
}
</script>

<style scoped>
#projects{
  margin-top: 3em;
}
</style>
