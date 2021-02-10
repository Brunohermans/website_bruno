<template lang="html">
  <div id="nav">
    <div class="row fixed-top">
      <div id="menu1" class="menu col-md-1 col-lg-2"></div>
      <div id="menu2" class="menu col-md-10 col-lg-8">
        <b-navbar toggleable="md" class="ml-auto" type="light" variant="primary">
            <b-navbar-nav class="left">
            <b-navbar-brand>Bruno Hermans</b-navbar-brand>
              <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/Projects">Projects</b-nav-item>
                <b-nav-item-dropdown text="About me" right>
                  <b-dropdown-item to="/Cycling">Cycling</b-dropdown-item>
                  <b-dropdown-item to="/Music">Music</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="/Contact">Contact</b-nav-item>
              </b-collapse>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto mb-auto">
              <b-navbar-toggle class="justify-content-top" target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                  <b-icon v-if="expanded" icon="list" rotate = "-90"></b-icon>
                  <b-icon v-else icon="list" align = "top"></b-icon>
                </template>
              </b-navbar-toggle>
            </b-navbar-nav>
        </b-navbar>
    </div>
      <div id="menu3" class="menu col-md-1 col-lg-2"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#b-navbar {
  position: sticky;
}


.menu {
  background-color: #6ed4e2;
}
</style>
