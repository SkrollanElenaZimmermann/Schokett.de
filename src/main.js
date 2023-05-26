import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import SiteOne from './components/SiteOne.vue';
import SiteTwo from './components/SiteTwo.vue';
import SiteThree from './components/SiteThree.vue';
import ImpressumPage from './components/ImpressumPage.vue';

// Erstelle die Vue-App
const app = createApp(App);

// Erstelle den Router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: SiteOne },
    { path: '/SiteTwo', component: SiteTwo },
    { path: '/SiteThree', component: SiteThree },
    { path: '/ImpressumPage', component: ImpressumPage },
  ],
});

// Erstelle das VueI18n-Objekt
const i18n = createI18n({
  locale: 'de', // Standardmäßige Sprache
  messages: {
    de: {
      // Deutsch
      impressum: {
        title: 'Impressum',
        companyName: 'Firma: Schokett Software',
        // ... Weitere Übersetzungen für das Impressum
      },
      // ... Weitere Übersetzungen für andere Seiten
    },
    ja: {
      // Japanisch
      impressum: {
        title: 'インプレッサム',
        companyName: '会社名：Schokett Software',
        // ... Weitere Übersetzungen für das Impressum auf Japanisch
      },
      // ... Weitere Übersetzungen für andere Seiten auf Japanisch
    },
  },
});

// Verwende den Router und VueI18n in der App
app.use(router);
app.use(i18n);

// Montiere die App auf #app
app.mount('#app');
