<template lang="html">
  <b-card-group columns>
    <div v-for="(item, index) in items" v-bind:key="index">
      <b-card
         v-bind="{ 'img-src': item.url }"
         tag="article"
         style="max-width: 25rem; height: 25em;"
         >

         <b-card-title> {{ item.name }}  </b-card-title>
         <b-card-text> {{ item.about }}  </b-card-text>
         <b-button href="#" variant="primary"> {{ item.button }}</b-button>
       </b-card>
    </div>
  </b-card-group>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {'id':1, 'name': 'Projects', 'button': 'Find projects', 'url': 'https://picsum.photos/600/300/?image=1',
        'about': 'Read more about some projects I have done in the past!'},
        {'id':2, 'name': 'About me', 'button': 'Get to now me', 'url': 'https://picsum.photos/600/300/?image=25',
        'about': 'Read more about me'},
        {'id':3, 'name': 'Contact', 'button': 'Contact me', 'url': 'https://picsum.photos/600/300/?image=24',
        'about': 'Get to know how to contact me!'},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
