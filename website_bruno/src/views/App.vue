<template>
  <div id="app" class="container-fluid">
    <Header></Header>

    <div class="row content-main">
      <div id="content1" class="content col-md-1 col-lg-2"></div>
      <div id="content2" class="content col-md-10 col-lg-8"><Router></Router></div>
      <div id="content3" class="content col-md-1 col-lg-2"></div>
    </div>
    <div class="row breath_space2"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Router from '../components/Router.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Router
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#content2 {
  height: 80em;
  /* background-color: yellow; */
}

.content-main {
  padding-top: 57px;
  /* padding-left: 20px;
  padding-right: 5px; */
}

.breath_space2 {
  height: 2.5em;
}
</style>
