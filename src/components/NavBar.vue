<template>
  <div class="navbar">
    <div class="NameSite">
      <router-link to="/HomePage">Schokett</router-link>
    </div>
    <div class="nav_buttons">
      <div class="btn" :class="{ active: $route.path === '/SiteOne' }">
        <router-link to="/SiteOne">{{ $t('navbar.siteone') }}</router-link>
      </div>
      <div class="btn" :class="{ active: $route.path === '/SiteTwo' }">
        <router-link to="/SiteTwo">{{ $t('navbar.sitetwo') }}</router-link>
      </div>
      <div class="btn" :class="{ active: $route.path === '/SiteThree' }">
        <router-link to="/SiteThree">{{ $t('navbar.sitethree') }}</router-link>
      </div>
      <div class="btn" :class="{ active: $route.path === '/ImpressumPage' }">
        <router-link to="/ImpressumPage">{{ $t('navbar.impressum') }}</router-link>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
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
  display: flex;
}
.navbar .NameSite a {
  text-decoration: none;
  color: white;
}
.navbar .nav_buttons {
  display: flex;
}
.navbar .nav_buttons a {
  background-color: rgb(122, 122, 122);
  color: white;
  padding: 10px 20px; /* Hier Padding wieder aktivieren */
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
}

.navbar .nav_buttons .active {
  color: rgb(255, 255, 255) !important;
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