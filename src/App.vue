<template>
  <NavBar/>
  <transition name="fade">
  <RouterView></RouterView>
  </transition>
</template>

<script>
import NavBar from './components/NavBar.vue'

import myBackground from '@/assets/background.jpg';


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
    document.title = "Schokett";
    document.body.style.backgroundColor = '#16a085';
    document.body.style.backgroundImage = `url(${myBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.0s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
