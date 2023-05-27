<template>
  <div class="container">
    <div class="impressum">
      <div class="language-switch-frame">
        <div class="language-switch">
          <label class="switch">
            <input type="checkbox" v-model="isJapanese" @change="changeLanguage">
            <span class="slider"></span>
          </label>
          <span class="language-label">{{ currentLanguage }}</span>
        </div>
      </div>
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
      <br>
      <br>
      <br>
      <h3 v-html="$t('impressum.copyright')"></h3>
      <p>{{ $t('impressum.content.copyright') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImpressumPage',
  mounted() {
    document.title = "Schokett/Impressum";
  },
  data() {
    return {
      isJapanese: false,
    };
  },
  computed: {
    currentLanguage() {
      return this.isJapanese ? '日本語->Deutsch' : 'Deutsch->日本語';
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
  font-size: 15px;
  line-height: 1.3;
}
.impressum h2 {
  font-size: 30px;
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
}

/* .language-switch-frame {
  position: fixed;
  top: 10px;
  left: 50%;
  background-color: #464646;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
} */

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

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.language-label {
  margin-left: 10px;
  color: white;
  font-size: 22px;
  line-height: 34px;
}
</style>
