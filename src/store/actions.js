import api from '../api'
import { USER_SIGNIN, USER_SIGNOUT, USER_REG } from './types'

export const UserLogin = ({ commit }, data) => {
  api.localLogin(data).then(function (response) {
    if (response.status === 200 && response.data.success) {
      commit(USER_SIGNIN, response.data.data.user.account)
    }
  })
  .catch(function (error) {
    console.log(error)
    console.log('登陆失败error')
  })
  // commit(USER_SIGNIN, 'test')
}

export const UserLogout = ({ commit }, data) => {
  api.localLogout(data).then(function (response) {
    commit(USER_SIGNOUT)
    alert('UserLogout')
    window.location = '/blog'
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const UserReg = ({ commit }, data) => {
  api.localReg(data).then(function (response) {
    if (response.data.type === true) {
      commit(USER_REG, response.data.token)
      window.location = '/person'
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}
