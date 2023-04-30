<template>
  <div class="navbar">
    <div class="logo">
      Logo
    </div>
    <div class="nav_buttons">
      <div class="btn"><router-link to="/">SiteOne</router-link></div>
      <div class="btn"><router-link to="/SiteTwo">SiteTwo</router-link></div>
      <div class="btn"><router-link to="/SiteThree">SiteThree</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 20px;
}
.navbar .logo {
  padding: 20px 10px;
}
.navbar .nav_buttons {
  display: flex;
}
.navbar .nav_buttons a {
  background-color: rgb(122, 122, 122);
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
}
.active {
  color: rgb(0, 255, 200) !important;
  background-color: rgb(155, 155, 155) !important;
  box-shadow: 1px 2px rgb(0, 255, 200) !important;
}

</style>
