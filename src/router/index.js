import Vue from 'vue'
import VueRouter from 'vue-router'
import ListBlog from 'components/ListBlog'
import Login from 'components/Login'
import AsideNav from 'components/AsideNav'
import AsideBlog from 'components/AsideBlog'
import DetailBlog from 'components/DetailBlog'
import AddBlog from 'components/AddBlog'
import Register from 'components/Register'

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
      path: '/blog/addBlog',
      components: {
        default: AddBlog,
        a: AsideBlog
      }
    }, {
      path: '/blog/:id',
      name: 'user',
      components: {
        default: ListBlog,
        a: AsideBlog
      }
    }, {
      path: '/blog/:id/article/:blogId',
      name: 'detail',
      components: {
        default: DetailBlog,
        a: AsideBlog
      }
    }, {
      path: '/blog/user/login',
      name: 'login',
      meta: { auth: false },
      component: Login
    }, {
      path: '/blog/user/register',
      name: 'register',
      component: Register
    }
  ],
  mode: 'history' // need to start
})
