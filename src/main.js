import Vue from 'vue'
import App from './vue/App.vue'
import '@/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
