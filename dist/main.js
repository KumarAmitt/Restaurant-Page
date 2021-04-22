/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": function() { return /* binding */ about; }
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");

var descText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore itaque officia et magni voluptatibus aliquam nihil cupiditate nemo. Explicabo iure ullam quis quo distinctio quod voluptatem corporis, similique eveniet inventore expedita dolorem repellendus animi, facere aut ipsum veniam ad.';
var about = function about(_ref) {
  var appendTo = _ref.appendTo;
  var aboutPage = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: appendTo,
    tag: 'div'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: aboutPage,
    tag: 'h1',
    cls: 'title',
    txt: 'About Us'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: aboutPage,
    tag: 'p',
    cls: 'desc',
    txt: descText
  });
};

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerText": function() { return /* binding */ footerText; }
/* harmony export */ });
var footerText = '&copy; 2021 zaika';

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": function() { return /* binding */ footer; }
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");


var footer = function footer(_ref) {
  var appendTo = _ref.appendTo;
  var footerDiv = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: appendTo,
    tag: 'footer'
  });
  var footerP = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: footerDiv,
    tag: 'p'
  });
  footerP.innerHTML = _constants__WEBPACK_IMPORTED_MODULE_1__.footerText;
};

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": function() { return /* binding */ nav; }
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");

var nav = function nav(_ref) {
  var appendTo = _ref.appendTo;
  var nav = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: appendTo,
    tag: 'nav'
  });
  var logoDiv = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: nav,
    tag: 'div',
    cls: 'logo',
    txt: 'zaika'
  });
  var navLinks = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    appendTo: nav,
    tag: 'ul',
    cls: 'nav-links'
  });
  var linkText = ['Home', 'Menu', 'Contact'];
  linkText.forEach(function (el) {
    var navLink = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      appendTo: navLinks,
      tag: 'li',
      cls: 'nav-link',
      txt: el
    });
    navLink.addEventListener('click', function () {
      alert("From ".concat(el));
    });
  });
};

/***/ }),

/***/ "./src/js/tools.js":
/*!*************************!*\
  !*** ./src/js/tools.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": function() { return /* binding */ createElement; }
/* harmony export */ });
var createElement = function createElement(_ref) {
  var appendTo = _ref.appendTo,
      tag = _ref.tag,
      cls = _ref.cls,
      txt = _ref.txt;
  var element = document.createElement(tag);
  element.classList.add(cls);
  element.textContent = txt;

  if (appendTo) {
    appendTo.appendChild(element);
  }

  return element;
};

/***/ }),

/***/ "./src/images/aloo_puri.jpg":
/*!**********************************!*\
  !*** ./src/images/aloo_puri.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9b11db4491215d76719d543973247fb2.jpg");

/***/ }),

/***/ "./src/stylesheets/style.scss":
/*!************************************!*\
  !*** ./src/stylesheets/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.scss */ "./src/stylesheets/style.scss");
/* harmony import */ var _images_aloo_puri_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/aloo_puri.jpg */ "./src/images/aloo_puri.jpg");
/* harmony import */ var _js_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/tools */ "./src/js/tools.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/nav */ "./src/js/nav.js");
/* harmony import */ var _js_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/about */ "./src/js/about.js");
/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/footer */ "./src/js/footer.js");






var content = document.getElementById('content'); //Nav

(0,_js_nav__WEBPACK_IMPORTED_MODULE_3__.nav)({
  appendTo: content
}); //cover

var coverDiv = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: content,
  tag: 'div',
  cls: 'cover'
});
var coverContent = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: coverDiv,
  tag: 'div',
  cls: 'cover-content'
});
var coverP1 = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: coverContent,
  tag: 'p',
  cls: 'cover-p1',
  txt: 'Welcome to '
});
var p1Span = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: coverP1,
  tag: 'span',
  txt: 'zaika'
});
var coverP2 = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: coverContent,
  tag: 'p',
  cls: 'cover-p2',
  txt: 'Where Food Speaks with your plate!'
}); // feature-recipe

var featRecipe = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: content,
  tag: 'div',
  cls: 'feat-recipe'
});
var featRecipeImg = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: featRecipe,
  tag: 'img'
});
featRecipeImg.src = _images_aloo_puri_jpg__WEBPACK_IMPORTED_MODULE_1__.default; //About

var main = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.createElement)({
  appendTo: content,
  tag: 'main'
});
(0,_js_about__WEBPACK_IMPORTED_MODULE_4__.about)({
  appendTo: main
}); //Footer

(0,_js_footer__WEBPACK_IMPORTED_MODULE_5__.footer)({
  appendTo: content
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map