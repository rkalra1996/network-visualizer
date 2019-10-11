(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-statistics-statistics-module"],{

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"data.length\" >\n  <li *ngFor=\"let item of data;let i=index\" >\n    <p [ngClass]=\"{'highlight' : selectedIndex === i || (firstVisit && i === 0)}\" (click)=\"emitData(item,i)\">{{i+1}}. {{item}}</p>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none; }\n\nli {\n  padding-top: 30px;\n  height: 7rem;\n  font-size: 1.6rem; }\n\np {\n  cursor: pointer;\n  color: #7F7F7F; }\n\n.highlight {\n  font-weight: bold; }\n\n@media only screen and (max-width: 1100px) {\n  li {\n    font-size: 1.3rem;\n    height: 5rem; } }\n\n@media only screen and (max-width: 850px) {\n  li {\n    height: 4rem;\n    font-size: 1.1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9hbGdvLWxpc3QvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFsZ28tcnVubmVyXFxtb2R1bGVzXFxzdGF0aXN0aWNzXFxjb21wb25lbnRzXFxhbGdvLWxpc3RcXGFsZ28tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFFUSxpQkFBaUIsRUFBQTs7QUFHekI7RUFDSTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZLEVBQUEsRUFDZjs7QUFFSDtFQUNFO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9hbGdvLWxpc3QvYWxnby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmxpe1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5wIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjN0Y3RjdGO1xyXG59XHJcbi5oaWdobGlnaHR7XHJcbiAgICBcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBsaXtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIGxpe1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9Il19 */"

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
        console.log("List of algos", this.data);
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

module.exports = "<algo-runner-statistical-toolbar></algo-runner-statistical-toolbar>\n<algo-runner-statistical-content [data]=\"name\"></algo-runner-statistical-content>\n<algo-runner-statistical-form></algo-runner-statistical-form>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

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




var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; })).subscribe(function (data) {
            _this.initializeData(data);
        });
    };
    DetailsPageComponent.prototype.initializeData = function (data) {
        this.name = data;
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<div class=\"sideBar\"><app-statistic-sidebar></app-statistic-sidebar></div>\r\n<div class=\"algoDetails\"><router-outlet name='Details'></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algoDetails {\n  width: 80%;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9tYWluL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhbGdvLXJ1bm5lclxcbW9kdWxlc1xcc3RhdGlzdGljc1xcY29tcG9uZW50c1xcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGdvRGV0YWlsc3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

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

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistic-sidebar\">\n <div class=\"statistic-sidebar-header\">\n   <p class=\"statistic-sidebar-heading\">Statistics</p>\n </div>\n <div class=\"statistic-sidebar-algos\">\n  <app-algo-list [data]=\"sideBarAlgoData\" (clicked)=\"viewDetail($event)\" [firstVisit]=\"true\"></app-algo-list>\n </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statistic-sidebar {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 90vh;\n  background: #fff; }\n\n.statistic-sidebar-header {\n  background-color: #808080; }\n\n.statistic-sidebar-heading {\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  padding-top: 1.5rem;\n  color: white;\n  height: 10vh; }\n\n@media only screen and (max-width: 1100px) {\n  .statistic-sidebar {\n    min-width: 25%; }\n  .statistic-sidebar-heading {\n    font-size: 1.5rem; } }\n\n@media only screen and (max-width: 850px) {\n  .statistic-sidebar {\n    min-width: 31%; }\n  .statistic-sidebar-heading {\n    font-size: 1.3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWMtc2lkZWJhci9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWxnby1ydW5uZXJcXG1vZHVsZXNcXHN0YXRpc3RpY3NcXGNvbXBvbmVudHNcXHN0YXRpc3RpYy1zaWRlYmFyXFxzdGF0aXN0aWMtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFaEI7RUFDSTtJQUNFLGNBQWMsRUFBQTtFQUVoQjtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCOztBQUVIO0VBQ0U7SUFDRSxjQUFjLEVBQUE7RUFHaEI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljLXNpZGViYXIvc3RhdGlzdGljLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGlzdGljLXNpZGViYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc3RhdGlzdGljLXNpZGViYXItaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcclxufVxyXG4uc3RhdGlzdGljLXNpZGViYXItaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTB2aDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgLnN0YXRpc3RpYy1zaWRlYmFyIHtcclxuICAgICAgbWluLXdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAuc3RhdGlzdGljLXNpZGViYXItaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLnN0YXRpc3RpYy1zaWRlYmFyIHtcclxuICAgICAgbWluLXdpZHRoOiAzMSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGF0aXN0aWMtc2lkZWJhci1oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

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




var StatisticSidebarComponent = /** @class */ (function () {
    function StatisticSidebarComponent(statisticSidebarData, router, activatedRoute) {
        this.statisticSidebarData = statisticSidebarData;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    StatisticSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieving list of algorithms
        this.statisticSidebarData.algoList$.subscribe(function (data) { return _this.sideBarAlgoData = data; });
    };
    // Retrieving selected algo
    StatisticSidebarComponent.prototype.viewDetail = function (data) {
        this.selectedAlgoName = data.replace(/\s/g, "");
        this.router.navigate([{ outlets: { Details: ['', this.selectedAlgoName] } }], { relativeTo: this.activatedRoute });
    };
    StatisticSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistic-sidebar',
            template: __webpack_require__(/*! ./statistic-sidebar.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./statistic-sidebar.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["StatisticSidebarDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<div class=\"statisticalDetails\">\nStatic Data of {{data}}\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statisticalDetails {\n  height: 423px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWNhbC1jb250ZW50L0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhbGdvLXJ1bm5lclxcbW9kdWxlc1xcc3RhdGlzdGljc1xcY29tcG9uZW50c1xcc3RhdGlzdGljYWwtY29udGVudFxcc3RhdGlzdGljYWwtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtY29udGVudC9zdGF0aXN0aWNhbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpc3RpY2FsRGV0YWlsc3tcclxuICAgIGhlaWdodDogNDIzcHg7XHJcbn0iXX0= */"

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


var StatisticalContentComponent = /** @class */ (function () {
    function StatisticalContentComponent() {
    }
    StatisticalContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticalContentComponent.prototype, "data", void 0);
    StatisticalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-statistical-content',
            template: __webpack_require__(/*! ./statistical-content.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html"),
            styles: [__webpack_require__(/*! ./statistical-content.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<p>\n  statistical-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtZm9ybS9zdGF0aXN0aWNhbC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

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

module.exports = "<div class=\"statisticalToolBar\">Toolbar</div>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statisticalToolBar {\n  height: 96px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWNhbC10b29sYmFyL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhbGdvLXJ1bm5lclxcbW9kdWxlc1xcc3RhdGlzdGljc1xcY29tcG9uZW50c1xcc3RhdGlzdGljYWwtdG9vbGJhclxcc3RhdGlzdGljYWwtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtdG9vbGJhci9zdGF0aXN0aWNhbC10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpc3RpY2FsVG9vbEJhcntcclxuICAgIGhlaWdodDogOTZweDtcclxufSJdfQ== */"

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











var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_statistic_sidebar_statistic_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["StatisticSidebarComponent"], _components_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_6__["AlgoListComponent"], _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_7__["DetailsPageComponent"], _components_statistical_toolbar_statistical_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["StatisticalToolbarComponent"], _components_statistical_content_statistical_content_component__WEBPACK_IMPORTED_MODULE_9__["StatisticalContentComponent"], _components_statistical_form_statistical_form_component__WEBPACK_IMPORTED_MODULE_10__["StatisticalFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _statistics_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatisticsRoutingModule"]
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
        this._algoList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.algoList$ = this._algoList.asObservable();
        this.listOfAlgo = ['Shortest Path', 'Top Connected Node', 'Top Interacting Node', 'Network Sentiments',
            'Recommended Skills', 'Recommended Nodes', 'Nodes Centrality'];
        this._algoList.next(this.listOfAlgo);
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