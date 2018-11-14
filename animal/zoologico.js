"use strict";
exports.__esModule = true;
var zoo = /** @class */ (function () {
    /*Todo parâmetro e/ou atributo
    definido no início do meu método
    ou função só poderá ser acessado
    por ele mesmo
    */
    function zoo(end, list) {
        this.listaDeAnimais = list;
        this.endereco = end;
    }
    /* definirEndereco(end: string): void{
         this.endereco = end
     }*/
    zoo.prototype.mostrarEndereco = function () {
        return this.endereco;
    };
    zoo.prototype.mostrarAnimais = function () {
        return this.listaDeAnimais;
    };
    return zoo;
}());
exports["default"] = zoo;
