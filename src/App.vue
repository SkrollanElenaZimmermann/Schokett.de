<template>
  <!-- <img alt="Logo" src="./assets/HiTwitch.png" style="width: 15%; height: auto;"> -->
  <NavBar/>
  <RouterView></RouterView>
</template>

<script>
import NavBar from './components/NavBar.vue'

import myBackground from '@/assets/background.jpg';
// import HiTwitch from '@/assets/HiTwitch.png';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      // imageHiTwitch: HiTwitch
    }
  },
  mounted() {
    document.body.style.backgroundColor = '#16a085';
    document.body.style.backgroundImage = `url(${myBackground})`;
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: 0;
}
#app {
  font-family: 'Comfortaa', cursive;
  color: rgb(228, 228, 228);
}
</style>
