import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({ endpoint: "tayabraza" });

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(prismic)

app.mount('#app')
