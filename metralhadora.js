"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var arma_1 = require("./arma");
var metranca = /** @class */ (function (_super) {
    __extends(metranca, _super);
    function metranca(projeteis, capacidade, TPS) {
        var _this = _super.call(this, projeteis, capacidade) || this;
        _this.capacidade = capacidade;
        _this.municoesNoCarregador = projeteis;
        _this.tirosPorSegundo = TPS;
        return _this;
    }
    metranca.prototype.atirar = function (N) {
        if (this.municoesNoCarregador == 0)
            console.log("*click click*");
        else {
            if (N != 0) {
                for (var i = 0; i < N; i++) {
                    if (this.municoesNoCarregador != 0) {
                        console.log("*CLANK*");
                        this.municoesNoCarregador -= 1;
                    }
                    else {
                        console.log("*click click*");
                    }
                }
            }
            else {
                for (var i = 0; i < this.tirosPorSegundo; i++) {
                    if (this.municoesNoCarregador != 0) {
                        console.log("*CLANK*");
                        this.municoesNoCarregador -= 1;
                    }
                    else {
                        console.log("*click click*");
                    }
                }
                console.log("I AM FUCKING RAMBOOOOOOOOOOOOO");
            }
        }
    };
    return metranca;
}(arma_1.arma));
exports.metranca = metranca;
