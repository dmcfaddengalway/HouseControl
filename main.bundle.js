webpackJsonp([1,5],Array(58).concat([
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CleaningComponent = (function () {
    function CleaningComponent() {
    }
    CleaningComponent.prototype.ngOnInit = function () {
    };
    return CleaningComponent;
}());
CleaningComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-cleaning',
        template: __webpack_require__(172),
        styles: [__webpack_require__(164), __webpack_require__(77)]
    }),
    __metadata("design:paramtypes", [])
], CleaningComponent);

//# sourceMappingURL=cleaning.component.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroceryListComponent = (function () {
    function GroceryListComponent() {
        this.storeList = ['Aldi', 'Dunnes', 'Tesco', 'Lidl', 'SuperValu'];
        this.groceryList = [];
        this.quantity = 1;
    }
    GroceryListComponent.prototype.ngOnInit = function () {
    };
    GroceryListComponent.prototype.addGroceryItem = function () {
        if (this.quantity > 0 || this.store == null) {
            this.groceryList.push({ item: this.item, store: this.store, quantity: this.quantity });
        }
        else {
            alert("Sorry you can not order 0 of " + this.item);
            return;
        }
        // console.log('Added task: ', this.task);
        // console.log('Status: ', this.completed);
        // console.log('Priority:', this.priority);
        this.item = '';
        this.store = this.storeList[0];
        this.quantity = 1;
    };
    GroceryListComponent.prototype.clearSelected = function () {
        var checkedBoxes = document.getElementsByTagName('input[type="checkbox"]');
        console.log('Number of checked checkboxes: ', checkedBoxes);
    };
    GroceryListComponent.prototype.clearAll = function () {
        this.groceryList = [];
    };
    return GroceryListComponent;
}());
GroceryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-grocery-list',
        template: __webpack_require__(174),
        styles: [__webpack_require__(166), __webpack_require__(77)]
    }),
    __metadata("design:paramtypes", [])
], GroceryListComponent);

//# sourceMappingURL=grocery-list.component.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuesComponent = (function () {
    function IssuesComponent() {
    }
    IssuesComponent.prototype.ngOnInit = function () {
    };
    return IssuesComponent;
}());
IssuesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-issues',
        template: __webpack_require__(175),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], IssuesComponent);

//# sourceMappingURL=issues.component.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-privacy',
        template: __webpack_require__(176),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], PrivacyComponent);

//# sourceMappingURL=privacy.component.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-terms',
        template: __webpack_require__(177),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], TermsComponent);

//# sourceMappingURL=terms.component.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToDoComponent = (function () {
    function ToDoComponent() {
        this.toDoList = [];
    }
    ToDoComponent.prototype.ngOnInit = function () {
    };
    ToDoComponent.prototype.addToDo = function () {
        this.toDoList.push({ name: this.task, completed: false, priority: this.priority });
        //console.log('Added task: ', this.task);
        //console.log('Status: ', this.completed);
        //console.log('Priority:', this.priority);
        this.task = '';
        this.priority = null;
    };
    ToDoComponent.prototype.removeToDo = function (index) {
        this.toDoList.splice(index, 1);
        console.log("Removed: ", this.task);
    };
    ToDoComponent.prototype.sortPriority = function () {
        console.log("Sorted by priority");
    };
    ToDoComponent.prototype.sortAlphabeticalTask = function () {
        console.log("Sorted by alphabetical task");
    };
    return ToDoComponent;
}());
ToDoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-to-do',
        template: __webpack_require__(178),
        styles: [__webpack_require__(170), __webpack_require__(76)]
    }),
    __metadata("design:paramtypes", [])
], ToDoComponent);

//# sourceMappingURL=to-do.component.js.map

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*------------------\n     RUBIK FONTS\n--------------------*/\n\n@font-face {\n    font-family: RubikBlack;\n    src: url(" + __webpack_require__(212) + ");\n}\n\n@font-face {\n    font-family: RubikBlackItalic;\n    src: url(" + __webpack_require__(213) + ");\n}\n\n@font-face {\n    font-family: RubikBold;\n    src: url(" + __webpack_require__(214) + ");\n}\n\n@font-face {\n    font-family: RubikBoldItalic;\n    src: url(" + __webpack_require__(215) + ");\n}\n\n@font-face {\n    font-family: RubikItalic;\n    src: url(" + __webpack_require__(216) + ");\n}\n\n@font-face {\n    font-family: RubikLight;\n    src: url(" + __webpack_require__(217) + ");\n}\n\n@font-face {\n    font-family: RubikLightItalic;\n    src: url(" + __webpack_require__(218) + ");\n}\n\n@font-face {\n    font-family: RubikMedium;\n    src: url(" + __webpack_require__(219) + ");\n}\n\n@font-face {\n    font-family: RubikMediumItalic;\n    src: url(" + __webpack_require__(220) + ");\n}\n\n@font-face {\n    font-family: RubikRegular;\n    src: url(" + __webpack_require__(221) + ");\n}\n\n/*------------------\n    TRIRONG FONTS\n--------------------*/\n\n@font-face {\n    font-family: TrirongBlack;\n    src: url(" + __webpack_require__(222) + ");\n}\n\n@font-face {\n    font-family: TrirongBlackItalic;\n    src: url(" + __webpack_require__(223) + ");\n}\n\n@font-face {\n    font-family: TrirongBold;\n    src: url(" + __webpack_require__(224) + ");\n}\n\n@font-face {\n    font-family: TrirongBoldItalic;\n    src: url(" + __webpack_require__(225) + ");\n}\n\n@font-face {\n    font-family: TrirongExtraBold;\n    src: url(" + __webpack_require__(226) + ");\n}\n\n@font-face {\n    font-family: TrirongExtraBoldItalic;\n    src: url(" + __webpack_require__(227) + ");\n}\n\n@font-face {\n    font-family: TrirongExtraLight;\n    src: url(" + __webpack_require__(228) + ");\n}\n\n@font-face {\n    font-family: TrirongExtraLightItalic;\n    src: url(" + __webpack_require__(229) + ");\n}\n\n@font-face {\n    font-family: TrirongItalic;\n    src: url(" + __webpack_require__(230) + ");\n}\n\n@font-face {\n    font-family: TrirongLight;\n    src: url(" + __webpack_require__(231) + ");\n}\n\n@font-face {\n    font-family: TrirongLightItalic;\n    src: url(" + __webpack_require__(232) + ");\n}\n\n@font-face {\n    font-family: TrirongMedium;\n    src: url(" + __webpack_require__(233) + ");\n}\n\n@font-face {\n    font-family: TrirongMediumItalic;\n    src: url(" + __webpack_require__(234) + ");\n}\n\n@font-face {\n    font-family: TrirongRegular;\n    src: url(" + __webpack_require__(235) + ");\n}\n\n@font-face {\n    font-family: TrirongSemiBold;\n    src: url(" + __webpack_require__(236) + ");\n}\n\n@font-face {\n    font-family: TrirongSemiBoldItalic;\n    src: url(" + __webpack_require__(237) + ");\n}\n\n@font-face {\n    font-family: TrirongThin;\n    src: url(" + __webpack_require__(238) + ");\n}\n\n@font-face {\n    font-family: TrirongThinItalic;\n    src: url(" + __webpack_require__(239) + ");\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*---------------------------\n    PUBLIC COLOR VARIABLES\n---------------------------*/\n/*-----------------------------\n    PRIVATE COLOR VARIABLES\n-----------------------------*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".submitButtonBig {\n  width: 150px;\n  padding: 12px 30px;\n  color: white;\n  background-color: #944654;\n  border: none;\n  font-size: 20px;\n  font-family: 'TrirongThin';\n  letter-spacing: 1px;\n  transition: background-color 1s;\n  border-radius: 2px;\n  cursor: pointer; }\n  .submitButtonBig:hover {\n    background-color: #713640; }\n\n.submitButtonLong {\n  width: 48%;\n  margin: 0 auto;\n  padding: 8px 30px;\n  color: white;\n  background-color: #944654;\n  border: none;\n  font-size: 14px;\n  font-family: 'TrirongThin';\n  letter-spacing: 1px;\n  transition: background-color 1s;\n  border-radius: 2px;\n  cursor: pointer; }\n  .submitButtonLong:hover {\n    background-color: #713640; }\n\ninput {\n  padding: 20px 20px;\n  font-size: 20px;\n  border: 1ps solid black;\n  background-color: transparent;\n  width: 50%;\n  font-family: 'RubikLight'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyrightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CopyrightComponent = (function () {
    function CopyrightComponent() {
    }
    CopyrightComponent.prototype.ngOnInit = function () {
    };
    return CopyrightComponent;
}());
CopyrightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-copyright',
        template: __webpack_require__(173),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], CopyrightComponent);

//# sourceMappingURL=copyright.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBarComponent = (function () {
    function FooterBarComponent() {
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    return FooterBarComponent;
}());
FooterBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer-bar',
        template: __webpack_require__(179),
        styles: [__webpack_require__(161), __webpack_require__(75)]
    }),
    __metadata("design:paramtypes", [])
], FooterBarComponent);

//# sourceMappingURL=footer-bar.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderBarComponent = (function () {
    function HeaderBarComponent() {
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    return HeaderBarComponent;
}());
HeaderBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header-bar',
        template: __webpack_require__(180),
        styles: [__webpack_require__(162), __webpack_require__(75)]
    }),
    __metadata("design:paramtypes", [])
], HeaderBarComponent);

//# sourceMappingURL=header-bar.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(181),
        styles: [__webpack_require__(163), __webpack_require__(76)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Shared_header_bar_header_bar_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Shared_footer_bar_footer_bar_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_to_do_to_do_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_grocery_list_grocery_list_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_cleaning_cleaning_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_issues_issues_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_privacy_privacy_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_terms_terms_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_copyright_copyright_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Shared_header_bar_header_bar_component__["a" /* HeaderBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Shared_footer_bar_footer_bar_component__["a" /* FooterBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Components_to_do_to_do_component__["a" /* ToDoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Components_grocery_list_grocery_list_component__["a" /* GroceryListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Components_cleaning_cleaning_component__["a" /* CleaningComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Components_issues_issues_component__["a" /* IssuesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Components_privacy_privacy_component__["a" /* PrivacyComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Components_terms_terms_component__["a" /* TermsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Components_copyright_copyright_component__["a" /* CopyrightComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_to_do_to_do_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_grocery_list_grocery_list_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_cleaning_cleaning_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_issues_issues_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_privacy_privacy_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_terms_terms_component__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });






var routes = [
    {
        path: 'toDo',
        component: __WEBPACK_IMPORTED_MODULE_0__Components_to_do_to_do_component__["a" /* ToDoComponent */]
    },
    {
        path: 'grocery',
        component: __WEBPACK_IMPORTED_MODULE_1__Components_grocery_list_grocery_list_component__["a" /* GroceryListComponent */]
    },
    {
        path: 'cleaning',
        component: __WEBPACK_IMPORTED_MODULE_2__Components_cleaning_cleaning_component__["a" /* CleaningComponent */]
    },
    {
        path: 'issues',
        component: __WEBPACK_IMPORTED_MODULE_3__Components_issues_issues_component__["a" /* IssuesComponent */]
    },
    {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_4__Components_privacy_privacy_component__["a" /* PrivacyComponent */]
    },
    {
        path: 'terms',
        component: __WEBPACK_IMPORTED_MODULE_5__Components_terms_terms_component__["a" /* TermsComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".footerBar {\n    height: 7vh;\n    width: 100%;\n    box-shadow: 0px 1px 6px 0.5px rgb(0, 0, 0);\n    position: fixed;\n    bottom: 0;\n    background-color: rgba(136, 73, 143, 1);\n}\n\n.footerLogo {\n    display: table;\n    height: 100%;\n    width: 60%;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n}\n\n.footerLogo h1 {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 50px;\n    color: white;\n    font-family: 'RubikBold';\n}\n\n.footerLinks {\n    display: inline-block;\n    height: 100%;\n    width: 40%;\n    margin: 0px;\n    padding: 0px;\n    float: right;\n}\n\n.footerLinks ul {\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n    vertical-align: middle;\n}\n\n.footerLinks ul li {\n    display: table;\n    vertical-align: middle;\n    height: 100%;\n    text-align: center;\n    width: 30%;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n    font-family: cursive;\n}\n\n.footerLinks ul li a {\n    cursor: pointer;\n    display: table-cell;\n    text-decoration: none;\n    vertical-align: middle;\n    color: white;\n    font-family: 'TrirongRegular';\n    font-size: 16px;\n    transition: background-color 1s;\n}\n\n.footerLinks ul li a:hover {\n    background-color: #4B284E;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".headerBar {\n    height: 7vh;\n    width: 100%;\n    box-shadow: 0px 1px 6px 0.5px rgb(0, 0, 0);\n    position: fixed;\n    top: 0;\n    background-color: rgba(136, 73, 143, 1);\n    display: block;\n}\n\n.headerLogo {\n    display: table;\n    height: 100%;\n    width: 40%;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n}\n\n.headerLogo h1 {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 50px;\n    color: white;\n    font-family: 'RubikBold';\n}\n\n.headerLogo h1 a {\n    color: white;\n    text-decoration: none;\n}\n\n.headerLinks {\n    display: inline-block;\n    height: 100%;\n    width: 60%;\n    margin: 0px;\n    padding: 0px;\n    float: right;\n}\n\n.headerLinks ul {\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n    vertical-align: middle;\n}\n\n.headerLinks ul li {\n    display: table;\n    vertical-align: middle;\n    height: 100%;\n    text-align: center;\n    width: 20%;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n    font-family: cursive;\n}\n\n.headerLinks ul li a {\n    cursor: pointer;\n    display: table-cell;\n    text-decoration: none;\n    vertical-align: middle;\n    color: white;\n    font-family: 'TrirongRegular';\n    font-size: 20px;\n    transition: background-color 1s;\n}\n\n.headerLinks ul li a:hover {\n    background-color: #4B284E;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".cleaningContainer {\n  width: 100%; }\n  .cleaningContainer .cleaningBox {\n    width: 75%;\n    margin: 120px auto;\n    font-family: 'TrirongLight'; }\n  .cleaningContainer h1 {\n    display: inline-block; }\n  .cleaningContainer button {\n    display: inline-block;\n    float: right; }\n  .cleaningContainer .dailyBox {\n    border-bottom: 1px solid black; }\n  .cleaningContainer .weeklyBox {\n    border-bottom: 1px solid black; }\n  .cleaningContainer .monthlyBox {\n    border-bottom: 1px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".groceryListContainer {\n  width: 100%; }\n  .groceryListContainer .formContainer {\n    width: 100%;\n    margin-top: 120px; }\n    .groceryListContainer .formContainer .formBox {\n      width: 75%;\n      margin: 0 auto; }\n      .groceryListContainer .formContainer .formBox form input {\n        width: 40%; }\n      .groceryListContainer .formContainer .formBox form select {\n        width: 20%;\n        border-radius: 2px;\n        background-color: transparent;\n        -webkit-appearance: none;\n        padding: 12px 12px;\n        border: 1ps solid black;\n        font-size: 14px; }\n      .groceryListContainer .formContainer .formBox form .counter {\n        width: 5%; }\n  .groceryListContainer .listControlContainer {\n    width: 100%;\n    margin: 20px auto; }\n    .groceryListContainer .listControlContainer .listControlBox {\n      width: 70%;\n      margin: 0 auto; }\n  .groceryListContainer .listContainer {\n    width: 100%; }\n    .groceryListContainer .listContainer .listBox {\n      width: 75%;\n      margin: 20px auto; }\n      .groceryListContainer .listContainer .listBox .listTableContainer {\n        width: 100%;\n        margin: 0 auto; }\n        .groceryListContainer .listContainer .listBox .listTableContainer table {\n          width: 100%;\n          border-collapse: collapse;\n          text-align: center;\n          margin-top: 20px; }\n          .groceryListContainer .listContainer .listBox .listTableContainer table thead {\n            font-family: 'RubikBold';\n            font-size: 18px; }\n            .groceryListContainer .listContainer .listBox .listTableContainer table thead tr {\n              border-bottom: 1px solid black; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table thead tr .statusHead {\n                width: 15%; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table thead tr .storeHead {\n                width: 20%; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table thead tr .itemHead {\n                width: 50%; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table thead tr .quantityHead {\n                width: 15%; }\n          .groceryListContainer .listContainer .listBox .listTableContainer table tbody {\n            font-family: 'TrirongRegular';\n            font-size: 24px;\n            text-align: center; }\n            .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr:nth-child(odd) {\n              background-color: transparent; }\n            .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr:nth-child(even) {\n              background-color: rgba(0, 0, 0, 0.05); }\n            .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status {\n              margin: 0 auto; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status .checkboxWrapper {\n                background-color: gray;\n                width: 30px;\n                height: 30px;\n                position: relative;\n                border-radius: 2px;\n                margin: 0 auto; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status input[type=\"checkbox\"] {\n                visibility: hidden; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status .checkboxWrapper label {\n                width: 28px;\n                height: 28px;\n                position: absolute;\n                top: 1px;\n                left: 1px;\n                background-color: white; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status .checkboxWrapper label:before {\n                content: '';\n                width: 14px;\n                height: 7px;\n                border: 2px solid white;\n                position: absolute;\n                border-top: 0;\n                border-right: 0;\n                top: 8px;\n                left: 6px;\n                -webkit-transform: rotate(-55deg);\n                        transform: rotate(-55deg);\n                opacity: 0; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status .checkboxWrapper input[type=\"checkbox\"]:checked + label:before {\n                opacity: 1; }\n              .groceryListContainer .listContainer .listBox .listTableContainer table tbody tr .status .checkboxWrapper input[type=\"checkbox\"]:checked + label {\n                background-color: #AF90A9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".toDoListContainer {\n  width: 100%; }\n  .toDoListContainer .formContainer {\n    width: 100%;\n    margin-top: 120px; }\n    .toDoListContainer .formContainer .formBox {\n      width: 75%;\n      margin: 0 auto; }\n      .toDoListContainer .formContainer .formBox input {\n        padding: 20px 20px;\n        font-size: 20px;\n        border: 1ps solid black;\n        background-color: transparent;\n        width: 50%; }\n      .toDoListContainer .formContainer .formBox button {\n        width: 150px;\n        padding: 12px 30px;\n        color: white;\n        background-color: #944654;\n        border: none;\n        font-size: 20px;\n        font-family: 'TrirongThin';\n        letter-spacing: 1px;\n        transition: background-color 1s;\n        border-radius: 2px; }\n        .toDoListContainer .formContainer .formBox button:hover {\n          background-color: #713640;\n          cursor: pointer; }\n      .toDoListContainer .formContainer .formBox .segments {\n        display: inline;\n        padding: 12px; }\n        .toDoListContainer .formContainer .formBox .segments:hover {\n          cursor: pointer; }\n        .toDoListContainer .formContainer .formBox .segments input[type=\"radio\"] {\n          display: none; }\n        .toDoListContainer .formContainer .formBox .segments label {\n          border: 1px solid silver;\n          padding: 10px 28px;\n          margin-right: -5px;\n          background: transparent;\n          cursor: pointer;\n          font-size: 24px;\n          border-radius: 2px; }\n        .toDoListContainer .formContainer .formBox .segments input:checked + label {\n          background: #AF90A9; }\n  .toDoListContainer .listContainer {\n    width: 100%; }\n    .toDoListContainer .listContainer .listBox {\n      width: 75%;\n      margin: 20px auto; }\n      .toDoListContainer .listContainer .listBox table {\n        width: 100%;\n        border-collapse: collapse;\n        border-radius: 2px; }\n        .toDoListContainer .listContainer .listBox table thead {\n          width: 100%; }\n          .toDoListContainer .listContainer .listBox table thead tr {\n            width: 100%;\n            border-bottom: 1px solid black;\n            font-family: 'RubikBold';\n            font-size: 18px; }\n            .toDoListContainer .listContainer .listBox table thead tr .priorityHead {\n              text-align: center;\n              width: 15%; }\n            .toDoListContainer .listContainer .listBox table thead tr .taskHead {\n              text-align: center;\n              width: 70%; }\n            .toDoListContainer .listContainer .listBox table thead tr .statusHead {\n              text-align: center;\n              width: 15%; }\n        .toDoListContainer .listContainer .listBox table tbody {\n          font-family: 'TrirongRegular';\n          font-size: 24px; }\n          .toDoListContainer .listContainer .listBox table tbody tr {\n            border-bottom: 1px solid black;\n            background-color: white; }\n            .toDoListContainer .listContainer .listBox table tbody tr:nth-child(odd) {\n              background-color: transparent; }\n            .toDoListContainer .listContainer .listBox table tbody tr:nth-child(even) {\n              background-color: rgba(0, 0, 0, 0.05); }\n            .toDoListContainer .listContainer .listBox table tbody tr .priority {\n              text-align: center; }\n            .toDoListContainer .listContainer .listBox table tbody tr .task {\n              text-align: center; }\n            .toDoListContainer .listContainer .listBox table tbody tr .status {\n              text-align: center; }\n              .toDoListContainer .listContainer .listBox table tbody tr .status button {\n                cursor: pointer;\n                width: 75px;\n                padding: 5px 7px;\n                border: none;\n                background-color: #944654;\n                color: white;\n                font-family: 'TrirongLight';\n                font-size: 18px;\n                border-radius: 2px;\n                transition: background-color 1s; }\n                .toDoListContainer .listContainer .listBox table tbody tr .status button:hover {\n                  background-color: #713640; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 171 */,
/* 172 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cleaningContainer\">\n    <div class=\"cleaningBox\">\n\n        <div class=\"dailyBox\">\n            <h1>Daily Tasks</h1>\n            <button class=\"submitButtonBig\">Add Task</button>\n        </div>\n\n        <div class=\"weeklyBox\">\n            <h1>Weekly Tasks</h1>\n            <button class=\"submitButtonBig\">Add Task</button>\n        </div>\n\n        <div class=\"monthlyBox\">\n            <h1>Monthly Tasks</h1>\n            <button class=\"submitButtonBig\">Add Task</button>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = "<p>\n  copyright works!\n</p>\n"

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "<div class=\"groceryListContainer\">\n    <div class=\"formContainer\">\n        <div class=\"formBox\">\n            <form>\n                <input type=\"text\" placeholder=\"Add grocery item...\" [(ngModel)]=\"item\" [ngModelOptions]=\"{standalone: true}\" autofocus required>\n                <input type=\"number\" placeholder=\"1\" class=\"counter\" value=\"1\" min=\"0\" max=\"99\" step=\"1\" [(ngModel)]=\"quantity\" [ngModelOptions]=\"{standalone: true}\">\n                <select [(ngModel)]=\"store\" [ngModelOptions]=\"{standalone: true}\">\n                    <option value=\"Aldi\">Aldi</option>\n                    <option value=\"Dunnes\">Dunnes</option>\n                    <option value=\"Tesco\">Tesco</option>\n                    <option value=\"Lidl\">Lidl</option>\n                    <option value=\"SuperValu\">SuperValu</option>\n                </select>\n                <button type=\"submit\" class=\"submitButtonBig\" (click)=\"addGroceryItem()\">Add Item</button>\n            </form>\n        </div>\n        <div class=\"listControlContainer\">\n            <div class=\"listControlBox\">\n                <div class=\"listBar\">\n                    <button type=\"submit\" class=\"submitButtonLong\" (click)=\"clearSelected()\">Clear Selected</button>\n                    <button type=\"submit\" class=\"submitButtonLong\" (click)=\"clearAll()\">Clear All</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"listContainer\">\n            <div class=\"listBox\">\n                <div class=\"listTableContainer\">\n                    <table id=\"groceryTable\">\n                        <thead>\n                            <tr>\n                                <td class=\"statusHead\">Status</td>\n                                <td class=\"storeHead\">Store</td>\n                                <td class=\"itemHead\">Item</td>\n                                <td class=\"quantityHead\">Quantity</td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of groceryList; let i=index\" class=\"listItem\">\n                                <td class=\"status\">\n                                    <div class=\"checkboxWrapper\">\n                                        <input type=\"checkbox\" id=\"checkbox{{i}}\">\n                                        <label for=\"checkbox{{i}}\"></label>\n                                    </div>\n                                </td>\n                                <td class=\"store\">{{ item.store }}</td>\n                                <td class=\"item\">{{ item.item }}</td>\n                                <td class=\"quanity\">{{ item.quantity }}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "<h1>\n  issues works!\n</h1>\n"

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "<h1>\n  privacy works!\n</h1>\n"

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = "<h1>\n  terms works!\n</h1>\n"

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "<div class=\"toDoListContainer\">\n    <div class=\"formContainer\">\n        <div class=\"formBox\">\n            <form>\n                <input type=\"text\" placeholder=\"Add task...\" size=\"40\" [(ngModel)]=\"task\" [ngModelOptions]=\"{standalone: true}\" autofocus required>\n                <ul class=\"segments\">\n                    <input type=\"radio\" name=\"box1\" value=\"!\" id=\"segLow\" [(ngModel)]=\"priority\">\n                    <label for=\"segLow\">!</label>\n                    <input type=\"radio\" name=\"box1\" value=\"!!\" id=\"segMedium\" [(ngModel)]=\"priority\">\n                    <label for=\"segMedium\">!!</label>\n                    <input type=\"radio\" name=\"box1\" value=\"!!!\" id=\"segHigh\" [(ngModel)]=\"priority\">\n                    <label for=\"segHigh\">!!!</label>\n                </ul>\n                <button type=\"submit\" (click)=\"addToDo()\">Add Task</button>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"listContainer\">\n        <div class=\"listBox\">\n            <table>\n                <thead>\n                    <tr>\n                        <td class=\"priorityHead\" (click)=\"sortPriority()\">Priority</td>\n                        <td class=\"taskHead\" (click)=\"sortAlphabeticalTask()\">Task</td>\n                        <td class=\"statusHead\">Status</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let toDo of toDoList; let i=index\" class=\"listItem\">\n                        <td class=\"priority\">{{ toDo.priority }}</td>\n                        <td class=\"task\">{{ toDo.name }}</td>\n                        <td class=\"status\"><button type=\"submit\" (click)=\"removeToDo(i)\">Done</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = "<div class=\"footerBar\">\n    <div class=\"footerLogo\">\n        <h1>HouseControl</h1>\n    </div>\n    <div class=\"footerLinks\">\n        <ul>\n            <li><a routerLink=\"/copyright\">Copyright</a></li>\n            <li><a routerLink=\"/privacy\">Privacy Policy</a></li>\n            <li><a routerLink=\"/terms\">Terms</a></li>\n        </ul>\n    </div>\n</div>"

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerBar\">\n    <div class=\"headerLogo\">\n        <h1><a routerLink=\"/\">HouseControl</a></h1>\n    </div>\n    <div class=\"headerLinks\">\n        <ul>\n            <li><a routerLink=\"/toDo\">To-Do's</a></li>\n            <li><a routerLink=\"/grocery\">Grocery</a></li>\n            <li><a routerLink=\"/cleaning\">Cleaning</a></li>\n            <li><a routerLink=\"/issues\">Issues</a></li>\n            <li><a routerLink=\"/housemates\">Housemates</a></li>\n        </ul>\n    </div>\n</div>"

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n    <div class=\"dynamicContent\">\n        <router-outlet></router-outlet>\n    </div>\n<app-footer-bar></app-footer-bar>"

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-Black.99e5b40f53bee03fd094.ttf";

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-BlackItalic.a96c8f00a7292b398594.ttf";

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-Bold.87b4e0d5acc5093dfca4.ttf";

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-BoldItalic.7f21422cadc0517d3335.ttf";

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-Italic.5ca63c019a27084168dd.ttf";

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-Light.1dc94b26c8096522ad60.ttf";

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-LightItalic.94c2d7e085089b8abde2.ttf";

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-Medium.394a3b3371914d7a65e8.ttf";

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-MediumItalic.ea1121bd23230359189f.ttf";

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rubik-Regular.6c980940392587c8d7d3.ttf";

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Black.7642bc12a7b098fac5c5.ttf";

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-BlackItalic.6d95de881cdd80b3ed2c.ttf";

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Bold.16fd7af8e19e84fece6d.ttf";

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-BoldItalic.4c80c5659ccbce590589.ttf";

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-ExtraBold.728b7a486d35b00e7763.ttf";

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-ExtraBoldItalic.c0930157fb60d8319fc4.ttf";

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-ExtraLight.0f439b7f3c72847e7bbf.ttf";

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-ExtraLightItalic.09faf7b1e74cac8229e1.ttf";

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Italic.5245fc34f527f9e4bf38.ttf";

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Light.2f4ade868c7f5d77a0d3.ttf";

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-LightItalic.071aaadb21e8585953cf.ttf";

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Medium.0994551b80effd865926.ttf";

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-MediumItalic.c7aa5477c6ad34de7278.ttf";

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Regular.2bbbc0ff768198efedf1.ttf";

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-SemiBold.a3e8b4acce83fbfce913.ttf";

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-SemiBoldItalic.9fc7e1ab420221c5ac08.ttf";

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-Thin.99781eb1ac3ebf8c751e.ttf";

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Trirong-ThinItalic.9930b01fc383040b6dac.ttf";

/***/ }),
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ })
]),[241]);
//# sourceMappingURL=main.bundle.js.map