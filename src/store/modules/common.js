// import * as types from '../mutation-types'
// import http from '../../utils/http.js'

const state = {
  // isShowBtn: true
  // listLeave: [],
}

const getters = {
  // isShowBtn: state => state.isShowBtn
  // listLeave: state => state.listLeave,
}

const actions = {
  // setShowBtn ({ commit }, status) {
  //   commit(types.SET_SHOW_BTN, status)
  // }
  // getListLeave: function ({commit}) {
  //   return new Promise(function (resolve, reject) {
  //     let urlData = 'leave/employee'
  //     http.axiosCus.get(urlData, {
  //       headers: {
  //         'Authorization': 'Bearer ' + localStorage.getItem('token')
  //       }
  //     })
  //       .then(res => {
  //         commit(types.GET_LIST_LEAVE_HISTORY, res.data)
  //         resolve()
  //       }, res => {
  //         reject(res)
  //       })
  //   })
  // },
}

const mutations = {
  // [types.SET_SHOW_BTN] (state, status) {
  //   state.isShowBtn = status
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
