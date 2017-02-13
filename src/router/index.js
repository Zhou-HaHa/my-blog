import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from 'components/Hello'
import Login from 'components/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }, {
      path: '/blog/login',
      name: 'login',
      meta: { auth: false },
      component: Login
    }
  ],
  mode: 'history' // need to start
})
