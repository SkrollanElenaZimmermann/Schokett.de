import { createApp } from 'vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
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
    { path: '/HomePage', component: HomePage },
    { path: '/SiteOne', component: SiteOne },
    { path: '/SiteTwo', component: SiteTwo },
    { path: '/SiteThree', component: SiteThree },
    { path: '/ImpressumPage', component: ImpressumPage },
  ],
});

// Erstelle das VueI18n-Objekt
const i18n = createI18n({
  locale: 'de',  // Standardmäßige Sprache
  messages: {
    de: {
      // Deutsch
      navbar: {
        siteone: 'Seite Eins',
        sitetwo: 'Seite Zwei',
        sitethree: 'Seite Drei',
        impressum: 'Impressum',
      },
      footer: {
        kontakt: 'Kontakt',
        socialmedia: 'Social Media',
        quicklinks: 'Quick Links',
      },

      impressum: {
        title: 'Impressum',
        copyright: 'Copyright:',
        Firma: 'Schokett Software',
        angaben: `Impressum Angaben gemäß § 5 TMG:`, 
        kontakt: `Kontakt:`,
        umsatzsteuerID:`umsatzsteuerID:`,
        verantwortlich: `Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:`,
        haftungsausschluss: `Haftungsausschluss:`,
        content: {
          copyright: `© 2023 Schokett Software. Alle Rechte vorbehalten.
            Alle Inhalte dieser Webseite, einschließlich Texte, Grafiken, Logos, Bilder, Audio- und Videodateien sowie das Design und Layout der Webseite, sind durch das Urheberrecht und andere geistige Eigentumsrechte geschützt. 
            Das Kopieren, Reproduzieren, Veröffentlichen, Herunterladen, Verbreiten oder Modifizieren von Inhalten dieser Webseite ohne vorherige schriftliche Genehmigung von Schokett Software ist ausdrücklich untersagt.
            Das Klauen, Kopieren oder Plagiieren von Ideen, Konzepten, Designs oder anderen geistigen Eigentumsrechten, die auf dieser Webseite präsentiert werden, ist strengstens untersagt. Jeglicher Verstoß gegen diese Bestimmung wird rechtlich verfolgt.
            Wir behalten uns das Recht vor, alle rechtlichen Schritte einzuleiten, einschließlich Schadensersatzforderungen und gerichtlicher Verfolgung, um unser geistiges Eigentum zu schützen und gegen Ideenklau vorzugehen.
            Für Anfragen bezüglich der Nutzung unserer Inhalte oder zur Erlangung einer schriftlichen Genehmigung wenden Sie sich bitte an uns.`,
          angaben: `
            Firma: Schokett Software
            Inhaber: Skrollan Elena Zimmermann
            Straße: Fantasiestraße 123
            PLZ, Ort: 12345 Fantasiestadt
            Land: Deutschland`,
          kontakt: `
            Telefon: +49 (0)123 456789
            E-Mail: skrollan.contacts@gmail.com`,
          umsatzsteuerID: `
            Umsatzsteuer-Identifikationsnummer gemäß §19 UStG: DE123456789`,
          verantwortlich: `
            Skrollan Elena Zimmermann
            Fantasiestraße 123
            12345 Fantasiestadt
            Deutschland`,
          haftungsausschluss: `
            Haftung für Inhalte:
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Haftung für Links:
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            Urheberrecht:
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Datenschutz:
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.`,
        },
      },
      // ... Weitere Übersetzungen für andere Seiten
    },
    ja: {
      // Japanisch
      navbar: {
        siteone: '1ページ目',
        sitetwo: '2ページ目',
        sitethree: '3ページ目',
        impressum: '運営者情報',
      },
      footer: {
        kontakt: 'お問い合わせ',
        socialmedia: 'ソーシャルメディア',
        quicklinks: 'クイックリンク',
      },
      impressum: {
        title: 'インプレッサム',
        copyright: '著作権:',
        angaben: 'インプレッサムの情報に基づく',
        kontakt: 'お問い合わせ:',
        umsatzsteuerID: '消費税番号:',
        verantwortlich: 'コンテンツの責任者:',
        haftungsausschluss: '免責事項:',
        content: {
          copyright:
          `© 2023 Schokett Software。全著作権所有。 
          このウェブサイトのすべてのコンテンツ、テキスト、グラフィックス、ロゴ、画像、音声およびビデオファイル、ウェブサイトのデザインとレイアウトを含むものは、著作権およびその他の知的所有権によって保護されています。 
          事前の書面によるSchokett Softwareの許可なしに、このウェブサイトのコンテンツを複製、再生、公開、ダウンロード、配布、または変更することは明示的に禁止されています。 
          このウェブサイトで提示されるアイデア、コンセプト、デザイン、その他の知的所有権の盗用、コピー、または剽窃は厳しく禁止されています。この規定に違反した場合、法的措置を取ることがあります。 
          知的所有権を保護し、アイデア盗用に対処するために、損害賠償請求や法的措置を含むすべての法的手段を取る権利を留保します。 
          コンテンツの利用に関するお問い合わせや書面による許可の取得については、お問い合わせください。`,
            angaben: `
            会社名：Schokett Software
            オーナー：スクロラン・エレナ・ジマーマン
            住所：ファンタジーストラーセ123
            郵便番号、市町村：12345 ファンタジーシュタット
            国：ドイツ
          `,
          kontakt: `
            電話：+49 (0)123 456789
            メール：skrollan.contacts@gmail.com
          `,
          umsatzsteuerID: `
            第19条UStGに基づく消費税番号：DE123456789
          `,
          verantwortlich: `
            スクロラン・エレナ・ジマーマン
            ファンタジーストラーセ123
            12345 ファンタジーシュタット
            ドイツ
          `,
          haftungsausschluss: `
            コンテンツの免責事項:
            当社のウェブサイトのコンテンツは最大限の注意をもって作成されていますが、その正確性、完全性、最新性については保証できません。

            リンクの免責事項:
            当社の提供するリンク先は、当社が管理・監督することができない第三者の外部ウェブサイトへのリンクを含んでいます。リンク先のコンテンツについては、常に該当する提供者または運営者が責任を負います。具体的な法的違反の状況がない限り、リンク先のコンテンツに対する常時の内容的な監視は不合理です。違反が判明した場合、当社は該当するリンクを速やかに削除します。

            著作権:
            当サイトの運営者が作成したコンテンツや作品は、ドイツの著作権に従います。著作権者または作成者の書面による同意なしに、著作権の範囲外での複製、編集、配布、利用などの利益を得る行為は禁止されています。このサイトのダウンロードや複製は、私的利用や非営利目的に限り許可されます。

            プライバシーポリシー:
            当社のウェブサイトの利用は、通常、個人情報の提供なしで行うことができます。ただし、当社のウェブサイト上で個人情報（氏名、住所、メールアドレスなど）を収集する場合は、可能な限り自発的な基準に基づいて行われます。これらのデータは、明示的な同意なしに第三者に提供されることはありません。
          `,
        },
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
