(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/algo-runner/algo-runner.module": [
		"./src/app/modules/algo-runner/algo-runner.module.ts"
	],
	"./modules/dashboard-v2/dashboard-v2.module": [
		"./src/app/modules/dashboard-v2/dashboard-v2.module.ts"
	],
	"./modules/statistics/statistics.module": [
		"./src/app/modules/algo-runner/modules/statistics/statistics.module.ts",
		"modules-statistics-statistics-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'algorithm',
        loadChildren: './modules/algo-runner/algo-runner.module#AlgoRunnerModule'
    },
    {
        path: '',
        loadChildren: './modules/dashboard-v2/dashboard-v2.module#DashboardModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\r\n<router-outlet></router-outlet>\r\n<!-- <app-header></app-header>\r\n<div class=\"row main-body\">\r\n    <div class=\"col-2 p-0\">\r\n        <app-sidebar (eventClicked)=\"childEventClicked($event)\"></app-sidebar>\r\n    </div>\r\n    <div class=\"col-10 p-0\">\r\n        <app-graph-visualizer [event]=\"clickedEvent\"></app-graph-visualizer>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-body {\n  height: 89%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm9keSB7XHJcbiAgICBoZWlnaHQ6IDg5JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'network-visualizer';
    }
    AppComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shell/shell.module */ "./src/app/modules/shell/shell.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_custom_material_components_snackbar_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/custom-material/components/snackbar/snackbar/snackbar.component */ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.ts");
/* harmony import */ var _modules_redux_redux_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/redux/redux.module */ "./src/app/modules/redux/redux.module.ts");
/* harmony import */ var _modules_dashboard_v2_dashboard_v2_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/dashboard-v2/dashboard-v2.module */ "./src/app/modules/dashboard-v2/dashboard-v2.module.ts");











// import redux for state management


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _modules_custom_material_components_snackbar_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_redux_redux_module__WEBPACK_IMPORTED_MODULE_11__["ReduxModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_7__["SuiModule"],
                _modules_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"],
                _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _modules_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _modules_dashboard_v2_dashboard_v2_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/algo-runner-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/algo-runner/algo-runner-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AlgoRunnerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoRunnerRoutingModule", function() { return AlgoRunnerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/costing-modal/costing-modal.component */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/components/main/main.component.ts");





var routes = [
    {
        path: 'costing',
        component: _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_3__["CostingModalComponent"]
    },
    {
        path: 'statistics',
        loadChildren: './modules/statistics/statistics.module#StatisticsModule'
    },
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }
];
var AlgoRunnerRoutingModule = /** @class */ (function () {
    function AlgoRunnerRoutingModule() {
    }
    AlgoRunnerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlgoRunnerRoutingModule);
    return AlgoRunnerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/algo-runner.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/algo-runner/algo-runner.module.ts ***!
  \***********************************************************/
/*! exports provided: AlgoRunnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoRunnerModule", function() { return AlgoRunnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _algo_runner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algo-runner-routing.module */ "./src/app/modules/algo-runner/algo-runner-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/components/main/main.component.ts");
/* harmony import */ var _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/costing-modal/costing-modal.component */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.ts");
/* harmony import */ var _services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");
/* harmony import */ var ng2_semantic_ui_dist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-semantic-ui/dist */ "./node_modules/ng2-semantic-ui/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_modal_row_renderer_modal_row_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal-row-renderer/modal-row-renderer.component */ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.ts");












var AlgoRunnerModule = /** @class */ (function () {
    function AlgoRunnerModule() {
    }
    AlgoRunnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_5__["CostingModalComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _components_modal_row_renderer_modal_row_renderer_component__WEBPACK_IMPORTED_MODULE_11__["ModalRowRendererComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng2_semantic_ui_dist__WEBPACK_IMPORTED_MODULE_8__["SuiModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"],
                ng2_semantic_ui_dist__WEBPACK_IMPORTED_MODULE_8__["SuiSelectModule"],
                _algo_runner_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlgoRunnerRoutingModule"]
            ],
            exports: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"]],
            providers: [_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_7__["ToolbarSharedService"]]
        })
    ], AlgoRunnerModule);
    return AlgoRunnerModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title align-center\" id=\"exampleModalCenterTitle\">Add Property Cost</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <ng-container *ngFor=\"let key of modalDisplayRows\">\r\n            <algo-runner-modal-row-renderer [labelName]=\"key\" [labelDropDown]=\"modalDisplayObject[key]\" (selectedDropDown)=\"onSelect($event)\"></algo-runner-modal-row-renderer>\r\n          </ng-container>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-item {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvY29tcG9uZW50cy9jb3N0aW5nLW1vZGFsL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9tb2R1bGVzXFxhbGdvLXJ1bm5lclxcY29tcG9uZW50c1xcY29zdGluZy1tb2RhbFxcY29zdGluZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6Im1vZHVsZXMvYWxnby1ydW5uZXIvY29tcG9uZW50cy9jb3N0aW5nLW1vZGFsL2Nvc3RpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24taXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CostingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostingModalComponent", function() { return CostingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var CostingModalComponent = /** @class */ (function () {
    function CostingModalComponent() {
        this.nodeTypesArray = [];
        this.nodePropertiesArray = [];
        this.relationTypesArray = [];
        this.modalDisplayObject = {};
        this.modalDisplayRows = [];
    }
    /**
     * Sets modal data
     * @description The function will update the modal info if sent by the parent
     */
    CostingModalComponent.prototype.setModalData = function () {
        var _this = this;
        if (this.modalData.hasOwnProperty('nodes') && this.modalData.nodes.hasOwnProperty('types')) {
            this.modalDisplayObject['Node Type'] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.modalData.nodes['types']);
        }
        if (this.modalData.hasOwnProperty('nodes') && this.modalData.nodes.hasOwnProperty('properties')) {
            // this.nodePropertiesArray = _.cloneDeep(this.modalData.nodes['properties']);
            this.modalDisplayObject['Node Properties'] = this.extractProperties(this.modalData.nodes['properties']);
        }
        if (this.modalData.hasOwnProperty('relations') && this.modalData.nodes.hasOwnProperty('types')) {
            this.modalDisplayObject['Relation Type'] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.modalData.nodes['types']);
        }
        this.modalDisplayObject['Relation Direction'] = ['In', 'Out', 'Both'];
        Object.keys(this.modalDisplayObject).forEach(function (key) { return _this.modalDisplayRows.push(key); });
        this.modalDisplayRows = lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](this.modalDisplayRows);
    };
    CostingModalComponent.prototype.ngOnInit = function () {
    };
    CostingModalComponent.prototype.extractProperties = function (arrayOfObjects) {
        if (arrayOfObjects && arrayOfObjects.constructor === Object) {
            return Object.keys(arrayOfObjects);
        }
        else {
            return [];
        }
    };
    CostingModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.modalData.currentValue !== changes.modalData.previousValue) {
            // to be called only when the the modalData variable has been updated
            this.setModalData();
        }
    };
    CostingModalComponent.prototype.selectedDropDown = function (event) {
        console.log('selected dropdown details', event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CostingModalComponent.prototype, "modalData", void 0);
    CostingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-costing-modal',
            template: __webpack_require__(/*! ./costing-modal.component.html */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.html"),
            styles: [__webpack_require__(/*! ./costing-modal.component.scss */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CostingModalComponent);
    return CostingModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/main/main.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/main/main.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/algo-runner/components/main/main.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/main/main.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/main/main.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/main/main.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/algo-runner/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/algo-runner/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <label for=\"typeahead-basic\" class=\"costingKey\">{{labelName}}</label>\r\n    <input \r\n    id=\"typeahead-basic\" type=\"text\" \r\n    class=\"form-control DropdownContainer\" (ngModelChange)=\"onDropdownChange($event)\" \r\n    [ngbTypeahead]=\"search\"\r\n    (focus)=\"focus$.next($event.target.value)\"\r\n    #instance=\"ngbTypeahead\"\r\n    />\r\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  width: 100%;\n  margin: 10px 0; }\n\n.costingKey, .DropdownContainer {\n  flex: 1; }\n\n.costingKey {\n  padding-left: 15px; }\n\n.DropdownContainer {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvY29tcG9uZW50cy9tb2RhbC1yb3ctcmVuZGVyZXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXGFsZ28tcnVubmVyXFxjb21wb25lbnRzXFxtb2RhbC1yb3ctcmVuZGVyZXJcXG1vZGFsLXJvdy1yZW5kZXJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdsQjtFQUNJLE9BQU8sRUFBQTs7QUFHWDtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJtb2R1bGVzL2FsZ28tcnVubmVyL2NvbXBvbmVudHMvbW9kYWwtcm93LXJlbmRlcmVyL21vZGFsLXJvdy1yZW5kZXJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5jb3N0aW5nS2V5LCAuRHJvcGRvd25Db250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmNvc3RpbmdLZXkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uRHJvcGRvd25Db250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModalRowRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRowRendererComponent", function() { return ModalRowRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var ModalRowRendererComponent = /** @class */ (function () {
    function ModalRowRendererComponent() {
        var _this = this;
        this.labelName = null;
        this.labelDropDown = null;
        this.dependentOn = null;
        this.selectedDropDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this.focus$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.labelDropDown
                : _this.labelDropDown.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
    }
    ModalRowRendererComponent.prototype.ngOnInit = function () {
    };
    ModalRowRendererComponent.prototype.onDropdownChange = function (event, label) {
        if (label === void 0) { label = ''; }
        // send the selected value out
        console.log({ key: this.labelName, value: event.target.value });
        this.selectedDropDown.emit({ key: label, value: event.target.value });
    };
    ModalRowRendererComponent.prototype.clickEvents = function ($event, typeaheadInstance) {
        if (typeaheadInstance.isPopupOpen()) {
            this.click$.next($event.target.value);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalRowRendererComponent.prototype, "labelName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalRowRendererComponent.prototype, "labelDropDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalRowRendererComponent.prototype, "dependentOn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalRowRendererComponent.prototype, "selectedDropDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"])
    ], ModalRowRendererComponent.prototype, "instance", void 0);
    ModalRowRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-modal-row-renderer',
            template: __webpack_require__(/*! ./modal-row-renderer.component.html */ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.html"),
            styles: [__webpack_require__(/*! ./modal-row-renderer.component.scss */ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalRowRendererComponent);
    return ModalRowRendererComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/toolbar/toolbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Toolbar contains the statistics and costing buttons-->\r\n<button class=\"circularBtn\" (click)=\"openCostingModal()\"><i class=\"fas fa-dollar-sign\"></i></button>\r\n<button class=\"circularBtn\" (click)=\"initiateStatistics()\"><i class=\"fas fa-chart-bar\"></i></button>\r\n\r\n<!--costing modal to open only when user clicks on costing-->\r\n<algo-runner-costing-modal [modalData]=\"nodeRelDataObject\"></algo-runner-costing-modal>"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/toolbar/toolbar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 14px; }\n\n.circularBtn {\n  font-size: 1.5rem;\n  width: 44px;\n  border-radius: 50%;\n  height: 42px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n.circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n\n.circularBtn:focus {\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWxnby1ydW5uZXIvY29tcG9uZW50cy90b29sYmFyL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9tb2R1bGVzXFxhbGdvLXJ1bm5lclxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBR1QscUNBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoibW9kdWxlcy9hbGdvLXJ1bm5lci9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQgOiAxNHB4O1xyXG59XHJcblxyXG4uY2lyY3VsYXJCdG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbn1cclxuXHJcbi5jaXJjdWxhckJ0bjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmNpcmN1bGFyQnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/toolbar/toolbar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");





var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(router, toolbarShrdSrvc) {
        this.router = router;
        this.toolbarShrdSrvc = toolbarShrdSrvc;
        this.nodeRelDataObject = {};
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.toolbarShrdSrvc.nodeRelationsDetailsEvent.subscribe(function (NRData) {
            console.log('recieved in the toolbar component', NRData);
        }, function (err) {
            console.log(err);
        });
        $('#exampleModalCenter').on('hidden.bs.modal', function (hiddenEvent) {
            console.log('costing modal hidden');
        });
        // retrieve the nodeRelation details via static variable
        this.nodeRelDataObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.toolbarShrdSrvc.nodeRelationDetailsData);
    };
    /**
     * Opens costing modal
     * @description To open the bootstrap modal assigned for costing modal
     */
    ToolbarComponent.prototype.openCostingModal = function () {
        $(function () {
            $('#exampleModalCenter').modal('show');
        });
    };
    /**
     * Initiates statistics
     * @description To redirect to the /statistics/home page where statistics workflow will start
     */
    ToolbarComponent.prototype.initiateStatistics = function () {
        this.router.navigate(['/statistics', 'home']);
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarSharedService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ToolbarSharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSharedService", function() { return ToolbarSharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ToolbarSharedService = /** @class */ (function () {
    function ToolbarSharedService() {
        this.sidebarFilterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sidebarFiltersEvent = this.sidebarFilterSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.nodeRelationDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nodeRelationsDetailsEvent = this.nodeRelationDetailsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.nodeRelationDetailsVar = {};
    }
    /**
     * Sends recent filters
     * @description To send the filter object selected by the user in the sidebar
     * @param recentFilterData
     */
    ToolbarSharedService.prototype.sendRecentFilters = function (recentFilterData) {
        console.log('Sending side bar filters data as ', recentFilterData);
        this.sidebarFilterSubject.next(recentFilterData);
    };
    /**
     * Sends node relation details
     * @param nodeRelationObject
     */
    ToolbarSharedService.prototype.sendNodeRelationDetails = function (nodeRelationObject) {
        console.log('Sending node and relations details', nodeRelationObject);
        this.nodeRelationDetailsSubject.next(nodeRelationObject);
    };
    /**
     * Sends node relation details static
     * @param nodeRelationObject
     */
    ToolbarSharedService.prototype.sendNodeRelationDetailsStatic = function (nodeRelationObject) {
        console.log('Sending node and relations details', nodeRelationObject);
        this.nodeRelationDetailsVar = nodeRelationObject;
    };
    Object.defineProperty(ToolbarSharedService.prototype, "nodeRelationDetailsData", {
        /**
         * Gets node relation details data
         * @description Getter function to return nodeRelationDetailsVar set by sidebar
         */
        get: function () {
            return this.nodeRelationDetailsVar;
        },
        enumerable: true,
        configurable: true
    });
    ToolbarSharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarSharedService);
    return ToolbarSharedService;
}());



/***/ }),

/***/ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph-container\" id=\"graphViewer\">\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29yZS9jb21wb25lbnRzL2dyYXBoLXZpc3VhbGl6ZXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXGNvcmVcXGNvbXBvbmVudHNcXGdyYXBoLXZpc3VhbGl6ZXJcXGdyYXBoLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6Im1vZHVsZXMvY29yZS9jb21wb25lbnRzL2dyYXBoLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GraphVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualizerComponent", function() { return GraphVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService) {
        this.graphService = graphService;
        this.graphData = {};
        this.graphOptions = {
            physics: false,
            edges: {
                smooth: {
                    type: 'continuous',
                    forceDirection: 'none'
                }
            },
            nodes: {
                shape: 'dot',
                scaling: {
                    customScalingFunction: function (min, max, total, value) {
                        return value / total;
                    },
                    min: 5,
                    max: 150
                }
            }
        };
    }
    GraphVisualizerComponent.prototype.ngOnInit = function () {
        this.displayInitialGraph();
    };
    GraphVisualizerComponent.prototype.displayInitialGraph = function () {
        var _this = this;
        this.graphService.getInitialData().subscribe(function (result) {
            console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateNodes']);
            }
            if (result.hasOwnProperty('seperateEdges')) {
                _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateEdges']);
            }
            console.log('graphData :', _this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.graphData = {};
        });
    };
    GraphVisualizerComponent.prototype.ngOnChanges = function (changes) {
        console.log("graph", this.event);
        this.changeNodeColor();
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        var previousData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.graphData);
        if (!!this.graphData["nodes"]) {
            var temgraph = this.graphData["nodes"].map(function (node) {
                if (_this.event == node.type[0]) {
                    node["color"] = "#FFCC99";
                }
                else {
                    node["color"] = "#95BFF8";
                    return node;
                }
                return node;
            });
            previousData.nodes.clear();
            previousData.nodes = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](temgraph));
            this.graphData = previousData;
            this.reinitializeGraph();
            console.log(this.graphData);
        }
    };
    GraphVisualizerComponent.prototype.reinitializeGraph = function () {
        var container = document.getElementById('graphViewer');
        this.network.setData(this.graphData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    GraphVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-visualizer',
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"]])
    ], GraphVisualizerComponent);
    return GraphVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/core-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/core-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/modules/core/core-routing.module.ts");
/* harmony import */ var _components_graph_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/graph-visualizer/graph-visualizer.component */ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.ts");
/* harmony import */ var _services_interceptors_core_interceptor_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/interceptors/core-interceptor/core.service */ "./src/app/modules/core/services/interceptors/core-interceptor/core.service.ts");
/* harmony import */ var _redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");






// interceptors


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_graph_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["GraphVisualizerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoreRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_core_interceptor_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"], multi: true },
                _redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_7__["CoreFilterService"]
            ],
            exports: [_components_graph_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["GraphVisualizerComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/core/services/graph-data-service/graph-data.service.ts ***!
  \********************************************************************************/
/*! exports provided: GraphDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphDataService", function() { return GraphDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/public-http/public-http.service */ "./src/app/modules/core/services/public/public-http/public-http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







var GraphDataService = /** @class */ (function () {
    function GraphDataService(publicHttp) {
        this.publicHttp = publicHttp;
    }
    GraphDataService.prototype.getInitialData = function () {
        // const url = 'http://localhost:3050/api/initialdata';
        var url = '/api/initialdata';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.getSearchData = function (body) {
        // const url = 'http://localhost:3050/api/graph/data';
        var url = '/api/graph/data';
        return this.publicHttp.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    // getNodeLabelData(): Observable<any> {
    //   // const url = 'http://localhost:3050/api/graph/labeldata';
    //   const url = '/api/graph/labeldata';
    //   return this.publicHttp.get(url).pipe(map(data => {
    //     if (!!data) {
    //       return data;
    //     } else {
    //       return of({});
    //     }
    //   }));
    // }
    GraphDataService.prototype.getInitialDataV2 = function () {
        // const url = 'http://localhost:3050/api/initialdatav2';
        var url = '/api/initialdatav2';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.getSearchDataV2 = function (body) {
        // const url = 'http://localhost:3050/api/graph/datav2';
        var url = '/api/graph/datav2';
        return this.publicHttp.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.createNewNode = function (nodeData) {
        var url = '/api/graph/node/create';
        // tslint:disable-next-line: max-line-length
        if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
            // initial conditions are okay, now send the creation request
            return this.publicHttp.post(url, nodeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.updateNode = function (nodeData) {
        var url = '/api/graph/node/update';
        // tslint:disable-next-line: max-line-length
        if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
            // initial conditions are okay, now send the creation request
            return this.publicHttp.post(url, nodeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.updateRelation = function (relationData) {
        var url = '/api/graph/relation/update';
        if (relationData.hasOwnProperty('id') && relationData.hasOwnProperty('type')) {
            return this.publicHttp.post(url, relationData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Incomplete data provided');
        }
    };
    GraphDataService.prototype.createNewRelation = function (relationData) {
        var url = '/api/graph/relation/create';
        if (relationData.hasOwnProperty('type') && relationData.hasOwnProperty('to') && relationData.hasOwnProperty('from')) {
            // data is okay now prepare to send
            return this.publicHttp.post(url, relationData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.getGraphRelations = function () {
        var url = '/api/graph/relations';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    GraphDataService.prototype.getNodeNames = function () {
        return this.getInitialDataV2().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var nodeNames = [];
            if (data.hasOwnProperty('seperateNodes')) {
                var newData = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](data['seperateNodes']);
                newData.forEach(function (element) {
                    nodeNames.push(element['label']);
                    return element['label'];
                });
            }
            return nodeNames;
        }));
    };
    GraphDataService.prototype.deleteNode = function (nodeData) {
        var url = '/api/graph/node/delete';
        if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('relations')) {
            // data is okay now prepare to send
            return this.publicHttp.post(url, nodeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.deleteRelation = function (relationIDData) {
        var url = '/api/graph/relation/delete';
        if (relationIDData.hasOwnProperty('id')) {
            // data is okay now prepare to send
            return this.publicHttp.post(url, relationIDData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.getGraphProperties = function () {
        var url = '/api/graph/properties';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return { response: 'empty' };
            }
        }, function (err) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: 'Error while reading graph properties' });
            console.error(err);
        }));
    };
    GraphDataService.prototype.restoreData = function (restoreData) {
        if (restoreData.constructor === Object && restoreData.hasOwnProperty('nodes') || restoreData.hasOwnProperty('relations')) {
            // check for datatypes of nodes and relations
            if (!Array.isArray(restoreData['nodes']) || !Array.isArray(restoreData['relations'])) {
                console.error('Either nodes or relations key in not an Array in restoreData');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ err: 'restoreData is incompatible' });
            }
            else {
                // data is okay, send it to the server
                var url = '/api/graph/data/restore';
                var requestBody = {
                    nodes: restoreData['nodes'],
                    relations: restoreData['relations']
                };
                // send it
                return this.publicHttp.post(url, requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                    if (!!data) {
                        return data;
                    }
                    else {
                        return { response: 'empty' };
                    }
                }));
            }
        }
        else {
            console.error('Invalid restorData object from client');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ err: 'restoreData is invalid' });
        }
    };
    GraphDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__["PublicHttpService"]])
    ], GraphDataService);
    return GraphDataService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/graph-export-service/graph-export.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/services/graph-export-service/graph-export.service.ts ***!
  \************************************************************************************/
/*! exports provided: GraphExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphExportService", function() { return GraphExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/public-http/public-http.service */ "./src/app/modules/core/services/public/public-http/public-http.service.ts");





var GraphExportService = /** @class */ (function () {
    function GraphExportService(publicHttp) {
        this.publicHttp = publicHttp;
    }
    GraphExportService.prototype.getExportFormat = function (format) {
        var _this = this;
        /**
         * The main purpose of this function is to get the export data in the specified format
         * Currently supports only csv and excel formats
         */
        if (format) {
            var url = "/file/graph/export/" + format;
            try {
                return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                    if (!!data) {
                        var convertedData = _this.convertFileDataToBlob(data);
                        return convertedData;
                    }
                    else {
                        console.warn('did not recieve any data when retrieving export');
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
                    }
                }));
            }
            catch (e) {
                var convertedData = this.convertFileDataToBlob(e['text']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(convertedData);
            }
        }
    };
    // utility function to convert raw data into blob
    GraphExportService.prototype.convertFileDataToBlob = function (rawData) {
        try {
            var data = rawData['data'];
            var blob = new Blob([data], { type: 'data:application/vnd.ms-excel' });
            var downloadUrl = URL.createObjectURL(blob);
            var fileName = "networks.csv";
            return { data: blob, url: downloadUrl, fileName: fileName };
        }
        catch (err) {
            // handle any error occured during blob creation
            console.error('An error occured while creating a blob for xport functionality');
            return { data: null, url: null, fileName: null };
        }
    };
    GraphExportService.prototype.initiateDownload = function (elementType, data) {
        if (data === void 0) { data = {}; }
        if (!!elementType) {
            var element = document.createElement(elementType);
            element.href = data['url'];
            element.download = "" + data['fileName'];
            return element;
        }
        else {
            return null;
        }
    };
    GraphExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__["PublicHttpService"]])
    ], GraphExportService);
    return GraphExportService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/interceptors/core-interceptor/core.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/services/interceptors/core-interceptor/core.service.ts ***!
  \*************************************************************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_graph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");


// import sharedService so that we can access the toggle response

var CoreService = /** @class */ (function () {
    function CoreService(sharedService) {
        var _this = this;
        this.sharedService = sharedService;
        this.showDeletedData = false;
        this.sharedService.showDeletedData.subscribe(function (toggle) {
            _this.setDeletedDataToggle(toggle);
        }, function (error) {
            console.warn('An error occured while subscribing to the toggle event in core interceptor', error);
        });
    }
    CoreService.prototype.intercept = function (req, next) {
        // update the body with an added parameter to fetch deleted data or not
        console.log('setting show deleted for req ---> ', req.url + ' to ' + this.showDeletedData);
        if (req.method === 'POST') {
            var request = req.clone({ body: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, req.body, { showDeleted: this.showDeletedData }) });
            return next.handle(request);
        }
        else if (req.method === 'GET' && req.url.split('/').indexOf('config') <= 0) {
            var request = req.clone({ url: req.url + ("?deleted=" + this.showDeletedData) });
            console.log('new get request created is ', request);
            return next.handle(request);
        }
        return next.handle(req);
    };
    // handler to set deleted toggler
    CoreService.prototype.setDeletedDataToggle = function (toggle) {
        if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
            // if the toggle variable is  only true and false and nothing else
            this.showDeletedData = toggle;
            // console.log('recieved toggle in core interceptor', toggle);
        }
        else {
            // set to false by default
            this.showDeletedData = false;
        }
    };
    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_graph_service__WEBPACK_IMPORTED_MODULE_2__["SharedGraphService"]])
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/public/public-http/public-http.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/core/services/public/public-http/public-http.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PublicHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicHttpService", function() { return PublicHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PublicHttpService = /** @class */ (function () {
    function PublicHttpService(http) {
        this.http = http;
    }
    PublicHttpService.prototype.get = function (url, httpOptions) {
        if (httpOptions === void 0) { httpOptions = {}; }
        var requestUrl = !!url ? url : null;
        // if(httpOptions.hasOwnProperty('user-token') && httpOptions.hasOwnProperty('contentType')){
        if (_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]) {
            httpOptions = {
                'Access-Control-Allow-Origin': httpOptions['Access-Control-Allow-Origin']
            };
        }
        if (!!requestUrl) {
            return this.http.get(requestUrl, httpOptions);
        }
        else {
            console.error('No url provided for get request');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('No url provided');
        }
    };
    PublicHttpService.prototype.post = function (url, body) {
        var requestUrl = !!url ? url : null;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (!!requestUrl) {
            return this.http.post(requestUrl, body, httpOptions);
        }
        else {
            console.error('No url provided for post request');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('No url provided');
        }
    };
    PublicHttpService.prototype.patch = function () {
        // no implementation yet
    };
    PublicHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PublicHttpService);
    return PublicHttpService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/shared-graph.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/services/shared-graph.service.ts ***!
  \***************************************************************/
/*! exports provided: SharedGraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedGraphService", function() { return SharedGraphService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedGraphService = /** @class */ (function () {
    function SharedGraphService() {
        this.nodeDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.connectedNodeDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.getNodeByIDs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.showDeletedData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.totalNodesProperties = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.totalRelationsProperties = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.processedData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.nodeTypes2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.restoreConnectedNodesData = false;
        this.relationTypeOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.relationsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    SharedGraphService.prototype.setGraphData = function (graphdata) {
        this.graphData = graphdata;
    };
    SharedGraphService.prototype.getGraphData = function () {
        return this.graphData;
    };
    SharedGraphService.prototype.getNodeDetails = function (nodeIDs, forRestore) {
        if (forRestore === void 0) { forRestore = false; }
        this.restoreConnectedNodesData = forRestore ? true : false;
        this.getNodeByIDs.next(nodeIDs);
    };
    SharedGraphService.prototype.sendNodeDetails = function (nodeDetailsArray) {
        if (this.restoreConnectedNodesData) {
            this.connectedNodeDetails.next(nodeDetailsArray);
        }
        else {
            this.nodeDetails.next(nodeDetailsArray);
        }
        this.restoreConnectedNodesData = false;
    };
    // function to send the deleted toggle info whenever needed
    SharedGraphService.prototype.sendToogleStatus = function (status) {
        console.log('sending new status for toggle ', status);
        this.showDeletedData.next(status);
    };
    // to set node and relation properties
    SharedGraphService.prototype.setNodeProperties = function (nodeProperties) {
        this.totalNodesProperties.next(nodeProperties);
    };
    SharedGraphService.prototype.setRelationProperties = function (relProperties) {
        this.totalRelationsProperties.next(relProperties);
    };
    // to set processedData and nodeTypes2
    SharedGraphService.prototype.setProcessedData = function (proData) {
        this.processedData.next(proData);
    };
    SharedGraphService.prototype.setNodeTypes2 = function (nodeTypes) {
        this.nodeTypes2.next(nodeTypes);
    };
    // set relationTypeOptions and relationsData
    SharedGraphService.prototype.setRelationTypeOptions = function (relTypeOptions) {
        this.relationTypeOptions.next(relTypeOptions);
    };
    SharedGraphService.prototype.setRelationsData = function (relData) {
        this.relationsData.next(relData);
    };
    SharedGraphService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedGraphService);
    return SharedGraphService;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  snackbar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2N1c3RvbS1tYXRlcmlhbC9jb21wb25lbnRzL3NuYWNrYmFyL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent() {
    }
    SnackbarComponent.prototype.ngOnInit = function () {
    };
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/custom-material/custom-material.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/custom-material/custom-material/custom-material.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/config/config.service */ "./src/app/modules/custom-material/services/config/config.service.ts");









var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            providers: [_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"], _services_config_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/services/config/config.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/custom-material/services/config/config.service.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ConfigService = /** @class */ (function () {
    function ConfigService(localService) {
        this.localService = localService;
        this.configObj = {};
        this.DEFAULT_MATERIAL_CONFIG_FILENAME = 'material.json';
        this.DEFAULT_MATERIAL_CONFIG_URL = '/config/get';
        this.getRemoteConfig();
    }
    ConfigService.prototype.getRemoteConfig = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('fileName', this.DEFAULT_MATERIAL_CONFIG_FILENAME);
        return this.localService.get(this.DEFAULT_MATERIAL_CONFIG_URL, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            if (config.constructor === Object) {
                _this.configObj = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](config);
                return true;
            }
            else {
                console.log('did not recieve proper format of config in config-service');
                return false;
            }
        }));
    };
    ConfigService.prototype.getConfig = function (configName) {
        var _this = this;
        if (configName === void 0) { configName = null; }
        console.log('called getConfig');
        // read the config name
        if (!!configName) {
            if (!Object.keys(this.configObj).length) {
                return this.getRemoteConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
                    if (!!config) {
                        console.log('config name updated to  ', _this.configObj);
                        return _this.configObj[configName];
                    }
                    else {
                        return null;
                    }
                }));
            }
            else {
                console.log('already have config variable, using it', this.configObj);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.configObj[configName]);
            }
        }
        else {
            console.warn("Unable to load config " + configName + " inside Custom Material Module, returning empty");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/services/material-core/material.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/custom-material/services/material-core/material.service.ts ***!
  \************************************************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config.service */ "./src/app/modules/custom-material/services/config/config.service.ts");




var MaterialService = /** @class */ (function () {
    function MaterialService(sb, configSrvc) {
        var _this = this;
        this.sb = sb;
        this.configSrvc = configSrvc;
        this.DEAFAULT_SNACKBAR_CONFIG = null;
        this.snackBar = {
            notify: this.notify
        };
        this.configSrvc.getConfig('DEFAULT_SNACKBAR_CONFIG').subscribe(function (newConfig) {
            _this.DEAFAULT_SNACKBAR_CONFIG = newConfig;
        }, function (err) {
            console.log('error while reading new config in material', err);
        });
    }
    MaterialService.prototype.notify = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-black' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.success = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-success' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.error = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-error' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.warn = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-warn', horizontalPosition: 'right' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.processNotificationObject = function (JSONObj) {
        var processedObj = {};
        processedObj['message'] = (JSONObj.hasOwnProperty('message') && JSONObj['message'].length) ? JSONObj['message'] : this.DEAFAULT_SNACKBAR_CONFIG['default_text'];
        processedObj['action'] = (JSONObj.hasOwnProperty('action') && JSONObj['action'].length) ? JSONObj['action'] : this.DEAFAULT_SNACKBAR_CONFIG['default_action'];
        processedObj['config'] = {};
        processedObj['config']['duration'] = JSONObj.hasOwnProperty('duration') ? JSONObj['duration'] : this.DEAFAULT_SNACKBAR_CONFIG['duration'];
        processedObj['config']['verticalPosition'] = (JSONObj.hasOwnProperty('position') && JSONObj['position'].length) ? JSONObj['position'] : this.DEAFAULT_SNACKBAR_CONFIG['verticalPosition'];
        processedObj['config']['panelClass'] = (JSONObj.hasOwnProperty('default_class') && JSONObj['default_class'].length) ? JSONObj['default_class'] : this.DEAFAULT_SNACKBAR_CONFIG['default_class'];
        processedObj['config']['direction'] = JSONObj.hasOwnProperty('direction') ? JSONObj['direction'] : this.DEAFAULT_SNACKBAR_CONFIG['default_direction'];
        return processedObj;
    };
    MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], MaterialService);
    return MaterialService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"panel\">\r\n        <p class=\"panelTitle\">Legend</p>\r\n        <div class=\"panelbody\" *ngIf=\"showDropDown\">\r\n            <ul class=\"panelList\" type=\"none\">\r\n                <ng-container *ngFor=\"let item of colorData\">\r\n                    <li class=\"item\" [ngStyle]=\"{color: item.color}\"><span class=\"circle\" [ngStyle]=\"{background: item.color}\"></span>{{item?.name}}</li>\r\n                </ng-container>\r\n            </ul>\r\n        </div>\r\n        <div class=\"dropDown\" (click)=\"toggleDropdown()\">\r\n            <i class=\"fas fa-chevron-up\" *ngIf=\"showDropDown\"></i>\r\n            <i class=\"fas fa-chevron-down\" *ngIf=\"!showDropDown\"></i>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: transparent;\n  position: absolute;\n  right: 0;\n  padding-right: 20px;\n  padding-top: 20px;\n  z-index: 5; }\n\n.panel {\n  background-color: white;\n  border-radius: 10px;\n  width: 150px;\n  margin: auto;\n  margin-right: 0; }\n\n.panelTitle,\n.panelbody {\n  padding: 10px 5px;\n  max-height: 65vh;\n  overflow-y: auto; }\n\n.panelbody::-webkit-scrollbar {\n  width: 2px; }\n\n.panelTitle {\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center; }\n\n.panelList {\n  padding-left: 14px; }\n\n.item {\n  word-wrap: break;\n  line-height: 2; }\n\n.circle {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 8px; }\n\n.dropDown {\n  cursor: pointer; }\n\n.dropDown i {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    padding-bottom: 8px; }\n\n.display-ok {\n  display: block; }\n\n.no-display {\n  display: none; }\n\n.bg-red {\n  background-color: red !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXGRhc2hib2FyZC12MlxcY29tcG9uZW50c1xcY29sb3ItcGFuZWxcXGNvbG9yLXBhbmVsXFxjb2xvci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7O0VBRUksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdDQUFnQyxFQUFBIiwiZmlsZSI6Im1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnBhbmVsVGl0bGUsXHJcbi5wYW5lbGJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnBhbmVsYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDJweDtcclxufVxyXG5cclxuLnBhbmVsVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhbmVsTGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWs7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZHJvcERvd24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlzcGxheS1vayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5vLWRpc3BsYXkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJnLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts");
/* harmony import */ var _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var ColorPanelComponent = /** @class */ (function () {
    function ColorPanelComponent(colorSrvc, sharedGraphSrvc) {
        this.colorSrvc = colorSrvc;
        this.sharedGraphSrvc = sharedGraphSrvc;
        this.colorObject = undefined;
        this.showDeletedData = false;
        this.objectKeys = [];
        this.colorData = [];
        this.showDropDown = true;
    }
    ColorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get color panel details
        this.colorSrvc.colorObj$.subscribe(function (data) {
            _this.colorObject = data;
            // console.log('color object is ', this.colorObject);
            _this.objectKeys = Object.keys(_this.colorObject['defaultColor']);
            _this.processColors(_this.objectKeys, _this.colorObject['defaultColor']);
            // console.log('processed color data is ', this.colorData);
        });
        // to monitor toggle status
        this.sharedGraphSrvc.showDeletedData.subscribe(function (toggle) {
            // console.log('recieved toggle', toggle);
            if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
                // if the toggle variable is  only true and false and nothing else
                _this.showDeletedData = toggle;
            }
            else {
                // set to false by default
                _this.showDeletedData = false;
            }
            _this.addDeleteColor();
        });
    };
    ColorPanelComponent.prototype.processColors = function (keyArray, colorObj) {
        var _this = this;
        this.colorData = [];
        if (!!keyArray.length || !!Object.keys(colorObj).length) {
            // both have the data , kindly process
            keyArray.map(function (key) {
                // for each key create a new object which has item name and item color
                _this.colorData.push({ name: key, color: colorObj[key] });
            });
        }
        else {
            console.log('empty key Array or colorObj in color panel');
            return [];
        }
    };
    ColorPanelComponent.prototype.addDeleteColor = function () {
        // add new color for deleted node
        if (this.showDeletedData) {
            if (lodash__WEBPACK_IMPORTED_MODULE_4__["some"](this.colorData, { name: "Deleted", color: "#C0C0C0" })) {
            }
            else {
                this.colorData.push({ name: "Deleted", color: "#C0C0C0" });
            }
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](this.colorData, { name: "Deleted", color: "#C0C0C0" });
        }
    };
    ColorPanelComponent.prototype.toggleDropdown = function () {
        this.showDropDown = !this.showDropDown;
    };
    ColorPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-panel',
            template: __webpack_require__(/*! ./color-panel.component.html */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html"),
            styles: [__webpack_require__(/*! ./color-panel.component.scss */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__["ColorServiceService"],
            _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"]])
    ], ColorPanelComponent);
    return ColorPanelComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pr-0\">\r\n    <div class=\"btn-group nodes\">\r\n        <button type=\"button\" (click)=\"createNode()\" data-toggle=\"modal\" data-target=\"#createNodeModal\" class=\"circularBtn\" aria-expanded=\"false\">\r\n      <img src=\"./../../../../../assets/create_nodes.svg\">\r\n    </button>\r\n    </div>\r\n    <div class=\"btn-group relationships\">\r\n        <button type=\"button\" (click)=\"createRelation()\" data-toggle=\"modal\" data-target=\"#createRelationModal\" class=\"circularBtn\" aria-expanded=\"false\">\r\n            <img src=\"./../../../../../assets/create_relations.svg\">\r\n    </button>\r\n    </div>\r\n    <div class=\"btn-group algorithms\">\r\n        <algo-runner-toolbar></algo-runner-toolbar>\r\n    </div>\r\n</div>\r\n<!--modal template to show when node is to be created-->\r\n<div class=\"modal fade\" id=\"createNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"NodeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.createNodePopup === true\">Create Element</h5>\r\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.editNodePopup === true\">Element Details</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"modalItem\">\r\n                    <p class=\"sectionName\">\r\n                        {{TYPE_TEXT}}\r\n                    </p>\r\n                    <span class=\"inputSpan\">\r\n                        <ng-container *ngIf=\"selectedType !== ADD_NEW_LABEL\">\r\n                                <sui-select class=\"selection\"\r\n                                [(ngModel)]=\"selectedType\"\r\n                                (ngModelChange)=\"updateProperties($event)\"\r\n                                [options]=\"typeOptions\"\r\n                                [isSearchable]=\"true\"\r\n                                [isDisabled]=\"disabledBox\"\r\n                                #select>\r\n                        <sui-select-option *ngFor=\"let option of select.filteredOptions\"\r\n                                           [value]=\"option\">\r\n                        </sui-select-option>\r\n                                  </sui-select>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"selectedType === ADD_NEW_LABEL\">\r\n                            <div class=\"ui input typeTextBox\">\r\n                                    <span>\r\n                                            <app-color-picker [elWidth]=\"'50px'\" [elDefault]=\"'#96C1FA'\"\r\n                                        (selectedColorCode)=\"selectedColorForNewType($event)\"\r\n                                        ></app-color-picker>\r\n                                        </span>\r\n                    <input type=\"text\" placeholder=\"Enter Type...\" id=\"id_newLabelNode\">\r\n                </div>\r\n\r\n                </ng-container>\r\n                </span>\r\n            </div>\r\n            <div class=\"modalItem\" *ngIf=\"labelProperties?.length > 0 && selectedType?.length > 0\">\r\n                <h5 class=\"propertyLabel\">\r\n                    Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\r\n                </h5>\r\n                <!--container to display pre exisiting properties-->\r\n                <ng-container *ngFor=\"let data of labelProperties\">\r\n                    <div class=\"modalItem\">\r\n                        <p class=\"sectionName\">{{data}}</p>\r\n                        <span class=\"inputSpan\">\r\n                                <ng-container *ngIf = \"data === 'Name'\">\r\n                                    <div class=\"ui corner labeled input normalTextBox\">\r\n                                        <input type=\"text\" placeholder=\"Enter Name...\" id=\"id_{{data}}\" [(ngModel)] = \"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions === true\">\r\n                                        <div class=\"ui corner label\">\r\n                                            <i class=\"asterisk icon\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"data !== 'Name'\">\r\n                                    <sui-select class=\"selection\" *ngIf=\"!availablePropertyList[data]?.enableNewProperty\"\r\n                                    [options]=\"availablePropertyList[data]['list']\" [(ngModel)]=\"selectedPropertiesObject[data]\"\r\n                                    (ngModelChange)=\"updateSelectedOption($event, data)\" [isSearchable]=\"true\"\r\n                                    [isDisabled]=\"restoreOptions\" #Propertyselect>\r\n                                        <sui-select-option *ngFor=\"let option of Propertyselect.filteredOptions\" [value]=\"option\"></sui-select-option>\r\n                                    </sui-select>\r\n                                    <div class=\"ui corner labeled input normalTextBox\" *ngIf=\"availablePropertyList[data]?.enableNewProperty\">\r\n                                        <input type=\"text\" placeholder=\"Enter New Property...\" id=\"id_{{data}}\" [(ngModel)]=\"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" (keyup)=\"updateNewPropertyValue($event,data)\">\r\n                                        <div class=\"ui corner label\">\r\n                                            <i class=\"asterisk icon\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </span>\r\n                        <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && !availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"deleteProperty(data)\"><i class=\"far fa-trash-alt\"></i></span>\r\n                        <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"availablePropertyList[data].enableNewProperty = false\"><i class=\"far fa-times-circle\" style=\"color: red;\"></i></span>\r\n                        <span class=\"supportIcons nameKey\" *ngIf=\"(data?.length > 0) && data === 'Name' && !restoreOptions\"> \r\n                                <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" [title]=\"'Name is mandatory and cannot be deleted'\"></i>\r\n                            </span>\r\n                    </div>\r\n                </ng-container>\r\n                <!--container to display pre exisiting properties end-->\r\n\r\n                <!--Template to add a new property-->\r\n\r\n                <ng-container *ngIf=\"enableNewTemplate\">\r\n                    <form id=\"NewPropertyGroup\">\r\n                        <div class=\"modalItem\">\r\n                            <div class=\"ui divider\"></div>\r\n                            <p class=\"sectionName\">Property Name</p>\r\n                            <span class=\"inputSpan newTemplate\">\r\n                                    <div class=\"ui input focus\">\r\n                                        <input type=\"text\" placeholder=\"Property Value\" id=\"propertyKey\">\r\n                                    </div>\r\n                                </span>\r\n                            <span class=\"supportIcons customDelete\" (click)=\"enableNewTemplate = false\"><i class=\"far fa-trash-alt\"></i></span>\r\n                            <br>\r\n                            <div class=\"ui divider\"></div>\r\n                        </div>\r\n                    </form>\r\n                </ng-container>\r\n                <!--Template to add a new property ends-->\r\n            </div>\r\n            <a class=\"newLink\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_LABEL && !enableNewTemplate && !restoreOptions\" (click)=\"addNewProperty('node')\">Add New Property</a>\r\n            <a class=\"newLink\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_LABEL && enableNewTemplate && !restoreOptions\" (click)=\"saveNewProperty('node')\">Save Property</a>\r\n        </div>\r\n        <div class=\"modal-footer\" *ngIf=\"selectedType !== ADD_NEW_LABEL\">\r\n            <button type=\"button\" class=\"btn btn-danger deleteBtn\" *ngIf=\"popupConfig.editNodePopup === true && !restoreOptions\" style=\"color: white;\" (click)=\"activateDelete('deleteModal', 'node')\">Delete</button>\r\n            <a class=\"mailBtn\" *ngIf=\"popupConfig.editNodePopup === true\">Send Mail</a>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal()\" *ngIf=\"popupConfig.createNodePopup === true && !restoreOptions\" [disabled]=\"(selectedType?.length <= 0) || (!selectedPropertiesObject['Name'])\">Create</button>\r\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal('edit')\" *ngIf=\"popupConfig.editNodePopup === true && !restoreOptions\" [disabled]=\"(selectedType?.length <= 0) || (!selectedPropertiesObject['Name'])\" id=\"edit_btn\">Update</button>\r\n            <button type=\"button\" id=\"restoreBtn\" class=\"btn btn-info restoreBtn\" *ngIf=\"(popupConfig.editNodePopup === true || editNodePopup === true) && restoreOptions\" style=\"color: white;\" (click)=\"restoreData('node')\">Restore </button>\r\n        </div>\r\n        <div class=\"modal-footer\" *ngIf=\"selectedType === ADD_NEW_LABEL\">\r\n            <button type=\"button\" class=\"btn btn-primary create\" id=\"edit_btn\" (click)=\"addNewLabel('node')\">Add Label</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<!--modal node create end-->\r\n\r\n\r\n<!--modal relationship start-->\r\n<div class=\"modal fade\" id=\"createRelationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"RelModalLabel\" *ngIf=\"createRelationPopup == true\">Create Relationship</h5>\r\n                <h5 class=\"modal-title\" id=\"RelModalLabel\" *ngIf=\"editRelationPopup == true\">Relationship Details</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"modalItem\">\r\n                    <p class=\"sectionName\">\r\n                        {{TYPE_TEXT}}\r\n                    </p>\r\n                    <span class=\"inputSpan\">\r\n                        <ng-container *ngIf=\"selectedType !== ADD_NEW_TYPE\">\r\n                                <sui-select class=\"selection\"\r\n                                [(ngModel)]=\"selectedType\"\r\n                                (ngModelChange)=\"updateRelProperties($event)\"\r\n                                [options]=\"relationTypeOptions\"\r\n                                [isSearchable]=\"true\"\r\n                                [isDisabled]=\"disabledBox\"\r\n                                #selectRelationBox>\r\n                        <sui-select-option *ngFor=\"let option of selectRelationBox.filteredOptions\"\r\n                                           [value]=\"option\">\r\n                        </sui-select-option>\r\n                    </sui-select>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"selectedType === ADD_NEW_TYPE\">\r\n                            <div class=\"ui input typeTextBox\"><input type=\"text\" placeholder=\"Enter Type...\" id=\"id_newLabelRelation\"></div>\r\n                    </ng-container>\r\n                    </span>\r\n                </div>\r\n                <div class=\"modalItem\" *ngIf=\"typeProperties?.length > 0 && selectedType?.length > 0\">\r\n                    <h5 class=\"propertyLabel\">\r\n                        Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\r\n                    </h5>\r\n\r\n\r\n                    <ng-container *ngFor=\"let data of typeProperties\">\r\n                        <div class=\"modalItem\">\r\n                            <p class=\"sectionName\">{{data}}</p>\r\n                            <span class=\"inputSpan\">\r\n                                <ng-container *ngIf=\"data !== 'Name'\">\r\n                                    <sui-select class=\"selection\" *ngIf=\"!availablePropertyList[data]?.enableNewProperty\"\r\n                                     [options]=\"availablePropertyList[data]['list']\" [(ngModel)]=\"selectedPropertiesObject[data]\"\r\n                                     (ngModelChange)=\"updateSelectedOption($event, data)\" [isSearchable]=\"true\"\r\n                                     [isDisabled]=\"restoreOptions\" #PropertyRelselect>\r\n                                        <sui-select-option *ngFor=\"let option of PropertyRelselect.filteredOptions\" [value]=\"option\"></sui-select-option>\r\n                                    </sui-select>\r\n                                    <div class=\"ui corner labeled input normalTextBox\" *ngIf=\"availablePropertyList[data]?.enableNewProperty\">\r\n                                        <input type=\"text\" placeholder=\"Enter New Property...\" id=\"id_{{data}}\" [(ngModel)]=\"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" (keyup)=\"updateNewPropertyValue($event,data)\">\r\n                                        <div class=\"ui corner label\">\r\n                                            <i class=\"asterisk icon\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <!-- <input type=\"text\" id=\"id_{{data}}\"> -->\r\n                            </span>\r\n                            <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && !availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"deleteProperty(data, 'relation')\"><i class=\"far fa-trash-alt\"></i></span>\r\n                            <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"availablePropertyList[data].enableNewProperty = false\"><i class=\"far fa-times-circle\" style=\"color: red;\"></i></span>\r\n                            <span class=\"supportIcons nameKey\" *ngIf=\"(data?.length > 0) && data === 'Name' && !restoreOptions\">\r\n                                <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" [title]=\"'Name is mandatory and cannot be deleted'\" ></i>\r\n                            </span>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <form id=\"NewPropertyGroupRel\" *ngIf=\"enableNewTemplate\">\r\n                    <div class=\"modalItem\">\r\n                        <div class=\"ui divider\"></div>\r\n                        <p class=\"sectionName\">Property Name</p>\r\n                        <span class=\"inputSpan newTemplate\">\r\n                                        <div class=\"ui input focus\">\r\n                                            <input type=\"text\" placeholder=\"Property Name\" id=\"propertyKeyRel\">\r\n                                        </div>\r\n                                    </span>\r\n                        <span class=\"supportIcons customDelete\" (click)=\"enableNewTemplate = false\"><i class=\"far fa-trash-alt\"></i></span>\r\n                        <br/>\r\n                        <div class=\"ui divider lower\"></div>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n                <div class=\"modalItem buttonContainer\">\r\n                    <a class=\"newLink2\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE && !enableNewTemplate && !restoreOptions\" (click)=\"addNewProperty('relation')\">Add New Property</a>\r\n                    <a class=\"newLink2\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE && enableNewTemplate && !restoreOptions\" (click)=\"saveNewProperty('relation')\">Save Property</a>\r\n                </div>\r\n\r\n                <div class=\"relationScope\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE\">\r\n                    <div class=\"modalItem\">\r\n                        <h5 class=\"propertyLabel\">\r\n                            Connection <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\r\n                        </h5>\r\n                        <p class=\"sectionName\">From</p>\r\n                        <span class=\"inputSpan\" *ngIf=\"!disabledFromBox\">\r\n                            <sui-select class=\"selection\"\r\n                                [(ngModel)]=\"selectedNodeNameSource\"\r\n                                (ngModelChange)=\"updateList('to',[selectedNodeNameSource])\"\r\n                                [optionsLookup]=\"optionLookUp\"\r\n                                labelField=\"key\"\r\n                                valueField=\"key\"\r\n                                [isSearchable]=\"true\"\r\n                                [isDisabled]=\"disabledFromBox\"\r\n                                #NodeFromName>\r\n                                <sui-select-option *ngFor=\"let option of NodeFromName.filteredOptions\"\r\n                                    [value]=\"option\">\r\n                                </sui-select-option>\r\n                            </sui-select>\r\n                        </span>\r\n                        <span class=\"inputSpan\" *ngIf=\"disabledFromBox\">\r\n                            <div class=\"ui corner labeled input normalTextBox\">\r\n                                <input type=\"text\" [(ngModel)] = \"selectedNodeNameSource\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions || disabledFromBox\">\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"modalItem\">\r\n                        <p class=\"sectionName\">To</p>\r\n                        <span class=\"inputSpan\" *ngIf=\"!disabledToBox\">\r\n                            <sui-select class=\"selection\"\r\n                                [(ngModel)]=\"selectedNodeNameTarget\"\r\n                                (ngModelChange)=\"updateList('from',[selectedNodeNameTarget])\"\r\n                                [optionsLookup]=\"optionLookUp\"\r\n                                labelField=\"key\"\r\n                                valueField=\"key\"\r\n                                [isSearchable]=\"true\"\r\n                                [isDisabled]=\"disabledToBox\"\r\n                                #NodeToName>\r\n                                <sui-select-option *ngFor=\"let option of NodeToName.filteredOptions\"\r\n                                    [value]=\"option\">\r\n                                </sui-select-option>\r\n                            </sui-select> \r\n                        </span>\r\n                        <span class=\"inputSpan\" *ngIf=\"disabledToBox\">\r\n                            <div class=\"ui corner labeled input normalTextBox\">\r\n                                <input type=\"text\" [(ngModel)] = \"selectedNodeNameTarget\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions || disabledToBox\">\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\" *ngIf=\"selectedType !== ADD_NEW_TYPE\">\r\n                <button type=\"button\" class=\"btn btn-danger deleteBtn left\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && !restoreOptions\" style=\"color: white;\" (click)=\"activateDelete('deleteModal', 'relation')\">Delete</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal()\" *ngIf=\"(popupConfig.createRelationPopup === true || createRelationPopup === true) && !restoreOptions\" [disabled]=\"selectedType?.length <= 0 || selectedNodeNameTarget?.length <= 0 || selectedNodeNameSource?.length <= 0\">Create</button>\r\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal('edit')\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && !restoreOptions\" [disabled]=\"selectedType?.length <= 0 || selectedNodeNameTarget?.length <= 0 || selectedNodeNameSource?.length <= 0\"\r\n                    id=\"edit_btn\">Update</button>\r\n                <button type=\"button\" id=\"restoreBtn\" class=\"btn btn-info restoreBtn\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && restoreOptions\" style=\"color: white;\" (click)=\"restoreData('relation')\">Restore </button>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\" *ngIf=\"selectedType === ADD_NEW_TYPE\">\r\n                <button type=\"button\" class=\"btn btn-primary create\" id=\"edit_btn\" (click)=\"addNewLabel('relation')\">Add Type</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--modal relationship end-->\r\n\r\n<!-- Delete modal -->\r\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"deleteModalTitle\">Delete</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <b class=\"modal-text\" style=\"font-size: 17px; font-weight:500;\">Are you sure you want to delete this {{deleteContext}} ?</b>\r\n                <h6 *ngIf=\"deleteContext === 'node'\" style=\"font-size: 14px; padding-top: 15px; font-weight: 400;\">[NOTE] : Deleting a node will also delete the relationships connected with the node. <span style=\"color: red;\">Proceed with caution</span></h6>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn ui-button-text later\" data-dismiss=\"modal\">Maybe Later</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"submitDelete(deleteContext)\" id=\"del_btn\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--Delete modal end-->\r\n\r\n<!--create new relationship after node modal-->\r\n<div class=\"modal fade\" id=\"RelAfterNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelAfterNode\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"RelAfterNodeModalTitle\">New Relation</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <b class=\"modal-text\" style=\"font-size: 17px; font-weight:300;\">Do you wish to create a new relationship with respect to <span style=\"font-weight: 500;\">{{newNodeName}}</span> ?</b>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-target=\"RelAfterNodeModal\" data-dismiss=\"modal\" style=\"color: red;\">Not Now</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"promptRelation()\" id=\"rel_yes_btn\" data-dismiss=\"modal\">Yes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--create new relationship after node modal end-->"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .btn-group {\n  margin-right: 20px; }\n  .container-fluid .btn-group button {\n    border-radius: 50%;\n    background: #e4e4e4;\n    color: #000;\n    box-shadow: 2px 9px 17px -1px #cccccc; }\n  .container-fluid .btn-group button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n  .btn-group:active {\n  outline: none;\n  text-decoration: none; }\n  .createLink,\n.editLink,\n.deleteLink {\n  text-decoration: none;\n  font-size: 12px; }\n  .dropdown-menu .dropdown-item {\n  cursor: pointer; }\n  .dropdown-menu .dropdown-item span {\n    margin-right: 8px; }\n  .dropdown-menu .dropdown-item:active {\n  background-color: white; }\n  .dropdown-menu .create:hover {\n  color: blue; }\n  .dropdown-menu .edit:hover {\n  color: green; }\n  .dropdown-menu .delete:hover {\n  color: red; }\n  /* .modal-header {\r\n    background: #5f5f5f;\r\n    color: white;\r\n    border-color: #5f5f5f;\r\n    button.close {\r\n        color: white;\r\n    }\r\n} */\n  ::ng-deep .modalItem {\n  padding: 10px; }\n  ::ng-deep .modalItem .fa-info-circle {\n    font-size: 14px;\n    cursor: pointer; }\n  ::ng-deep .modalItem.buttonContainer {\n  position: relative; }\n  ::ng-deep .sectionName {\n  display: inline-block;\n  margin: 0;\n  max-width: 50%; }\n  ::ng-deep .inputSpan {\n  position: absolute;\n  left: 50%; }\n  ::ng-deep .inputSpan input {\n    border: 1px solid #acacac;\n    outline: none; }\n  ::ng-deep .propertyLabel {\n  padding-top: 13px;\n  padding-bottom: 13px;\n  text-align: center; }\n  ::ng-deep .supportIcons {\n  position: absolute;\n  right: 6%;\n  cursor: pointer;\n  cursor: pointer;\n  color: red; }\n  ::ng-deep .supportIcons.customDelete {\n  font-size: 20px; }\n  input#propertyKey {\n  height: 30px; }\n  ::ng-deep .newLink {\n  float: right;\n  padding: 5px 7px; }\n  .newLink2 {\n  position: absolute;\n  right: 0;\n  top: 12px;\n  padding: 5px 7px; }\n  .lower {\n  margin-top: 30px; }\n  .newLink:hover,\n.newLink2:hover {\n  background-color: #5f5f5f;\n  color: white !important;\n  transition: .5s;\n  cursor: pointer;\n  border-radius: 5px; }\n  .newTemplate {\n  max-width: 35% !important; }\n  .newTemplate div {\n    max-width: 100%; }\n  i.fas.fa-info-circle {\n  color: black !important; }\n  input[disabled=\"true\"] {\n  cursor: not-allowed; }\n  button:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important; }\n  .deleteBtn,\n.mailBtn,\n.restoreBtn {\n  cursor: pointer !important; }\n  .later {\n  text-decoration: none;\n  cursor: pointer; }\n  .later:hover {\n  background-color: #5f5f5f;\n  color: white; }\n  .mailBtn,\n.left {\n  margin-right: auto; }\n  .mailBtn {\n  padding: 5px 8px; }\n  .mailBtn:hover {\n  transition: 0.5s;\n  background: #e4e4e4;\n  border-radius: .25rem;\n  color: #000;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n  .mailBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n  ::ng-deep .newPropertyGroup {\n  width: 100%;\n  display: block;\n  background: #cccccc; }\n  ::ng-deep .normalTextBox {\n  max-width: 14em; }\n  ::ng-deep .typeTextBox {\n  max-width: 20em; }\n  .typeTextBox input {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n  .ui.input.typeTextBox {\n  width: 14em; }\n  #id_newLabelNode {\n  padding-left: 3px; }\n  .circularBtn {\n  font-size: 1.5rem;\n  width: 40px;\n  padding-left: 0px;\n  border-radius: 50%;\n  height: 40px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n  .circularBtn img {\n    width: 40px; }\n  .circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n  .circularBtn:focus {\n  outline: 0; }\n  .algorithms {\n  padding-right: 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvY3JlYXRlLW5vZGVzL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9tb2R1bGVzXFxkYXNoYm9hcmQtdjJcXGNvbXBvbmVudHNcXGNyZWF0ZS1ub2Rlc1xcY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIiwibW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jcmVhdGUtbm9kZXMvY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFHWCxxQ0FBb0QsRUFBQTtFQVI1RDtJQVdRLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLGFBQWE7RUFDYixxQkFBcUIsRUFBQTtFQUd6Qjs7O0VBR0kscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtFQUduQjtFQUVRLGVBQWUsRUFBQTtFQUZ2QjtJQUlZLGlCQUFpQixFQUFBO0VBSjdCO0VBUVEsdUJBQXVCLEVBQUE7RUFSL0I7RUFXUSxXQUFXLEVBQUE7RUFYbkI7RUFjUSxZQUFZLEVBQUE7RUFkcEI7RUFpQlEsVUFBVSxFQUFBO0VBSWxCOzs7Ozs7O0dDRkc7RURXSDtFQUNJLGFBQWEsRUFBQTtFQURqQjtJQUdRLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFJdkI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsY0FBYyxFQUFBO0VBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtFQUZiO0lBSVEseUJBQXlCO0lBQ3pCLGFBQWEsRUFBQTtFQUlyQjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVSxFQUFBO0VBR2Q7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCOztFQUVJLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBR1EsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUdsQzs7O0VBR0ksMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0VBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtFQUdoQjs7RUFFSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUduQjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSw0QkFBNEI7RUFDNUIseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSxXQUFXLEVBQUE7RUFHZjtFQUNJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBR1QscUNBQW9ELEVBQUE7RUFUeEQ7SUFXUSxXQUFXLEVBQUE7RUFJbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJtb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2NyZWF0ZS1ub2Rlcy9jcmVhdGUtbm9kZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIC5idG4tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246YWN0aXZlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tZ3JvdXA6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGVMaW5rLFxyXG4uZWRpdExpbmssXHJcbi5kZWxldGVMaW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jcmVhdGU6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgLmVkaXQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIC5kZWxldGU6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzVmNWY1ZjtcclxuICAgIGJ1dHRvbi5jbG9zZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59ICovXHJcblxyXG46Om5nLWRlZXAgLm1vZGFsSXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLmZhLWluZm8tY2lyY2xlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsSXRlbS5idXR0b25Db250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNlY3Rpb25OYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmlucHV0U3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FjYWNhYztcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnByb3BlcnR5TGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdXBwb3J0SWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdXBwb3J0SWNvbnMuY3VzdG9tRGVsZXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW5wdXQjcHJvcGVydHlLZXkge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5ld0xpbmsge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDdweDtcclxufVxyXG5cclxuLm5ld0xpbmsyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDdweDtcclxufVxyXG5cclxuLmxvd2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5uZXdMaW5rOmhvdmVyLFxyXG4ubmV3TGluazI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubmV3VGVtcGxhdGUge1xyXG4gICAgbWF4LXdpZHRoOiAzNSUgIWltcG9ydGFudDtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pLmZhcy5mYS1pbmZvLWNpcmNsZSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVsZXRlQnRuLFxyXG4ubWFpbEJ0bixcclxuLnJlc3RvcmVCdG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYXRlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYXRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbEJ0bixcclxuLmxlZnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbEJ0biB7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcblxyXG4ubWFpbEJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcclxufVxyXG5cclxuLm1haWxCdG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmV3UHJvcGVydHlHcm91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5ub3JtYWxUZXh0Qm94IHtcclxuICAgIG1heC13aWR0aDogMTRlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50eXBlVGV4dEJveCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwZW07XHJcbn1cclxuXHJcbi50eXBlVGV4dEJveCBpbnB1dCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLnVpLmlucHV0LnR5cGVUZXh0Qm94IHtcclxuICAgIHdpZHRoOiAxNGVtO1xyXG59XHJcblxyXG4jaWRfbmV3TGFiZWxOb2RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG59XHJcblxyXG4uY2lyY3VsYXJCdG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaXJjdWxhckJ0bjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmNpcmN1bGFyQnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5hbGdvcml0aG1zIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn0iLCIuY29udGFpbmVyLWZsdWlkIC5idG4tZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cbiAgLmNvbnRhaW5lci1mbHVpZCAuYnRuLWdyb3VwIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCAjY2NjY2NjO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbiAgICBib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCAjY2NjY2NjOyB9XG4gIC5jb250YWluZXItZmx1aWQgLmJ0bi1ncm91cCBidXR0b246YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuNXM7IH1cblxuLmJ0bi1ncm91cDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLmNyZWF0ZUxpbmssXG4uZWRpdExpbmssXG4uZGVsZXRlTGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5kcm9wZG93bi1tZW51IC5jcmVhdGU6aG92ZXIge1xuICBjb2xvcjogYmx1ZTsgfVxuXG4uZHJvcGRvd24tbWVudSAuZWRpdDpob3ZlciB7XG4gIGNvbG9yOiBncmVlbjsgfVxuXG4uZHJvcGRvd24tbWVudSAuZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6IHJlZDsgfVxuXG4vKiAubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICM1ZjVmNWY7XHJcbiAgICBidXR0b24uY2xvc2Uge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSAqL1xuOjpuZy1kZWVwIC5tb2RhbEl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4OyB9XG4gIDo6bmctZGVlcCAubW9kYWxJdGVtIC5mYS1pbmZvLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG46Om5nLWRlZXAgLm1vZGFsSXRlbS5idXR0b25Db250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuOjpuZy1kZWVwIC5zZWN0aW9uTmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDUwJTsgfVxuXG46Om5nLWRlZXAgLmlucHV0U3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlOyB9XG4gIDo6bmctZGVlcCAuaW5wdXRTcGFuIGlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWNhY2FjO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cblxuOjpuZy1kZWVwIC5wcm9wZXJ0eUxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuOjpuZy1kZWVwIC5zdXBwb3J0SWNvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByZWQ7IH1cblxuOjpuZy1kZWVwIC5zdXBwb3J0SWNvbnMuY3VzdG9tRGVsZXRlIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbmlucHV0I3Byb3BlcnR5S2V5IHtcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbjo6bmctZGVlcCAubmV3TGluayB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogNXB4IDdweDsgfVxuXG4ubmV3TGluazIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEycHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7IH1cblxuLmxvd2VyIHtcbiAgbWFyZ2luLXRvcDogMzBweDsgfVxuXG4ubmV3TGluazpob3Zlcixcbi5uZXdMaW5rMjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG5cbi5uZXdUZW1wbGF0ZSB7XG4gIG1heC13aWR0aDogMzUlICFpbXBvcnRhbnQ7IH1cbiAgLm5ld1RlbXBsYXRlIGRpdiB7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbmkuZmFzLmZhLWluZm8tY2lyY2xlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IH1cblxuaW5wdXRbZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7IH1cblxuLmRlbGV0ZUJ0bixcbi5tYWlsQnRuLFxuLnJlc3RvcmVCdG4ge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgfVxuXG4ubGF0ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ubGF0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1haWxCdG4sXG4ubGVmdCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4ubWFpbEJ0biB7XG4gIHBhZGRpbmc6IDVweCA4cHg7IH1cblxuLm1haWxCdG46aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCAjY2NjY2NjOyB9XG5cbi5tYWlsQnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zaXRpb246IC41czsgfVxuXG46Om5nLWRlZXAgLm5ld1Byb3BlcnR5R3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7IH1cblxuOjpuZy1kZWVwIC5ub3JtYWxUZXh0Qm94IHtcbiAgbWF4LXdpZHRoOiAxNGVtOyB9XG5cbjo6bmctZGVlcCAudHlwZVRleHRCb3gge1xuICBtYXgtd2lkdGg6IDIwZW07IH1cblxuLnR5cGVUZXh0Qm94IGlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDsgfVxuXG4udWkuaW5wdXQudHlwZVRleHRCb3gge1xuICB3aWR0aDogMTRlbTsgfVxuXG4jaWRfbmV3TGFiZWxOb2RlIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7IH1cblxuLmNpcmN1bGFyQnRuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCAjY2NjY2NjO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7XG4gIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7IH1cbiAgLmNpcmN1bGFyQnRuIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7IH1cblxuLmNpcmN1bGFyQnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zaXRpb246IC41czsgfVxuXG4uY2lyY3VsYXJCdG46Zm9jdXMge1xuICBvdXRsaW5lOiAwOyB9XG5cbi5hbGdvcml0aG1zIHtcbiAgcGFkZGluZy1yaWdodDogMDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNodesComponent", function() { return CreateNodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/search-service/search.service */ "./src/app/modules/shared/services/search-service/search.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../custom-material/services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");








var CreateNodesComponent = /** @class */ (function () {
    function CreateNodesComponent(SharedSrvc, graphSrvc, sharedGraphSrvc, fb, snackbar) {
        var _this = this;
        this.SharedSrvc = SharedSrvc;
        this.graphSrvc = graphSrvc;
        this.sharedGraphSrvc = sharedGraphSrvc;
        this.fb = fb;
        this.snackbar = snackbar;
        // Output variables for event emitters to parent components
        this.nodeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edgeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cleanData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.restoreEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypes = [];
        this.newNodeCreated = null;
        this.restoredDataResponse = null;
        // constants
        this.TYPE_TEXT = 'Type';
        this.ADD_NEW_LABEL = 'Add New Label';
        this.ADD_NEW_TYPE = 'Add New Type';
        this.ADD_NEW_PROPERTY = 'Add New Property';
        this.toolTipText = '';
        this.deleteContext = 'node';
        this.newNodeName = 'Not Available';
        this.newTypeColor = null;
        // object to handle modals
        this.popupConfig = {
            createNodePopup: false,
            editNodePopup: false,
            deleteNodePopup: false,
            createRelationPopup: false,
            editRelationPopup: false,
            deleteRelationPopup: false
        };
        // modal specific variables
        this.createNodePopup = false;
        this.editNodePopup = false;
        this.deleteNodePopup = false;
        this.createRelationPopup = false;
        this.editRelationPopup = false;
        this.deleteRelationPopup = false;
        this.restoreOptions = false;
        this.disabledBox = false;
        this.enableNewTemplate = false;
        this.clickedNodeID = null;
        this.clickedRelationID = null;
        this.disabledFromBox = false;
        this.disabledToBox = false;
        this.relationSourceNode = null;
        this.relationTargetNode = null;
        this.nodeTypes2 = [];
        this.selectedType = [];
        this.typeOptions = [];
        this.labelProperties = [];
        this.relationTypeOptions = [];
        this.typeProperties = [];
        this.toNames = [];
        this.fromNames = [];
        this.editNodeConfig = {};
        this.deleteNodeConfig = {};
        this.totalNodesProperties = {};
        this.totalRelationsProperties = {};
        this.availablePropertyList = {};
        this.selectedPropertiesObject = {};
        this.showDeletedData = false;
        this.totalName = [];
        // private variables to be used by the class
        this.allowedRestoreEvents = ['node', 'relation'];
        // to set dropdown of from and to 
        this.optionLookUp = function (query, initial) {
            // to change lookup option according to search 
            if (!!query && query.length > 0) {
                var regex_1;
                try {
                    regex_1 = new RegExp(query, "i");
                }
                catch (e) {
                    regex_1 = query;
                }
                return new Promise(function (resolve) {
                    return setTimeout(function () { return resolve(_this.totalName.filter(function (item) { return item.key.match(regex_1); })); }, 500);
                });
            }
            else {
                // to set initial dropdown
                return Promise.resolve(_this.totalName);
            }
        };
    }
    CreateNodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolTipText = 'The Properties section can be left blank to set a default Node';
        $('.toolTipText').tooltip();
        // to set total node and relation properties
        this.sharedGraphSrvc.totalNodesProperties.subscribe(function (data) {
            if (data) {
                _this.totalNodesProperties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data);
                _this.totalName = _this.totalNodesProperties['Name'];
                // to change format for lookup option
                _this.totalName = _this.totalName.map(function (name) {
                    return { key: name };
                });
            }
        });
        this.sharedGraphSrvc.totalRelationsProperties.subscribe(function (data) {
            _this.totalRelationsProperties = data;
        });
        // to set processedData and nodeTypes2
        this.sharedGraphSrvc.processedData.subscribe(function (data) {
            _this.processedData = data;
        });
        this.sharedGraphSrvc.nodeTypes2.subscribe(function (data) {
            _this.nodeTypes2 = data;
        });
        this.sharedGraphSrvc.relationTypeOptions.subscribe(function (data) {
            _this.relationTypeOptions = data;
        });
        this.sharedGraphSrvc.relationsData.subscribe(function (data) {
            _this.relationsData = data;
        });
        this.sharedGraphSrvc.showDeletedData.subscribe(function (toggle) {
            if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
                // if the toggle variable is  only true and false and nothing else
                _this.showDeletedData = toggle;
                // console.log('recieved toggle in create nodes', toggle);
            }
            else {
                // set to false by default
                _this.showDeletedData = false;
            }
        }, function (err) {
            // set to false by default
            console.error('An error occured while subscribing to the toggle for deleted data', err);
            _this.showDeletedData = false;
        });
    };
    CreateNodesComponent.prototype.createNode = function () {
        this.popupConfig.createNodePopup = true;
        this.createNodePopup = true;
        this.disabledBox = false;
        this.enableNewTemplate = false;
        var index = this.nodeTypes2.indexOf(this.ADD_NEW_LABEL);
        if (index < 0) {
            var newOptions = this.nodeTypes2;
            newOptions = this.pushOnTop(this.ADD_NEW_LABEL, newOptions);
            this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newOptions);
        }
        // add the option to add a new label on top
    };
    CreateNodesComponent.prototype.pushOnTop = function (valueToAdd, ArrayToUse, index) {
        if (valueToAdd === void 0) { valueToAdd = 'null'; }
        if (index === void 0) { index = 0; }
        // this function will push the given value in the array at specified index, default for 0
        if (ArrayToUse.length <= 0) {
            return [];
        }
        if (valueToAdd === 'null' && ArrayToUse.length > 0) {
            return ArrayToUse;
        }
        if (valueToAdd !== 'null' && ArrayToUse.length >= 0) {
            ArrayToUse.splice(index, 0, valueToAdd);
            return ArrayToUse;
        }
    };
    CreateNodesComponent.prototype.editNode = function () {
        this.disabledBox = true;
        // this will send the edit event and then the app will wait for the node click event sent back to this component
        this.nodeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.createRelation = function () {
        this.setAllToFalse('relation');
        this.popupConfig.createRelationPopup = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](true);
        this.createRelationPopup = true;
        this.enableNewTemplate = false;
        this.disabledBox = false;
        var extractedTypes = this.relationTypeOptions;
        // add the new type option on top
        var index = extractedTypes.indexOf(this.ADD_NEW_TYPE);
        if (index < 0) {
            extractedTypes = this.pushOnTop(this.ADD_NEW_TYPE, extractedTypes);
        }
        // pass it into the options for dropdown
        this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](extractedTypes);
        return true;
        console.log('variables values are ', this.popupConfig.createRelationPopup + ' ' + this.createRelationPopup);
    };
    CreateNodesComponent.prototype.editRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.hideDelModal === true) {
            // hide the delete modal
            this.hideModal('deleteModal');
            this.hideModal('createNodeModal');
            this.hideModal('createRelationModal');
            this.editData = null;
            this.editRelData = null;
        }
        $('#RelAfterNodeModal').on('hidden.bs.modal', function (e) {
            _this.newNodeCreated = null;
            _this.newNodeName = null;
            // this.createNodePopup = false;
            _this.editNodePopup = false;
            _this.editRelationPopup = false;
            _this.deleteNodePopup = false;
            _this.deleteRelationPopup = false;
            _this.setAllToFalse('node');
            _this.cleanData.emit('afterCreateNode');
        });
        $('#createNodeModal').on('hidden.bs.modal', function (e) {
            // this event will reset the popupConfig object so that everytime correct data is accessed
            _this.setAllToFalse('node');
            _this.createNodePopup = false;
            _this.createRelationPopup = false;
            _this.editNodePopup = false;
            _this.editRelationPopup = false;
            _this.deleteNodePopup = false;
            _this.deleteRelationPopup = false;
            _this.editData = null;
            // clear the selected color
            _this.newTypeColor = null;
            _this.cleanData.emit('node');
        });
        $('#createRelationModal').on('hidden.bs.modal', function (e) {
            // this event will reset the popupConfig object so that everytime correct data is accessed
            _this.setAllToFalse('relation');
            _this.createNodePopup = false;
            // this.createRelationPopup = false;
            _this.editNodePopup = false;
            _this.editRelationPopup = false;
            _this.deleteNodePopup = false;
            _this.deleteRelationPopup = false;
            _this.cleanData.emit('relation');
            _this.fromNames = [];
            _this.toNames = [];
        });
        if ((!!this.editData && !!this.editData.length) || (!!this.editData && !!Object.keys(this.editData).length)) {
            this.disabledBox = true;
            // store the data in internal variable and clear this
            var editNodeData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.editData);
            this.editData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](null);
            // console.log('edit data recieved is ', editNodeData);
            this.editNodeConfig = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({
                properties: editNodeData['properties'],
                type: editNodeData['type'][0],
                id: editNodeData['id']
            });
            this.clickedNodeID = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.editNodeConfig['id']);
            // console.log('editNodeConfig is ', this.editNodeConfig);
            this.selectedType = null;
            // check if the node is already deleted or not, if yes, simply don't let the user to update it
            // tslint:disable-next-line: max-line-length
            if (this.editNodeConfig['properties'].hasOwnProperty('deleted') &&
                (this.editNodeConfig['properties']['deleted'] === 'true' || this.editNodeConfig['properties']['deleted'] === true)) {
                // make changes so that user cannot update the node but rather restore it
                console.log('recieved node is deleted type');
                // let responseBool = true;
                window.setTimeout(function () {
                    _this.restoreOptions = true;
                }, 0);
            }
            else {
                window.setTimeout(function () {
                    _this.restoreOptions = false;
                }, 0);
                console.log('restore options is false for this node');
            }
            this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.nodeTypes2);
            this.selectedType = this.editNodeConfig['type'];
            // trigger update properties to show data before hand
            this.updateProperties(this.selectedType, this.editNodeConfig);
            var prefilledInfo = this.recreatePrefilledData(editNodeData['properties']);
            if (!!prefilledInfo) {
                // console.log('recieved some prefilled info ', prefilledInfo);
                // set the data into the modal
                this.prefillData('createNodeModal', prefilledInfo, this.editNodeConfig['id']);
            }
            else {
                // will allow the modal to be visible anyway
                console.error('An error occured while prefilling the data, did not recieve anyhting');
            }
        }
        else if ((!!this.editRelData && !!this.editRelData.length) || (!!this.editRelData && !!Object.keys(this.editRelData).length)) {
            // execute this portion if edit relationship is triggred
            this.popupConfig.editRelationPopup = true;
            this.editRelationPopup = true;
            console.log('recieved edit relation data is ', this.editRelData);
            this.disabledBox = true;
            var editRelConfig = {
                id: this.editRelData['id'],
                type: this.editRelData['type'],
                properties: this.editRelData['properties'],
                from: this.editRelData['from'],
                to: this.editRelData['to']
            };
            this.clickedRelationID = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](editRelConfig['id']);
            // tslint:disable-next-line: max-line-length
            if (editRelConfig['properties'].hasOwnProperty('deleted') &&
                (editRelConfig['properties']['deleted'] === 'true' || editRelConfig['properties']['deleted'] === true)) {
                // make changes so that user cannot update the node but rather restore it
                console.log('recieved relation is deleted type');
                var responseBool = true;
                this.restoreOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](responseBool);
            }
            else {
                var responseBool = false;
                this.restoreOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](responseBool);
            }
            console.log('fetched relationship types successfully');
            // once types are loaded, set a default type which is the type of selected relation
            // relationTypeOptions are already set
            this.selectedType = editRelConfig['type'];
            this.updateRelProperties(this.selectedType, editRelConfig);
            var prefilledRelInfo = this.recreatePrefilledData(editRelConfig['properties']);
            // disable the from and to boxes
            this.disabledFromBox = true;
            this.disabledToBox = true;
            this.prefillData('createRelationModal', prefilledRelInfo, editRelConfig['id'], 'relation');
            // prefill the connected nodes names for the selected relationship modal
            this.prefillConnectedNodes(editRelConfig);
            this.sharedGraphSrvc.nodeDetails.subscribe(function (nodeDetailsArray) {
                // this variable will have arrays of nodes in same sequesnce the ids were sent
                console.log('recieved connected node information', nodeDetailsArray);
                _this.selectedNodeNameSource = nodeDetailsArray[0]['label'] || '';
                _this.selectedNodeNameTarget = nodeDetailsArray[1]['label'] || '';
            });
            // open the edit modal
            this.disabledBox = true;
            this.showModal('createRelationModal');
        }
        // detect if a new node is entered into the graph, prompt user to create a relationship
        if (!!this.newNodeCreated && Object.keys(this.newNodeCreated).length) {
            // new node has been created, prompt the user
            // Do you wish to create a new relationship with respect to {{node_name}} ?
            if (this.newNodeCreated.hasOwnProperty('created') && this.newNodeCreated['created']) {
                if (this.newNodeCreated.hasOwnProperty('node')) {
                    this.newNodeName = this.newNodeCreated['node']['label'] || 'Not Available';
                    // enable the prompt
                    this.setAllToFalse('node');
                    this.setAllToFalse('relation');
                    this.showModal('RelAfterNodeModal');
                }
            }
        }
        // detect if nodes / relationships have been restored successfully
        console.log('restored recieved options are ', this.restoredDataResponse);
        if (!!this.restoredDataResponse && Object.keys(this.restoredDataResponse).length) {
            console.log('Recieved restored information as ', this.restoredDataResponse);
            if (this.restoredDataResponse.hasOwnProperty('nodes') &&
                Array.isArray(this.restoredDataResponse['nodes']) &&
                this.restoredDataResponse['nodes'].length > 0) {
                // hide the node modal
                this.hideModal('createNodeModal');
                this.cleanData.emit('node');
                this.cleanData.emit('relation');
                this.cleanData.emit('restore');
            }
            if (this.restoredDataResponse.hasOwnProperty('relations') &&
                Array.isArray(this.restoredDataResponse['relations']) &&
                this.restoredDataResponse['relations'].length > 0) {
                // hide the node modal
                this.hideModal('createRelationModal');
            }
            window.setTimeout(function () {
                _this.restoreOptions = false;
            }, 0);
            // clean all the events
            this.cleanData.emit('restore');
            this.cleanData.emit('node');
            this.cleanData.emit('relation');
        }
    };
    CreateNodesComponent.prototype.prefillConnectedNodes = function (RelationData) {
        if (RelationData.hasOwnProperty('from') && RelationData.hasOwnProperty('to')) {
            var nodeIDs = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]([RelationData['from'], RelationData['to']]);
            this.fetchNodeNameFromID(nodeIDs);
        }
    };
    CreateNodesComponent.prototype.fetchNodeNameFromID = function (nodeIDArray, isRestore) {
        if (isRestore === void 0) { isRestore = false; }
        // this function will send the node id to the graph visualilzer which has all the information of the nodes
        // the graph visualizer will fetch the node details using the provided node id and send the details back here
        if (!!nodeIDArray.length) {
            console.log('asking for details of ', nodeIDArray);
            this.sharedGraphSrvc.getNodeDetails(nodeIDArray, isRestore);
        }
        else {
            console.warn('nodeID was not valid while sending event to read node details');
        }
    };
    CreateNodesComponent.prototype.prefillData = function (modalID, dataToFill, IDToSupply, type) {
        var _this = this;
        if (type === void 0) { type = 'node'; }
        if (!modalID) {
            console.warn('cannot prefill data as modal id is not supplied');
        }
        else {
            // both are supplied, time to prefill the modal
            if ($("#" + modalID).length) {
                if (type === 'node') {
                    this.popupConfig.editNodePopup = true;
                    this.editNodePopup = true;
                }
                else if (type === 'relation') {
                    this.popupConfig.editRelationPopup = true;
                    this.editRelationPopup = true;
                }
                this.showModal(modalID);
                // found the modal
                $("#" + modalID).on('shown.bs.modal', function (event) {
                    _this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](dataToFill);
                    // capture the modal text boxes once it is visible
                    /* $(`#${modalID} :text`).each(function() {
                      let key = $(this).attr('id') || null;
                      if (!!dataToFill) {
                        if (Object.keys(dataToFill).indexOf(key) > -1) {
                          // assign this text box a prefilled value from dataToFill
                          $(`[id='${key}']`).val(dataToFill[key]);
                          // disable the Name box since it is unique fot the database
                          /* if (key === 'id_Name') {
                            $(`[id='${key}']`).attr('disabled', 'disabled');
                          }
                        }
                      }
                    }); */
                    // add id of the node to the modal
                    if (!_this.restoreOptions) {
                        _this.addAttribute('edit_btn', type + "_id", IDToSupply);
                    }
                    else {
                        _this.addAttribute('restoreBtn', type + "_id", IDToSupply);
                    }
                });
            }
            else {
                console.warn('did not find any element with provided ID');
            }
        }
    };
    CreateNodesComponent.prototype.addAttribute = function (elementID, attributeKey, attributeValue) {
        $("[id='" + elementID + "']").attr(attributeKey, attributeValue);
    };
    CreateNodesComponent.prototype.recreatePrefilledData = function (prefilledData) {
        // main purpose is to attach id_ to the object keys so that it can be used to find elements in the modal
        if (Object.keys(prefilledData).length > 0) {
            // iterate on the keys and rename them
            // let prefilledObj = {};
            /* Object.keys(prefilledData).forEach(key => {
              // let newKey = `id_${key}`;
      
              prefilledObj[newKey] = prefilledData[key];
            }); */
            return prefilledData;
        }
        else {
            return null;
        }
    };
    CreateNodesComponent.prototype.showModal = function (modalID) {
        $("#" + modalID).modal('show');
    };
    CreateNodesComponent.prototype.hideModal = function (modalID) {
        $("#" + modalID).modal('hide');
    };
    CreateNodesComponent.prototype.setAllToFalse = function (setFor) {
        var _this = this;
        Object.keys(this.popupConfig).forEach(function (key) {
            if (_this.popupConfig[key]) {
                _this.popupConfig[key] = false;
            }
        });
        // reset common properties
        this.selectedType = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]([]);
        this.disabledBox = false;
        this.enableNewTemplate = false;
        if (setFor === 'node') {
            this.createNodePopup = false;
            this.editNodePopup = false;
            this.labelProperties = [];
            this.availablePropertyList = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
            this.deleteNodePopup = false;
            this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
        }
        else if (setFor === 'relation') {
            this.disabledFromBox = false;
            this.disabledToBox = false;
            this.selectedNodeNameSource = null;
            this.selectedNodeNameTarget = null;
            this.typeProperties = [];
            this.createRelationPopup = false;
            this.editRelationPopup = false;
            this.deleteRelationPopup = false;
        }
    };
    CreateNodesComponent.prototype.submitModal = function (type) {
        if (type === void 0) { type = 'create'; }
        var nodeData = {
            id: null,
            properties: {},
            type: null
        };
        nodeData.type = [this.selectedType];
        /* $('#createNodeModal :text').each(function () {
          let key = $(this).attr('id') || null;
          let value = $(this).val() || null;
          nodeData.properties[key] = value;
        }); */
        console.log('properties object on submit is  ', this.selectedPropertiesObject);
        // pass the captured data into the object and move ahead
        nodeData.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
        // Add the selected color to this new type, if selected
        nodeData.properties = this.addNewColorInProperties(nodeData.properties);
        try {
            nodeData = this.validateNodeData(nodeData);
            // hide the modal once the data is created properly
            $('#createNodeModal').modal('hide');
            if (type === 'create') {
                this.insertIntoPropertyList(nodeData.properties);
                this.nodeBtnEvent.emit({ type: 'click', action: 'create', data: nodeData });
                this.popupConfig.createNodePopup = false;
                this.createNodePopup = false;
                this.setAllToFalse('node');
            }
            else if (type === 'edit') {
                // add the updated properties if any, to the availablePropertyList for future use
                this.insertIntoPropertyList(nodeData.properties);
                this.nodeBtnEvent.emit({ type: 'click', action: 'edit', data: nodeData, process: 'complete' });
                this.popupConfig.editNodePopup = false;
                this.editNodePopup = false;
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    CreateNodesComponent.prototype.addNewColorInProperties = function (properties) {
        if (this.newTypeColor) {
            // user selected a color code
            properties['color'] = this.newTypeColor;
        }
        return properties;
    };
    CreateNodesComponent.prototype.submitRelModal = function (type) {
        if (type === void 0) { type = 'create'; }
        var nodeData = null;
        var relationData = null;
        var sourceNode = null;
        var targetNode = null;
        if (type === 'create') {
            nodeData = {
                Name: null
            };
            sourceNode = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](nodeData);
            targetNode = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](nodeData);
            sourceNode.Name = this.selectedNodeNameSource;
            targetNode.Name = this.selectedNodeNameTarget;
        }
        relationData = {
            type: null,
            properties: {}
        };
        relationData.type = [this.selectedType];
        // extract properties from modal if entered
        /* $('#createRelationModal :text').each(function() {
          let key = $(this).attr('id') || null;
          let value = $(this).val() || null;
          relationData.properties[key] = value;
          }); */
        console.log('properties object on submit rel is  ', this.selectedPropertiesObject);
        relationData.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
        try {
            relationData = this.validateRelationData(relationData);
            console.log('relationship created is ', relationData);
            // add the source and target nodes of this relation
            if (type === 'create') {
                relationData['from'] = sourceNode.Name;
                relationData['to'] = targetNode.Name;
            }
            relationData['id'] = relationData['id'];
            this.insertIntoPropertyList(relationData.properties);
            this.edgeBtnEvent.emit({ type: 'click', action: "" + type, data: relationData });
            // hide the modal once the data is created properly
            $('#createRelationModal').modal('hide');
        }
        catch (e) {
            console.log(e);
        }
        // clear from to data
        this.fromNames = [];
        this.fromNames = [];
    };
    CreateNodesComponent.prototype.insertIntoPropertyList = function (propertiesToUpdate) {
        var _this = this;
        // the  purpose of this function is to update the global availablePropertyList
        if (Object.keys(propertiesToUpdate).length > 0) {
            Object.keys(propertiesToUpdate).forEach(function (property) {
                /* if (Object.keys(this.availablePropertyList).indexOf(property) > -1) {
                  debugger;
                  let propertyList = this.availablePropertyList[property]['list'];
                  if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
                    // will enter here if the property Name is already present but the new value not present
                    this.availablePropertyList[property]['list'].push(propertiesToUpdate[property]);
        
                  } else {
                    let sol = propertiesToUpdate[property];
                  }
                } */
                if (Object.keys(_this.totalNodesProperties).indexOf(property) > -1) {
                    var propertyList = _this.totalNodesProperties[property];
                    if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
                        _this.totalNodesProperties[property].push(propertiesToUpdate[property]);
                    }
                }
                else {
                    _this.totalNodesProperties[property] = [];
                    _this.totalNodesProperties[property].push(propertiesToUpdate[property]);
                }
                if (Object.keys(_this.totalRelationsProperties).indexOf(property) > -1) {
                    var propertyList = _this.totalRelationsProperties[property];
                    if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
                        _this.totalRelationsProperties[property].push(propertiesToUpdate[property]);
                    }
                }
                else {
                    _this.totalRelationsProperties[property] = [];
                    _this.totalRelationsProperties[property].push(propertiesToUpdate[property]);
                }
            });
            // this.availablePropertyList = _.cloneDeep(this.availablePropertyList);
        }
    };
    CreateNodesComponent.prototype.validateNodeData = function (nodeObj) {
        if (Object.keys(nodeObj).length > 0) {
            if (nodeObj.hasOwnProperty('type') && nodeObj.type.length > 0) {
                if (nodeObj.hasOwnProperty('properties') && Object.keys(nodeObj.properties).length > 0) {
                    return this.cleanNodeData(nodeObj);
                }
                else {
                    throw new Error('Cannot create a node with no Name');
                }
            }
            else {
                throw new Error('Cannot create a node with no Type');
            }
        }
        else {
            throw new Error('Cannot create a node with no details');
        }
    };
    CreateNodesComponent.prototype.validateRelationData = function (relationObj) {
        if (Object.keys(relationObj).length > 0) {
            if (relationObj.hasOwnProperty('type') && relationObj.type.length > 0) {
                if (relationObj.hasOwnProperty('properties') && Object.keys(relationObj.properties).length > 0) {
                    return this.cleanRelationshipData(relationObj);
                }
                else {
                    // user did not specify any properties, its okay
                }
            }
            else {
                throw new Error('Cannot create a relation with no Type');
            }
        }
        else {
            throw new Error('cannot create a relation with no details');
        }
    };
    CreateNodesComponent.prototype.generateID = function () {
        // this function generates a new id for a the node which will be unique, currently deprecated
        return Math.floor(Date.now() + Math.random());
    };
    CreateNodesComponent.prototype.processData = function (data) {
        if (data.length > 0) {
            var tempData_1 = [];
            data.forEach(function (label) {
                tempData_1.push({ type: label._fields[1], properties: label._fields[0] });
            });
            return tempData_1;
        }
        else
            return [];
    };
    CreateNodesComponent.prototype.extractLabels = function (data) {
        var _this = this;
        this.nodeTypes2 = [];
        data.forEach(function (label) {
            _this.nodeTypes2.push(label.type[0]);
        });
        // console.log('types are ', this.nodeTypes2);
    };
    CreateNodesComponent.prototype.updateProperties = function (event, editProperties) {
        if (editProperties === void 0) { editProperties = null; }
        // fetch the properties of selected label and display it in the dropdown
        // console.log(event)
        if (event === this.ADD_NEW_LABEL) {
            this.TYPE_TEXT = 'New Type';
            console.log('user wants to add a new label');
        }
        else {
            this.TYPE_TEXT = 'Type';
            if (!editProperties || !editProperties.hasOwnProperty('properties')) {
                editProperties = null;
                this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
            }
            else {
                editProperties = editProperties['properties'];
            }
            this.labelProperties = this.getProperties([event], editProperties);
        }
    };
    CreateNodesComponent.prototype.updateRelProperties = function (event, relProperties) {
        if (relProperties === void 0) { relProperties = null; }
        // fetch the properties of selected type and display it in the dropdown
        if (!relProperties || !relProperties.hasOwnProperty('properties')) {
            relProperties = null;
            this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
        }
        else {
            relProperties = relProperties['properties'];
        }
        this.typeProperties = this.getRelProperties([event], relProperties);
    };
    CreateNodesComponent.prototype.getProperties = function (labelName, editProperties) {
        var _this = this;
        if (editProperties === void 0) { editProperties = null; }
        if (labelName.length > 0) {
            var fetchedProperties_1 = [];
            // if properties are supplied, use them else fetch from the processed data
            if (!!editProperties) {
                Object.keys(editProperties).forEach(function (property) {
                    if (property !== 'Type') {
                        fetchedProperties_1.push(property);
                    }
                });
            }
            else {
                this.processedData.forEach(function (labelObj) {
                    if (labelObj.type[0] === labelName[0]) {
                        fetchedProperties_1 = labelObj.properties;
                    }
                });
                // if fetched properties is empty, means this is a new Type the user has selected
                // Add 2 properties to this TYPE : Name and deleted with deleted = false by default
                if (!fetchedProperties_1.length) {
                    fetchedProperties_1.push('Name');
                    fetchedProperties_1.push('deleted');
                }
            }
            // put Name property in the first position
            fetchedProperties_1.forEach(function (property, index) {
                if (property === 'Name' && index !== 0) {
                    fetchedProperties_1 = _this.swap(fetchedProperties_1, index, 0);
                }
            });
            // before sending back, set the available property list for each property
            this.setPropertyList(fetchedProperties_1);
            return fetchedProperties_1.filter(function (ele) {
                return (ele !== 'deleted' && ele !== 'color');
            });
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.getRelProperties = function (relType, relProperties) {
        var _this = this;
        if (relProperties === void 0) { relProperties = null; }
        if (relType.length > 0) {
            var fetchedProperties_2 = [];
            if (!!relProperties) {
                Object.keys(relProperties).forEach(function (property) {
                    if (property !== 'Type') {
                        fetchedProperties_2.push(property);
                    }
                });
            }
            else {
                this.relationsData.forEach(function (Obj) {
                    if (Obj.type === relType[0]) {
                        fetchedProperties_2 = Obj['properties'];
                    }
                });
                if (!fetchedProperties_2.length) {
                    fetchedProperties_2.push('deleted');
                }
            }
            fetchedProperties_2.forEach(function (property, index) {
                if (property === 'Name' && index !== 0) {
                    fetchedProperties_2 = _this.swap(fetchedProperties_2, index, 0);
                }
            });
            // before sending back, set the available property list for each property
            this.setPropertyList(fetchedProperties_2);
            return fetchedProperties_2.filter(function (el) {
                return el !== 'deleted';
            });
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.setPropertyList = function (propertyKeyList) {
        var _this = this;
        // this function will keep updating the global allPropertyList whenever new set of properties are recieved
        try {
            propertyKeyList.forEach(function (propertyName, index) {
                if (!Object.keys(_this.availablePropertyList).length) {
                    // this is the first entry
                    _this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
                    _this.availablePropertyList[propertyName]['list'] = _this.getcollectedProperties(propertyName);
                }
                else {
                    // update the key
                    if (Object.keys(_this.availablePropertyList).indexOf(propertyName) > -1) {
                        _this.availablePropertyList[propertyName]['list'] = _this.getcollectedProperties(propertyName);
                    }
                    else {
                        _this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
                        _this.availablePropertyList[propertyName]['list'] = _this.getcollectedProperties(propertyName);
                    }
                }
                // tslint:disable-next-line: max-line-length
                _this.availablePropertyList[propertyName]['list'] = _this.pushOnTop(_this.ADD_NEW_PROPERTY, _this.availablePropertyList[propertyName]['list']);
            });
            // now add a default key of 'Add new Property' in each list
            // once the objectis prepared, create another object to store the info of selected value
            this.initiatePropertiesValues();
        }
        catch (e) {
            console.warn('Illegal propertyKeyList array supplied in setPropertyList', e);
            this.availablePropertyList = {};
        }
    };
    CreateNodesComponent.prototype.initiatePropertiesValues = function () {
        var _this = this;
        Object.keys(this.availablePropertyList).forEach(function (key) {
            _this.selectedPropertiesObject[key] = '';
        });
        // remove the deleted key if present
        if (Object.keys(this.selectedPropertiesObject).indexOf('deleted') > -1) {
            delete this.selectedPropertiesObject['deleted'];
        }
        console.log('propertyObject looks like ', this.selectedPropertiesObject);
    };
    CreateNodesComponent.prototype.getcollectedProperties = function (propertyName) {
        if (!propertyName) {
            return [];
        }
        var combinedPropertyList = [];
        // find the collected property values of given propertyName from totalNodeProperties and totalRelationProperties and fill it
        if (Object.keys(this.totalNodesProperties).indexOf(propertyName) > -1) {
            combinedPropertyList.push.apply(combinedPropertyList, this.totalNodesProperties[propertyName]);
        }
        if (Object.keys(this.totalRelationsProperties).indexOf(propertyName) > -1) {
            combinedPropertyList.push.apply(combinedPropertyList, this.totalRelationsProperties[propertyName]);
        }
        // make them unique and order by alphabets
        combinedPropertyList = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](combinedPropertyList);
        combinedPropertyList = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](combinedPropertyList);
        return combinedPropertyList;
    };
    CreateNodesComponent.prototype.swap = function (ArrayForSwapping, swapFromIndex, swapToIndex) {
        var temp = ArrayForSwapping[swapFromIndex];
        ArrayForSwapping[swapFromIndex] = ArrayForSwapping[swapToIndex];
        ArrayForSwapping[swapToIndex] = temp;
        return ArrayForSwapping;
    };
    CreateNodesComponent.prototype.removeDirtyData = function (dataObj) {
        var newPropertyObject = {};
        Object.keys(dataObj.properties).forEach(function (property) {
            if (property !== null && property !== undefined) {
                // remove the id_ prefix in the key
                property = property.split('id_')[0];
                newPropertyObject[property] = dataObj.properties[property];
                if (!newPropertyObject[property]) {
                    newPropertyObject[property] = 'not available';
                }
            }
        });
        // remove all undefined keys
        if (newPropertyObject.hasOwnProperty('undefined')) {
            delete newPropertyObject['undefined'];
        }
        if (newPropertyObject.hasOwnProperty('Type')) {
            delete newPropertyObject['Type'];
        }
        return newPropertyObject;
    };
    CreateNodesComponent.prototype.cleanNodeData = function (nodeObj) {
        var newPropertyObject = {};
        // remove any null properties
        newPropertyObject = this.removeDirtyData(nodeObj);
        // assign it back to the original data
        nodeObj.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newPropertyObject);
        console.log('new properties are ', nodeObj);
        // assign a unique id to the node
        nodeObj['id'] = this.generateID();
        if (this.popupConfig.editNodePopup === true) {
            // assign the node id
            this.disabledBox = true;
            var nodeID = !isNaN($("#edit_btn").attr('node_id')) ? $("#edit_btn").attr('node_id') : null;
            console.log('node id is ', nodeID);
            nodeObj['id'] = nodeID;
        }
        // get the type array removed
        nodeObj['type'] = nodeObj['type'][0];
        return nodeObj;
    };
    CreateNodesComponent.prototype.cleanRelationshipData = function (relation) {
        var relationshipProperties = {};
        // remove any null properties
        relationshipProperties = this.removeDirtyData(relation);
        relation.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](relationshipProperties);
        if (this.popupConfig.editRelationPopup === true) {
            // assign the node id
            this.disabledBox = true;
            var relationID = !isNaN($("#edit_btn").attr('relation_id')) ? $("#edit_btn").attr('relation_id') : null;
            console.log('relation id is ', relationID);
            relation['id'] = relationID;
        }
        relation['type'] = relation['type'][0];
        return relation;
    };
    /* updateRelProperties(event, relProperties = null) {
   // fetch the properties of selected type and display it in the dropdown
    if (!relProperties || !relProperties.hasOwnProperty('properties')) {
      relProperties = null;
    } else {
      relProperties = relProperties['properties'];
    }
    this.typeProperties =  this.getRelProperties([event], relProperties);
      // trigger an api to get all the names of the nodes in the graph
    this.graphSrvc.getNodeLabelData().subscribe(response => {
      let temname = [];
      if (response && response.length > 0) {
        response.forEach(data => {
          let keyName = Object.keys(data)[0];
          if(keyName === "Name"){
              temname = data['Name'];
            }
          });
        this.fromNames = _.cloneDeep(temname);
        this.toNames = _.cloneDeep(temname);
        }
      }, error => {
        console.log(error);
        this.fromNames = [];
        this.toNames = [];
      });
    } */
    /* getRelProperties(relType: Array<string>, relProperties = null): any {
      if (relType.length > 0) {
        let fetchedProperties = [];
        if (!!relProperties) {
          Object.keys(relProperties).forEach(property => {
            if (property !== 'Type') {
              fetchedProperties.push(property);
            }
          });
        }
        else {
          this.relationsData.forEach(Obj => {
            if (Obj.type === relType[0]) {
              fetchedProperties = Obj['properties'];
              return fetchedProperties;
            }
          });
        }
        return fetchedProperties.filter(el => {
          return el !== 'deleted';
        });
      } else {
        return [];
      }
    } */
    /* submitRelModal(type = 'create') {
      let nodeData = null;
      let relationData = null;
      let sourceNode = null;
      let targetNode = null;
  
      if (type === 'create') {
        nodeData = {
          Name: null
        };
        sourceNode = _.cloneDeep(nodeData);
        targetNode = _.cloneDeep(nodeData);
        sourceNode.Name = this.selectedNodeNameSource;
        targetNode.Name = this.selectedNodeNameTarget;
      }
  
      relationData = {
        type: null,
        properties: {}
      };
  
      relationData.type = [this.selectedType];
  
  
      // extract properties from modal if entered
      $('#createRelationModal :text').each(function() {
        let key = $(this).attr('id') || null;
        let value = $(this).val() || null;
        relationData.properties[key] = value;
        });
  
      try {
        relationData = this.validateRelationData(relationData);
        console.log('relationship created is ', relationData);
        // add the source and target nodes of this relation
        if (type === 'create') {
          relationData['from'] = sourceNode.Name;
          relationData['to'] = targetNode.Name;
        }
        const relationID = !isNaN($(`#edit_btn`).attr('relation_id')) ? $(`#edit_btn`).attr('relation_id') : null;
        relationData['id'] = relationID;
        this.edgeBtnEvent.emit({ type: 'click', action: `${type}`, data: relationData });
        // hide the modal once the data is created properly
        $('#createRelationModal').modal('hide');
      }
      catch (e) {
        console.log(e);
      }
    } */
    CreateNodesComponent.prototype.updateList = function (key, name) {
        if (name.length > 0) {
            var ans = '';
            // if name is selected from source, remove it from target and vice versa
            if (key == 'from') {
                ans = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.fromNames, function (val) {
                    return val === name[0];
                });
                if (ans) {
                    this.fromNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.fromNames);
                }
            }
            else if (key == 'to') {
                ans = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.toNames, function (val) {
                    return val === name[0];
                });
                if (ans) {
                    this.toNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.toNames);
                }
            }
            else {
                // nothing
            }
        }
    };
    CreateNodesComponent.prototype.activateDelete = function (deleteModalID, triggeredBy) {
        var id = null;
        // first get the information of the modal which is trying to trigger the delete modal, then show the delete modal
        this.deleteContext = triggeredBy;
        // hide the respective node or relation modal before showing delete modal
        if (triggeredBy === 'node') {
            this.hideModal('createNodeModal');
        }
        if (triggeredBy === 'relation') {
            this.hideModal('createRelationModal');
        }
        $("#" + deleteModalID).modal('show');
        // get the id of the node/relation triggering delete
        if (triggeredBy === 'node') {
            id = this.clickedNodeID;
        }
        else if (triggeredBy === 'relation') {
            id = this.clickedRelationID;
        }
        // add the id of node/relation on the delete button for later reference
        this.addAttribute('del_btn', triggeredBy + "_id", id);
    };
    CreateNodesComponent.prototype.submitDelete = function (deleteContext) {
        console.log('delete ', deleteContext);
        // get the id of node/relation  to delete
        var selectedID = $("#del_btn").attr(deleteContext + "_id");
        if (deleteContext === 'node') {
            this.nodeBtnEvent.emit({ type: 'click', action: 'delete', data: { id: selectedID } });
        }
        else if (deleteContext === 'relation') {
            this.edgeBtnEvent.emit({ type: 'click', action: 'delete', data: { id: selectedID } });
        }
        else {
            // nothing
        }
        this.hideModal('deleteModal');
    };
    CreateNodesComponent.prototype.addNewProperty = function () {
        console.log('add new property');
        this.enableNewTemplate = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](true);
    };
    CreateNodesComponent.prototype.deleteProperty = function (propertyName, modalType) {
        var _this = this;
        if (modalType === void 0) { modalType = 'node'; }
        if (!!propertyName) {
            // find the property in the labelProperties array and if present, simply remove it
            if (modalType === 'node') {
                this.labelProperties.filter(function (property, index) {
                    if (property === propertyName) {
                        console.log('found ', property + ' at ' + index);
                        _this.updateSelectedPropertiesObject(property, 'delete');
                        return _this.labelProperties.splice(index, 1);
                    }
                });
            }
            else if (modalType === 'relation') {
                this.typeProperties.filter(function (property, index) {
                    if (property === propertyName) {
                        console.log('found ', property + ' at ' + index);
                        _this.updateSelectedPropertiesObject(property, 'delete');
                        return _this.typeProperties.splice(index, 1);
                    }
                });
            }
        }
    };
    CreateNodesComponent.prototype.saveNewProperty = function (modalType) {
        var modalConfig = {
            node: 0,
            relation: 1
        };
        console.log('adding new property in ', modalType);
        var newPropertyForm = (modalType === 'node') ? $("#NewPropertyGroup :text") : $("#NewPropertyGroupRel :text");
        var propertyKey = null;
        // let propertyValue = null;
        if (newPropertyForm.length) {
            propertyKey = $("[id='" + $(newPropertyForm[0]).attr('id') + "']").val();
            // propertyValue  = $(`[id='${$(newPropertyForm[1]).attr('id')}']`).val();
            if (!propertyKey) {
                alert('Cannot add a property without a Name');
            }
            else {
                /* if (!propertyValue) {
                  propertyValue = "null";
                } */
                // console.log(propertyKey + '  ' + propertyValue);
                if (modalType === 'node') {
                    this.labelProperties.push(propertyKey);
                    this.labelProperties = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.labelProperties);
                    this.addNewPropertyToAvailablePropterties(propertyKey, this.ADD_NEW_PROPERTY);
                    // this.appendNewElement({name: propertyKey});
                    this.enableNewTemplate = false;
                }
                else if (modalType === 'relation') {
                    this.typeProperties.push(propertyKey);
                    this.typeProperties = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.typeProperties);
                    this.enableNewTemplate = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](false);
                    this.addNewPropertyToAvailablePropterties(propertyKey, this.ADD_NEW_PROPERTY);
                }
                this.updateSelectedPropertiesObject(propertyKey, 'add');
            }
        }
        // clear the property box
        $('#propertyKey').val('');
        $('#propertyKeyRel').val('');
    };
    CreateNodesComponent.prototype.addNewPropertyToAvailablePropterties = function (propertyName, defaultTextToAdd) {
        if (defaultTextToAdd === void 0) { defaultTextToAdd = ''; }
        // add the new property name in the availablePropertiesList if not exisits and add a default value of ADD_NEW_PROPERTY
        if (Object.keys(this.availablePropertyList).indexOf(propertyName) <= -1) {
            // it is a new property
            this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
            if (defaultTextToAdd) {
                this.availablePropertyList[propertyName]['list'] = [defaultTextToAdd];
            }
        }
    };
    CreateNodesComponent.prototype.removeNewPropertyFromAvailableProperties = function (propertyName) {
        if (Object.keys(this.availablePropertyList).indexOf(propertyName) > -1) {
            // property found, simlpy delete the property
        }
    };
    CreateNodesComponent.prototype.updateSelectedPropertiesObject = function (key, action) {
        if (action === void 0) { action = 'add'; }
        // add / delete the provided key from selectedPropertiesObject
        if (action === 'add') {
            if (Object.keys(this.selectedPropertiesObject).indexOf(key) <= -1) {
                this.selectedPropertiesObject[key] = "";
                this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
            }
        }
        else if (action === 'delete') {
            if (Object.keys(this.selectedPropertiesObject).indexOf(key) > -1) {
                delete this.selectedPropertiesObject[key];
                this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
            }
        }
    };
    // getPropertyValues() {
    //   // get the label information from the graph and then seperate different keys and their already filled options
    //   this.graphSrvc.getNodeLabelData().pipe(map(data => {
    //     if (!data.length) {
    //       return of({});
    //     }
    //     // recieveing some data, filter out the name and labels key and send the rest
    //     console.log('label data is ', data);
    //     return of(data);
    //   }));
    // }
    CreateNodesComponent.prototype.promptRelation = function () {
        // call create relation procedure
        this.hideModal('RelAfterNode');
        this.showModal('createRelationModal');
        this.createRelation();
    };
    CreateNodesComponent.prototype.addNewLabel = function (labelFor) {
        if (labelFor === void 0) { labelFor = null; }
        var val = null;
        if (labelFor === 'node') {
            val = $("#id_newLabelNode").val();
            if (!!val) {
                // push it in the typeOptions
                var newTypes = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.typeOptions);
                newTypes = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.pushOnTop(val, newTypes, 1));
                newTypes = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](newTypes);
                this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newTypes);
            }
        }
        else if (labelFor === 'relation') {
            val = $("#id_newLabelRelation").val();
            if (!!val) {
                var newTypesRel = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.relationTypeOptions);
                newTypesRel = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.pushOnTop(val, newTypesRel, 1));
                newTypesRel = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](newTypesRel);
                this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newTypesRel);
            }
        }
        console.log(val);
        this.selectedType = null;
    };
    CreateNodesComponent.prototype.updateSelectedOption = function (propertValueEvent, propertyKey) {
        console.log("property is  " + propertyKey + " and value is " + this.selectedPropertiesObject[propertyKey]);
        if (!!propertyKey && this.selectedPropertiesObject[propertyKey] === this.ADD_NEW_PROPERTY) {
            console.log('selected NEW PROPERTY for ', propertyKey);
            this.availablePropertyList[propertyKey]['enableNewProperty'] = true;
        }
    };
    CreateNodesComponent.prototype.hasList = function (data) {
        // check whether provided data is present in the availablePropertyList and return accordingly
        if (!!data) {
            if (Object.keys(this.availablePropertyList).indexOf(data) > -1) {
                console.log('will display dropdown for ', data);
                return true;
            }
            else {
                console.log('will display text box for ', data);
                return false;
            }
        }
        else {
            return false;
        }
    };
    CreateNodesComponent.prototype.appendNewElement = function (elementDetails) {
        var newPropertyEl = "<div class=\"modalItem\" id=\"newPropertiesContainer_" + elementDetails['name'] + "\">\n    <p class=\"sectionName\">" + elementDetails['name'] + "</p>\n    <span class=\"inputSpan\">\n        <div class=\"ui corner labeled input normalTextBox\">\n            <input type=\"text\" placeholder=\"Enter Value...\" id=\"id_" + elementDetails['name'] + "\" \n            [(ngModel)] = \"selectedPropertiesObject['" + elementDetails['name'] + "']\" \n            (ngModelChange)=\"updateSelectedOption($event, '" + elementDetails['name'] + "')\">\n        </div>\n    </span>\n    <span class=\"supportIcons\" (click)=\"deleteProperty('" + elementDetails['name'] + "')\"><i class=\"far fa-trash-alt\"></i></span>\n</div>";
        // add this element into provided div class
        $(".newPropertyGroup").append(newPropertyEl);
    };
    CreateNodesComponent.prototype.updateNewPropertyValue = function (keyupEvent, data) {
        if (keyupEvent.key === 'Enter') {
            // push the new value entered into the propertyValues list
            if (!!data) {
                // tslint:disable-next-line: max-line-length
                this.availablePropertyList[data]['list'] = this.pushOnTop(this.selectedPropertiesObject[data], this.availablePropertyList[data]['list'], 1);
                this.availablePropertyList[data]['enableNewProperty'] = false;
            }
        }
    };
    CreateNodesComponent.prototype.restoreData = function (restoreType) {
        // fetch the id of element requested to restore
        var clickedElementID = this.getAttribute('restoreBtn', restoreType + "_id");
        clickedElementID = isNaN(clickedElementID) ? null : parseInt(clickedElementID, 10);
        // now send the data to restore the element
        if ((clickedElementID !== null && clickedElementID !== undefined) && this.allowedRestoreEvents.indexOf(restoreType) > -1) {
            // emit data for node restore
            this.restoreEvent.emit({ type: restoreType, data: { id: clickedElementID } });
        }
        else {
            // tslint:disable-next-line: max-line-length
            console.error('An error occured while restoring the data, either clickedElementID is not valid or the event type is not of node/relation');
        }
    };
    CreateNodesComponent.prototype.getAttribute = function (elementID, attributeKey) {
        return $("#" + elementID).attr("" + attributeKey);
    };
    CreateNodesComponent.prototype.ngDoCheck = function () {
        // resetting the value so that it stays updated anytime needed, temporary bug fix for restoredOptions variable not setting properly
        this.restoreOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.restoreOptions);
    };
    CreateNodesComponent.prototype.selectedColorForNewType = function (event) {
        console.log('event from parent ', event);
        this.newTypeColor = event;
        if (Object.keys(this.totalNodesProperties).indexOf('color') > -1 && this.totalNodesProperties['color'].indexOf(event) > -1) {
            // the color is already used
            this.snackbar.warn({ message: 'This color is already used, select another one !' });
        }
        else {
            console.log('This is the new color');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "nodeBtnEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "edgeBtnEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "cleanData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "restoreEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "editData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "editRelData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "hideDelModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CreateNodesComponent.prototype, "nodeTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "newNodeCreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "restoredDataResponse", void 0);
    CreateNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-nodes',
            template: __webpack_require__(/*! ./create-nodes.component.html */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html"),
            styles: [__webpack_require__(/*! ./create-nodes.component.scss */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_4__["GraphDataService"],
            _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"]])
    ], CreateNodesComponent);
    return CreateNodesComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\r\n    <div class=\"headerWrapper\">\r\n        <div class=\"row\">\r\n            <div class=\"col-3 logo left-logo\">\r\n                <img src=\"assets/societal-logo.png\" />\r\n            </div>\r\n            <div class=\"col-9 rightToolbar\">\r\n                <div class=\"dropdown\">\r\n                    <div class=\"profilePic\">\r\n                        <p>Hi Rishabh</p>\r\n                        <img src=\"./../../../../../assets/round_profile.jpg\" />\r\n                    </div>\r\n                    <div class=\"dropdown-content\">\r\n                        <a href=\"/profile\">PROFILE</a>\r\n                        <a href=\"/settings\">SETTINGS</a>\r\n                        <a href=\"/logout\">LOGOUT</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerWrapper {\n  height: 10vh;\n  background: #fff; }\n\n.container-fluid {\n  background: #fff; }\n\n.rightToolbar {\n  height: 100%;\n  float: right;\n  width: 30%; }\n\n.login-button {\n  border-radius: 20px;\n  font-size: 14px;\n  line-height: 2;\n  min-width: 90px;\n  float: right;\n  background: #5f5f5f;\n  border: none;\n  text-decoration: none; }\n\n.login-button:active:focus {\n  background: #5f5f5e; }\n\n.login-button:hover {\n  box-shadow: 2px 7px 18px 1px rgba(95, 95, 95, 0.76);\n  transition: 0.7s; }\n\n.dropdown {\n  position: relative;\n  float: right;\n  z-index: 10; }\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: 0.5s; }\n\n.dropdown-content:hover {\n  display: block;\n  transition: 1s; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  padding: 0;\n  min-height: 120px;\n  min-width: 220px;\n  right: 1px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1; }\n\n.dropdown-content a {\n    padding: 20px 10px;\n    display: block;\n    text-decoration: none;\n    color: grey;\n    font-weight: 400; }\n\n.dropdown-content a:hover {\n    background-color: #5f5f5f;\n    color: white;\n    transition: 0.7s;\n    border-radius: 5px; }\n\n.profilePic {\n  margin-right: 30px;\n  border-radius: 50%;\n  display: -webkit-box;\n  /* img:hover {\r\n        width: 80px;\r\n        height: 80px;\r\n        transition: 0.5s;\r\n    } */ }\n\n.profilePic img {\n    cursor: pointer;\n    width: 70px;\n    height: 70px; }\n\n.profilePic p {\n    margin-top: 30px;\n    margin-right: 20px;\n    cursor: pointer; }\n\n.profileDetails {\n  position: absolute;\n  background: whitesmoke;\n  color: black;\n  display: inline;\n  min-width: 100px; }\n\n.left-logo img {\n  max-height: 10vh; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLWhlYWRlci9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcZGFzaGJvYXJkLXYyXFxjb21wb25lbnRzXFxkYXNoYm9hcmQtdjItaGVhZGVyXFxkYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwibW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItaGVhZGVyL2Rhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbURBQW1EO0VBQ25ELGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBWSxFQUFBOztBQUdoQjtFQUVRLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBRWhCLFVBQVU7RUFDViwrQ0FBK0M7RUFjL0Msa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUF4QmQ7SUFXUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBZnhCO0lBa0JRLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBOztBQU0xQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBTXBCOzs7O09DaEJHLEVEb0JDOztBQWJSO0lBS1EsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBUHBCO0lBZVEsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUVRLGdCQUFnQixFQUFBIiwiZmlsZSI6Im1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLWhlYWRlci9kYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcldyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ucmlnaHRUb29sYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbjphY3RpdmU6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDE4cHggMXB4IHJnYmEoOTUsIDk1LCA5NSwgMC43Nik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgei1pbmRleCA6IDEwO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIge1xyXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50OmhvdmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICAvLyB0b3A6IDg2cHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9maWxlUGljIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLyogaW1nOmhvdmVyIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH0gKi9cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGVEZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubGVmdC1sb2dvIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTB2aDtcclxuICAgIH1cclxufSIsIi5oZWFkZXJXcmFwcGVyIHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5yaWdodFRvb2xiYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDMwJTsgfVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5sb2dpbi1idXR0b246YWN0aXZlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZTsgfVxuXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDdweCAxOHB4IDFweCByZ2JhKDk1LCA5NSwgOTUsIDAuNzYpO1xuICB0cmFuc2l0aW9uOiAwLjdzOyB9XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAxMDsgfVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC41czsgfVxuXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAxczsgfVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDIyMHB4O1xuICByaWdodDogMXB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB6LWluZGV4OiAxOyB9XG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuXG4ucHJvZmlsZVBpYyB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogaW1nOmhvdmVyIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH0gKi8gfVxuICAucHJvZmlsZVBpYyBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7IH1cbiAgLnByb2ZpbGVQaWMgcCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5wcm9maWxlRGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1pbi13aWR0aDogMTAwcHg7IH1cblxuLmxlZnQtbG9nbyBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMHZoOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent() {
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
    };
    DashboardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-header',
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper sidebar-wrapper\">\r\n    <div class=\"sidebarBody p-0\">\r\n        <div class=\"sidebarBodyTitle\">\r\n            <p>Filter By Attributes</p>\r\n        </div>\r\n        <div class=\"sidebarElements\" *ngIf=\"totalAtrributeOptions?.length > 0\">\r\n            <div class=\"item-container\">\r\n                <div class=\"item\" *ngFor=\"let attributeOptions of totalAtrributeOptions; let i = index\">\r\n                    <div *ngIf=\"attributeOptions\">\r\n                        <span class=\"\">\r\n\r\n                        </span>\r\n                        <a class=\"item-text hoverable\" (click)=\"networkElementClick(attributeOptions['attribute']);attributeOptions['rotate'] = !attributeOptions['rotate']\" data-toggle=\"collapse\" href=\"#collapseExample{{i}}\" role=\"button\" [attr.aria-expanded]=\"attributeOptions['rotate']\"\r\n                            [attr.aria-controls]=\"'collapseExample'+i\" [ngClass]=\"{'rotate': attributeOptions['rotate'], 'no-rotate': !attributeOptions['rotate']}\">{{attributeOptions['attribute']}}\r\n                            <span class=\"ele-count count-org\">{{attributeOptions['options'].length}}</span>\r\n                        </a>\r\n                        <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" [attr.href]=\"'#collapseExample'+i\" role=\"button\" [attr.aria-expanded]=\"attributeOptions?.rotate\" [attr.aria-controls]=\"'collapseExample'+i\" (click)=\"attributeOptions['rotate'] = !attributeOptions['rotate']\"\r\n                            [ngClass]=\"{'rotate': attributeOptions?.rotate, 'no-rotate': !attributeOptions?.rotate}\">\r\n                        </span>\r\n                        <div class=\"collapse\" [ngClass]=\"{'show-drop': attributeOptions?.rotate, 'hide-drop': !attributeOptions?.rotate}\">\r\n                            <sui-multi-select [(ngModel)]=\"selectedAttributeOptions[attributeOptions['attribute']]\" [options]=\"attributeOptions['options']\" [maxSelected]=\"15\"  #totalAtrributeOptions>\r\n                                <div class=\"ui icon search input\">\r\n                                    <i class=\"search icon\"></i>\r\n                                    <input suiSelectSearch type=\"text\" placeholder=\"Search {{attributeOptions['attribute']}}...\">\r\n                                </div>\r\n                                <div class=\"scrolling menu\">\r\n                                    <sui-select-option *ngFor=\"let o of totalAtrributeOptions.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                                </div>\r\n                            </sui-multi-select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"btn-container d-flex justify-content-around\">\r\n            <div class=\"searchBtnWrapper btn-sidebar\">\r\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\r\n            </div>\r\n            <div class=\"searchBtnWrapper btn-sidebar\">\r\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"hitSearchGraph()\">Apply</button>\r\n            </div>\r\n\r\n        </div> -->\r\n        <div class=\"sidebarBodyTitle\">\r\n            <p>Filter By Relationships</p>\r\n        </div>\r\n        <div class=\"sidebarElements\">\r\n            <div class=\"item\">\r\n                <sui-multi-select [(ngModel)]=\"selectedRelation\" [options]=\"relationOptions\" [maxSelected]=\"5\" #relation>\r\n                    <div class=\"ui icon search input\">\r\n                        <i class=\"search icon\"></i>\r\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search Relationships...\">\r\n                    </div>\r\n                    <div class=\"scrolling menu\">\r\n                        <sui-select-option *ngFor=\"let o of relation.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                    </div>\r\n                </sui-multi-select>\r\n                <!-- <div class=\"rel-tabs-container\" *ngFor=\"let r of relationOptions\">\r\n                    <div class=\"rel-tab\" (click)=\"relationclickEvent(r)\" id={{r}}>\r\n                        <p>{{r}}</p>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"btn-container d-flex justify-content-around custom-space\">\r\n                    <div class=\"searchBtnWrapper btn-sidebar\">\r\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\r\n                    </div>\r\n                    <div class=\"searchBtnWrapper btn-sidebar\">\r\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"hitSearchGraph()\">Apply</button>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"btn-container d-flex justify-content-around\">\r\n                    <span>Show deleted data</span>\r\n                    <app-toggle-switch (toggleEvent)=\"NodeLimitToggleHandler($event)\"></app-toggle-switch>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"searchBtnWrapper btn-sidebar\">\r\n            <button class=\"btn btn-default btn-md searchBtn\" (click)=\"noderelationSearchGraph()\">Apply Both</button>\r\n        </div> -->\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kanit&display=swap\");\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n::-webkit-scrollbar-thumb {\n  background-color: #5f5f5f; }\n.sidebar-wrapper {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 90vh;\n  background: #fff; }\n.custom-space {\n  margin-top: 75px; }\n.logo {\n  text-align: center; }\n.logo img {\n  cursor: pointer; }\n.sidebarBodyTitle {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center; }\n.sidebarBodyTitle p {\n    padding: 0 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background: transparent;\n    color: #5f5f5f;\n    font-weight: bold;\n    border-radius: 5px;\n    transition: 1s;\n    text-align: left; }\n.sidebarElements {\n  width: 100%;\n  padding: 25px 0; }\n.item {\n  font-size: 16px;\n  width: 100%;\n  padding: 0; }\n.item span {\n    margin-right: 20px; }\n.hoverable:hover {\n  font-size: 18px;\n  transition: 0.5s; }\n.item-container {\n  height: 40vh;\n  overflow-y: auto; }\n.item-container::-webkit-scrollbar {\n  display: none; }\n.item,\n.item span {\n  min-height: 50px;\n  line-height: 2.7; }\n.item-text {\n  cursor: pointer;\n  text-decoration: none;\n  color: #000; }\n.fa-chevron-right {\n  float: right;\n  cursor: pointer; }\n.rotate {\n  transform: rotate(90deg); }\n.no-rotate {\n  transform: rotate(0deg); }\n.click-pink {\n  color: pink; }\n.hide {\n  display: none; }\n.show {\n  display: block; }\n.show-drop {\n  transition: all linear 0.5s;\n  display: block; }\n.hide-drop {\n  display: none; }\n.ui.teal.left.pointing.label {\n  background: #5f5f5f !important; }\n.searchBtnWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  bottom: 0;\n  width: 100%; }\n.searchBtnWrapper button {\n    background: #e4e4e4;\n    color: #000;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n.searchBtnWrapper button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n.btn-sidebar {\n  display: inline; }\n.btn-container {\n  margin-bottom: 25px; }\n.rel-tabs-container {\n  display: inline-block; }\n.rel-tab p {\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #F5F5F5;\n  color: #30333a;\n  margin: 4px;\n  padding: 3px 7px;\n  border-radius: 3px; }\n.ele-count {\n  border-radius: 50%;\n  padding: 8px;\n  margin-left: 10px;\n  text-align: center;\n  display: inline; }\n.wrapper hr {\n  margin-bottom: 2em;\n  margin-top: 0.15em; }\n.rel-tabs-container .selected {\n  box-shadow: -4px 4px 17px -8px rgba(0, 0, 0, 0.75); }\n.count-org {\n  background-color: #F5F5F5; }\n.count-person {\n  background-color: #F5F5F5; }\n.count-department {\n  background-color: #F5F5F5; }\nspan.ele-count.count-org {\n  padding: 9px 11px 9px 11px; }\n.c_ff4444 {\n  background-color: '#ff4444'; }\n.c_ffbb33 {\n  background-color: '#ffbb33'; }\n.c_00C851 {\n  background-color: '#00C851'; }\n.c_33b5e5 {\n  background-color: '#33b5e5'; }\n.c_CC0000 {\n  background-color: '#CC0000'; }\n.c_FF8800 {\n  background-color: '#FF8800'; }\n.c_007E33 {\n  background-color: '#007E33'; }\n.c_0099CC {\n  background-color: '#0099CC'; }\n.c_9933CC {\n  background-color: '#9933CC'; }\n.c_0d47a1 {\n  background-color: '#0d47a1'; }\n.c_2BBBAD {\n  background-color: '#2BBBAD'; }\n.c_c51162 {\n  background-color: '#c51162'; }\n.spanWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-weight: bold;\n  max-width: 135px; }\n@media screen and (max-width: 1100px) {\n  .sidebar-wrapper {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLXNpZGViYXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXGRhc2hib2FyZC12MlxcY29tcG9uZW50c1xcZGFzaGJvYXJkLXYyLXNpZGViYXJcXGRhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUFZO0FBQ1o7RUFFSSw0Q0FBNEM7RUFDNUMseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUdQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUVwQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7QUFJdEI7RUFHUSxlQUFlLEVBQUE7QUFJdkI7RUFDSSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBSHRCO0lBTVEsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFFakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVUsRUFBQTtBQUhkO0lBT1Esa0JBQWtCLEVBQUE7QUFJMUI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxhQUFhLEVBQUE7QUFHakI7O0VBRUksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7QUFHZjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHbkI7RUFDSSx3QkFBd0IsRUFBQTtBQUk1QjtFQUNJLHVCQUF1QixFQUFBO0FBSTNCO0VBQ0ksV0FBVyxFQUFBO0FBR2Y7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFFSSwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBO0FBR2xCO0VBQ0ksYUFBYSxFQUFBO0FBR2pCO0VBQ0ksOEJBQThCLEVBQUE7QUFHbEM7RUFDSSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXLEVBQUE7QUFQZjtJQVVRLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLCtDQUErQyxFQUFBO0FBYnZEO0lBZ0JRLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLGVBQWUsRUFBQTtBQUduQjtFQUNJLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0kscUJBQXFCLEVBQUE7QUFHekI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3RCO0VBRUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUd0QjtFQUdJLGtEQUFrRCxFQUFBO0FBR3REO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksMEJBQTBCLEVBQUE7QUFHOUI7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0FBSXBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJtb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYW5pdCZkaXNwbGF5PXN3YXAnKTtcclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMyU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLy8gd2lkdGg6IDIzJTtcclxuICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5jdXN0b20tc3BhY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDcwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyQm9keVRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcCB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMnB4IDdweCAxOHB4IDFweCByZ2JhKDk1LCA5NSwgOTUsIDAuNzYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZWJhckVsZW1lbnRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjVweCAwO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyBoZWlnaHQ6IDIwJTtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhvdmVyYWJsZTpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uaXRlbS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLml0ZW0tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaXRlbSxcclxuLml0ZW0gc3BhbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNztcclxufVxyXG5cclxuLml0ZW0tdGV4dCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZhLWNoZXZyb24tcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm90YXRlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIC8vIHRyYW5zaXRpb246IC44cztcclxufVxyXG5cclxuLm5vLXJvdGF0ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC8vIHRyYW5zaXRpb246IC44cztcclxufVxyXG5cclxuLmNsaWNrLXBpbmsge1xyXG4gICAgY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2hvdy1kcm9wIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjVzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oaWRlLWRyb3Age1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVpLnRlYWwubGVmdC5wb2ludGluZy5sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hCdG5XcmFwcGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICBidXR0b246YWN0aXZlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc2lkZWJhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5yZWwtdGFicy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucmVsLXRhYiBwIHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCA1MSwgNTgpO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uZWxlLWNvdW50IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLndyYXBwZXIgaHIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNWVtO1xyXG59XHJcblxyXG4ucmVsLXRhYnMtY29udGFpbmVyIC5zZWxlY3RlZCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggNHB4IDE3cHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggNHB4IDE3cHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG4uY291bnQtb3JnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5jb3VudC1wZXJzb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLmNvdW50LWRlcGFydG1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuc3Bhbi5lbGUtY291bnQuY291bnQtb3JnIHtcclxuICAgIHBhZGRpbmc6IDlweCAxMXB4IDlweCAxMXB4O1xyXG59XHJcblxyXG4uY19mZjQ0NDQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZjQ0NDQnXHJcbn1cclxuXHJcbi5jX2ZmYmIzMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnI2ZmYmIzMydcclxufVxyXG5cclxuLmNfMDBDODUxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDBDODUxJ1xyXG59XHJcblxyXG4uY18zM2I1ZTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMzM2I1ZTUnXHJcbn1cclxuXHJcbi5jX0NDMDAwMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnI0NDMDAwMCdcclxufVxyXG5cclxuLmNfRkY4ODAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjRkY4ODAwJ1xyXG59XHJcblxyXG4uY18wMDdFMzMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMDdFMzMnXHJcbn1cclxuXHJcbi5jXzAwOTlDQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnIzAwOTlDQydcclxufVxyXG5cclxuLmNfOTkzM0NDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjOTkzM0NDJ1xyXG59XHJcblxyXG4uY18wZDQ3YTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwZDQ3YTEnXHJcbn1cclxuXHJcbi5jXzJCQkJBRCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnIzJCQkJBRCdcclxufVxyXG5cclxuLmNfYzUxMTYyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjYzUxMTYyJ1xyXG59XHJcblxyXG4uc3BhbldyYXBwZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1heC13aWR0aDogMTM1cHg7XHJcbn1cclxuXHJcbi8vIGFuIGF0dGVtcHQgdG8gbWFrZSBpdCBhIGJpdCByZXNwb25zaXZlXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICcxMTAwcHgnKSB7XHJcbiAgICAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_modules_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/search-service/search.service */ "./src/app/modules/shared/services/search-service/search.service.ts");
/* harmony import */ var src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");









var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent(graphDataService, sharedGraphData, searchService, toolbarShrdSrvc) {
        this.graphDataService = graphDataService;
        this.sharedGraphData = sharedGraphData;
        this.searchService = searchService;
        this.toolbarShrdSrvc = toolbarShrdSrvc;
        // tslint:disable-next-line: no-input-rename
        this.nodeLimitOnEnter = null;
        this.showDisabled = false;
        this.defaultColor = {
            Academia: 'c_ff4444',
            Consulting: 'c_ffbb33',
            Government: 'c_00C851',
            'Impact Investor': 'c_33b5e5',
            'International Agency': 'c_CC0000',
            Media: 'c_FF8800',
            'NGO/CBO': 'c_007E33',
            People: 'c_0099CC',
            Philanthropy: 'c_9933CC',
            Platform: 'c_0d47a1',
            'Private Sector': 'c_2BBBAD',
            'Research Institute': 'c_c51162'
        };
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.relationOptions = [];
        this.selectedRelationship = [];
        this.selectedRelation = [];
        this.selectedAttributeOptions = [];
        this.selectedGraph = [];
        this.graphData = {};
        this.relstatus = false;
        this.edgesNewObject = [];
        this.nodesNewObject = [];
        this.graphInitData = [];
        this.totalNodesProperties = {};
        this.totalRelationsProperties = {};
        this.nodeTypes2 = [];
        this.relationTypeOptions = [];
        this.totalAtrributeOptions = [];
        // Query to fetch all labels
        this.queryObj = {
            raw: true,
            query: "MATCH (p) WITH DISTINCT keys(p) AS keys,p\n     with DISTINCT labels(p) as label,keys \n     UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label\n     RETURN collect(allfields),label"
        };
        this.nodeRelationsDetailsObject = { nodes: {}, relations: {} };
    }
    ;
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.getGraph();
    };
    DashboardSidebarComponent.prototype.ngOnChanges = function () {
        // update all dropdown when new node is created
        // get the createdEvent
        if (this.newNodeCreated) {
            var nodeData = this.newNodeCreated['event'].split('_');
            var nodeEvent = this.newNodeCreated['event'].split('_')[0];
            if (nodeEvent === 'NodeEvent') {
                if (nodeData[1] === 'restore') {
                    this.updateSidebar(nodeData[2]);
                }
                else {
                    this.getGraph();
                    this.newNodeCreated = '';
                }
            }
        }
        // detect if the user hit enter while entering the nodelimit value
        if (!!this.nodeLimitOnEnter && !isNaN(this.nodeLimitOnEnter)) {
            // user pressed entered after filling a valid number
            console.log('enter detected after ', this.nodeLimitOnEnter);
            this.searchGraph();
        }
    };
    /**
     * Updates node relation details object
     * @description This function updates the global nodeRelationDetails object and send it to algo runner for further use
     * @param detailsObj
     */
    // tslint:disable-next-line: max-line-length
    DashboardSidebarComponent.prototype.updateNodeRelationDetailsObject = function (detailsObj) {
        if (detailsObj.hasOwnProperty('nodeTypes')) {
            this.nodeRelationsDetailsObject.nodes['types'] = detailsObj.nodeTypes;
        }
        if (detailsObj.hasOwnProperty('relationTypes')) {
            this.nodeRelationsDetailsObject.relations['types'] = detailsObj.relationTypes;
        }
        if (detailsObj.hasOwnProperty('nodeProperties')) {
            this.nodeRelationsDetailsObject.nodes['properties'] = detailsObj.nodeProperties;
        }
        if (detailsObj.hasOwnProperty('relationProperties')) {
            this.nodeRelationsDetailsObject.relations['properties'] = detailsObj.relationProperties;
        }
        // send it to algo runner
        this.toolbarShrdSrvc.sendNodeRelationDetails(this.nodeRelationsDetailsObject);
        this.toolbarShrdSrvc.sendNodeRelationDetailsStatic(this.nodeRelationsDetailsObject);
    };
    // set all data in sidebar dropdown
    DashboardSidebarComponent.prototype.getGraph = function () {
        var _this = this;
        this.totalAtrributeOptions = [];
        // fetch the properties of all the nodes and relationships
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([this.graphDataService.getGraphProperties(), this.getNodeTypes()]).subscribe(function (results) {
            _this.updateNodeRelationDetailsObject({
                nodeTypes: results[1],
                nodeProperties: results[0]['nodes'],
                relationProperties: results[0]['relations']
            });
            // results[0] is our character
            // results[1] is our character homeworld
            if (results[0].hasOwnProperty('nodes')) {
                // push name to top
                _this.setNodeProperties(results[0]);
                var index = _this.totalAtrributeOptions.findIndex(function (obj) { return obj['attribute'] === "Name"; });
                _this.totalAtrributeOptions = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_this.swap(_this.totalAtrributeOptions, index, 0));
            }
            if (results[1].length > 0) {
                // push type to second position
                _this.setTypes(results[1]);
                var index = _this.totalAtrributeOptions.findIndex(function (obj) { return obj['attribute'] === "Type"; });
                _this.totalAtrributeOptions = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_this.swap(_this.totalAtrributeOptions, index, 1));
            }
        }, function (err) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])({ error: 'Error while reading graph properties' });
            console.error(err);
        });
        this.getRelationTypes().subscribe(function (response) {
            // this.graphInitData.push(data);
            _this.relationOptions = _this.relationTypeOptions;
            _this.updateNodeRelationDetailsObject({ relationTypes: _this.relationTypeOptions });
        });
    };
    DashboardSidebarComponent.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    /**
     * Search graph
     * @description The function gets called whenever the apply filter on attributes is needed
     */
    DashboardSidebarComponent.prototype.searchGraph = function () {
        var _this = this;
        var requestBody;
        this.selectedGraph = [];
        if (this.selectedAttributeOptions) {
            Object.keys(this.selectedAttributeOptions).forEach(function (selectedKey) {
                if (_this.selectedAttributeOptions[selectedKey].length > 0) {
                    _this.selectedGraph.push({ type: selectedKey, value: _this.selectedAttributeOptions[selectedKey] });
                }
            });
            if (this.selectedGraph.length > 0) {
                requestBody = { nodes: this.selectedGraph };
            }
            else {
                // if no selected element
                requestBody = {};
            }
        }
        return requestBody;
    };
    // Method gives new edgesArray with related node ids
    DashboardSidebarComponent.prototype.getRelatedNodeIdArrayFromEdges = function (selectedNodeId) {
        if (this.graphInitData.length > 0) {
            // console.log('rel',this.relationOptions);
            var temArray_1 = [];
            this.graphInitData[0]['seperateEdges'].filter(function (edge) {
                if (selectedNodeId === edge.from) {
                    temArray_1.push(edge.to);
                }
                else if (selectedNodeId === edge.to) {
                    temArray_1.push(edge.from);
                }
            });
            temArray_1 = temArray_1.filter(this.onlyUnique);
            return temArray_1;
        }
    };
    // Method gives selected node id
    DashboardSidebarComponent.prototype.getSelectedNodeId = function (nodeName) {
        var temId;
        if (this.graphInitData.length > 0) {
            this.graphInitData[0]['seperateNodes'].filter(function (node) {
                if (nodeName === node.label) {
                    temId = node.id;
                }
            });
            return temId;
        }
    };
    DashboardSidebarComponent.prototype.resetGraph = function () {
        this.getGraph();
        this.selectedAttributeOptions = [];
        this.selectedRelation = [];
        if (this.preSelectedRel) {
            var element = document.getElementById(this.preSelectedRel);
            element.classList.remove('selected');
        }
        var obj = { event: 'reset' };
        this.eventClicked.emit(obj);
    };
    DashboardSidebarComponent.prototype.relationclickEvent = function (selectedRelation) {
        var element;
        if (this.preSelectedRel) {
            element = document.getElementById(this.preSelectedRel);
            element.classList.remove('selected');
        }
        element = document.getElementById(selectedRelation);
        element.classList.add('selected');
        this.selectedRelationship = [];
        this.relstatus = !this.relstatus;
        this.selectedRelationship.push({ type: selectedRelation });
        var requestBody = { nodes: [], edges: this.selectedRelationship };
        console.log("re", requestBody);
        this.sharedGraphData.setGraphData(requestBody);
        var obj = { event: 'search' };
        this.eventClicked.emit(obj);
        this.preSelectedRel = selectedRelation;
    };
    // return all nodes with selected relation
    DashboardSidebarComponent.prototype.relationSearchGraph = function () {
        var _this = this;
        var requestBody;
        if (this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
            requestBody = { nodes: [], edges: this.selectedRelationship };
        }
        else {
            // if no selected element
            requestBody = {};
        }
        return requestBody;
    };
    DashboardSidebarComponent.prototype.networkElementClick = function (element) { };
    //
    DashboardSidebarComponent.prototype.NodeLimitToggleHandler = function (event) {
        try {
            if (event.constructor === Object) {
                this.showDisabled = event['isOn'];
            }
        }
        catch (e) {
            this.showDisabled = false;
        }
        this.sharedGraphData.sendToogleStatus(this.showDisabled);
    };
    DashboardSidebarComponent.prototype.extractLabels = function (data) {
        var _this = this;
        this.nodeTypes2 = [];
        data.forEach(function (label) {
            _this.nodeTypes2.push(label.type[0]);
        });
        // console.log('types are ', this.nodeTypes2);
    };
    DashboardSidebarComponent.prototype.getNodeTypes = function () {
        var _this = this;
        return this.searchService.runQuery(this.queryObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            console.log('recieved label data from service ', data);
            _this.processedData = _this.processData(data);
            // extract types from the array
            _this.extractLabels(_this.processedData);
            // this.typeOptions = _.cloneDeep(this.nodeTypes2);
            return _this.nodeTypes2;
        }));
    };
    DashboardSidebarComponent.prototype.processData = function (data) {
        if (data.length > 0) {
            var tempData_1 = [];
            data.forEach(function (label) {
                tempData_1.push({ type: label._fields[1], properties: label._fields[0] });
            });
            return tempData_1;
        }
        else {
            return [];
        }
    };
    DashboardSidebarComponent.prototype.getRelationTypes = function () {
        var _this = this;
        return this.graphDataService.getGraphRelations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            _this.relationsData = _this.filterRelationsData(response);
            var extractedTypes = _this.extractTypes(_this.relationsData);
            // pass it into the options for dropdown
            _this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](extractedTypes);
            _this.sharedGraphData.setRelationTypeOptions(_this.relationTypeOptions);
            _this.sharedGraphData.setRelationsData(_this.relationsData);
            return true;
        }, function (err) {
            console.error('An error occured while fetching relations ', err);
            throw Error();
        }));
    };
    DashboardSidebarComponent.prototype.filterRelationsData = function (response) {
        var filteredObjectArray = [];
        filteredObjectArray.push(response[0]);
        response.splice(0, 1);
        // clear relations response as there are duplicates inside
        // steps to clear, process each relation type
        // find all the keys which are of this type and collect its properties into a unique array of objects
        var i = 0;
        var _loop_1 = function () {
            if (response.length === 0) {
                i = 1;
            }
            else {
                var matched_1 = false;
                filteredObjectArray.forEach(function (firstObj) {
                    var _a;
                    if (firstObj.type === response[i].type) {
                        matched_1 = true;
                        (_a = firstObj['properties']).push.apply(_a, response[i].properties);
                    }
                });
                if (matched_1) {
                    response.splice(i, 1);
                    i = 0;
                }
                else {
                    filteredObjectArray.push(response[i]);
                    response.splice(i, 1);
                }
            }
        };
        while (i <= response.length) {
            _loop_1();
        }
        // make the properties of each type as unique
        filteredObjectArray.map(function (typeObj) {
            typeObj['properties'] = lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"](typeObj['properties']);
            return typeObj;
        });
        console.log('final fetched types for relation is ', filteredObjectArray);
        return filteredObjectArray;
    };
    DashboardSidebarComponent.prototype.extractTypes = function (ObjectArray) {
        var typesArray = [];
        ObjectArray.forEach(function (obj) {
            typesArray.push(obj['type']);
        });
        return typesArray;
    };
    DashboardSidebarComponent.prototype.swap = function (ArrayForSwapping, swapFromIndex, swapToIndex) {
        var temArrayForSwapping = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](ArrayForSwapping);
        var temp = temArrayForSwapping[swapFromIndex];
        temArrayForSwapping[swapFromIndex] = temArrayForSwapping[swapToIndex];
        temArrayForSwapping[swapToIndex] = temp;
        return temArrayForSwapping;
    };
    DashboardSidebarComponent.prototype.updateSidebar = function (nodeData) {
        if (nodeData) {
            var index = this.totalAtrributeOptions.findIndex(function (obj) { return obj['attribute'] === 'Name'; });
            this.totalAtrributeOptions[index]['options'].push(nodeData);
        }
    };
    // check for rotate object
    DashboardSidebarComponent.prototype.checkRotate = function () {
        var _this = this;
        // check for selected value so the dropdown should not close on refresh
        if (this.selectedAttributeOptions) {
            Object.keys(this.selectedAttributeOptions).forEach(function (selectedKey) {
                if (_this.selectedAttributeOptions[selectedKey].length > 0) {
                    _this.totalAtrributeOptions = _this.totalAtrributeOptions.filter(function (attr) {
                        if (attr && attr['attribute'] === selectedKey) {
                            attr['rotate'] = true;
                            return attr;
                        }
                        else {
                            return attr;
                        }
                    });
                }
            });
        }
    };
    // for node properties
    DashboardSidebarComponent.prototype.setNodeProperties = function (response) {
        var _this = this;
        if (response.hasOwnProperty('nodes')) {
            this.totalNodesProperties = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](response['nodes']);
            this.sharedGraphData.setNodeProperties(this.totalNodesProperties);
            if (this.totalNodesProperties) {
                Object.keys(this.totalNodesProperties).forEach(function (keyName) {
                    if (keyName !== 'deleted' && keyName !== 'color') {
                        _this.totalAtrributeOptions.push({ attribute: keyName, options: _this.totalNodesProperties[keyName], rotate: false });
                    }
                });
            }
            if (response.hasOwnProperty('relations')) {
                this.totalRelationsProperties = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](response['relations']);
                this.sharedGraphData.setRelationProperties(this.totalRelationsProperties);
            }
            console.log(this.totalNodesProperties, this.totalRelationsProperties);
        }
        this.checkRotate();
    };
    // for types
    DashboardSidebarComponent.prototype.setTypes = function (response) {
        if (response) {
            this.sharedGraphData.setProcessedData(this.processedData);
            this.sharedGraphData.setNodeTypes2(this.nodeTypes2);
            // this.typeOptions = this.nodeTypes2;
            this.totalAtrributeOptions.push({ attribute: 'Type', options: this.nodeTypes2, rotate: false });
            this.checkRotate();
            return true;
        }
    };
    /**
     * Hits search graph
     * @description The function is a common function which will gather the selected filters from the sidebar and send it furthur
     */
    DashboardSidebarComponent.prototype.hitSearchGraph = function () {
        var selectedAttributes = this.searchGraph();
        var selectedRelations = this.relationSearchGraph();
        console.log('search graph and relation search graph has returned the following ');
        console.log(selectedAttributes);
        console.log(selectedRelations);
        // join both the request bodies into one and send it for search
        var RequestBody = Object.assign({}, selectedRelations, selectedAttributes);
        this.sharedGraphData.setGraphData(RequestBody);
        // send the click event to reload the graph
        var obj = { event: 'search' };
        this.eventClicked.emit(obj);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DashboardSidebarComponent.prototype, "newNodeCreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodeLimitEnterEvent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "nodeLimitOnEnter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "eventClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "nodeTypesEvent", void 0);
    DashboardSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"],
            src_app_modules_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"], src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarSharedService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid export-btn\">\r\n    <button (click)=\"exportAsCsv('csv')\" class=\"circularBtn\"><i class=\"fas fa-download\"></i></button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".export-btn button {\n  background: #e4e4e4;\n  color: #000;\n  box-shadow: -4px 4px 14px -9px rgba(0, 0, 0, 0.75); }\n\n.export-btn button:active {\n  box-shadow: none;\n  transition: 0.5s; }\n\n.circularBtn {\n  font-size: 1.5rem;\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n.circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n\n.circularBtn:focus {\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZ3JhcGgtZXhwb3J0ZXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXGRhc2hib2FyZC12MlxcY29tcG9uZW50c1xcZ3JhcGgtZXhwb3J0ZXJcXGdyYXBoLWV4cG9ydGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsbUJBQW1CO0VBQ25CLFdBQVc7RUFHWCxrREFBa0QsRUFBQTs7QUFOMUQ7RUFTUSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFHVCxxQ0FBb0QsRUFBQTs7QUFHeEQ7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJtb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLWV4cG9ydGVyL2dyYXBoLWV4cG9ydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cG9ydC1idG4ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCA0cHggMTRweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAxNHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAtNHB4IDRweCAxNHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIH1cclxuICAgIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxufVxyXG5cclxuLmNpcmN1bGFyQnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xyXG59XHJcblxyXG4uY2lyY3VsYXJCdG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5jaXJjdWxhckJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GraphExporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphExporterComponent", function() { return GraphExporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_export_service_graph_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-export-service/graph-export.service */ "./src/app/modules/core/services/graph-export-service/graph-export.service.ts");
/* harmony import */ var src_app_modules_shared_services_export_service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/export-service/excel.service */ "./src/app/modules/shared/services/export-service/excel.service.ts");




var GraphExporterComponent = /** @class */ (function () {
    function GraphExporterComponent(fileService, excelService) {
        this.fileService = fileService;
        this.excelService = excelService;
    }
    GraphExporterComponent.prototype.ngOnInit = function () {
    };
    GraphExporterComponent.prototype.exportAsCsv = function (format) {
        var _this = this;
        this.fileService.getExportFormat(format)
            .subscribe(function (fileData) {
            var element = _this.fileService.initiateDownload('a', fileData);
            // initiate download
            element.click();
        }, function (error) {
            //check for ok and status
            if (error.ok === false && error.status === 200) {
                var element = _this.fileService.initiateDownload('a', error['text']);
                // initiate download
                element.click();
            }
            else {
                console.error('An error occured while getting file content from the service ', error);
            }
        });
    };
    GraphExporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-exporter',
            template: __webpack_require__(/*! ./graph-exporter.component.html */ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.html"),
            styles: [__webpack_require__(/*! ./graph-exporter.component.scss */ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_export_service_graph_export_service__WEBPACK_IMPORTED_MODULE_2__["GraphExportService"], src_app_modules_shared_services_export_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], GraphExporterComponent);
    return GraphExporterComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-global-loader *ngIf=\"loader\"></app-global-loader>\r\n<app-color-panel *ngIf=\"!loader\"></app-color-panel>\r\n<div class=\"wrapper-countlimit\" *ngIf=\"!loader\">\r\n    <div class=\"selected-count\">{{selectedCount}} Elements Found</div>\r\n    <div class=\"nodeLimit\">\r\n        <p class=\"nodelimit-head\">Element Limit :</p>\r\n        <input type=\"text\" [(ngModel)]=nodeLimit (ngModelChange)=\"limitChange(nodeLimit, popup)\" suiPopup popupText=\"{{errorMessage}}\" popupTrigger=\"manual\" #popup=\"suiPopup\" (keyup)=\"sendLimit($event, nodeLimit)\">\r\n    </div>\r\n    <div class=\"float-right-toolbar\">\r\n        <div class=\"creationToolbar\">\r\n            <app-create-nodes [nodeTypes]=\"totalTypesArray\" \r\n            [editData]=\"editNodeData\" [editRelData]=\"editRelationData\" \r\n            [hideDelModal]=\"hideDelModal\" (nodeBtnEvent)=\"nodeEventCapture($event)\" \r\n            (edgeBtnEvent)=\"edgeEventCapture($event)\" [newNodeCreated]=\"promptRelationCreateAfterNode\"\r\n            (cleanData)=\"cleanPropertyBindingData($event)\" (restoreEvent)=\"initRestoreData($event)\"\r\n            [restoredDataResponse]=\"restoredData\"></app-create-nodes>\r\n        </div>\r\n        <!-- graph exporter -->\r\n        <div class=\"export\">\r\n            <app-graph-exporter></app-graph-exporter>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"graph-container\" id=\"graphViewer\">\r\n</div>\r\n<ng-template *ngIf=\"showlimiterror\" let-popup #popupTemplate>\r\n    <div class=\"header\">Rating</div>\r\n    <div class=\"content\">\r\n        <sui-rating class=\"star\" (click)=\"popup.close()\"></sui-rating>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 80vh;\n  width: 80%;\n  float: right; }\n\n.selected-count {\n  background: #F5F5F5;\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #30333a;\n  border-radius: 3px;\n  padding: 1em;\n  float: left; }\n\n.wrapper-countlimit {\n  width: 80%;\n  float: right; }\n\n.nodeLimit {\n  max-width: 200px;\n  top: 50px;\n  float: left;\n  border-radius: 3px;\n  padding: 1em;\n  background: #F5F5F5;\n  outline: none; }\n\n.float-right-toolbar {\n  display: inline-flex;\n  width: 63%;\n  justify-content: flex-end; }\n\n.creationToolbar {\n  display: inline;\n  top: 50px;\n  padding: 1em;\n  outline: none; }\n\n.export {\n  margin-top: 15px; }\n\n.nodeLimit input {\n  width: 35%;\n  border: 0.3px solid #000;\n  padding: 5px;\n  border-radius: 2px; }\n\n.nodeLimit:focus {\n  outline: none; }\n\n.nodelimit-head {\n  display: inline;\n  margin-right: 3px; }\n\n@media screen and (max-width: 1100px) {\n  .graph-container,\n  .selected-count {\n    width: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZ3JhcGgtdjItdmlzdWFsaXplci9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcZGFzaGJvYXJkLXYyXFxjb21wb25lbnRzXFxncmFwaC12Mi12aXN1YWxpemVyXFxncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFJN0I7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSTs7SUFFSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJtb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzAzMzNhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi53cmFwcGVyLWNvdW50bGltaXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5vZGVMaW1pdCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0LXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogNjMlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcbi5jcmVhdGlvblRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmV4cG9ydCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubm9kZUxpbWl0IGlucHV0IHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5ub2RlTGltaXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5vZGVsaW1pdC1oZWFkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xyXG4gICAgLmdyYXBoLWNvbnRhaW5lcixcclxuICAgIC5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GraphVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualizerComponent", function() { return GraphVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../custom-material/services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts");
/* harmony import */ var src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");
/* harmony import */ var src_app_modules_redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/redux/services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");










var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService, sharedGraphService, snackBar, colorService, algoRunnerShrdSrvc, CoreFilterSrvc) {
        this.graphService = graphService;
        this.sharedGraphService = sharedGraphService;
        this.snackBar = snackBar;
        this.colorService = colorService;
        this.algoRunnerShrdSrvc = algoRunnerShrdSrvc;
        this.CoreFilterSrvc = CoreFilterSrvc;
        this.totalTypesArray = [];
        this.newNodeCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeLimitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NODE_CREATE_TEXT_SUCCESS = 'Node has been created successfully !';
        this.NODE_CREATE_TEXT_ERROR = 'An error occured while creating a new node !';
        this.NODE_CREATE_TEXT_ERROR_VIS = 'An error occured while displaying the new node !';
        this.NODE_UPDATE_TEXT_SUCCESS = 'Node has been updated successfully !';
        this.NODE_UPDATE_TEXT_ERROR = 'An error occured while updating the node !';
        this.NODE_UPDATE_TEXT_ERROR_VIS = 'An error occured while displaying updated node in the graph !';
        this.NODE_DELETE_TEXT_SUCCESS = 'Node has been deleted successfully !';
        this.NODE_DELETE_TEXT_ERROR = 'An error occured while deleting the Node !';
        this.RELATION_CREATE_TEXT_SUCCESS = 'New Relationship created successfully !';
        this.RELATION_CREATE_TEXT_ERROR = 'An error occured while creating new relationship !';
        this.RELATION_CREATE_TEXT_ERROR_VIS = 'An error occured while displaying the new relationship in graph !';
        this.RELATION_UPDATE_TEXT_SUCCESS = 'Relationship has been updated successfully !';
        this.RELATION_UPDATE_TEXT_ERROR = 'An error occured while upating the relationship !';
        this.RELATION_DELETE_TEXT_SUCCESS = 'Relationship has been deleted successfully !';
        this.RELATION_DELETE_TEXT_ERROR = 'An error occured while deleting the relationship from the database !';
        this.DATA_RESTORE_TEXT_SUCCESS = 'Data has been restored successfully !';
        this.DATA_RESTORE_TEXT_ERROR = 'An error occured while restoring the data !';
        this.showDeletedData = null;
        this.promptRelationCreateAfterNode = null;
        this.requestedNodeDetails = null;
        this.graphData = {};
        this.errorMessage = '';
        this.loader = true;
        this.defaultNodeLimit = 149;
        this.nodeLimit = 149;
        this.emptyNodeLimit = 179;
        this.colorConfig = {};
        this.editNodeData = null;
        this.editRelationData = null;
        this.restoredData = null;
        this.networkInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideDelModal = false;
        // graph options to change the visualization configuration of visjs
        this.graphOptions = {
            physics: false,
            interaction: {
                navigationButtons: true
            },
            edges: {
                smooth: {
                    type: 'dynamic'
                }
            },
            nodes: {
                shape: 'dot',
                scaling: {
                    customScalingFunction: function (min, max, total, value) {
                        return value / total;
                    },
                    min: 5,
                    max: 150
                }
            }
        };
        this.allGraphData = {};
        this.filteredGraphData = {};
        // Variable to send the graph data and filtered query object to algo runner for future use
        this.algoRunnerData = {};
    }
    GraphVisualizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.displayInitialGraph();
        this.sharedGraphService.getNodeByIDs.subscribe(function (nodeIDArray) {
            // recieved array IDs
            console.log('recieved array ID for processing ', nodeIDArray);
            var nodesByIDs = _this.getNodeDetails(nodeIDArray);
            console.log('processed data now is  ', nodesByIDs);
            _this.sharedGraphService.sendNodeDetails(nodesByIDs);
        }, function (err) { });
        // subscribe to showDeletedData so that appropriate data can be fetched
        this.sharedGraphService.showDeletedData.subscribe(function (toggle) {
            if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
                _this.loader = true;
                // if the toggle variable is  only true and false and nothing else
                _this.showDeletedData = toggle;
                // console.log('recieved toggle', toggle);
            }
            else {
                // set to false by default
                _this.showDeletedData = false;
            }
            if (_this.showDeletedData) {
                _this.showAllData();
            }
            else {
                if (_this.allGraphData.hasOwnProperty('nodes')) {
                    _this.showFilteredData();
                }
            }
        }, function (err) {
            // set to false by default
            console.error('An error occured while subscribing to the toggle for deleted data', err);
            _this.showDeletedData = false;
            _this.displayInitialGraph();
        });
        this.colorService.colorObj$.subscribe(function (response) {
            _this.colorConfig = response;
        });
    };
    GraphVisualizerComponent.prototype.displayInitialGraph = function () {
        var _this = this;
        this.graphService.getInitialDataV2().subscribe(function (result) {
            console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                // set color config using nodes color properties
                _this.updateColorConfigObject(result);
                // add colors to nodes
                result = _this.addColors(result);
                // store all data without any filter
                _this.allGraphData['nodes'] = result['seperateNodes'];
                _this.allGraphData['edges'] = result['seperateEdges'];
                // to update filtered data
                _this.setFilteredData(_this.showDeletedData);
                // check for show deleted toggel
                if (_this.showDeletedData) {
                    // show all data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['nodes']);
                }
                else {
                    // show filtered data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['nodes']);
                }
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                // check for show deleted toggel
                if (_this.showDeletedData) {
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['edges']);
                }
                else {
                    // show filtered data
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['edges']);
                }
            }
            // console.log('graphData :', this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.loader = false;
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
            // activating double click event for editing node or relationship
            console.log('registering double click');
            _this.network.on('doubleClick', function (event) {
                _this.hideDelModal = false;
                console.log('double click');
                _this.doubleClickHandler(event);
            });
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
        // activate double click event for editing a node or a relationship
    };
    GraphVisualizerComponent.prototype.ngOnChanges = function (changes) {
        if (this.event) {
            var searchEvent = this.event['event'];
            if (searchEvent === 'search' || searchEvent === 'reset') {
                this.event = searchEvent;
                this.changeNodeColor();
            }
        }
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        if (this.event === 'search') {
            this.loader = true;
            this.showGraphData();
        }
        else if (this.event === 'reset') {
            this.loader = true;
            this.nodeLimit = this.defaultNodeLimit;
            this.displayInitialGraph();
        }
        else {
            var previousData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.graphData);
            // tslint:disable-next-line: no-string-literal
            if (!!this.graphData['nodes']) {
                var temgraph = this.graphData['nodes'].map(function (node) {
                    if (_this.event === node.type[0]) {
                        // node.color = this.colorConfig.defaultColor[node.type[0]];
                    }
                    else {
                        // node.color='#95BFF8';
                        return node;
                    }
                    return node;
                });
                previousData.nodes.clear();
                previousData.nodes = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](temgraph));
                this.graphData = previousData;
                this.reinitializeGraph();
            }
        }
    };
    GraphVisualizerComponent.prototype.reinitializeGraph = function () {
        var _this = this;
        var container = document.getElementById('graphViewer');
        this.network.setData(this.graphData);
        this.network.on('doubleClick', function (event) {
            _this.hideDelModal = false;
            _this.doubleClickHandler(event);
        });
    };
    GraphVisualizerComponent.prototype.showGraphData = function () {
        var _this = this;
        this.loader = true;
        var requestBody = this.sharedGraphService.getGraphData();
        // check for node limit
        if (this.nodeLimit === "") {
            requestBody["limit"] = this.emptyNodeLimit;
        }
        else if (!isNaN(this.nodeLimit)) {
            requestBody["limit"] = this.nodeLimit;
        }
        else {
            requestBody["limit"] = this.defaultNodeLimit;
        }
        // send the data to algo runner for future use
        this.updateAlgoRunnerObject({ nodeFilter: requestBody });
        this.graphService.getSearchDataV2(requestBody).subscribe(function (result) {
            // console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                result = _this.addColors(result);
                //this.graphData['nodes'] = new DataSet(result['seperateNodes']);
                // store all data without any filter
                // this.allGraphData['nodes'] = new DataSet(result['seperateNodes']); 
                _this.allGraphData['nodes'] = result['seperateNodes'];
                _this.allGraphData['edges'] = result['seperateEdges'];
                // to update filtered data
                _this.setFilteredData();
                //check for show deleted 
                if (_this.showDeletedData) {
                    // show all data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['nodes']);
                }
                else {
                    // remove deleted data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['nodes']);
                }
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                if (_this.showDeletedData) {
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['edges']);
                }
                else {
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['edges']);
                }
            }
            // console.log('graphData :', this.graphData);
            // display data
            // send the data to algo runner for future use
            var dataForAlgoRunner = {
                completeGraph: _this.allGraphData,
                deletedGraph: _this.filteredGraphData,
                propjectedGraph: _this.graphData
            };
            _this.updateAlgoRunnerObject(dataForAlgoRunner);
            // update the redux store with this data
            _this.CoreFilterSrvc.updateAppliedFiltersData({ request: requestBody, data: dataForAlgoRunner });
            var container = document.getElementById('graphViewer');
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
            _this.network.on('doubleClick', function (event) {
                _this.hideDelModal = false;
                _this.doubleClickHandler(event);
            });
            _this.loader = false;
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
    };
    /**
     * Updates algo runner object
     * @description It is used to update the global algo runner object at various times the apply/reset/showDeleted buttons are used
     * @param newObject
     */
    GraphVisualizerComponent.prototype.updateAlgoRunnerObject = function (newObject) {
        if (newObject.hasOwnProperty('completeGraph')) {
            this.algoRunnerData.completeGraph = newObject.completeGraph;
        }
        if (newObject.hasOwnProperty('deletedGraph')) {
            this.algoRunnerData.deletedGraph = newObject.deletedGraph;
        }
        if (newObject.hasOwnProperty('nodeFilter')) {
            this.algoRunnerData.nodeFilter = newObject.nodeFilter;
        }
        if (newObject.hasOwnProperty('relationFilter')) {
            this.algoRunnerData.relationFilter = newObject.relationFilter;
        }
        if (newObject.hasOwnProperty('propjectedGraph')) {
            this.algoRunnerData.propjectedGraph = newObject.propjectedGraph;
        }
        // send the final prepared object
        this.algoRunnerShrdSrvc.sendRecentFilters(this.algoRunnerData);
    };
    GraphVisualizerComponent.prototype.updateColorConfigObject = function (resultObj) {
        var _this = this;
        var temColorObj = {};
        resultObj['seperateNodes'].forEach(function (node) {
            if (node.hasOwnProperty('type') && node.type.length > 0 && node.hasOwnProperty('properties')) {
                if (!temColorObj[node.type[0]]) {
                    if (node['properties']['color']) {
                        temColorObj[node.type[0]] = node['properties']['color'];
                    }
                    else {
                        temColorObj[node.type[0]] = _this.colorConfig['initialColor']['colorCode'];
                    }
                }
            }
        });
        this.colorService.updateDefaultColor(temColorObj);
    };
    GraphVisualizerComponent.prototype.addColors = function (resultObj) {
        var _this = this;
        // if the user opted for deleted data, simply set deleted default color to all the nodes
        resultObj['seperateNodes'].forEach(function (node) {
            if (node.hasOwnProperty('type') && node.type.length > 0) {
                if (node['properties']['deleted'] === "true" || node['properties']['deleted'] === true) {
                    node['color'] = _this.colorConfig['deletedColor']['colorCode'];
                }
                else {
                    // if the node has a color property, assign that else assign the defaults one
                    node = _this.shiftColorKey(node);
                    if (!node.hasOwnProperty('color')) {
                        node['color'] = _this.colorConfig['defaultColor'][node.type[0]];
                    }
                }
                // node['color'] = this.showDeletedData ? this.colorConfig.deletedColor.colorCode : this.colorConfig.defaultColor[node.type[0]];
                // // temporary fix, add exception for societal platform
                // if (node.label === 'Societal Platform Team') {
                //   node['color'] = this.colorConfig.defaultColor[node.type[0]];
                // }
            }
        });
        // if the user opted for deleted data, simply set deleted default color to all the edges
        resultObj['seperateEdges'].forEach(function (edge) {
            if (edge.hasOwnProperty('type') && edge.type.length > 0) {
                if (edge['properties']['deleted'] === "true" || edge['properties']['deleted'] === true) {
                    edge['color']['color'] = _this.colorConfig['deletedColor']['colorCode'];
                    edge['color']['highlight'] = _this.colorConfig['deletedColor']['highlightColorCode'];
                }
                else {
                    // edge['color'] = this.colorConfig.defaultColor[edge.type[0]];
                }
            }
        });
        // console.log(nodeObj);
        return resultObj;
    };
    GraphVisualizerComponent.prototype.addColorProperty = function (node) {
        if (node.hasOwnProperty('type') && node.type.length > 0 && node.hasOwnProperty('properties')) {
            if (node['properties'].hasOwnProperty('color') && node['properties']['color'] === 'not available') {
                var index = void 0;
                var nodeType = void 0;
                nodeType = node.type;
                if (this.colorConfig['defaultColor'][nodeType]) {
                    node['properties']['color'] = this.colorConfig['defaultColor'][nodeType];
                }
            }
        }
        return node;
    };
    GraphVisualizerComponent.prototype.limitChange = function (limit, popup) {
        if (limit === "") {
            this.errorMessage = 'Only valid numbers allowed';
            popup.open();
            window.setTimeout(function () {
                popup.close();
            }, 3000);
        }
        else if (!isNaN(limit)) {
            this.nodeLimit = parseInt(limit);
        }
        else {
            this.errorMessage = 'Only valid numbers allowed';
            popup.open();
            window.setTimeout(function () {
                popup.close();
            }, 3000);
        }
    };
    GraphVisualizerComponent.prototype.sendLimit = function (event, nodeLimit) {
        if (event['key'] === 'Enter') {
            this.nodeLimitEvent.emit(this.nodeLimit);
        }
        else {
            this.nodeLimitEvent.emit(null);
        }
    };
    GraphVisualizerComponent.prototype.nodeEventCapture = function (event) {
        var _this = this;
        if (Object.keys(event).length > 0) {
            if (event.action === 'create') {
                // handle the functionaluty of creating a node
                this.network.once('click', function (clickEvent) {
                    console.log(clickEvent);
                    // user should be able to fire an event onlyonce per dropdown click
                    if (clickEvent.nodes.length > 0 || clickEvent.edges.length > 0) {
                        // obviously a node cannot be created over another node or edge
                        alert('please click on an empty space to create a node');
                    }
                    else {
                        // user clicked on a good place to  create a node
                        // console.log(this.graphData);
                        if (event.data.properties['color'] === 'not available') {
                            event.data = _this.addColorProperty(event.data);
                        }
                        else {
                            _this.colorService.insertIntoDefaultColor({ type: event.data.type, color: event.data.properties.color });
                        }
                        var newNodeData_1 = {
                            id: event.data.id,
                            label: event.data.properties.Name,
                            type: [event.data.type],
                            properties: event.data.properties
                        };
                        // let newNodeForVis = _.cloneDeep(newNodeData);
                        // make a request to create a node, if it succeedes only then show in the graph
                        _this.graphService.createNewNode(newNodeData_1).subscribe(function (response) {
                            //update sidebar dropdown
                            _this.newNodeCreated.emit({ event: "NodeEvent_create" + response['seperateNodes'][0].id });
                            // add additional data for vis layout
                            // newNodeForVis = this.addData(newNodeForVis, clickEvent, event);
                            try {
                                var visNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_this.addData(response['seperateNodes'][0], clickEvent, event));
                                // to remove deleted key from tooltip
                                // Add the color to the newly created node
                                visNode['color'] = newNodeData_1.properties['color'];
                                visNode['title'] = _this.stringifyProperties(visNode);
                                // add the new node to the vis
                                _this.graphData['nodes'].add([visNode]);
                                // to update all data array while a new node is created
                                var eleObj = {
                                    element: 'nodes',
                                    event: "create",
                                    data: response['seperateNodes'][0]
                                };
                                _this.updateGraphArray(eleObj);
                                // emit the createNodes component that a node has been put into the graph, prompt user to create a relation
                                // send the data of new node for relationPrompt
                                // notify user
                                _this.snackBar.success({ message: _this.NODE_CREATE_TEXT_SUCCESS });
                                _this.promptRelationCreateAfterNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]({ created: true, node: visNode });
                            }
                            catch (addErr) {
                                console.error('Error while adding the data node to vis ', addErr['message']);
                                _this.snackBar.error({ message: _this.NODE_CREATE_TEXT_ERROR_VIS });
                            }
                        }, function (error) {
                            console.error('An error occured while creating node in  database ', error);
                            _this.snackBar.error({ message: _this.NODE_CREATE_TEXT_ERROR });
                        });
                    }
                });
            }
            else if (event.action === 'edit' && !event.hasOwnProperty('process')) {
                // handle the functionality of editing the node
                console.log('Node edit is being clicked');
                this.network.once('click', function (clickEvent) {
                    console.log(clickEvent);
                    var clickedNode = _this.graphData['nodes'].get(clickEvent.nodes);
                    // if there are multiple nodes one above another, always select the top most one
                    if (clickedNode.length > 0) {
                        clickedNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](clickedNode[0]);
                    }
                    console.log('clicked Node is ', clickedNode);
                    _this.startEditProcess(clickedNode);
                });
            }
            else if (event.action === 'edit' && event.hasOwnProperty('process') && event.process === 'complete') {
                // this will be invoked when the user has clicked on edit feature and submitted the form with new data
                console.log('edit event captured with new data', event.data);
                // the process is to first create a node for data base update
                // once the node is updated , use the updated node from the database to update in the visJS
                var newNodeData = {
                    id: event.data.id,
                    label: event.data.properties.Name,
                    type: [event.data.type],
                    properties: event.data.properties
                };
                this.graphService.updateNode(newNodeData).subscribe(function (response) {
                    console.log('response from update node ', response);
                    try {
                        var updatedNode = response['seperateNodes'][0];
                        // logic to update node in vis data set
                        var visNode = _this.graphData['nodes'].get(updatedNode['id']);
                        // update everything except color and id
                        if ([visNode].length == 1) {
                            visNode['properties'] = updatedNode['properties'];
                            visNode['label'] = updatedNode['label'];
                            visNode['title'] = updatedNode['title'];
                            visNode['type'] = updatedNode['type'];
                            console.log('update node details are ', visNode);
                            // node was present, simply update it now
                            if (_this.showDeletedData) {
                                _this.graphData['nodes'].update(visNode);
                            }
                            else {
                                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](visNode);
                                tem['title'] = _this.stringifyProperties(tem);
                                _this.graphData['nodes'].update(tem);
                            }
                            // update all+filtered graph array
                            var eleObj = {
                                element: 'nodes',
                                event: "edit",
                                data: visNode
                            };
                            _this.updateGraphArray(eleObj);
                            //update sidebar dropdown
                            _this.newNodeCreated.emit({ event: 'NodeEvent_update' + response['seperateNodes'][0].id });
                        }
                        console.log(visNode);
                        _this.snackBar.success({ message: _this.NODE_UPDATE_TEXT_SUCCESS });
                    }
                    catch (updateErr) {
                        // any error encountered while updating the node in vis js
                        console.error('Error while upating the data node to vis ', updateErr['message']);
                        _this.snackBar.error({ message: _this.NODE_UPDATE_TEXT_ERROR_VIS });
                    }
                }, function (err) {
                    console.error('An error occured while updating node in database ', err);
                    _this.snackBar.error({ message: _this.NODE_UPDATE_TEXT_ERROR });
                });
            }
            else if (event.action === 'delete') {
                var nodeID = event.data.id;
                // get the list of relation ids which are connected to this node
                var connectedEdgeIDs = this.network.getConnectedEdges(nodeID);
                // hit the delete node api
                var requestOption = {
                    id: nodeID,
                    relations: connectedEdgeIDs
                };
                this.graphService.deleteNode(requestOption).subscribe(function (response) {
                    // remove the node in vis graph and connected edges, if any
                    var removedNode = response['seperateNodes'];
                    if (response['seperateEdges'].length > 0) {
                        var removedEdges = response['seperateEdges'];
                        // update the edges
                        removedEdges.map(function (removed) {
                            // update all+filtered graph array
                            var eleObj = {
                                element: 'edges',
                                event: "delete",
                                data: removed
                            };
                            _this.updateGraphArray(eleObj);
                        });
                        if (_this.showDeletedData) {
                            _this.graphData['edges'].update(removedEdges);
                        }
                        else {
                            _this.graphData['edges'].remove(removedEdges);
                        }
                    }
                    // update all+filtered array
                    var eleObj = {
                        element: 'nodes',
                        event: "delete",
                        data: response['seperateNodes'][0]
                    };
                    _this.updateGraphArray(eleObj);
                    // update the node in vis
                    removedNode[0]['color'] = _this.colorConfig['deletedColor']['colorCode'];
                    if (_this.showDeletedData) {
                        _this.graphData['nodes'].update(removedNode);
                    }
                    else {
                        _this.graphData['nodes'].remove(removedNode);
                    }
                    _this.hideDelModal = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](true);
                    //update sidebar dropdown
                    _this.newNodeCreated.emit({ event: 'NodeEvent_delete' + response['seperateNodes'][0].id });
                    _this.snackBar.success({ message: _this.NODE_DELETE_TEXT_SUCCESS });
                }, function (err) {
                    console.error('An error occured while reading response for node delete ', err);
                    _this.snackBar.error({ message: _this.NODE_DELETE_TEXT_ERROR });
                });
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.edgeEventCapture = function (event) {
        var _this = this;
        if (Object.keys(event).length > 0) {
            if (event.action === 'create') {
                // handle the functionaluty of creating a node
                var newRelationData = {
                    type: [event.data.type],
                    properties: event.data.properties,
                    from: event.data.from,
                    to: event.data.to
                };
                // make a request to create a node, if it succeedes only then show in the graph
                this.graphService.createNewRelation(newRelationData).subscribe(function (response) {
                    console.log(response);
                    try {
                        var visRelation = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](response['seperateEdges'][0]);
                        // to remove deleted key from tooltip
                        _this.newNodeCreated.emit({ event: "NodeEvent_create" + response['seperateEdges'][0] });
                        visRelation['title'] = _this.stringifyProperties(visRelation);
                        // add the new node to the vis
                        // first get the edge, if it is already present, simply update it else add it
                        var isAlreadyPresent = _this.graphData['edges'].get(visRelation['id']);
                        var eleObj = {
                            element: 'edges',
                            event: "edit",
                            data: response['seperateEdges'][0]
                        };
                        if (isAlreadyPresent !== null) {
                            //update it 
                            _this.graphData['edges'].update([visRelation]);
                            // update edge in allgraphdata and filtered data array
                            _this.updateGraphArray(eleObj);
                        }
                        else {
                            _this.graphData['edges'].add([visRelation]);
                            // add new edge to allgraphdata and filtered data array
                            eleObj.event = "create";
                            _this.updateGraphArray(eleObj);
                        }
                        _this.snackBar.success({ message: _this.RELATION_CREATE_TEXT_SUCCESS });
                    }
                    catch (addErr) {
                        console.log('Error while adding the data relation to vis ', addErr['message']);
                        _this.snackBar.error({ message: _this.RELATION_CREATE_TEXT_ERROR_VIS });
                    }
                }, function (error) {
                    console.log('error while reading new relation data from service ', error);
                    _this.snackBar.error({ message: _this.RELATION_CREATE_TEXT_ERROR });
                });
            }
            else if (event.action === 'edit') {
                // capture the details of the relationship clicked by the user, clean it if needed and send for use
                // hit the update relation service and updae it in visJS too
                var relationData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](event.data);
                if (relationData.hasOwnProperty('id') && relationData.hasOwnProperty('type')) {
                    // object has atleast id and type key, move ahead
                    this.graphService.updateRelation(relationData).subscribe(function (response) {
                        var newRelation = response['seperateEdges'][0];
                        _this.updateRelationinVIS(newRelation);
                        _this.snackBar.success({ message: _this.RELATION_UPDATE_TEXT_SUCCESS });
                    }, function (err) {
                        console.error('An error occured while reading the updated relation data', err);
                        _this.snackBar.error({ message: _this.RELATION_UPDATE_TEXT_ERROR });
                    });
                }
            }
            else if (event.action === 'delete') {
                // handle the functionality of deleting the node
                var relationID = null;
                // capture the relation id and send delete request
                if (event.data.hasOwnProperty('id')) {
                    relationID = event.data.id;
                    // create the delete request
                    var requestObj = {
                        id: relationID
                    };
                    this.graphService.deleteRelation(requestObj).subscribe(function (response) {
                        console.log('recieved some response', response['seperateEdges']);
                        // once database relation is deleted, remove it from visGraph also
                        var deletedRel = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](response['seperateEdges']);
                        // update all+filtered graph array
                        var eleObj = {
                            element: 'edges',
                            event: "delete",
                            data: response['seperateEdges']
                        };
                        _this.updateGraphArray(eleObj);
                        if (_this.showDeletedData) {
                            deletedRel['color']['color'] = _this.colorConfig['deletedColor']['colorCode'];
                            deletedRel['color']['highlight'] = _this.colorConfig['deletedColor']['highlightColorCode'];
                            _this.graphData['edges'].update([deletedRel]);
                        }
                        else {
                            _this.graphData['edges'].remove([deletedRel]);
                        }
                        _this.hideDelModal = true;
                        _this.snackBar.success({ message: _this.RELATION_DELETE_TEXT_SUCCESS });
                    }, function (err) {
                        console.error('An error occured while reading response for relation delete ', err);
                        _this.snackBar.error({ message: _this.RELATION_DELETE_TEXT_ERROR });
                    });
                }
                else {
                    console.warn('did not recieve the id of relation for deletion in edgeEventCapture');
                }
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.updateNodesInVis = function (nodesArray) {
        var _this = this;
        // update the nodes in the data set
        if (Array.isArray(nodesArray)) {
            nodesArray.forEach(function (node) {
                var oldNodeID = node['id'];
                var oldNode = _this.graphData['nodes'].get(oldNodeID);
                // update the old node with new node
                if (!!oldNode) {
                    oldNode['properties'] = node['properties'];
                    oldNode = _this.addNodeColor(node);
                    // update all+filtered graph array
                    var eleObj = {
                        element: 'nodes',
                        event: "restore",
                        data: oldNode
                    };
                    _this.updateGraphArray(eleObj);
                    // update sidebar name
                    _this.newNodeCreated.emit({ event: "NodeEvent_restore_" + node['label'] });
                    // set it back in VISJS
                    _this.graphData['nodes'].update(oldNode);
                    console.log('updated node ', oldNode);
                }
                else {
                    console.error("Provided node " + oldNode + " is not present in VisGraph for restoration");
                }
            });
        }
        else {
            console.error('Non array provided in updateNodesInVis');
        }
    };
    GraphVisualizerComponent.prototype.updateRelationinVIS = function (relation) {
        var oldRelationID = relation['id'];
        var oldRelation = this.graphData['edges'].get(oldRelationID);
        console.log('old relation is  ', oldRelation);
        if (this.showDeletedData) {
            this.graphData['edges'].update([relation]);
        }
        else {
            var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](relation);
            tem['title'] = this.stringifyProperties(tem);
            this.graphData['edges'].update([tem]);
        }
        // update all+filtered graph array
        var eleObj = {
            element: "edges",
            event: "edit",
            data: relation
        };
        this.updateGraphArray(eleObj);
    };
    GraphVisualizerComponent.prototype.updateRelationsInVis = function (relationArray) {
        var _this = this;
        // update the relations present in the dataset
        if (Array.isArray(relationArray)) {
            relationArray.forEach(function (relation) {
                var oldRelationID = relation['id'];
                var oldRelation = _this.graphData['edges'].get(oldRelationID);
                // update the old node with new node
                if (!!oldRelation) {
                    oldRelation['properties'] = relation['properties'];
                    oldRelation['title'] = relation['title'];
                    oldRelation['color']['color'] = _this.colorConfig['restoreColor']['colorCode'];
                    oldRelation['color']['highlight'] = _this.colorConfig['restoreColor']['highlightColorCode'];
                    // set it back in VisJS
                    _this.graphData['edges'].update(oldRelation);
                    // update all+filtered graph array
                    var eleObj = {
                        element: 'edges',
                        event: "restore",
                        data: oldRelation
                    };
                    _this.updateGraphArray(eleObj);
                    console.log('updated relation ', oldRelation);
                }
                else {
                    console.error("Provided relation " + oldRelation + " is not present in VisGraph for restoration");
                }
            });
        }
        else {
            console.error('Non array provided in updateNodesInVis');
        }
    };
    // to change key in tooltip
    GraphVisualizerComponent.prototype.stringifyProperties = function (propertyObject) {
        if (propertyObject.constructor === Object) {
            var finalString_1 = '';
            if (propertyObject['properties'].hasOwnProperty('deleted')) {
                Object.keys(propertyObject['properties']).filter(function (key) {
                    if (key !== 'deleted' && key !== 'color') {
                        finalString_1 += "<strong>" + key + " :</strong> " + propertyObject['properties'][key] + " <br>";
                    }
                });
            }
            return finalString_1;
        }
        else {
            return propertyObject['title'];
        }
    };
    GraphVisualizerComponent.prototype.addData = function (node, clickEvent, event) {
        node['x'] = clickEvent.pointer.canvas.x;
        node['y'] = clickEvent.pointer.canvas.y;
        node['color'] = this.colorConfig['defaultColor'][event.data.type];
        return node;
    };
    GraphVisualizerComponent.prototype.addNodeColor = function (node) {
        var colorCode = this.colorConfig['defaultColor'][node.type[0]] || null;
        if (colorCode) {
            node['color'] = colorCode;
            return node;
        }
        else {
            node = this.shiftColorKey(node);
            if (!node['properties'].hasOwnProperty('color')) {
                console.warn('Error while adding color to the node ', node['label']);
            }
            return node;
        }
    };
    GraphVisualizerComponent.prototype.startEditProcess = function (clickedData, typeProcess) {
        if (typeProcess === void 0) { typeProcess = 'node'; }
        // to extract relevant information and send it back to the edit modal
        console.log(clickedData);
        if (typeProcess === 'node') {
            this.editRelationData = null;
            this.editNodeData = clickedData;
        }
        else if (typeProcess === 'edge') {
            this.editNodeData = null;
            this.editRelationData = clickedData;
        }
    };
    GraphVisualizerComponent.prototype.getNodeDetails = function (nodeIDs) {
        var _this = this;
        // process node IDs and send back
        var changedNodeIDs = nodeIDs.map(function (nodeID) {
            return _this.graphData['nodes'].get(nodeID);
        });
        return changedNodeIDs;
    };
    GraphVisualizerComponent.prototype.doubleClickHandler = function (event) {
        // if nodes array exists, it is a node edit event else it is edge edit event
        if (!!event.nodes.length) {
            // emit node edit event data
            var clickedNode = this.graphData['nodes'].get(event.nodes);
            // if there are multiple nodes one above another, always select the top most one
            if (clickedNode.length > 0) {
                clickedNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](clickedNode[0]);
            }
            console.log('clicked Node is ', clickedNode);
            this.startEditProcess(clickedNode);
        }
        else if (!!event.edges.length) {
            // emit edge edit event data
            if (event.nodes.length > 0) {
                // user clicked on node despite selecting 'edit edge' feature
                alert('Please click on an edge not a node');
            }
            else {
                var clickedEdge = this.graphData['edges'].get(event.edges[0]);
                // if there are multiple nodes one above another, always select the top most one
                if ([clickedEdge].length > 0) {
                    clickedEdge = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]([clickedEdge][0]);
                }
                console.log('clicked Edge is ', clickedEdge);
                // emit data for edge
                this.startEditProcess(clickedEdge, 'edge');
            }
        }
    };
    // to filter data from alldata array and store it to new array
    GraphVisualizerComponent.prototype.setFilteredData = function (isDeletedToggle) {
        var _this = this;
        if (isDeletedToggle === void 0) { isDeletedToggle = false; }
        this.filteredGraphData['nodes'] = [];
        this.filteredGraphData['edges'] = [];
        this.allGraphData['nodes'].filter(function (node) {
            if (node['properties']['deleted'] === "false" || node['properties']['deleted'] === false) {
                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](node);
                if (isDeletedToggle) {
                    delete tem['color'];
                }
                tem['title'] = _this.stringifyProperties(tem);
                _this.filteredGraphData['nodes'].push(tem);
            }
        });
        this.allGraphData['edges'].filter(function (edge) {
            if (edge['properties']['deleted'] === "false" || edge['properties']['deleted'] === false) {
                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](edge);
                tem['title'] = _this.stringifyProperties(tem);
                _this.filteredGraphData['edges'].push(tem);
            }
        });
    };
    // to show all data
    GraphVisualizerComponent.prototype.showAllData = function () {
        // create dataset for all data 
        this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.allGraphData['nodes']);
        this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.allGraphData['edges']);
        // to count graph element
        this.selectedCount = this.graphData['nodes'].length;
        // display data
        this.reinitializeGraph();
        this.loader = false;
    };
    // to show filtered data
    GraphVisualizerComponent.prototype.showFilteredData = function () {
        // create dataset for filtered graph data
        this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.filteredGraphData['nodes']);
        this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.filteredGraphData['edges']);
        // to count graph element
        this.selectedCount = this.graphData['nodes'].length;
        // display data
        this.reinitializeGraph();
        this.loader = false;
    };
    GraphVisualizerComponent.prototype.cleanPropertyBindingData = function (cleanType) {
        if (this.editNodeData !== null || this.editRelationData !== null ||
            this.promptRelationCreateAfterNode !== null || this.restoredData !== null) {
            console.log('cleaning data for ', cleanType);
            if (!!cleanType) {
                if (cleanType === 'node') {
                    this.editNodeData = null;
                }
                else if (cleanType === 'relation') {
                    this.editRelationData = null;
                }
                else if (cleanType === 'afterCreateNode') {
                    this.promptRelationCreateAfterNode = null;
                }
                else if (cleanType === 'restore') {
                    this.restoredData = null;
                }
                else {
                    // nothing
                }
            }
        }
    };
    GraphVisualizerComponent.prototype.initRestoreData = function (restoreDataObj) {
        var _this = this;
        // this.loader = true;
        if (Object.keys(restoreDataObj).length > 0 && restoreDataObj.hasOwnProperty('type') && restoreDataObj.hasOwnProperty('data')) {
            var requestBodyObj = { nodes: [], relations: [] };
            if (restoreDataObj['type'] === 'node_relation') {
                // the data key should have both node and relation key with id array key inside them
                if (Object.keys(restoreDataObj['data']).length > 0 && Object.keys(restoreDataObj['data']).length <= 2) {
                    if (restoreDataObj['data'].hasOwnProperty('node') &&
                        restoreDataObj['data']['node'].hasOwnProperty('id') &&
                        Array.isArray(restoreDataObj['data']['node']['id'])) {
                        requestBodyObj.nodes = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](restoreDataObj['data']['node']['id']);
                    }
                    else {
                        // the data object does not have valid node key or id key
                        console.error('the data object does not have valid node key or id key for initRestoreData');
                    }
                    if (restoreDataObj['data'].hasOwnProperty('relation') &&
                        restoreDataObj['data']['relation'].hasOwnProperty('id') &&
                        Array.isArray(restoreDataObj['data']['relation']['id'])) {
                        requestBodyObj.nodes = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](restoreDataObj['data']['relation']['id']);
                    }
                    else {
                        // the data object does not have valid relation key or id key
                        console.error('the data object does not have valid relation key or id key for relation in initRestoreData');
                    }
                }
                else {
                    // providing irrelevant number of keys to the api in the data object
                    console.error('irrelevant number of keys to the api in the data object in initRestoreData');
                }
            }
            else {
                if (restoreDataObj['type'] === 'node' && restoreDataObj['data'].hasOwnProperty('id')) {
                    requestBodyObj.nodes = [restoreDataObj['data']['id']];
                }
                if (restoreDataObj['type'] === 'relation' && restoreDataObj['data'].hasOwnProperty('id')) {
                    requestBodyObj.relations = [restoreDataObj['data']['id']];
                }
            }
            // requestBody has been prepared
            console.log('final request body is ', requestBodyObj);
            this.graphService.restoreData(requestBodyObj).subscribe(function (response) {
                // once the response if okay, send back the confirmation to the create nodes
                var finalData = {
                    nodes: response['seperateNodes'],
                    relations: response['seperateEdges']
                };
                // update the nodes / relations in the visJS graph also and finally tell the modal to go away
                var processedResponse = _this.updateRestoreDataInVis(finalData);
                if (processedResponse.constructor === Boolean && processedResponse) {
                    // this will be executed when a node has been restored
                    _this.restoredData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](finalData);
                }
                else {
                    _this.restoredData = null;
                    _this.loader = false;
                }
                _this.snackBar.success({ message: _this.DATA_RESTORE_TEXT_SUCCESS });
            }, function (error) {
                console.error('An error occured while restoring the data from the API');
                console.log(error);
                _this.loader = false;
                _this.snackBar.error({ message: _this.DATA_RESTORE_TEXT_ERROR });
            });
        }
        else {
            console.error('Did not recieve any valid object data for restore');
            this.loader = false;
        }
    };
    GraphVisualizerComponent.prototype.updateRestoreDataInVis = function (restoredDataObj) {
        try {
            if (restoredDataObj.hasOwnProperty('nodes') && !!restoredDataObj['nodes'] && restoredDataObj['nodes'].length > 0) {
                this.updateNodesInVis(restoredDataObj['nodes']);
            }
            if (restoredDataObj.hasOwnProperty('relations') && !!restoredDataObj['relations'] && restoredDataObj['relations'].length > 0) {
                this.updateRelationsInVis(restoredDataObj['relations']);
            }
            return true;
        }
        catch (e) {
            console.error('An error occured while updating visJS in updateRestoreDataInVis function ', e);
            return false;
        }
        // the purpose of the function is to update the nodes / relations in VisJS dataSet
    };
    // to update allGraphData and filteredGraphData
    GraphVisualizerComponent.prototype.updateGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('event') && obj.event === 'create') {
                // verify if color property is present and add it as is
                obj.data = this.shiftColorKey(obj.data);
                this.insertIntoAllGraphArray(obj);
                this.insertIntoFilteredGraphArray(obj);
            }
            else if (obj.hasOwnProperty('event') && obj.event === 'edit' || obj.event === 'delete' || obj.event === 'restore') {
                this.updateAllGraphArray(obj);
                this.updateFilteredGraphArray(obj);
            }
        }
        catch (e) {
            console.log("Method : updateGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    // update allgraphdata array
    GraphVisualizerComponent.prototype.updateAllGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data')) {
                var index = void 0;
                // update in all graph data array
                if (obj.hasOwnProperty('element') && obj.element === 'nodes') {
                    // for node
                    if (obj.hasOwnProperty('event') && obj.event === 'delete') {
                        obj.data['color'] = this.colorConfig['deletedColor']['colorCode'];
                    }
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.allGraphData[obj.element], { label: obj.data['label'] });
                }
                else if (obj.hasOwnProperty('element') && obj.element === 'edges') {
                    // for edge
                    if (obj.hasOwnProperty('event') && obj.event === 'delete') {
                        obj.data['color']['color'] = this.colorConfig['deletedColor']['colorCode'];
                        obj.data['color']['highlight'] = this.colorConfig['deletedColor']['highlightColorCode'];
                    }
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.allGraphData[obj.element], { id: obj.data['id'] });
                }
                if (index >= 0) {
                    // update in array
                    this.allGraphData[obj.element][index] = obj.data;
                }
            }
        }
        catch (e) {
            console.log("Method : updateAllGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    // update filteredgrapdata garray
    GraphVisualizerComponent.prototype.updateFilteredGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data')) {
                var index = void 0;
                // update in all graph data array
                if (obj.hasOwnProperty('element') && obj.element === 'nodes') {
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.filteredGraphData[obj.element], { label: obj.data['label'] });
                }
                else if (obj.hasOwnProperty('element') && obj.element === 'edges') {
                    // remove deleted edge from filtered data array
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.filteredGraphData[obj.element], { id: obj.data['id'] });
                }
                if (index >= 0) {
                    if (obj.hasOwnProperty('event') && obj.event === 'delete') {
                        this.filteredGraphData[obj.element].splice(index, 1);
                    }
                    else if (obj.hasOwnProperty('event') && obj.event === 'edit') {
                        // update filterd graph data
                        var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](obj.data);
                        tem['title'] = this.stringifyProperties(tem);
                        this.filteredGraphData[obj.element][index] = tem;
                    }
                }
                else if (obj.hasOwnProperty('event') && obj.event === 'restore') {
                    this.insertIntoFilteredGraphArray(obj);
                }
            }
        }
        catch (e) {
            console.log("Method : updateFilteredGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    // insert into allgraphdata array
    GraphVisualizerComponent.prototype.insertIntoAllGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data') && obj.hasOwnProperty('element')) {
                this.allGraphData[obj.element].push(obj.data);
            }
        }
        catch (e) {
            console.log("Method : insertIntoAllGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    GraphVisualizerComponent.prototype.shiftColorKey = function (elementObject, previousObject) {
        if (previousObject === void 0) { previousObject = null; }
        // To add a new color key in the root level if color is present in properties key
        if (elementObject.hasOwnProperty('properties') && elementObject['properties'].hasOwnProperty('color')) {
            elementObject['color'] = elementObject['properties']['color'];
            return elementObject;
        }
        else if (previousObject !== null) {
            return previousObject;
        }
        else {
            return elementObject;
        }
    };
    // insert into filtered graph array
    GraphVisualizerComponent.prototype.insertIntoFilteredGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data') && obj.hasOwnProperty('element')) {
                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](obj.data);
                tem['title'] = this.stringifyProperties(tem);
                this.filteredGraphData[obj.element].push(tem);
            }
        }
        catch (e) {
            console.log("Method : insertIntoFilteredGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "totalTypesArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "newNodeCreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "nodeLimitEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "networkInstance", void 0);
    GraphVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-visualizer',
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"],
            src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"],
            _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"],
            _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_7__["ColorServiceService"], src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarSharedService"],
            src_app_modules_redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_9__["CoreFilterService"]])
    ], GraphVisualizerComponent);
    return GraphVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-sidebar (eventClicked)=\"childEventClicked($event)\" (nodeTypesEvent)=\"sendTypes($event)\" [newNodeCreated]=\"newNodeCreated\" [nodeLimitEnterEvent] = \"nodeLimitValue\"></app-dashboard-sidebar>\r\n<app-graph-visualizer (newNodeCreated)=\"childEventClicked2($event)\" [event]=\"clickedEvent\" (nodeLimitEvent)=\"sendLimitToSidebar($event)\" [totalTypesArray]=\"totalTypesArray\"></app-graph-visualizer>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL21haW4tdjIvbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.totalTypesArray = [];
        this.nodeLimitValue = null;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    MainComponent.prototype.childEventClicked2 = function (event) {
        this.newNodeCreated = event;
    };
    MainComponent.prototype.sendTypes = function (event) {
        if (!!event && event.length > 0) {
            this.totalTypesArray = event;
        }
    };
    MainComponent.prototype.sendLimitToSidebar = function (event) {
        // this  function is responsible to send the nodeLimit value to the sidebar so that apply function can be clicked
        if (!isNaN(event)) {
            this.nodeLimitValue = event;
        }
        else {
            console.log('nodelimit is not a number');
            this.nodeLimitValue = null;
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardV2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV2RoutingModule", function() { return DashboardV2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts");




var routes = [
    { path: "", component: _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], data: { title: "dashboard" } }
];
var DashboardV2RoutingModule = /** @class */ (function () {
    function DashboardV2RoutingModule() {
    }
    DashboardV2RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardV2RoutingModule);
    return DashboardV2RoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/dashboard-v2.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/dashboard-v2.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-v2-routing.module */ "./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts");
/* harmony import */ var _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/graph-v2-visualizer/graph-visualizer.component */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts");
/* harmony import */ var _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard-v2-sidebar/dashboard-sidebar.component */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-v2-header/dashboard-header.component */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _algo_runner_algo_runner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../algo-runner/algo-runner.module */ "./src/app/modules/algo-runner/algo-runner.module.ts");
/* harmony import */ var _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/color-panel/color-panel/color-panel.component */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts");
/* harmony import */ var _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-nodes/create-nodes.component */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts");
/* harmony import */ var _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graph-exporter/graph-exporter.component */ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.ts");
/* harmony import */ var _custom_material_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../custom-material/custom-material/custom-material.module */ "./src/app/modules/custom-material/custom-material/custom-material.module.ts");
/* harmony import */ var _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../custom-material/services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");
















// Material design components from custom Material module


var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"], _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__["ColorPanelComponent"], _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__["CreateNodesComponent"], _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__["GraphExporterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiSelectModule"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _custom_material_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_15__["CustomMaterialModule"],
                _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardV2RoutingModule"],
                _algo_runner_algo_runner_module__WEBPACK_IMPORTED_MODULE_11__["AlgoRunnerModule"]
            ],
            exports: [
                _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__["ColorPanelComponent"],
                _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__["GraphExporterComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"],
                _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__["CreateNodesComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"]
            ],
            providers: [_custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_16__["MaterialService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ColorServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorServiceService", function() { return ColorServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ColorServiceService = /** @class */ (function () {
    function ColorServiceService() {
        this.colorConfig = {
            defaultColor: {
            // Academia: '#ff4444',
            // Consulting: '#ffbb33',
            // Government: '#00C851',
            // 'Impact Investor': '#33b5e5',
            // 'International Agency': '#CC0000',
            // Media: '#FF8800',
            // 'NGO/CBO': '#007E33',
            // People: '#0099CC',
            // Philanthropy: '#9933CC',
            // Platform: '#0d47a1',
            // 'Private Sector': '#2BBBAD',
            // 'Research Institute': '#c51162'
            },
            selectedColor: {
            // Academia: '#ff4444',
            // Consulting: '#ffbb33',
            // Government: '#00C851',
            // 'Impact Investor': '#33b5e5',
            // 'International Agency': '#CC0000',
            // Media: '#FF8800',
            // 'NGO/CBO': '#007E33',
            // People: '#0099CC',
            // Philanthropy: '#9933CC',
            // Platform: '#0d47a1',
            // 'Private Sector': '#2BBBAD',
            // 'Research Institute': '#c51162'
            },
            deletedColor: {
                colorCode: '#C0C0C0',
                highlightColorCode: '#9a9a9a'
            },
            restoreColor: {
                colorCode: '#96C1FA',
                highlightColorCode: '#249BFC'
            },
            initialColor: {
                colorCode: '#96C1FA'
            }
        };
        this.colorObj$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.colorConfig);
    }
    ColorServiceService.prototype.updateDefaultColor = function (data) {
        this.colorConfig.defaultColor = data;
        this.colorObj$.next(this.colorConfig);
    };
    ColorServiceService.prototype.insertIntoDefaultColor = function (data) {
        if (!this.colorConfig.defaultColor[data['type']]) {
            this.colorConfig.defaultColor[data['type']] = data['color'];
            this.colorObj$.next(this.colorConfig);
        }
    };
    ColorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorServiceService);
    return ColorServiceService;
}());



/***/ }),

/***/ "./src/app/modules/redux/actions/actions.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/redux/actions/actions.ts ***!
  \**************************************************/
/*! exports provided: AppliedFiltersActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appliedFilters_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliedFilters_actions */ "./src/app/modules/redux/actions/appliedFilters_actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppliedFiltersActions", function() { return _appliedFilters_actions__WEBPACK_IMPORTED_MODULE_0__; });




/***/ }),

/***/ "./src/app/modules/redux/actions/appliedFilters_actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/redux/actions/appliedFilters_actions.ts ***!
  \*****************************************************************/
/*! exports provided: ADD_APPLIED_FILTERS_DATA, REMOVE_APPLIED_FILTERS_DATA, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_APPLIED_FILTERS_DATA", function() { return ADD_APPLIED_FILTERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_APPLIED_FILTERS_DATA", function() { return REMOVE_APPLIED_FILTERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
var ADD_APPLIED_FILTERS_DATA = 'ADD_APPLIED_FILTERS_DATA';
var REMOVE_APPLIED_FILTERS_DATA = 'REMOVE_APPLIED_FILTERS_DATA';
var CLEAR_STORE = 'CLEAR_STORE';


/***/ }),

/***/ "./src/app/modules/redux/redux.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/redux/redux.module.ts ***!
  \***********************************************/
/*! exports provided: ReduxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxModule", function() { return ReduxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/app/modules/redux/store.ts");
/* harmony import */ var _services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");






var ReduxModule = /** @class */ (function () {
    function ReduxModule(ngRedux) {
        try {
            ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_4__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_4__["INITIAL_STATE"]);
            console.log('%c Redux store successfully activated', 'color: green; font-weight: bold;');
        }
        catch (e) {
            console.log('%c An error occured while registering the redux store in the redux module ', 'color: red; font-weight: bold;');
            console.log(e);
        }
    }
    ReduxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgReduxModule"]
            ],
            providers: [_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_5__["CoreFilterService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]])
    ], ReduxModule);
    return ReduxModule;
}());



/***/ }),

/***/ "./src/app/modules/redux/services/applied_filters_service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/redux/services/applied_filters_service.ts ***!
  \*******************************************************************/
/*! exports provided: updateObject, addFilteredDataAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObject", function() { return updateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFilteredDataAction", function() { return addFilteredDataAction; });
/**
 * Updates object
 * @param oldObject the previous state
 * @param newValues the new values to update the state
 * @returns  new Object with updated values
 * @description This function is a basic utility function to mutate and return the existing object with new values
 */
function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}
/**
 * Adds filtered data action
 * @param state the previous state
 * @param action current action object
 * @returns  newState
 * @description The function accepts the current state in the store and the action to perform (to add the new AppliedFilters Object)
 */
function addFilteredDataAction(state, action) {
    console.log('inside addFilteredDataAction', action, state);
    // let newState = state;
    var newState = {
        appliedFilters: {
            requestBody: {},
            filteredData: {}
        },
        lastUpdated: null
    };
    newState.appliedFilters = action.payload;
    // add the current time
    newState.lastUpdated = new Date();
    console.log('returning final state as ', newState);
    return newState;
}


/***/ }),

/***/ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/redux/services/core-filter-service/core-filter.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CoreFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFilterService", function() { return CoreFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../actions/actions */ "./src/app/modules/redux/actions/actions.ts");




var CoreFilterService = /** @class */ (function () {
    function CoreFilterService(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CoreFilterService.prototype.updateAppliedFiltersData = function (newData) {
        // store the response data in the redux store
        var reduxObject = {
            type: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["AppliedFiltersActions"].ADD_APPLIED_FILTERS_DATA,
            payload: {
                requestBody: {},
                filteredData: {}
            }
        };
        if (newData.hasOwnProperty('request')) {
            reduxObject.payload.requestBody = newData.request;
        }
        if (newData.hasOwnProperty('data')) {
            reduxObject.payload.filteredData = newData.data;
        }
        this.ngRedux.dispatch(reduxObject);
    };
    CoreFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], CoreFilterService);
    return CoreFilterService;
}());



/***/ }),

/***/ "./src/app/modules/redux/store.ts":
/*!****************************************!*\
  !*** ./src/app/modules/redux/store.ts ***!
  \****************************************/
/*! exports provided: rootReducer, INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/actions */ "./src/app/modules/redux/actions/actions.ts");
/* harmony import */ var _services_applied_filters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/applied_filters_service */ "./src/app/modules/redux/services/applied_filters_service.ts");


/**
 * Root reducer
 * @param state previous state of the store
 * @param action action to perform
 * @returns  new state
 * @description The Root Reducer is the one which will handle all the Action declarations.
 * This is the only reducer which will store the initial state. The purpose of the root reducer is
 * to recieve the action and pass it to the respective action handler / sub reducer
 */
function rootReducer(state, action) {
    if (typeof action.type === 'string') {
        switch (action.type) {
            case _actions_actions__WEBPACK_IMPORTED_MODULE_0__["AppliedFiltersActions"].ADD_APPLIED_FILTERS_DATA:
                return _services_applied_filters_service__WEBPACK_IMPORTED_MODULE_1__["addFilteredDataAction"](state, action);
            case _actions_actions__WEBPACK_IMPORTED_MODULE_0__["AppliedFiltersActions"].CLEAR_STORE:
                var emptyObject = {
                    appliedFilters: {
                        requestBody: {},
                        filteredData: []
                    },
                    lastUpdated: null
                };
                return _services_applied_filters_service__WEBPACK_IMPORTED_MODULE_1__["updateObject"](state, emptyObject);
        }
    }
    else {
        console.log('%c Type of action provided is not string', 'color: red; font-weight: bold;');
    }
    return state;
}
var INITIAL_STATE = {
    appliedFilters: {
        requestBody: {},
        filteredData: []
    },
    lastUpdated: null
};


/***/ }),

/***/ "./src/app/modules/shared/component/color-picker/color-picker.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/component/color-picker/color-picker.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(colorPicker)]=\"newTypeColor\" \r\n[style.background]=\"newTypeColor\" [cpPosition]=\"left\" \r\nid=\"newTypeColor\" [cpFallbackColor]=\"newTypeColor\"\r\n[cpOKButton]=\"true\" [cpOKButtonText]=\"'Select'\"\r\n(colorPickerSelect)=\"selectedColor($event)\"/>\r\n"

/***/ }),

/***/ "./src/app/modules/shared/component/color-picker/color-picker.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/component/color-picker/color-picker.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#newTypeColor {\n  max-width: 50px;\n  cursor: pointer;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n::ng-deep .cp-ok-button-class {\n  background: #318ce0;\n  min-width: 65px;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  line-height: 2em; }\n\ninput#newTypeColor {\n  color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2hhcmVkL2NvbXBvbmVudC9jb2xvci1waWNrZXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50XFxjb2xvci1waWNrZXJcXGNvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG1CQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoibW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3VHlwZUNvbG9yIHtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3Atb2stYnV0dG9uLWNsYXNzIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0OSwgMTQwLCAyMjQpO1xyXG4gICAgbWluLXdpZHRoOiA2NXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuaW5wdXQjbmV3VHlwZUNvbG9yIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/component/color-picker/color-picker.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/component/color-picker/color-picker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        // Private variables for component
        // public default = '#36cc95';
        this.default = '#96C1FA';
        // Input variables from parent
        this.elDefault = null;
        this.elWidth = '50px';
        // Output from the component to parent
        this.selectedColorCode = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.default);
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
    };
    ColorPickerComponent.prototype.ngOnChanges = function () {
        this.newTypeColor = this.elDefault || this.default;
    };
    ColorPickerComponent.prototype.selectedColor = function (SelectedColorEvent) {
        if (SelectedColorEvent.length) {
            console.log('user selected newcolor code', SelectedColorEvent);
            this.selectedColorCode.next(SelectedColorEvent);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColorPickerComponent.prototype, "elDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColorPickerComponent.prototype, "elWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorPickerComponent.prototype, "selectedColorCode", void 0);
    ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-picker',
            template: __webpack_require__(/*! ./color-picker.component.html */ "./src/app/modules/shared/component/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.scss */ "./src/app/modules/shared/component/color-picker/color-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"loader\">\r\n        <img src=\"./../../../../../../assets/bars_loader.svg\">\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  margin: auto;\n  display: table;\n  vertical-align: middle;\n  z-index: 9999; }\n\n.loader {\n  width: 100%;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center; }\n\n.loader img {\n    width: 80px;\n    height: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2hhcmVkL2NvbXBvbmVudC9nbG9iYWwtbG9hZGVyL2dsb2JhbC1sb2FkZXIvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50XFxnbG9iYWwtbG9hZGVyXFxnbG9iYWwtbG9hZGVyXFxnbG9iYWwtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBWTtFQUNaLFlBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBSWpCO0VBQ0ksV0FBWTtFQUtaLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQVozQjtJQUdRLFdBQVc7SUFDZixZQUFhLEVBQUEiLCJmaWxlIjoibW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L2dsb2JhbC1sb2FkZXIvZ2xvYmFsLWxvYWRlci9nbG9iYWwtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgaGVpZ2h0IDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuXHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodCA6IDgwcHg7XHJcbiAgICB9XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GlobalLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalLoaderComponent", function() { return GlobalLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalLoaderComponent = /** @class */ (function () {
    function GlobalLoaderComponent() {
    }
    GlobalLoaderComponent.prototype.ngOnInit = function () {
    };
    GlobalLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-global-loader',
            template: __webpack_require__(/*! ./global-loader.component.html */ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.html"),
            styles: [__webpack_require__(/*! ./global-loader.component.scss */ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalLoaderComponent);
    return GlobalLoaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/component/sidebar/sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/component/sidebar/sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n    <div class=\"sidebar-header dr-menu\">\r\n        <h2 class=\"dr-label\">Network Elements</h2>\r\n    </div>\r\n    <!------------------Org---------------------->\r\n    <div class=\"side\">\r\n        <nav class=\"dr-menu\">\r\n            <div class=\"dr-trigger\"><span class=\"fas fa-globe-asia\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Organisation')\">Organisation</a>\r\n                <sui-multi-select [(ngModel)]=\"selectedOrg\" [options]=\"orgOptions\" [maxSelected]=\"5\" #organisation>\r\n                    <div class=\"ui icon search input\">\r\n                        <i class=\"search icon\"></i>\r\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search organisations...\">\r\n                    </div>\r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"header\">\r\n                        <i class=\"list icon\"></i> Options\r\n                    </div>\r\n                    <div class=\"scrolling menu\">\r\n                        <sui-select-option *ngFor=\"let o of organisation.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                    </div>\r\n                </sui-multi-select>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n    <!------------------Org---------------------->\r\n    <!------------------Department---------------------->\r\n    <div class=\"side\">\r\n        <nav class=\"dr-menu\">\r\n            <div class=\"dr-trigger\"><span class=\"fa fa-linode\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Department')\">Department</a>\r\n                <sui-multi-select [(ngModel)]=\"selectedDepartment\" [options]=\"departmentOptions\" [maxSelected]=\"5\" #department>\r\n                    <div class=\"ui icon search input\">\r\n                        <i class=\"search icon\"></i>\r\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search department...\">\r\n                    </div>\r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"header\">\r\n                        <i class=\"list icon\"></i> Options\r\n                    </div>\r\n                    <div class=\"scrolling menu\">\r\n                        <sui-select-option *ngFor=\"let o of department.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                    </div>\r\n                </sui-multi-select>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n    <!------------------Department---------------------->\r\n    <!------------------Person---------------------->\r\n    <div class=\"side\">\r\n        <nav class=\"dr-menu\">\r\n            <div class=\"dr-trigger\"><span class=\"fa fa-user-o\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Person')\">Person</a>\r\n                <sui-multi-select [(ngModel)]=\"selectedPerson\" [options]=\"personOptions\" [maxSelected]=\"5\" #person>\r\n                    <div class=\"ui icon search input\">\r\n                        <i class=\"search icon\"></i>\r\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search person...\">\r\n                    </div>\r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"header\">\r\n                        <i class=\"list icon\"></i> Options\r\n                    </div>\r\n                    <div class=\"scrolling menu\">\r\n                        <sui-select-option *ngFor=\"let o of person.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                    </div>\r\n                </sui-multi-select>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n    <!------------------Person---------------------->\r\n    <!------------------Relationship type---------------------->\r\n    <div class=\"side\">\r\n        <nav class=\"dr-menu\">\r\n            <div class=\"dr-trigger\"><span class=\"fas fa-code-branch\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Relationship')\">Relationships</a>\r\n                <sui-multi-select [(ngModel)]=\"selectedRelation\" [options]=\"relationOptions\" [maxSelected]=\"5\" #relation>\r\n                    <div class=\"ui icon search input\">\r\n                        <i class=\"search icon\"></i>\r\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search relations...\">\r\n                    </div>\r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"header\">\r\n                        <i class=\"list icon\"></i> Options\r\n                    </div>\r\n                    <div class=\"scrolling menu\">\r\n                        <sui-select-option *ngFor=\"let o of relation.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                    </div>\r\n                </sui-multi-select>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n    <!------------------Relationship type---------------------->\r\n    <!------------------Search---------------------->\r\n    <div class=\"search-btn\">\r\n        <button class=\"btn search-graph\" (click)=\"searchGraph()\">Search Graph</button>\r\n    </div>\r\n    <div class=\"reload-btn\">\r\n        <button class=\"btn search-graph\" (click)=\"networkElementClick('Reload')\">Reload</button>\r\n    </div>\r\n    <!------------------Search---------------------->\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/component/sidebar/sidebar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/component/sidebar/sidebar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src: url('icomoon.eot');\n  src: url('icomoon.eot?#iefix') format(\"embedded-opentype\"), url('icomoon.woff') format(\"woff\"), url('icomoon.ttf') format(\"truetype\"), url('icomoon.svg#icomoon') format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.sidebar {\n  background: #C0C0C0;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.side {\n  float: left;\n  min-width: 320px;\n  min-height: 140px; }\n\n.dr-menu {\n  width: 100%;\n  max-width: 400px;\n  min-width: 300px;\n  position: relative;\n  font-size: 1.3em;\n  line-height: 2.5;\n  font-weight: 400;\n  color: #fff;\n  padding-top: 2em;\n  padding-bottom: 45px; }\n\n.dr-menu > div {\n  cursor: pointer;\n  position: absolute;\n  width: 100%; }\n\n.dr-menu > div .dr-icon {\n  top: 0;\n  left: 0;\n  position: absolute;\n  font-size: 150%;\n  line-height: 1.6;\n  padding: 0 10px;\n  transition: all 0.2s ease; }\n\n.dr-menu.dr-menu-open > div .dr-icon {\n  color: #fff;\n  left: 100%;\n  transform: translateX(-100%); }\n\n.dr-menu > div .dr-icon:after {\n  content: \"\\e008\";\n  position: absolute;\n  font-size: 50%;\n  line-height: 3.25;\n  left: -10%;\n  opacity: 0; }\n\n.dr-menu.dr-menu-open > div .dr-icon:after {\n  opacity: 1; }\n\n.dr-menu > div .dr-label {\n  padding-left: 1em;\n  position: relative;\n  display: inline-block;\n  color: #fff;\n  font-size: 0.9em;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  line-height: 2.75;\n  transition: all 0.2s ease; }\n\nspan.fas {\n  margin-left: 2em; }\n\nspan.fa {\n  margin-left: 2em; }\n\n.dr-menu.dr-menu-open > div .dr-label {\n  transform: translateY(-90%); }\n\n.dr-menu ul {\n  padding: 0;\n  margin: 0 3em 0 0;\n  list-style: none;\n  opacity: 0;\n  position: relative;\n  z-index: 0;\n  pointer-events: none;\n  transition: opacity 0s linear 205ms; }\n\n.dr-menu.dr-menu-open ul {\n  opacity: 1;\n  z-index: 200;\n  pointer-events: auto;\n  transition: opacity 0s linear 0s; }\n\n.dr-menu ul li {\n  display: block;\n  margin: 0 0 5px 0;\n  opacity: 0;\n  transition: opacity 0.3s ease; }\n\n.dr-menu.dr-menu-open ul li {\n  opacity: 1; }\n\n.dr-menu.dr-menu-open ul li:nth-child(2) {\n  transition-delay: 35ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(3) {\n  transition-delay: 70ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(4) {\n  transition-delay: 105ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(5) {\n  transition-delay: 140ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(6) {\n  transition-delay: 175ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(7) {\n  transition-delay: 205ms; }\n\n.dr-menu ul li a {\n  display: inline-block;\n  padding: 0 20px;\n  color: #C0C0C0; }\n\n.dr-menu ul li a:hover {\n  color: #000; }\n\n.dr-icon:before,\n.dr-icon:after {\n  position: relative;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased; }\n\n.ui.multiple.dropdown {\n  padding: .22619048em 0em .22619048em 0em; }\n\n.search-btn {\n  position: relative;\n  width: 300px;\n  height: 50px; }\n\n.search-graph {\n  background: #C0C0C0;\n  border: 2px solid #fff;\n  color: #fff;\n  margin-top: 100px;\n  margin-left: 50px; }\n\n.dropdown.icon {\n  padding-right: 20px !important; }\n\n.sidebar-header h2 {\n  margin-left: 20px; }\n\n.divider {\n  width: 100%;\n  color: #fff; }\n\n.hr {\n  color: #fff;\n  width: 100%; }\n\n.reload-btn {\n  width: 300px;\n  height: 50px;\n  margin-left: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2hhcmVkL2NvbXBvbmVudC9zaWRlYmFyL0Q6XFxOZXR3b3JrX1Zpc3VhbGl6ZXJcXG5ldHdvcmstdmlzdWFsaXplclxcY2xpZW50XFxzcmNcXGFwcC9tb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudFxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0Qix1QkFBbUQ7RUFDbkQsK0tBQStSO0VBQy9SLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBR2YseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFJViw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBR2pCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUlJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUdwQixtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUdwQixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7RUFHViw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFHSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFHSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7O0VBRUksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQyxFQUFBOztBQUd2QztFQUNJLHdDQUF3QyxFQUFBOztBQUc1QztFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoibW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvaWNvbW9vbi5lb3QnKTtcclxuICAgIHNyYzogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvaWNvbW9vbi5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9pY29tb29uLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvaWNvbW9vbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2ljb21vb24uc3ZnI2ljb21vb24nKSBmb3JtYXQoJ3N2ZycpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogI0MwQzBDMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxuLmRyLW1lbnUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uZHItbWVudT5kaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kci1tZW51PmRpdiAuZHItaWNvbiB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5kci1tZW51LmRyLW1lbnUtb3Blbj5kaXYgLmRyLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uZHItbWVudT5kaXYgLmRyLWljb246YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGUwMDhcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuMjU7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRyLW1lbnUuZHItbWVudS1vcGVuPmRpdiAuZHItaWNvbjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZHItbWVudT5kaXYgLmRyLWxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNzU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG5zcGFuLmZhcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcblxyXG5zcGFuLmZhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbi5kci1tZW51LmRyLW1lbnUtb3Blbj5kaXYgLmRyLWxhYmVsIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTkwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MCUpO1xyXG59XHJcblxyXG4uZHItbWVudSB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDNlbSAwIDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBsaW5lYXIgMjA1bXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMHMgbGluZWFyIDIwNW1zO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBsaW5lYXIgMjA1bXM7XHJcbn1cclxuXHJcbi5kci1tZW51LmRyLW1lbnUtb3BlbiB1bCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMHMgbGluZWFyIDBzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGxpbmVhciAwcztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMHMgbGluZWFyIDBzO1xyXG59XHJcblxyXG4uZHItbWVudSB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kci1tZW51LmRyLW1lbnUtb3BlbiB1bCBsaSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZHItbWVudS5kci1tZW51LW9wZW4gdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMzVtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMzVtcztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDM1bXM7XHJcbn1cclxuXHJcbi5kci1tZW51LmRyLW1lbnUtb3BlbiB1bCBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiA3MG1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiA3MG1zO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogNzBtcztcclxufVxyXG5cclxuLmRyLW1lbnUuZHItbWVudS1vcGVuIHVsIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEwNW1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAxMDVtcztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwNW1zO1xyXG59XHJcblxyXG4uZHItbWVudS5kci1tZW51LW9wZW4gdWwgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMTQwbXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDE0MG1zO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTQwbXM7XHJcbn1cclxuXHJcbi5kci1tZW51LmRyLW1lbnUtb3BlbiB1bCBsaTpudGgtY2hpbGQoNikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxNzVtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMTc1bXM7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxNzVtcztcclxufVxyXG5cclxuLmRyLW1lbnUuZHItbWVudS1vcGVuIHVsIGxpOm50aC1jaGlsZCg3KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIwNW1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAyMDVtcztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDIwNW1zO1xyXG59XHJcblxyXG4uZHItbWVudSB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGNvbG9yOiAjQzBDMEMwO1xyXG59XHJcblxyXG4uZHItbWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZHItaWNvbjpiZWZvcmUsXHJcbi5kci1pY29uOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgICBzcGVhazogbm9uZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi51aS5tdWx0aXBsZS5kcm9wZG93biB7XHJcbiAgICBwYWRkaW5nOiAuMjI2MTkwNDhlbSAwZW0gLjIyNjE5MDQ4ZW0gMGVtO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZ3JhcGgge1xyXG4gICAgYmFja2dyb3VuZDogI0MwQzBDMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi5pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIGgyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaHIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlbG9hZC1idG4ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/shared/component/sidebar/sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/component/sidebar/sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(graphDataService) {
        this.graphDataService = graphDataService;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.orgOptions = [];
        this.relationOptions = [];
        this.departmentOptions = [];
        this.personOptions = [];
        this.selectedOrg = [];
        this.selectedRelation = [];
        this.selectedDepartment = [];
        this.selectedPerson = [];
        this.selectedRelationship = [];
        this.selectedGraph = [];
        this.searchGraphData = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getGraph();
    };
    SidebarComponent.prototype.networkElementClick = function (element) {
        if (element) {
            this.eventClicked.emit(element);
        }
    };
    SidebarComponent.prototype.getGraph = function () {
        var _this = this;
        this.graphDataService.getInitialData().subscribe(function (data) {
            var temorg = [];
            var temdep = [];
            var temper = [];
            if (data && data['seperateNodes'] && data['seperateEdges']) {
                data['seperateNodes'].filter(function (node) {
                    if (node.type[0] === "Organisation") {
                        temorg.push(node.label);
                    }
                    else if (node.type[0] === "Department") {
                        temdep.push(node.label);
                    }
                    else if (node.type[0] === "Person") {
                        temper.push(node.label);
                    }
                });
                data['seperateEdges'].filter(function (edge) {
                    _this.relationOptions.push(edge.label);
                });
            }
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            _this.relationOptions = _this.relationOptions.filter(onlyUnique);
            _this.orgOptions = temorg;
            _this.departmentOptions = temdep;
            _this.personOptions = temper;
        });
    };
    SidebarComponent.prototype.searchGraph = function () {
        var _this = this;
        this.selectedGraph.push({ type: "Organisation", value: this.selectedOrg });
        this.selectedGraph.push({ type: "Department", value: this.selectedDepartment });
        this.selectedGraph.push({ type: "Person", value: this.selectedPerson });
        this.selectedRelation.filter(function (rel) {
            _this.selectedRelationship.push({ type: rel, value: [] });
        });
        this.searchGraphData.push({ nodes: this.selectedGraph, edges: this.selectedRelationship });
        console.log('or', this.searchGraphData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "eventClicked", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/modules/shared/component/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/modules/shared/component/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toggleWrapper\">\r\n  <label class=\"switch\">\r\n    <input type=\"checkbox\" (change)=\"toggleEventHandler($event)\">\r\n    <span class=\"slider round\"></span>\r\n  </label>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggleWrapper {\n  text-align: center;\n  width: 50%;\n  margin: auto;\n  height: 20%; }\n\n.switch {\n  position: relative;\n  display: block;\n  top: 8px;\n  width: 50px;\n  height: 30px; }\n\n.slider {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  background: white;\n  border: 2px solid black;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  transition: .5s; }\n\n.slider:before {\n  position: absolute;\n  left: 0;\n  content: \"\";\n  top: 4.5px;\n  bottom: 3px;\n  background-color: black;\n  transition: .5s; }\n\n.switch input {\n  display: none; }\n\ninput:checked + .slider {\n  background-color: black; }\n\ninput:checked + .slider:before {\n  transform: translateX(27px) rotateZ(45deg);\n  background-color: white; }\n\n.slider.round {\n  border-radius: 35px; }\n\n.slider.round:before {\n  width: 43%;\n  height: 43%;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  transform: rotateZ(-45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2hhcmVkL2NvbXBvbmVudC90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2gvRDpcXE5ldHdvcmtfVmlzdWFsaXplclxcbmV0d29yay12aXN1YWxpemVyXFxjbGllbnRcXHNyY1xcYXBwL21vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50XFx0b2dnbGUtc3dpdGNoXFx0b2dnbGUtc3dpdGNoXFx0b2dnbGUtc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQW1CO0VBQ25CLFVBQVc7RUFDWCxZQUFhO0VBQ2IsV0FBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQW1CO0VBQ25CLGNBQWU7RUFDZixRQUFRO0VBQ1IsV0FBWTtFQUNaLFlBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFtQjtFQUNuQixNQUFRO0VBQ1IsUUFBUztFQUNULFNBQVU7RUFDVixPQUFRO0VBQ1IsZUFBZ0I7RUFDaEIsaUJBQWtCO0VBQ2xCLHVCQUF3QjtFQUN4QiwwQ0FBd0M7RUFDeEMsZUFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBbUI7RUFDbkIsT0FBUTtFQUNSLFdBQVk7RUFDWixVQUFXO0VBQ1gsV0FBWTtFQUNaLHVCQUF3QjtFQUN4QixlQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWMsRUFBQTs7QUFHaEI7RUFDRSx1QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSwwQ0FBMkM7RUFDM0MsdUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsbUJBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsVUFBVztFQUNYLFdBQVk7RUFDWiw0QkFBNkI7RUFDN0IsNkJBQThCO0VBQzlCLDBCQUEyQixFQUFBIiwiZmlsZSI6Im1vZHVsZXMvc2hhcmVkL2NvbXBvbmVudC90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGVXcmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB3aWR0aCA6IDUwJTtcclxuICAgIG1hcmdpbiA6IGF1dG87XHJcbiAgICBoZWlnaHQgOiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgIHRvcDogOHB4O1xyXG4gICAgd2lkdGggOiA1MHB4O1xyXG4gICAgaGVpZ2h0IDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgdG9wIDogMCA7IFxyXG4gICAgcmlnaHQgOiAwOyBcclxuICAgIGJvdHRvbSA6IDA7IFxyXG4gICAgbGVmdCA6IDA7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdyA6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHRyYW5zaXRpb24gOiAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBsZWZ0IDogMDtcclxuICAgIGNvbnRlbnQgOiBcIlwiO1xyXG4gICAgdG9wIDogNC41cHg7XHJcbiAgICBib3R0b20gOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uIDogLjVzO1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIGRpc3BsYXkgOiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVYKDI3cHgpIHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAzNXB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICB3aWR0aCA6IDQzJTtcclxuICAgIGhlaWdodCA6IDQzJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgOiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtIDogcm90YXRlWigtNDVkZWcpO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ToggleSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchComponent", function() { return ToggleSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleSwitchComponent = /** @class */ (function () {
    function ToggleSwitchComponent() {
        this.toggleOn = false;
        this.toggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](null);
    }
    ToggleSwitchComponent.prototype.ngOnInit = function () {
    };
    ToggleSwitchComponent.prototype.toggleEventHandler = function (event) {
        this.toggleOn = !this.toggleOn;
        this.toggleEvent.emit({ type: 'toggle', isOn: this.toggleOn });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleSwitchComponent.prototype, "toggleEvent", void 0);
    ToggleSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-switch',
            template: __webpack_require__(/*! ./toggle-switch.component.html */ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.html"),
            styles: [__webpack_require__(/*! ./toggle-switch.component.scss */ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleSwitchComponent);
    return ToggleSwitchComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/export-service/excel.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/services/export-service/excel.service.ts ***!
  \*************************************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_modules_core_services_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/public/public-http/public-http.service */ "./src/app/modules/core/services/public/public-http/public-http.service.ts");




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService(publicHttp) {
        this.publicHttp = publicHttp;
    }
    // public exportAsExcelFile(){
    //   let request = {
    //     url: "http://localhost:9000/v1/data/read",
    //     httpOptions :{
    //         // "user-token": token['user-token'],
    //          "contentType": 'text/csv',
    //         "Access-Control-Allow-Origin" : true
    //        }
    //   }
    //   this.publicHttp.get(request.url, request.httpOptions).subscribe((response:any) => {
    //     let blob = new Blob([response], { type: 'data:text/csv' });
    //     let downloadUrl = URL.createObjectURL(blob);
    //     let a = document.createElement("a");
    //     a.href = downloadUrl;
    //     let d = new Date();
    //     a.download = "GraphData_"+d.getTime();+".csv";
    //     document.body.appendChild(a);
    //     a.click();
    //   },err =>{
    //     if(err.status === 200 && err.ok == false){
    //       let blob = new Blob(err.text, { type: 'data:text/csv' });
    //     let downloadUrl = URL.createObjectURL(blob);
    //     let a = document.createElement("a");
    //     a.href = downloadUrl;
    //     let d = new Date();
    //     a.download = "GraphData_"+d.getTime()+".xlsx";
    //     document.body.appendChild(a);
    //     a.click();
    //     }
    //     else {console.log("else",err)}
    //   })
    // }
    ExcelService.prototype.exportAsExcelFile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var settings = {
                url: "http://localhost:9000/v1/data/read",
                type: 'GET',
                headers: {},
                contentType: 'application/json; charset=utf-8',
            };
            jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"](settings)
                .done(function (response) {
                console.log('hello', response);
                var blob = new Blob([response], { type: 'data:application/vnd.ms-excel' });
                var downloadUrl = URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.href = downloadUrl;
                a.download = "Database.xlsx";
                document.body.appendChild(a);
                a.click();
            }).fail(function (error) {
                console.log('error recieved is ', error);
            });
        });
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_3__["PublicHttpService"]])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/search-service/search.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/services/search-service/search.service.ts ***!
  \**************************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.runQuery = function (request) {
        var url = '/api/search/neo4j';
        var token = 'DDCE5DBC3AA826EA295F963113B4F';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Database_Authorization: token
            })
        };
        return this.http.post(url, request, httpOptions);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/shared-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/modules/shared/shared-routing.module.ts");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/sidebar/sidebar.component */ "./src/app/modules/shared/component/sidebar/sidebar.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _component_global_loader_global_loader_global_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/global-loader/global-loader/global-loader.component */ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.ts");
/* harmony import */ var _component_toggle_switch_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/toggle-switch/toggle-switch/toggle-switch.component */ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.ts");
/* harmony import */ var _component_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/color-picker/color-picker.component */ "./src/app/modules/shared/component/color-picker/color-picker.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _component_global_loader_global_loader_global_loader_component__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderComponent"],
                _component_toggle_switch_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_9__["ToggleSwitchComponent"],
                _component_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_10__["ColorPickerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiSelectModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]
            ],
            exports: [
                _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _component_global_loader_global_loader_global_loader_component__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderComponent"],
                _component_toggle_switch_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_9__["ToggleSwitchComponent"],
                _component_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_10__["ColorPickerComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/shell/component/footer/footer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/footer/footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"subscribe\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h3 class=\"subscribe-title\">Subscribe Newsletter</h3>\r\n                <form role=\"form\" class=\"subscribe-form\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"email\" class=\"form-control\" id=\"mc-email\" placeholder=\"Enter E-mail...\">\r\n                        <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-main btn-lg\" type=\"submit\">Subscribe!</button>\r\n              </span>\r\n                    </div>\r\n                </form>\r\n                <div class=\"subscribe-result\"></div>\r\n                <p class=\"subscribe-or\">or</p>\r\n                <ul class=\"subscribe-social\">\r\n                    <li><a href=\"#\" class=\"social twitter\"><i class=\"fa fa-twitter\"></i> Follow</a></li>\r\n                    <li><a href=\"#\" class=\"social facebook\"><i class=\"fa fa-facebook\"></i> Like</a></li>\r\n                    <li><a href=\"#\" class=\"social rss\"><i class=\"fa fa-rss\"></i> RSS</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/modules/shell/component/footer/footer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/footer/footer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe {\n  padding: 120px 0;\n  background-image: url('footer.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-color: #000;\n  position: relative; }\n\n.subscribe .subscribe-title {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 50px;\n  font-size: 32px;\n  text-transform: uppercase;\n  font-weight: 300; }\n\n.subscribe .subscribe-or {\n  font-family: \"Oswald\";\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  padding: 30px 0;\n  margin: 0;\n  text-transform: uppercase; }\n\n.subscribe .subscribe-social {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center; }\n\n.subscribe .subscribe-social li {\n  padding: 0;\n  margin: 0;\n  margin-right: 5px;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.subscribe-form {\n  max-width: 500px;\n  margin: 0 auto; }\n\n.subscribe-form .form-control {\n  border-radius: 30px 2px 2px 30px !important;\n  padding: 14px 20px 14px 30px !important; }\n\na.social {\n  font-family: \"Oswald\";\n  letter-spacing: 1px;\n  display: inline-block;\n  background-color: #4ecdc4;\n  color: #fff;\n  padding: 8px 20px 8px 65px;\n  border-radius: 50px;\n  position: relative;\n  overflow: hidden;\n  transition: background-color 0.3s, text-indent 0.3s, padding 0.3s; }\n\na.social i {\n  display: block;\n  background-color: #31ada4;\n  width: 50px;\n  height: 42px;\n  line-height: 42px;\n  font-size: 17px;\n  border-radius: 50px 0 0 50px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  text-indent: 10px;\n  transition: text-indent 0.3s; }\n\na.social:hover {\n  background-color: #31ada4;\n  text-indent: -10px;\n  padding: 8px 30px 8px 65px; }\n\na.social:hover i {\n  text-indent: 29px; }\n\na.social.twitter {\n  background-color: #2daae1; }\n\na.social.twitter i {\n  background-color: #1a87b7; }\n\na.social.twitter:hover {\n  background-color: #1a87b7; }\n\na.social.facebook {\n  background-color: #3c5b9b; }\n\na.social.facebook i {\n  background-color: #2b416f; }\n\na.social.facebook:hover {\n  background-color: #2b416f; }\n\na.social.rss {\n  background-color: #fca73a; }\n\na.social.rss i {\n  background-color: #f58b04; }\n\na.social.rss:hover {\n  background-color: #f58b04; }\n\n.btn-main-o {\n  color: #4ecdc4;\n  border-color: #4ecdc4;\n  background-color: transparent; }\n\n.btn-main-o:hover {\n  color: #fff;\n  background-color: #4ecdc4;\n  border-color: #4ecdc4; }\n\n.btn-main {\n  color: #fff;\n  background-color: #4ecdc4;\n  border-color: #4ecdc4; }\n\n.btn-main:hover,\n.btn-main:focus,\n.btn-main:active {\n  background-color: #33b5ac;\n  border-color: #33b5ac;\n  color: #fff; }\n\n.btn-main:hover,\n.btn-main:focus,\n.btn-main:active {\n  background-color: #33b5ac;\n  border-color: #33b5ac;\n  color: #fff; }\n\n.btn.btn-lg {\n  padding: 10px 35px;\n  letter-spacing: 2px;\n  font-size: 21px; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n  height: 53px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2hlbGwvY29tcG9uZW50L2Zvb3Rlci9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcc2hlbGxcXGNvbXBvbmVudFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUNBQXVEO0VBQ3ZELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtHQUNyQixlQUFnQjtHQUNoQixPQUFRLEVBQUE7O0FBR1o7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLDJDQUEyQztFQUMzQyx1Q0FBdUMsRUFBQTs7QUFHM0M7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixpRUFBaUUsRUFBQTs7QUFHckU7RUFDSSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04saUJBQWlCO0VBRWpCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3pCOzs7RUFHSSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFHZjs7O0VBR0kseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7OztFQUdJLG1CQUFtQixFQUFBOztBQUd2Qjs7RUFFSSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3ZCOzs7RUFHSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6Im1vZHVsZXMvc2hlbGwvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic2NyaWJlIHtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2Zvb3Rlci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3Vic2NyaWJlLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJzY3JpYmUtb3Ige1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1YnNjcmliZS1zb2NpYWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1YnNjcmliZS1zb2NpYWwgbGkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgICp6b29tOiAxO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDJweCAycHggMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4IDE0cHggMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLnNvY2lhbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVjZGM0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweCA4cHggNjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRleHQtaW5kZW50IDAuM3MsIHBhZGRpbmcgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdGV4dC1pbmRlbnQgMC4zcywgcGFkZGluZyAwLjNzO1xyXG59XHJcblxyXG5hLnNvY2lhbCBpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYWRhNDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC4zcztcclxufVxyXG5cclxuYS5zb2NpYWw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYWRhNDtcclxuICAgIHRleHQtaW5kZW50OiAtMTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCA2NXB4O1xyXG59XHJcblxyXG5hLnNvY2lhbDpob3ZlciBpIHtcclxuICAgIHRleHQtaW5kZW50OiAyOXB4O1xyXG59XHJcblxyXG5hLnNvY2lhbC50d2l0dGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGFhZTE7XHJcbn1cclxuXHJcbmEuc29jaWFsLnR3aXR0ZXIgaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE4N2I3O1xyXG59XHJcblxyXG5hLnNvY2lhbC50d2l0dGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTg3Yjc7XHJcbn1cclxuXHJcbmEuc29jaWFsLmZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzViOWI7XHJcbn1cclxuXHJcbmEuc29jaWFsLmZhY2Vib29rIGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNDE2ZjtcclxufVxyXG5cclxuYS5zb2NpYWwuZmFjZWJvb2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNDE2ZjtcclxufVxyXG5cclxuYS5zb2NpYWwucnNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2E3M2E7XHJcbn1cclxuXHJcbmEuc29jaWFsLnJzcyBpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThiMDQ7XHJcbn1cclxuXHJcbmEuc29jaWFsLnJzczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4YjA0O1xyXG59XHJcblxyXG4uYnRuLW1haW4tbyB7XHJcbiAgICBjb2xvcjogIzRlY2RjNDtcclxuICAgIGJvcmRlci1jb2xvcjogIzRlY2RjNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLW1haW4tbzpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWNkYzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0ZWNkYzQ7XHJcbn1cclxuXHJcbi5idG4tbWFpbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWNkYzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0ZWNkYzQ7XHJcbn1cclxuXHJcbi5idG4tbWFpbjpob3ZlcixcclxuLmJ0bi1tYWluOmZvY3VzLFxyXG4uYnRuLW1haW46YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2I1YWM7XHJcbiAgICBib3JkZXItY29sb3I6ICMzM2I1YWM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1tYWluOmhvdmVyLFxyXG4uYnRuLW1haW46Zm9jdXMsXHJcbi5idG4tbWFpbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVhYztcclxuICAgIGJvcmRlci1jb2xvcjogIzMzYjVhYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1sZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbixcclxuLmlucHV0LWdyb3VwLWJ0bixcclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFkZG9uLFxyXG4uaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbixcclxuLmlucHV0LWdyb3VwLWJ0bixcclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGhlaWdodDogNTNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shell/component/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shell/component/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/shell/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/shell/component/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/shell/component/header/header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/header/header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"st-navbar\">\r\n    <nav class=\"navbar navbar-default navbar-fixed-top clearfix\" role=\"navigation\">\r\n\r\n        <a href=\"#\"><img src=\"../../../../../assets/societal-logo.png\" alt=\"\" class=\"img-responsive\"></a>\r\n\r\n\r\n\r\n        <ul class=\"nav navbar-right\">\r\n            <!-- <li class=\"active\"><a href=\"#home\">Home</a></li>\r\n                <li><a href=\"#about\">About</a></li>\r\n                <li><a href=\"#contact\">Contact Us</a></li> -->\r\n        </ul>\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse main-nav\" id=\"sept-main-nav\">\r\n\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/modules/shell/component/header/header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/header/header.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  background: #fff;\n  border-width: 0;\n  margin-bottom: 0 !important;\n  height: 102px;\n  transition: background-color 0.3s, height 0.3s;\n  border-bottom: 2px solid #898787; }\n\nimg {\n  height: 90px;\n  margin-left: 10%; }\n\n.st-navbar-mini .navbar-default {\n  background-color: rgba(40, 40, 40, 0.95);\n  height: 60px; }\n\n.st-navbar-mini .navbar-default .navbar-brand {\n  padding: 15px 15px; }\n\n.st-navbar-mini .navbar-default .navbar-brand img {\n  height: 30px; }\n\n.st-navbar-mini .navbar-default .navbar-nav > li.active > a,\n.st-navbar-mini .navbar-default .navbar-nav > li.active a:hover,\n.st-navbar-mini .navbar-default .navbar-nav > li.active a:focus,\n.st-navbar-mini .navbar-default .navbar-nav > li.active a:active {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.navbar-brand {\n  height: auto;\n  transition: padding 0.3s; }\n\n.navbar-brand img {\n  height: 80px;\n  width: 180px;\n  margin-left: -300px;\n  transition: height 0.3s; }\n\n.nav > li > a {\n  font-family: \"Oswald\";\n  font-size: 15px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: #565656;\n  transition: color 0.3s, background-color 0.3s, padding 0.3s; }\n\n.navbar-nav > li > a:hover,\n.navbar-nav > li > a:focus,\n.navbar-nav > li > a:active {\n  color: #4ecdc4;\n  outline-width: 0; }\n\n.navbar-nav > li.active > a,\n.navbar-nav > li.active a:hover,\n.navbar-nav > li.active a:focus,\n.navbar-nav > li.active a:active {\n  color: #4ecdc4; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #fff; }\n\n.navbar-default .navbar-nav > li.active > a,\n.navbar-default .navbar-nav > li.active a:hover,\n.navbar-default .navbar-nav > li.active a:focus,\n.navbar-default .navbar-nav > li.active a:active {\n  color: #4ecdc4;\n  background-color: rgba(0, 0, 0, 0); }\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #4ecdc4; }\n\n@media (min-width: 768px) {\n  .navbar-nav > li > a {\n    padding-top: 41px;\n    padding-bottom: 41px; }\n  .st-navbar-mini .navbar-default .navbar-nav > li > a {\n    padding-top: 20px;\n    padding-bottom: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2hlbGwvY29tcG9uZW50L2hlYWRlci9EOlxcTmV0d29ya19WaXN1YWxpemVyXFxuZXR3b3JrLXZpc3VhbGl6ZXJcXGNsaWVudFxcc3JjXFxhcHAvbW9kdWxlc1xcc2hlbGxcXGNvbXBvbmVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixhQUFhO0VBRWIsOENBQThDO0VBQzlDLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx3Q0FBd0M7RUFDeEMsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7Ozs7RUFJSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxZQUFZO0VBRVosd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFFbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUVkLDJEQUEyRCxFQUFBOztBQUcvRDs7O0VBR0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjs7OztFQUlJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7Ozs7RUFJSSxjQUFjO0VBQ2Qsa0NBQWtDLEVBQUE7O0FBR3RDOztFQUVJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQUV4QjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQSxFQUN2QiIsImZpbGUiOiJtb2R1bGVzL3NoZWxsL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGhlaWdodCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBoZWlnaHQgMC4zcztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODk4Nzg3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0MCwgNDAsIDAuOTUpO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uc3QtbmF2YmFyLW1pbmkgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG59XHJcblxyXG4uc3QtbmF2YmFyLW1pbmkgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmU+YSxcclxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTpob3ZlcixcclxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTpmb2N1cyxcclxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xyXG59XHJcblxyXG4ubmF2PmxpPmEge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU2NTY1NjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzLCBwYWRkaW5nIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHBhZGRpbmcgMC4zcztcclxufVxyXG5cclxuLm5hdmJhci1uYXY+bGk+YTpob3ZlcixcclxuLm5hdmJhci1uYXY+bGk+YTpmb2N1cyxcclxuLm5hdmJhci1uYXY+bGk+YTphY3RpdmUge1xyXG4gICAgY29sb3I6ICM0ZWNkYzQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdj5saS5hY3RpdmU+YSxcclxuLm5hdmJhci1uYXY+bGkuYWN0aXZlIGE6aG92ZXIsXHJcbi5uYXZiYXItbmF2PmxpLmFjdGl2ZSBhOmZvY3VzLFxyXG4ubmF2YmFyLW5hdj5saS5hY3RpdmUgYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICM0ZWNkYzQ7XHJcbn1cclxuXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGkuYWN0aXZlPmEsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTpob3ZlcixcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpLmFjdGl2ZSBhOmZvY3VzLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGkuYWN0aXZlIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNGVjZGM0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmE6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNGVjZGM0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5uYXZiYXItbmF2PmxpPmEge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MXB4O1xyXG4gICAgfVxyXG4gICAgLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shell/component/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shell/component/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/shell/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/shell/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shell/shell.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/shell/shell.module.ts ***!
  \***********************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/modules/shell/component/footer/footer.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/modules/shell/component/header/header.component.ts");





var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Network_Visualizer\network-visualizer\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map