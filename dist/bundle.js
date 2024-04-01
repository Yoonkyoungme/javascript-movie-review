/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search_button.png */ \"./src/images/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  max-width: 100%;\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  width: auto;\\n  margin-left: 5%;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  place-items: center;\\n  grid-template-columns: repeat(4, 1fr);\\n  /* grid-column-gap: 160px; */\\n  grid-row-gap: 48px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  width: 180px;\\n  height: 270px;\\n  border-radius: 8px;\\n  background-size: contain;\\n  object-fit: cover;\\n}\\n\\n.item-title {\\n  width: 180px;\\n  height: 2.2rem;\\n  margin-top: 1rem;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  overflow: hidden;\\n}\\n\\n.item-score {\\n  display: flex;\\n  align-items: end;\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\nheader {\\n  width: 100%;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\n.search-input {\\n  border: 0;\\n}\\n\\n.search-input-hidden {\\n  display: none;\\n}\\n\\nheader .search-box .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.movie-list-title {\\n  overflow: hidden;\\n  width: 100%;\\n  text-overflow: ellipsis;\\n}\\n\\n.unexpected-case-container {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.unexpected-case-image {\\n  width: 300px;\\n  object-fit: cover;\\n}\\n\\n.unexpected-case-message {\\n  margin-top: 0.5rem;\\n  font-size: 1.5rem;\\n  text-align: center;\\n}\\n\\n/* 모달 */\\n\\n.modal {\\n  display: none;\\n}\\n\\n.modal-open {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: fixed;\\n  inset: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.modal-backdrop {\\n  position: absolute;\\n  inset: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n}\\n\\n.modal-container {\\n  overflow: auto;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  position: fixed;\\n  width: 80%;\\n  height: 30rem;\\n  border-radius: 8px;\\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\\n  background-color: #212122;\\n  line-height: 1.5rem;\\n  color: #f1f1f1;\\n}\\n\\n.modal-content {\\n  height: 100%;\\n}\\n\\n.modal-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 10%;\\n  padding: 0.7rem 1rem;\\n  border-bottom: 1px solid #333;\\n}\\n\\n.modal-title {\\n  flex-grow: 1;\\n  font-size: 20px;\\n  text-align: center;\\n}\\n\\n.close-button {\\n  padding: 0.3125rem 0.5rem;\\n  border: none;\\n  border-radius: 50%;\\n  background-color: #383839;\\n  color: #f1f1f1;\\n}\\n\\n.modal-body {\\n  display: flex;\\n  height: 90%;\\n  padding: 2rem;\\n}\\n\\n.modal-image {\\n  display: flex;\\n  align-items: center;\\n  margin-right: 1.5rem;\\n}\\n\\n.modal-image img {\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.modal-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  width: 100%;\\n}\\n\\n.modal-image {\\n  display: flex;\\n  align-items: flex-start;\\n  margin-right: 1.5rem;\\n}\\n\\n.modal-info > div {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: stretch;\\n  align-items: center;\\n  padding-bottom: 1rem;\\n}\\n\\n.movie-rating {\\n  display: flex;\\n  align-items: center;\\n  margin-left: 1rem;\\n}\\n\\n/* 별점 */\\n#star-rating-container {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  height: 4rem;\\n  margin-top: auto;\\n  padding: 0.625rem;\\n  border-radius: 1rem;\\n  background-color: #383839;\\n}\\n\\n#star-rating-container > div {\\n  margin-right: 0.625rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media all and (min-width: 768px) and (max-width: 1023px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-row-gap: 32px;\\n  }\\n}\\n\\n@media all and (max-width: 767px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 1fr);\\n  }\\n\\n  .item-thumbnail {\\n    width: 130px;\\n    height: 180px;\\n    border-radius: 8px;\\n    background-size: contain;\\n    object-fit: cover;\\n  }\\n\\n  .item-title {\\n    width: 130px;\\n    height: 2em;\\n    font-size: 1rem;\\n  }\\n\\n  .item-score {\\n    margin-top: 8px;\\n    font-size: 1rem;\\n  }\\n\\n  .modal-container {\\n    width: 100%;\\n  }\\n}\\n\\n@media all and (max-width: 479px) {\\n  .item-list {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  .item-title {\\n    width: 130px;\\n    height: 1.8em;\\n  }\\n\\n  .item-score {\\n    margin-top: 5px;\\n    font-size: 0.8rem;\\n  }\\n\\n  .modal-container {\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    height: 50%;\\n    margin-bottom: auto;\\n  }\\n\\n  .modal-image {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/responsive.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apis/movieList.ts":
/*!*******************************!*\
  !*** ./src/apis/movieList.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovieDetail\": () => (/* binding */ getMovieDetail),\n/* harmony export */   \"getPopularMovieList\": () => (/* binding */ getPopularMovieList),\n/* harmony export */   \"getSearchMovieList\": () => (/* binding */ getSearchMovieList)\n/* harmony export */ });\n/* harmony import */ var _utils_fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetchAPI */ \"./src/apis/utils/fetchAPI.ts\");\n/* harmony import */ var _utils_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/paths */ \"./src/apis/utils/paths.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst getPopularMovieList = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {\n    const fetchedMovieData = yield (0,_utils_fetchAPI__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(_utils_paths__WEBPACK_IMPORTED_MODULE_1__.POPULAR_MOVIE_LIST_PATH, `page=${page}`);\n    return fetchedMovieData;\n});\nconst getSearchMovieList = (query, page = 1) => __awaiter(void 0, void 0, void 0, function* () {\n    const fetchedMovieData = yield (0,_utils_fetchAPI__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(_utils_paths__WEBPACK_IMPORTED_MODULE_1__.SEARCH_MOVIE_LIST_PATH, `query=${query}&page=${page}`);\n    return fetchedMovieData;\n});\nconst getMovieDetail = (movieId) => __awaiter(void 0, void 0, void 0, function* () {\n    const fetchedMovieDetailData = yield (0,_utils_fetchAPI__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`${_utils_paths__WEBPACK_IMPORTED_MODULE_1__.MOVIE_PATH}/${movieId}`);\n    return fetchedMovieDetailData;\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/movieList.ts?");

/***/ }),

/***/ "./src/apis/utils/fetchAPI.ts":
/*!************************************!*\
  !*** ./src/apis/utils/fetchAPI.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAPI\": () => (/* binding */ fetchAPI)\n/* harmony export */ });\n/* harmony import */ var _error_APIError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/APIError */ \"./src/error/APIError.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nconst API_KEY = \"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjQ0ZTc1NmNiYWVkMmQ3YmIwYjgxODZmMzFmZDEzMiIsInN1YiI6IjY0M2EzYWFkYjZjMjY0MDQ5NjM5YWI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j-gkoAEdMUhwxncITFzCWrnf_Uv4hXYqpaFByx1QDXc\";\nconst getHeaders = () => ({\n    accept: \"application/json\",\n    Authorization: `Bearer ${API_KEY}`,\n});\nconst fetchAPI = (path, params = \"\") => __awaiter(void 0, void 0, void 0, function* () {\n    const url = `${BASE_URL}${path}?${params}&language=ko-KR`;\n    const response = yield fetch(url, {\n        headers: getHeaders(),\n    });\n    if (!response.ok) {\n        throw new _error_APIError__WEBPACK_IMPORTED_MODULE_0__[\"default\"](response.status);\n    }\n    return response.json();\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/utils/fetchAPI.ts?");

/***/ }),

/***/ "./src/apis/utils/paths.ts":
/*!*********************************!*\
  !*** ./src/apis/utils/paths.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MOVIE_PATH\": () => (/* binding */ MOVIE_PATH),\n/* harmony export */   \"POPULAR_MOVIE_LIST_PATH\": () => (/* binding */ POPULAR_MOVIE_LIST_PATH),\n/* harmony export */   \"SEARCH_MOVIE_LIST_PATH\": () => (/* binding */ SEARCH_MOVIE_LIST_PATH)\n/* harmony export */ });\nconst POPULAR_MOVIE_LIST_PATH = \"/movie/popular\";\nconst MOVIE_PATH = \"/movie\";\nconst SEARCH_MOVIE_LIST_PATH = \"/search/movie\";\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/utils/paths.ts?");

/***/ }),

/***/ "./src/components/MovieHeader.ts":
/*!***************************************!*\
  !*** ./src/components/MovieHeader.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieHeader)\n/* harmony export */ });\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/throttle */ \"./src/utils/throttle.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./src/images/index.ts\");\n\n\n\n\nconst MOVIE_QUERY_MAX_LENGTH = 500;\nconst MOBILE_SIZE = 479;\nclass MovieHeader extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId, queryState }) {\n        super({ targetId });\n        this.queryState = queryState;\n    }\n    getTemplate() {\n        return `\n      <h1 id=\"movie-list-logo\"><img src=\"${_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logo}\" alt=\"MovieList 로고\" /></h1>\n      <div class=\"search-box\">\n          <form id=\"search-form\">\n            <input id=\"search-input\" class=\"search-input\" name=\"search-query\" type=\"text\" placeholder=\"검색\" maxLength=\"${MOVIE_QUERY_MAX_LENGTH}\"/>\n            <button id=\"search-button\" class=\"search-button\">검색</button>\n          </form>\n      </div>\n  `;\n    }\n    setEvent() {\n        const $movieListLogo = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"movie-list-logo\");\n        const $form = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-form\");\n        const $searchInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-input\");\n        $movieListLogo === null || $movieListLogo === void 0 ? void 0 : $movieListLogo.addEventListener(\"click\", this.handleLogoClick.bind(this));\n        $form === null || $form === void 0 ? void 0 : $form.addEventListener(\"submit\", this.onSearchMovieSubmit.bind(this));\n        window.addEventListener(\"resize\", (0,_utils_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(this.onResize.bind(this), 300));\n        if (window.innerWidth <= MOBILE_SIZE) {\n            $searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.classList.add(\"hidden\");\n        }\n    }\n    handleLogoClick() {\n        var _a;\n        this.queryState.set(\"\");\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-form\")) === null || _a === void 0 ? void 0 : _a.reset();\n    }\n    onSearchMovieSubmit(event) {\n        event.preventDefault();\n        const $form = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-form\");\n        const $searchInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-input\");\n        if ($searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.classList.contains(\"hidden\")) {\n            $searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.classList.remove(\"hidden\");\n            return;\n        }\n        const searchQuery = $form === null || $form === void 0 ? void 0 : $form[\"search-query\"].value;\n        if (!searchQuery) {\n            alert(\"검색어를 입력해 주세요.\");\n            return;\n        }\n        this.queryState.set(searchQuery);\n    }\n    onResize() {\n        const $searchInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-input\");\n        if (window.innerWidth <= MOBILE_SIZE) {\n            $searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.classList.add(\"hidden\");\n        }\n        else {\n            $searchInput === null || $searchInput === void 0 ? void 0 : $searchInput.classList.remove(\"hidden\");\n        }\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieHeader.ts?");

/***/ }),

/***/ "./src/components/SkeletonUI.ts":
/*!**************************************!*\
  !*** ./src/components/SkeletonUI.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SkeletonUI)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n\nclass SkeletonUI {\n    constructor(template) {\n        this.remove = (targetId) => {\n            const element = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(targetId);\n            if (!element) {\n                return;\n            }\n            element.remove();\n        };\n        this.template = template;\n    }\n    render(targetId) {\n        const element = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(targetId);\n        if (!element) {\n            return;\n        }\n        element.innerHTML = this.template;\n    }\n    insert(targetId, position = \"beforeend\") {\n        const element = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(targetId);\n        if (!element) {\n            return;\n        }\n        element.insertAdjacentHTML(position, this.template);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonUI.ts?");

/***/ }),

/***/ "./src/components/abstract/BaseComponent.ts":
/*!**************************************************!*\
  !*** ./src/components/abstract/BaseComponent.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseComponent)\n/* harmony export */ });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/components/abstract/Observer.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\n\nclass BaseComponent extends _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId }) {\n        super();\n        this.targetId = targetId;\n    }\n    update() {\n        this.init();\n    }\n    init() {\n        this.render();\n    }\n    render() {\n        const element = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(this.targetId);\n        if (!element) {\n            return;\n        }\n        element.innerHTML = this.getTemplate();\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/abstract/BaseComponent.ts?");

/***/ }),

/***/ "./src/components/abstract/EventComponent.ts":
/*!***************************************************!*\
  !*** ./src/components/abstract/EventComponent.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventComponent)\n/* harmony export */ });\n/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ \"./src/components/abstract/BaseComponent.ts\");\n\nclass EventComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    init() {\n        this.render();\n        this.setEvent();\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/abstract/EventComponent.ts?");

/***/ }),

/***/ "./src/components/abstract/Observer.ts":
/*!*********************************************!*\
  !*** ./src/components/abstract/Observer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observer)\n/* harmony export */ });\nclass Observer {\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/abstract/Observer.ts?");

/***/ }),

/***/ "./src/components/modal/BaseModal.ts":
/*!*******************************************!*\
  !*** ./src/components/modal/BaseModal.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseModal)\n/* harmony export */ });\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\n\nclass BaseModal extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId }) {\n        super({ targetId });\n    }\n    getTemplate() {\n        return `\n        <div id=\"modal-backdrop\" class=\"modal-backdrop\"></div>\n        <div class=\"modal-container\">\n            ${this.getModalContent()}\n        </div>\n    `;\n    }\n    setEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"modal-backdrop\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.closeModal.bind(this));\n        window.addEventListener(\"keydown\", (event) => {\n            if (event.key === \"Escape\") {\n                this.closeModal();\n            }\n        });\n    }\n    closeModal() {\n        const $modal = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(this.targetId);\n        if (!$modal) {\n            return;\n        }\n        $modal.classList.remove(\"modal-open\");\n        $modal.classList.add(\"modal\");\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/modal/BaseModal.ts?");

/***/ }),

/***/ "./src/components/modal/MovieDetailModal.ts":
/*!**************************************************!*\
  !*** ./src/components/modal/MovieDetailModal.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieDetailModal)\n/* harmony export */ });\n/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModal */ \"./src/components/modal/BaseModal.ts\");\n/* harmony import */ var _templates_generateStarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/generateStarRating */ \"./src/components/templates/generateStarRating.ts\");\n/* harmony import */ var _templates_generateMovieDetailModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/generateMovieDetailModal */ \"./src/components/templates/generateMovieDetailModal.ts\");\n/* harmony import */ var _apis_movieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/movieList */ \"./src/apis/movieList.ts\");\n/* harmony import */ var _error_handleAPIError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../error/handleAPIError */ \"./src/error/handleAPIError.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/storage */ \"./src/utils/storage.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nclass MovieDetailModal extends _BaseModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId, movieState }) {\n        super({ targetId });\n        this.movieState = movieState;\n        this.movieDetail = {};\n    }\n    init() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                this.movieDetail = yield this.fetchMovieDetail(this.movieState.get());\n                this.render();\n                this.setEvent();\n            }\n            catch (error) {\n                (0,_error_handleAPIError__WEBPACK_IMPORTED_MODULE_4__.handleAPIError)(error, this.targetId);\n            }\n        });\n    }\n    getModalContent() {\n        var _a, _b;\n        const starRating = (_a = _utils_storage__WEBPACK_IMPORTED_MODULE_6__.storage.get(\"starRating\")) !== null && _a !== void 0 ? _a : {};\n        const rating = (_b = starRating[this.movieState.get()]) !== null && _b !== void 0 ? _b : 0;\n        return (0,_templates_generateMovieDetailModal__WEBPACK_IMPORTED_MODULE_2__.generateMovieDetailModal)(this.movieDetail, rating);\n    }\n    setEvent() {\n        super.setEvent();\n        const $closeButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(\"close-button\");\n        const $starRatingContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(\"star-rating-container\");\n        $closeButton === null || $closeButton === void 0 ? void 0 : $closeButton.addEventListener(\"click\", this.closeModal.bind(this));\n        $starRatingContainer === null || $starRatingContainer === void 0 ? void 0 : $starRatingContainer.addEventListener(\"click\", this.onStarRatingClick.bind(this));\n    }\n    onStarRatingClick(event) {\n        const target = event.target;\n        const starRatingIndex = target.dataset.index;\n        if (starRatingIndex) {\n            const rating = Number(starRatingIndex);\n            this.updateStarRating(this.movieState.get(), rating);\n        }\n    }\n    updateStarRating(movieId, rating) {\n        var _a;\n        const starRating = (_a = _utils_storage__WEBPACK_IMPORTED_MODULE_6__.storage.get(\"starRating\")) !== null && _a !== void 0 ? _a : {};\n        starRating[movieId] = rating;\n        _utils_storage__WEBPACK_IMPORTED_MODULE_6__.storage.set(\"starRating\", starRating);\n        this.updateStarRatingUI(rating);\n    }\n    updateStarRatingUI(rating) {\n        const $starRatingContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(\"star-rating-container\");\n        if (!$starRatingContainer)\n            return;\n        const newStarRatingHTML = (0,_templates_generateStarRating__WEBPACK_IMPORTED_MODULE_1__.generateStarRating)(rating);\n        $starRatingContainer.innerHTML = newStarRatingHTML;\n    }\n    fetchMovieDetail(params) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const fetchedData = yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_3__.getMovieDetail)(params);\n            return fetchedData;\n        });\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/modal/MovieDetailModal.ts?");

/***/ }),

/***/ "./src/components/movieList/MovieList.ts":
/*!***********************************************!*\
  !*** ./src/components/movieList/MovieList.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n/* harmony import */ var _error_APIError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/APIError */ \"./src/error/APIError.ts\");\n/* harmony import */ var _templates_generateMovieItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/generateMovieItems */ \"./src/components/templates/generateMovieItems.ts\");\n/* harmony import */ var _templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/generateUnexpectedScreen */ \"./src/components/templates/generateUnexpectedScreen.ts\");\n/* harmony import */ var _apis_movieList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apis/movieList */ \"./src/apis/movieList.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/throttle */ \"./src/utils/throttle.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nclass MovieList extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId, queryState, movieState, skeletonUI, }) {\n        super({ targetId });\n        this.page = 1;\n        this.skeletonUI = skeletonUI;\n        this.queryState = queryState;\n        this.movieState = movieState;\n        this.movieList = {};\n    }\n    init() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.skeletonUI.render(this.targetId);\n            this.resetPage();\n            try {\n                const movieList = yield this.fetchMovies(this.page, this.queryState.get());\n                this.movieList = movieList;\n                this.render();\n                this.setEvent();\n            }\n            catch (error) {\n                this.handleError(error);\n            }\n        });\n    }\n    getTemplate() {\n        const movieItemsTemplate = (0,_templates_generateMovieItems__WEBPACK_IMPORTED_MODULE_2__.generateMovieItems)(this.movieList);\n        return `\n        <ul id=\"item-list\" class=\"item-list\">\n        ${this.movieList.results.length === 0\n            ? (0,_templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_3__.generateEmptyMovieListScreen)()\n            : movieItemsTemplate}\n        </ul>\n    `;\n    }\n    setEvent() {\n        var _a;\n        window.addEventListener(\"scroll\", (0,_utils_throttle__WEBPACK_IMPORTED_MODULE_6__.throttle)(this.onScroll.bind(this), 500));\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(this.targetId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.openMovieDetailModal.bind(this));\n    }\n    onScroll() {\n        if (window.innerHeight + window.scrollY >=\n            document.documentElement.scrollHeight) {\n            this.loadMoreMovies();\n        }\n    }\n    openMovieDetailModal(event) {\n        var _a, _b, _c;\n        event.preventDefault();\n        const target = event.target;\n        if (target instanceof HTMLElement) {\n            const clickedMovieId = (_a = target.closest(\"li\")) === null || _a === void 0 ? void 0 : _a.dataset.movieId;\n            if (clickedMovieId) {\n                this.movieState.set(Number(clickedMovieId));\n                console.log(\"movieState\", this.movieState.get());\n                (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(\"movie-detail-modal\")) === null || _b === void 0 ? void 0 : _b.classList.remove(\"modal\");\n                (_c = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(\"movie-detail-modal\")) === null || _c === void 0 ? void 0 : _c.classList.add(\"modal-open\");\n            }\n        }\n    }\n    handleError(error) {\n        if (error instanceof _error_APIError__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.displayErrorMessage(error.message, _templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_3__.generateEmptyMovieListScreen);\n        }\n        else if (error instanceof Error) {\n            this.displayErrorMessage(\"네트워크가 원활하지 않습니다. 인터넷 연결 확인 후 다시 시도해주세요.\", _templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_3__.generateNetworkNotWorkingScreen);\n        }\n    }\n    displayErrorMessage(message, screenGenerator) {\n        alert(message);\n        const errorTargetElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(this.targetId);\n        if (errorTargetElement) {\n            errorTargetElement.innerHTML = screenGenerator();\n        }\n    }\n    fetchMovies(page, query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const fetchedMovieData = query\n                ? yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_4__.getSearchMovieList)(query, page)\n                : yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_4__.getPopularMovieList)(page);\n            return fetchedMovieData;\n        });\n    }\n    resetPage() {\n        this.page = 1;\n    }\n    loadMoreMovies() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.page += 1;\n            this.skeletonUI.insert(\"item-list\", \"afterend\");\n            const additionalFetchedMovieData = yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_4__.getPopularMovieList)(this.page);\n            this.skeletonUI.remove(\"skeleton-movie-item-list\");\n            this.insertMovieItems(additionalFetchedMovieData);\n        });\n    }\n    insertMovieItems(data) {\n        var _a;\n        return __awaiter(this, void 0, void 0, function* () {\n            const movieItemsTemplate = (0,_templates_generateMovieItems__WEBPACK_IMPORTED_MODULE_2__.generateMovieItems)(data);\n            (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.$)(\"item-list\")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML(\"beforeend\", movieItemsTemplate);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movieList/MovieList.ts?");

/***/ }),

/***/ "./src/components/movieList/MovieListTitle.ts":
/*!****************************************************!*\
  !*** ./src/components/movieList/MovieListTitle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieListTitle)\n/* harmony export */ });\n/* harmony import */ var _abstract_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseComponent */ \"./src/components/abstract/BaseComponent.ts\");\n\nclass MovieListTitle extends _abstract_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId, queryState }) {\n        super({ targetId });\n        this.queryState = queryState;\n    }\n    getTemplate() {\n        const query = this.queryState.get();\n        return `\n      <h2 id=\"movie-list-title\" class=\"movie-list-title\">\n        ${query ? `\"${query}\" 검색 결과` : \"지금 인기 있는 영화\"}\n      </h2>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movieList/MovieListTitle.ts?");

/***/ }),

/***/ "./src/components/templates/generateMovieDetailModal.ts":
/*!**************************************************************!*\
  !*** ./src/components/templates/generateMovieDetailModal.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMovieDetailModal\": () => (/* binding */ generateMovieDetailModal)\n/* harmony export */ });\n/* harmony import */ var _generateStarRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateStarRating */ \"./src/components/templates/generateStarRating.ts\");\n/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/urls */ \"./src/constants/urls.ts\");\n/* harmony import */ var _utils_roundNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/roundNumber */ \"./src/utils/roundNumber.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images */ \"./src/images/index.ts\");\n\n\n\n\nconst generateMovieDetailModal = (movieDetail, rating) => {\n    const { genres, overview, poster_path, title, vote_average } = movieDetail;\n    const genreNames = genres.map((genre) => genre.name).join(\", \");\n    return `\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h2 class=\"modal-title\">${title}</h2>\n                <button id=\"close-button\" class=\"close-button\">X</button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modal-image\">\n                    <img src=\"${_constants_urls__WEBPACK_IMPORTED_MODULE_1__.BASE_POSTER_URL}/${poster_path}\" alt=\"${title} thumbnail\" />\n                </div>\n                <div class=\"modal-info\">\n                <div>\n                    <div class=\"movie-genre\">${genreNames}</div>\n                    <div class=\"movie-rating\">\n                    <img src=\"${_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].starFilled}\" alt=\"별점\" />\n                        ${(0,_utils_roundNumber__WEBPACK_IMPORTED_MODULE_2__.roundNumber)(vote_average, 1)}\n                    </div>\n                    </div>\n                    <div class=\"movie-overview\">${overview || \"overview 정보가 없습니다.\"}\n                    </div>\n                    <div id=\"star-rating-container\" class=\"star-rating-container\">\n                        ${(0,_generateStarRating__WEBPACK_IMPORTED_MODULE_0__.generateStarRating)(rating)}\n                    </div>\n                </div>\n            </div>\n        </div>\n    `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/generateMovieDetailModal.ts?");

/***/ }),

/***/ "./src/components/templates/generateMovieItems.ts":
/*!********************************************************!*\
  !*** ./src/components/templates/generateMovieItems.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMovieItems\": () => (/* binding */ generateMovieItems)\n/* harmony export */ });\n/* harmony import */ var _utils_roundNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/roundNumber */ \"./src/utils/roundNumber.ts\");\n/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/urls */ \"./src/constants/urls.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images */ \"./src/images/index.ts\");\n\n\n\nconst generateMovieItem = (movie) => {\n    const { id, title, poster_path, vote_average } = movie;\n    return `\n    <li data-movie-id=\"${id}\">\n      <a href=\"#\">\n        <div class=\"item-card\">\n          <img class=\"item-thumbnail\" src=\"${_constants_urls__WEBPACK_IMPORTED_MODULE_1__.BASE_POSTER_URL}${poster_path}\" loading=\"lazy\" alt=\"${title}\" />\n          <p class=\"item-title\">${title}</p>\n          <p class=\"item-score\">\n            <img src=\"${_images__WEBPACK_IMPORTED_MODULE_2__[\"default\"].starFilled}\" alt=\"별점\" />\n            ${(0,_utils_roundNumber__WEBPACK_IMPORTED_MODULE_0__.roundNumber)(vote_average, 1)}\n          </p>\n        </div>\n      </a>\n    </li>\n  `;\n};\nconst generateMovieItems = (data) => {\n    const movieItems = data.results.map((movieInfo) => generateMovieItem(movieInfo));\n    return movieItems.join(\"\");\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/generateMovieItems.ts?");

/***/ }),

/***/ "./src/components/templates/generateMovieListSkeleton.ts":
/*!***************************************************************!*\
  !*** ./src/components/templates/generateMovieListSkeleton.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMovieListSkeleton\": () => (/* binding */ generateMovieListSkeleton)\n/* harmony export */ });\nconst MOVIE_ITEM_SKELETON = `\n  <li>\n    <a href=\"#\">\n      <div class=\"item-card\">\n        <div class=\"item-thumbnail skeleton\"></div>\n        <div class=\"item-title skeleton\"></div>\n        <div class=\"item-score skeleton\"></div>\n      </div>\n    </a>\n  </li>\n`;\nconst generateMovieListSkeleton = (count = 20) => {\n    return `\n      <ul id=\"skeleton-movie-item-list\" class=\"item-list\">\n      ${MOVIE_ITEM_SKELETON.repeat(count)}\n      </ul>\n  `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/generateMovieListSkeleton.ts?");

/***/ }),

/***/ "./src/components/templates/generateStarRating.ts":
/*!********************************************************!*\
  !*** ./src/components/templates/generateStarRating.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateStarRating\": () => (/* binding */ generateStarRating)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ \"./src/images/index.ts\");\n\nconst { starFilled, starEmpty } = _images__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst SCORE = {\n    2: \"최악이예요\",\n    4: \"별로예요\",\n    6: \"보통이에요\",\n    8: \"재미있어요\",\n    10: \"명작이에요\",\n};\nconst createScoreDescription = (count) => {\n    if (count === 0)\n        return \"\";\n    const scoreKey = (count * 2);\n    const scoreText = SCORE[scoreKey];\n    return `<div>${scoreKey} ${scoreText}</div>`;\n};\nconst generateStarRating = (count = 0) => {\n    const starsHtml = Array.from({ length: 5 }, (_, i) => i < count\n        ? `<img src=\"${starFilled}\" alt=\"filled star\" data-index=\"${i + 1}\"/>`\n        : `<img src=\"${starEmpty}\" alt=\"empty star\" data-index=\"${i + 1}\"/>`).join(\"\");\n    const scoreDescription = createScoreDescription(count);\n    return `\n    <div>내 별점</div>\n    <div>${starsHtml}</div>\n    ${scoreDescription}\n  `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/generateStarRating.ts?");

/***/ }),

/***/ "./src/components/templates/generateUnexpectedScreen.ts":
/*!**************************************************************!*\
  !*** ./src/components/templates/generateUnexpectedScreen.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateEmptyMovieListScreen\": () => (/* binding */ generateEmptyMovieListScreen),\n/* harmony export */   \"generateNetworkNotWorkingScreen\": () => (/* binding */ generateNetworkNotWorkingScreen)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ \"./src/images/index.ts\");\n\nconst generateNetworkNotWorkingScreen = () => {\n    return `\n    <div class=\"unexpected-case-container\"><img class=\"unexpected-case-image\" src='${_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].workers}' />\n      <p class=\"unexpected-case-message\">네트워크를 확인해 주세요.</p>\n    </div>\n  `;\n};\nconst generateEmptyMovieListScreen = () => {\n    return `\n    <div class=\"unexpected-case-container\">\n      <img class=\"unexpected-case-image\" src=\"${_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emptyMovieList}\" />\n      <p class=\"unexpected-case-message\">표시할 영화 정보가 없습니다.</p>\n    </div>\n  `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/generateUnexpectedScreen.ts?");

/***/ }),

/***/ "./src/constants/urls.ts":
/*!*******************************!*\
  !*** ./src/constants/urls.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_POSTER_URL\": () => (/* binding */ BASE_POSTER_URL)\n/* harmony export */ });\nconst BASE_POSTER_URL = \"https://image.tmdb.org/t/p/w220_and_h330_face\";\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/urls.ts?");

/***/ }),

/***/ "./src/error/APIError.ts":
/*!*******************************!*\
  !*** ./src/error/APIError.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ APIError)\n/* harmony export */ });\nconst STATUS_CODE_TO_MESSAGE = {\n    400: \"Bad Request: 잘못된 요청입니다. 요청의 구문이 잘못되었습니다.\",\n    401: \"Unauthorized: 인증되지 않은 접근입니다. 인증이 필요합니다.\",\n    403: \"Forbidden: 접근이 거부되었습니다. 권한이 없습니다.\",\n    404: \"Not Found: 해당 자료를 찾을 수 없습니다.\",\n    405: \"Method Not Found: 잘못된 요청입니다.\",\n    406: \"Not Acceptable: 허용되지 않은 요청입니다. 서버가 요청을 수락할 수 없습니다.\",\n    422: \"Unprocessable Entity: 유효하지 않은 요청입니다.\",\n    429: \"Too Many Requests: 너무 많은 요청입니다. 잠시 후 다시 시도해 주세요\",\n    500: \"Internal Server Error: 서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.\",\n    501: \"Not Implemented: 서버가 요청을 처리할 수 없습니다. 잠시 후 다시 시도해주세요.\",\n    502: \"Bad Gateway: 게이트웨이 오류가 발생했습니다. 잠시 후 다시 시도해주세요.\",\n    503: \"Service Unavailable: 서버 점검 중입니다. 잠시 후 다시 시도해주세요.\",\n    504: \"Gateway Timeout: 게이트웨이 시간 초과가 발생했습니다. 잠시 후 다시 시도해주세요.\",\n};\nconst isStatusCode = (statusCode) => {\n    return Object.keys(STATUS_CODE_TO_MESSAGE).includes(String(statusCode));\n};\nclass APIError extends Error {\n    constructor(statusCode) {\n        if (!isStatusCode(statusCode)) {\n            throw Error(\"Invalid status code\");\n        }\n        super(STATUS_CODE_TO_MESSAGE[statusCode]);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/error/APIError.ts?");

/***/ }),

/***/ "./src/error/handleAPIError.ts":
/*!*************************************!*\
  !*** ./src/error/handleAPIError.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleAPIError\": () => (/* binding */ handleAPIError)\n/* harmony export */ });\n/* harmony import */ var _components_templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/templates/generateUnexpectedScreen */ \"./src/components/templates/generateUnexpectedScreen.ts\");\n/* harmony import */ var _APIError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIError */ \"./src/error/APIError.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n\n\n\nconst displayErrorMessage = (message, screenGenerator, targetId) => {\n    const errorTargetElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(targetId);\n    alert(message);\n    if (errorTargetElement) {\n        errorTargetElement.innerHTML = screenGenerator();\n    }\n};\nconst handleAPIError = (error, targetId) => {\n    if (error instanceof _APIError__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        displayErrorMessage(error.message, _components_templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_0__.generateEmptyMovieListScreen, targetId);\n    }\n    else if (error instanceof Error) {\n        displayErrorMessage(\"네트워크가 원활하지 않습니다. 인터넷 연결 확인 후 다시 시도해주세요.\", _components_templates_generateUnexpectedScreen__WEBPACK_IMPORTED_MODULE_0__.generateNetworkNotWorkingScreen, targetId);\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/error/handleAPIError.ts?");

/***/ }),

/***/ "./src/images/index.ts":
/*!*****************************!*\
  !*** ./src/images/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _search_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_button.png */ \"./src/images/search_button.png\");\n/* harmony import */ var _star_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_empty.png */ \"./src/images/star_empty.png\");\n/* harmony import */ var _star_filled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star_filled.png */ \"./src/images/star_filled.png\");\n/* harmony import */ var _empty_movie_list_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty-movie-list.png */ \"./src/images/empty-movie-list.png\");\n/* harmony import */ var _workers_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workers.png */ \"./src/images/workers.png\");\n\n\n\n\n\n\nconst IMAGES = {\n    logo: _logo_png__WEBPACK_IMPORTED_MODULE_0__,\n    searchButton: _search_button_png__WEBPACK_IMPORTED_MODULE_1__,\n    starEmpty: _star_empty_png__WEBPACK_IMPORTED_MODULE_2__,\n    starFilled: _star_filled_png__WEBPACK_IMPORTED_MODULE_3__,\n    emptyMovieList: _empty_movie_list_png__WEBPACK_IMPORTED_MODULE_4__,\n    workers: _workers_png__WEBPACK_IMPORTED_MODULE_5__,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IMAGES);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _components_MovieHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MovieHeader */ \"./src/components/MovieHeader.ts\");\n/* harmony import */ var _components_movieList_MovieListTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movieList/MovieListTitle */ \"./src/components/movieList/MovieListTitle.ts\");\n/* harmony import */ var _components_movieList_MovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movieList/MovieList */ \"./src/components/movieList/MovieList.ts\");\n/* harmony import */ var _components_modal_MovieDetailModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/MovieDetailModal */ \"./src/components/modal/MovieDetailModal.ts\");\n/* harmony import */ var _components_SkeletonUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SkeletonUI */ \"./src/components/SkeletonUI.ts\");\n/* harmony import */ var _components_templates_generateMovieListSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/templates/generateMovieListSkeleton */ \"./src/components/templates/generateMovieListSkeleton.ts\");\n/* harmony import */ var _states_QueryState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states/QueryState */ \"./src/states/QueryState.ts\");\n/* harmony import */ var _states_MovieState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./states/MovieState */ \"./src/states/MovieState.ts\");\n\n\n\n\n\n\n\n\n\nconst queryState = new _states_QueryState__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nconst movieState = new _states_MovieState__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\nconst movieHeader = new _components_MovieHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ targetId: \"movie-header\", queryState });\nconst movieListTitle = new _components_movieList_MovieListTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    targetId: \"movie-list-header\",\n    queryState,\n});\nconst movieListSkeleton = new _components_SkeletonUI__WEBPACK_IMPORTED_MODULE_5__[\"default\"]((0,_components_templates_generateMovieListSkeleton__WEBPACK_IMPORTED_MODULE_6__.generateMovieListSkeleton)());\nconst movieList = new _components_movieList_MovieList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    targetId: \"movie-list\",\n    skeletonUI: movieListSkeleton,\n    queryState,\n    movieState,\n});\nconst movieDetailModal = new _components_modal_MovieDetailModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    targetId: \"movie-detail-modal\",\n    movieState,\n});\nqueryState.addObserver(movieList);\nmovieState.addObserver(movieDetailModal);\nmovieHeader.init();\nmovieListTitle.init();\nmovieList.init();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/states/MovieState.ts":
/*!**********************************!*\
  !*** ./src/states/MovieState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieState)\n/* harmony export */ });\n/* harmony import */ var _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Observable */ \"./src/states/abstract/Observable.ts\");\n\nclass MovieState extends _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(movieId = null) {\n        super();\n        this.movieId = movieId;\n    }\n    set(movieId) {\n        this.movieId = movieId;\n        this.notify();\n    }\n    get() {\n        return this.movieId;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/states/MovieState.ts?");

/***/ }),

/***/ "./src/states/QueryState.ts":
/*!**********************************!*\
  !*** ./src/states/QueryState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryState)\n/* harmony export */ });\n/* harmony import */ var _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Observable */ \"./src/states/abstract/Observable.ts\");\n\nclass QueryState extends _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(query = \"\") {\n        super();\n        this.query = query;\n    }\n    set(query) {\n        this.query = query;\n        this.notify();\n    }\n    get() {\n        return this.query;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/states/QueryState.ts?");

/***/ }),

/***/ "./src/states/abstract/Observable.ts":
/*!*******************************************!*\
  !*** ./src/states/abstract/Observable.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observable)\n/* harmony export */ });\nclass Observable {\n    constructor() {\n        this.observers = [];\n    }\n    addObserver(observer) {\n        this.observers = [...this.observers, observer];\n    }\n    notify() {\n        this.observers.forEach((observer) => observer.update());\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/states/abstract/Observable.ts?");

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $)\n/* harmony export */ });\nconst $ = (selector) => document.getElementById(selector);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/dom.ts?");

/***/ }),

/***/ "./src/utils/roundNumber.ts":
/*!**********************************!*\
  !*** ./src/utils/roundNumber.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roundNumber\": () => (/* binding */ roundNumber)\n/* harmony export */ });\nconst roundNumber = (number, decimalPlaces) => {\n    const factor = Math.pow(10, decimalPlaces);\n    return Math.round(number * factor) / factor;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/roundNumber.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\nconst storage = {\n    get(key) {\n        const item = localStorage.getItem(key);\n        return item ? JSON.parse(item) : null;\n    },\n    set(key, value) {\n        const item = JSON.stringify(value);\n        localStorage.setItem(key, item);\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/storage.ts?");

/***/ }),

/***/ "./src/utils/throttle.ts":
/*!*******************************!*\
  !*** ./src/utils/throttle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nconst throttle = (callback, delay = 300) => {\n    let waiting = null;\n    const throttledFunction = () => {\n        if (waiting)\n            return;\n        waiting = setTimeout(() => {\n            callback();\n            waiting = null;\n        }, delay);\n    };\n    return throttledFunction;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/throttle.ts?");

/***/ }),

/***/ "./src/images/empty-movie-list.png":
/*!*****************************************!*\
  !*** ./src/images/empty-movie-list.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5fb348087acebb01f8b2.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/empty-movie-list.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/search_button.png":
/*!**************************************!*\
  !*** ./src/images/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/search_button.png?");

/***/ }),

/***/ "./src/images/star_empty.png":
/*!***********************************!*\
  !*** ./src/images/star_empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/star_empty.png?");

/***/ }),

/***/ "./src/images/star_filled.png":
/*!************************************!*\
  !*** ./src/images/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/star_filled.png?");

/***/ }),

/***/ "./src/images/workers.png":
/*!********************************!*\
  !*** ./src/images/workers.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fab4bf08c7cce31f0cd4.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/workers.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;