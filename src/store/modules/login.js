import { USER_SIGNIN, USER_SIGNOUT, USER_REG } from '../types'

var isLoggedIn = function () {
  var user = localStorage.getItem('user')
  var expire = localStorage.getItem('expire')
  if (user) {
    if (JSON.parse(expire) > Date.now()) {
      return JSON.parse(localStorage.getItem('user'))
    }
  } else {
    alert('Login needed')
    return false
  }
}

var getAvatar = function () {
  alert(JSON.parse(localStorage.getItem('avatarUrl')))
  return JSON.parse(localStorage.getItem('avatarUrl'))
}

const state = {
  user: isLoggedIn() || null,
  avatar: getAvatar() || 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
}

const mutations = {
  [USER_SIGNIN] (state, response) {
    let user = response.data.user
    localStorage.setItem('user', JSON.stringify(user.account))
    console.log(JSON.stringify(user.avatarUrl))
    console.log(JSON.stringify(response))
    alert(response)
    localStorage.setItem('avatarUrl', JSON.stringify(user.avatarUrl))
    console.log(response.token)
    localStorage.setItem('token', JSON.stringify(response.data.token))
    let expire = Date.now() + 10000000
    localStorage.setItem('expire', JSON.stringify(expire))
    state.user = user.account
    state.avatarUrl = user.avatarUrl
    state.token = response.token
  },
  [USER_SIGNOUT] (state) {
    localStorage.removeItem('user')
    state.token = null
  },
  [USER_REG] (state, user) {
    localStorage.setItem('user', JSON.stringify(user))
    state.token = user
  }
}

export default {
  state,
  mutations
}
