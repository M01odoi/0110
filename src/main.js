import Vue from 'vue'
import App from './vue/App.vue'
import Vuex from 'vuex'
import '@/scss/app.scss'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
