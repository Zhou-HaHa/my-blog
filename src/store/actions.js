import api from '../api'
import { USER_SIGNIN, USER_SIGNOUT, USER_REG } from './types'

export const UserLogin = ({ commit }, data) => {
  api.localLogin(data).then(function (response) {
    console.log(response)
    if (response.status === 200 && response.data.success) {
      commit(USER_SIGNIN, {user: response.data.data.userId})
    } else {
      window.location = '/blog'
    }
  })
  .catch(function (error) {
    console.log(error)
  })
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
