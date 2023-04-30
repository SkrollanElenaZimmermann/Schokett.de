<template>
  <div class="container">
    <p>SiteThree</p>
  </div>
</template>

<script>
export default {
  name: 'SiteThree',
  mounted() {
    document.title = "Schokett/Three";
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 400%;
  color: white;
}
</style>
