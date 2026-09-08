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
var pessoa_1 = require("./pessoa");
var usuario = /** @class */ (function (_super) {
    __extends(usuario, _super);
    function usuario(nome1, cpf1, nascimento1) {
        var _this = _super.call(this) || this;
        _this.nome = nome1;
        _this.cpf = cpf1;
        _this.nascimento = nascimento1;
        return _this;
    }
    usuario.prototype.agendamento = function () {
        console.log("bepis");
        console.log(this.nome + " " + this.cpf + " " + this.nascimento);
    };
    return usuario;
}(pessoa_1.pessoa));
exports.usuario = usuario;
