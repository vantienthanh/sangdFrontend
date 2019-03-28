import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  // enterprise_getListCV: {}
}

const getters = {
  // enterprise_getListCV: state => state.enterprise_getListCV
}

const actions = {
  memberApply ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'member/join-session'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  // [types.ENTERPRISE_GET_LIST_CV] (state, data) {
  //   state.enterprise_getListCV = data
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
