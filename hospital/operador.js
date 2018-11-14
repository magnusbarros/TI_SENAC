"use strict";
exports.__esModule = true;
var operador = /** @class */ (function () {
    function operador(nome1, cpf1, nascimento1) {
        this.nome = nome1;
        this.cpf = cpf1;
        this.nascimento = nascimento1;
    }
    operador.prototype.agendamento = function () {
        console.log("bepis");
        console.log(this.nome + " " + this.cpf + " " + this.nascimento);
    };
    operador.prototype.consulta = function () {
        console.log("Consultado");
    };
    return operador;
}());
exports.operador = operador;
