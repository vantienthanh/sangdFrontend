import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  listMemberCVByUser: {},
  listEnterpriseByUser: {}
}

const getters = {
  listMemberCVByUser: state => state.listMemberCVByUser,
  listEnterpriseByUser: state => state.listEnterpriseByUser
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
  },
  profile_getListEnterpriseCVByUser ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/job-news/all-of-user/' + params
      http.axiosCus.get(urlData, params)
        .then((response) => {
          commit(types.PROFILE_LIST_ENTERPRISE_CV, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  updateProfileInfo ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/profile'
      http.axiosCus.post(urlData, params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
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
  [types.PROFILE_LIST_MEMBER_CV] (state, data) {
    state.listMemberCVByUser = data
  },
  [types.PROFILE_LIST_ENTERPRISE_CV] (state, data) {
    state.listEnterpriseByUser = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
