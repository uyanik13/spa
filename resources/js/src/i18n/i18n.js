/*=========================================================================================
  File Name: i18n.js
  Description: i18n configuration file. Imports i18n data.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import tr from './tr.json'
import de from './de.json'

Vue.use(VueI18n)


export default new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages: { en,tr,de}

})

