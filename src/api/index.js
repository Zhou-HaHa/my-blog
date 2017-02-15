import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var instance = axios.create()
// if (localStorage.getItem('user')) {
//   instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/(^\\")|(\\"$)/g, '')
// }

export default {
  localLogin: function (data) {
    console.log('api/index--data' + data)
    return Vue.axios.post('/blog/user/login', data)
  },
  localLogout: function (data) {
    return instance.post('/blog/logout', data)
  },
  localReg: function (data) {
    return Vue.axios.post('/blog/reg', data)
  }
}

