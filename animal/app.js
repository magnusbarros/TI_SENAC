"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
var zoologico_1 = require("./zoologico");
/*Definida uma variável,
que no caso é um objeto,
quero que defina a quan-
tidade de dentes e olhos*/
var barroth = new animal_1.animal(30, 2, "Barroth", "Serpe Bruta");
/*barroth.definirNome("Barroth")
barroth.definirDentes(30)
barroth.definirOlhos(2)
barroth.definirTipo("Serpe Bruta")*/
var legiana = new animal_1.animal(25, 2, "Legiana", "Serpe Alada");
/*legiana.definirNome("Legiana")
legiana.definirDentes(25)
legiana.definirOlhos(2)
legiana.definirTipo("Serpe Alada")*/
var teostra = new animal_1.animal(30, 2, "Teostra", "Dragão Ancião");
/*teostra.definirNome("Teostra")
teostra.definirDentes(30)
teostra.definirOlhos(2)
teostra.definirTipo("Dragão Ancião")*/
var conjunto = [];
conjunto.push(barroth);
conjunto.push(legiana);
conjunto.push(teostra);
var zoologico = new zoologico_1["default"]("Novo Mundo", conjunto);
console.log(zoologico);
