// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

/* eslint-disable no-new */

// router.beforeEach(({meta, path}, from, next) => {
//   var isLogin = Boolean(store.state.login.user) // true用户已登录， false用户未登录
//   if (!isLogin && path !== '/login') {
//     console.log('没有登陆')
//     return next({ path: '/blog/user/login' })
//   }
//   if (isLogin && (path === '/login' || path === '/reg')) {
//     return next({ path: '/blog' })
//   }
//   next()
// })

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
