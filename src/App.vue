<template>
  <img alt="Logo" src="./assets/HiTwitch.png" style="width: 15%; height: auto;">
  <SiteOne/>
  <SiteTwo/>
  <SiteThree/>
</template>

<script>
import SiteOne from './components/SiteOne.vue'
import SiteTwo from './components/SiteTwo.vue'
import SiteThree from './components/SiteThree.vue'

import myBackground from '@/assets/background.jpg';
import HiTwitch from '@/assets/HiTwitch.png';

export default {
  name: 'App',
  components: {
    SiteOne,
    SiteTwo,
    SiteThree,
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
  color: rgb(228, 228, 228);
}
</style>
