import Vue from 'vue'
import VueRouter from 'vue-router'
import ListBlog from 'components/ListBlog'
import Login from 'components/Login'
import AsideNav from 'components/AsideNav'
import AsideBlog from 'components/AsideBlog'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/blog',
      components: {
        default: ListBlog,
        a: AsideNav
      }
    }, {
      path: '/blog/:id',
      components: {
        default: ListBlog,
        a: AsideBlog
      }
    }, {
      path: '/login',
      name: 'login',
      meta: { auth: false },
      component: Login
    }
  ],
  mode: 'history' // need to start
})
