<template>
  <div class="container">
    <div class="impressum">
      <!-- <div class="language-switch-frame">
        <div class="language-switch">
          <label class="switch">
            <input type="checkbox" v-model="isJapanese" @change="changeLanguage">
            <span class="slider"></span>
          </label>
          <span class="language-label">{{ currentLanguage }}</span>
        </div>
      </div> -->
      <div class="impressum-content">
        <h2>{{ $t('impressum.title') }}</h2>
        <br>
        <h3 v-html="$t('impressum.angaben')"></h3>
        <p>{{ $t('impressum.content.angaben') }}</p>
        <br>
        <h3 v-html="$t('impressum.kontakt')"></h3>
        <p>{{ $t('impressum.content.kontakt') }}</p>
        <br>
        <h3 v-html="$t('impressum.umsatzsteuerID')"></h3>
        <p>{{ $t('impressum.content.umsatzsteuerID') }}</p>
        <br>
        <h3 v-html="$t('impressum.verantwortlich')"></h3>
        <p>{{ $t('impressum.content.verantwortlich') }}</p>
        <br>
        <h3 v-html="$t('impressum.haftungsausschluss')"></h3>
        <p>{{ $t('impressum.content.haftungsausschluss') }}</p>
      </div>
      <br>
      <br>
      <br>
      <div class="impressum-copyright">
        <h3 v-html="$t('impressum.copyright')"></h3>
        <p>{{ $t('impressum.content.copyright') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImpressumPage',
  mounted() {
    document.title = "Schokett/Impressum";
  },
}
</script>

<style scoped>
.impressum {
  font-size: 15px;
  line-height: 1.3;
}

.impressum h2 {
  font-size: 24px;
  font-weight: bold;
}

.impressum h3 {
  font-size: 17px;
  font-weight: bold;
}

.impressum p {
  font-size: 15px;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 400%;
  color: white;

  /* background-color: rgb(50, 158, 158); */

}


.impressum-content {
  position: flex;
  

}
.impressum-copyright {
  position: flex;
  text-align: center;
  font-size: 15px;
  line-height: 1.3;
}
</style>
