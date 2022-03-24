"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Miriam\\\\Desktop\\\\App\\\\spotify\\\\spotify\\\\pages\\\\login.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Miriam\\\\Desktop\\\\App\\\\spotify\\\\spotify\\\\pages\\\\login.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"C:\\\\Users\\\\Miriam\\\\Desktop\\\\App\\\\spotify\\\\spotify\\\\pages\\\\login.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Miriam\\\\Desktop\\\\App\\\\spotify\\\\spotify\\\\pages\\\\login.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO1NBRTdDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0IsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FDb0I7O3dGQUM5QkMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQVc7Z0JBQUNFLEdBQUcsRUFBQyxDQUFpQztnQkFBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7OztZQUN0RUMsTUFBTSxDQUFDQyxNQUFNLENBQUNQLFNBQVMsRUFBRVEsR0FBRyxFQUFFQyxRQUFRLCtFQUNsQ1IsQ0FBRzswR0FDQ1MsQ0FBTTt3QkFBQ1IsU0FBUyxFQUFDLENBQTBDO3dCQUN4RFMsT0FBTyxNQUFRYix1REFBTSxDQUFDVyxRQUFRLENBQUNHLEVBQUUsRUFBRSxDQUFDO2dDQUFDQyxXQUFXLEVBQUUsQ0FBRzs0QkFBQyxDQUFDOzs7NEJBQ3BELENBQ1E7NEJBQUNKLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7OzttQkFKdkJMLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7Ozs7Ozs7O0FBVXZDLENBQUM7QUFFRCxpRUFBZWYsS0FBSyxFQUFDO0FBRWQsZUFBZWdCLGtCQUFrQixHQUFHLENBQUM7SUFDeEMsS0FBSyxDQUFDZixTQUFTLEdBQUcsS0FBSyxDQUFDSCw2REFBWTtJQUNwQyxNQUFNLENBQUMsQ0FBQztRQUNKbUIsS0FBSyxFQUFFLENBQUM7WUFDSmhCLFNBQVM7UUFDYixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oeyBwcm92aWRlcnMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrXHJcbiAgICAgICAgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNTIgbWItNVwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS85eGxcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm92aWRlci5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjMThEODYwXSB0ZXh0LXdoaXRlIHAtNSByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQsIHsgY2FsbGJhY2tVcmw6IFwiL1wiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVycyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJMb2dpbiIsInByb3ZpZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwiY2FsbGJhY2tVcmwiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();