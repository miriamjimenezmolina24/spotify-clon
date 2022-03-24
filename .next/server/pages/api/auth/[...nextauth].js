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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "spotify-web-api-node":
/*!***************************************!*\
  !*** external "spotify-web-api-node" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("spotify-web-api-node");

/***/ }),

/***/ "inspector":
/*!****************************!*\
  !*** external "inspector" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("inspector");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(api)/./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"LOGIN_URL\": () => (/* binding */ LOGIN_URL)\n/* harmony export */ });\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spotify-web-api-node */ \"spotify-web-api-node\");\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst scopes = [\n    \"user-read-email\",\n    \"playlist-read-private\",\n    \"playlist-read-collaborative\",\n    \"user-read-email\",\n    \"streaming\",\n    \"user-library-read\",\n    \"user-read-private\",\n    \"user-top-read\",\n    \"user-read-playback-state\",\n    \"user-modify-playback-state\",\n    \"user-read-currently-playing\",\n    \"user-read-recently-played\",\n    \"user-follow-read\", \n].join(\",\");\nconst params = {\n    scope: scopes\n};\nconst queryParamString = new url__WEBPACK_IMPORTED_MODULE_1__.URLSearchParams(params);\nconst LOGIN_URL = \"https://accounts.spotify.com/authorize?\" + queryParamString.toString();\nconst spotifyApi = new (spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default())({\n    clientId: \"c2757ff16ee94953b861206a32031198\",\n    clientSecret: \"030920313742474080511d5bac666688\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spotifyApi);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDWDtBQUVyQyxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ1osQ0FBaUI7SUFDakIsQ0FBdUI7SUFDdkIsQ0FBNkI7SUFDN0IsQ0FBaUI7SUFDakIsQ0FBVztJQUNYLENBQW1CO0lBQ25CLENBQW1CO0lBQ25CLENBQWU7SUFDZixDQUEwQjtJQUMxQixDQUE0QjtJQUM1QixDQUE2QjtJQUM3QixDQUEyQjtJQUMzQixDQUFrQjtBQUN0QixDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFHO0FBRVYsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNaQyxLQUFLLEVBQUVILE1BQU07QUFDakIsQ0FBQztBQUVELEtBQUssQ0FBQ0ksZ0JBQWdCLEdBQUcsR0FBRyxDQUFDTCxnREFBZSxDQUFDRyxNQUFNO0FBRW5ELEtBQUssQ0FBQ0csU0FBUyxHQUFHLENBQXlDLDJDQUFHRCxnQkFBZ0IsQ0FBQ0UsUUFBUTtBQUV2RixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNULDZEQUFhLENBQUMsQ0FBQztJQUNsQ1UsUUFBUSxFQUFFQyxrQ0FBaUM7SUFDM0NHLFlBQVksRUFBRUgsa0NBQXFDO0FBQ3ZELENBQUM7QUFFRCxpRUFBZUYsVUFBVSxFQUFDO0FBRVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3BvdGlmeS5qcz85ZGZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gXCJzcG90aWZ5LXdlYi1hcGktbm9kZVwiO1xyXG5pbXBvcnQgeyBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwidXJsXCI7XHJcblxyXG5jb25zdCBzY29wZXMgPSBbXHJcbiAgICBcInVzZXItcmVhZC1lbWFpbFwiLFxyXG4gICAgXCJwbGF5bGlzdC1yZWFkLXByaXZhdGVcIixcclxuICAgIFwicGxheWxpc3QtcmVhZC1jb2xsYWJvcmF0aXZlXCIsXHJcbiAgICBcInVzZXItcmVhZC1lbWFpbFwiLFxyXG4gICAgXCJzdHJlYW1pbmdcIixcclxuICAgIFwidXNlci1saWJyYXJ5LXJlYWRcIixcclxuICAgIFwidXNlci1yZWFkLXByaXZhdGVcIixcclxuICAgIFwidXNlci10b3AtcmVhZFwiLFxyXG4gICAgXCJ1c2VyLXJlYWQtcGxheWJhY2stc3RhdGVcIixcclxuICAgIFwidXNlci1tb2RpZnktcGxheWJhY2stc3RhdGVcIixcclxuICAgIFwidXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nXCIsXHJcbiAgICBcInVzZXItcmVhZC1yZWNlbnRseS1wbGF5ZWRcIixcclxuICAgIFwidXNlci1mb2xsb3ctcmVhZFwiLFxyXG5dLmpvaW4oXCIsXCIpO1xyXG5cclxuY29uc3QgcGFyYW1zID0ge1xyXG4gICAgc2NvcGU6IHNjb3BlcyxcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5UGFyYW1TdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyk7XHJcblxyXG5jb25zdCBMT0dJTl9VUkwgPSBcImh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplP1wiICsgcXVlcnlQYXJhbVN0cmluZy50b1N0cmluZygpO1xyXG5cclxuY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5V2ViQXBpKHtcclxuICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcG90aWZ5QXBpO1xyXG5cclxuZXhwb3J0IHtMT0dJTl9VUkx9OyJdLCJuYW1lcyI6WyJTcG90aWZ5V2ViQXBpIiwiVVJMU2VhcmNoUGFyYW1zIiwic2NvcGVzIiwiam9pbiIsInBhcmFtcyIsInNjb3BlIiwicXVlcnlQYXJhbVN0cmluZyIsIkxPR0lOX1VSTCIsInRvU3RyaW5nIiwic3BvdGlmeUFwaSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/spotify.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inspector */ \"inspector\");\n/* harmony import */ var inspector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inspector__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/spotify */ \"(api)/./lib/spotify.js\");\n\n\n\n// import { refreshAccessToken } from \"spotify-web-api-node/src/server-methods\";\n\nasync function refreshAccessToken(token) {\n    try {\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setAccessToken(token.accessToken);\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setRefreshToken(token.refreshToken);\n        const { body: refreshedToken  } = await _lib_spotify__WEBPACK_IMPORTED_MODULE_3__[\"default\"].refreshAccessToken();\n        console.log('REFRESHED TOKEN IS', refreshedToken);\n        var _refresh_token;\n        return {\n            ...token,\n            accessToken: refreshedToken.access_token,\n            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,\n            // Replace if new one came back else fall back to old refresh token\n            refreshToken: (_refresh_token = refreshedToken.refresh_token) !== null && _refresh_token !== void 0 ? _refresh_token : token.refreshToken\n        };\n    } catch (error) {\n        console.log(error);\n        return {\n            ...token,\n            error: 'RefreshAccessTokenError'\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: \"c2757ff16ee94953b861206a32031198\",\n            clientSecret: \"030920313742474080511d5bac666688\",\n            authorization: _lib_spotify__WEBPACK_IMPORTED_MODULE_3__.LOGIN_URL\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    pages: {\n        signIn: '/login'\n    },\n    callbacks: {\n        async jwt ({ token , account , user  }) {\n            // Initial sign in\n            if (account && user) {\n                return {\n                    ...token,\n                    accessToken: account.access_token,\n                    refreshToken: account.refresh_token,\n                    userName: account.providerAccountId,\n                    accessTokenExpires: account.expires_at * 1000\n                };\n            }\n            // Return previous token if the access token has not expired yet\n            if (Date.now() < token.accessTokenExpires) {\n                console.log('EXISTING ACCES TOKEN IS VALID');\n                return token;\n            }\n            // Access token has expired, so we need to refresh it...\n            console.log('ACCESS TOKEN HAS EXPIRED, REFRESHING...');\n            return await refreshAccessToken(token);\n        },\n        async session ({ session , token  }) {\n            session.user.accessToken = token.accessToken;\n            session.user.refreshToken = token.refreshToken;\n            session.user.userName = token.userName;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ0g7QUFDeUI7QUFDekQsRUFBZ0Y7QUFDcEI7ZUFFN0NLLGtCQUFrQixDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxHQUFHLENBQUMsQ0FBQztRQUNESCxtRUFBeUIsQ0FBQ0csS0FBSyxDQUFDRSxXQUFXO1FBQzNDTCxvRUFBMEIsQ0FBQ0csS0FBSyxDQUFDSSxZQUFZO1FBRTdDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUMsY0FBYyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNULHVFQUE2QjtRQUNwRVUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBb0IscUJBQUVGLGNBQWM7WUFPOUJBLGNBQTRCO1FBTDlDLE1BQU0sQ0FBQyxDQUFDO2VBQ0ROLEtBQUs7WUFDUkUsV0FBVyxFQUFFSSxjQUFjLENBQUNHLFlBQVk7WUFDeENDLGtCQUFrQixFQUFFQyxJQUFJLENBQUNDLEdBQUcsR0FBR04sY0FBYyxDQUFDTyxVQUFVLEdBQUcsSUFBSTtZQUMvRCxFQUFtRTtZQUNuRVQsWUFBWSxHQUFFRSxjQUE0QixHQUE1QkEsY0FBYyxDQUFDUSxhQUFhLGNBQTVCUixjQUE0QixjQUE1QkEsY0FBNEIsR0FBSU4sS0FBSyxDQUFDSSxZQUFZO1FBQ3BFLENBQUM7SUFDTCxDQUFDLENBQUMsS0FBSyxFQUFFVyxLQUFLLEVBQUUsQ0FBQztRQUNiUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sS0FBSztRQUNqQixNQUFNLENBQUMsQ0FBQztlQUNEZixLQUFLO1lBQ1JlLEtBQUssRUFBRSxDQUF5QjtRQUNwQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZXBCLGdEQUFRLENBQUMsQ0FBQztJQUNyQixFQUFpRDtJQUNqRHFCLFNBQVMsRUFBRSxDQUFDO1FBQ1JwQixrRUFBZSxDQUFDLENBQUM7WUFDYnFCLFFBQVEsRUFBRUMsa0NBQWlDO1lBQzNDRyxZQUFZLEVBQUVILGtDQUFxQztZQUNuREssYUFBYSxFQUFFekIsbURBQVM7UUFDNUIsQ0FBQztJQUVMLENBQUM7SUFDRDBCLE1BQU0sRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNNLFVBQVU7SUFDOUJDLEtBQUssRUFBRSxDQUFDO1FBQ0pDLE1BQU0sRUFBRSxDQUFRO0lBQ3BCLENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7Y0FDRkMsR0FBRyxFQUFDLENBQUMsQ0FBQzdCLEtBQUssR0FBRThCLE9BQU8sR0FBRUMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pDLEVBQWtCO1lBQ2xCLEVBQUUsRUFBRUQsT0FBTyxJQUFJQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLENBQUM7dUJBQ0QvQixLQUFLO29CQUNSRSxXQUFXLEVBQUU0QixPQUFPLENBQUNyQixZQUFZO29CQUNqQ0wsWUFBWSxFQUFFMEIsT0FBTyxDQUFDaEIsYUFBYTtvQkFDbkNrQixRQUFRLEVBQUVGLE9BQU8sQ0FBQ0csaUJBQWlCO29CQUNuQ3ZCLGtCQUFrQixFQUFFb0IsT0FBTyxDQUFDSSxVQUFVLEdBQUcsSUFBSTtnQkFDakQsQ0FBQztZQUNMLENBQUM7WUFFRCxFQUFnRTtZQUNoRSxFQUFFLEVBQUV2QixJQUFJLENBQUNDLEdBQUcsS0FBS1osS0FBSyxDQUFDVSxrQkFBa0IsRUFBRSxDQUFDO2dCQUN4Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBK0I7Z0JBQzNDLE1BQU0sQ0FBQ1IsS0FBSztZQUNoQixDQUFDO1lBRUQsRUFBd0Q7WUFDeERPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXlDO1lBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUNULGtCQUFrQixDQUFDQyxLQUFLO1FBQ3pDLENBQUM7Y0FFS21DLE9BQU8sRUFBQyxDQUFDLENBQUNBLE9BQU8sR0FBRW5DLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQm1DLE9BQU8sQ0FBQ0osSUFBSSxDQUFDN0IsV0FBVyxHQUFHRixLQUFLLENBQUNFLFdBQVc7WUFDNUNpQyxPQUFPLENBQUNKLElBQUksQ0FBQzNCLFlBQVksR0FBR0osS0FBSyxDQUFDSSxZQUFZO1lBQzlDK0IsT0FBTyxDQUFDSixJQUFJLENBQUNDLFFBQVEsR0FBR2hDLEtBQUssQ0FBQ2dDLFFBQVE7WUFDdEMsTUFBTSxDQUFDRyxPQUFPO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb24gfSBmcm9tICdpbnNwZWN0b3InXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCBTcG90aWZ5UHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9zcG90aWZ5J1xyXG4vLyBpbXBvcnQgeyByZWZyZXNoQWNjZXNzVG9rZW4gfSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLW5vZGUvc3JjL3NlcnZlci1tZXRob2RzXCI7XHJcbmltcG9ydCBzcG90aWZ5QXBpLCB7IExPR0lOX1VSTCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zcG90aWZ5J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEFjY2Vzc1Rva2VuKHRva2VuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNwb3RpZnlBcGkuc2V0QWNjZXNzVG9rZW4odG9rZW4uYWNjZXNzVG9rZW4pXHJcbiAgICAgICAgc3BvdGlmeUFwaS5zZXRSZWZyZXNoVG9rZW4odG9rZW4ucmVmcmVzaFRva2VuKVxyXG5cclxuICAgICAgICBjb25zdCB7IGJvZHk6IHJlZnJlc2hlZFRva2VuIH0gPSBhd2FpdCBzcG90aWZ5QXBpLnJlZnJlc2hBY2Nlc3NUb2tlbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JFRlJFU0hFRCBUT0tFTiBJUycsIHJlZnJlc2hlZFRva2VuKVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi50b2tlbixcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHJlZnJlc2hlZFRva2VuLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVzOiBEYXRlLm5vdyArIHJlZnJlc2hlZFRva2VuLmV4cGlyZXNfaW4gKiAxMDAwLCAvLyAxIGhvdXIgYXMgMzYwMCByZXR1cm5zIGZyb20gc3BvdGlmeSBBUElcclxuICAgICAgICAgICAgLy8gUmVwbGFjZSBpZiBuZXcgb25lIGNhbWUgYmFjayBlbHNlIGZhbGwgYmFjayB0byBvbGQgcmVmcmVzaCB0b2tlblxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hlZFRva2VuLnJlZnJlc2hfdG9rZW4gPz8gdG9rZW4ucmVmcmVzaFRva2VuLFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4udG9rZW4sXHJcbiAgICAgICAgICAgIGVycm9yOiAnUmVmcmVzaEFjY2Vzc1Rva2VuRXJyb3InLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgU3BvdGlmeVByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRCxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVULFxyXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBMT0dJTl9VUkwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICAgIF0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICBwYWdlczoge1xyXG4gICAgICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQsIHVzZXIgfSkge1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsIHNpZ24gaW5cclxuICAgICAgICAgICAgaWYgKGFjY291bnQgJiYgdXNlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50b2tlbixcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjb3VudC5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBhY2NvdW50LnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVzOiBhY2NvdW50LmV4cGlyZXNfYXQgKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gcHJldmlvdXMgdG9rZW4gaWYgdGhlIGFjY2VzcyB0b2tlbiBoYXMgbm90IGV4cGlyZWQgeWV0XHJcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIDwgdG9rZW4uYWNjZXNzVG9rZW5FeHBpcmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVhJU1RJTkcgQUNDRVMgVE9LRU4gSVMgVkFMSUQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFjY2VzcyB0b2tlbiBoYXMgZXhwaXJlZCwgc28gd2UgbmVlZCB0byByZWZyZXNoIGl0Li4uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBQ0NFU1MgVE9LRU4gSEFTIEVYUElSRUQsIFJFRlJFU0hJTkcuLi4nKVxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVmcmVzaEFjY2Vzc1Rva2VuKHRva2VuKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuXHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5yZWZyZXNoVG9rZW4gPSB0b2tlbi5yZWZyZXNoVG9rZW5cclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJOYW1lID0gdG9rZW4udXNlck5hbWVcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuIl0sIm5hbWVzIjpbIlNlc3Npb24iLCJOZXh0QXV0aCIsIlNwb3RpZnlQcm92aWRlciIsInNwb3RpZnlBcGkiLCJMT0dJTl9VUkwiLCJyZWZyZXNoQWNjZXNzVG9rZW4iLCJ0b2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJzZXRSZWZyZXNoVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJib2R5IiwicmVmcmVzaGVkVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiYWNjZXNzX3Rva2VuIiwiYWNjZXNzVG9rZW5FeHBpcmVzIiwiRGF0ZSIsIm5vdyIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwiZXJyb3IiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInNlY3JldCIsIkpXVF9TRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsImFjY291bnQiLCJ1c2VyIiwidXNlck5hbWUiLCJwcm92aWRlckFjY291bnRJZCIsImV4cGlyZXNfYXQiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();