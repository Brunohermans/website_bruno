<template>
  <div id="app">
    <Header></Header>
    <div class="row">
      <div id="content1" class="content col-md-1 col-lg-2"></div>
      <div id="content2" class="content col-md-10 col-lg-8"><router-view/></div>
      <div id="content3" class="content col-md-10 col-lg-8"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#content2 {
  height: 80em;
}
</style>
