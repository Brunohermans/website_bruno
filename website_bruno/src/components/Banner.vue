<template lang="html">
  <div id="banner">
    <div class="name">
      <h2>Bruno Hermans</h2>
    </div>
  </div>
</template>

<script>

export default {
    name: 'banner',

}
</script>

<style lang="css" scoped>
  #banner {
    text-align: center;
    background-image: url('~@/assets/snow.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    height: 12em;
  }

  #h2 {
    color: blue;
  }
</style>
