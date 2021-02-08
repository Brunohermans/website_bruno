<template lang="html">
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-navbar-nav>
        <b-navbar-brand>Bruno Hermans</b-navbar-brand>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/Projects">Projects</b-nav-item>
        <b-nav-item-dropdown text="About me" right>
          <b-dropdown-item to="/Cycling">Cycling</b-dropdown-item>
          <b-dropdown-item to="/Music">Music</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/Contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#b-navbar {
  position: sticky
}
</style>
