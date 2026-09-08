"use strict";
exports.__esModule = true;
var medico = /** @class */ (function () {
    function medico(nome1, cpf1, nascimento1) {
        this.nome = nome1;
        this.cpf = cpf1;
        this.nascimento = nascimento1;
    }
    medico.prototype.agendamento = function () {
        console.log("dingus");
        console.log(this.nome + " " + this.cpf + " " + this.nascimento);
    };
    medico.prototype.medicina = function () {
        console.log("Medicado");
    };
    return medico;
}());
exports.medico = medico;
