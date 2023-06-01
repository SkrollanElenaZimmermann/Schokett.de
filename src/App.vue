<template>
  <NavBar/>
  <div class="language-switch-div">
    <div class="language-switch-frame">
        <div class="language-switch">
          <label class="switch">
            <input type="checkbox" v-model="isJapanese" @change="changeLanguage">
            <span class="slider"></span>
          </label>
          <span class="language-label">{{ currentLanguage }}
            <img :src="isJapanese ? require('@/assets/flag-japan.png') : require('@/assets/flag-germany.png')" alt="Language" />
          </span>
        </div>
      </div>
  </div>
  <transition name="fade">
  <RouterView></RouterView>
  </transition>
  <footer class="footer">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-column">
            <h4 class="column-title">{{ $t('footer.kontakt') }}</h4>
            <p>123 Beispielstraße, Beispielstadt</p>
            <p>Telefon: 123-456-789</p>
            <p>Email: info@example.com</p>
          </div>
          <div class="footer-column">
            <h4 class="column-title">{{ $t('footer.quicklinks') }}</h4>
            <ul>
              <li><a href="#">Startseite</a></li>
              <li><a href="#">Impressum</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="column-title">{{ $t('footer.socialmedia') }}</h4>
            <ul class="social-links">
              <li><a href="https://www.twitch.tv/schokett"><i class="fab fa-twitch"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UC2NFb0IfyoltAGgtF7OXMXg"><i class="fab fa-youtube"></i></a></li>
              <li><a href="https://www.instagram.com/_schokett_/"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://github.com/SkrollanElenaZimmermann"><i class="fab fa-github"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Schokett Software. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
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
      isJapanese: false,
    }
  },
  mounted() {
    document.title = "Schokett";
    document.body.style.backgroundColor = '#333';
    document.body.style.backgroundImage = `url(${myBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
   
    const fontAwesomeCSS = document.createElement('link');
    fontAwesomeCSS.rel = 'stylesheet';
    fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    fontAwesomeCSS.crossOrigin = 'anonymous';
    document.head.appendChild(fontAwesomeCSS);
  },
  computed: {
    currentLanguage() {
      return this.isJapanese ? '🇯🇵' : '🇩🇪';
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.isJapanese ? 'ja' : 'de';
    }
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
/* Switch */
.language-switch-div {
  position: center;
  padding: 15px;
  /* background-color: red; */
  display: flex; 
  justify-content: center;
  width: auto;
}

.language-switch-frame {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #cecece; */
  border-radius: 8px;
  padding: 5px;
}

.language-switch {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.3s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.language-label {
  margin-left: 10px;
  color: white;
  font-size: 22px;
  line-height: 34px;
}
.footer {
  background-color: #333;
  color: #fff;
  padding: 50px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-column {
  width: 33.33%;
  margin-bottom: 30px;
}

.column-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 10px;
}

ul li a {
  color: #fff;
  text-decoration: none;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-links li {
  margin: 0 5px;
}

.social-links li a {
  color: #fff;
  font-size: 24px;
}

.footer-bottom {
  margin-top: 30px;
}

@media (max-width: 768px) {
  .footer-column {
    width: 50%;
  }
}

@media (max-width: 576px) {
  .footer-column {
    width: 100%;
  }
}
</style>
