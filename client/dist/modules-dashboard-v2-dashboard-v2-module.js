(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-v2-dashboard-v2-module"],{

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

module.exports = ".wrapper {\n  width: 250px;\n  background-color: transparent;\n  position: absolute;\n  right: 0;\n  padding-right: 20px;\n  padding-top: 20px;\n  z-index: 9900; }\n\n.panel {\n  background-color: white;\n  border-radius: 10px;\n  width: 150px;\n  margin: auto;\n  margin-right: 0; }\n\n.panelTitle, .panelbody {\n  padding: 10px 5px; }\n\n.panelTitle {\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center; }\n\n.panelList {\n  padding-left: 14px; }\n\n.item {\n  word-wrap: break;\n  line-height: 2; }\n\n.circle {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 8px; }\n\n.dropDown {\n  cursor: pointer; }\n\n.dropDown i {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    padding-bottom: 8px; }\n\n.display-ok {\n  display: block; }\n\n.no-display {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC9EOlxcbmVvNGotY29tbXVuaXR5LTMuMy45XFxkZXZlbG9wbWVudF9wcm9qZWN0c1xcbmVvNGpEYXRhRHJpdmVyXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGRhc2hib2FyZC12MlxcY29tcG9uZW50c1xcY29sb3ItcGFuZWxcXGNvbG9yLXBhbmVsXFxjb2xvci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQW1CO0VBQ25CLFFBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUJBQWtCO0VBQ2xCLGFBQWMsRUFBQTs7QUFHbEI7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQWE7RUFDYixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixnQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFvQixFQUFBOztBQUk1QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgd2lkdGggOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0IDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcCA6IDIwcHg7XHJcbiAgICB6LWluZGV4IDogOTkwMDtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoIDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wYW5lbFRpdGxlLCAucGFuZWxib2R5IHtcclxuICAgIHBhZGRpbmcgOiAxMHB4IDVweDtcclxufVxyXG5cclxuLnBhbmVsVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQgOiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYW5lbExpc3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0IDogMTRweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgd29yZC13cmFwOmJyZWFrIDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxud2lkdGg6IDE2cHg7XHJcbmhlaWdodDogMTZweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbm1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZHJvcERvd24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbSA6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRpc3BsYXktb2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uby1kaXNwbGF5IHtcclxuICAgIGRpc3BsYXkgOiBub25lO1xyXG59Il19 */"

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



var ColorPanelComponent = /** @class */ (function () {
    function ColorPanelComponent(colorSrvc) {
        this.colorSrvc = colorSrvc;
        this.colorObject = undefined;
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
            _this.objectKeys = Object.keys(_this.colorObject);
            _this.processColors(_this.objectKeys, _this.colorObject);
            // console.log('processed color data is ', this.colorData);
        });
    };
    ColorPanelComponent.prototype.processColors = function (keyArray, colorObj) {
        var _this = this;
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
    ColorPanelComponent.prototype.toggleDropdown = function () {
        this.showDropDown = !this.showDropDown;
    };
    ColorPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-panel',
            template: __webpack_require__(/*! ./color-panel.component.html */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html"),
            styles: [__webpack_require__(/*! ./color-panel.component.scss */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__["ColorServiceService"]])
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

module.exports = "<div class=\"container-fluid\">\r\n<!--<a href=\"#\" class=\"deleteLink\"><span class=\"fas fa-plus-circle\">&nbsp;Delete Node</span></a> -->\r\n<div class=\"btn-group nodes\">\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      Node\r\n    </button>\r\n    <div class=\"dropdown-menu\">\r\n      <a class=\"dropdown-item create\" (click)=\"createNode()\" data-toggle=\"modal\" data-target=\"#createNodeModal\"><span class=\"fas fa-plus-circle\"></span>Create Node</a>\r\n      <a class=\"dropdown-item edit\" (click)=\"editNode()\"><span class=\"far fa-edit\"></span>Edit Node</a>\r\n      <a class=\"dropdown-item delete\" (click)=\"deleteNode()\"><span class=\"far fa-trash-alt\"></span>Delete Node</a>\r\n    </div>\r\n</div>\r\n<div class=\"btn-group relationships\">\r\n    <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      Relationships\r\n    </button>\r\n    <div class=\"dropdown-menu\">\r\n      <a class=\"dropdown-item create\" (click)=\"createRelation()\"><span class=\"fas fa-plus-circle\"></span>Create Relationship</a>\r\n      <a class=\"dropdown-item edit\" (click)=\"editRelation()\"><span class=\"far fa-edit\"></span>Edit Relationship</a>\r\n      <a class=\"dropdown-item delete\" (click)=\"deleteRelation()\"><span class=\"far fa-trash-alt\"></span>Delete Relationship</a>\r\n    </div>\r\n</div>\r\n</div>\r\n<!--modal template to show when node is to be created-->\r\n<div class=\"modal fade\" id=\"createNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Node</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <!-- <div class=\"modalItem\">\r\n            <p class=\"sectionName\">\r\n                Name\r\n            </p>\r\n            <span class=\"inputSpan\">\r\n              <input type=\"text\" id=\"nameText\">\r\n            </span>\r\n          </div> -->\r\n          <div class=\"modalItem\">\r\n            <p class=\"sectionName\">\r\n              Type\r\n            </p>\r\n           <span class=\"inputSpan\">\r\n              <sui-multi-select [(ngModel)]=\"selectedType\" (ngModelChange)=\"updateProperties($event)\" [options]=\"typeOptions\" [maxSelected]=\"1\" #type>\r\n                  <div class=\"ui icon search input\">\r\n                      <i class=\"search icon\"></i>\r\n                      <input suiSelectSearch type=\"text\" placeholder=\"Search Type...\">\r\n                  </div>\r\n                  <div class=\"scrolling menu\">\r\n                      <sui-select-option *ngFor=\"let o of type.filteredOptions\" [value]=\"o\">\r\n\r\n                      </sui-select-option>\r\n\r\n                  </div>\r\n              </sui-multi-select>\r\n            </span>\r\n          </div>\r\n          <div class=\"modalItem\" *ngIf=\"labelProperties.length > 0\">\r\n            <h5 class=\"propertyLabel\">\r\n                Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\r\n            </h5>\r\n                <ng-container *ngFor=\"let data of labelProperties\">\r\n                    <div class=\"modalItem\">\r\n                        <p class=\"sectionName\">{{data}}</p>\r\n                        <span class=\"inputSpan\"><input type=\"text\" id=\"id_{{data}}\"></span>\r\n                    </div>\r\n              </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal()\">Create</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--modal node create end-->"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .btn-group {\n  margin-right: 20px; }\n\n.btn-group:active {\n  outline: none;\n  text-decoration: none; }\n\n.createLink, .editLink, .deleteLink {\n  text-decoration: none;\n  font-size: 12px; }\n\n.dropdown-menu .dropdown-item {\n  cursor: pointer; }\n\n.dropdown-menu .dropdown-item span {\n    margin-right: 8px; }\n\n.dropdown-menu .dropdown-item:active {\n  background-color: white; }\n\n.dropdown-menu .create:hover {\n  color: blue; }\n\n.dropdown-menu .edit:hover {\n  color: green; }\n\n.dropdown-menu .delete:hover {\n  color: red; }\n\n.modal-header {\n  background: #5f5f5f;\n  color: white;\n  border-color: #5f5f5f; }\n\n.modal-header button.close {\n    color: white; }\n\n.modalItem {\n  padding: 10px; }\n\n.modalItem .fa-info-circle {\n    font-size: 14px;\n    cursor: pointer; }\n\n.sectionName {\n  display: inline-block;\n  margin: 0;\n  max-width: 50%; }\n\n.inputSpan {\n  position: absolute;\n  left: 50%; }\n\n.inputSpan input {\n    border: 1px solid #acacac;\n    outline: none; }\n\n.propertyLabel {\n  padding-top: 13px;\n  padding-bottom: 13px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jcmVhdGUtbm9kZXMvRDpcXG5lbzRqLWNvbW11bml0eS0zLjMuOVxcZGV2ZWxvcG1lbnRfcHJvamVjdHNcXG5lbzRqRGF0YURyaXZlclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmQtdjJcXGNvbXBvbmVudHNcXGNyZWF0ZS1ub2Rlc1xcY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYztFQUNkLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR25CO0VBRVEsZUFBZSxFQUFBOztBQUZ2QjtJQUlZLGlCQUFrQixFQUFBOztBQUo5QjtFQVFRLHVCQUF1QixFQUFBOztBQVIvQjtFQVdRLFdBQVksRUFBQTs7QUFYcEI7RUFjUSxZQUFhLEVBQUE7O0FBZHJCO0VBaUJRLFVBQVcsRUFBQTs7QUFJbkI7RUFDSSxtQkFBb0I7RUFDcEIsWUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUh6QjtJQUtRLFlBQWEsRUFBQTs7QUFHckI7RUFDSSxhQUFjLEVBQUE7O0FBRGxCO0lBR1EsZUFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQUl2QjtFQUNJLHFCQUFzQjtFQUN0QixTQUFVO0VBQ1YsY0FBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFtQjtFQUNuQixTQUFVLEVBQUE7O0FBRmQ7SUFJUSx5QkFBMEI7SUFDMUIsYUFBYyxFQUFBOztBQUl0QjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2NyZWF0ZS1ub2Rlcy9jcmVhdGUtbm9kZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIC5idG4tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0IDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cDphY3RpdmUge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGVMaW5rLCAuZWRpdExpbmssIC5kZWxldGVMaW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlOmhvdmVyIHtcclxuICAgICAgICBjb2xvciA6IGJsdWU7XHJcbiAgICB9XHJcbiAgICAuZWRpdDpob3ZlciB7XHJcbiAgICAgICAgY29sb3IgOiBncmVlbjtcclxuICAgIH1cclxuICAgIC5kZWxldGU6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQgOiAjNWY1ZjVmO1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzVmNWY1ZjtcclxuICAgIGJ1dHRvbi5jbG9zZSB7XHJcbiAgICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4ubW9kYWxJdGVtIHtcclxuICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gICAgLmZhLWluZm8tY2lyY2xlIHtcclxuICAgICAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb25OYW1lIHtcclxuICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgbWF4LXdpZHRoIDogNTAlO1xyXG59XHJcblxyXG4uaW5wdXRTcGFuIHtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBsZWZ0IDogNTAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjYWNhY2FjO1xyXG4gICAgICAgIG91dGxpbmUgOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvcGVydHlMYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

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




var CreateNodesComponent = /** @class */ (function () {
    function CreateNodesComponent(SharedSrvc) {
        this.SharedSrvc = SharedSrvc;
        this.nodeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edgeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypes = [];
        this.nodeTypes2 = [];
        this.typeOptions = [];
        this.toolTipText = '';
        this.labelProperties = [];
    }
    CreateNodesComponent.prototype.ngOnInit = function () {
        this.toolTipText = 'The Properties section can be left blank to set a default Node';
        $('.toolTipText').tooltip();
    };
    CreateNodesComponent.prototype.createNode = function () {
        var _this = this;
        var queryObj = {
            raw: true,
            query: "MATCH (p) WITH DISTINCT keys(p) AS keys,p\n       with DISTINCT labels(p) as label,keys \n       UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label\n       RETURN collect(allfields),label"
        };
        this.SharedSrvc.runQuery(queryObj).subscribe(function (data) {
            console.log('recieved label data from service ', data);
            _this.processedData = _this.processData(data);
            // extract types from the array
            _this.extractLabels(_this.processedData);
            _this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](_this.nodeTypes2);
        }, function (err) {
            console.log('An error occured while reading label data from the database');
        });
    };
    CreateNodesComponent.prototype.editNode = function () {
        this.nodeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.deleteNode = function () {
        this.nodeBtnEvent.emit({ type: 'click', action: 'delete' });
    };
    CreateNodesComponent.prototype.createRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'create' });
    };
    CreateNodesComponent.prototype.editRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.deleteRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'delete' });
    };
    CreateNodesComponent.prototype.ngOnChanges = function (changes) {
        // console.log('Types recieved in create Nodes ', this.nodeTypes);
        // this.typeOptions = this.nodeTypes2;
    };
    CreateNodesComponent.prototype.submitModal = function () {
        var nodeData = {
            id: null,
            properties: {},
            type: null
        };
        nodeData.type = this.selectedType;
        $('#createNodeModal :text').each(function () {
            var key = $(this).attr('id') || null;
            var value = $(this).val() || null;
            nodeData.properties[key] = value;
        });
        console.log(nodeData);
        try {
            nodeData = this.validateNodeData(nodeData);
            console.log('node created is ', nodeData);
            this.nodeBtnEvent.emit({ type: 'click', action: 'create', data: nodeData });
            // hide the modal once the data is created properly
            $('#createNodeModal').modal('hide');
        }
        catch (e) {
            console.log(e);
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
    CreateNodesComponent.prototype.generateID = function () {
        // this function generates a new id for a the node which will be unique
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
        data.forEach(function (label) {
            _this.nodeTypes2.push(label.type[0]);
        });
        // console.log('types are ', this.nodeTypes2);
    };
    CreateNodesComponent.prototype.updateProperties = function (event) {
        // fetch the properties of selected label and display it in the dropdown
        this.labelProperties = this.getProperties(event);
    };
    CreateNodesComponent.prototype.getProperties = function (labelName) {
        if (labelName.length > 0) {
            var fetchedProperties_1 = [];
            this.processedData.forEach(function (labelObj) {
                if (labelObj.type[0] === labelName[0]) {
                    fetchedProperties_1 = labelObj.properties;
                }
            });
            return fetchedProperties_1;
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.cleanNodeData = function (nodeObj) {
        var newPropertyObject = {};
        // remove any null properties
        Object.keys(nodeObj.properties).forEach(function (property) {
            if (property !== null && nodeObj.properties[property] !== null) {
                // remove the id_ prefix in the key
                property = property.split('id_')[1];
                newPropertyObject[property] = nodeObj.properties['id_' + property];
            }
        });
        // assign it back to the original data
        nodeObj.properties = newPropertyObject;
        console.log('new properties are ', nodeObj);
        // assign a unique id to the node
        nodeObj['id'] = this.generateID();
        // get the type array removed
        nodeObj['type'] = nodeObj['type'][0];
        return nodeObj;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CreateNodesComponent.prototype, "nodeTypes", void 0);
    CreateNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-nodes',
            template: __webpack_require__(/*! ./create-nodes.component.html */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html"),
            styles: [__webpack_require__(/*! ./create-nodes.component.scss */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
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

module.exports = ".headerWrapper {\n  height: 10vh;\n  background: #fff; }\n\n.container-fluid {\n  background: #fff; }\n\n.rightToolbar {\n  height: 100%;\n  float: right;\n  width: 30%; }\n\n.login-button {\n  border-radius: 20px;\n  font-size: 14px;\n  line-height: 2;\n  min-width: 90px;\n  float: right;\n  background: #5f5f5f;\n  border: none;\n  text-decoration: none; }\n\n.login-button:active:focus {\n  background: #5f5f5e; }\n\n.login-button:hover {\n  box-shadow: 2px 7px 18px 1px rgba(95, 95, 95, 0.76);\n  transition: 0.7s; }\n\n.dropdown {\n  position: relative;\n  float: right;\n  z-index: 9998; }\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: 0.5s; }\n\n.dropdown-content:hover {\n  display: block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  padding: 0;\n  min-height: 120px;\n  min-width: 220px;\n  right: 1px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1; }\n\n.dropdown-content a {\n    padding: 20px 10px;\n    display: block;\n    text-decoration: none;\n    color: grey;\n    font-weight: 400; }\n\n.dropdown-content a:hover {\n    background-color: #5f5f5f;\n    color: white;\n    transition: 0.7s;\n    border-radius: 5px; }\n\n.profilePic {\n  margin-right: 30px;\n  border-radius: 50%;\n  display: -webkit-box; }\n\n.profilePic img {\n    cursor: pointer;\n    width: 70px;\n    height: 70px; }\n\n.profilePic img:hover {\n    width: 80px;\n    height: 80px;\n    transition: 0.5s; }\n\n.profilePic p {\n    margin-top: 30px;\n    margin-right: 20px;\n    cursor: pointer; }\n\n.profileDetails {\n  position: absolute;\n  background: whitesmoke;\n  color: black;\n  display: inline;\n  min-width: 100px; }\n\n.left-logo {\n  max-width: 20%; }\n\n.left-logo img {\n    max-height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItaGVhZGVyL0Q6XFxuZW80ai1jb21tdW5pdHktMy4zLjlcXGRldmVsb3BtZW50X3Byb2plY3RzXFxuZW80akRhdGFEcml2ZXJcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkLXYyXFxjb21wb25lbnRzXFxkYXNoYm9hcmQtdjItaGVhZGVyXFxkYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1EQUFtRDtFQUNuRCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWMsRUFBQTs7QUFHbEI7RUFFUSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBRWhCLFVBQVU7RUFDViwrQ0FBK0M7RUFjL0Msa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUF4QmQ7SUFXUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBZnhCO0lBa0JRLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBOztBQU0xQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBSHhCO0lBS1EsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBUHBCO0lBVVEsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFaeEI7SUFlUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUdRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItaGVhZGVyL2Rhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyV3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5yaWdodFRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBtaW4td2lkdGg6IDkwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uOmFjdGl2ZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVlO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggMThweCAxcHggcmdiYSg5NSwgOTUsIDk1LCAwLjc2KTtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB6LWluZGV4IDogOTk5ODtcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIHtcclxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgIC8vIHRvcDogODZweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2ZpbGVQaWMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICBpbWc6aG92ZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZmlsZURldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWxvZ28ge1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwdmg7XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "<div class=\"wrapper sidebar-wrapper\">\r\n    <div class=\"sidebarBody p-0\">\r\n        <div class=\"sidebarBodyTitle\">\r\n            <p>Filter By Attributes</p>\r\n        </div>\r\n        <div class=\"sidebarElements\">\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Name');rotateObj.Name.rotate = !rotateObj.Name.rotate\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\"\r\n                    [ngClass]=\"{'rotate': rotateObj?.Name.rotate, 'no-rotate': !rotateObj?.Name.rotate}\">Names<span class=\"ele-count count-org\">{{nameOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\" (click)=\"rotateObj.Name.rotate = !rotateObj.Name.rotate\" [ngClass]=\"{'rotate': rotateObj?.Name.rotate, 'no-rotate': !rotateObj?.Name.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedName\" [options]=\"nameOptions\" [maxSelected]=\"15\" (ngModelChange)=\"searchElement()\" #names>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Name...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of names.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Type');rotateObj.Type.rotate = !rotateObj.Type.rotate\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\"\r\n                    [ngClass]=\"{'rotate': rotateObj?.Type.rotate, 'no-rotate': !rotateObj?.Type.rotate}\">Type<span class=\"ele-count count-department\">{{typeOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\" (click)=\"rotateObj.Type.rotate = !rotateObj.Type.rotate\" [ngClass]=\"{'rotate': rotateObj?.Type.rotate, 'no-rotate': !rotateObj?.Type.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample2\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedType\" [options]=\"typeOptions\" [maxSelected]=\"15\" #type>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Type...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of type.filteredOptions\" [value]=\"o\">\r\n\r\n                            </sui-select-option>\r\n\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Represent');rotateObj.Represent.rotate = !rotateObj.Represent.rotate\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseExample3\" [ngClass]=\"{'rotate': rotateObj?.Represent.rotate, 'no-rotate': !rotateObj?.Represent.rotate}\">Represent<span class=\"ele-count count-person\">{{representOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample3\" (click)=\"rotateObj.Represent.rotate = !rotateObj.Represent.rotate\" [ngClass]=\"{'rotate': rotateObj?.Represent.rotate, 'no-rotate': !rotateObj?.Represent.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample3\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedRepresent\" [options]=\"representOptions\" [maxSelected]=\"15\" #represent>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Represent...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of represent.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Connection');rotateObj.Connection.rotate = !rotateObj.Connection.rotate\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseExample4\" [ngClass]=\"{'rotate': rotateObj?.Connection.rotate, 'no-rotate': !rotateObj?.Connection.rotate}\">Connection<span class=\"ele-count count-person\">{{connectionOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample4\" (click)=\"rotateObj.Connection.rotate = !rotateObj.Connection.rotate\" [ngClass]=\"{'rotate': rotateObj?.Connection.rotate, 'no-rotate': !rotateObj?.Connection.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample4\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedConnection\" [options]=\"connectionOptions\" [maxSelected]=\"15\" #connection>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Connection...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of connection.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Status');rotateObj.Status.rotate = !rotateObj.Status.rotate\" data-toggle=\"collapse\" href=\"#collapseExample5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample5\"\r\n                    [ngClass]=\"{'rotate': rotateObj?.Status.rotate, 'no-rotate': !rotateObj?.Status.rotate}\">Status<span class=\"ele-count count-person\">{{statusOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample5\" (click)=\"rotateObj.Status.rotate = !rotateObj.Status.rotate\" [ngClass]=\"{'rotate': rotateObj?.Status.rotate, 'no-rotate': !rotateObj?.Status.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample5\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedStatus\" [options]=\"statusOptions\" [maxSelected]=\"15\" #status>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Status...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of status.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Understanding');rotateObj.Understanding.rotate = !rotateObj.Understanding.rotate\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseExample6\" [ngClass]=\"{'rotate': rotateObj?.Understanding.rotate, 'no-rotate': !rotateObj?.Understanding.rotate}\">SP Thinking<span class=\"ele-count count-person\">{{understandingOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample6\" (click)=\"rotateObj.Understanding.rotate = !rotateObj.Understanding.rotate\" [ngClass]=\"{'rotate': rotateObj?.Understanding.rotate, 'no-rotate': !rotateObj?.Understanding.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample6\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedUnderstanding\" [options]=\"understandingOptions\" [maxSelected]=\"15\" #understanding>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Understanding...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of understanding.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Url');rotateObj.Url.rotate = !rotateObj.Url.rotate\" data-toggle=\"collapse\" href=\"#collapseExample7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample7\"\r\n                    [ngClass]=\"{'rotate': rotateObj?.Url.rotate, 'no-rotate': !rotateObj?.Url.rotate}\">Url<span class=\"ele-count count-person\">{{urlOptions.length}}</span></a>\r\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample7\" (click)=\"rotateObj.Url.rotate = !rotateObj.Url.rotate\" [ngClass]=\"{'rotate': rotateObj?.Url.rotate, 'no-rotate': !rotateObj?.Url.rotate}\"></span>\r\n                <div class=\"collapse\" id=\"collapseExample7\">\r\n                    <sui-multi-select [(ngModel)]=\"selectedUrl\" [options]=\"urlOptions\" [maxSelected]=\"15\" #url>\r\n                        <div class=\"ui icon search input\">\r\n                            <i class=\"search icon\"></i>\r\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Url...\">\r\n                        </div>\r\n                        <div class=\"scrolling menu\">\r\n                            <sui-select-option *ngFor=\"let o of url.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                        </div>\r\n                    </sui-multi-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-container d-flex justify-content-around\">\r\n            <div class=\"searchBtnWrapper btn-sidebar\">\r\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\r\n            </div>\r\n            <div class=\"searchBtnWrapper btn-sidebar\">\r\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"searchGraph()\">Apply</button>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"sidebarBodyTitle\">\r\n            <p>Filter By Relationships</p>\r\n        </div>\r\n        <div class=\"sidebarElements\">\r\n            <div class=\"item\">\r\n                <sui-multi-select [(ngModel)]=\"selectedRelation\" [options]=\"relationOptions\" [maxSelected]=\"5\" #relation>\r\n                    <div class=\"ui icon search input\">\r\n                        <i class=\"search icon\"></i>\r\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search Relationships...\">\r\n                    </div>\r\n                    <div class=\"scrolling menu\">\r\n                        <sui-select-option *ngFor=\"let o of relation.filteredOptions\" [value]=\"o\"></sui-select-option>\r\n                    </div>\r\n                </sui-multi-select>\r\n                <!-- <div class=\"rel-tabs-container\" *ngFor=\"let r of relationOptions\">\r\n                    <div class=\"rel-tab\" (click)=\"relationclickEvent(r)\" id={{r}}>\r\n                        <p>{{r}}</p>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"btn-container d-flex justify-content-around\">\r\n                    <div class=\"searchBtnWrapper btn-sidebar\">\r\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\r\n                    </div>\r\n                    <div class=\"searchBtnWrapper btn-sidebar\">\r\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"relationSearchGraph()\">Apply</button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"searchBtnWrapper btn-sidebar\">\r\n            <button class=\"btn btn-default btn-md searchBtn\" (click)=\"noderelationSearchGraph()\">Apply Both</button>\r\n        </div> -->\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kanit&display=swap\");\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n::-webkit-scrollbar-thumb {\n  background-color: #5f5f5f; }\n.sidebar-wrapper {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 87vh;\n  background: #fff; }\n.logo {\n  text-align: center; }\n.logo img {\n  cursor: pointer; }\n.sidebarBodyTitle {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center; }\n.sidebarBodyTitle p {\n    padding: 0 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background: transparent;\n    color: #5f5f5f;\n    font-weight: bold;\n    border-radius: 5px;\n    transition: 1s;\n    text-align: left; }\n.sidebarElements {\n  width: 100%;\n  padding: 25px 0; }\n.item {\n  font-size: 16px;\n  width: 100%;\n  padding: 0; }\n.item span {\n    margin-right: 20px; }\n.hoverable:hover {\n  font-size: 18px;\n  transition: 0.5s; }\n.item,\n.item span {\n  min-height: 50px;\n  line-height: 2.7; }\n.item-text {\n  cursor: pointer;\n  text-decoration: none;\n  color: #000; }\n.fa-chevron-right {\n  float: right;\n  cursor: pointer; }\n.rotate {\n  transform: rotate(90deg);\n  transition: .8s; }\n.no-rotate {\n  transform: rotate(0deg);\n  transition: .8s; }\n.click-pink {\n  color: pink; }\n.hide {\n  display: none; }\n.show {\n  display: block; }\n.ui.teal.left.pointing.label {\n  background: #5f5f5f !important; }\n.searchBtnWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  bottom: 0;\n  width: 100%; }\n.searchBtnWrapper button {\n    background: #e4e4e4;\n    color: #000;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n.searchBtnWrapper button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n.btn-sidebar {\n  display: inline; }\n.btn-container {\n  margin-bottom: 25px; }\n.rel-tabs-container {\n  display: inline-block; }\n.rel-tab p {\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #F5F5F5;\n  color: #30333a;\n  margin: 4px;\n  padding: 3px 7px;\n  border-radius: 3px; }\n.ele-count {\n  border-radius: 50%;\n  padding: 8px;\n  margin-left: 10px;\n  text-align: center;\n  display: inline; }\n.wrapper hr {\n  margin-bottom: 2em;\n  margin-top: 0.15em; }\n.rel-tabs-container .selected {\n  box-shadow: -4px 4px 17px -8px rgba(0, 0, 0, 0.75); }\n.count-org {\n  background-color: #F5F5F5; }\n.count-person {\n  background-color: #F5F5F5; }\n.count-department {\n  background-color: #F5F5F5; }\nspan.ele-count.count-org {\n  padding: 9px 11px 9px 11px; }\n.c_ff4444 {\n  background-color: '#ff4444'; }\n.c_ffbb33 {\n  background-color: '#ffbb33'; }\n.c_00C851 {\n  background-color: '#00C851'; }\n.c_33b5e5 {\n  background-color: '#33b5e5'; }\n.c_CC0000 {\n  background-color: '#CC0000'; }\n.c_FF8800 {\n  background-color: '#FF8800'; }\n.c_007E33 {\n  background-color: '#007E33'; }\n.c_0099CC {\n  background-color: '#0099CC'; }\n.c_9933CC {\n  background-color: '#9933CC'; }\n.c_0d47a1 {\n  background-color: '#0d47a1'; }\n.c_2BBBAD {\n  background-color: '#2BBBAD'; }\n.c_c51162 {\n  background-color: '#c51162'; }\n@media screen and (max-width: 1100px) {\n  .sidebar-wrapper {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItc2lkZWJhci9EOlxcbmVvNGotY29tbXVuaXR5LTMuMy45XFxkZXZlbG9wbWVudF9wcm9qZWN0c1xcbmVvNGpEYXRhRHJpdmVyXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGRhc2hib2FyZC12MlxcY29tcG9uZW50c1xcZGFzaGJvYXJkLXYyLXNpZGViYXJcXGRhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUFZO0FBQ1o7RUFFSSw0Q0FBNEM7RUFDNUMseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUdQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGtCQUFrQixFQUFBO0FBSXRCO0VBR1EsZUFBZSxFQUFBO0FBSXZCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBRWpCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR25CO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVLEVBQUE7QUFIZDtJQU1RLGtCQUFrQixFQUFBO0FBSTFCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR3BCOztFQUVJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxZQUFZO0VBQ1osZUFBZSxFQUFBO0FBR25CO0VBQ0ksd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTtBQUduQjtFQUNJLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7QUFHbkI7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLDhCQUE4QixFQUFBO0FBR2xDO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVyxFQUFBO0FBUGY7SUFVUSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwrQ0FBK0MsRUFBQTtBQWJ2RDtJQWdCUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUd0QjtFQUVJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFHSSxrREFBa0QsRUFBQTtBQUd0RDtFQUNJLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLDBCQUEwQixFQUFBO0FBRzlCO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUdBO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLXNpZGViYXIvZGFzaGJvYXJkLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthbml0JmRpc3BsYXk9c3dhcCcpO1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcclxufVxyXG5cclxuLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvLyB3aWR0aDogMjMlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogODd2aDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIC8vIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZWJhckJvZHlUaXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDJweCA3cHggMThweCAxcHggcmdiYSg5NSwgOTUsIDk1LCAwLjc2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZGViYXJFbGVtZW50cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG92ZXJhYmxlOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5pdGVtLFxyXG4uaXRlbSBzcGFuIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMi43O1xyXG59XHJcblxyXG4uaXRlbS10ZXh0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogLjhzO1xyXG59XHJcblxyXG4ubm8tcm90YXRlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogLjhzO1xyXG59XHJcblxyXG4uY2xpY2stcGluayB7XHJcbiAgICBjb2xvcjogcGluaztcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi51aS50ZWFsLmxlZnQucG9pbnRpbmcubGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoQnRuV3JhcHBlciB7XHJcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXNpZGViYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ucmVsLXRhYnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnJlbC10YWIgcCB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6IHJnYig0OCwgNTEsIDU4KTtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmVsZS1jb3VudCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi53cmFwcGVyIGhyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMTVlbTtcclxufVxyXG5cclxuLnJlbC10YWJzLWNvbnRhaW5lciAuc2VsZWN0ZWQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmNvdW50LW9yZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uY291bnQtcGVyc29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5jb3VudC1kZXBhcnRtZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbnNwYW4uZWxlLWNvdW50LmNvdW50LW9yZyB7XHJcbiAgICBwYWRkaW5nOiA5cHggMTFweCA5cHggMTFweDtcclxufVxyXG5cclxuLmNfZmY0NDQ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjZmY0NDQ0J1xyXG59XHJcblxyXG4uY19mZmJiMzMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZmJiMzMnXHJcbn1cclxuXHJcbi5jXzAwQzg1MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnIzAwQzg1MSdcclxufVxyXG5cclxuLmNfMzNiNWU1IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMzNiNWU1J1xyXG59XHJcblxyXG4uY19DQzAwMDAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNDQzAwMDAnXHJcbn1cclxuXHJcbi5jX0ZGODgwMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnI0ZGODgwMCdcclxufVxyXG5cclxuLmNfMDA3RTMzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDA3RTMzJ1xyXG59XHJcblxyXG4uY18wMDk5Q0Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMDk5Q0MnXHJcbn1cclxuXHJcbi5jXzk5MzNDQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnIzk5MzNDQydcclxufVxyXG5cclxuLmNfMGQ0N2ExIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMGQ0N2ExJ1xyXG59XHJcblxyXG4uY18yQkJCQUQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMyQkJCQUQnXHJcbn1cclxuXHJcbi5jX2M1MTE2MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnI2M1MTE2MidcclxufVxyXG5cclxuLy8gYW4gYXR0ZW1wdCB0byBtYWtlIGl0IGEgYml0IHJlc3BvbnNpdmVcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJzExMDBweCcpIHtcclxuICAgIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbn0iXX0= */"

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
        this.nodeTypesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                data['Name'].filter(function (nodeName) {
                    temname.push(nodeName);
                });
                data['Type'].filter(function (nodeType) {
                    // let x ={
                    //   name:node,
                    //   color:this.defaultColor[node]
                    // }
                    temtype.push(nodeType);
                });
                data['Status'].filter(function (nodeStatus) {
                    temstatus.push(nodeStatus);
                });
                data['Represent'].filter(function (nodeRepresent) {
                    temrepresent.push(nodeRepresent);
                });
                data['Connection'].filter(function (nodeConnection) {
                    temconnection.push(nodeConnection);
                });
                data['Understanding of SP Thinking'].filter(function (nodeSP) {
                    temunder.push(nodeSP);
                });
                data['Relationships'].filter(function (nodeRelations) {
                    temrelation.push(nodeRelations);
                });
            }
            _this.nameOptions = temname;
            _this.typeOptions = temtype;
            // send the types array for further use to the modals
            _this.nodeTypesEvent.emit(temtype);
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
        var requestBody;
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
            requestBody = { nodes: this.selectedGraph };
        }
        else {
            // if no selected element 
            requestBody = {};
        }
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
    // return all nodes with selected relation
    DashboardSidebarComponent.prototype.relationSearchGraph = function () {
        var _this = this;
        var requestBody;
        if (this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
            // let temNodes = [];
            // if(this.selectedName.length > 0 || this.selectedType.length > 0){
            //   let temnode = [];
            //    temnode = this.selectedNodeCheck();
            //   temnode.filter(node=>{
            //     temNodes.push(node);      
            //   })       
            // }
            // 
            //   if(temNodes.length > 0){
            //      requestBody= { nodes: temNodes, edges: this.selectedRelationship };
            //   }else{
            requestBody = { nodes: [], edges: this.selectedRelationship };
            // }
        }
        else {
            // if no selected element 
            requestBody = {};
        }
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
    // this return selected name and type
    DashboardSidebarComponent.prototype.selectedNodeCheck = function () {
        if (this.selectedName.length > 0 && this.selectedType.length > 0) {
            var temNodeArray = [];
            temNodeArray.push({ type: "Name", value: this.selectedName });
            temNodeArray.push({ type: "Type", value: this.selectedType });
            return temNodeArray;
        }
        else if (this.selectedType.length > 0) {
            return [{ type: "Type", value: this.selectedType }];
        }
        else if (this.selectedName.length > 0) {
            return [{ type: "Name", value: this.selectedName }];
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

module.exports = "<app-global-loader *ngIf=\"loader\"></app-global-loader>\r\n<app-color-panel *ngIf=\"!loader\"></app-color-panel>\r\n<div class=\"wrapper-countlimit\" *ngIf=\"!loader\">\r\n    <div class=\"selected-count\">{{selectedCount}} Elements Found</div>\r\n    <div class=\"nodeLimit\">\r\n        <p class=\"nodelimit-head\">Element Limit :</p>\r\n        <input type=\"text\" [(ngModel)]=nodeLimit (ngModelChange)=\"limitChange(nodeLimit, popup)\" suiPopup popupText=\"{{errorMessage}}\" popupTrigger=\"manual\" #popup=\"suiPopup\">\r\n    </div>\r\n    <div class=\"creationToolbar\">\r\n            <app-create-nodes [nodeTypes]=\"totalTypesArray\" (nodeBtnEvent)=\"nodeEventCapture($event)\" (edgeBtnEvent)=\"edgeEventCapture($event)\"></app-create-nodes>\r\n    </div>\r\n</div>\r\n<div class=\"graph-container\" id=\"graphViewer\">\r\n</div>\r\n<ng-template *ngIf=\"showlimiterror\" let-popup #popupTemplate>\r\n    <div class=\"header\">Rating</div>\r\n    <div class=\"content\">\r\n        <sui-rating class=\"star\" (click)=\"popup.close()\"></sui-rating>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 81vh;\n  width: 80%;\n  float: right; }\n\n.selected-count {\n  background: #F5F5F5;\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #30333a;\n  border-radius: 3px;\n  padding: 1em;\n  float: left; }\n\n.wrapper-countlimit {\n  width: 80%;\n  float: right; }\n\n.nodeLimit {\n  max-width: 200px;\n  top: 50px;\n  float: left;\n  border-radius: 3px;\n  padding: 1em;\n  background: #F5F5F5;\n  outline: none; }\n\n.creationToolbar {\n  top: 50px;\n  float: left;\n  padding: 1em;\n  outline: none; }\n\n.nodeLimit input {\n  width: 35%;\n  border: 0.3px solid #000;\n  padding: 5px;\n  border-radius: 2px; }\n\n.nodeLimit:focus {\n  outline: none; }\n\n.nodelimit-head {\n  display: inline;\n  margin-right: 3px; }\n\n@media screen and (max-width: 1100px) {\n  .graph-container,\n  .selected-count {\n    width: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9ncmFwaC12Mi12aXN1YWxpemVyL0Q6XFxuZW80ai1jb21tdW5pdHktMy4zLjlcXGRldmVsb3BtZW50X3Byb2plY3RzXFxuZW80akRhdGFEcml2ZXJcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkLXYyXFxjb21wb25lbnRzXFxncmFwaC12Mi12aXN1YWxpemVyXFxncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksU0FBVTtFQUNWLFdBQVc7RUFDWCxZQUFhO0VBQ2IsYUFBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0k7O0lBRUksVUFBVSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGhlaWdodDogODF2aDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzAzMzNhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi53cmFwcGVyLWNvdW50bGltaXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5vZGVMaW1pdCB7XHJcbiAgICBtYXgtd2lkdGggOiAyMDBweDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGlvblRvb2xiYXIge1xyXG4gICAgdG9wIDogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZyA6IDFlbTtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG59XHJcblxyXG4ubm9kZUxpbWl0IGlucHV0IHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5ub2RlTGltaXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5vZGVsaW1pdC1oZWFkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xyXG4gICAgLmdyYXBoLWNvbnRhaW5lcixcclxuICAgIC5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufSJdfQ== */"

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
        this.totalTypesArray = [];
        this.graphData = {};
        this.errorMessage = '';
        this.loader = true;
        this.defaultNodeLimit = 149;
        this.nodeLimit = 149;
        this.emptyNodeLimit = 179;
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
        this.networkInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        this.changeNodeColor();
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        if (this.event == 'search1' || this.event === 'search2') {
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
                        var newNodeData = {
                            id: event.data.id,
                            label: event.data.properties.Name,
                            type: [event.data.type],
                            properties: event.data.properties
                        };
                        //let newNodeForVis = _.cloneDeep(newNodeData);
                        // make a request to create a node, if it succeedes only then show in the graph
                        _this.graphService.createNewNode(newNodeData).subscribe(function (response) {
                            console.log(response);
                            // add additional data for vis layout
                            // newNodeForVis = this.addData(newNodeForVis, clickEvent, event);
                            try {
                                var visNode = _this.addData(response['seperateNodes'][0], clickEvent, event);
                                // add the new node to the vis
                                _this.graphData['nodes'].add([visNode]);
                            }
                            catch (addErr) {
                                console.log('Error while adding the data node to vis ', addErr['message']);
                            }
                        }, function (error) {
                            console.error('An error occured while creating node in  database ', error);
                        });
                    }
                });
            }
            else if (event.action === 'edit') {
                // handle the functionality of editing the node
            }
            else if (event.action === 'delete') {
                // handle the functionality of deleting the node
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.edgeEventCapture = function (event) {
        if (Object.keys(event).length > 0) {
            console.log('recieved an event ', event);
        }
    };
    GraphVisualizerComponent.prototype.serializeProperties = function (propertyObject) {
        if (propertyObject.constructor === Object) {
            var finalString_1 = '';
            lodash__WEBPACK_IMPORTED_MODULE_4__["forOwn"](Object.keys(propertyObject), function (key) {
                if (propertyObject[key].hasOwnProperty('low')) {
                    // if the key has an integer value then set the low value of it
                    propertyObject[key] = propertyObject[key]['low'];
                }
                finalString_1 += "<strong>" + key + " :</strong> " + propertyObject[key] + " <br>";
            });
            return finalString_1;
        }
        else
            return null;
    };
    GraphVisualizerComponent.prototype.addData = function (node, clickEvent, event) {
        node['x'] = clickEvent.pointer.canvas.x;
        node['y'] = clickEvent.pointer.canvas.y;
        // node['title'] = this.serializeProperties(event.data.properties);
        node['color'] = this.colorConfig.defaultColor[event.data.type];
        console.log('final node is ', node);
        return node;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "totalTypesArray", void 0);
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

module.exports = "<app-dashboard-header></app-dashboard-header>\r\n<app-dashboard-sidebar (eventClicked)=\"childEventClicked($event)\" (nodeTypesEvent)=\"sendTypes($event)\"></app-dashboard-sidebar>\r\n<app-graph-visualizer [event]=\"clickedEvent\" [totalTypesArray]=\"totalTypesArray\"></app-graph-visualizer>"

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
        this.totalTypesArray = [];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    MainComponent.prototype.sendTypes = function (event) {
        if (!!event && event.length > 0) {
            console.log('sending types', event);
            this.totalTypesArray = event;
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
/* harmony import */ var _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/color-panel/color-panel/color-panel.component */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts");
/* harmony import */ var _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/create-nodes/create-nodes.component */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts");













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"], _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_11__["ColorPanelComponent"], _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_12__["CreateNodesComponent"]],
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
        this.defaultColor = {
            Academia: '#ff4444',
            Consulting: '#ffbb33',
            Government: '#00C851',
            'Impact Investor': '#33b5e5',
            'International Agency': '#CC0000',
            Media: '#FF8800',
            'NGO/CBO': '#007E33',
            People: '#0099CC',
            Philanthropy: '#9933CC',
            Platform: '#0d47a1',
            'Private Sector': '#2BBBAD',
            'Research Institute': '#c51162'
        };
        this.colorObj$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.defaultColor);
    }
    ColorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorServiceService);
    return ColorServiceService;
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



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-v2-dashboard-v2-module.js.map