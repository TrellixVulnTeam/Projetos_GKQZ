import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'
import store from "./config/store"
import router from "./config/router"
import "./config/bootstrap"
import "./config/msgs"

Vue.config.productionTip = false

//temporario
require("axios").defaults.headers.common["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikd1aWxoZXJtZSBIZW5yaXF1ZSIsImVtYWlsIjoiZ3VpbGhlcm1lXzE4aGVucmlxdWVAeWFob28uY29tLmJyIiwiYWRtaW4iOnRydWUsImlhdCI6MTY2MjE1ODc0MSwiZXhwIjoxNjYyNDE3OTQxfQ.zF8tj2QZzvG0xbTTEwaqwSXfyQaAzj34o2OFoiADu3I"

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')