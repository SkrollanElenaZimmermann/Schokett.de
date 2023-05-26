<template>
  <div class="navbar">
    <div class="NameSite">
      Schokett
    </div>
    <div class="nav_buttons">
      <div class="btn"><router-link to="/">SiteOne</router-link></div>
      <div class="btn"><router-link to="/SiteTwo">SiteTwo</router-link></div>
      <div class="btn"><router-link to="/SiteThree">SiteThree</router-link></div>
      <div class="btn"><router-link to="/ImpressumPage">ImpressumPage</router-link></div>
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

<style scoped>
.navbar {
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 20px;
}
.navbar .NameSite {
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
  color: rgb(193, 255, 245) !important;
  background-color: rgb(155, 155, 155) !important;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5) !important;
}


@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .navbar .nav_buttons {
    margin-top: 20px;
  }
}


</style>
