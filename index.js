/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_general_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_general_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_general_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__javascripts_hamburger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__javascripts_MonitorBtns__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__javascripts_animateScroll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_projects_tovar_link_tovar_link_desktop_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_projects_tovar_link_tovar_link_desktop_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_projects_tovar_link_tovar_link_desktop_png__);






document.addEventListener('DOMContentLoaded', function(){
  new __WEBPACK_IMPORTED_MODULE_1__javascripts_hamburger__["a" /* default */]('.header')
  
  new __WEBPACK_IMPORTED_MODULE_2__javascripts_MonitorBtns__["a" /* default */]()
  console.log('---', __WEBPACK_IMPORTED_MODULE_4__images_projects_tovar_link_tovar_link_desktop_png___default.a)
  const mouseIndex = document.querySelector('.mouse.mouseIndex')
  mouseIndex && mouseIndex.addEventListener('click', function () {
    new __WEBPACK_IMPORTED_MODULE_3__javascripts_animateScroll__["a" /* default */](2000, 'html')
  })
  
  const mouseLanding = document.querySelector('.mouse.mouseLanding')
  mouseLanding && mouseLanding.addEventListener('click', function () {
    new __WEBPACK_IMPORTED_MODULE_3__javascripts_animateScroll__["a" /* default */](2000, '.project__lending-img')
  })
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Hamburger {
  constructor(param){
    let base = document.querySelector(param);
    let hamburger = base.querySelector('.c-hamburger');
    let navList = base.querySelector('.header__nav');

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hamburger;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MonitorBtns {
  constructor(){
    const btns = document.querySelectorAll('.btn-list__item')
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        for (let i = 0; i < btns.length; i++) {
          btns[i].classList.remove('active')
        }

        const monitorType = btns[i].dataset.monitor
        const monitorId = document.querySelector('.monitor')

        btns[i].classList.add('active')
        monitorId.classList.remove('desktop', 'tablet', 'phone')
        monitorId.classList.add(monitorType)
      })
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MonitorBtns;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AnimateScroll {
  constructor(param, selector){
    const imgL = document.querySelector(selector)
    console.log('---', imgL)
    const start = imgL.scrollTop
    const end = imgL.scrollHeight
    const change = end - start
    const increment = 20

    function easeInOut(currentTime, start, change, param) {
      currentTime /= param / 2;
      if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }

    function animate(elapsedTime) {
      elapsedTime += increment;
      const position = easeInOut(elapsedTime, start, change, param);
      imgL.scrollTop = position;
      if (elapsedTime < param) {
        setTimeout(function() {
          animate(elapsedTime);
        }, increment)
      }
    }
    animate(0);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AnimateScroll;



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "source/images/projects/tovar.link/tovar.link__desktop.png";

/***/ })
/******/ ]);