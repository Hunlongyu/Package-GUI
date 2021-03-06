import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element/index'
import './plugins/cssgg/index'
import './plugins/contextmenu/index'
import './plugins/vxe-table/utils'
import './plugins/vxe-table/table'
import '@primer/css/markdown/index.scss'
import './assets/scss/hljs-github.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
