"use strict";
exports.__esModule = true;
var pessoa = /** @class */ (function () {
    function pessoa() {
    }
    pessoa.prototype.agendamento = function () {
        console.log("dong");
        console.log(this.nome + " " + this.cpf + " " + this.nascimento);
    };
    return pessoa;
}());
exports.pessoa = pessoa;
