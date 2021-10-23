/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_assets/js/current_page.js":
/*!************************************!*\
  !*** ./_assets/js/current_page.js ***!
  \************************************/
/***/ (function() {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// グローバルメニューとブログのカテゴリーメニューの中で、
// 現在のページに該当する要素に"js-current_page"クラスを追加する
// ex. section = "blog", category = "travel"
var _location$pathname$sp = location.pathname.split("/").filter(function (val) {
  return val;
}),
    _location$pathname$sp2 = _slicedToArray(_location$pathname$sp, 2),
    section = _location$pathname$sp2[0],
    category = _location$pathname$sp2[1]; // グローバルナビの該当要素にクラスを追加


var currentSection = getCurrentSection(section);
if (currentSection) currentSection.classList.add("js-current_page"); // セクションの該当するカテゴリーにクラスを追加

var currentCategory = getCurrentCategory(section, category);
if (currentCategory) currentCategory.classList.add("js-current_page");

function getCurrentSection(section) {
  var currentSection = document.querySelector(".l-header-global_nav a[href*=".concat(section, "]"));
  return currentSection ? currentSection.closest("li") : null;
}

function getCurrentCategory(section, category) {
  var sectionSelected = ".p-page_nav a[href*=\"".concat(section, "\"][href*=\"").concat(category, "\"]");
  var categoryTop = ".p-page_nav a[href*=".concat(section, "]"); // TODO: 下2行をまとめたいが、querySelectorのor条件がうまくいかない。

  var currentNav = document.querySelector(sectionSelected);
  return currentNav !== null && currentNav !== void 0 ? currentNav : document.querySelector(categoryTop);
}

;

/***/ }),

/***/ "./_assets/js/hide_page_nav.js":
/*!*************************************!*\
  !*** ./_assets/js/hide_page_nav.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mediaQueries_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mediaQueries.module.js */ "./_assets/js/modules/mediaQueries.module.js");
 // elem = 非表示にする要素, num = ビューポートの下部から非表示にする要素までの距離

var pageNav = document.querySelector(".p-page_nav");

if (!(0,_modules_mediaQueries_module_js__WEBPACK_IMPORTED_MODULE_0__.mediaQueries)("sm")) {
  hideWhenTouchedFooter(pageNav, 0);
}

function hideWhenTouchedFooter(elem, num) {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: ".l-footer",
      start: "top bottom-=".concat(num),
      end: "+=120",
      toggleActions: "restart none reverse none",
      scrub: true
    },
    y: +60
  });
}

/***/ }),

/***/ "./_assets/js/hover.js":
/*!*****************************!*\
  !*** ./_assets/js/hover.js ***!
  \*****************************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// <使い方>
// HTMLのclassに"js-hover"を追加。
// CSSで特定クラスに続けた".hover"でスタイルを指定。
// <p class="p js-hover"></p>の場合、".p.hover{スタイル}"
var elements = document.querySelectorAll(".js-hover");

var _iterator = _createForOfIteratorHelper(elements),
    _step;

try {
  var _loop = function _loop() {
    var elem = _step.value;
    // マウスが要素の範囲内にある時のみhoverクラスを追加
    elem.addEventListener("mouseenter", function () {
      elem.classList.add("hover");
    });
    elem.addEventListener("mouseleave", function () {
      elem.classList.remove("hover");
    }); // タッチデバイス対応

    elem.addEventListener("touchstart", function () {
      elem.classList.add("hover");
    });
    elem.addEventListener("touchend", function () {
      elem.classList.remove("hover");
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./_assets/js/modules/mediaQueries.module.js":
/*!***************************************************!*\
  !*** ./_assets/js/modules/mediaQueries.module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediaQueries": function() { return /* binding */ mediaQueries; }
/* harmony export */ });
var breakpoints = new Map([["sm", "(min-width: 640px)"], ["md", "(min-width: 768px)"], ["lg", "(min-width: 1024px)"], ["xl", "(min-width: 1280px)"]]);
var mediaQueries = function mediaQueries(breakpoint) {
  if (window.matchMedia(breakpoints.get(breakpoint)).matches) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ "./_assets/js/pager_button.js":
/*!************************************!*\
  !*** ./_assets/js/pager_button.js ***!
  \************************************/
/***/ (function() {

var button = document.querySelector(".p-pager-selector-button");

if (button) {
  button.addEventListener("click", function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
} // GSAP


var tl = gsap.timeline({
  paused: true,
  reversed: true
});
tl.to(".p-pager-selector-list", {
  duration: 0,
  display: "block"
}).to(".p-pager-selector", {
  duration: 0.05,
  height: "auto"
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./_assets/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_current_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/current_page.js */ "./_assets/js/current_page.js");
/* harmony import */ var _js_current_page_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_current_page_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_hide_page_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/hide_page_nav.js */ "./_assets/js/hide_page_nav.js");
/* harmony import */ var _js_hover_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/hover.js */ "./_assets/js/hover.js");
/* harmony import */ var _js_hover_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_hover_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_pager_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/pager_button.js */ "./_assets/js/pager_button.js");
/* harmony import */ var _js_pager_button_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_pager_button_js__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0QsRUFFRDs7O0FBQ0EsSUFBTUgsRUFBRSxHQUFHckIsSUFBSSxDQUFDeUIsUUFBTCxDQUFjO0FBQUNDLEVBQUFBLE1BQU0sRUFBRSxJQUFUO0FBQWVKLEVBQUFBLFFBQVEsRUFBRTtBQUF6QixDQUFkLENBQVg7QUFDQUQsRUFBRSxDQUFDcEIsRUFBSCxDQUFNLHdCQUFOLEVBQWdDO0FBQUMwQixFQUFBQSxRQUFRLEVBQUUsQ0FBWDtBQUFjQyxFQUFBQSxPQUFPLEVBQUU7QUFBdkIsQ0FBaEMsRUFDRzNCLEVBREgsQ0FDTSxtQkFETixFQUMyQjtBQUFDMEIsRUFBQUEsUUFBUSxFQUFFLElBQVg7QUFBaUJFLEVBQUFBLE1BQU0sRUFBRTtBQUF6QixDQUQzQjs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzY2Zy8uL19hc3NldHMvanMvY3VycmVudF9wYWdlLmpzIiwid2VicGFjazovLzY2Zy8uL19hc3NldHMvanMvaGlkZV9wYWdlX25hdi5qcyIsIndlYnBhY2s6Ly82NmcvLi9fYXNzZXRzL2pzL2hvdmVyLmpzIiwid2VicGFjazovLzY2Zy8uL19hc3NldHMvanMvbW9kdWxlcy9tZWRpYVF1ZXJpZXMubW9kdWxlLmpzIiwid2VicGFjazovLzY2Zy8uL19hc3NldHMvanMvcGFnZXJfYnV0dG9uLmpzIiwid2VicGFjazovLzY2Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly82Nmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vNjZnL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82Nmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly82Nmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly82NmcvLi9fYXNzZXRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g44Kw44Ot44O844OQ44Or44Oh44OL44Ol44O844Go44OW44Ot44Kw44Gu44Kr44OG44K044Oq44O844Oh44OL44Ol44O844Gu5Lit44Gn44CBXG4vLyDnj77lnKjjga7jg5rjg7zjgrjjgavoqbLlvZPjgZnjgovopoHntKDjgatcImpzLWN1cnJlbnRfcGFnZVwi44Kv44Op44K544KS6L+95Yqg44GZ44KLXG5cbi8vIGV4LiBzZWN0aW9uID0gXCJibG9nXCIsIGNhdGVnb3J5ID0gXCJ0cmF2ZWxcIlxuY29uc3QgW3NlY3Rpb24sIGNhdGVnb3J5XSA9XG4gIGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoKHZhbCkgPT4gdmFsKTtcblxuLy8g44Kw44Ot44O844OQ44Or44OK44OT44Gu6Kmy5b2T6KaB57Sg44Gr44Kv44Op44K544KS6L+95YqgXG5jb25zdCBjdXJyZW50U2VjdGlvbiA9IGdldEN1cnJlbnRTZWN0aW9uKHNlY3Rpb24pO1xuaWYgKGN1cnJlbnRTZWN0aW9uKSBjdXJyZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwianMtY3VycmVudF9wYWdlXCIpO1xuXG4vLyDjgrvjgq/jgrfjg6fjg7Pjga7oqbLlvZPjgZnjgovjgqvjg4bjgrTjg6rjg7zjgavjgq/jg6njgrnjgpLov73liqBcbmNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGdldEN1cnJlbnRDYXRlZ29yeShzZWN0aW9uLCBjYXRlZ29yeSk7XG5pZiAoY3VycmVudENhdGVnb3J5KSBjdXJyZW50Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImpzLWN1cnJlbnRfcGFnZVwiKTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNlY3Rpb24oc2VjdGlvbikge1xuICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5sLWhlYWRlci1nbG9iYWxfbmF2IGFbaHJlZio9JHtzZWN0aW9ufV1gKTtcbiAgcmV0dXJuIGN1cnJlbnRTZWN0aW9uID8gY3VycmVudFNlY3Rpb24uY2xvc2VzdChcImxpXCIpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudENhdGVnb3J5KHNlY3Rpb24sIGNhdGVnb3J5KSB7XG4gIGNvbnN0IHNlY3Rpb25TZWxlY3RlZCA9XG4gICAgYC5wLXBhZ2VfbmF2IGFbaHJlZio9XCIke3NlY3Rpb259XCJdW2hyZWYqPVwiJHtjYXRlZ29yeX1cIl1gO1xuICBjb25zdCBjYXRlZ29yeVRvcCA9XG4gICAgYC5wLXBhZ2VfbmF2IGFbaHJlZio9JHtzZWN0aW9ufV1gO1xuICAvLyBUT0RPOiDkuIsy6KGM44KS44G+44Go44KB44Gf44GE44GM44CBcXVlcnlTZWxlY3RvcuOBrm9y5p2h5Lu244GM44GG44G+44GP44GE44GL44Gq44GE44CCXG4gIGNvbnN0IGN1cnJlbnROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25TZWxlY3RlZCk7XG4gIHJldHVybiBjdXJyZW50TmF2ID8/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0ZWdvcnlUb3ApO1xufTtcbiIsImltcG9ydCB7bWVkaWFRdWVyaWVzfSBmcm9tIFwiLi9tb2R1bGVzL21lZGlhUXVlcmllcy5tb2R1bGUuanNcIjtcblxuLy8gZWxlbSA9IOmdnuihqOekuuOBq+OBmeOCi+imgee0oCwgbnVtID0g44OT44Ol44O844Od44O844OI44Gu5LiL6YOo44GL44KJ6Z2e6KGo56S644Gr44GZ44KL6KaB57Sg44G+44Gn44Gu6Led6ZuiXG5jb25zdCBwYWdlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wLXBhZ2VfbmF2XCIpO1xuaWYgKCFtZWRpYVF1ZXJpZXMoXCJzbVwiKSkge1xuICBoaWRlV2hlblRvdWNoZWRGb290ZXIocGFnZU5hdiwgMCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVXaGVuVG91Y2hlZEZvb3RlcihlbGVtLCBudW0pIHtcbiAgZ3NhcC50byhlbGVtLCB7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIubC1mb290ZXJcIixcbiAgICAgIHN0YXJ0OiBgdG9wIGJvdHRvbS09JHtudW19YCxcbiAgICAgIGVuZDogXCIrPTEyMFwiLFxuICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IG5vbmUgcmV2ZXJzZSBub25lXCIsXG4gICAgICBzY3J1YjogdHJ1ZSxcbiAgICB9LFxuICAgIHk6ICs2MCxcbiAgfSk7XG59XG4iLCIvLyA85L2/44GE5pa5PlxuLy8gSFRNTOOBrmNsYXNz44GrXCJqcy1ob3Zlclwi44KS6L+95Yqg44CCXG4vLyBDU1Pjgafnibnlrprjgq/jg6njgrnjgavntprjgZHjgZ9cIi5ob3Zlclwi44Gn44K544K/44Kk44Or44KS5oyH5a6a44CCXG4vLyA8cCBjbGFzcz1cInAganMtaG92ZXJcIj48L3A+44Gu5aC05ZCI44CBXCIucC5ob3Zlcnvjgrnjgr/jgqTjg6t9XCJcblxuY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWhvdmVyXCIpO1xuZm9yIChjb25zdCBlbGVtIG9mIGVsZW1lbnRzKSB7XG4gIC8vIOODnuOCpuOCueOBjOimgee0oOOBruevhOWbsuWGheOBq+OBguOCi+aZguOBruOBv2hvdmVy44Kv44Op44K544KS6L+95YqgXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xuICB9KTtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gIH0pO1xuICAvLyDjgr/jg4Pjg4Hjg4fjg5DjgqTjgrnlr77lv5xcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gIH0pO1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gIH0pO1xufVxuIiwiY29uc3QgYnJlYWtwb2ludHMgPSBuZXcgTWFwKFtcbiAgW1wic21cIiwgXCIobWluLXdpZHRoOiA2NDBweClcIl0sXG4gIFtcIm1kXCIsIFwiKG1pbi13aWR0aDogNzY4cHgpXCJdLFxuICBbXCJsZ1wiLCBcIihtaW4td2lkdGg6IDEwMjRweClcIl0sXG4gIFtcInhsXCIsIFwiKG1pbi13aWR0aDogMTI4MHB4KVwiXSxcbl0pO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyaWVzID0gKGJyZWFrcG9pbnQpID0+IHtcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKGJyZWFrcG9pbnRzLmdldChicmVha3BvaW50KSkubWF0Y2hlcykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1wYWdlci1zZWxlY3Rvci1idXR0b25cIik7XG5pZiAoYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0bC5yZXZlcnNlZCgpKSB7XG4gICAgICB0bC5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRsLnJldmVyc2UoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBHU0FQXG5jb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe3BhdXNlZDogdHJ1ZSwgcmV2ZXJzZWQ6IHRydWV9KTtcbnRsLnRvKFwiLnAtcGFnZXItc2VsZWN0b3ItbGlzdFwiLCB7ZHVyYXRpb246IDAsIGRpc3BsYXk6IFwiYmxvY2tcIn0pXG4gIC50byhcIi5wLXBhZ2VyLXNlbGVjdG9yXCIsIHtkdXJhdGlvbjogMC4wNSwgaGVpZ2h0OiBcImF1dG9cIn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vanMvY3VycmVudF9wYWdlLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2hpZGVfcGFnZV9uYXYuanNcIjtcbmltcG9ydCBcIi4vanMvaG92ZXIuanNcIjtcbmltcG9ydCBcIi4vanMvcGFnZXJfYnV0dG9uLmpzXCI7XG4iXSwibmFtZXMiOlsibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwiZmlsdGVyIiwidmFsIiwic2VjdGlvbiIsImNhdGVnb3J5IiwiY3VycmVudFNlY3Rpb24iLCJnZXRDdXJyZW50U2VjdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRDYXRlZ29yeSIsImdldEN1cnJlbnRDYXRlZ29yeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3Nlc3QiLCJzZWN0aW9uU2VsZWN0ZWQiLCJjYXRlZ29yeVRvcCIsImN1cnJlbnROYXYiLCJtZWRpYVF1ZXJpZXMiLCJwYWdlTmF2IiwiaGlkZVdoZW5Ub3VjaGVkRm9vdGVyIiwiZWxlbSIsIm51bSIsImdzYXAiLCJ0byIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJ0b2dnbGVBY3Rpb25zIiwic2NydWIiLCJ5IiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImJyZWFrcG9pbnRzIiwiTWFwIiwiYnJlYWtwb2ludCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJnZXQiLCJtYXRjaGVzIiwiYnV0dG9uIiwidGwiLCJyZXZlcnNlZCIsInBsYXkiLCJyZXZlcnNlIiwidGltZWxpbmUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9