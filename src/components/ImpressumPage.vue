<template>
  <div class="container">
    <div class="impressum">

  <h2>{{ $t('impressum.title') }}</h2>

  <h3 v-html="$t('impressum.angaben')"></h3>
  <p>{{ $t('impressum.content.angaben') }}</p>
  
  <h3 v-html="$t('impressum.kontakt')"></h3>
  <p>{{ $t('impressum.content.kontakt') }}</p>

  <h3 v-html="$t('impressum.umsatzsteuerID')"></h3>
  <p>{{ $t('impressum.content.umsatzsteuerID') }}</p>

  <h3 v-html="$t('impressum.verantwortlich')"></h3>
  <p>{{ $t('impressum.content.verantwortlich') }}</p>

  <h3 v-html="$t('impressum.haftungsausschluss')"></h3>
  <p>{{ $t('impressum.content.haftungsausschluss') }}</p>
  
      <div class="language-switch">
        <label>
          <input type="checkbox" v-model="isJapanese" @change="changeLanguage">
          {{ currentLanguage }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImpressumPage',
  mounted() {
    document.title = this.$t('impressum.title');
  },
  data() {
    return {
      isJapanese: false,
    };
  },
  computed: {
    currentLanguage() {
      return this.isJapanese ? '日本語' : 'Deutsch';
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.isJapanese ? 'ja' : 'de';
      
    }
  }
}
</script>

<style scoped>
.impressum {
  font-size: 16px;
  line-height: 1.5;
}
/* .impressum h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.impressum h3 {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
} */
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 400%;
  color: white;
}
.language-switch {
  margin-top: 20px;
}
</style>

