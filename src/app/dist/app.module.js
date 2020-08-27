"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var icons_provider_module_1 = require("./icons-provider.module");
var ng_zorro_antd_1 = require("ng-zorro-antd");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var pt_1 = require("@angular/common/locales/pt");
common_1.registerLocaleData(pt_1["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                icons_provider_module_1.IconsProviderModule,
                ng_zorro_antd_1.NgZorroAntdModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [{ provide: ng_zorro_antd_1.NZ_I18N, useValue: ng_zorro_antd_1.pt_BR }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
