"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Mobilescroll/Mobilescroll.jsx":
/*!**************************************************!*\
  !*** ./components/Mobilescroll/Mobilescroll.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scrollData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scrollData */ \"./scrollData.js\");\n/* harmony import */ var _Screentext_Screentext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Screentext/Screentext */ \"./components/Screentext/Screentext.jsx\");\nvar _this = undefined;\n\n\n\nvar Mobilescroll = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-width mobilescroll\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll__wrapper\",\n                children: _scrollData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function(item, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll__fullscreen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Screentext_Screentext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            item: item,\n                            i: i\n                        }, void 0, false, {\n                            fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mobile-mockup-wrapper non-mobile\"\n            }, void 0, false, {\n                fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Mobilescroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mobilescroll);\nvar _c;\n$RefreshReg$(_c, \"Mobilescroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZXNjcm9sbC9Nb2JpbGVzY3JvbGwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBDO0FBQ1E7QUFDbEQsSUFBTUUsWUFBWSxHQUFHLFdBQU07O0lBQ3pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUMxQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjswQkFDN0JKLHVEQUFjLENBQUMsU0FBQ00sSUFBSSxFQUFFQyxDQUFDO3lDQUN0Qiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjtrQ0FDakMsNEVBQUNILDhEQUFVOzRCQUFDSyxJQUFJLEVBQUVBLElBQUk7NEJBQUVDLENBQUMsRUFBRUEsQ0FBQzs7Ozs7a0NBQUk7Ozs7OzhCQUM1QjtpQkFDUCxDQUFDOzs7OztxQkFDRTswQkFDTiw4REFBQ0osS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtDQUFrQzs7Ozs7cUJBQU87Ozs7OzthQUNwRCxDQUNOO0NBQ0g7QUFiS0YsS0FBQUEsWUFBWTtBQWVsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9iaWxlc2Nyb2xsL01vYmlsZXNjcm9sbC5qc3g/NzJhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2Nyb2xsRGF0YSBmcm9tIFwiLi4vLi4vc2Nyb2xsRGF0YVwiO1xuaW1wb3J0IFNjcmVlbnRleHQgZnJvbSBcIi4uL1NjcmVlbnRleHQvU2NyZWVudGV4dFwiO1xuY29uc3QgTW9iaWxlc2Nyb2xsID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYXgtd2lkdGggbW9iaWxlc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbF9fd3JhcHBlclwiPlxuICAgICAgICB7c2Nyb2xsRGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbF9fZnVsbHNjcmVlblwiPlxuICAgICAgICAgICAgPFNjcmVlbnRleHQgaXRlbT17aXRlbX0gaT17aX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1vY2t1cC13cmFwcGVyIG5vbi1tb2JpbGVcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZXNjcm9sbDtcbiJdLCJuYW1lcyI6WyJzY3JvbGxEYXRhIiwiU2NyZWVudGV4dCIsIk1vYmlsZXNjcm9sbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mobilescroll/Mobilescroll.jsx\n"));

/***/ }),

/***/ "./scrollData.js":
/*!***********************!*\
  !*** ./scrollData.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollData = [\n    {\n        heading: \"we\\u2019ve got your back.\",\n        description: \"gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.\",\n        mobile_img: \"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png\"\n    },\n    {\n        heading: \"begin your winning streak.\",\n        description: \"use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.\",\n        mobile_img: \"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png\"\n    },\n    {\n        heading: \"for your eclectic taste.\",\n        description: \"get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.\",\n        mobile_img: \"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png\"\n    },\n    {\n        heading: \"more cash in your pockets.\",\n        description: \"switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.\",\n        mobile_img: \"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png\"\n    }, \n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JvbGxEYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZUEsVUFBVSxHQUFHO0lBQzFCO1FBQ0VDLE9BQU8sRUFBRSwyQkFBc0I7UUFDL0JDLFdBQVcsRUFDVCxpTEFBaUw7UUFDbkxDLFVBQVUsRUFDUixnRkFBZ0Y7S0FDbkY7SUFDRDtRQUNFRixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDQyxXQUFXLEVBQ1QsNkhBQTZIO1FBQy9IQyxVQUFVLEVBQ1IsZ0ZBQWdGO0tBQ25GO0lBQ0Q7UUFDRUYsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQ0MsV0FBVyxFQUNULDJLQUEySztRQUM3S0MsVUFBVSxFQUNSLGdGQUFnRjtLQUNuRjtJQUNEO1FBQ0VGLE9BQU8sRUFBRSw0QkFBNEI7UUFDckNDLFdBQVcsRUFDVCxvS0FBb0s7UUFDdEtDLFVBQVUsRUFDUixnRkFBZ0Y7S0FDbkY7Q0FDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Njcm9sbERhdGEuanM/ZTNhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBzY3JvbGxEYXRhID0gW1xuICB7XG4gICAgaGVhZGluZzogXCJ3ZeKAmXZlIGdvdCB5b3VyIGJhY2suXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcImdhaW4gY29tcGxldGUgY29udHJvbCBvdmVyIHlvdXIgY3JlZGl0IGNhcmQgd2l0aCBDUkVEIFByb3RlY3QuIHJlY2VpdmUgY2F0ZWdvcnktYmFzZWQgYW5hbHlzaXMgb2YgeW91ciBzcGVuZHMsIGRldGVjdCBoaWRkZW4gY2hhcmdlcywgYW5kIHRyYWNrIHlvdXIgY3JlZGl0IGxpbWl0IGluIHJlYWwtdGltZS5cIixcbiAgICBtb2JpbGVfaW1nOlxuICAgICAgXCJodHRwczovL3dlYi1pbWFnZXMuY3JlZGNkbi5pbi9fbmV4dC9hc3NldHMvaW1hZ2VzL2hvbWUtcGFnZS9mZWF0dXJlcy9mb2xkMS5wbmdcIixcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6IFwiYmVnaW4geW91ciB3aW5uaW5nIHN0cmVhay5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwidXNlIHlvdXIgQ1JFRCBjb2lucyB0byBwYXJ0aWNpcGF0ZSBpbiBnYW1lcyBhbmQgcmFmZmxlcyB0byB3aW4gdGhlIG1vc3QgZXhjbHVzaXZlIHJld2FyZHMgYW5kIGNhc2hiYWNrcyBvbiBDUkVELiBnb29kIGx1Y2suXCIsXG4gICAgbW9iaWxlX2ltZzpcbiAgICAgIFwiaHR0cHM6Ly93ZWItaW1hZ2VzLmNyZWRjZG4uaW4vX25leHQvYXNzZXRzL2ltYWdlcy9ob21lLXBhZ2UvZmVhdHVyZXMvZm9sZDIucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBoZWFkaW5nOiBcImZvciB5b3VyIGVjbGVjdGljIHRhc3RlLlwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJnZXQgYWNjZXNzIHRvIHRoZSBDUkVEIFN0b3JlLCBhIG1lbWJlci1leGNsdXNpdmUgc2VsZWN0aW9uIG9mIHByb2R1Y3RzIGFuZCBleHBlcmllbmNlcyBhdCBzcGVjaWFsIHByaWNlcyB0aGF0IGNvbXBsZW1lbnQgeW91ciB0YXN0ZS4gdGhpcyBpcyB0aGUgZ29vZCBsaWZlIHRoZXkgc3BlYWsgb2YuXCIsXG4gICAgbW9iaWxlX2ltZzpcbiAgICAgIFwiaHR0cHM6Ly93ZWItaW1hZ2VzLmNyZWRjZG4uaW4vX25leHQvYXNzZXRzL2ltYWdlcy9ob21lLXBhZ2UvZmVhdHVyZXMvZm9sZDMucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBoZWFkaW5nOiBcIm1vcmUgY2FzaCBpbiB5b3VyIHBvY2tldHMuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcInN3aXRjaCB0byBDUkVEIFJlbnRQYXkgYW5kIHN0YXJ0IHBheWluZyByZW50IHdpdGggeW91ciBjcmVkaXQgY2FyZC4gdGhpcyB3YXkgeW91IGdldCB1cCB0byA0NSBkYXlzIG9mIGNyZWRpdCBmcmVlIHBlcmlvZCwgbW9yZSByZXdhcmQgcG9pbnRzIGFuZCBhIGhhcHB5IGxhbmRsb3JkLlwiLFxuICAgIG1vYmlsZV9pbWc6XG4gICAgICBcImh0dHBzOi8vd2ViLWltYWdlcy5jcmVkY2RuLmluL19uZXh0L2Fzc2V0cy9pbWFnZXMvaG9tZS1wYWdlL2ZlYXR1cmVzL2ZvbGQ0LnBuZ1wiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJzY3JvbGxEYXRhIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwibW9iaWxlX2ltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scrollData.js\n"));

/***/ })

});