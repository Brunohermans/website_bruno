<template>
  <div id="home">
    <Banner></Banner>
    <div id="projects"  align="center">
      <b-card-group deck>
      <b-card
          title= "test"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            Read more about some (coding) projects I have done in the past!
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-card-group>
      <!-- <b-card-group deck>
        <Card0></Card0>
        <Card1></Card1>
        <Card2></Card2>

      </b-card-group> -->
    </div>

  </div>

</template>

<script>
import Banner from '../components/Banner.vue'
// import Card0 from '../components/Card0.vue'
// import Card1 from '../components/Card1.vue'
// import Card2 from '../components/Card2.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    // Card0,
    // Card1,
    // Card2
  },
  data: function() {
    return {
      items: [
        {'id':1, 'name': 'Projects', 'about': 'Read more about some (coding) projects I have done in the past!'},
        {'id':2, 'name': 'About me', 'about': 'Read more about me'},
        {'id':3, 'name': 'Contact', 'about': 'Get to know how to contact me!'},
      ]
    }
  }
}
</script>

<style scoped>
#projects{
  margin-top: 3em;
}
</style>
