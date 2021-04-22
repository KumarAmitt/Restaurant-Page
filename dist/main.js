/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");

var descText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore itaque officia et magni voluptatibus aliquam nihil cupiditate nemo. Explicabo iure ullam quis quo distinctio quod voluptatem corporis, similique eveniet inventore expedita dolorem repellendus animi, facere aut ipsum veniam ad.';

var about = function about(_ref) {
  var appendTo = _ref.appendTo;
  var aboutPage = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: appendTo,
    tag: 'div'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: aboutPage,
    tag: 'h1',
    cls: 'title',
    txt: 'About Us'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: aboutPage,
    tag: 'p',
    cls: 'desc',
    txt: descText
  });
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");

var timeTxt = '9:00 AM - 10:00 PM (All day)';
var addressTxt = '23, ABC street, XYZ market, JSR';
var phoneTxt = '+91 222 333 4444';
var mailTxt = 'dine.zaika@gmail.com';
var instaTxt = '@dine_zaika';

var contact = function contact(_ref) {
  var appendTo = _ref.appendTo;
  var contactPage = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: appendTo,
    tag: 'div'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: contactPage,
    tag: 'h1',
    cls: 'title',
    txt: 'Contact Us'
  });
  var desc = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: contactPage,
    tag: 'p',
    cls: 'desc'
  });
  var time = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: desc,
    tag: 'p',
    cls: 'cInfo',
    txt: 'Time: '
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: time,
    tag: 'span',
    txt: timeTxt
  });
  var address = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: desc,
    tag: 'p',
    cls: 'cInfo',
    txt: 'Address: '
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: address,
    tag: 'span',
    txt: addressTxt
  });
  var phone = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: desc,
    tag: 'p',
    cls: 'cInfo',
    txt: 'Phone: '
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: phone,
    tag: 'span',
    txt: phoneTxt
  });
  var mail = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: desc,
    tag: 'p',
    cls: 'cInfo',
    txt: 'Email: '
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: mail,
    tag: 'span',
    txt: mailTxt
  });
  var insta = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: desc,
    tag: 'p',
    cls: 'cInfo',
    txt: 'Instagram: '
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: insta,
    tag: 'span',
    txt: instaTxt
  });
};

/* harmony default export */ __webpack_exports__["default"] = (contact);

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");

var footerText = '&copy; 2021 zaika';

var footer = function footer(_ref) {
  var appendTo = _ref.appendTo;
  var footerDiv = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: appendTo,
    tag: 'footer'
  });
  var footerP = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: footerDiv,
    tag: 'p'
  });
  footerP.innerHTML = footerText;
};

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");

var menuItems = {
  starter: {
    'Hot and Sour soup': 99,
    'Sweet corn soup': 89,
    'Crispy babycorn chilly': 159,
    'Garlic Paneer': 159
  },
  tandoor: {
    'Paneer Angaara tikka': 189,
    'Tandoori chicken': 169,
    'Achari fish tikka': 209
  },
  rice: {
    'chicken fried rice': 159,
    'egg fried rice': 129,
    'veg fried rice': 99
  }
};

var menu = function menu(_ref) {
  var appendTo = _ref.appendTo;
  var menuPage = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: appendTo,
    tag: 'div'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: menuPage,
    tag: 'h1',
    cls: 'title',
    txt: 'Menu'
  });
  Object.entries(menuItems).forEach(function (item) {
    var desc = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
      appendTo: menuPage,
      tag: 'p',
      cls: 'desc'
    });
    (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
      appendTo: desc,
      tag: 'h3',
      cls: 'category',
      txt: item[0]
    });
    var ul = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
      appendTo: desc,
      tag: 'ul'
    });
    Object.entries(item[1]).forEach(function (dish) {
      var li = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
        appendTo: ul,
        tag: 'li'
      });
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
        appendTo: li,
        tag: 'span',
        txt: dish[0]
      });
      var price = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
        appendTo: li,
        tag: 'span'
      });
      price.innerHTML = "&#8377; ".concat(dish[1]);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/js/tools.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/js/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/js/contact.js");
/* harmony import */ var _images_golgappa_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/golgappa.jpg */ "./src/images/golgappa.jpg");
/* harmony import */ var _images_dosa_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/dosa.jpg */ "./src/images/dosa.jpg");
/* harmony import */ var _images_aloo_puri_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/aloo_puri.jpg */ "./src/images/aloo_puri.jpg");








function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function setRecipeImg(link) {
  var pic = document.querySelector('.feat-recipe-img');

  if (link === 'Menu') {
    pic.src = _images_golgappa_jpg__WEBPACK_IMPORTED_MODULE_4__.default;
  } else if (link === 'Contact') {
    pic.src = _images_dosa_jpg__WEBPACK_IMPORTED_MODULE_5__.default;
  } else {
    pic.src = _images_aloo_puri_jpg__WEBPACK_IMPORTED_MODULE_6__.default;
  }
}

function displayMainSection(link) {
  var main = document.querySelector('main');
  removeAllChildNodes(main);

  if (link === 'Menu') {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)({
      appendTo: main
    });
  } else if (link === 'Contact') {
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)({
      appendTo: main
    });
  } else {
    (0,_about__WEBPACK_IMPORTED_MODULE_1__.default)({
      appendTo: main
    });
  }
}

var nav = function nav(_ref) {
  var appendTo = _ref.appendTo;
  var nav = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: appendTo,
    tag: 'nav'
  });
  (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: nav,
    tag: 'div',
    cls: 'logo',
    txt: 'zaika'
  });
  var navLinks = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
    appendTo: nav,
    tag: 'ul',
    cls: 'nav-links'
  });
  var linkText = ['About', 'Menu', 'Contact'];
  linkText.forEach(function (el) {
    var navLink = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.default)({
      appendTo: navLinks,
      tag: 'li',
      cls: 'nav-link',
      txt: el
    });
    navLink.addEventListener('click', function () {
      displayMainSection(el);
      setRecipeImg(el);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (nav);

/***/ }),

/***/ "./src/js/tools.js":
/*!*************************!*\
  !*** ./src/js/tools.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./src/images/aloo_puri.jpg":
/*!**********************************!*\
  !*** ./src/images/aloo_puri.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9b11db4491215d76719d543973247fb2.jpg");

/***/ }),

/***/ "./src/images/dosa.jpg":
/*!*****************************!*\
  !*** ./src/images/dosa.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "200dae8883672892fc9d05fc580e3188.jpg");

/***/ }),

/***/ "./src/images/golgappa.jpg":
/*!*********************************!*\
  !*** ./src/images/golgappa.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7a8a6b5d065c06e9bcf7e0f1483c2176.jpg");

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






var content = document.getElementById('content'); // Nav

(0,_js_nav__WEBPACK_IMPORTED_MODULE_3__.default)({
  appendTo: content
}); // cover

var coverDiv = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: content,
  tag: 'div',
  cls: 'cover'
});
var coverContent = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: coverDiv,
  tag: 'div',
  cls: 'cover-content'
});
var coverP1 = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: coverContent,
  tag: 'p',
  cls: 'cover-p1',
  txt: 'Welcome to '
});
(0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: coverP1,
  tag: 'span',
  txt: 'zaika'
});
(0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: coverContent,
  tag: 'p',
  cls: 'cover-p2',
  txt: 'Where Food Speaks with your plate!'
}); // feature-recipe

var featRecipe = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: content,
  tag: 'div',
  cls: 'feat-recipe'
});
var featRecipeImg = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: featRecipe,
  cls: 'feat-recipe-img',
  tag: 'img'
});
featRecipeImg.src = _images_aloo_puri_jpg__WEBPACK_IMPORTED_MODULE_1__.default; // About

var main = (0,_js_tools__WEBPACK_IMPORTED_MODULE_2__.default)({
  appendTo: content,
  tag: 'main'
});
(0,_js_about__WEBPACK_IMPORTED_MODULE_4__.default)({
  appendTo: main
}); // Footer

(0,_js_footer__WEBPACK_IMPORTED_MODULE_5__.default)({
  appendTo: content
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map