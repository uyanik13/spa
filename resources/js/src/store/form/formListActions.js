/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/

import axios from "axios"

export default {
  addItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/appointment`, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/appointment")
        .then((response) => {
          //console.log('APPOINTMENT DATA:',response.data)
          commit('SET_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/appointment/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },



  findAppointmentUsers ({ commit }, orderId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/appointment/${orderId}`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => { reject(error) })
    })
  },

}
