import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import app from './App.vue'
import router from './router'

const store = createStore({
    state () {
      return {
        scroll: 0
      }
    },
})

createApp(app)
    .use(router)
    .use(store)
    .mount('#app')
