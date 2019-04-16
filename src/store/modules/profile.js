import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  listMemberCVByUser: {}
}

const getters = {
  listMemberCVByUser: state => state.listMemberCVByUser
}

const actions = {
  profile_getListMemberCVByUser ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/member/list-cv/find-by-id/' + params
      http.axiosCus.get(urlData, params)
        .then((response) => {
          commit(types.PROFILE_LIST_MEMBER_CV, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.PROFILE_LIST_MEMBER_CV] (state, data) {
    state.listMemberCVByUser = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
