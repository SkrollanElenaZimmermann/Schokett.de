<template>
  <div class="container">
    <p>SiteOne</p>
  </div>
</template>

<script>
export default {
  name: 'SiteOne',
  mounted() {
    document.title = "SchokettOne";
   
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
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 400%;
  color: white;
}
</style>
