import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var instance = axios.create()

const ROOT_API = '/blog'
if (localStorage.getItem('user')) {
  instance.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('token'))
}

export default {
  localLogin: function (data) {
    return Vue.axios.post(ROOT_API + '/user/login', data)
  },
  localLogout: function (data) {
    return instance.post('/blog/logout', data)
  },
  localReg: function (data) {
    return Vue.axios.post('/blog/user/reg', data)
  },
  getBlogListByUser: function (data, currentPage) {
    if (currentPage) {
      return instance.get(ROOT_API + '/blog/' + data + '?offset=' + currentPage)
    }
    return instance.get(ROOT_API + '/blog/' + data)
  },
  getBlogList: function (currentPage) {
    if (currentPage) {
      return Vue.axios.get(ROOT_API + '/blog' + '?offset=' + currentPage)
    }
    return Vue.axios.get(ROOT_API + '/blog')
  },
  getBlogDetail: function (data) {
    return Vue.axios.get(ROOT_API + '/blog' + '/' + data.id + '/article/' + data.blogId)
  },
  addBlog: function (data) {
    return Vue.axios.post(ROOT_API + '/blog/addBlog', data)
  }
}
