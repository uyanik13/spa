/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


export default {
  userAppointments: (state) => (appID) => state.formList.filter((form) => form.appointment_id === appID),
}
