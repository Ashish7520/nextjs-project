"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about-us/[developer]",{

/***/ "./pages/about-us/[developer].js":
/*!***************************************!*\
  !*** ./pages/about-us/[developer].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Developer = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { developerId } = router.query;\n    const details = [\n        {\n            id: 1,\n            name: \"Yash\",\n            role: \"Senior Developer\"\n        },\n        {\n            id: \"2\",\n            name: \"Vaibhav\",\n            role: \"Backend Developer\"\n        },\n        {\n            id: \"3\",\n            name: \"Suresh\",\n            role: \"Frontend Developer\"\n        }\n    ];\n    const developer = details.find((dev)=>dev.id == developerId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: developer ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: developer.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\React JS\\\\Next Js\\\\nextjs-project\\\\pages\\\\about-us\\\\[developer].js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: developer.role\n                }, void 0, false, {\n                    fileName: \"D:\\\\React JS\\\\Next Js\\\\nextjs-project\\\\pages\\\\about-us\\\\[developer].js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\React JS\\\\Next Js\\\\nextjs-project\\\\pages\\\\about-us\\\\[developer].js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Developer doesn't exist\"\n        }, void 0, false, {\n            fileName: \"D:\\\\React JS\\\\Next Js\\\\nextjs-project\\\\pages\\\\about-us\\\\[developer].js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\React JS\\\\Next Js\\\\nextjs-project\\\\pages\\\\about-us\\\\[developer].js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Developer, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Developer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Developer);\nvar _c;\n$RefreshReg$(_c, \"Developer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC11cy9bZGV2ZWxvcGVyXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLFlBQVk7O0lBQ2hCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLFdBQVcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRXBDLE1BQU1DLFVBQVU7UUFDZDtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBUUMsTUFBTTtRQUFtQjtRQUNoRDtZQUFFRixJQUFJO1lBQUtDLE1BQU07WUFBV0MsTUFBTTtRQUFvQjtRQUN0RDtZQUFFRixJQUFJO1lBQUtDLE1BQU07WUFBVUMsTUFBTTtRQUFxQjtLQUN2RDtJQUVELE1BQU1DLFlBQVlKLFFBQVFLLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJTCxFQUFFLElBQUlIO0lBRWxELHFCQUNFLDhEQUFDUztrQkFDRUgsMEJBQ0MsOERBQUNHOzs4QkFDQyw4REFBQ0M7OEJBQUlKLFVBQVVGLElBQUk7Ozs7Ozs4QkFDbkIsOERBQUNPOzhCQUFHTCxVQUFVRCxJQUFJOzs7Ozs7Ozs7OztzQ0FHcEIsOERBQUNLO3NCQUFHOzs7Ozs7Ozs7OztBQUlaO0dBeEJNWjs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBMEJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LXVzL1tkZXZlbG9wZXJdLmpzP2E5OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBEZXZlbG9wZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkZXZlbG9wZXJJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBkZXRhaWxzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogXCJZYXNoXCIsIHJvbGU6IFwiU2VuaW9yIERldmVsb3BlclwiIH0sXHJcbiAgICB7IGlkOiBcIjJcIiwgbmFtZTogXCJWYWliaGF2XCIsIHJvbGU6IFwiQmFja2VuZCBEZXZlbG9wZXJcIiB9LFxyXG4gICAgeyBpZDogXCIzXCIsIG5hbWU6IFwiU3VyZXNoXCIsIHJvbGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBkZXZlbG9wZXIgPSBkZXRhaWxzLmZpbmQoKGRldikgPT4gZGV2LmlkID09IGRldmVsb3BlcklkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkZXZlbG9wZXIgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT57ZGV2ZWxvcGVyLm5hbWV9PC9oMT5cclxuICAgICAgICAgIDxwPntkZXZlbG9wZXIucm9sZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGgxPkRldmVsb3BlciBkb2Vzbid0IGV4aXN0PC9oMT5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXZlbG9wZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJEZXZlbG9wZXIiLCJyb3V0ZXIiLCJkZXZlbG9wZXJJZCIsInF1ZXJ5IiwiZGV0YWlscyIsImlkIiwibmFtZSIsInJvbGUiLCJkZXZlbG9wZXIiLCJmaW5kIiwiZGV2IiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about-us/[developer].js\n"));

/***/ })

});