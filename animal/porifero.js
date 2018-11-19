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
var invertebrado = /** @class */ (function (_super) {
    __extends(invertebrado, _super);
    function invertebrado(type, qtdDentes, qtdOlhos, nome, tipo, qtdPoros) {
        var _this = _super.call(this, qtdDentes, qtdOlhos, nome, tipo) || this;
        if (type == 1) {
            _this.quantidadeDePoros = qtdPoros;
            _this.quantidadeDeOlhos = 0;
            _this.tipoDeAnimal = "Porífero";
        }
        else {
            _this.quantidadeDePoros = null;
            _this.quantidadeDeOlhos = qtdOlhos;
            _this.tipoDeAnimal = "Platelminto";
        }
        _this.quantidadeDeDentes = null;
        _this.nomeDoAnimal = nome;
        _this.type = type;
        return _this;
    }
    invertebrado.prototype.fazerHamburguer = function () {
        if (this.type == 1) {
            console.log("*flips burger*");
        }
        else {
            console.log("apenas poríferos fazem isso");
        }
    };
    invertebrado.prototype.fotossintese = function () {
        if (this.type == 1) {
            console.log("FOTOSSÍNTESE");
        }
        else {
            console.log("apenas poríferos fazem isso");
        }
    };
    invertebrado.prototype.uuuuh = function () {
        if (this.type == 2) {
            for (var i = 1; i > 0; i++) {
                console.log("END MY EXISTANCE");
            }
        }
        else {
            console.log("apenas platelmintos fazem isso");
        }
    };
    invertebrado.prototype.fazerCoisa = function () {
        if (this.type == 2) {
            console.log("Bepis " + this.nomeDoAnimal);
        }
        else {
            console.log("apenas platelmintos fazem isso");
        }
    };
    return invertebrado;
}(animal_1.animal));
exports.invertebrado = invertebrado;
