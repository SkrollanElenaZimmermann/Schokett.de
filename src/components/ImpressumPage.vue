<template>
  <div class="container">
    <div class="impressum">
      <h2>Impressum</h2>
      <p>
        Angaben gemäß § 5 TMG:
        <br>
        Firma: Schokett Software
        <br>
        Inhaber: Skrollan Elena Zimmermann
        <br>
        Straße: Fantasiestraße 123
        <br>
        PLZ, Ort: 12345 Fantasiestadt
        <br>
        Land: Deutschland
      </p>
      <h3>Kontakt:</h3>
      <p>
        Telefon: +49 (0)123 456789
        <br>
        E-Mail: skrollan.contacts@gmail.com
      </p>
      <h3>Umsatzsteuer-ID:</h3>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §19 UStG:
        DE123456789
      </p>
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
      <p>
        Skrollan Elena Zimmermann
        <br>
        Fantasiestraße 123
        <br>
        12345 Fantasiestadt
        <br>
        Deutschland
      </p>
      <h3>Haftungsausschluss:</h3>
      <p>
        Haftung für Inhalte
        <br>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>
      <p>
        Haftung für Links
        <br>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <p>
        Urheberrecht
        <br>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Datenschutz
        <br>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      </p>

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
    document.title = "Schokett/Impressum";
  },
  data() {
    return {
      isJapanese: false
    };
  },
  computed: {
    currentLanguage() {
      return this.isJapanese ? '日本語' : 'Deutsch';
    }
  },
  methods: {
    changeLanguage() {
      this.isJapanese = !this.isJapanese;
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
.impressum h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
.impressum h3 {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.container {
  height: 100vh;
  /* width: 100%; */
  /* background: greenyellow; */
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
