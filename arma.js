"use strict";
exports.__esModule = true;
var arma = /** @class */ (function () {
    function arma(projeteis, capacidade) {
        this.capacidade = capacidade;
        this.municoesNoCarregador = projeteis;
    }
    arma.prototype.atirar = function (N) {
        if (this.municoesNoCarregador == 0)
            console.log("*click click*");
        else {
            this.municoesNoCarregador = this.municoesNoCarregador - N;
            console.log("BANG");
        }
    };
    arma.prototype.recarregar = function () {
        this.municoesNoCarregador = this.capacidade;
        console.log("*CLICK, CLACK, CA-TCHIN!*");
    };
    arma.prototype.informarBalas = function () {
        console.log("*CLICK* Ainda tem " + this.municoesNoCarregador + "munições carregadas!");
    };
    return arma;
}());
exports.arma = arma;
