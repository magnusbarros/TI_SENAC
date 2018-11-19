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
var vertebrados_1 = require("./vertebrados");
var peixe = /** @class */ (function (_super) {
    __extends(peixe, _super);
    function peixe(qtdDentes, qtdOlhos, nome, tipo, BONES, aguas) {
        var _this = _super.call(this, qtdDentes, qtdOlhos, nome, tipo, BONES) || this;
        _this.tipoAgua = aguas;
        return _this;
    }
    peixe.prototype.nadar = function () {
        console.log("*SWIMS AWAY*");
    };
    peixe.prototype.pular = function () {
        console.log("Peixes podem pular?");
    };
    return peixe;
}(vertebrados_1.vertebrado));
exports.peixe = peixe;
