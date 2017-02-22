import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var instance = axios.create()

const ROOT_API = '/blog'
// if (localStorage.getItem('user')) {
//   instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/(^\\")|(\\"$)/g, '')
// }

export default {
  localLogin: function (data) {
    return Vue.axios.post(ROOT_API + '/user/login', data)
  },
  localLogout: function (data) {
    return instance.post('/blog/logout', data)
  },
  localReg: function (data) {
    return Vue.axios.post('/blog/reg', data)
  },
  getBlogListByUser: function (data, currentPage) {
    if (currentPage) {
      return Vue.axios.get(ROOT_API + '/blog/' + data + '?offset=' + currentPage)
    }
    return Vue.axios.get(ROOT_API + '/blog/' + data)
  },
  getBlogList: function (currentPage) {
    if (currentPage) {
      return Vue.axios.get(ROOT_API + '/blog' + '?offset=' + currentPage)
    }
    return Vue.axios.get(ROOT_API + '/blog')
  },
  getBlogDetail: function (data) {
    return Vue.axios.get(ROOT_API + '/blog' + '/' + data.id + '/article/' + data.blogId)
  }
}
