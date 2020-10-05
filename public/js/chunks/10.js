(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizard"],
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__["TabContent"]
  },
  props: {
    item: {},
    PriceAnnual: {
      type: Boolean,
      required: true
    },
    activeUser: {}
  },
  data: function data() {
    return {
      colorx: '#ffffff',
      popupActive: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    makePayment: function makePayment(item, PriceAnnual) {
      var _this = this;

      var obj = {
        title: this.item.title,
        user_id: this.activeUser.id,
        package_id: this.item.id,
        amount: PriceAnnual ? item.yearly_price : item.monthly_price,
        annual: PriceAnnual
      };
      this.popupActive = false;
      this.$store.dispatch('subscription/addItem', obj).then(function (response) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
          type: 'warning',
          title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('subscriptionSuccessfull'),
          text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('subscriptionSuccessfullDesc'),
          showCancelButton: true,
          reverseButtons: true,
          confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('showTokens'),
          cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('cancel')
        }).then(function (result) {
          if (result.value) {
            console.log(result);
            return _this.$router.push('/panel/token');
          }
        }).catch(function (error) {
          console.log('ERROR:', error);
        });

        _this.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Success'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('SuccessfullyAdded'), 'icon-success', 'success');

        return _this.$router.push('/panel/token');
      }).catch(function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
          type: 'warning',
          title: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('youHaveNotRequiredTokens'),
          text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('youHaveNotRequiredTokensDesc'),
          showCancelButton: true,
          reverseButtons: true,
          confirmButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('buyToken'),
          cancelButtonText: _i18n_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('cancel')
        }).then(function (result) {
          if (result.value) {
            console.log(result);
            return _this.$router.push('/panel/token');
          }
        }).catch(function (error) {
          console.log('ERROR:', error);
        });
      });
    },
    showAlert: function showAlert(title, text, icon, color) {
      this.$vs.notify({
        title: title,
        text: text,
        iconPack: 'feather',
        icon: icon,
        color: color
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsBankInfo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsBankInfo.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue");
/* harmony import */ var _UserSettingsLegal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsLegal.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue");
/* harmony import */ var _UserSettingsVerifyAccount_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettingsVerifyAccount.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue");
/* harmony import */ var _UserSettingsGeneral_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserSettingsGeneral.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue");
/* harmony import */ var _UserSettingsGetPremium_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserSettingsGetPremium.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue");
/* harmony import */ var _UserSettingsCvEdu_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSettingsCvEdu.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue");
/* harmony import */ var _UserSettingsChangePassword_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserSettingsChangePassword.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue");
/* harmony import */ var _UserSettingsInfo_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserSettingsInfo.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue");
/* harmony import */ var _UserSettingsSocialLinks_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserSettingsSocialLinks.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue");
/* harmony import */ var _UserSettingsConnections_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserSettingsConnections.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue");
/* harmony import */ var _UserSettingsNotifications_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserSettingsNotifications.vue */ "./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue");
/* harmony import */ var _store_user_management_moduleUserManagement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/user-management/moduleUserManagement */ "./resources/js/src/store/user-management/moduleUserManagement.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserSettingsBankInfo: _UserSettingsBankInfo_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserSettingsLegal: _UserSettingsLegal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserSettingsGetPremium: _UserSettingsGetPremium_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    UserSettingsCvEdu: _UserSettingsCvEdu_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    UserSettingsVerifyAccount: _UserSettingsVerifyAccount_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    UserSettingsGeneral: _UserSettingsGeneral_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserSettingsInfo: _UserSettingsInfo_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    UserSettingsChangePassword: _UserSettingsChangePassword_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserSettingsSocialLinks: _UserSettingsSocialLinks_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    UserSettingsConnections: _UserSettingsConnections_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    UserSettingsNotifications: _UserSettingsNotifications_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    },
    upgradePackage_remaining_days: function upgradePackage_remaining_days() {
      return this.$store.state.user.upgradePackage_remaining_days;
    },
    activeUser: function activeUser() {
      return this.$store.state.auth.user;
    }
  },
  created: function created() {
    if (!_store_user_management_moduleUserManagement__WEBPACK_IMPORTED_MODULE_11__["default"].isRegistered) {
      this.$store.registerModule('userManagement', _store_user_management_moduleUserManagement__WEBPACK_IMPORTED_MODULE_11__["default"]);
      _store_user_management_moduleUserManagement__WEBPACK_IMPORTED_MODULE_11__["default"].isRegistered = true;
    } //this.$store.dispatch('user/fetchUser')
    //this.$store.dispatch('user/fetchPackageInformation')

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      iban: '',
      bic: '',
      name: '',
      bankAddress: ''
    };
  },
  props: {
    user: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this = this;

      if (!this.validateForm) return;
      var obj = {
        id: this.user.id,
        payment_data: {
          iban: this.iban,
          bic: this.bic,
          name: this.name,
          bankAddress: this.bankAddress
        }
      };
      this.$store.dispatch('user/updateUser', obj).then(function (response) {
        _this.$vs.loading.close();

        if (response.data) _this.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    appendData: function appendData() {
      this.iban = this.user.payment_data.iban;
      this.bic = this.user.payment_data.bic;
      this.name = this.user.payment_data.name;
      this.bankAddress = this.user.payment_data.bankAddress;
    }
  },
  created: function created() {
    this.appendData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/user').then(function (response) {
      _this.currentUserData = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  },
  data: function data() {
    return {
      currentUserData: {},
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.old_password != '' && this.new_password != '' && this.confirm_new_password != '';
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this2 = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.currentUserData.id,
        old_password: this.old_password,
        new_password: this.new_password,
        confirm_new_password: this.confirm_new_password
      };
      this.$store.dispatch('user/updateUser', payload).then(function (response) {
        _this2.$vs.loading.close();

        if (response.data) _this2.$vs.notify({
          title: 'Success',
          text: 'Password Successfully Changed',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this2.$vs.loading.close();

        _this2.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      old_password: "",
      new_password: "",
      confirm_new_password: ""
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      site_url: process.env.MIX_APP_URL,
      fileUploadApiEndpoint: '/api/uploadCv',
      EduData: [{
        school: '',
        degree: '',
        study: '',
        start_year: '',
        end_year: ''
      }],
      WorkData: [{
        title: '',
        company: '',
        excerpt: '',
        start_year: '',
        end_year: ''
      }],
      contracts: [{
        contractName: '',
        ContractUrl: ''
      }]
    };
  },
  props: {
    user: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    AddEduData: function AddEduData() {
      this.EduData.push({
        school: '',
        degree: '',
        study: '',
        start_year: '',
        end_year: ''
      });
    },
    AddWorkData: function AddWorkData() {
      this.WorkData.push({
        title: '',
        company: '',
        excerpt: '',
        start_year: '',
        end_year: ''
      });
    },
    removeEduData: function removeEduData(index) {
      this.EduData.splice(index, 1);
    },
    removeWorkData: function removeWorkData(index) {
      this.WorkData.splice(index, 1);
    },
    AddContractData: function AddContractData() {
      this.contracts.push({
        contractName: '',
        ContractUrl: ''
      });
    },
    removeContractData: function removeContractData(index) {
      this.contracts.splice(index, 1);
    },
    SaveEdu: function SaveEdu() {
      var _this = this;

      var obj = {
        id: this.user.id,
        user_data: {
          EduData: this.EduData,
          WorkData: this.WorkData,
          contracts: this.contracts
        }
      };
      this.$store.dispatch('user/updateUser', obj).then(function (response) {
        _this.$vs.notify({
          title: 'Başarılı',
          text: ' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    successUpload: function successUpload(event) {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      });
    },
    appendData: function appendData() {
      if (this.user.user_data.EduData !== 'undefined') {
        this.EduData.push(this.user.user_data.EduData);
        this.EduData.splice(0, 1);
        this.EduData = this.EduData[0];
      }

      if (this.user.user_data.WorkData !== 'undefined') {
        this.WorkData.push(this.user.user_data.WorkData);
        this.WorkData.splice(0, 1);
        this.WorkData = this.WorkData[0];
      }
    }
  },
  created: function created() {
    this.appendData();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/user').then(function (response) {
      _this.currentUserData = response.data;
    }).catch(function (error) {
      console.log(error);
    }); //console.log('PHOTOURL',this.photo_url)
  },
  data: function data() {
    return {
      currentUserData: {},
      avatar: null
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this2 = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.currentUserData.id,
        name: this.currentUserData.name,
        address: this.currentUserData.address,
        avatar: this.avatar
      };
      this.$store.dispatch('user/updateUser', payload).then(function (response) {
        _this2.$vs.loading.close();

        if (response.data) _this2.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this2.$vs.loading.close();

        _this2.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    reset_data: function reset_data() {
      this.data_local = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.data));
    },
    update_avatar: function update_avatar(input) {
      var _this3 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this3.avatar = e.target.result; //console.log('IMAGEURL',e.target.result)
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfilePayment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfilePayment */ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserProfilePayment: _UserProfilePayment__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      name: null,
      PriceAnnual: false
    };
  },
  props: {
    user: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    },
    upgrade_profile: function upgrade_profile() {
      return this.$store.getters['package/upgrade_profile'];
    },
    activeUser: function activeUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.user.id
      };
      this.$store.dispatch('user/updateCompany', payload).then(function (response) {
        _this.$vs.loading.close();

        if (response.data) _this.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  },
  created: function created() {
    this.$store.dispatch('package/fetchItems');
    this.$store.dispatch('user/fetchUser');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      bio: null,
      dob: null,
      country: '',
      city: '',
      profession: '',
      search: '',
      experience: '',
      lang_known: [],
      langOptions: [{
        label: 'English',
        value: 'english'
      }, {
        label: 'Spanish',
        value: 'spanish'
      }, {
        label: 'French',
        value: 'french'
      }, {
        label: 'Russian',
        value: 'russian'
      }, {
        label: 'German',
        value: 'german'
      }, {
        label: 'Arabic',
        value: 'arabic'
      }, {
        label: 'Turkish',
        value: 'turkish'
      }],
      gender: '',
      website: '',
      current_salary: '',
      expected_salary: '',
      video: '',
      tags: []
    };
  },
  props: {
    user: {
      type: [Object, Array],
      default: function _default() {}
    } // countryOptions: {
    //   type: Array,
    //   default: []
    // },

  },
  watch: {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    },
    countries: function countries() {
      return this.$store.state.post.countries;
    },
    cities: function cities() {
      return this.$store.state.post.cities;
    },
    filtered: function filtered() {
      var _this = this;

      return this.countries.filter(function (country) {
        return country.includes(_this.search);
      });
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this2 = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.user.id,
        about_data: {
          bio: this.bio,
          dob: this.dob,
          profession: this.profession,
          country: this.country,
          city: this.city,
          lang_known: this.lang_known,
          website: this.website,
          experience: this.experience,
          current_salary: this.current_salary,
          expected_salary: this.expected_salary,
          gender: this.gender,
          tags: this.tags
        },
        video: this.video
      };
      console.log(payload);
      this.$store.dispatch('user/updateUser', payload).then(function (response) {
        _this2.$vs.loading.close();

        if (response.data) _this2.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this2.$vs.loading.close();

        _this2.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    appendData: function appendData() {
      this.bio = this.user.about_data[0].bio;
      this.dob = this.user.about_data[0].dob;
      this.profession = this.user.about_data[0].profession;
      this.country = this.user.about_data[0].country;
      this.lang_known = this.user.about_data[0].lang_known;
      this.experience = this.user.about_data[0].experience;
      this.current_salary = this.user.about_data[0].current_salary;
      this.expected_salary = this.user.about_data[0].expected_salary;
      this.gender = this.user.about_data[0].gender;
      this.website = this.user.about_data[0].website;
      this.video = this.user.about_data[0].video;
      this.city = this.user.about_data[0].city;
      this.tags = this.user.about_data[0].tags;
    },
    update_video: function update_video(input) {
      var _this3 = this;

      if (input.target.files[0].size > 100388000) {
        this.showAlert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Error'), _i18n_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Max100MbUploadLimited'), 'icon-alert-circle', 'danger');
      } else if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this3.video = e.target.result; //console.log('IMAGEURL',e.target.result)
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    },
    showAlert: function showAlert(title, text, icon, color) {
      this.$vs.notify({
        title: title,
        text: text,
        iconPack: 'feather',
        icon: icon,
        color: color
      });
    },
    findCity: function findCity(code) {
      //console.log('code',code)
      if (code !== 'undefined' || code !== '') {
        this.$store.dispatch('post/fetchCities', code);
      }

      return false;
    }
  },
  created: function created() {
    this.$store.dispatch('post/fetchItems');
    this.$store.dispatch('post/fetchCountries');
    this.appendData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      contracts: [{
        contractName: '',
        ContractUrl: ''
      }]
    };
  },
  props: {
    user: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    AddContractData: function AddContractData() {
      this.contracts.push({
        contractName: '',
        ContractUrl: ''
      });
    },
    removeContractData: function removeContractData(index) {
      this.contracts.splice(index, 1);
    },
    Save: function Save() {
      var _this = this;

      var obj = {
        id: this.user.id,
        user_data: {
          contracts: this.contracts
        }
      };
      this.$store.dispatch('user/updateUser', obj).then(function (response) {
        _this.$vs.notify({
          title: 'Başarılı',
          text: ' İçerik Başarıyla Eklendi',
          iconPack: 'feather',
          icon: 'icon-success',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.notify({
          title: 'Hata',
          text: 'İçerik Eklenemedi.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    successUpload: function successUpload(event) {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      });
    },
    appendData: function appendData() {
      if (this.user.user_data.EduData !== 'undefined') {
        this.EduData.push(this.user.user_data.EduData);
        this.EduData.splice(0, 1);
        this.EduData = this.EduData[0];
      }

      if (this.user.user_data.WorkData !== 'undefined') {
        this.WorkData.push(this.user.user_data.WorkData);
        this.WorkData.splice(0, 1);
        this.WorkData = this.WorkData[0];
      }
    }
  },
  created: function created() {
    this.appendData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.appendData();
  },
  data: function data() {
    return {
      comment: true,
      answer: true,
      follow: false,
      news: false,
      product_update: false,
      blog: true
    };
  },
  props: {
    user: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.user.id,
        notification_data: {
          comment: this.comment,
          answer: this.answer,
          follow: this.follow,
          news: this.news,
          product_update: this.product_update,
          blog: this.blog
        }
      };
      this.$store.dispatch('user/updateUser', payload).then(function (response) {
        _this.$vs.loading.close();

        if (response.data) _this.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    appendData: function appendData() {
      this.comment = this.user.notification_data.comment;
      this.answer = this.user.notification_data.answer;
      this.follow = this.user.notification_data.follow;
      this.news = this.user.notification_data.news;
      this.product_update = this.user.notification_data.product_update;
      this.blog = this.user.notification_data.blog;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      twitter: null,
      facebook: null,
      instagram: null,
      github: null,
      linkedin: null,
      youtube: null,
      slack: null
    };
  },
  created: function created() {
    this.appendData();
  },
  props: {
    user: {
      type: [Object, Array],
      default: function _default() {}
    }
  },
  watch: {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.user.id,
        social_data: {
          twitter: this.twitter,
          facebook: this.facebook,
          instagram: this.instagram,
          github: this.github,
          linkedin: this.linkedin,
          youtube: this.youtube,
          slack: this.slack
        }
      };
      this.$store.dispatch('user/updateUser', payload).then(function (response) {
        _this.$vs.loading.close();

        if (response.data) _this.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    appendData: function appendData() {
      this.twitter = this.user.social_data.twitter;
      this.facebook = this.user.social_data.facebook;
      this.instagram = this.user.social_data.instagram;
      this.github = this.user.social_data.github;
      this.linkedin = this.user.social_data.linkedin;
      this.youtube = this.user.social_data.youtube;
      this.slack = this.user.social_data.slack;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch('user/fetchUser');
    this.$store.dispatch('user/fetchVerifyRequests');
  },
  data: function data() {
    return {
      lawyerPhoto: '',
      passportPhoto: '',
      status: 'rejected'
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    },
    activeUser: function activeUser() {
      return this.$store.state.auth.user;
    },
    verifyRequests: function verifyRequests() {
      return this.$store.state.user.verifyRequests[0];
    }
  },
  methods: {
    save_changes: function save_changes() {
      var _this = this;

      if (!this.validateForm) return;
      var payload = {
        id: this.activeUser.id,
        lawyerPhoto: this.lawyerPhoto,
        passportPhoto: this.passportPhoto
      };
      this.$store.dispatch('user/createVerify', payload).then(function (response) {
        _this.$vs.loading.close();

        if (response.data) _this.$vs.notify({
          title: 'Success',
          text: 'Succesfully updated',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this.$vs.loading.close();

        _this.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    updateLawyerPhoto: function updateLawyerPhoto(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.lawyerPhoto = e.target.result;
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    },
    updatePassportPhoto: function updatePassportPhoto(input) {
      var _this3 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this3.passportPhoto = e.target.result;
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#ecommerce-checkout-demo .item-view-primary-action-btn[data-v-0b270391] {\n  color: #2c2c2c !important;\n}[dir] #ecommerce-checkout-demo .item-view-primary-action-btn[data-v-0b270391] {\n  background-color: #f6f6f6;\n}\n#ecommerce-checkout-demo .item-name[data-v-0b270391] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-0b270391] {\n  padding-bottom: 0;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-0b270391]  .wizard-header {\n  padding: 0;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-0b270391]  .wizard-tab-content {\n  padding-bottom: 0;\n}\n[dir=ltr] #ecommerce-checkout-demo .vue-form-wizard[data-v-0b270391]  .wizard-tab-content {\n  padding-right: 0;\n  padding-left: 0;\n}\n[dir=rtl] #ecommerce-checkout-demo .vue-form-wizard[data-v-0b270391]  .wizard-tab-content {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-0b270391]  .wizard-tab-content .wizard-tab-container {\n  margin-bottom: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "align-content-center mt-5" },
    [
      _c(
        "vs-button",
        {
          staticClass: "mt-4 ml-8 shadow-lg",
          attrs: {
            type: "gradient",
            color: "#E8603B",
            "gradient-color-secondary": "#E8603B"
          },
          on: {
            click: function($event) {
              _vm.popupActive = true
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("GetStarted")))]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "bg-primary-gradient",
          attrs: {
            "background-color": "rgba(152,152,152,.7)",
            "background-color-popup": _vm.colorx,
            title: _vm.item.title,
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "vx-col lg:w-1/1 w-full" },
            [
              _c(
                "vx-card",
                {
                  staticClass: "mb-base",
                  attrs: {
                    title: _vm.$t("Payment"),
                    subtitle: _vm.$t("paymentDesc")
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-3" },
                    [
                      _c("span", { staticClass: "mr-3" }, [
                        _vm._v(
                          _vm._s(_vm.$t("forThisActionCutting")) +
                            " " +
                            _vm._s(
                              !_vm.PriceAnnual
                                ? _vm.item.monthly_price
                                : _vm.item.yearly_price
                            ) +
                            " " +
                            _vm._s(_vm.$t("Token"))
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-4",
                          on: {
                            click: function($event) {
                              return _vm.makePayment(_vm.item, _vm.PriceAnnual)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("PayNow")))]
                      ),
                      _vm._v(" "),
                      _c("vs-divider")
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=template&id=d8d17cd2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=template&id=d8d17cd2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vs-tabs",
    {
      key: _vm.isSmallerScreen,
      staticClass: "tabs-shadow-none",
      attrs: {
        position: _vm.isSmallerScreen ? "top" : "top",
        id: "profile-tabs"
      }
    },
    [
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-user",
            label: !_vm.isSmallerScreen ? _vm.$t("Account") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-general md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("user-settings-general")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-lock",
            label: !_vm.isSmallerScreen ? _vm.$t("PasswordManagement") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("user-settings-change-password")],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("name") },
        model: {
          value: _vm.name,
          callback: function($$v) {
            _vm.name = $$v
          },
          expression: "name"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("iban") },
        model: {
          value: _vm.iban,
          callback: function($$v) {
            _vm.iban = $$v
          },
          expression: "iban"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("bic") },
        model: {
          value: _vm.bic,
          callback: function($$v) {
            _vm.bic = $$v
          },
          expression: "bic"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("bankAddress") },
        model: {
          value: _vm.bankAddress,
          callback: function($$v) {
            _vm.bankAddress = $$v
          },
          expression: "bankAddress"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
            [_vm._v(_vm._s(_vm.$t("Save")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=1b30a862&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=1b30a862& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("oldPassword") },
        model: {
          value: _vm.old_password,
          callback: function($$v) {
            _vm.old_password = $$v
          },
          expression: "old_password"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("newPassword") },
        model: {
          value: _vm.new_password,
          callback: function($$v) {
            _vm.new_password = $$v
          },
          expression: "new_password"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": _vm.$t("newPasswordConfirm") },
        model: {
          value: _vm.confirm_new_password,
          callback: function($$v) {
            _vm.confirm_new_password = $$v
          },
          expression: "confirm_new_password"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
            [_vm._v(_vm._s(_vm.$t("save")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=template&id=615a80ee&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=template&id=615a80ee& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap justify-between items-center mb-8" },
        [
          _c("div", [
            _c("p", [_vm._v("Account is connected with Google.")]),
            _vm._v(" "),
            _c("p", { staticClass: "font-medium mb-4" }, [
              _vm._v("ogur@gmail.com")
            ])
          ]),
          _vm._v(" "),
          _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
            _vm._v("Disconnect")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap justify-between items-center mb-base" },
        [
          _c("div", [
            _c("p", [_vm._v("Account is connected with facebook.")]),
            _vm._v(" "),
            _c("p", { staticClass: "font-medium mb-4" }, [_vm._v("@username")])
          ]),
          _vm._v(" "),
          _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
            _vm._v("Disconnect")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mb-6 ml-auto",
          attrs: {
            color: "#00aaff",
            "icon-pack": "feather",
            icon: "icon-twitter"
          }
        },
        [_vm._v("Connected To Twitter")]
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "ml-auto",
          attrs: {
            color: "#405DE6",
            "icon-pack": "feather",
            icon: "icon-instagram"
          }
        },
        [_vm._v("Connected To Instagram")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "mt-8 mb-base" },
        [
          _c("vs-upload", {
            attrs: {
              id: "CvUpload",
              accept: ".doc,.docx,.pdf",
              text: _vm.$t("UploadCV"),
              automatic: "",
              action: _vm.fileUploadApiEndpoint,
              fileName: "file"
            },
            on: { "on-success": _vm.successUpload }
          }),
          _vm._v(" "),
          _c("span", [
            _vm._v(
              _vm._s(
                _vm.$t(
                  "Max_file_size_is_5MB_Suitable_files_are_doc_docx_rft_pdf"
                )
              )
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _vm._l(_vm.EduData, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("SchoolName") },
              model: {
                value: option.school,
                callback: function($$v) {
                  _vm.$set(option, "school", $$v)
                },
                expression: "option.school"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("SchoolDegree") },
              model: {
                value: option.degree,
                callback: function($$v) {
                  _vm.$set(option, "degree", $$v)
                },
                expression: "option.degree"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("SchoolStudy") },
              model: {
                value: option.study,
                callback: function($$v) {
                  _vm.$set(option, "study", $$v)
                },
                expression: "option.study"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("SchoolStartYear") },
              model: {
                value: option.start_year,
                callback: function($$v) {
                  _vm.$set(option, "start_year", $$v)
                },
                expression: "option.start_year"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("SchoolGraduateYear") },
              model: {
                value: option.end_year,
                callback: function($$v) {
                  _vm.$set(option, "end_year", $$v)
                },
                expression: "option.end_year"
              }
            }),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "bg-danger",
                on: {
                  click: function($event) {
                    return _vm.removeEduData(index)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "demo-text-dark", on: { click: _vm.AddEduData } },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _vm._l(_vm.WorkData, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("WorkTitle") },
              model: {
                value: option.title,
                callback: function($$v) {
                  _vm.$set(option, "title", $$v)
                },
                expression: "option.title"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("Company") },
              model: {
                value: option.company,
                callback: function($$v) {
                  _vm.$set(option, "company", $$v)
                },
                expression: "option.company"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("Excerpt") },
              model: {
                value: option.excerpt,
                callback: function($$v) {
                  _vm.$set(option, "excerpt", $$v)
                },
                expression: "option.excerpt"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("StartYear") },
              model: {
                value: option.start_year,
                callback: function($$v) {
                  _vm.$set(option, "start_year", $$v)
                },
                expression: "option.start_year"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("EndYear") },
              model: {
                value: option.end_year,
                callback: function($$v) {
                  _vm.$set(option, "end_year", $$v)
                },
                expression: "option.end_year"
              }
            }),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "bg-danger",
                on: {
                  click: function($event) {
                    return _vm.removeWorkData(index)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "demo-text-dark", on: { click: _vm.AddWorkData } },
        [_vm._v(_vm._s(_vm.$t("AddWorkExperience")))]
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _vm._l(_vm.contracts, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("ContractName") },
              model: {
                value: option.contractName,
                callback: function($$v) {
                  _vm.$set(option, "contractName", $$v)
                },
                expression: "option.contractName"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: {
                label: _vm.$t("ContractUrl"),
                "label-placeholder": _vm.$t("CopyWithFileManager")
              },
              model: {
                value: option.ContractUrl,
                callback: function($$v) {
                  _vm.$set(option, "ContractUrl", $$v)
                },
                expression: "option.ContractUrl"
              }
            }),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "bg-danger",
                on: {
                  click: function($event) {
                    return _vm.removeContractData(index)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "demo-text-dark", on: { click: _vm.AddContractData } },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.SaveEdu } },
            [_vm._v(_vm._s(_vm.$t("Save")))]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=template&id=746a1381&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=template&id=746a1381& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center mb-base" },
        [
          _vm.avatar === null
            ? _c("vs-avatar", {
                staticClass: "mr-4 mb-4",
                attrs: { src: _vm.currentUserData.avatar, size: "70px" }
              })
            : _c("vs-avatar", {
                staticClass: "mr-4 mb-4",
                attrs: { src: _vm.avatar, size: "70px" }
              }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("input", {
                ref: "updateImgInput",
                staticClass: "hidden",
                attrs: { type: "file", accept: "image/*" },
                on: { change: _vm.update_avatar }
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mr-4 sm:mb-0 mb-2",
                  on: {
                    click: function($event) {
                      return _vm.$refs.updateImgInput.click()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("pictureUpload")))]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.avatar !== null,
                      expression: "avatar !== null"
                    }
                  ]
                },
                [_vm._v(" " + _vm._s(_vm.$t("saveYourPicture")))]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { name: "name", "label-placeholder": _vm.$t("name") },
        model: {
          value: _vm.currentUserData.name,
          callback: function($$v) {
            _vm.$set(_vm.currentUserData, "name", $$v)
          },
          expression: "currentUserData.name"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full",
        attrs: {
          "label-placeholder": _vm.$t("email"),
          disabled: "",
          name: "email"
        },
        model: {
          value: _vm.currentUserData.email,
          callback: function($$v) {
            _vm.$set(_vm.currentUserData, "email", $$v)
          },
          expression: "currentUserData.email"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full",
        attrs: {
          "label-placeholder": _vm.$t("phone"),
          disabled: "",
          name: "phone"
        },
        model: {
          value: _vm.currentUserData.phone,
          callback: function($$v) {
            _vm.$set(_vm.currentUserData, "phone", $$v)
          },
          expression: "currentUserData.phone"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full my-base",
        attrs: { "label-placeholder": _vm.$t("address"), name: "address" },
        model: {
          value: _vm.currentUserData.address,
          callback: function($$v) {
            _vm.$set(_vm.currentUserData, "address", $$v)
          },
          expression: "currentUserData.address"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
            [_vm._v(_vm._s(_vm.$t("Save")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=template&id=2360ac98&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=template&id=2360ac98& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vx-col w-full md:w-12/12 mb-base" },
    [
      _c(
        "vx-card",
        {
          staticClass: "text-center bg-primary-gradient greet-user",
          attrs: { slot: "no-body" },
          slot: "no-body"
        },
        [
          _c("feather-icon", {
            staticClass:
              "p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",
            attrs: { icon: "GiftIcon", svgClasses: "h-8 w-8" }
          }),
          _vm._v(" "),
          _c("h1", { staticClass: "mb-6 text-white" }, [
            _vm._v(_vm._s(_vm.$t("upgradeYourProfile")))
          ]),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"
            },
            [_vm._v(_vm._s(_vm.$t("underupgradeYourProfileText")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col sm:w-1/2 w-full sm:mb-10 my-3 flex sm:justify-end justify-center order-last"
        },
        [
          _c("p", { staticClass: "text-red" }, [
            _vm._v(_vm._s(_vm.$t("MonthlyOrYearly")))
          ]),
          _vm._v(" "),
          _c("vs-switch", {
            model: {
              value: _vm.PriceAnnual,
              callback: function($$v) {
                _vm.PriceAnnual = $$v
              },
              expression: "PriceAnnual"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-row" },
        _vm._l(_vm.upgrade_profile, function(packageData) {
          return _c(
            "div",
            {
              key: packageData.id,
              class:
                "vx-col w-full  lg:w-1/" +
                _vm.upgrade_profile.length +
                " mb-base"
            },
            [
              _c(
                "vx-card",
                [
                  _c(
                    "h2",
                    {
                      style:
                        packageData.popular === 1
                          ? "color: rgb(231, 96, 59)"
                          : "color: #22292f !important"
                    },
                    [_vm._v(_vm._s(packageData.title))]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(packageData.second_title))
                  ]),
                  _vm._v(" "),
                  !_vm.PriceAnnual
                    ? _c("h2", { staticClass: "text-black" }, [
                        _vm._v(
                          _vm._s(packageData.monthly_price) +
                            "/ " +
                            _vm._s(_vm.$t("Monthly")) +
                            " "
                        )
                      ])
                    : _c("h2", { staticClass: "text-black" }, [
                        _vm._v(
                          _vm._s(packageData.yearly_price) +
                            "/ " +
                            _vm._s(_vm.$t("Yearly"))
                        )
                      ]),
                  _vm._v(" "),
                  _vm._l(JSON.parse(packageData.description), function(
                    item,
                    index
                  ) {
                    return _c("vs-list-item", {
                      key: index,
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-check",
                        subtitle: item.value
                      }
                    })
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex justify-between flex-wrap" },
                    [
                      _c("user-profile-payment", {
                        attrs: {
                          activeUser: _vm.activeUser,
                          item: packageData,
                          PriceAnnual: _vm.PriceAnnual
                        }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=template&id=7e112836&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=template&id=7e112836& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("span", [_vm._v(_vm._s(_vm.$t("VideoAboutYou")))]),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap items-center mb-base" }, [
        _c("video", {
          staticClass: "mr-4 mb-4",
          attrs: { src: _vm.video, height: "250px", width: "250px" }
        }),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("input", {
              ref: "updateImgInput",
              staticClass: "hidden",
              attrs: { type: "file", accept: "video/*" },
              on: { change: _vm.update_video }
            }),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mr-4 sm:mb-0 mb-2",
                on: {
                  click: function($event) {
                    return _vm.$refs.updateImgInput.click()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("UploadVideoAboutYou")))]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.video !== null,
                    expression: "video !== null"
                  }
                ]
              },
              [_vm._v(_vm._s(_vm.$t("saveYourVideo")))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vs-textarea", {
        attrs: { label: "Bio", placeholder: "Your bio..." },
        model: {
          value: _vm.bio,
          callback: function($$v) {
            _vm.bio = $$v
          },
          expression: "bio"
        }
      }),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.$t("Work Areas")))]),
      _vm._v(" "),
      _c("v-select", {
        attrs: {
          taggable: "",
          "push-tags": "",
          multiple: "",
          closeOnSelect: false,
          dir: _vm.$vs.rtl ? "rtl" : "ltr"
        },
        model: {
          value: _vm.tags,
          callback: function($$v) {
            _vm.tags = $$v
          },
          expression: "tags"
        }
      }),
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Birth Date")]),
          _vm._v(" "),
          _c("flat-pickr", {
            staticClass: "w-full",
            attrs: { config: { dateFormat: "Y-m-d" } },
            model: {
              value: _vm.dob,
              callback: function($$v) {
                _vm.dob = $$v
              },
              expression: "dob"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
            [_vm._v(_vm._s(_vm.$t("Save")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=template&id=d7b7addc&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=template&id=d7b7addc& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-divider"),
      _vm._v(" "),
      _vm._l(_vm.contracts, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: _vm.$t("ContractName") },
              model: {
                value: option.contractName,
                callback: function($$v) {
                  _vm.$set(option, "contractName", $$v)
                },
                expression: "option.contractName"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: {
                label: _vm.$t("ContractUrl"),
                "label-placeholder": _vm.$t("CopyWithFileManager")
              },
              model: {
                value: option.ContractUrl,
                callback: function($$v) {
                  _vm.$set(option, "ContractUrl", $$v)
                },
                expression: "option.ContractUrl"
              }
            }),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "bg-danger",
                on: {
                  click: function($event) {
                    return _vm.removeContractData(index)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "demo-text-dark", on: { click: _vm.AddContractData } },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.Save } },
            [_vm._v(_vm._s(_vm.$t("Save")))]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=template&id=a7624a7e&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=template&id=a7624a7e& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", { attrs: { "no-shadow": "" } }, [
    _c("div", { staticClass: "mb-base" }, [
      _c("h6", { staticClass: "mb-4" }, [_vm._v(_vm._s(_vm.$t("Activitiy")))]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.comment,
              callback: function($$v) {
                _vm.comment = $$v
              },
              expression: "comment"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v(
              _vm._s(_vm.$t("email_me_when_someone_comments_on_my_article"))
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.answer,
              callback: function($$v) {
                _vm.answer = $$v
              },
              expression: "answer"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v(
              _vm._s(_vm.$t("email_me_when_someone_comments_on_my_answer"))
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.follow,
              callback: function($$v) {
                _vm.follow = $$v
              },
              expression: "follow"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v(_vm._s(_vm.$t("email_me_when_someone_follow_me")))
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c("h6", { staticClass: "mb-4" }, [
        _vm._v(_vm._s(_vm.$t("Application")))
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.news,
              callback: function($$v) {
                _vm.news = $$v
              },
              expression: "news"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v(_vm._s(_vm.$t("news_and_announcements")))
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-wrap items-center justify-end" },
      [
        _c(
          "vs-button",
          { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
          [_vm._v(_vm._s(_vm.$t("Save")))]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=7743b465&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=7743b465& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-twitter",
          label: _vm.$t("Twitter"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.twitter,
          callback: function($$v) {
            _vm.twitter = $$v
          },
          expression: "twitter"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-facebook",
          label: _vm.$t("Facebook"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.facebook,
          callback: function($$v) {
            _vm.facebook = $$v
          },
          expression: "facebook"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-instagram",
          label: _vm.$t("Instagram"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.instagram,
          callback: function($$v) {
            _vm.instagram = $$v
          },
          expression: "instagram"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-github",
          label: _vm.$t("Github"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.github,
          callback: function($$v) {
            _vm.github = $$v
          },
          expression: "github"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-linkedin",
          label: _vm.$t("Linkedin"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.linkedin,
          callback: function($$v) {
            _vm.linkedin = $$v
          },
          expression: "linkedin"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-slack",
          label: _vm.$t("Slack"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.slack,
          callback: function($$v) {
            _vm.slack = $$v
          },
          expression: "slack"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-youtube",
          label: _vm.$t("Youtube"),
          "icon-no-border": ""
        },
        model: {
          value: _vm.youtube,
          callback: function($$v) {
            _vm.youtube = $$v
          },
          expression: "youtube"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            { staticClass: "ml-auto mt-2", on: { click: _vm.save_changes } },
            [_vm._v(_vm._s(_vm.$t("Save")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.verifyRequests !== undefined,
              expression: "verifyRequests !== undefined"
            }
          ]
        },
        [
          _vm.verifyRequests !== undefined &&
          _vm.verifyRequests.status === "pending"
            ? _c(
                "vx-card",
                {
                  staticClass: "text-center bg-primary-gradient greet-user",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c("feather-icon", {
                    staticClass:
                      "p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",
                    attrs: { icon: "LoaderIcon", svgClasses: "h-8 w-8" }
                  }),
                  _vm._v(" "),
                  _c("h1", { staticClass: "mb-6 text-white" }, [
                    _vm._v(_vm._s(_vm.$t("YourVerifyUnderReview")))
                  ])
                ],
                1
              )
            : _vm.verifyRequests !== undefined &&
              _vm.verifyRequests.status === "rejected"
            ? _c(
                "vx-card",
                {
                  staticClass: "text-center bg-primary-gradient greet-user",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c("feather-icon", {
                    staticClass:
                      "p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",
                    attrs: { icon: "XIcon", svgClasses: "h-8 w-8" }
                  }),
                  _vm._v(" "),
                  _c("h1", { staticClass: "mb-6 text-white" }, [
                    _vm._v(_vm._s(_vm.$t("YourVerifyRejected")))
                  ])
                ],
                1
              )
            : _vm.verifyRequests !== undefined &&
              _vm.verifyRequests.status === "verified"
            ? _c(
                "vx-card",
                {
                  staticClass: "text-center bg-primary-gradient greet-user",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c("feather-icon", {
                    staticClass:
                      "p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",
                    attrs: { icon: "CheckIcon", svgClasses: "h-8 w-8" }
                  }),
                  _vm._v(" "),
                  _c("h1", { staticClass: "mb-6 text-white" }, [
                    _vm._v(_vm._s(_vm.$t("YourVerifyVerified")))
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                !_vm.verifyRequests || _vm.verifyRequests.status === "rejected",
              expression:
                "!verifyRequests || verifyRequests.status === 'rejected' "
            }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "flex flex-wrap items-center mb-base" },
            [
              _c("vs-avatar", {
                staticClass: "mr-4 mb-4",
                attrs: { src: _vm.lawyerPhoto, size: "250px" }
              }),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("input", {
                    ref: "updateLawyerPhoto",
                    staticClass: "hidden",
                    attrs: { type: "file", accept: "image/*" },
                    on: { change: _vm.updateLawyerPhoto }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mr-4 sm:mb-0 mb-2",
                      on: {
                        click: function($event) {
                          return _vm.$refs.updateLawyerPhoto.click()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("UploadYourPicture")))]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-wrap items-center mb-base" },
            [
              _c("vs-avatar", {
                staticClass: "mr-4 mb-4",
                attrs: { src: _vm.passportPhoto, size: "250px" }
              }),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("input", {
                    ref: "updatePassportPhoto",
                    staticClass: "hidden",
                    attrs: { type: "file", accept: "image/*" },
                    on: { change: _vm.updatePassportPhoto }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mr-4 sm:mb-0 mb-2",
                      on: {
                        click: function($event) {
                          return _vm.$refs.updatePassportPhoto.click()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("UploadYourPassport")))]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-wrap items-center justify-end" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "ml-auto mt-2",
                  on: { click: _vm.save_changes }
                },
                [_vm._v(_vm._s(_vm.$t("Save")))]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfilePayment_vue_vue_type_template_id_0b270391_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true& */ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true&");
/* harmony import */ var _UserProfilePayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfilePayment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true& */ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserProfilePayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfilePayment_vue_vue_type_template_id_0b270391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfilePayment_vue_vue_type_template_id_0b270391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b270391",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfilePayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=style&index=0&id=0b270391&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_style_index_0_id_0b270391_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_template_id_0b270391_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserProfilePayment.vue?vue&type=template&id=0b270391&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_template_id_0b270391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePayment_vue_vue_type_template_id_0b270391_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettings.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettings_vue_vue_type_template_id_d8d17cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettings.vue?vue&type=template&id=d8d17cd2& */ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=template&id=d8d17cd2&");
/* harmony import */ var _UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettings.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettings.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettings_vue_vue_type_template_id_d8d17cd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettings_vue_vue_type_template_id_d8d17cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=template&id=d8d17cd2&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=template&id=d8d17cd2& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_template_id_d8d17cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=template&id=d8d17cd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettings.vue?vue&type=template&id=d8d17cd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_template_id_d8d17cd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_template_id_d8d17cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsBankInfo_vue_vue_type_template_id_1e3ef2c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1&");
/* harmony import */ var _UserSettingsBankInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsBankInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsBankInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsBankInfo_vue_vue_type_template_id_1e3ef2c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsBankInfo_vue_vue_type_template_id_1e3ef2c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsBankInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsBankInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsBankInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsBankInfo_vue_vue_type_template_id_1e3ef2c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsBankInfo.vue?vue&type=template&id=1e3ef2c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsBankInfo_vue_vue_type_template_id_1e3ef2c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsBankInfo_vue_vue_type_template_id_1e3ef2c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsChangePassword_vue_vue_type_template_id_1b30a862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsChangePassword.vue?vue&type=template&id=1b30a862& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=1b30a862&");
/* harmony import */ var _UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsChangePassword_vue_vue_type_template_id_1b30a862___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsChangePassword_vue_vue_type_template_id_1b30a862___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=1b30a862&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=1b30a862& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_template_id_1b30a862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsChangePassword.vue?vue&type=template&id=1b30a862& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=1b30a862&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_template_id_1b30a862___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_template_id_1b30a862___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsConnections_vue_vue_type_template_id_615a80ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsConnections.vue?vue&type=template&id=615a80ee& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=template&id=615a80ee&");
/* harmony import */ var _UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsConnections.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsConnections_vue_vue_type_template_id_615a80ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsConnections_vue_vue_type_template_id_615a80ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsConnections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=template&id=615a80ee&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=template&id=615a80ee& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_template_id_615a80ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsConnections.vue?vue&type=template&id=615a80ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsConnections.vue?vue&type=template&id=615a80ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_template_id_615a80ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_template_id_615a80ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsCvEdu_vue_vue_type_template_id_42b9bb9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c&");
/* harmony import */ var _UserSettingsCvEdu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsCvEdu.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsCvEdu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsCvEdu_vue_vue_type_template_id_42b9bb9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsCvEdu_vue_vue_type_template_id_42b9bb9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsCvEdu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsCvEdu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsCvEdu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsCvEdu_vue_vue_type_template_id_42b9bb9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsCvEdu.vue?vue&type=template&id=42b9bb9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsCvEdu_vue_vue_type_template_id_42b9bb9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsCvEdu_vue_vue_type_template_id_42b9bb9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsGeneral_vue_vue_type_template_id_746a1381___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsGeneral.vue?vue&type=template&id=746a1381& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=template&id=746a1381&");
/* harmony import */ var _UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsGeneral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsGeneral_vue_vue_type_template_id_746a1381___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsGeneral_vue_vue_type_template_id_746a1381___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=template&id=746a1381&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=template&id=746a1381& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_template_id_746a1381___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsGeneral.vue?vue&type=template&id=746a1381& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGeneral.vue?vue&type=template&id=746a1381&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_template_id_746a1381___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_template_id_746a1381___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsGetPremium_vue_vue_type_template_id_2360ac98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsGetPremium.vue?vue&type=template&id=2360ac98& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=template&id=2360ac98&");
/* harmony import */ var _UserSettingsGetPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsGetPremium.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsGetPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsGetPremium_vue_vue_type_template_id_2360ac98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsGetPremium_vue_vue_type_template_id_2360ac98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGetPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsGetPremium.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGetPremium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=template&id=2360ac98&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=template&id=2360ac98& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGetPremium_vue_vue_type_template_id_2360ac98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsGetPremium.vue?vue&type=template&id=2360ac98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsGetPremium.vue?vue&type=template&id=2360ac98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGetPremium_vue_vue_type_template_id_2360ac98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGetPremium_vue_vue_type_template_id_2360ac98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsInfo_vue_vue_type_template_id_7e112836___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsInfo.vue?vue&type=template&id=7e112836& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=template&id=7e112836&");
/* harmony import */ var _UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsInfo_vue_vue_type_template_id_7e112836___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsInfo_vue_vue_type_template_id_7e112836___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=template&id=7e112836&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=template&id=7e112836& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_template_id_7e112836___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsInfo.vue?vue&type=template&id=7e112836& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsInfo.vue?vue&type=template&id=7e112836&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_template_id_7e112836___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_template_id_7e112836___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsLegal_vue_vue_type_template_id_d7b7addc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsLegal.vue?vue&type=template&id=d7b7addc& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=template&id=d7b7addc&");
/* harmony import */ var _UserSettingsLegal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsLegal.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsLegal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsLegal_vue_vue_type_template_id_d7b7addc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsLegal_vue_vue_type_template_id_d7b7addc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsLegal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsLegal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsLegal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=template&id=d7b7addc&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=template&id=d7b7addc& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsLegal_vue_vue_type_template_id_d7b7addc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsLegal.vue?vue&type=template&id=d7b7addc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsLegal.vue?vue&type=template&id=d7b7addc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsLegal_vue_vue_type_template_id_d7b7addc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsLegal_vue_vue_type_template_id_d7b7addc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsNotifications_vue_vue_type_template_id_a7624a7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsNotifications.vue?vue&type=template&id=a7624a7e& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=template&id=a7624a7e&");
/* harmony import */ var _UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsNotifications.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsNotifications_vue_vue_type_template_id_a7624a7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsNotifications_vue_vue_type_template_id_a7624a7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=template&id=a7624a7e&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=template&id=a7624a7e& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_template_id_a7624a7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsNotifications.vue?vue&type=template&id=a7624a7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsNotifications.vue?vue&type=template&id=a7624a7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_template_id_a7624a7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_template_id_a7624a7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsSocialLinks_vue_vue_type_template_id_7743b465___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsSocialLinks.vue?vue&type=template&id=7743b465& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=7743b465&");
/* harmony import */ var _UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsSocialLinks.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsSocialLinks_vue_vue_type_template_id_7743b465___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsSocialLinks_vue_vue_type_template_id_7743b465___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsSocialLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=7743b465&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=7743b465& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_template_id_7743b465___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsSocialLinks.vue?vue&type=template&id=7743b465& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=7743b465&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_template_id_7743b465___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_template_id_7743b465___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsVerifyAccount_vue_vue_type_template_id_1fb0ef4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d&");
/* harmony import */ var _UserSettingsVerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsVerifyAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsVerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsVerifyAccount_vue_vue_type_template_id_1fb0ef4d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsVerifyAccount_vue_vue_type_template_id_1fb0ef4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsVerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsVerifyAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsVerifyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsVerifyAccount_vue_vue_type_template_id_1fb0ef4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/common/user-settings/UserSettingsVerifyAccount.vue?vue&type=template&id=1fb0ef4d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsVerifyAccount_vue_vue_type_template_id_1fb0ef4d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsVerifyAccount_vue_vue_type_template_id_1fb0ef4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);