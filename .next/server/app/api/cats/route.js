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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst API_URL = 'https://api.thecatapi.com/v1/images/search';\nasync function GET(request) {\n    try {\n        const urlParams = new URL(request.url);\n        const searchParams = urlParams.searchParams;\n        const limit = searchParams.get('limit') || '6';\n        const page = searchParams.get('page') || '0';\n        const headers = new Headers({\n            \"Content-Type\": \"application/json\",\n            \"x-api-key\": \"DEMO-API-KEY\"\n        });\n        const response = await fetch(`${API_URL}?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=${limit}`, {\n            method: 'GET',\n            headers: headers,\n            cache: 'no-store'\n        });\n        if (!response.ok) {\n            throw new Error(`Ошибка API: ${response.status}`);\n        }\n        const rawData = await response.json();\n        const formattedCats = rawData.map((cat)=>({\n                id: cat.id,\n                url: cat.url,\n                breeds: cat.breeds || []\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(formattedCats);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Не удалось загрузить котиков\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jYXRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBYzNDLE1BQU1DLFVBQVU7QUFFVCxlQUFlQyxJQUFJQyxPQUFnQjtJQUN4QyxJQUFJO1FBQ0YsTUFBTUMsWUFBWSxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBQ3JDLE1BQU1DLGVBQWVILFVBQVVHLFlBQVk7UUFDM0MsTUFBTUMsUUFBUUQsYUFBYUUsR0FBRyxDQUFDLFlBQVk7UUFDM0MsTUFBTUMsT0FBT0gsYUFBYUUsR0FBRyxDQUFDLFdBQVc7UUFFekMsTUFBTUUsVUFBVSxJQUFJQyxRQUFRO1lBQzFCLGdCQUFnQjtZQUNoQixhQUFhO1FBQ2Y7UUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLEdBQUdiLFFBQVEsdUVBQXVFLEVBQUVTLEtBQUssT0FBTyxFQUFFRixPQUFPLEVBQ3pHO1lBQ0VPLFFBQVE7WUFDUkosU0FBU0E7WUFDVEssT0FBTztRQUNUO1FBR0YsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNLENBQUMsWUFBWSxFQUFFTCxTQUFTTSxNQUFNLEVBQUU7UUFDbEQ7UUFFQSxNQUFNQyxVQUFVLE1BQU1QLFNBQVNRLElBQUk7UUFFbkMsTUFBTUMsZ0JBQWdDRixRQUFRRyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDMURDLElBQUlELElBQUlDLEVBQUU7Z0JBQ1ZuQixLQUFLa0IsSUFBSWxCLEdBQUc7Z0JBQ1pvQixRQUFRRixJQUFJRSxNQUFNLElBQUksRUFBRTtZQUMxQjtRQUVBLE9BQU8xQixxREFBWUEsQ0FBQ3FCLElBQUksQ0FBQ0M7SUFFM0IsRUFBRSxPQUFPSyxPQUFPO1FBQ2QsT0FBTzNCLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUN0QjtZQUFFTSxPQUFPO1FBQStCLEdBQ3hDO1lBQUVSLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9taXNoYS/QlNC+0LrRg9C80LXQvdGC0YsvZnJvbnRlbmQtY2hhbGxlbmdlL3NyYy9hcHAvYXBpL2NhdHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5pbnRlcmZhY2UgUmF3Q2F0RGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBicmVlZHM6IEFycmF5PHsgbmFtZTogc3RyaW5nIH0+O1xufVxuXG5pbnRlcmZhY2UgRm9ybWF0dGVkQ2F0IHtcbiAgaWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGJyZWVkczogQXJyYXk8eyBuYW1lOiBzdHJpbmcgfT47XG59XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXMvc2VhcmNoJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxOZXh0UmVzcG9uc2U8Rm9ybWF0dGVkQ2F0W10gfCB7IGVycm9yOiBzdHJpbmcgfT4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1cmxQYXJhbXMuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnN0IGxpbWl0ID0gc2VhcmNoUGFyYW1zLmdldCgnbGltaXQnKSB8fCAnNic7XG4gICAgY29uc3QgcGFnZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKSB8fCAnMCc7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIngtYXBpLWtleVwiOiBcIkRFTU8tQVBJLUtFWVwiXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7QVBJX1VSTH0/c2l6ZT1tZWQmbWltZV90eXBlcz1qcGcmZm9ybWF0PWpzb24maGFzX2JyZWVkcz10cnVlJm9yZGVyPVJBTkRPTSZwYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBjYWNoZTogJ25vLXN0b3JlJ1xuICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGDQntGI0LjQsdC60LAgQVBJOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBSYXdDYXREYXRhW107XG4gICAgXG4gICAgY29uc3QgZm9ybWF0dGVkQ2F0czogRm9ybWF0dGVkQ2F0W10gPSByYXdEYXRhLm1hcCgoY2F0KSA9PiAoe1xuICAgICAgaWQ6IGNhdC5pZCxcbiAgICAgIHVybDogY2F0LnVybCxcbiAgICAgIGJyZWVkczogY2F0LmJyZWVkcyB8fCBbXVxuICAgIH0pKTtcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZm9ybWF0dGVkQ2F0cyk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcItCd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC60L7RgtC40LrQvtCyXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiQVBJX1VSTCIsIkdFVCIsInJlcXVlc3QiLCJ1cmxQYXJhbXMiLCJVUkwiLCJ1cmwiLCJzZWFyY2hQYXJhbXMiLCJsaW1pdCIsImdldCIsInBhZ2UiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJyYXdEYXRhIiwianNvbiIsImZvcm1hdHRlZENhdHMiLCJtYXAiLCJjYXQiLCJpZCIsImJyZWVkcyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/cats/route.ts\n");

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