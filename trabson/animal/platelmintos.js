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
var animal_1 = require("./animal");
var platelminto = /** @class */ (function (_super) {
    __extends(platelminto, _super);
    function platelminto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    platelminto.prototype.definirNome = function (nome) {
        this.nomeDoAnimal = nome;
    };
    platelminto.prototype.fazerCoisa = function () {
        console.log("Bepis " + this.nomeDoAnimal);
    };
    return platelminto;
}(animal_1.animal));
exports.platelminto = platelminto;
