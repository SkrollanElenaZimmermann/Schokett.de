<template>
  <img alt="Logo" src="./assets/HiTwitch.png" style="width: 15%; height: auto;">
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import myBackground from '@/assets/background.jpg';
import HiTwitch from '@/assets/HiTwitch.png';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      imageHiTwitch: HiTwitch
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

#app {
  font-family: 'Comfortaa', cursive;
  text-align: center;
  color: rgb(228, 228, 228);
  margin-top: 60px;
}
</style>
