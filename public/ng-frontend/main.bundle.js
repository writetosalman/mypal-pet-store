webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_pal_pet_component__ = __webpack_require__("./src/app/my-pal/pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_pal_pet_view_pet_view_component__ = __webpack_require__("./src/app/my-pal/pet-view/pet-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_pal_pet_edit_pet_edit_component__ = __webpack_require__("./src/app/my-pal/pet-edit/pet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_pal_pet_add_pet_add_component__ = __webpack_require__("./src/app/my-pal/pet-add/pet-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'pets', pathMatch: 'full' },
    { path: 'pets', component: __WEBPACK_IMPORTED_MODULE_2__my_pal_pet_component__["a" /* PetComponent */] },
    { path: 'pets/add', component: __WEBPACK_IMPORTED_MODULE_5__my_pal_pet_add_pet_add_component__["a" /* PetAddComponent */] },
    { path: 'pet/:id', component: __WEBPACK_IMPORTED_MODULE_3__my_pal_pet_view_pet_view_component__["a" /* PetViewComponent */] },
    { path: 'pet/:id/edit', component: __WEBPACK_IMPORTED_MODULE_4__my_pal_pet_edit_pet_edit_component__["a" /* PetEditComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_pal_pet_component__ = __webpack_require__("./src/app/my-pal/pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_pal_pet_service__ = __webpack_require__("./src/app/my-pal/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_pal_pet_listing_pet_listing_component__ = __webpack_require__("./src/app/my-pal/pet-listing/pet-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_pal_pet_add_pet_add_component__ = __webpack_require__("./src/app/my-pal/pet-add/pet-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_pal_pet_list_pet_list_component__ = __webpack_require__("./src/app/my-pal/pet-list/pet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_pal_pet_view_pet_view_component__ = __webpack_require__("./src/app/my-pal/pet-view/pet-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_pal_pet_edit_pet_edit_component__ = __webpack_require__("./src/app/my-pal/pet-edit/pet-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__my_pal_pet_component__["a" /* PetComponent */],
                __WEBPACK_IMPORTED_MODULE_9__my_pal_pet_listing_pet_listing_component__["a" /* PetListingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__my_pal_pet_add_pet_add_component__["a" /* PetAddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__my_pal_pet_list_pet_list_component__["a" /* PetListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__my_pal_pet_view_pet_view_component__["a" /* PetViewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__my_pal_pet_edit_pet_edit_component__["a" /* PetEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__my_pal_pet_service__["a" /* PetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/my-pal/pet-add/pet-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add a new pet</h3>\n\n<form id=\"idForm\" (submit)=\"onSubmit(salForm.value)\" [formGroup]=\"salForm\">\n    <div class=\"form-group\">\n      <label for=\"idBreed\">Breed</label>\n      <input type=\"text\" class=\"form-control\" id=\"idBreed\" placeholder=\"Pet's breed\" required\n      [formControl]=\"salForm.controls['breed']\">\n      \n      <span *ngIf=\"breed.hasError('required') && breed.touched\" class=\"badge badge-danger\">Pet's breed is required</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idAge\">Age (months)</label>\n      <input type=\"number\" class=\"form-control\" id=\"idAge\" placeholder=\"Age (in months)\" required\n      [formControl]=\"salForm.controls['age']\">\n\n      <span *ngIf=\"!age.valid && age.touched\" class=\"badge badge-danger\">Pet's age should be a number</span>\n      <span *ngIf=\"age.hasError('required') && age.touched\" class=\"badge badge-danger\">Pet's age is required</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idName\">Name  (optional)</label>\n      <input type=\"text\" class=\"form-control\" id=\"idName\" placeholder=\"Pet name (optional)\"\n      [formControl]=\"salForm.controls['name']\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idPrice\">Price (AU$)</label>\n      <input type=\"text\" class=\"form-control\" id=\"idPrice\" placeholder=\"Price\" required\n      [formControl]=\"salForm.controls['price']\">\n\n      <span *ngIf=\"!price.valid && price.touched\" class=\"badge badge-danger\">Price should be of format 9.99 or 9</span>\n      <span *ngIf=\"price.hasError('required') && price.touched\" class=\"badge badge-danger\">Price is required</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idListDate\">List Date</label>\n      <input type=\"datetime-local\" class=\"form-control\" id=\"idListDate\" placeholder=\"List Date\" required\n      [formControl]=\"salForm.controls['listDate']\">\n\n      <span *ngIf=\"!listDate.valid && listDate.touched\" class=\"badge badge-danger\">Please enter a valid list date. Format DD-MMM-YYYY HH:mm</span>\n      <span *ngIf=\"listDate.hasError('required') && listDate.touched\" class=\"badge badge-danger\">List date is required</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idSaleDate\">Sale Date (optional)</label>\n      <input type=\"datetime-local\" class=\"form-control\" id=\"idSaleDate\" placeholder=\"\"\n      [formControl]=\"salForm.controls['saleDate']\">\n    </div>\n    <div class=\"form-group\">\n      <div *ngIf=\"successMsg\" class=\"alert alert-success\" [innerHTML]=\"this.successMsg\"></div>\n      <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" [innerHTML]=\"this.errorMsg\"></div>\n\n      <button class=\"btn btn-primary\"> Save </button>\n      <fa *ngIf=\"loading\" name=\"spinner\" animation=\"spin\" size=\"2x\"></fa>\n\n    </div>\n\n</form>\n\n<a href=\"\" (click)=\"goBack();\">&laquo; Back</a>\n"

/***/ }),

/***/ "./src/app/my-pal/pet-add/pet-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_service__ = __webpack_require__("./src/app/my-pal/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet__ = __webpack_require__("./src/app/my-pal/pet.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetAddComponent = (function () {
    function PetAddComponent(_petService, _fb, _location) {
        this._petService = _petService;
        this._fb = _fb;
        this._location = _location;
        this.pet = new __WEBPACK_IMPORTED_MODULE_4__pet__["a" /* Pet */](0, '', 0, '', 0, 0, 0);
        this.errorMsg = '';
        this.successMsg = '';
        this.loading = false;
        // Get current date
        var strDate = new Date().toISOString().slice(0, 16);
        //console.log('Date', strDate);
        // Add some validation
        this.salForm = _fb.group({
            'breed': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'age': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'name': [''],
            'price': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'listDate': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'saleDate': [''],
        });
        // We assign this.name after we’ve created ksForm with the FormBuilder
        this.breed = this.salForm.controls['breed'];
        this.age = this.salForm.controls['age'];
        this.name = this.salForm.controls['name'];
        this.price = this.salForm.controls['price'];
        this.listDate = this.salForm.controls['listDate'];
        this.saleDate = this.salForm.controls['saleDate'];
    }
    PetAddComponent.prototype.ngOnInit = function () {
    };
    /**
     * This function handles the SUBMIT BUTTON event
     * @param frm       any
     *
     */
    PetAddComponent.prototype.onSubmit = function (frm) {
        // console.log('Form submitted with values', frm);
        // console.log('Single value', frm.breed);
        var _this = this;
        if (frm.breed === '') {
            this.errorMsg = 'Breed is required. Cannot be empty.';
            return;
        }
        this.loading = true;
        this.errorMsg = '';
        this.successMsg = '';
        // Setup form data
        var formData = new FormData();
        formData.append('breed', frm.breed);
        formData.append('age', frm.age);
        formData.append('name', frm.name);
        formData.append('price', frm.price);
        formData.append('list_date', frm.listDate); // @todo Salman make sure date is converted fine
        formData.append('sale_date', frm.saleDate);
        // Call the service for login
        this._petService.addPet(formData).subscribe(function (success) {
            _this.pet = success;
            _this.successMsg = 'Pet added to store successfully';
        }, function (error) {
            var res = JSON.parse(error._body);
            //console.log(res.error);
            _this.errorMsg = res.error;
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    };
    /**
     * This function is used to handle the GO BACK event
     */
    PetAddComponent.prototype.goBack = function () {
        this._location.back();
    };
    PetAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pet-add',
            template: __webpack_require__("./src/app/my-pal/pet-add/pet-add.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
    ], PetAddComponent);
    return PetAddComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=pet-add.component.js.map

/***/ }),

/***/ "./src/app/my-pal/pet-edit/pet-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Edit pet</h3>\n\n<div *ngIf=\"loading\">\n  <fa *ngIf=\"loading\" name=\"spinner\" animation=\"spin\" size=\"2x\"></fa>\n</div>\n\n<form id=\"idForm\" (submit)=\"onSubmitEdit(salForm.value)\" [formGroup]=\"salForm\">\n  <div class=\"form-group\">\n    <label for=\"idBreed\">Breed</label>\n    <input type=\"text\" class=\"form-control\" id=\"idBreed\" placeholder=\"Pet's breed\" required\n           [formControl]=\"salForm.controls['breed']\">\n\n    <span *ngIf=\"breed.hasError('required') && breed.touched\" class=\"badge badge-danger\">Pet's breed is required</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"idAge\">Age (months)</label>\n    <input type=\"number\" class=\"form-control\" id=\"idAge\" placeholder=\"Age (in months)\" required\n           [formControl]=\"salForm.controls['age']\">\n\n    <span *ngIf=\"!age.valid && age.touched\" class=\"badge badge-danger\">Pet's age should be a number</span>\n    <span *ngIf=\"age.hasError('required') && age.touched\" class=\"badge badge-danger\">Pet's age is required</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"idName\">Name  (optional)</label>\n    <input type=\"text\" class=\"form-control\" id=\"idName\" placeholder=\"Pet name (optional)\"\n           [formControl]=\"salForm.controls['name']\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"idPrice\">Price (AU$)</label>\n    <input type=\"text\" class=\"form-control\" id=\"idPrice\" placeholder=\"Price\" required\n           [formControl]=\"salForm.controls['price']\">\n\n    <span *ngIf=\"!price.valid && price.touched\" class=\"badge badge-danger\">Price should be of format 9.99 or 9</span>\n    <span *ngIf=\"price.hasError('required') && price.touched\" class=\"badge badge-danger\">Price is required</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"idListDate\">List Date</label>\n    <input type=\"datetime-local\" class=\"form-control\" id=\"idListDate\" placeholder=\"List Date\" required\n           [formControl]=\"salForm.controls['listDate']\">\n\n    <span *ngIf=\"!listDate.valid && listDate.touched\" class=\"badge badge-danger\">Please enter a valid list date. Format DD-MMM-YYYY HH:mm</span>\n    <span *ngIf=\"listDate.hasError('required') && listDate.touched\" class=\"badge badge-danger\">List date is required</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"idSaleDate\">Sale Date (optional)</label>\n    <input type=\"datetime-local\" class=\"form-control\" id=\"idSaleDate\" placeholder=\"\"\n           [formControl]=\"salForm.controls['saleDate']\">\n  </div>\n  <div class=\"form-group\">\n    <div *ngIf=\"successMsg\" class=\"alert alert-success\" [innerHTML]=\"this.successMsg\"></div>\n    <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" [innerHTML]=\"this.errorMsg\"></div>\n    <div class=\"row\">\n      <fa *ngIf=\"isBtnPressed\" name=\"spinner\" animation=\"spin\" size=\"2x\"></fa>\n    </div>\n    <div class=\"\">\n      <button class=\"btn btn-primary\"> Save </button>\n    </div>\n  </div>\n\n</form>\n\n\n<a href=\"\" (click)=\"goBack();\">&laquo; Back</a>\n"

/***/ }),

/***/ "./src/app/my-pal/pet-edit/pet-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet_service__ = __webpack_require__("./src/app/my-pal/pet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetEditComponent = (function () {
    function PetEditComponent(_petService, _fb, _route, _location) {
        this._petService = _petService;
        this._fb = _fb;
        this._route = _route;
        this._location = _location;
        this.successMsg = '';
        this.isBtnPressed = false;
        this.loading = false;
        this.isBtnPressed = false;
        this.errorMsg = '';
        // Add some validation
        this.salForm = this._fb.group({
            'breed': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'age': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'name': [''],
            'price': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'listDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'saleDate': [''],
        });
        // We assign this.name after we’ve created Form with the FormBuilder
        this.breed = this.salForm.controls['breed'];
        this.age = this.salForm.controls['age'];
        this.name = this.salForm.controls['name'];
        this.price = this.salForm.controls['price'];
        this.listDate = this.salForm.controls['listDate'];
        this.saleDate = this.salForm.controls['saleDate'];
    }
    PetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get pet id
        this._route.params.forEach(function (params) {
            _this.petId = params['id'];
            console.log('Pet ID ' + _this.petId);
            _this.getPet(_this.petId);
        });
    };
    /**
     * This function gets a pet from the xml api
     * @param id        number
     *
     */
    PetEditComponent.prototype.getPet = function (id) {
        var _this = this;
        this.loading = true;
        // Get pet details from api
        this._petService.getPet(id).subscribe(function (success) {
            _this.loading = false;
            _this.pet = success;
            console.log('getPet', _this.pet);
            // now we have got the pet object build the form
            _this.setFormValues();
        }, function (error) {
            console.log('getPet() Error: ', error);
            if (error.status === 0) {
                _this.errorMsg = 'Unknown error happened while connecting to api.';
            }
            else {
                var res = JSON.parse(error._body);
                _this.errorMsg = res.error;
            }
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    };
    /**
     * This function saves value to the formBuilder from the pet object
     */
    PetEditComponent.prototype.setFormValues = function () {
        var strListDate = new Date(this.pet.list_date).toISOString().slice(0, 16);
        var strSaleDate = this.pet.sale_date ? new Date(this.pet.sale_date).toISOString().slice(0, 16) : '';
        // We assign this.name after we’ve created ksForm with the FormBuilder
        this.salForm.controls['breed'].setValue(this.pet.breed);
        this.salForm.controls['age'].setValue(this.pet.age);
        this.salForm.controls['name'].setValue(this.pet.name);
        this.salForm.controls['price'].setValue(this.pet.price);
        this.salForm.controls['listDate'].setValue(strListDate);
        this.salForm.controls['saleDate'].setValue(strSaleDate);
    };
    /**
     * This function is used to handle the GO BACK event
     */
    PetEditComponent.prototype.goBack = function () {
        this._location.back();
    };
    /**
     * This is the function that handles the submit event for the Edit form
     * @param  frm      any
     */
    PetEditComponent.prototype.onSubmitEdit = function (frm) {
        // console.log('Edit Form submitted with values', frm);
        // console.log('Single value', frm.breed);
        var _this = this;
        if (frm.breed === '') {
            this.errorMsg = 'Breed is required. Cannot be empty.';
            return;
        }
        this.isBtnPressed = true;
        this.errorMsg = '';
        this.successMsg = '';
        // Setup put data
        this.pet.breed = frm.breed;
        this.pet.age = frm.age;
        this.pet.name = frm.name;
        this.pet.price = frm.price;
        this.pet.list_date = frm.listDate;
        this.pet.sale_date = frm.saleDate;
        // Call the service for login
        this._petService.editPet(this.petId, this.pet).subscribe(function (success) {
            _this.pet = success;
            _this.successMsg = 'Pet edited successfully';
        }, function (error) {
            var res = JSON.parse(error._body);
            // console.log(res.error);
            _this.errorMsg = res.error;
        }, function () {
            _this.isBtnPressed = false;
        });
    };
    PetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pet-edit',
            template: __webpack_require__("./src/app/my-pal/pet-edit/pet-edit.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
    ], PetEditComponent);
    return PetEditComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=pet-edit.component.js.map

/***/ }),

/***/ "./src/app/my-pal/pet-list/pet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-4\"><a [routerLink]=\"['/pet', pet.id]\" >{{pet.breed}}</a></div>\n    <div class=\"col-3\">{{pet.name}}</div>\n    <div class=\"col-2\"><a [routerLink]=\"['/pet', pet.id, 'edit']\" >Edit</a></div>\n    <div class=\"col-3\"><a href=\"\" (click)=\"handleDelete()\">{{lblDelete}}</a></div>\n</div>\n<div *ngIf=\"errorMsg\" class=\"alert alert-danger\" [innerHTML]=\"this.errorMsg\"></div>\n"

/***/ }),

/***/ "./src/app/my-pal/pet-list/pet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet_service__ = __webpack_require__("./src/app/my-pal/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet__ = __webpack_require__("./src/app/my-pal/pet.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetListComponent = (function () {
    function PetListComponent(_petService) {
        this._petService = _petService;
        this.lblDelete = 'Delete';
    }
    PetListComponent.prototype.ngOnInit = function () {
    };
    /**
     * This function handles the Delete form submit event
     * @returns {boolean}
     */
    PetListComponent.prototype.handleDelete = function () {
        //console.log('handleDelete()', this.pets);
        var _this = this;
        this.lblDelete = 'Deleting';
        this._petService.deletePet(this.pet.id).subscribe(function (success) {
            _this.lblDelete = 'Deleted';
            //console.log('Pet', this.pet);
            // Remove from array
            setTimeout(function () {
                _this.removeDeletePet(_this.pet.id);
            }, 400);
        }, function (error) {
            console.log('getPet() Error: ', error);
            if (error.status === 0) {
                _this.errorMsg = 'Unknown error happened while connecting to api.';
            }
            else {
                var res = JSON.parse(error._body);
                _this.errorMsg = res.error;
            }
        });
        return false;
    };
    /**
     * This is the internal function. It updates the Pets array and remove the deleted one
     * @param id
     */
    PetListComponent.prototype.removeDeletePet = function (id) {
        var index = this.pets.map(function (e) {
            return e.id;
        }).indexOf(id);
        if (index !== -1) {
            this.pets.splice(index, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pet__["a" /* Pet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pet__["a" /* Pet */]) === "function" && _a || Object)
    ], PetListComponent.prototype, "pet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PetListComponent.prototype, "pets", void 0);
    PetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pet-list',
            template: __webpack_require__("./src/app/my-pal/pet-list/pet-list.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pet_service__["a" /* PetService */]) === "function" && _b || Object])
    ], PetListComponent);
    return PetListComponent;
    var _a, _b;
}());

//# sourceMappingURL=pet-list.component.js.map

/***/ }),

/***/ "./src/app/my-pal/pet-listing/pet-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:20px\"></div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h3>List of Pets rescued</h3>\n  </div>\n</div>\n\n<div *ngIf=\"loading\">\n  <fa name=\"spinner\" animation=\"spin\" size=\"2x\"></fa>\n</div>\n\n<div *ngIf=\"errorMsg\" class=\"alert alert-info\" role=\"alert\" [innerHTML]=\"this.errorMsg\">\n</div>\n\n<div *ngIf=\"loading==false && pets\">\n  <div class=\"row cssOdd\">\n    <div class=\"col-4\"><b>Breed</b></div>\n    <div class=\"col-3\"><b>Name</b></div>\n    <div class=\"col-2\"></div>\n    <div class=\"col-3\"></div>\n  </div>\n  <app-pet-list\n  *ngFor=\"let pet of pets\n  let index = index;\n  let isOdd = odd;\n  let isEven= even;\"\n  [pet] =\"pet\"\n  [pets]=\"pets\"\n\n  [ngClass]=\"{ cssOdd: isOdd, cssEven: isEven }\"\n  ></app-pet-list>\n</div>"

/***/ }),

/***/ "./src/app/my-pal/pet-listing/pet-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet_service__ = __webpack_require__("./src/app/my-pal/pet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is the component to get all the pets and pass to child PetListComponent to draw list
 *
 */


var PetListingComponent = (function () {
    function PetListingComponent(_petService) {
        this._petService = _petService;
        this.pets = [];
        this.loading = false;
        this.errorMsg = '';
        this.loading = false;
        this.errorMsg = '';
    }
    /**
     * All heavy lifting is done on the ngOnInit and not in construction.
     * Get all the pets
     *
     */
    PetListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // start loading
        this.loading = true;
        this._petService.getPets().subscribe(function (success) {
            _this.pets = success;
            _this.loading = false;
            // console.log('getPets()', this.pets);
        }, function (error) {
            var res = JSON.parse(error._body);
            _this.pets = [];
            _this.errorMsg = res.error;
            _this.loading = false;
            // console.log('getPets()', this.errorMsg);
        }, function () {
            _this.loading = false;
        });
    };
    PetListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pet-listing',
            template: __webpack_require__("./src/app/my-pal/pet-listing/pet-listing.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pet_service__["a" /* PetService */]) === "function" && _a || Object])
    ], PetListingComponent);
    return PetListingComponent;
    var _a;
}());

//# sourceMappingURL=pet-listing.component.js.map

/***/ }),

/***/ "./src/app/my-pal/pet-view/pet-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Pet's Details</h2>\n\n<fa *ngIf=\"loading\" name=\"spinner\" animation=\"spin\" size=\"2x\"></fa>\n<div *ngIf=\"errorMsg\" class=\"alert alert-danger\" [innerHTML]=\"this.errorMsg\"></div>\n\n<div *ngIf=\"loading == false && pet !== null\">\n  <div class=\"row\">\n    <div class=\"col-6\">Breed</div>\n    <div class=\"col-6\"><b>{{pet.breed}}</b></div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">Age</div>\n    <div class=\"col-6\">{{pet.age}} months</div>\n  </div>\n\n  <div *ngIf=\"pet !== null\" class=\"row\">\n    <div class=\"col-6\">Name</div>\n    <div class=\"col-6\">{{pet.name}}</div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">Price</div>\n    <div class=\"col-6\">AU$ {{pet.price}}</div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">List Date</div>\n    <div class=\"col-6\">{{ pet.list_date }}</div>\n  </div>\n\n  <div *ngIf=\"pet.sale_date!==null\" class=\"row\">\n    <div class=\"col-6\">Sale Date</div>\n    <div class=\"col-6\">{{ pet.sale_date }}</div>\n  </div>\n</div>\n\n<a href=\"\" (click)=\"goBack();\">&laquo; Back</a>\n"

/***/ }),

/***/ "./src/app/my-pal/pet-view/pet-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_service__ = __webpack_require__("./src/app/my-pal/pet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This component is used to draw a single pet view
 *
 */




var PetViewComponent = (function () {
    function PetViewComponent(_petService, _route, _location) {
        this._petService = _petService;
        this._route = _route;
        this._location = _location;
        this.loading = false;
        this.errorMsg = '';
    }
    PetViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get pet id
        this._route.params.forEach(function (params) {
            _this.petId = params['id'];
            console.log('Pet ID ' + _this.petId);
            _this.getPet(_this.petId);
        });
    };
    /**
     * This is the function that get a single pet and display in view
     * @param id        Number
     */
    PetViewComponent.prototype.getPet = function (id) {
        var _this = this;
        this.loading = true;
        // Get pet details from api
        this._petService.getPet(id).subscribe(function (success) {
            _this.loading = false;
            _this.pet = success;
            console.log('Pet', _this.pet);
        }, function (error) {
            console.log('getPet() Error: ', error);
            if (error.status === 0) {
                _this.errorMsg = 'Unknown error happened while connecting to api.';
            }
            else {
                var res = JSON.parse(error._body);
                _this.errorMsg = res.error;
            }
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    };
    /**
     * This function is used to handle the GO BACK event
     */
    PetViewComponent.prototype.goBack = function () {
        this._location.back();
    };
    PetViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pet-view',
            template: __webpack_require__("./src/app/my-pal/pet-view/pet-view.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _c || Object])
    ], PetViewComponent);
    return PetViewComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=pet-view.component.js.map

/***/ }),

/***/ "./src/app/my-pal/pet.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-12\">\n    <app-pet-listing></app-pet-listing>\n  </div>\n</div>\n\n<br/><a [routerLink]=\"['/pets/add']\" >Add New Pet</a>\n"

/***/ }),

/***/ "./src/app/my-pal/pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PetComponent = (function () {
    function PetComponent() {
    }
    PetComponent.prototype.ngOnInit = function () {
    };
    PetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pet',
            template: __webpack_require__("./src/app/my-pal/pet.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PetComponent);
    return PetComponent;
}());

//# sourceMappingURL=pet.component.js.map

/***/ }),

/***/ "./src/app/my-pal/pet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is the Pet Service
 * It connects with the XML API to get the data
 *
 */






var PetService = (function () {
    // constructor so that we can get instance of http & router
    function PetService(http, _router) {
        this.http = http;
        this._router = _router;
        this.petUrl = 'http://localhost:8000/api/'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    /**
     * This function gets all the pets from the database
     *
     * @returns         {Observable<R>}
     */
    PetService.prototype.getPets = function () {
        return this.http.get(this.petUrl + 'pets')
            .map(function (response) { return response.json(); });
    };
    /**
     * This function get details about a single pet from database
     * @param id        number
     * @returns         {Observable<R>}
     */
    PetService.prototype.getPet = function (id) {
        var url = this.petUrl + 'pet/' + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    /**
     * This function deletes a single pet from the database
     * @param id        number
     * @returns         {Observable<R>}
     */
    PetService.prototype.deletePet = function (id) {
        var url = this.petUrl + 'pet/' + id;
        return this.http.delete(url, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    /**
     * This is the function to edit a single pet from database
     * @param petId     number
     * @param pet       pet object
     * @returns         {Observable<R>}
     */
    PetService.prototype.editPet = function (petId, pet) {
        //console.log('editPet', JSON.stringify(pet));
        return this.http
            .put(this.petUrl + 'pet/' + petId, JSON.stringify(pet), { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    /**
     * This is the function to add a pet to the database
     * @param   frm     FormData
     * @returns         {Observable<R>}
     */
    PetService.prototype.addPet = function (frm) {
        return this.http
            .post(this.petUrl + 'pet', frm)
            .map(function (response) { return response.json(); });
    };
    PetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], PetService);
    return PetService;
    var _a, _b;
}());

//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ "./src/app/my-pal/pet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
/**
 * This is the pet class
 * It holds all the pet attributes
 *
 */
var Pet = (function () {
    function Pet(id, breed, age, name, price, list_date, sale_date) {
        this.id = id;
        this.breed = breed;
        this.age = age;
        this.name = name;
        this.price = price;
        this.list_date = list_date;
        this.sale_date = sale_date;
    }
    return Pet;
}());

//# sourceMappingURL=pet.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map