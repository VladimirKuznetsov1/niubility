import './assets/main.css'
import 'vue-final-modal/style.css'
import { createVfm } from 'vue-final-modal'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(createVfm()).mount('#app')
