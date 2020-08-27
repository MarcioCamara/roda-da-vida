"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var chart_js_1 = require("chart.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = false;
        this.showResults = false;
        this.showTest = false;
        this.showHome = true;
        this.min = 0;
        this.max = 10;
        this.mid = parseFloat(((this.max - this.min) / 2).toFixed(5));
        this.preHighLight = false;
        this.nextHighLight = false;
        this.slider = 0;
        this.index = 0;
        this.disable = false;
        this.roda = {};
        this.rodaFinal = {};
    }
    Object.defineProperty(AppComponent.prototype, "sliderValue", {
        get: function () {
            return this.slider;
        },
        set: function (value) {
            this.slider = value;
            this.highlightIcon();
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.slider = 0;
                        return [4 /*yield*/, this.resetValues()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.resetValues = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.rodaFinal = {
                saude: 0,
                intelectual: 0,
                emocional: 0,
                realizacao: 0,
                financeiro: 0,
                contribuicaoSocial: 0,
                familia: 0,
                amoroso: 0,
                vidaSocial: 0,
                diversao: 0,
                felicidade: 0,
                espiritualidade: 0
            };
            _this.roda = {
                saude: [0, 0, 0, 0, 0],
                intelectual: [0, 0, 0, 0, 0],
                emocional: [0, 0, 0, 0, 0],
                realizacao: [0, 0, 0, 0, 0],
                financeiro: [0, 0, 0, 0, 0],
                contribuicaoSocial: [0, 0, 0],
                familia: [0, 0, 0, 0, 0],
                amoroso: [0, 0, 0, 0, 0],
                vidaSocial: [0, 0, 0, 0],
                diversao: [0, 0, 0, 0, 0],
                felicidade: [0, 0, 0, 0, 0],
                espiritualidade: [0, 0, 0, 0]
            };
        });
    };
    AppComponent.prototype.highlightIcon = function () {
        var lower = this.slider >= this.mid;
        this.preHighLight = !lower;
        this.nextHighLight = lower;
    };
    AppComponent.prototype.onIndexChange = function (index) {
        this.index = index;
    };
    AppComponent.prototype.onDoneTest = function () {
        var calculateAverage = function (array) { return array.reduce(function (a, b) { return a + b; }) / array.length; };
        this.rodaFinal = {
            datasets: [
                {
                    data: [
                        Math.round(calculateAverage(this.roda.saude)),
                        Math.round(calculateAverage(this.roda.intelectual)),
                        Math.round(calculateAverage(this.roda.emocional)),
                        Math.round(calculateAverage(this.roda.realizacao)),
                        Math.round(calculateAverage(this.roda.financeiro)),
                        Math.round(calculateAverage(this.roda.contribuicaoSocial)),
                        Math.round(calculateAverage(this.roda.familia)),
                        Math.round(calculateAverage(this.roda.amoroso)),
                        Math.round(calculateAverage(this.roda.vidaSocial)),
                        Math.round(calculateAverage(this.roda.diversao)),
                        Math.round(calculateAverage(this.roda.felicidade)),
                        Math.round(calculateAverage(this.roda.espiritualidade)),
                    ],
                    backgroundColor: [
                        'rgb(22, 98, 239)',
                        'rgb(96, 120, 210)',
                        'rgb(218, 191, 186)',
                        'rgb(198, 35, 18)',
                        'rgb(61, 47, 40)',
                        'rgb(120, 46, 71)',
                        'rgb(125, 176, 124)',
                        'rgb(52, 65, 46)',
                        'rgb(5, 157, 205)',
                        'rgb(160, 104, 235)',
                        'rgb(210, 6, 84)',
                        'rgb(180, 94, 182)',
                    ]
                }
            ],
            labels: [
                'Saúde',
                'Desenvolvimento Intelectual',
                'Equilíbrio Emocional',
                'Realização e Propósito',
                'Recursos Financeiros',
                'Contribuição Social',
                'Família',
                'Relacionamento Amoroso',
                'Vida Social',
                'Hobbies e Diversão',
                'Plenitude e Felicidade',
                'Espritualidade',
            ]
        };
        this.showResults = true;
        this.showHome = false;
        this.showTest = false;
        this.createChart();
    };
    AppComponent.prototype.createChart = function () {
        this.chart = new chart_js_1.Chart(this.chartRef.nativeElement, {
            type: 'polarArea',
            data: this.rodaFinal,
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: false
                        }],
                    yAxes: [{
                            display: false
                        }]
                }
            }
        });
    };
    AppComponent.prototype.resetTest = function () {
        this.resetValues();
        this.showTest = true;
        this.showResults = false;
        this.showHome = false;
    };
    __decorate([
        core_1.ViewChild('polarChart', { static: true })
    ], AppComponent.prototype, "chartRef");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
