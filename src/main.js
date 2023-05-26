import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory} from "vue-router"

import SiteOne from './components/SiteOne.vue'
import SiteTwo from './components/SiteTwo.vue'
import SiteThree from './components/SiteThree.vue'
import ImpressumPage from './components/ImpressumPage.vue'

const app = createApp(App)

createApp(App)

const routes = [
    {path: "/", component: SiteOne},
    {path: "/SiteTwo", component: SiteTwo},
    {path: "/SiteThree", component: SiteThree},
    {path: "/ImpressumPage", component: ImpressumPage},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active",
})

app.use(router)

app.mount('#app')