import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

// Vue.use(Vuetify)

// @import '../../node_modules/vuetify/src/stylus/settings/_colors'
import colors from 'vuetify/es5/util/colors'



Vue.use(Vuetify, {
    //  primary - цвет тайтла активного пункта меню.
    theme: {
        // primary: '#3f51b5',
        //primary: 'rgb(198,255,0)', //lime accent-3
        primary: 'rgb(128,185,0)',
        //primary: colors.red.darken-2,
        // secondary: '#b0bec5',
        secondary: 'rgb(238,255,65)', //lime accent-2
        //secondary: "orange",
        accent: '#8c9eff',
        error: '#b71c1c'
    }
})



new Vue({
  el: '#app',
  render: h => h(App),
  router
})
