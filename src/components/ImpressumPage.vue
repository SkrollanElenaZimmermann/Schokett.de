<template>
    <div class="container">
      <p>ImpressumPage</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImpressumPage',
    mounted() {
      document.title = "Schokett/Impressum";
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
    /* background: greenyellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 400%;
    color: white;
  }
  </style>