import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  // enterprise_getListCV: {}
}

const getters = {
  // enterprise_getListCV: state => state.enterprise_getListCV
}

const actions = {
  // a_enterprise_getListCV ({ commit }) {
  //   return new Promise(function (resolve, reject) {
  //     let urlData = 'enterprise/job-news'
  //     http.axiosCus.get(urlData)
  //       .then((response) => {
  //         commit(types.ENTERPRISE_GET_LIST_CV, response.data)
  //         resolve(response)
  //       })
  //       .catch(err => {
  //         reject(err)
  //       })
  //   })
  // }
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
