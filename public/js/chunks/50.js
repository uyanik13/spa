(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/i18n/i18n */ "./resources/js/src/i18n/i18n.js");

//
//
//
//
//
//
//
//
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
      language: '',
      selectedLanguage: [],
      languages: [{
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('English'),
        value: 'en'
      }, {
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('Deutsch'),
        value: 'de'
      }, {
        text: _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('Turkish'),
        value: 'tr'
      }]
    };
  },
  watch: {
    language: function language(value) {
      this.langFetcher(value);
    }
  },
  methods: {
    SaveData: function SaveData(lang, data) {
      var _this = this;

      var obj = {};
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/lang/front-side-write", {
        language: lang,
        file: 'lang',
        data: data
      }).then(function (response) {
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
    langFetcher: function langFetcher(language) {
      var _this2 = this;

      this.$vs.loading();
      return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/lang/front-side-read", {
          language: language,
          file: 'lang'
        }).then(function (response) {
          console.log(response.data);
          _this2.selectedLanguage = response.data;

          _this2.$vs.loading.close();
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=template&id=2bbd54b6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=template&id=2bbd54b6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-col w-full md:w-1/1 mb-base" },
    [
      _c(
        "vs-select",
        {
          staticClass: "mt-5 w-full",
          attrs: { label: _vm.$t("Languages"), name: "dataStatus" },
          model: {
            value: _vm.language,
            callback: function($$v) {
              _vm.language = $$v
            },
            expression: "language"
          }
        },
        _vm._l(_vm.languages, function(lang) {
          return _c("vs-select-item", {
            key: lang.value,
            attrs: { value: lang.value, text: lang.text }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "ml-auto mt-5 mt-5",
          on: {
            click: function($event) {
              return _vm.SaveData(_vm.language, _vm.selectedLanguage)
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("save")))]
      ),
      _vm._v(" "),
      _vm._l(_vm.selectedLanguage, function(option, index) {
        return _c(
          "vx-card",
          { key: index, attrs: { "no-shadow": "" } },
          [
            _c("vs-input", {
              staticClass: "mt-5 w-full",
              attrs: { label: index },
              model: {
                value: _vm.selectedLanguage[index],
                callback: function($$v) {
                  _vm.$set(_vm.selectedLanguage, index, $$v)
                },
                expression: "selectedLanguage[index]"
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "ml-auto mt-5 mt-5",
          on: {
            click: function($event) {
              return _vm.SaveData(_vm.language, _vm.selectedLanguage)
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("save")))]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FrontSideLanguage_vue_vue_type_template_id_2bbd54b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontSideLanguage.vue?vue&type=template&id=2bbd54b6& */ "./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=template&id=2bbd54b6&");
/* harmony import */ var _FrontSideLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontSideLanguage.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FrontSideLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FrontSideLanguage_vue_vue_type_template_id_2bbd54b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FrontSideLanguage_vue_vue_type_template_id_2bbd54b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/language/FrontSideLanguage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontSideLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontSideLanguage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontSideLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=template&id=2bbd54b6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=template&id=2bbd54b6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontSideLanguage_vue_vue_type_template_id_2bbd54b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontSideLanguage.vue?vue&type=template&id=2bbd54b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/language/FrontSideLanguage.vue?vue&type=template&id=2bbd54b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontSideLanguage_vue_vue_type_template_id_2bbd54b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontSideLanguage_vue_vue_type_template_id_2bbd54b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);