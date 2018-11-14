"use strict";
exports.__esModule = true;
var animal = /** @class */ (function () {
    /*Construtor da classe
    Para que o animal seja criado,
    quero que defina a quantidade
    de olhos e dentes*/
    function animal() {
    }
    animal.prototype.definirNome = function (nome) {
        this.nomeDoAnimal = nome;
    };
    animal.prototype.definirOlhos = function (numero) {
        this.quantidadeDeOlhos = numero;
    };
    animal.prototype.definirDentes = function (numero) {
        this.quantidadeDeDentes = numero;
    };
    animal.prototype.definirTipo = function (tipo) {
        this.tipoDeAnimal = tipo;
    };
    return animal;
}());
exports.animal = animal;
