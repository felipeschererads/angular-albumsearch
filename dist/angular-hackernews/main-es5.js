var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/album-box/album-box.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/album-box/album-box.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a mat-stroked-button routerLink=\"/detail/{{ album.id }}\" class=\"albumBoxItem\"\n  >{{ album.title }}\n</a>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/album-list/album-list.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/album-list/album-list.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-action-list>\n  <app-album-box\n    *ngFor=\"let album of albums; index as i\"\n    [album]=\"album\"\n  ></app-album-box>\n</mat-action-list>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/header/header.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/header/header.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"appHeader\">\n  <mat-toolbar-row>\n    <span>Albums</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/photo-list/photo-list.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/photo-list/photo-list.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"photoList\">\n  <div *ngFor=\"let photo of photos; index as i\" class=\"photoitem\">\n    <a href=\"#\" (click)=\"openDialog($event, photo)\">\n      <img [src]=\"photo.thumbnailUrl\" alt=\"\" />\n    </a>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/photo-view/photo-view.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/photo-view/photo-view.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <img src=\"{{ data.photo.url }}\" width=\"100%\" alt=\"\" />\n</div>\n<div>\n  <button mat-raised-button color=\"primary\" (click)=\"close()\">Fechar</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/search/search.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/search/search.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"searchBar\" color=\"primary\">\n  <mat-form-field class=\"inputsearch\">\n    <input matInput placeholder=\"Buscar album...\" (input)=\"doSearch($event)\" />\n  </mat-form-field>\n</mat-toolbar>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user-info/user-info.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user-info/user-info.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"userInfo\">\n  <div class=\"userItem\">\n    Nome: <strong>{{ user.name }}</strong>\n  </div>\n  <div class=\"userItem\">\n    E-mail: <strong>{{ user.email }}</strong>\n  </div>\n  <div class=\"userItem\">\n    Username: <strong>{{ user.username }}</strong>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail/detail.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail/detail.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"container\">\n  <button mat-flat-button color=\"primary\" routerLink=\"/\" aria-label=\"Voltar\">\n    <mat-icon>keyboard_arrow_left</mat-icon> Voltar\n  </button>\n\n  <h2>{{ album.title }}</h2>\n\n  <mat-card>\n    <mat-card-content>\n      <h4>Postado por:</h4>\n      <app-user-info [user]=\"user\"></app-user-info>\n    </mat-card-content>\n  </mat-card>\n\n  <h2>Fotos</h2>\n\n  <app-photo-list [photos]=\"photos\"></app-photo-list>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<app-search (searchInputEvent)=\"filterAlbuns($event)\"></app-search>\n\n<section class=\"container\">\n  <app-album-list [albums]=\"filteredAlbuns\"></app-album-list>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/detail/detail.component */ "./src/app/pages/detail/detail.component.ts");
            var routes = [
                {
                    path: "",
                    component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    pathMatch: "full"
                },
                {
                    path: "detail/:albumId",
                    component: _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
                },
                {
                    path: "**",
                    component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: "\n    <router-outlet></router-outlet>\n  "
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/detail/detail.component */ "./src/app/pages/detail/detail.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _features_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/header/header.component */ "./src/app/features/header/header.component.ts");
            /* harmony import */ var _features_album_list_album_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/album-list/album-list.component */ "./src/app/features/album-list/album-list.component.ts");
            /* harmony import */ var _features_album_box_album_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/album-box/album-box.component */ "./src/app/features/album-box/album-box.component.ts");
            /* harmony import */ var _features_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/user-info/user-info.component */ "./src/app/features/user-info/user-info.component.ts");
            /* harmony import */ var _features_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/photo-list/photo-list.component */ "./src/app/features/photo-list/photo-list.component.ts");
            /* harmony import */ var _features_photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/photo-view/photo-view.component */ "./src/app/features/photo-view/photo-view.component.ts");
            /* harmony import */ var _features_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/search/search.component */ "./src/app/features/search/search.component.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            // Angular Material
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
                        _features_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                        _features_album_list_album_list_component__WEBPACK_IMPORTED_MODULE_10__["AlbumListComponent"],
                        _features_album_box_album_box_component__WEBPACK_IMPORTED_MODULE_11__["AlbumBoxComponent"],
                        _features_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
                        _features_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_13__["PhotoListComponent"],
                        _features_photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_14__["PhotoViewComponent"],
                        _features_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                    entryComponents: [_features_photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_14__["PhotoViewComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/classes/Album.ts": 
        /*!**********************************!*\
          !*** ./src/app/classes/Album.ts ***!
          \**********************************/
        /*! exports provided: Album */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function () { return Album; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Album = /** @class */ (function () {
                function Album() {
                    this.id = null;
                    this.userId = null;
                    this.title = "";
                }
                return Album;
            }());
            /***/ 
        }),
        /***/ "./src/app/classes/User.ts": 
        /*!*********************************!*\
          !*** ./src/app/classes/User.ts ***!
          \*********************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                    this.id = null;
                    this.name = "";
                    this.username = "";
                    this.email = "";
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/features/album-box/album-box.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/features/album-box/album-box.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".albumBoxItem {\n  line-height: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  width: 100%;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWxidW0tYm94L0M6XFxBdWxhIEphaXNvbiBQb3NcXGFuZ3VsYXJcXGFuZ3VsYXItYWxidW1zZWFyY2gvc3JjXFxhcHBcXGZlYXR1cmVzXFxhbGJ1bS1ib3hcXGFsYnVtLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvYWxidW0tYm94L2FsYnVtLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hbGJ1bS1ib3gvYWxidW0tYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYnVtQm94SXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbiIsIi5hbGJ1bUJveEl0ZW0ge1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/features/album-box/album-box.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/features/album-box/album-box.component.ts ***!
          \***********************************************************/
        /*! exports provided: AlbumBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumBoxComponent", function () { return AlbumBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AlbumBoxComponent = /** @class */ (function () {
                function AlbumBoxComponent() {
                }
                return AlbumBoxComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AlbumBoxComponent.prototype, "album", void 0);
            AlbumBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-album-box",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/album-box/album-box.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-box.component.scss */ "./src/app/features/album-box/album-box.component.scss")).default]
                })
            ], AlbumBoxComponent);
            /***/ 
        }),
        /***/ "./src/app/features/album-list/album-list.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/features/album-list/album-list.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FsYnVtLWxpc3QvYWxidW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/features/album-list/album-list.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/features/album-list/album-list.component.ts ***!
          \*************************************************************/
        /*! exports provided: AlbumListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListComponent", function () { return AlbumListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AlbumListComponent = /** @class */ (function () {
                function AlbumListComponent() {
                }
                return AlbumListComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AlbumListComponent.prototype, "albums", void 0);
            AlbumListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-album-list",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/album-list/album-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-list.component.scss */ "./src/app/features/album-list/album-list.component.scss")).default]
                })
            ], AlbumListComponent);
            /***/ 
        }),
        /***/ "./src/app/features/header/header.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/features/header/header.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".appHeader {\n  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);\n  position: relative;\n  z-index: 1;\n}\n.appHeader .spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaGVhZGVyL0M6XFxBdWxhIEphaXNvbiBQb3NcXGFuZ3VsYXJcXGFuZ3VsYXItYWxidW1zZWFyY2gvc3JjXFxhcHBcXGZlYXR1cmVzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwSGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuIiwiLmFwcEhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYXBwSGVhZGVyIC5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/features/header/header.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/features/header/header.component.ts ***!
          \*****************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-header",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/features/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/features/photo-list/photo-list.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/features/photo-list/photo-list.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".photoList {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n.photoList > .photoitem {\n  width: 31%;\n}\n.photoList > .photoitem img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGhvdG8tbGlzdC9DOlxcQXVsYSBKYWlzb24gUG9zXFxhbmd1bGFyXFxhbmd1bGFyLWFsYnVtc2VhcmNoL3NyY1xcYXBwXFxmZWF0dXJlc1xccGhvdG8tbGlzdFxccGhvdG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcGhvdG8tbGlzdC9waG90by1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcGhvdG8tbGlzdC9waG90by1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gID4gLnBob3RvaXRlbSB7XG4gICAgd2lkdGg6IDMxJTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIi5waG90b0xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5waG90b0xpc3QgPiAucGhvdG9pdGVtIHtcbiAgd2lkdGg6IDMxJTtcbn1cbi5waG90b0xpc3QgPiAucGhvdG9pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/features/photo-list/photo-list.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/features/photo-list/photo-list.component.ts ***!
          \*************************************************************/
        /*! exports provided: PhotoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function () { return PhotoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo-view/photo-view.component */ "./src/app/features/photo-view/photo-view.component.ts");
            var PhotoListComponent = /** @class */ (function () {
                function PhotoListComponent(dialog) {
                    this.dialog = dialog;
                }
                PhotoListComponent.prototype.openDialog = function (e, photo) {
                    e.preventDefault();
                    var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
                    dialogConfig.disableClose = true;
                    dialogConfig.autoFocus = true;
                    dialogConfig.data = {
                        photo: photo
                    };
                    this.dialog.open(_photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_3__["PhotoViewComponent"], dialogConfig);
                };
                return PhotoListComponent;
            }());
            PhotoListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhotoListComponent.prototype, "photos", void 0);
            PhotoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-photo-list",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/photo-list/photo-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-list.component.scss */ "./src/app/features/photo-list/photo-list.component.scss")).default]
                })
            ], PhotoListComponent);
            /***/ 
        }),
        /***/ "./src/app/features/photo-view/photo-view.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/features/photo-view/photo-view.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Bob3RvLXZpZXcvcGhvdG8tdmlldy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/features/photo-view/photo-view.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/features/photo-view/photo-view.component.ts ***!
          \*************************************************************/
        /*! exports provided: PhotoViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoViewComponent", function () { return PhotoViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var PhotoViewComponent = /** @class */ (function () {
                function PhotoViewComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                PhotoViewComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PhotoViewComponent;
            }());
            PhotoViewComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PhotoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-photo-view",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/photo-view/photo-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-view.component.scss */ "./src/app/features/photo-view/photo-view.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhotoViewComponent);
            /***/ 
        }),
        /***/ "./src/app/features/search/search.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/features/search/search.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".searchBar {\n  font-size: 0.8rem;\n  padding-top: 0.5rem;\n}\n.searchBar .inputsearch {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2VhcmNoL0M6XFxBdWxhIEphaXNvbiBQb3NcXGFuZ3VsYXJcXGFuZ3VsYXItYWxidW1zZWFyY2gvc3JjXFxhcHBcXGZlYXR1cmVzXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hCYXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcblxuICAuaW5wdXRzZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIuc2VhcmNoQmFyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4uc2VhcmNoQmFyIC5pbnB1dHNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/features/search/search.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/features/search/search.component.ts ***!
          \*****************************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent() {
                    this.searchInputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                SearchComponent.prototype.doSearch = function (e) {
                    this.searchInputEvent.emit(e.target.value);
                };
                return SearchComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SearchComponent.prototype, "searchInputEvent", void 0);
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-search",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/features/search/search.component.scss")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/features/user-info/user-info.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/features/user-info/user-info.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".userInfo {\n  display: flex;\n  flex-direction: column;\n}\n.userInfo .userItem {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdXNlci1pbmZvL0M6XFxBdWxhIEphaXNvbiBQb3NcXGFuZ3VsYXJcXGFuZ3VsYXItYWxidW1zZWFyY2gvc3JjXFxhcHBcXGZlYXR1cmVzXFx1c2VyLWluZm9cXHVzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VySW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLnVzZXJJdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbiIsIi51c2VySW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udXNlckluZm8gLnVzZXJJdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/features/user-info/user-info.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/features/user-info/user-info.component.ts ***!
          \***********************************************************/
        /*! exports provided: UserInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () { return UserInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserInfoComponent = /** @class */ (function () {
                function UserInfoComponent() {
                }
                return UserInfoComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UserInfoComponent.prototype, "user", void 0);
            UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-user-info",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user-info/user-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.scss */ "./src/app/features/user-info/user-info.component.scss")).default]
                })
            ], UserInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/detail/detail.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/pages/detail/detail.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/detail/detail.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pages/detail/detail.component.ts ***!
          \**************************************************/
        /*! exports provided: DetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function () { return DetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_albums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/albums.service */ "./src/app/services/albums.service.ts");
            /* harmony import */ var _classes_Album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/Album */ "./src/app/classes/Album.ts");
            /* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/User */ "./src/app/classes/User.ts");
            var DetailComponent = /** @class */ (function () {
                function DetailComponent(route, albumsService) {
                    var _this = this;
                    this.route = route;
                    this.albumsService = albumsService;
                    this.album = new _classes_Album__WEBPACK_IMPORTED_MODULE_4__["Album"]();
                    this.user = new _classes_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
                    this.photos = [];
                    this.getData = function (albumId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.albumsService.getAlbum(albumId)];
                                case 1:
                                    _a.album = (_d.sent())[0];
                                    _b = this;
                                    return [4 /*yield*/, this.albumsService.getUser(this.album.userId)];
                                case 2:
                                    _b.user = (_d.sent())[0];
                                    _c = this;
                                    return [4 /*yield*/, this.albumsService.getAlbumPhotos(albumId)];
                                case 3:
                                    _c.photos = _d.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                }
                DetailComponent.prototype.ngOnInit = function () {
                    this.albumId = this.route.snapshot.params.albumId;
                    this.getData(this.albumId);
                };
                return DetailComponent;
            }());
            DetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_albums_service__WEBPACK_IMPORTED_MODULE_3__["AlbumsService"] }
            ]; };
            DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-detail",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail/detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/detail/detail.component.scss")).default]
                })
            ], DetailComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/pages/home/home.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_albums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/albums.service */ "./src/app/services/albums.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(albumsService) {
                    var _this = this;
                    this.albumsService = albumsService;
                    this.albums = [];
                    this.filteredAlbuns = this.albums;
                    this.filter = "";
                    this.filterAlbuns = function (word) {
                        _this.filteredAlbuns = _this.albums.filter(function (album) { return album.title.includes(word); });
                    };
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.albumsService.getAlbums().then(function (res) {
                        _this.albums = _this.filteredAlbuns = res;
                    });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_albums_service__WEBPACK_IMPORTED_MODULE_2__["AlbumsService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-home",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/services/albums.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/albums.service.ts ***!
          \********************************************/
        /*! exports provided: AlbumsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsService", function () { return AlbumsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AlbumsService = /** @class */ (function () {
                function AlbumsService(http) {
                    var _this = this;
                    this.http = http;
                    this._url = "https://jsonplaceholder.typicode.com";
                    this.getAlbums = function () { return _this.http.get(_this._url + "/albums").toPromise(); };
                    this.getAlbum = function (albumId) { return _this.http.get(_this._url + "/albums?id=" + albumId).toPromise(); };
                    this.getUser = function (userId) { return _this.http.get(_this._url + "/users?id=" + userId).toPromise(); };
                    this.getAlbumPhotos = function (albumId) { return _this.http
                        .get(_this._url + "/photos?albumId=" + albumId)
                        .toPromise(); };
                }
                return AlbumsService;
            }());
            AlbumsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AlbumsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], AlbumsService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Aula Jaison Pos\angular\angular-albumsearch\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map