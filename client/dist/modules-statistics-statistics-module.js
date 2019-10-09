(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-statistics-statistics-module"],{

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Statistics main works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");



var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        this.appliedFilters.subscribe(function (res) {
            console.log('inside the new route ', res);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainComponent.prototype, "appliedFilters", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-statistics-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/statistics-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/statistics-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: StatisticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function() { return StatisticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts");




var routes = [
    {
        path: 'home',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }
];
var StatisticsRoutingModule = /** @class */ (function () {
    function StatisticsRoutingModule() {
    }
    StatisticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StatisticsRoutingModule);
    return StatisticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/statistics.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/statistics.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/modules/algo-runner/modules/statistics/statistics-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts");





var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _statistics_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatisticsRoutingModule"]
            ],
            exports: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-statistics-statistics-module.js.map