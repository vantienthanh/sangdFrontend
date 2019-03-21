import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  loginResponse: {}
}

const getters = {
  loginResponse: state => state.loginResponse
}

const actions = {
  login ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'login'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('user', response.data.data.user)
          commit(types.LOGIN, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.LOGIN] (state, data) {
    state.loginResponse = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
