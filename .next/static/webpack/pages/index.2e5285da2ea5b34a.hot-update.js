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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scrollData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scrollData */ \"./scrollData.js\");\n/* harmony import */ var _Screentext_Screentext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Screentext/Screentext */ \"./components/Screentext/Screentext.jsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Mobilescroll = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentImg = ref[0], setCurrentImg = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-width mobilescroll\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll__wrapper\",\n                children: _scrollData__WEBPACK_IMPORTED_MODULE_2__.scrollData.map(function(item, i) {\n                    return(// eslint-disable-next-line react/jsx-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll__fullscreen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Screentext_Screentext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            item: item,\n                            i: i,\n                            setCurrentImg: setCurrentImg\n                        }, void 0, false, {\n                            fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mobile-mockup-wrapper non-mobile\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mobile-mockup\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mobile-mockup-screen flex flex-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _scrollData__WEBPACK_IMPORTED_MODULE_2__.scrollData[currentImg].mobile_img,\n                            alt: \"\",\n                            className: \"mobile-screen-img slide-in-right\"\n                        }, _scrollData__WEBPACK_IMPORTED_MODULE_2__.scrollData[currentImg].mobile_img, false, {\n                            fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/timox/Desktop/projects/deziner/components/Mobilescroll/Mobilescroll.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_s(Mobilescroll, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Mobilescroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mobilescroll);\nvar _c;\n$RefreshReg$(_c, \"Mobilescroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZXNjcm9sbC9Nb2JpbGVzY3JvbGwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDYTtBQUNJOztBQUNsRCxJQUFNRyxZQUFZLEdBQUcsV0FBTTs7O0lBQ3pCLElBQW9DSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDSSxVQUFVLEdBQW1CSixHQUFXLEdBQTlCLEVBQUVLLGFBQWEsR0FBSUwsR0FBVyxHQUFmO0lBQ2hDLHFCQUNFLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUMxQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjswQkFDN0JOLHVEQUFjLENBQUMsU0FBQ1EsSUFBSSxFQUFFQyxDQUFDOzJCQUN0Qix5Q0FBeUM7a0NBQ3pDLDhEQUFDSixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0JBQW9CO2tDQUNqQyw0RUFBQ0wsOERBQVU7NEJBQUNPLElBQUksRUFBRUEsSUFBSTs0QkFBRUMsQ0FBQyxFQUFFQSxDQUFDOzRCQUFFTCxhQUFhLEVBQUVBLGFBQWE7Ozs7O2tDQUFJOzs7Ozs4QkFDMUQ7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7MEJBQy9DLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsZUFBZTs4QkFDNUIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7a0NBRXBELDRFQUFDSSxLQUFHOzRCQUNGQyxHQUFHLEVBQUVYLG1EQUFVLENBQUNHLFVBQVUsQ0FBQyxDQUFDUyxVQUFVOzRCQUV0Q0MsR0FBRyxFQUFDLEVBQUU7NEJBQ05QLFNBQVMsRUFBQyxrQ0FBa0M7MkJBRnZDTixtREFBVSxDQUFDRyxVQUFVLENBQUMsQ0FBQ1MsVUFBVTs7OztpQ0FHdEM7Ozs7OzZCQUNFOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDtHQTNCS1YsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBNkJsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9iaWxlc2Nyb2xsL01vYmlsZXNjcm9sbC5qc3g/NzJhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2Nyb2xsRGF0YSB9IGZyb20gXCIuLi8uLi9zY3JvbGxEYXRhXCI7XG5pbXBvcnQgU2NyZWVudGV4dCBmcm9tIFwiLi4vU2NyZWVudGV4dC9TY3JlZW50ZXh0XCI7XG5jb25zdCBNb2JpbGVzY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW1nLCBzZXRDdXJyZW50SW1nXSA9IHVzZVN0YXRlKDApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYXgtd2lkdGggbW9iaWxlc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbF9fd3JhcHBlclwiPlxuICAgICAgICB7c2Nyb2xsRGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LWtleVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsX19mdWxsc2NyZWVuXCI+XG4gICAgICAgICAgICA8U2NyZWVudGV4dCBpdGVtPXtpdGVtfSBpPXtpfSBzZXRDdXJyZW50SW1nPXtzZXRDdXJyZW50SW1nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbW9ja3VwLXdyYXBwZXIgbm9uLW1vYmlsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tb2NrdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tb2NrdXAtc2NyZWVuIGZsZXggZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtzY3JvbGxEYXRhW2N1cnJlbnRJbWddLm1vYmlsZV9pbWd9XG4gICAgICAgICAgICAgIGtleT17c2Nyb2xsRGF0YVtjdXJyZW50SW1nXS5tb2JpbGVfaW1nfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtc2NyZWVuLWltZyBzbGlkZS1pbi1yaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlc2Nyb2xsO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2Nyb2xsRGF0YSIsIlNjcmVlbnRleHQiLCJNb2JpbGVzY3JvbGwiLCJjdXJyZW50SW1nIiwic2V0Q3VycmVudEltZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpIiwiaW1nIiwic3JjIiwibW9iaWxlX2ltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Mobilescroll/Mobilescroll.jsx\n"));

/***/ })

});