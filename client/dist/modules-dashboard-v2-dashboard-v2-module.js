(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-v2-dashboard-v2-module"],{

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n    <div class=\"headerWrapper\">\n        <div class=\"row\">\n            <div class=\"col-3 logo left-logo\">\n                <img src=\"assets/societal-logo.png\" />\n            </div>\n            <div class=\"col-9 rightToolbar\">\n                <div class=\"dropdown\">\n                    <div class=\"profilePic\">\n                        <p>Hi Rishabh</p>\n                        <img src=\"./../../../../../assets/round_profile.jpg\" />\n                    </div>\n                    <div class=\"dropdown-content\">\n                        <a href=\"/profile\">PROFILE</a>\n                        <a href=\"/settings\">SETTINGS</a>\n                        <a href=\"/logout\">LOGOUT</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerWrapper {\n  height: 10vh;\n  background: #fff; }\n\n.container-fluid {\n  background: #fff; }\n\n.rightToolbar {\n  height: 100%;\n  float: right;\n  width: 30%; }\n\n.login-button {\n  border-radius: 20px;\n  font-size: 14px;\n  line-height: 2;\n  min-width: 90px;\n  float: right;\n  background: #5f5f5f;\n  border: none;\n  text-decoration: none; }\n\n.login-button:active:focus {\n  background: #5f5f5e; }\n\n.login-button:hover {\n  box-shadow: 2px 7px 18px 1px rgba(95, 95, 95, 0.76);\n  transition: 0.7s; }\n\n.dropdown {\n  position: relative;\n  float: right; }\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: 0.5s; }\n\n.dropdown-content:hover {\n  display: block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  padding: 0;\n  min-height: 120px;\n  min-width: 220px;\n  right: 1px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1; }\n\n.dropdown-content a {\n    padding: 20px 10px;\n    display: block;\n    text-decoration: none;\n    color: grey;\n    font-weight: 400; }\n\n.dropdown-content a:hover {\n    background-color: #5f5f5f;\n    color: white;\n    transition: 0.7s;\n    border-radius: 5px; }\n\n.profilePic {\n  margin-right: 30px;\n  border-radius: 50%;\n  display: -webkit-box; }\n\n.profilePic img {\n    cursor: pointer;\n    width: 70px;\n    height: 70px; }\n\n.profilePic img:hover {\n    width: 80px;\n    height: 80px;\n    transition: 0.5s; }\n\n.profilePic p {\n    margin-top: 30px;\n    margin-right: 20px;\n    cursor: pointer; }\n\n.profileDetails {\n  position: absolute;\n  background: whitesmoke;\n  color: black;\n  display: inline;\n  min-width: 100px; }\n\n.left-logo {\n  max-width: 20%; }\n\n.left-logo img {\n    max-height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtREFBbUQ7RUFDbkQsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFFUSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBRWhCLFVBQVU7RUFDViwrQ0FBK0M7RUFjL0Msa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUF4QmQ7SUFXUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBZnhCO0lBa0JRLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBOztBQU0xQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBSHhCO0lBS1EsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBUHBCO0lBVVEsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFaeEI7SUFlUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUdRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItaGVhZGVyL2Rhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyV3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5yaWdodFRvb2xiYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgbWluLXdpZHRoOiA5MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sb2dpbi1idXR0b246YWN0aXZlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVlO1xufVxuXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDE4cHggMXB4IHJnYmEoOTUsIDk1LCA5NSwgMC43Nik7XG4gICAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZHJvcGRvd246aG92ZXIge1xuICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxufVxuXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgLy8gdG9wOiA4NnB4O1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlUGljIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGltZyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gICAgaW1nOmhvdmVyIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnByb2ZpbGVEZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5sZWZ0LWxvZ28ge1xuICAgIG1heC13aWR0aDogMjAlO1xuICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwdmg7XG4gICAgfVxufSJdfQ== */"

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

module.exports = "<div class=\"wrapper sidebar-wrapper\">\n    <div class=\"sidebarBody p-0\">\n        <div class=\"sidebarBodyTitle\">\n            <p>Filter By Attributes</p>\n        </div>\n        <div class=\"sidebarElements\">\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Name');rotateObj.Name.rotate = !rotateObj.Name.rotate\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\"\n                    [ngClass]=\"{'rotate': rotateObj?.Name.rotate, 'no-rotate': !rotateObj?.Name.rotate}\">Names<span class=\"ele-count count-org\">{{180}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\" (click)=\"rotateObj.Name.rotate = !rotateObj.Name.rotate\" [ngClass]=\"{'rotate': rotateObj?.Name.rotate, 'no-rotate': !rotateObj?.Name.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample\">\n                    <sui-multi-select [(ngModel)]=\"selectedName\" [options]=\"nameOptions\" [maxSelected]=\"15\" (ngModelChange)=\"searchElement()\" #names>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Name...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of names.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Type');rotateObj.Type.rotate = !rotateObj.Type.rotate\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\"\n                    [ngClass]=\"{'rotate': rotateObj?.Type.rotate, 'no-rotate': !rotateObj?.Type.rotate}\">Type<span class=\"ele-count count-department\">{{typeOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\" (click)=\"rotateObj.Type.rotate = !rotateObj.Type.rotate\" [ngClass]=\"{'rotate': rotateObj?.Type.rotate, 'no-rotate': !rotateObj?.Type.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample2\">\n                    <sui-multi-select [(ngModel)]=\"selectedType\" [options]=\"typeOptions\" [maxSelected]=\"15\" #type>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Type...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of type.filteredOptions\" [value]=\"o\">\n\n                            </sui-select-option>\n\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Represent');rotateObj.Represent.rotate = !rotateObj.Represent.rotate\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample3\" [ngClass]=\"{'rotate': rotateObj?.Represent.rotate, 'no-rotate': !rotateObj?.Represent.rotate}\">Represent<span class=\"ele-count count-person\">{{representOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample3\" (click)=\"rotateObj.Represent.rotate = !rotateObj.Represent.rotate\" [ngClass]=\"{'rotate': rotateObj?.Represent.rotate, 'no-rotate': !rotateObj?.Represent.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample3\">\n                    <sui-multi-select [(ngModel)]=\"selectedRepresent\" [options]=\"representOptions\" [maxSelected]=\"15\" #represent>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Represent...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of represent.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Connection');rotateObj.Connection.rotate = !rotateObj.Connection.rotate\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample4\" [ngClass]=\"{'rotate': rotateObj?.Connection.rotate, 'no-rotate': !rotateObj?.Connection.rotate}\">Connection<span class=\"ele-count count-person\">{{connectionOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample4\" (click)=\"rotateObj.Connection.rotate = !rotateObj.Connection.rotate\" [ngClass]=\"{'rotate': rotateObj?.Connection.rotate, 'no-rotate': !rotateObj?.Connection.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample4\">\n                    <sui-multi-select [(ngModel)]=\"selectedConnection\" [options]=\"connectionOptions\" [maxSelected]=\"15\" #connection>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Connection...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of connection.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Status');rotateObj.Status.rotate = !rotateObj.Status.rotate\" data-toggle=\"collapse\" href=\"#collapseExample5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample5\"\n                    [ngClass]=\"{'rotate': rotateObj?.Status.rotate, 'no-rotate': !rotateObj?.Status.rotate}\">Status<span class=\"ele-count count-person\">{{statusOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample5\" (click)=\"rotateObj.Status.rotate = !rotateObj.Status.rotate\" [ngClass]=\"{'rotate': rotateObj?.Status.rotate, 'no-rotate': !rotateObj?.Status.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample5\">\n                    <sui-multi-select [(ngModel)]=\"selectedStatus\" [options]=\"statusOptions\" [maxSelected]=\"15\" #status>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Status...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of status.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Understanding');rotateObj.Understanding.rotate = !rotateObj.Understanding.rotate\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample6\" [ngClass]=\"{'rotate': rotateObj?.Understanding.rotate, 'no-rotate': !rotateObj?.Understanding.rotate}\">SP Thinking<span class=\"ele-count count-person\">{{understandingOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample6\" (click)=\"rotateObj.Understanding.rotate = !rotateObj.Understanding.rotate\" [ngClass]=\"{'rotate': rotateObj?.Understanding.rotate, 'no-rotate': !rotateObj?.Understanding.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample6\">\n                    <sui-multi-select [(ngModel)]=\"selectedUnderstanding\" [options]=\"understandingOptions\" [maxSelected]=\"15\" #understanding>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Understanding...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of understanding.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Url');rotateObj.Url.rotate = !rotateObj.Url.rotate\" data-toggle=\"collapse\" href=\"#collapseExample7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample7\"\n                    [ngClass]=\"{'rotate': rotateObj?.Url.rotate, 'no-rotate': !rotateObj?.Url.rotate}\">Url<span class=\"ele-count count-person\">{{urlOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample7\" (click)=\"rotateObj.Url.rotate = !rotateObj.Url.rotate\" [ngClass]=\"{'rotate': rotateObj?.Url.rotate, 'no-rotate': !rotateObj?.Url.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample7\">\n                    <sui-multi-select [(ngModel)]=\"selectedUrl\" [options]=\"urlOptions\" [maxSelected]=\"15\" #url>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Url...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of url.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn-container d-flex justify-content-around\">\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\n            </div>\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"searchGraph()\">Apply</button>\n            </div>\n\n        </div>\n        <div class=\"sidebarBodyTitle\">\n            <p>Filter By Relationships</p>\n        </div>\n        <div class=\"sidebarElements\">\n            <div class=\"item\">\n                <sui-multi-select [(ngModel)]=\"selectedRelation\" [options]=\"relationOptions\" [maxSelected]=\"5\" #relation>\n                    <div class=\"ui icon search input\">\n                        <i class=\"search icon\"></i>\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search Relationships...\">\n                    </div>\n                    <div class=\"scrolling menu\">\n                        <sui-select-option *ngFor=\"let o of relation.filteredOptions\" [value]=\"o\"></sui-select-option>\n                    </div>\n                </sui-multi-select>\n                <!-- <div class=\"rel-tabs-container\" *ngFor=\"let r of relationOptions\">\n                    <div class=\"rel-tab\" (click)=\"relationclickEvent(r)\" id={{r}}>\n                        <p>{{r}}</p>\n                    </div>\n                </div> -->\n                <div class=\"btn-container d-flex justify-content-around\">\n                    <div class=\"searchBtnWrapper btn-sidebar\">\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\n                    </div>\n                    <div class=\"searchBtnWrapper btn-sidebar\">\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"relationSearchGraph()\">Apply</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"searchBtnWrapper btn-sidebar\">\n            <button class=\"btn btn-default btn-md searchBtn\" (click)=\"noderelationSearchGraph()\">Apply Both</button>\n        </div> -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kanit&display=swap\");\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n::-webkit-scrollbar-thumb {\n  background-color: #5f5f5f; }\n.sidebar-wrapper {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 87vh;\n  background: #fff; }\n.logo {\n  text-align: center; }\n.logo img {\n  cursor: pointer; }\n.sidebarBodyTitle {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center; }\n.sidebarBodyTitle p {\n    padding: 0 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background: transparent;\n    color: #5f5f5f;\n    font-weight: bold;\n    border-radius: 5px;\n    transition: 1s;\n    text-align: left; }\n.sidebarElements {\n  width: 100%;\n  padding: 25px 0; }\n.item {\n  font-size: 16px;\n  width: 100%;\n  padding: 0; }\n.item span {\n    margin-right: 20px; }\n.hoverable:hover {\n  font-size: 18px;\n  transition: 0.5s; }\n.item,\n.item span {\n  min-height: 50px;\n  line-height: 2.7; }\n.item-text {\n  cursor: pointer;\n  text-decoration: none;\n  color: #000; }\n.fa-chevron-right {\n  float: right;\n  cursor: pointer; }\n.rotate {\n  transform: rotate(90deg);\n  transition: .8s; }\n.no-rotate {\n  transform: rotate(0deg);\n  transition: .8s; }\n.click-pink {\n  color: pink; }\n.hide {\n  display: none; }\n.show {\n  display: block; }\n.ui.teal.left.pointing.label {\n  background: #5f5f5f !important; }\n.searchBtnWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  bottom: 0;\n  width: 100%; }\n.searchBtnWrapper button {\n    background: #e4e4e4;\n    color: #000;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n.searchBtnWrapper button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n.btn-sidebar {\n  display: inline; }\n.btn-container {\n  margin-bottom: 25px; }\n.rel-tabs-container {\n  display: inline-block; }\n.rel-tab p {\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #F5F5F5;\n  color: #30333a;\n  margin: 4px;\n  padding: 3px 7px;\n  border-radius: 3px; }\n.ele-count {\n  border-radius: 50%;\n  padding: 8px;\n  margin-left: 10px;\n  text-align: center;\n  display: inline; }\n.wrapper hr {\n  margin-bottom: 2em;\n  margin-top: 0.15em; }\n.rel-tabs-container .selected {\n  box-shadow: -4px 4px 17px -8px rgba(0, 0, 0, 0.75); }\n.count-org {\n  background-color: #F5F5F5; }\n.count-person {\n  background-color: #F5F5F5; }\n.count-department {\n  background-color: #F5F5F5; }\nspan.ele-count.count-org {\n  padding: 9px 11px 9px 11px; }\n.c_ff4444 {\n  background-color: '#ff4444'; }\n.c_ffbb33 {\n  background-color: '#ffbb33'; }\n.c_00C851 {\n  background-color: '#00C851'; }\n.c_33b5e5 {\n  background-color: '#33b5e5'; }\n.c_CC0000 {\n  background-color: '#CC0000'; }\n.c_FF8800 {\n  background-color: '#FF8800'; }\n.c_007E33 {\n  background-color: '#007E33'; }\n.c_0099CC {\n  background-color: '#0099CC'; }\n.c_9933CC {\n  background-color: '#9933CC'; }\n.c_0d47a1 {\n  background-color: '#0d47a1'; }\n.c_2BBBAD {\n  background-color: '#2BBBAD'; }\n.c_c51162 {\n  background-color: '#c51162'; }\n@media screen and (max-width: 1100px) {\n  .sidebar-wrapper {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUFZO0FBQ1o7RUFFSSw0Q0FBNEM7RUFDNUMseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUdQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGtCQUFrQixFQUFBO0FBSXRCO0VBR1EsZUFBZSxFQUFBO0FBSXZCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBRWpCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR25CO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVLEVBQUE7QUFIZDtJQU1RLGtCQUFrQixFQUFBO0FBSTFCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR3BCOztFQUVJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxZQUFZO0VBQ1osZUFBZSxFQUFBO0FBR25CO0VBQ0ksd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTtBQUduQjtFQUNJLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7QUFHbkI7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLDhCQUE4QixFQUFBO0FBR2xDO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVyxFQUFBO0FBUGY7SUFVUSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwrQ0FBK0MsRUFBQTtBQWJ2RDtJQWdCUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUd0QjtFQUVJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFHSSxrREFBa0QsRUFBQTtBQUd0RDtFQUNJLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLDBCQUEwQixFQUFBO0FBRzlCO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUdBO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLXNpZGViYXIvZGFzaGJvYXJkLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthbml0JmRpc3BsYXk9c3dhcCcpO1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEzJTtcbiAgICBsZWZ0OiAwO1xuICAgIC8vIHdpZHRoOiAyMyU7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDg3dmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28ge1xuICAgIGltZyB7XG4gICAgICAgIC8vIHdpZHRoOiA3MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5zaWRlYmFyQm9keVRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHAge1xuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMnB4IDdweCAxOHB4IDFweCByZ2JhKDk1LCA5NSwgOTUsIDAuNzYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuLnNpZGViYXJFbGVtZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjVweCAwO1xufVxuXG4uaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLml0ZW0sXG4uaXRlbSBzcGFuIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjc7XG59XG5cbi5pdGVtLXRleHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm90YXRlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogLjhzO1xufVxuXG4ubm8tcm90YXRlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAuOHM7XG59XG5cbi5jbGljay1waW5rIHtcbiAgICBjb2xvcjogcGluaztcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVpLnRlYWwubGVmdC5wb2ludGluZy5sYWJlbCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoQnRuV3JhcHBlciB7XG4gICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxufVxuXG4uYnRuLXNpZGViYXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5yZWwtdGFicy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlbC10YWIgcCB7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGNvbG9yOiByZ2IoNDgsIDUxLCA1OCk7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5lbGUtY291bnQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ud3JhcHBlciBociB7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMTVlbTtcbn1cblxuLnJlbC10YWJzLWNvbnRhaW5lciAuc2VsZWN0ZWQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmNvdW50LW9yZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNvdW50LXBlcnNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNvdW50LWRlcGFydG1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbnNwYW4uZWxlLWNvdW50LmNvdW50LW9yZyB7XG4gICAgcGFkZGluZzogOXB4IDExcHggOXB4IDExcHg7XG59XG5cbi5jX2ZmNDQ0NCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZjQ0NDQnXG59XG5cbi5jX2ZmYmIzMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZmJiMzMnXG59XG5cbi5jXzAwQzg1MSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMEM4NTEnXG59XG5cbi5jXzMzYjVlNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMzM2I1ZTUnXG59XG5cbi5jX0NDMDAwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNDQzAwMDAnXG59XG5cbi5jX0ZGODgwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNGRjg4MDAnXG59XG5cbi5jXzAwN0UzMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMDdFMzMnXG59XG5cbi5jXzAwOTlDQyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMDk5Q0MnXG59XG5cbi5jXzk5MzNDQyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyM5OTMzQ0MnXG59XG5cbi5jXzBkNDdhMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwZDQ3YTEnXG59XG5cbi5jXzJCQkJBRCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMyQkJCQUQnXG59XG5cbi5jX2M1MTE2MiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNjNTExNjInXG59XG5cbi8vIGFuIGF0dGVtcHQgdG8gbWFrZSBpdCBhIGJpdCByZXNwb25zaXZlXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn0iXX0= */"

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




var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent(graphDataService, sharedGraphData) {
        this.graphDataService = graphDataService;
        this.sharedGraphData = sharedGraphData;
        this.rotateObj = {
            Name: {
                rotate: false,
                color: '#D2E5FE'
            },
            Type: {
                rotate: false,
                color: '#D2E5FE'
            },
            Represent: {
                rotate: false,
                color: '#D2E5FE'
            },
            Connection: {
                rotate: false,
                color: '#D2E5FE'
            },
            Status: {
                rotate: false,
                color: '#D2E5FE'
            },
            Understanding: {
                rotate: false,
                color: '#D2E5FE'
            },
            Url: {
                rotate: false,
                color: '#D2E5FE'
            }
        };
        this.defaultColor = {
            "Academia": 'c_ff4444',
            "Consulting": 'c_ffbb33',
            "Government": 'c_00C851',
            "Impact Investor": 'c_33b5e5',
            "International Agency": 'c_CC0000',
            "Media": 'c_FF8800',
            "NGO/CBO": 'c_007E33',
            "People": 'c_0099CC',
            "Philanthropy": 'c_9933CC',
            "Platform": 'c_0d47a1',
            "Private Sector": 'c_2BBBAD',
            "Research Institute": 'c_c51162'
        };
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nameOptions = [];
        this.relationOptions = [];
        this.typeOptions = [];
        this.representOptions = [];
        this.connectionOptions = [];
        this.statusOptions = [];
        this.understandingOptions = [];
        this.urlOptions = [];
        this.selectedRelationship = [];
        this.selectedName = [];
        this.selectedRelation = [];
        this.selectedType = [];
        this.selectedRepresent = [];
        this.selectedConnection = [];
        this.selectedStatus = [];
        this.selectedUnderstanding = [];
        this.selectedUrl = [];
        this.selectedGraph = [];
        this.graphData = {};
        this.count = 1;
        this.relstatus = false;
        this.edgesNewObject = [];
        this.nodesNewObject = [];
        this.graphInitData = [];
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.getGraph();
    };
    DashboardSidebarComponent.prototype.networkElementClick = function (element) {
        if (element) {
            this.eventClicked.emit(element);
        }
    };
    DashboardSidebarComponent.prototype.getGraph = function () {
        var _this = this;
        this.graphDataService.getNodeLabels().subscribe(function (data) {
            _this.graphInitData.push(data);
            var temname = [];
            var temstatus = [];
            var temrepresent = [];
            var temconnection = [];
            var temtype = [];
            var temunder = [];
            var temrelation = [];
            if (data) {
                data['Name'].filter(function (node) {
                    temname.push(node);
                });
                data['Type'].filter(function (node) {
                    // let x ={
                    //   name:node,
                    //   color:this.defaultColor[node]
                    // }
                    temtype.push(node);
                });
                data['Status'].filter(function (node) {
                    temstatus.push(node);
                });
                data['Represent'].filter(function (node) {
                    temrepresent.push(node);
                });
                data['Connection'].filter(function (node) {
                    temconnection.push(node);
                });
                data['Understanding of SP Thinking'].filter(function (node) {
                    temunder.push(node);
                });
                data['Relationships'].filter(function (node) {
                    temrelation.push(node);
                });
            }
            _this.nameOptions = temname;
            _this.typeOptions = temtype;
            _this.representOptions = temrepresent;
            _this.connectionOptions = temconnection;
            _this.understandingOptions = temunder;
            _this.statusOptions = temstatus;
            _this.relationOptions = temrelation;
        });
    };
    DashboardSidebarComponent.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    DashboardSidebarComponent.prototype.searchGraph = function () {
        if (this.selectedName.length > 0 || this.selectedType.length > 0 || this.selectedConnection.length > 0 || this.selectedRepresent.length > 0 || this.selectedStatus.length > 0 || this.selectedUnderstanding.length > 0) {
            this.selectedGraph = [];
            if (this.selectedName.length > 0) {
                this.selectedGraph.push({ type: "Name", value: this.selectedName });
            }
            if (this.selectedType.length > 0) {
                this.selectedGraph.push({ type: "Type", value: this.selectedType });
            }
            if (this.selectedConnection.length > 0) {
                this.selectedGraph.push({ type: "Connection", value: this.selectedConnection });
            }
            if (this.selectedRepresent.length > 0) {
                this.selectedGraph.push({ type: "Represent", value: this.selectedRepresent });
            }
            if (this.selectedStatus.length > 0) {
                this.selectedGraph.push({ type: "Status", value: this.selectedStatus });
            }
            if (this.selectedUnderstanding.length > 0) {
                this.selectedGraph.push({ type: "Understanding of SP Thinking", value: this.selectedUnderstanding });
            }
            if (this.selectedUrl.length > 0) {
                this.selectedGraph.push({ type: "Url", value: this.selectedUrl });
            }
            var requestBody = { nodes: this.selectedGraph };
            this.sharedGraphData.setGraphData(requestBody);
            if (this.count === 1) {
                this.eventClicked.emit('search' + this.count);
                this.count = 2;
            }
            else {
                this.eventClicked.emit('search' + this.count);
                this.count = 1;
            }
        }
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
    DashboardSidebarComponent.prototype.searchElement = function () {
        var temdep = [];
        var temper = [];
        //   if(this.graphInitData.length>0){
        //   if(this.selectedName.length>0){
        //     this.selectedName.filter(name=>{
        //       let selectedNodeId=this.getSelectedNodeId(name);
        //       console.log('id',selectedNodeId);
        //       let temNewRelatedNodeId = this.getRelatedNodeIdArrayFromEdges(selectedNodeId);
        //       console.log('new',temNewRelatedNodeId);
        //       if(temNewRelatedNodeId){
        //         temNewRelatedNodeId.filter(id=>{
        //           this.graphInitData[0]['seperateNodes'].filter(node=>{
        //           if(id === node.id && node.type[0] === 'Department'){
        //             temdep.push(node.label);
        //           }else if(id === node.id && node.type[0] === 'Person'){
        //             temper.push(node.label);
        //             }
        //           });
        //         });
        //       }         
        //      });
        //      temdep = temdep.filter(this.onlyUnique);
        //      temper = temper.filter(this.onlyUnique);
        //     this.typeOptions = temdep;
        //     this.representOptions = temper;
        //   }
        // }
    };
    DashboardSidebarComponent.prototype.resetGraph = function () {
        this.getGraph();
        this.selectedName = [];
        this.selectedType = [];
        this.selectedRepresent = [];
        this.selectedStatus = [];
        this.selectedConnection = [];
        this.selectedUnderstanding = [];
        this.selectedUrl = [];
        this.selectedRelation = [];
        if (this.preSelectedRel) {
            var element = document.getElementById(this.preSelectedRel);
            element.classList.remove("selected");
        }
        this.eventClicked.emit('reset');
    };
    DashboardSidebarComponent.prototype.relationclickEvent = function (selectedRelation) {
        if (this.preSelectedRel) {
            var element = document.getElementById(this.preSelectedRel);
            element.classList.remove("selected");
        }
        var element = document.getElementById(selectedRelation);
        element.classList.add("selected");
        this.selectedRelationship = [];
        this.relstatus = !this.relstatus;
        this.selectedRelationship.push({ type: selectedRelation });
        var requestBody = { nodes: [], edges: this.selectedRelationship };
        console.log("re", requestBody);
        this.sharedGraphData.setGraphData(requestBody);
        if (this.count === 1) {
            this.eventClicked.emit('search' + this.count);
            this.count = 2;
        }
        else {
            this.eventClicked.emit('search' + this.count);
            this.count = 1;
        }
        this.preSelectedRel = selectedRelation;
    };
    DashboardSidebarComponent.prototype.relationSearchGraph = function () {
        var _this = this;
        if (this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
            var requestBody = { nodes: [], edges: this.selectedRelationship };
            this.sharedGraphData.setGraphData(requestBody);
            if (this.count === 1) {
                this.eventClicked.emit('search' + this.count);
                this.count = 2;
            }
            else {
                this.eventClicked.emit('search' + this.count);
                this.count = 1;
            }
        }
    };
    DashboardSidebarComponent.prototype.noderelationSearchGraph = function () {
        var _this = this;
        if (this.selectedName.length > 0 || this.selectedType.length > 0 || this.selectedConnection.length > 0 || this.selectedRepresent.length > 0 || this.selectedStatus.length > 0 || this.selectedUnderstanding.length > 0 && this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
        }
        this.selectedGraph = [];
        this.selectedGraph.push({ type: "Name", value: this.selectedName });
        this.selectedGraph.push({ type: "Type", value: this.selectedType });
        this.selectedGraph.push({ type: "Connection", value: this.selectedConnection });
        this.selectedGraph.push({ type: "Represent", value: this.selectedRepresent });
        this.selectedGraph.push({ type: "Status", value: this.selectedStatus });
        this.selectedGraph.push({ type: "Thinking", value: this.selectedUnderstanding });
        this.selectedGraph.push({ type: "Url", value: this.selectedUrl });
        var requestBody = { nodes: this.selectedGraph, edges: this.selectedRelationship };
        this.sharedGraphData.setGraphData(requestBody);
        if (this.count === 1) {
            this.eventClicked.emit('search' + this.count);
            this.count = 2;
        }
        else {
            this.eventClicked.emit('search' + this.count);
            this.count = 1;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "eventClicked", void 0);
    DashboardSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-global-loader *ngIf=\"loader\"></app-global-loader>\n<div class=\"selected-count\" *ngIf=\"!loader\">Filtered result {{selectedCount}}</div>\n<div class=\"graph-container\" id=\"graphViewer\">\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 81vh;\n  width: 80%;\n  float: right; }\n\n.selected-count {\n  background: #F5F5F5;\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #30333a;\n  border-radius: 3px;\n  padding: 1em;\n  width: 80%;\n  float: right; }\n\n@media screen and (max-width: 1100px) {\n  .graph-container,\n  .selected-count {\n    width: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0QsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0k7O0lBRUksVUFBVSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgaGVpZ2h0OiA4MXZoO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2VsZWN0ZWQtY291bnQge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzMwMzMzYTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5ncmFwaC1jb250YWluZXIsXG4gICAgLnNlbGVjdGVkLWNvdW50IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59Il19 */"

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






var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService, sharedGraphService) {
        this.graphService = graphService;
        this.sharedGraphService = sharedGraphService;
        this.graphData = {};
        this.loader = true;
        this.colorConfig = {
            defaultColor: {
                "Academia": '#ff4444',
                "Consulting": '#ffbb33',
                "Government": '#00C851',
                "Impact Investor": '#33b5e5',
                "International Agency": '#CC0000',
                "Media": '#FF8800',
                "NGO/CBO": '#007E33',
                "People": '#0099CC',
                "Philanthropy": '#9933CC',
                "Platform": '#0d47a1',
                "Private Sector": '#2BBBAD',
                "Research Institute": '#c51162'
            },
            selectedColor: {
                "Academia": '#ff4444',
                "Consulting": '#ffbb33',
                "Government": '#00C851',
                "Impact Investor": '#33b5e5',
                "International Agency": '#CC0000',
                "Media": '#FF8800',
                "NGO/CBO": '#007E33',
                "People": '#0099CC',
                "Philanthropy": '#9933CC',
                "Platform": '#0d47a1',
                "Private Sector": '#2BBBAD',
                "Research Institute": '#c51162'
            }
        };
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
        this.loader = true;
        this.displayInitialGraph();
    };
    GraphVisualizerComponent.prototype.displayInitialGraph = function () {
        var _this = this;
        this.graphService.getInitialDataV2().subscribe(function (result) {
            console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                // add colors to nodes
                result['seperateNodes'] = _this.addColors(result['seperateNodes']);
                _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateNodes']);
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateEdges']);
            }
            console.log('graphData :', _this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.loader = false;
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
    };
    GraphVisualizerComponent.prototype.ngOnChanges = function (changes) {
        console.log('graph', this.event);
        this.changeNodeColor();
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        if (this.event == 'search1' || this.event == 'search2') {
            this.loader = true;
            this.showGraphData();
        }
        else if (this.event === 'reset') {
            this.displayInitialGraph();
        }
        else {
            var previousData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.graphData);
            // tslint:disable-next-line: no-string-literal
            if (!!this.graphData['nodes']) {
                var temgraph = this.graphData['nodes'].map(function (node) {
                    if (_this.event == node.type[0]) {
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
                console.log(this.graphData);
            }
        }
    };
    GraphVisualizerComponent.prototype.reinitializeGraph = function () {
        var container = document.getElementById('graphViewer');
        this.network.setData(this.graphData);
    };
    GraphVisualizerComponent.prototype.showGraphData = function () {
        var _this = this;
        this.loader = true;
        var requestBody = this.sharedGraphService.getGraphData();
        this.graphService.getSearchDataV2(requestBody).subscribe(function (result) {
            // console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                result['seperateNodes'] = _this.addColors(result['seperateNodes']);
                _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateNodes']);
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateEdges']);
            }
            // console.log('graphData :', this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
            _this.loader = false;
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
    };
    GraphVisualizerComponent.prototype.addColors = function (nodeObj) {
        var _this = this;
        // console.log(nodeObj);
        nodeObj.forEach(function (node) {
            if (node.hasOwnProperty('type') && node.type.length > 0) {
                node['color'] = _this.colorConfig.defaultColor[node.type[0]];
            }
        });
        // console.log(nodeObj);
        return nodeObj;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    GraphVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-visualizer',
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"]])
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

module.exports = "<app-dashboard-header></app-dashboard-header>\n<app-dashboard-sidebar (eventClicked)=\"childEventClicked($event)\"></app-dashboard-sidebar>\n<app-graph-visualizer [event]=\"clickedEvent\"></app-graph-visualizer>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvbWFpbi12Mi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

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
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
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











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"], _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiSelectModule"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardV2RoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-v2-dashboard-v2-module.js.map