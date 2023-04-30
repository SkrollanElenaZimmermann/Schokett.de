<template>
  <div class="navbar">
    <div class="logo">
      Logo
    </div>
    <div class="nav_buttons">
      <div class="btn">SiteOne</div>
      <div class="btn">SiteTwo</div>
      <div class="btn">SiteThree</div>
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

.navbar .nav_buttons .btn {
  background-color: rgb(122, 122, 122);
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

</style>
