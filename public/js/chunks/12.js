(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@babel/runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/ui-elements/card/analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  created: function created() {
    /* axios.get("/api/user")
       .then((response) => { this.currentUserData = response.data })
       .catch((error) => { console.log(error) })*/
  },
  data: function data() {
    return {
      name: '',
      address: '',
      phone: '',
      email: '',
      city: '',
      map: '',
      analyticsData: _views_ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      TumBayiler: []
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    submitData: function submitData() {
      var _this = this;

      var obj = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        city: this.city,
        map: this.map,
        type: 'BayiFormu'
      };
      this.$store.dispatch("custom/addItem", obj).then(function (response) {
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
    }
  }
}, "created", function created() {
  var _this2 = this;

  this.$store.dispatch("custom/fetchItems").then(function (response) {
    response.data.forEach(function (element) {
      element.type === 'BayiFormu' ? _this2.TumBayiler.push(JSON.parse(element.JsonData)) : '';
    });
  }).catch(function (error) {
    console.log(error);
  });
  console.log('tumbayiler', this.TumBayiler);
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__["quillEditor"]
  },
  data: function data() {
    return {
      calendarInfo: {
        price: "",
        kdv: "",
        timeout_price: ""
      }
    };
  },
  methods: {
    addOptions: function addOptions(type) {
      this[type].push({});
    },
    removeThis: function removeThis(index, type) {
      this[type].splice(index, 1);
    },
    SaveData: function SaveData(dataType) {
      var _obj,
          _this = this;

      var obj = (_obj = {}, _defineProperty(_obj, dataType, this[dataType]), _defineProperty(_obj, "type", dataType), _obj);
      console.log(obj);
      this.$store.dispatch("custom/addItem", obj).then(function (response) {
        _this.$vs.notify({
          title: "Başarılı",
          text: " İçerik Başarıyla Eklendi",
          iconPack: "feather",
          icon: "icon-success",
          color: "success"
        });
      }).catch(function (error) {
        _this.$vs.notify({
          title: "Hata",
          text: "İçerik Eklenemedi.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "danger"
        });
      });
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.auth.user;
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch("custom/fetchItems").then(function (response) {
      response.data.forEach(function (element) {
        if (element.type === "56") {
          _this2[element.type].push(JSON.parse(element.JsonData)[element.type]);

          _this2[element.type].splice(0, 1);

          _this2[element.type] = _this2[element.type][0];
        } else {
          _this2[element.type] = JSON.parse(element.JsonData)[element.type];
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      Faq: [{
        question: '',
        answer: ''
      }]
    };
  },
  methods: {
    addOptions: function addOptions(type) {
      this[type].push({});
    },
    removeThis: function removeThis(index, type) {
      this[type].splice(index, 1);
    },
    SaveData: function SaveData(dataType) {
      var _obj,
          _this = this;

      var obj = (_obj = {}, _defineProperty(_obj, dataType, this[dataType]), _defineProperty(_obj, "type", dataType), _obj);
      console.log(obj);
      this.$store.dispatch('custom/addItem', obj).then(function (response) {
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
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch('custom/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        if (element.type === 'References') {
          _this2[element.type].push(JSON.parse(element.JsonData)[element.type]);

          _this2[element.type].splice(0, 1);

          _this2[element.type] = _this2[element.type][0];
        } else {
          _this2[element.type] = JSON.parse(element.JsonData)[element.type];
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_setting_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/setting/setting */ "./resources/js/src/store/setting/setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    if (!_store_setting_setting__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('settings', _store_setting_setting__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_setting_setting__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch('settings/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        return _this[element.name] = element.value;
      });
    });
  },
  mounted: function mounted() {
    this.isMounted = true;
  },
  data: function data() {
    return {
      logo: '',
      facebook: '',
      instagram: '',
      youtube: '',
      linkedin: '',
      twitter: '',
      google: '',
      pinterest: '',
      address: '',
      phone: '',
      email: '',
      site_url: '',
      map_iframe: '',
      site_name: '',
      site_video: '',
      currency: '',
      settingsDataAll: []
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    },
    settingsData: function settingsData() {
      return this.$store.state.setting.settings;
    }
  },
  methods: {
    update_avatar: function update_avatar(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.logo = e.target.result;
          console.log('IMAGEURL', e.target.result);
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    },
    save_changes: function save_changes() {
      var _this3 = this;

      if (!this.validateForm) return;
      var payload = {
        logo: this.logo,
        facebook: this.facebook,
        instagram: this.instagram,
        linkedin: this.linkedin,
        youtube: this.youtube,
        twitter: this.twitter,
        google: this.google,
        pinterest: this.pinterest,
        address: this.address,
        phone: this.phone,
        email: this.email,
        site_url: this.site_url,
        map_iframe: this.map_iframe,
        site_name: this.site_name,
        site_video: this.site_video,
        currency: this.currency
      };
      this.$store.dispatch('setting/addItem', payload).then(function (response) {
        _this3.$vs.loading.close();

        if (response.data) _this3.$vs.notify({
          title: 'Başarılı',
          text: 'Başarıyla Güncellendi',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'success'
        });
      }).catch(function (error) {
        _this3.$vs.loading.close();

        _this3.$vs.notify({
          title: 'Hata',
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__["quillEditor"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      homepage: {
        title: '',
        desc: '',
        image: ''
      }
    };
  },
  methods: {
    addOptions: function addOptions(type) {
      this[type].push({});
    },
    removeThis: function removeThis(index, type) {
      this[type].splice(index, 1);
    },
    SaveData: function SaveData(dataType) {
      var _obj,
          _this = this;

      var obj = (_obj = {}, _defineProperty(_obj, dataType, this[dataType]), _defineProperty(_obj, "type", dataType), _obj);
      console.log(obj);
      this.$store.dispatch('custom/addItem', obj).then(function (response) {
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
    update_avatar: function update_avatar(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.homepage.image = e.target.result;
          console.log('IMAGEURL', e.target.result);
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {
    var _this3 = this;

    this.$store.dispatch('custom/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        if (element.type === 'HomeUnderMenuSlider') {
          _this3[element.type].push(JSON.parse(element.JsonData)[element.type]);

          _this3[element.type].splice(0, 1);

          _this3[element.type] = _this3[element.type][0];
        } else {
          _this3[element.type] = JSON.parse(element.JsonData)[element.type];
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__["quillEditor"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      orderDetails: {
        title: '',
        desc: '',
        image: ''
      }
    };
  },
  methods: {
    addOptions: function addOptions(type) {
      this[type].push({});
    },
    removeThis: function removeThis(index, type) {
      this[type].splice(index, 1);
    },
    SaveData: function SaveData(dataType) {
      var _obj,
          _this = this;

      var obj = (_obj = {}, _defineProperty(_obj, dataType, this[dataType]), _defineProperty(_obj, "type", dataType), _obj);
      console.log(obj);
      this.$store.dispatch('custom/addItem', obj).then(function (response) {
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
    update_avatar: function update_avatar(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.orderDetails.image = e.target.result;
          console.log('IMAGEURL', e.target.result);
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {
    var _this3 = this;

    this.$store.dispatch('custom/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        if (element.type === 'HomeUnderMenuSlider') {
          _this3[element.type].push(JSON.parse(element.JsonData)[element.type]);

          _this3[element.type].splice(0, 1);

          _this3[element.type] = _this3[element.type][0];
        } else {
          _this3[element.type] = JSON.parse(element.JsonData)[element.type];
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);


function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      References: [{
        name: '',
        image: '',
        url: ''
      }]
    };
  },
  methods: {
    addOptions: function addOptions(type) {
      this[type].push({});
    },
    removeThis: function removeThis(index, type) {
      this[type].splice(index, 1);
    },
    SaveData: function SaveData(dataType) {
      var _obj,
          _this = this;

      var obj = (_obj = {}, _defineProperty(_obj, dataType, this[dataType]), _defineProperty(_obj, "type", dataType), _obj);
      console.log(obj);
      this.$store.dispatch('custom/addItem', obj).then(function (response) {
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
    sliderUpload: function sliderUpload(input, index, type) {
      var _this2 = this;

      //console.log(input.target.files[0])
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          return _this2[type][index].image = e.target.result;
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    },
    openFileInput: function openFileInput(type) {
      return this.$refs[type][0].click();
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.auth.user;
    }
  },
  created: function created() {
    var _this3 = this;

    this.$store.dispatch('custom/fetchItems').then(function (response) {
      response.data.forEach(function (element) {
        if (element.type === 'References') {
          _this3[element.type].push(JSON.parse(element.JsonData)[element.type]);

          _this3[element.type].splice(0, 1);

          _this3[element.type] = _this3[element.type][0];
        } else {
          _this3[element.type] = JSON.parse(element.JsonData)[element.type];
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      VideoGallery: [{
        url: '',
        title: ''
      }]
    };
  },
  methods: {
    AddVideoGallery: function AddVideoGallery() {
      this.VideoGallery.push({
        url: '',
        title: ''
      });
    },
    removeVideoGallery: function removeVideoGallery(index) {
      this.VideoGallery.splice(index, 1);
    },
    SaveVideoGallery: function SaveVideoGallery() {
      var _this = this;

      var obj = {
        VideoGallery: this.VideoGallery,
        type: 'VideoGallery'
      };
      this.$store.dispatch("custom/addItem", obj).then(function (response) {
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
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch("custom/fetchItems").then(function (response) {
      response.data.forEach(function (element) {
        element.type === 'VideoGallery' ? _this2.VideoGallery.push(JSON.parse(element.JsonData).VideoGallery) : '';
      });

      _this2.VideoGallery.splice(0, 1);

      _this2.VideoGallery = _this2.VideoGallery[0];
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue */ "./resources/js/src/views/pages/admin/site-settings/component/General.vue");
/* harmony import */ var _Video_Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video-Gallery */ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage */ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue");
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Booking */ "./resources/js/src/views/pages/admin/site-settings/component/Booking.vue");
/* harmony import */ var _OrderDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrderDetails */ "./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue");
/* harmony import */ var _Bayiler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bayiler */ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue");
/* harmony import */ var _References__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./References */ "./resources/js/src/views/pages/admin/site-settings/component/References.vue");
/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Faq */ "./resources/js/src/views/pages/admin/site-settings/component/Faq.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VideoGallery: _Video_Gallery__WEBPACK_IMPORTED_MODULE_1__["default"],
    General: _General_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HomePage: _HomePage__WEBPACK_IMPORTED_MODULE_2__["default"],
    Bayiler: _Bayiler__WEBPACK_IMPORTED_MODULE_5__["default"],
    Booking: _Booking__WEBPACK_IMPORTED_MODULE_3__["default"],
    OrderDetails: _OrderDetails__WEBPACK_IMPORTED_MODULE_4__["default"],
    References: _References__WEBPACK_IMPORTED_MODULE_6__["default"],
    Faq: _Faq__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26& ***!
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
  return _c("vx-card", [
    _c(
      "div",
      { staticClass: "vx-col w-full md:w-12/12 mb-base" },
      [
        _c(
          "vx-card",
          [
            _c(
              "vs-tabs",
              [
                _c(
                  "vs-tab",
                  { attrs: { label: "Bayiler" } },
                  [
                    _c("vx-card", { attrs: { title: "Bayiler" } }, [
                      _c(
                        "div",
                        {
                          staticClass: "mt-4",
                          attrs: { slot: "no-body" },
                          slot: "no-body"
                        },
                        [
                          _c(
                            "vs-table",
                            {
                              staticClass: "table-dark-inverted",
                              attrs: { data: _vm.TumBayiler },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var data = ref.data
                                    return _vm._l(data, function(tr, indextr) {
                                      return _c(
                                        "vs-tr",
                                        { key: indextr },
                                        [
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].name
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].name)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].address
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].address)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].phone
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].phone)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[indextr].email
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].email)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: { data: data[indextr].map }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data[indextr].map)
                                                )
                                              ])
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  }
                                }
                              ])
                            },
                            [
                              _c(
                                "template",
                                { slot: "thead" },
                                [
                                  _c("vs-th", [_vm._v("İsim")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Eposta")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Telefon")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Şehir")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Adres")]),
                                  _vm._v(" "),
                                  _c("vs-th", [_vm._v("Harita")])
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-tab", { attrs: { label: "Bayi Ekle" } }, [
                  _c(
                    "div",
                    { staticClass: "mt-3" },
                    [
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Adı", name: "dataSeoTitle" },
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
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Adresi", name: "dataSeoTitle" },
                        model: {
                          value: _vm.address,
                          callback: function($$v) {
                            _vm.address = $$v
                          },
                          expression: "address"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Telefonu", name: "dataSeoTitle" },
                        model: {
                          value: _vm.phone,
                          callback: function($$v) {
                            _vm.phone = $$v
                          },
                          expression: "phone"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Eposta", name: "dataSeoTitle" },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Harita", name: "dataSeoTitle" },
                        model: {
                          value: _vm.map,
                          callback: function($$v) {
                            _vm.map = $$v
                          },
                          expression: "map"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "mt-5 w-full",
                        attrs: { label: "Bayi Şehri", name: "dataSeoTitle" },
                        model: {
                          value: _vm.city,
                          callback: function($$v) {
                            _vm.city = $$v
                          },
                          expression: "city"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        { staticClass: "mr-6", on: { click: _vm.submitData } },
                        [_vm._v(_vm._s(_vm.$t("Add")))]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=template&id=77d62d9c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=template&id=77d62d9c& ***!
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
    "div",
    { staticClass: "vx-col w-full md:w-12/12 mb-base" },
    [
      _c("vx-card", { staticClass: "mb-5 ml-2 mr-5 mt-5" }, [
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3 lg:w-1/1 mb-2" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("price"), placeholder: "ex= 120" },
                model: {
                  value: _vm.calendarInfo.price,
                  callback: function($$v) {
                    _vm.$set(_vm.calendarInfo, "price", $$v)
                  },
                  expression: "calendarInfo.price"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3 lg:w-1/1 mb-2" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("tax"), placeholder: "ex= 18" },
                model: {
                  value: _vm.calendarInfo.kdv,
                  callback: function($$v) {
                    _vm.$set(_vm.calendarInfo, "kdv", $$v)
                  },
                  expression: "calendarInfo.kdv"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3 lg:w-1/1 mb-2" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: {
                  label: _vm.$t("timeout_price"),
                  placeholder: "ex= 18"
                },
                model: {
                  value: _vm.calendarInfo.timeout_price,
                  callback: function($$v) {
                    _vm.$set(_vm.calendarInfo, "timeout_price", $$v)
                  },
                  expression: "calendarInfo.timeout_price"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c(
            "vs-button",
            {
              staticClass: "ml-auto mt-2",
              on: {
                click: function($event) {
                  return _vm.SaveData("calendarInfo")
                }
              }
            },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=template&id=b559514e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=template&id=b559514e& ***!
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
    "div",
    { staticClass: "vx-col w-full md:w-12/12 mb-base" },
    [
      _vm._l(_vm.Faq, function(option, index) {
        return _c(
          "vx-card",
          {
            key: index,
            staticClass: "mb-5 ml-2 mr-5 mt-5",
            attrs: { "no-shadow": "" }
          },
          [
            _c(
              "div",
              { staticClass: "vx-col  w-full md:w-12/12 mb-base" },
              [
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Question" },
                  model: {
                    value: option.question,
                    callback: function($$v) {
                      _vm.$set(option, "question", $$v)
                    },
                    expression: "option.question"
                  }
                }),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Answer" },
                  model: {
                    value: option.answer,
                    callback: function($$v) {
                      _vm.$set(option, "answer", $$v)
                    },
                    expression: "option.answer"
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "bg-danger mt-5",
                    on: {
                      click: function($event) {
                        return _vm.removeThis(index, "Faq")
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-divider")
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mr-6 mt-5",
          on: {
            click: function($event) {
              return _vm.addOptions("Faq")
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
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
              on: {
                click: function($event) {
                  return _vm.SaveData("Faq")
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("save")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa& ***!
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
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center mb-base" },
        [
          _c("vs-avatar", {
            staticClass: "mr-4 mb-4",
            attrs: { src: _vm.logo, size: "120px" }
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
                [_vm._v("Logo Yükle")]
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
        attrs: {
          name: "facebook",
          "icon-pack": "feather",
          icon: "icon-facebook",
          "label-placeholder": _vm.$t("Facebook")
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
          name: "instagram",
          "icon-pack": "feather",
          icon: "icon-instagram",
          "label-placeholder": _vm.$t("Instagram")
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
          name: "youtube",
          "icon-pack": "feather",
          icon: "icon-youtube",
          "label-placeholder": _vm.$t("Youtube")
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
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "linkedin",
          "icon-pack": "feather",
          icon: "icon-linkedin",
          "label-placeholder": _vm.$t("Linkedin")
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
          name: "twitter",
          "icon-pack": "feather",
          icon: "icon-twitter",
          "label-placeholder": _vm.$t("Twitter")
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
          name: "address",
          "icon-pack": "feather",
          icon: "icon-map-pin",
          "label-placeholder": _vm.$t("Address")
        },
        model: {
          value: _vm.address,
          callback: function($$v) {
            _vm.address = $$v
          },
          expression: "address"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "phone",
          "icon-pack": "feather",
          icon: "icon-phone",
          "label-placeholder": _vm.$t("Phone(+905554321077)")
        },
        model: {
          value: _vm.phone,
          callback: function($$v) {
            _vm.phone = $$v
          },
          expression: "phone"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "email",
          "icon-pack": "feather",
          icon: "icon-mail",
          "label-placeholder": _vm.$t("Email")
        },
        model: {
          value: _vm.email,
          callback: function($$v) {
            _vm.email = $$v
          },
          expression: "email"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "map_iframe",
          "icon-pack": "feather",
          icon: "icon-map",
          "label-placeholder": _vm.$t("map_iframe")
        },
        model: {
          value: _vm.map_iframe,
          callback: function($$v) {
            _vm.map_iframe = $$v
          },
          expression: "map_iframe"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          name: "site_name",
          "icon-pack": "feather",
          icon: "icon-airplay",
          "label-placeholder": _vm.$t("site_name")
        },
        model: {
          value: _vm.site_name,
          callback: function($$v) {
            _vm.site_name = $$v
          },
          expression: "site_name"
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
            [_vm._v("Kaydet")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb& ***!
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
    { staticClass: "mt-5 w-full" },
    [
      _c("vs-input", {
        staticClass: "mt-5 w-full",
        attrs: { label: _vm.$t("homePageTitle") },
        model: {
          value: _vm.homepage.title,
          callback: function($$v) {
            _vm.$set(_vm.homepage, "title", $$v)
          },
          expression: "homepage.title"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap items-center mb-base mt-5" }, [
        _c("img", {
          staticClass: "card-img-top",
          attrs: {
            src: !_vm.homepage.image
              ? "https://via.placeholder.com/150.png"
              : _vm.homepage.image,
            height: "150px",
            width: "150px"
          }
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
                staticClass: "mr-4 sm:mb-0 mb-2 ml-3",
                on: {
                  click: function($event) {
                    return _vm.$refs.updateImgInput.click()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("addImage")))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center mb-5 mt-5  h-full" },
        [
          _c("span", [_vm._v(_vm._s(_vm.$t("Content")))]),
          _vm._v(" "),
          _c("quill-editor", {
            attrs: { label: _vm.$t("Content"), height: "600" },
            model: {
              value: _vm.homepage.desc,
              callback: function($$v) {
                _vm.$set(_vm.homepage, "desc", $$v)
              },
              expression: "homepage.desc"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("homepage.desc"),
                  expression: "errors.has('homepage.desc')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [
              _vm._v(
                _vm._s(
                  _vm.errors.first("homepage.desc") ? _vm.$t("Content") : ""
                )
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "ml-auto mt-2",
          on: {
            click: function($event) {
              return _vm.SaveData("homepage")
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("save")))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=template&id=d6ed593e&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=template&id=d6ed593e& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5 w-full" },
    [
      _c("vs-input", {
        staticClass: "mt-5 w-full",
        attrs: { label: _vm.$t("orderDetailsTitle") },
        model: {
          value: _vm.orderDetails.title,
          callback: function($$v) {
            _vm.$set(_vm.orderDetails, "title", $$v)
          },
          expression: "orderDetails.title"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap items-center mb-base mt-5" }, [
        _c("img", {
          staticClass: "card-img-top",
          attrs: {
            src: !_vm.orderDetails.image
              ? "https://via.placeholder.com/400.png"
              : _vm.orderDetails.image,
            height: "200px",
            width: "400px"
          }
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
                staticClass: "mr-4 sm:mb-0 mb-2 ml-3",
                on: {
                  click: function($event) {
                    return _vm.$refs.updateImgInput.click()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("addImage")))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center mb-5 mt-5  h-full" },
        [
          _c("span", [_vm._v(_vm._s(_vm.$t("Content")))]),
          _vm._v(" "),
          _c("quill-editor", {
            attrs: { label: _vm.$t("Content"), height: "600" },
            model: {
              value: _vm.orderDetails.desc,
              callback: function($$v) {
                _vm.$set(_vm.orderDetails, "desc", $$v)
              },
              expression: "orderDetails.desc"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("orderDetails.desc"),
                  expression: "errors.has('orderDetails.desc')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [
              _vm._v(
                _vm._s(
                  _vm.errors.first("orderDetails.desc") ? _vm.$t("Content") : ""
                )
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "ml-auto mt-2",
          on: {
            click: function($event) {
              return _vm.SaveData("orderDetails")
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("save")))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=template&id=c5da83d6&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=template&id=c5da83d6& ***!
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
    "div",
    [
      _vm._l(_vm.References, function(option, index) {
        return _c(
          "vx-card",
          { key: index, staticClass: "mb-5 ml-2 mr-5 mt-5" },
          [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 lg:w-1/1 mb-2" },
                [
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Brand Name" },
                    model: {
                      value: option.name,
                      callback: function($$v) {
                        _vm.$set(option, "name", $$v)
                      },
                      expression: "option.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 lg:w-1/1 mb-2" },
                [
                  _c("vs-input", {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Brand Url (ex = https://google.com)" },
                    model: {
                      value: option.url,
                      callback: function($$v) {
                        _vm.$set(option, "url", $$v)
                      },
                      expression: "option.url"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "flex flex-wrap items-center mb-base ml-3 mt-2"
                },
                [
                  !option.image
                    ? _c("img", {
                        staticClass: "card-img-top",
                        attrs: {
                          src: "https://via.placeholder.com/150.png",
                          height: "150px",
                          width: "150px"
                        }
                      })
                    : _c("img", {
                        staticClass: "card-img-top",
                        attrs: {
                          src: option.image,
                          height: "150px",
                          width: "150px"
                        }
                      }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("input", {
                        ref: "brandImage" + index,
                        refInFor: true,
                        staticClass: "hidden",
                        attrs: { type: "file", accept: "image/*" },
                        on: {
                          change: function($event) {
                            return _vm.sliderUpload($event, index, "References")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "ml-3 sm:mb-0 mb-2",
                          on: {
                            click: function($event) {
                              return _vm.openFileInput("brandImage" + index)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("addBrandImage")))]
                      )
                    ],
                    1
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "bg-danger mt-3",
                on: {
                  click: function($event) {
                    return _vm.removeThis(index, "References")
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("removeThisSection")))]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mr-6",
          on: {
            click: function($event) {
              return _vm.addOptions("References")
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
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
              on: {
                click: function($event) {
                  return _vm.SaveData("References")
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("save")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963& ***!
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
      _vm._l(_vm.VideoGallery, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c(
              "div",
              { staticClass: "vx-col  w-full md:w-12/12 mb-base" },
              [
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Video URL" },
                  model: {
                    value: option.url,
                    callback: function($$v) {
                      _vm.$set(option, "url", $$v)
                    },
                    expression: "option.url"
                  }
                }),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Video Başlığı" },
                  model: {
                    value: option.title,
                    callback: function($$v) {
                      _vm.$set(option, "title", $$v)
                    },
                    expression: "option.title"
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "bg-danger",
                    on: {
                      click: function($event) {
                        return _vm.removeVideoGallery(index)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("RemoveThis")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-divider")
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "mr-6", on: { click: _vm.AddVideoGallery } },
        [_vm._v(_vm._s(_vm.$t("AddNew")))]
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
              on: { click: _vm.SaveVideoGallery }
            },
            [_vm._v(_vm._s(_vm.$t("save")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
            label: !_vm.isSmallerScreen ? _vm.$t("general") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-general md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("general")],
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
            icon: "icon-home",
            label: !_vm.isSmallerScreen ? _vm.$t("HomePage") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("home-page")],
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
            icon: "icon-calendar",
            label: !_vm.isSmallerScreen ? _vm.$t("Booking") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("booking")],
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
            icon: "icon-book-open",
            label: !_vm.isSmallerScreen ? _vm.$t("orderDetails") : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-10 mt-4 ml-0" },
            [_c("order-details")],
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

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bayiler.vue?vue&type=template&id=b2a3de26& */ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&");
/* harmony import */ var _Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bayiler.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bayiler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bayiler.vue?vue&type=template&id=b2a3de26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Bayiler.vue?vue&type=template&id=b2a3de26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bayiler_vue_vue_type_template_id_b2a3de26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Booking.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Booking.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Booking_vue_vue_type_template_id_77d62d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking.vue?vue&type=template&id=77d62d9c& */ "./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=template&id=77d62d9c&");
/* harmony import */ var _Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Booking_vue_vue_type_template_id_77d62d9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Booking_vue_vue_type_template_id_77d62d9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/Booking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=template&id=77d62d9c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=template&id=77d62d9c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_77d62d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=template&id=77d62d9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Booking.vue?vue&type=template&id=77d62d9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_77d62d9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_77d62d9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Faq.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Faq.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq_vue_vue_type_template_id_b559514e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=b559514e& */ "./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=template&id=b559514e&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_b559514e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faq_vue_vue_type_template_id_b559514e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/Faq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=template&id=b559514e&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=template&id=b559514e& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_b559514e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=template&id=b559514e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Faq.vue?vue&type=template&id=b559514e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_b559514e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_b559514e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/General.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/General.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=cfd962aa& */ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/General.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=template&id=cfd962aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/General.vue?vue&type=template&id=cfd962aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_cfd962aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=7d23dddb& */ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=7d23dddb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/HomePage.vue?vue&type=template&id=7d23dddb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_7d23dddb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderDetails_vue_vue_type_template_id_d6ed593e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetails.vue?vue&type=template&id=d6ed593e& */ "./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=template&id=d6ed593e&");
/* harmony import */ var _OrderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderDetails_vue_vue_type_template_id_d6ed593e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderDetails_vue_vue_type_template_id_d6ed593e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=template&id=d6ed593e&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=template&id=d6ed593e& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_template_id_d6ed593e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetails.vue?vue&type=template&id=d6ed593e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/OrderDetails.vue?vue&type=template&id=d6ed593e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_template_id_d6ed593e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_template_id_d6ed593e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/References.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/References.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _References_vue_vue_type_template_id_c5da83d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./References.vue?vue&type=template&id=c5da83d6& */ "./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=template&id=c5da83d6&");
/* harmony import */ var _References_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./References.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _References_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _References_vue_vue_type_template_id_c5da83d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _References_vue_vue_type_template_id_c5da83d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/References.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_References_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./References.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_References_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=template&id=c5da83d6&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=template&id=c5da83d6& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_References_vue_vue_type_template_id_c5da83d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./References.vue?vue&type=template&id=c5da83d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/References.vue?vue&type=template&id=c5da83d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_References_vue_vue_type_template_id_c5da83d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_References_vue_vue_type_template_id_c5da83d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video-Gallery.vue?vue&type=template&id=58fa1963& */ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&");
/* harmony import */ var _Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video-Gallery.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video-Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video-Gallery.vue?vue&type=template&id=58fa1963& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/Video-Gallery.vue?vue&type=template&id=58fa1963&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Gallery_vue_vue_type_template_id_58fa1963___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-settings.vue?vue&type=template&id=6a48e3e0& */ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&");
/* harmony import */ var _component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-settings.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-settings.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/site-settings/component/component-settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./component-settings.vue?vue&type=template&id=6a48e3e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/site-settings/component/component-settings.vue?vue&type=template&id=6a48e3e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_settings_vue_vue_type_template_id_6a48e3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/analyticsData.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/analyticsData.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: analyticsData.vue
  Description: Data shown by charts
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  // LINE CHART
  siteTraffic: {
    series: [{
      name: 'Traffic Rate',
      data: [150, 200, 125, 225, 200, 250]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#7367F0'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#A9A2F6'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  activeUsers: {
    series: [{
      name: 'Active Users',
      data: [750, 1000, 900, 1250, 1000, 1200, 1100]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#28C76F'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#55DD92'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 75, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  newsletter: {
    series: [{
      name: 'Newsletter',
      data: [365, 390, 365, 400, 375, 400]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#FF9F43'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ffc085'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 75, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // LINE AREA CHART
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  quarterlySales: {
    series: [{
      name: 'Sales',
      data: [10, 15, 7, 12, 3, 16]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  revenueGenerated: {
    series: [{
      name: 'Revenue',
      data: [350, 275, 400, 300, 350, 300, 450]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // BAR CHART
  salesBar: {
    // series: [{
    //     name: 'Sessions',
    //     data: [75, 125, 225, 175, 125, 75, 25]
    // }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'bar',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      colors: ['rgba(115,103,240,0.15)', 'rgba(115,103,240,0.15)', '#7367f0', 'rgba(115,103,240,0.15)', 'rgba(115,103,240,0.15)', 'rgba(115,103,240,0.15)'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded' // Deprecated
          // borderRadius: '20px', // Coming Soon

        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // RADIAL BAR
  goalOverviewRadialBar: {
    // series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 110,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: '#bfc5cc',
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 18,
              color: '#99a2ac',
              fontSize: '4rem'
            }
          }
        }
      },
      colors: ['#00db89'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#00b5b5'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      chart: {
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    }
  },
  supportTrackerRadialBar: {
    // chartData: {
    //     totalTickets: 163,
    //     openTickets: 103,
    //     lastResponse: '1d',
    // },
    // series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 158,
          offsetY: -30,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: 'rgba(0,0,0,0)',
            strokeWidth: '100%'
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: '#99a2ac',
              fontSize: '2rem'
            }
          }
        }
      },
      colors: ['#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#7367F0'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      chart: {
        sparkline: {}
      },
      labels: ['Completed Tickets']
    }
  },
  // RADAR
  statisticsRadar: {
    // series: [{
    //     name: 'Visits',
    //     data: [90, 50, 86, 40, 100, 20],
    // }, {
    //     name: 'Sales',
    //     data: [70, 75, 70, 76, 20, 85],
    // }],
    chartOptions: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      dataLabels: {
        style: {
          colors: ['#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd']
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      legend: {
        show: false
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: ['#9f8ed7', '#1edec5'],
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: ['#e8e8e8', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#8e9ad6', '#1fcadb'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      }
    }
  },
  // SessionsByDevice
  sessionsByDeviceDonut: {
    // analyticsData: [
    //     { device: 'Dekstop', icon: 'MonitorIcon', color: 'primary', sessionsPercentgae: 58.6, comparedResultPercentage: 2 },
    //     { device: 'Mobile', icon: 'SmartphoneIcon', color: 'warning', sessionsPercentgae: 34.9, comparedResultPercentage: 8 },
    //     { device: 'Tablet', icon: 'TabletIcon', color: 'danger', sessionsPercentgae: 6.5, comparedResultPercentage: -5 },
    // ],
    // comparedResult: [2, -3, 8],
    // series: [58.6, 34.9, 6.5],
    chartOptions: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      chart: {
        offsetY: 30,
        type: 'donut',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
        }
      }
    }
  },
  // Product Orders
  productOrdersRadialBar: {
    // analyticsData: [
    //     { 'orderType': 'Finished', 'counts': 23043, color: 'primary' },
    //     { 'orderType': 'Pending', 'counts': 14658, color: 'warning' },
    //     { 'orderType': 'Rejected ', 'counts': 4758, color: 'danger' },
    // ],
    // series: [70, 52, 26],
    chartOptions: {
      labels: ['Finished', 'Pending', 'Rejected'],
      plotOptions: {
        radialBar: {
          size: 165,
          offsetY: -5,
          hollow: {
            size: '20%'
          },
          track: {
            background: '#ebebeb',
            strokeWidth: '100%',
            margin: 15
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: '18px'
            },
            value: {
              fontSize: '16px',
              color: '#636a71',
              offsetY: 11
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function formatter() {
                return 42459;
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 576,
        options: {
          plotOptions: {
            radialBar: {
              size: 150,
              hollow: {
                size: '20%'
              },
              track: {
                background: '#ebebeb',
                strokeWidth: '100%',
                margin: 15
              }
            }
          }
        }
      }],
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      chart: {
        height: 355,
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    }
  },
  // Customers
  customersPie: {
    // analyticsData: [
    //     { 'customerType': 'New', 'counts': 890, color: 'primary' },
    //     { 'customerType': 'Returning', 'counts': 258, color: 'warning' },
    //     { 'customerType': 'Referrals ', 'counts': 149, color: 'danger' },
    // ],
    // series: [690, 258, 149],
    chartOptions: {
      labels: ['New', 'Returning', 'Referrals'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      chart: {
        type: 'pie',
        offsetY: 0,
        dropShadow: {
          enabled: false,
          blur: 5,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 5
      },
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
        }
      }
    }
  },
  // Sales monthly
  salesLine: {
    // series: [{
    //     name: "Sales",
    //     data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
    // }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 20,
          left: 2,
          blur: 6,
          opacity: 0.20
        }
      },
      stroke: {
        curve: 'smooth',
        width: 4
      },
      grid: {
        borderColor: '#ebebeb'
      },
      legend: {
        show: false
      },
      colors: ['#df87f2'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#7367F0'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          },
          formatter: function formatter(val) {
            return val > 999 ? "".concat((val / 1000).toFixed(1), "k") : val;
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // ClientRetention Bar Chart
  clientRetentionBar: {
    // series: [{
    //     name: 'New Clients',
    //     data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
    // }, {
    //     name: 'Retained Clients',
    //     data: [-144, -155, -141, -167, -122, -143, -158, -107, -126, -131, -140, -137]
    // }],
    chartOptions: {
      grid: {
        borderColor: '#ebebeb',
        padding: {
          left: 0,
          right: 0
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      colors: ['#7367F0', '#EA5455'],
      plotOptions: {
        bar: {
          columnWidth: '10%'
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // OTHER
  browserAnalytics: [{
    id: 1,
    name: 'Google Chrome',
    ratio: 73,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '800'
  }, {
    id: 3,
    name: 'Opera',
    ratio: 8,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '-200'
  }, {
    id: 2,
    name: 'Firefox',
    ratio: 19,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '100'
  }, {
    id: 4,
    name: 'Internet Explorer',
    ratio: 27,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '-450'
  }]
});

/***/ })

}]);