import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  login: {}
  // listLeave: [],
}

const getters = {
  login: state => state.login
  // listLeave: state => state.listLeave,
}

const actions = {
  login ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'user/auth/login'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          if (response.data.data) {
            const token = response.data.data.user.token
            const fullName = response.data.data.full_name
            const userName = response.data.data.user.username
            const userRole = response.data.data.user.role
            localStorage.setItem('token', token)
            localStorage.setItem('full_name', fullName)
            localStorage.setItem('username', userName)
            localStorage.setItem('role', userRole)
            commit(types.LOGIN, response.data)
          } else {
            commit(types.LOGIN, response.data)
          }
          resolve(response)
        })
        .catch(err => {
          commit(types.LOGIN, err)
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.LOGIN] (state, data) {
    state.login = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
