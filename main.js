import Vue from 'vue'
import App from './App'
import $api from './lib/request.js'

Vue.prototype.$api = $api

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
