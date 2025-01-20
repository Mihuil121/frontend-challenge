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
exports.id = "app/api/cats/route";
exports.ids = ["app/api/cats/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcats%2Froute&page=%2Fapi%2Fcats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcats%2Froute.ts&appDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcats%2Froute&page=%2Fapi%2Fcats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcats%2Froute.ts&appDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_misha_frontend_challenge_src_app_api_cats_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/cats/route.ts */ \"(rsc)/./src/app/api/cats/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cats/route\",\n        pathname: \"/api/cats\",\n        filename: \"route\",\n        bundlePath: \"app/api/cats/route\"\n    },\n    resolvedPagePath: \"/home/misha/Документы/frontend-challenge/src/app/api/cats/route.ts\",\n    nextConfigOutput,\n    userland: _home_misha_frontend_challenge_src_app_api_cats_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjYXRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2F0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbWlzaGElMkYlRDAlOTQlRDAlQkUlRDAlQkElRDElODMlRDAlQkMlRDAlQjUlRDAlQkQlRDElODIlRDElOEIlMkZmcm9udGVuZC1jaGFsbGVuZ2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZtaXNoYSUyRiVEMCU5NCVEMCVCRSVEMCVCQSVEMSU4MyVEMCVCQyVEMCVCNSVEMCVCRCVEMSU4MiVEMSU4QiUyRmZyb250ZW5kLWNoYWxsZW5nZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL21pc2hhL9CU0L7QutGD0LzQtdC90YLRiy9mcm9udGVuZC1jaGFsbGVuZ2Uvc3JjL2FwcC9hcGkvY2F0cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2F0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NhdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NhdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9taXNoYS/QlNC+0LrRg9C80LXQvdGC0YsvZnJvbnRlbmQtY2hhbGxlbmdlL3NyYy9hcHAvYXBpL2NhdHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcats%2Froute&page=%2Fapi%2Fcats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcats%2Froute.ts&appDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/cats/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/cats/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst API_URL = 'https://cataas.com/api/cats';\nasync function GET(request) {\n    try {\n        const urlParams = new URL(request.url);\n        const searchParams = urlParams.searchParams;\n        const limit = searchParams.get('limit') || '6';\n        const page = searchParams.get('page') || '0';\n        const skipCount = Number(page) * Number(limit);\n        const response = await fetch(`${API_URL}?limit=${limit}&skip=${skipCount}`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            cache: 'no-store'\n        });\n        if (!response.ok) {\n            throw new Error(`Ошибка API: ${response.status}`);\n        }\n        const rawData = await response.json();\n        const formattedCats = rawData.map((cat)=>({\n                id: cat._id,\n                url: `https://cataas.com/cat/${cat._id}`,\n                breeds: []\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(formattedCats);\n    } catch (error) {\n        console.error(\"Произошла ошибка:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Не удалось загрузить котиков\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jYXRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBZTNDLE1BQU1DLFVBQVU7QUFFVCxlQUFlQyxJQUFJQyxPQUFnQjtJQUN4QyxJQUFJO1FBQ0YsTUFBTUMsWUFBWSxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBQ3JDLE1BQU1DLGVBQWVILFVBQVVHLFlBQVk7UUFDM0MsTUFBTUMsUUFBUUQsYUFBYUUsR0FBRyxDQUFDLFlBQVk7UUFDM0MsTUFBTUMsT0FBT0gsYUFBYUUsR0FBRyxDQUFDLFdBQVc7UUFDekMsTUFBTUUsWUFBWUMsT0FBT0YsUUFBUUUsT0FBT0o7UUFFeEMsTUFBTUssV0FBVyxNQUFNQyxNQUNyQixHQUFHYixRQUFRLE9BQU8sRUFBRU8sTUFBTSxNQUFNLEVBQUVHLFdBQVcsRUFDN0M7WUFDRUksUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxPQUFPO1FBQ1Q7UUFHRixJQUFJLENBQUNKLFNBQVNLLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sQ0FBQyxZQUFZLEVBQUVOLFNBQVNPLE1BQU0sRUFBRTtRQUNsRDtRQUVBLE1BQU1DLFVBQVUsTUFBTVIsU0FBU1MsSUFBSTtRQUVuQyxNQUFNQyxnQkFBZ0NGLFFBQVFHLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO2dCQUMxREMsSUFBSUQsSUFBSUUsR0FBRztnQkFDWHJCLEtBQUssQ0FBQyx1QkFBdUIsRUFBRW1CLElBQUlFLEdBQUcsRUFBRTtnQkFDeENDLFFBQVEsRUFBRTtZQUNaO1FBRUEsT0FBTzVCLHFEQUFZQSxDQUFDc0IsSUFBSSxDQUFDQztJQUUzQixFQUFFLE9BQU9NLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBTzdCLHFEQUFZQSxDQUFDc0IsSUFBSSxDQUN0QjtZQUFFTyxPQUFPO1FBQStCLEdBQ3hDO1lBQUVULFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9taXNoYS/QlNC+0LrRg9C80LXQvdGC0YsvZnJvbnRlbmQtY2hhbGxlbmdlL3NyYy9hcHAvYXBpL2NhdHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5pbnRlcmZhY2UgUmF3Q2F0RGF0YSB7XG4gIF9pZDogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICB1cGRhdGVkX2F0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBGb3JtYXR0ZWRDYXQge1xuICBpZDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgYnJlZWRzOiBBcnJheTx7IG5hbWU6IHN0cmluZyB9Pjtcbn1cblxuY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2NhdGFhcy5jb20vYXBpL2NhdHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPE5leHRSZXNwb25zZTxGb3JtYXR0ZWRDYXRbXSB8IHsgZXJyb3I6IHN0cmluZyB9Pj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVybFBhcmFtcy5zZWFyY2hQYXJhbXM7XG4gICAgY29uc3QgbGltaXQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdsaW1pdCcpIHx8ICc2JztcbiAgICBjb25zdCBwYWdlID0gc2VhcmNoUGFyYW1zLmdldCgncGFnZScpIHx8ICcwJztcbiAgICBjb25zdCBza2lwQ291bnQgPSBOdW1iZXIocGFnZSkgKiBOdW1iZXIobGltaXQpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke0FQSV9VUkx9P2xpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwQ291bnR9YCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXG4gICAgICB9XG4gICAgKTtcbiAgICBcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYNCe0YjQuNCx0LrQsCBBUEk6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIFJhd0NhdERhdGFbXTtcbiAgICBcbiAgICBjb25zdCBmb3JtYXR0ZWRDYXRzOiBGb3JtYXR0ZWRDYXRbXSA9IHJhd0RhdGEubWFwKChjYXQpID0+ICh7XG4gICAgICBpZDogY2F0Ll9pZCxcbiAgICAgIHVybDogYGh0dHBzOi8vY2F0YWFzLmNvbS9jYXQvJHtjYXQuX2lkfWAsXG4gICAgICBicmVlZHM6IFtdXG4gICAgfSkpO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmb3JtYXR0ZWRDYXRzKTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCLQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQutC+0YLQuNC60L7QslwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkFQSV9VUkwiLCJHRVQiLCJyZXF1ZXN0IiwidXJsUGFyYW1zIiwiVVJMIiwidXJsIiwic2VhcmNoUGFyYW1zIiwibGltaXQiLCJnZXQiLCJwYWdlIiwic2tpcENvdW50IiwiTnVtYmVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJyYXdEYXRhIiwianNvbiIsImZvcm1hdHRlZENhdHMiLCJtYXAiLCJjYXQiLCJpZCIsIl9pZCIsImJyZWVkcyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/cats/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcats%2Froute&page=%2Fapi%2Fcats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcats%2Froute.ts&appDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmisha%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2Ffrontend-challenge&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();