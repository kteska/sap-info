import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Info from './pages/Info'
import Start from './pages/Start'
import Category from './pages/Category'
import Main from './pages/Main'

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
  { path: '', component: Main },
  { path: '/list', component: Start },
  { path: '/filter', component: Category },
  { path: '/info', component: Info },
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
