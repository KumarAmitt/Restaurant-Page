/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.scss */ "./src/stylesheets/style.scss");


var createElement = function createElement(element) {
  return document.createElement(element);
};

var content = document.getElementById('content');
var nav = createElement('nav');
var logoDiv = createElement('div');
var navLinks = createElement('ul');
content.appendChild(nav);
nav.appendChild(logoDiv);
nav.appendChild(navLinks);
logoDiv.classList.add('logo');
navLinks.classList.add('nav-links');
logoDiv.innerText = 'zaika';
var linkText = ['Home', 'Menu', 'Contact'];
linkText.forEach(function (el) {
  var navLink = createElement('li');
  navLink.classList.add('nav-link');
  navLinks.appendChild(navLink);
  navLink.innerText = el;
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map