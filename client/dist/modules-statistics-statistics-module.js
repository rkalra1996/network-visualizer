(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-statistics-statistics-module"],{

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"data.length\" >\r\n  <li *ngFor=\"let item of data;let i=index\" >\r\n    <p [ngClass]=\"{'highlight' : selectedIndex === i || (firstVisit && i === 0)}\" (click)=\"emitData(item,i)\">{{i+1}}. {{item}}</p>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none; }\n\nli {\n  padding-top: 30px;\n  height: 7rem;\n  font-size: 1.6rem; }\n\np {\n  cursor: pointer;\n  color: #7F7F7F; }\n\n.highlight {\n  font-weight: bold; }\n\n@media only screen and (max-width: 1100px) {\n  li {\n    font-size: 1.3rem;\n    height: 5rem; } }\n\n@media only screen and (max-width: 850px) {\n  li {\n    height: 4rem;\n    font-size: 1.1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvYWxnby1saXN0L0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9tb2R1bGVzXFxhbGdvLXJ1bm5lclxcbW9kdWxlc1xcc3RhdGlzdGljc1xcY29tcG9uZW50c1xcYWxnby1saXN0XFxhbGdvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBRVEsaUJBQWlCLEVBQUE7O0FBR3pCO0VBQ0k7SUFDSSxpQkFBaUI7SUFDakIsWUFBWSxFQUFBLEVBQ2Y7O0FBRUg7RUFDRTtJQUNJLFlBQVk7SUFDWixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL2FsZ28tbGlzdC9hbGdvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxubGl7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcbnAge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM3RjdGN0Y7XHJcbn1cclxuLmhpZ2hsaWdodHtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIGxpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgbGl7XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AlgoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoListComponent", function() { return AlgoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlgoListComponent = /** @class */ (function () {
    function AlgoListComponent() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AlgoListComponent.prototype.ngOnInit = function () {
        console.log('List of algos', this.data);
    };
    // Emitting the name of algo selected
    AlgoListComponent.prototype.emitData = function (data, index) {
        this.firstVisit = false;
        this.selectedIndex = index;
        this.clicked.emit(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlgoListComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlgoListComponent.prototype, "firstVisit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlgoListComponent.prototype, "clicked", void 0);
    AlgoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algo-list',
            template: __webpack_require__(/*! ./algo-list.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html"),
            styles: [__webpack_require__(/*! ./algo-list.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlgoListComponent);
    return AlgoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<hr>\r\n<!--\r\n<algo-runner-statistical-content [data]=\"selectedAlgo\"></algo-runner-statistical-content>\r\n<hr>\r\n<algo-runner-statistical-form></algo-runner-statistical-form> -->"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL2RldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service */ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts");




// tslint:disable-next-line: max-line-length

var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(activatedRoute, statisticSideBarData) {
        this.activatedRoute = activatedRoute;
        this.statisticSideBarData = statisticSideBarData;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; })).subscribe(function (data) {
            _this.initializeData(data);
        });
    };
    /**
     * Initializes data
     * @param data Algo name from route
     * @description selects a particular algo object from the list of all algorithms
     */
    DetailsPageComponent.prototype.initializeData = function (data) {
        var _this = this;
        this.statisticSideBarData.algoList$.subscribe(function (list) {
            if (data === undefined) {
                _this.selectedAlgo = list[0];
            }
            else {
                list.forEach(function (item, i) {
                    if (data === (list[i].title.replace(/\s/g, '')).toLowerCase()) {
                        _this.selectedAlgo = list[i];
                    }
                });
            }
        });
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'algo-runner-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_4__["StatisticSidebarDataService"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sideBar\"><app-statistic-sidebar></app-statistic-sidebar></div>\r\n<algo-runner-statistical-toolbar></algo-runner-statistical-toolbar>\r\n<div class=\"algoDetails\"><router-outlet name='Details'></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algoDetails {\n  width: 80%;\n  float: right; }\n\n@media only screen and (max-width: 1100px) {\n  .algoDetails {\n    width: 75%; } }\n\n@media only screen and (max-width: 850px) {\n  .algoDetails {\n    min-width: 69%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvbWFpbi9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcYWxnby1ydW5uZXJcXG1vZHVsZXNcXHN0YXRpc3RpY3NcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUVoQjtFQUNJO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7O0FBRUg7RUFDRTtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6Im1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZ29EZXRhaWxze1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgLmFsZ29EZXRhaWxzIHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmFsZ29EZXRhaWxzIHtcclxuICAgICAgbWluLXdpZHRoOiA2OSU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

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
            // tslint:disable-next-line: component-selector
            selector: 'algo-runner-statistics-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"circularBtn\" (click)=\"routeToFilters()\"><i class=\"fas fa-filter\"></i></button>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circularBtn {\n  font-size: 1.6rem;\n  width: 44px;\n  margin-right: 14px;\n  border-radius: 50%;\n  height: 43px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvcm91dGUtYnV0dG9uL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9tb2R1bGVzXFxhbGdvLXJ1bm5lclxcbW9kdWxlc1xcc3RhdGlzdGljc1xcY29tcG9uZW50c1xccm91dGUtYnV0dG9uXFxyb3V0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFHVCxxQ0FBb0QsRUFBQSIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL3JvdXRlLWJ1dHRvbi9yb3V0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY3VsYXJCdG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RouteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteButtonComponent", function() { return RouteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouteButtonComponent = /** @class */ (function () {
    function RouteButtonComponent(router) {
        this.router = router;
    }
    RouteButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * Routes to filters
     * @description navigate to home page
     */
    RouteButtonComponent.prototype.routeToFilters = function () {
        this.router.navigate(['']);
    };
    RouteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'statistics-route-button',
            template: __webpack_require__(/*! ./route-button.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.html"),
            styles: [__webpack_require__(/*! ./route-button.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteButtonComponent);
    return RouteButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistic-sidebar\">\r\n <div class=\"statistic-sidebar-header\">\r\n   <p class=\"statistic-sidebar-heading\">Statistics</p>\r\n </div>\r\n <div class=\"statistic-sidebar-algos\">\r\n <!--  <app-algo-list [data]=\"sideBarAlgoData\" (clicked)=\"viewDetail($event)\" [firstVisit]=\"true\"></app-algo-list> -->\r\n </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statistic-sidebar {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 90vh;\n  background: #fff; }\n\n.statistic-sidebar-header {\n  background-color: #808080; }\n\n.statistic-sidebar-heading {\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  padding-top: 1.5rem;\n  color: white;\n  height: 10vh; }\n\n@media only screen and (max-width: 1100px) {\n  .statistic-sidebar {\n    min-width: 25%; }\n  .statistic-sidebar-heading {\n    font-size: 1.5rem; } }\n\n@media only screen and (max-width: 850px) {\n  .statistic-sidebar {\n    min-width: 31%; }\n  .statistic-sidebar-heading {\n    font-size: 1.3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljLXNpZGViYXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXGFsZ28tcnVubmVyXFxtb2R1bGVzXFxzdGF0aXN0aWNzXFxjb21wb25lbnRzXFxzdGF0aXN0aWMtc2lkZWJhclxcc3RhdGlzdGljLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWhCO0VBQ0k7SUFDRSxjQUFjLEVBQUE7RUFFaEI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFFSDtFQUNFO0lBQ0UsY0FBYyxFQUFBO0VBR2hCO0lBQ0ksaUJBQWlCLEVBQUEsRUFDcEIiLCJmaWxlIjoibW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWMtc2lkZWJhci9zdGF0aXN0aWMtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0aXN0aWMtc2lkZWJhcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTMlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5zdGF0aXN0aWMtc2lkZWJhci1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xyXG59XHJcbi5zdGF0aXN0aWMtc2lkZWJhci1oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAuc3RhdGlzdGljLXNpZGViYXIge1xyXG4gICAgICBtaW4td2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIC5zdGF0aXN0aWMtc2lkZWJhci1oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAuc3RhdGlzdGljLXNpZGViYXIge1xyXG4gICAgICBtaW4td2lkdGg6IDMxJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXRpc3RpYy1zaWRlYmFyLWhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StatisticSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticSidebarComponent", function() { return StatisticSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service */ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// tslint:disable-next-line:max-line-length


var StatisticSidebarComponent = /** @class */ (function () {
    function StatisticSidebarComponent(statisticSidebarData, router, activatedRoute) {
        this.statisticSidebarData = statisticSidebarData;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sideBarAlgoData = [];
    }
    StatisticSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieving list of algorithms
        this.statisticSidebarData.algoList$.subscribe(function (data) {
            data.forEach(function (element) {
                var title = element.title;
                _this.sideBarAlgoData.push(title);
            });
        });
    };
    /**
     * Views detail
     * @param data name of selected algo
     * @description route to details page component
     */
    StatisticSidebarComponent.prototype.viewDetail = function (data) {
        this.selectedAlgoName = (data.replace(/\s/g, '')).toLowerCase();
        this.router.navigate([{ outlets: { Details: ['', this.selectedAlgoName] } }], { relativeTo: this.activatedRoute });
    };
    StatisticSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistic-sidebar',
            template: __webpack_require__(/*! ./statistic-sidebar.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./statistic-sidebar.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["StatisticSidebarDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StatisticSidebarComponent);
    return StatisticSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(data?.description && data?.imageUrl) ;else ComingSoon\" class=\"statisticalDetails\">\r\n    <div class=\"staticData\">\r\n        <h1>\r\n            {{data?.title}}\r\n        </h1>\r\n        <div class=\"staticText\" [innerHTML]=\"data?.description\"></div>\r\n    </div>\r\n    <div class=\"sampleImg\">\r\n        <h1>\r\n            Sample Output\r\n        </h1>\r\n        <div class=\"imgContainer\">\r\n            <img [src]=\"data?.imageUrl\" style=\"height: auto;width:100%\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template  #ComingSoon>\r\n        <div class=\"statisticalDetails\">\r\n                <p>Coming Soon!</p>\r\n            </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statisticalDetails {\n  height: 429px; }\n\n.staticData {\n  position: absolute;\n  width: 46%; }\n\n::ng-deep .staticText p {\n  font-size: 1.5rem;\n  color: #7F7F7F; }\n\n.sampleImg {\n  float: right;\n  width: 42%; }\n\n.staticText {\n  padding: 1.5rem; }\n\nh1 {\n  padding-left: 1.375rem; }\n\n.staticText {\n  height: 300px;\n  overflow-y: auto; }\n\n.imgContainer {\n  float: right;\n  margin-right: 35px; }\n\np {\n  text-align: center;\n  font-size: 5rem;\n  color: #7F7F7F;\n  padding-top: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtY29udGVudC9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcYWxnby1ydW5uZXJcXG1vZHVsZXNcXHN0YXRpc3RpY3NcXGNvbXBvbmVudHNcXHN0YXRpc3RpY2FsLWNvbnRlbnRcXHN0YXRpc3RpY2FsLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFZDtFQUVRLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0MsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL3N0YXRpc3RpY2FsLWNvbnRlbnQvc3RhdGlzdGljYWwtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0aXN0aWNhbERldGFpbHN7XHJcbiAgICBoZWlnaHQ6IDQyOXB4O1xyXG59XHJcbi5zdGF0aWNEYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ2JTtcclxufVxyXG46Om5nLWRlZXAgLnN0YXRpY1RleHR7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBjb2xvcjogIzdGN0Y3RjtcclxuICAgIH1cclxufVxyXG5cclxuLnNhbXBsZUltZ3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MiU7XHJcbn1cclxuLnN0YXRpY1RleHR7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuaDF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMzc1cmVtO1xyXG59XHJcbi5zdGF0aWNUZXh0e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmltZ0NvbnRhaW5lcntcclxuIGZsb2F0OiByaWdodDtcclxuIG1hcmdpbi1yaWdodDogMzVweDsgICBcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgY29sb3I6ICM3RjdGN0Y7XHJcbiAgICBwYWRkaW5nLXRvcDogOCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: StatisticalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalContentComponent", function() { return StatisticalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service */ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts");


// tslint:disable-next-line: max-line-length

var StatisticalContentComponent = /** @class */ (function () {
    function StatisticalContentComponent(statisticSideBarData) {
        this.statisticSideBarData = statisticSideBarData;
    }
    StatisticalContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticalContentComponent.prototype, "data", void 0);
    StatisticalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'algo-runner-statistical-content',
            template: __webpack_require__(/*! ./statistical-content.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html"),
            styles: [__webpack_require__(/*! ./statistical-content.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["StatisticSidebarDataService"]])
    ], StatisticalContentComponent);
    return StatisticalContentComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  statistical-form works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL3N0YXRpc3RpY2FsLWZvcm0vc3RhdGlzdGljYWwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: StatisticalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalFormComponent", function() { return StatisticalFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticalFormComponent = /** @class */ (function () {
    function StatisticalFormComponent() {
    }
    StatisticalFormComponent.prototype.ngOnInit = function () {
    };
    StatisticalFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-statistical-form',
            template: __webpack_require__(/*! ./statistical-form.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.html"),
            styles: [__webpack_require__(/*! ./statistical-form.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticalFormComponent);
    return StatisticalFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbarbuttons\">\r\n    <div style=\"float: right\">\r\n        <div class=\"routeBtn\">\r\n            <statistics-route-button></statistics-route-button>\r\n        </div>\r\n        <div class=\"statisticalToolBar\">\r\n\r\n            <algo-runner-toolbar></algo-runner-toolbar>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarbuttons {\n  height: 70px;\n  margin-right: 2%;\n  padding-top: 18px; }\n\n.routeBtn, .statisticalToolBar {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtdG9vbGJhci9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcYWxnby1ydW5uZXJcXG1vZHVsZXNcXHN0YXRpc3RpY3NcXGNvbXBvbmVudHNcXHN0YXRpc3RpY2FsLXRvb2xiYXJcXHN0YXRpc3RpY2FsLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNDLFdBQVcsRUFBQSIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL3N0YXRpc3RpY2FsLXRvb2xiYXIvc3RhdGlzdGljYWwtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyYnV0dG9uc3tcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMThweDtcclxufVxyXG4ucm91dGVCdG4sLnN0YXRpc3RpY2FsVG9vbEJhcntcclxuIGZsb2F0OiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: StatisticalToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalToolbarComponent", function() { return StatisticalToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticalToolbarComponent = /** @class */ (function () {
    function StatisticalToolbarComponent() {
    }
    StatisticalToolbarComponent.prototype.ngOnInit = function () {
    };
    StatisticalToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'algo-runner-statistical-toolbar',
            template: __webpack_require__(/*! ./statistical-toolbar.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./statistical-toolbar.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticalToolbarComponent);
    return StatisticalToolbarComponent;
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
/* harmony import */ var _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details-page/details-page.component */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts");





var routes = [
    {
        path: 'home',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: '',
                component: _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"],
                outlet: 'Details'
            },
            {
                path: '/:id',
                component: _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"],
                outlet: 'Details'
            }
        ]
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
/* harmony import */ var _components_statistic_sidebar_statistic_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/statistic-sidebar/statistic-sidebar.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.ts");
/* harmony import */ var _components_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/algo-list/algo-list.component */ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.ts");
/* harmony import */ var _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/details-page/details-page.component */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts");
/* harmony import */ var _components_statistical_toolbar_statistical_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/statistical-toolbar/statistical-toolbar.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.ts");
/* harmony import */ var _components_statistical_content_statistical_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/statistical-content/statistical-content.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.ts");
/* harmony import */ var _components_statistical_form_statistical_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/statistical-form/statistical-form.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.ts");
/* harmony import */ var _algo_runner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../algo-runner.module */ "./src/app/modules/algo-runner/algo-runner.module.ts");
/* harmony import */ var _components_route_button_route_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/route-button/route-button.component */ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.ts");













var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_statistic_sidebar_statistic_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["StatisticSidebarComponent"], _components_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_6__["AlgoListComponent"], _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_7__["DetailsPageComponent"], _components_statistical_toolbar_statistical_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["StatisticalToolbarComponent"],
                _components_statistical_content_statistical_content_component__WEBPACK_IMPORTED_MODULE_9__["StatisticalContentComponent"], _components_statistical_form_statistical_form_component__WEBPACK_IMPORTED_MODULE_10__["StatisticalFormComponent"], _components_route_button_route_button_component__WEBPACK_IMPORTED_MODULE_12__["RouteButtonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _statistics_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatisticsRoutingModule"],
                _algo_runner_module__WEBPACK_IMPORTED_MODULE_11__["AlgoRunnerModule"]
            ],
            exports: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: StatisticSidebarDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticSidebarDataService", function() { return StatisticSidebarDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StatisticSidebarDataService = /** @class */ (function () {
    function StatisticSidebarDataService() {
        this.algoList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.algoList$ = this.algoList.asObservable();
        /* listOfAlgo = ['Shortest Path', 'Top Connected Node', 'Top Interacting Node', 'Network Sentiments',
        'Recommended Skills', 'Recommended Nodes', 'Nodes Centrality'];
         */
        this.listOfAlgo = [{ title: 'Shortest Path', description: "<p>The Shortest Path algorithm calculates the shortest (weighted)\npath between a pair of nodes. In this category, Dijkstra\u2019s algorithm is the most well known.</p>\n <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>",
                imageUrl: "../../../../../assets/shortest_path.png" },
            { title: 'Top Connected Node', description: "<p>Top Connected Node measures the number of incoming and outgoing\nrelationships from a node.</p>\n<p>The Top Connected Node algorithm can help us find popular nodes in a graph.</p>\n<p>Degree centrality is an important component of any attempt to determine the most\nimportant people on a social network. For example, in BrandWatch\u2019s most influential men and\n women on Twitter 2017 the top 5 people in each category have over 40m followers each.</p>\n<p>Weighted degree centrality has been used to help separate fraudsters from legitimate users of an\nonline auction. The weighted centrality for fraudsters is significantly higher because they tend to\n collude with each other to artificially increase the price of items. Read more in Two Step graph-based semi-supervised\n  Learning for Online Auction Fraud Detection</p>\n<p></p>",
                imageUrl: "../../../../../assets/top_connected_node.png" },
            { title: 'Top Interacting Node', description: "",
                imageUrl: "" },
            { title: 'Network Sentiments', description: "",
                imageUrl: "" },
            { title: 'Recommended Skills', description: "",
                imageUrl: "" },
            { title: 'Recommended Nodes', description: "",
                imageUrl: "" },
            { title: 'Nodes Centrality', description: "",
                imageUrl: "" }];
        this.algoList.next(this.listOfAlgo);
    }
    StatisticSidebarDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticSidebarDataService);
    return StatisticSidebarDataService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-statistics-statistics-module.js.map