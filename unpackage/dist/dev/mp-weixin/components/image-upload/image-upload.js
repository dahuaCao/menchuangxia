(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/image-upload/image-upload"],{

/***/ 262:
/*!********************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_upload_vue_vue_type_template_id_6d7257bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-upload.vue?vue&type=template&id=6d7257bd&scoped=true& */ 263);
/* harmony import */ var _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-upload.vue?vue&type=script&lang=js& */ 265);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-upload.vue?vue&type=style&index=0&id=6d7257bd&lang=scss&scoped=true& */ 267);
/* harmony import */ var _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 12);






/* normalize component */

var component = Object(_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_upload_vue_vue_type_template_id_6d7257bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_upload_vue_vue_type_template_id_6d7257bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d7257bd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 263:
/*!***************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue?vue&type=template&id=6d7257bd&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_template_id_6d7257bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./image-upload.vue?vue&type=template&id=6d7257bd&scoped=true& */ 264);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_template_id_6d7257bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_template_id_6d7257bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 264:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue?vue&type=template&id=6d7257bd&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 265:
/*!*********************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./image-upload.vue?vue&type=script&lang=js& */ 266);
/* harmony import */ var _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 266:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var uniIcon = function uniIcon() {return __webpack_require__.e(/*! import() | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then(__webpack_require__.bind(null, /*! @/components/uni-icon/uni-icon.vue */ 243));};var _default =


























{
  name: "image-upload",
  props: {
    upImgConfig: {
      type: Object },

    maxNumber: {
      type: [String, Number],
      default: 4 },

    title: {
      type: String,
      default: '点击可预览选好的图片' } },


  components: {
    uniIcon: uniIcon },

  data: function data() {
    return {
      upload_after_list: [],
      upload_picture_list: [] };

  },
  mounted: function mounted() {

  },
  methods: {
    chooseImage: function chooseImage() {
      _chooseImage(this, this.upImgConfig);
    },
    previewImage: function previewImage(e) {
      var current = e.target.dataset.src;
      uni.previewImage({
        current: current,
        urls: this.imageList });

    },
    delImg: function delImg(e) {var _this2 = this;
      uni.showModal({
        title: "提示",
        content: "确定删除此张图片?",
        success: function success(res) {
          if (res.confirm) {
            DeleImage(e, _this2);
          }
        } });

    },
    upLoadImages: function upLoadImages(e) {
      uImage(this, e);
    } } };exports.default = _default;



var _chooseImage = function _chooseImage(_this, configs) {
  var config = {
    url: configs.basicConfig.url,
    count: parseInt(configs.maxCount) };

  uni.chooseImage({
    sourceType: ['camera', 'album'],
    sizeType: ['compressed', 'original'],
    count: config.count - _this.upload_picture_list.length > 0 ? config.count - _this.upload_picture_list.length : 0,
    success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {var i, len;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                for (i = 0, len = res.tempFiles.length; i < len; i++) {
                  res.tempFiles[i]['upload_percent'] = 0;
                  res.tempFiles[i]['path_server'] = '';
                  res.tempFiles[i]['server_path'] = '';
                  _this.upload_picture_list.push(res.tempFiles[i]);

                }
                // 过滤多出的预览图片
                if (!configs.autoUpload) {_context.next = 4;break;}_context.next = 4;return (
                  uImage(_this, configs));case 4:case "end":return _context.stop();}}}, _callee, this);}));function success(_x) {return _success.apply(this, arguments);}return success;}(),



    fail: function fail(err) {
      console.log('选择图片失败！');

















      console.log(JSON.stringify(err));
    } });

};
// 上传图片(通用)
var uImage = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(_this, configs) {var i, len;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            console.log(configs.multiply);if (!
            configs.multiply) {_context2.next = 5;break;}
            console.log('多图上传');_context2.next = 13;break;case 5:

            i = 0, len = _this.upload_picture_list.length;case 6:if (!(i < len)) {_context2.next = 13;break;}if (!(
            _this.upload_picture_list[i]['upload_percent'] == 0)) {_context2.next = 10;break;}_context2.next = 10;return (
              upload_file_server(_this, configs, _this.upload_picture_list, i));case 10:i++;_context2.next = 6;break;case 13:case "end":return _context2.stop();}}}, _callee2, this);}));return function uImage(_x2, _x3) {return _ref.apply(this, arguments);};}();






// 上传文件
var upload_file_server = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(_this, configs, upload_picture_list, j) {var basicConfig, upload_task;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:

            basicConfig = {
              url: configs.basicConfig.url || "" };

            uni.showLoading({
              title: '上传中...' });_context6.next = 4;return (

              uni.uploadFile({
                url: basicConfig.url,
                filePath: upload_picture_list[j]['path'],
                name: 'file',
                formData: {},
                success: function () {var _success2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {var data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!(
                            res.statusCode == 200)) {_context3.next = 10;break;}
                            data = JSON.parse(res.data);
                            // 修改获取的图片返回值路径
                            upload_picture_list[j]['server_path'] = data.url;
                            upload_picture_list[j]['path_server'] = 'http://www.xyzcwl.com/' + data.url;
                            _this.upload_after_list[j] = data.url;
                            _this.upload_picture_list = upload_picture_list;if (!(

                            _this.upload_after_list.length == _this.upload_picture_list.length)) {_context3.next = 10;break;}
                            uni.hideLoading();_context3.next = 10;return (
                              tImage(_this));case 10:case "end":return _context3.stop();}}}, _callee3, this);}));function success(_x8) {return _success2.apply(this, arguments);}return success;}(),



                fail: function () {var _fail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(err) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                            uni.showLoading({
                              title: "\u4E0A\u4F20\u5931\u8D25!" });

                            _this.upload_picture_list = [];
                            _this.upload_after_list = [];
                            setTimeout(function () {
                              uni.hideLoading();
                            }, 2000);
                            console.warn(err, '请检查是否CORB/CORS错误!');case 5:case "end":return _context4.stop();}}}, _callee4, this);}));function fail(_x9) {return _fail.apply(this, arguments);}return fail;}() }));case 4:upload_task = _context6.sent;


            upload_task.onProgressUpdate( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(res) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (



                          res.progress);case 2:upload_picture_list[j]['upload_percent'] = _context5.sent;
                        _this.upload_picture_list = upload_picture_list;case 4:case "end":return _context5.stop();}}}, _callee5, this);}));return function (_x10) {return _ref3.apply(this, arguments);};}());case 6:case "end":return _context6.stop();}}}, _callee6, this);}));return function upload_file_server(_x4, _x5, _x6, _x7) {return _ref2.apply(this, arguments);};}();



// 上传图片子组件->父组件(通用)
var tImage = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(_this) {return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
              _this.$emit('onUpImg', _this.upload_after_list));case 2:case "end":return _context7.stop();}}}, _callee7, this);}));return function tImage(_x11) {return _ref4.apply(this, arguments);};}();

// 删除图片
var DeleImage = /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e, _this) {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
              _this.$emit('onImgDel', {
                url: e.currentTarget.dataset.url,
                index: e.currentTarget.dataset.index }));case 2:

            _this.upload_picture_list.splice(e.currentTarget.dataset.index, 1);
            _this.upload_picture_list = _this.upload_picture_list;case 4:case "end":return _context8.stop();}}}, _callee8, this);}));return function DeleImage(_x12, _x13) {return _ref5.apply(this, arguments);};}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 267:
/*!******************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue?vue&type=style&index=0&id=6d7257bd&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HbuilderX/HBuilderX.1.8.2.20190401.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./image-upload.vue?vue&type=style&index=0&id=6d7257bd&lang=scss&scoped=true& */ 268);
/* harmony import */ var _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_image_upload_vue_vue_type_style_index_0_id_6d7257bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Documents/HBuilderProjects/mengChuangbao/components/image-upload/image-upload.vue?vue&type=style&index=0&id=6d7257bd&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/image-upload/image-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/image-upload/image-upload-create-component',
    {
        'components/image-upload/image-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(262))
        })
    },
    [['components/image-upload/image-upload-create-component']]
]);                
