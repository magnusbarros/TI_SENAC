"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
var zoologico_1 = require("./zoologico");
var porifero_1 = require("./porifero");
var peixe_1 = require("./peixe");
/*Definida uma variável,
que no caso é um objeto,
quero que defina a quan-
tidade de dentes e olhos*/
var barroth = new animal_1.animal(30, 2, "Barroth", "Serpe Bruta");
var legiana = new animal_1.animal(25, 2, "Legiana", "Serpe Alada");
var teostra = new animal_1.animal(30, 2, "Teostra", "Dragão Ancião");
var teste = new porifero_1.invertebrado(1, 0, 2, "bepis", "dingus", 0);
var bepis = new peixe_1.peixe(15, 2, "fishstick fish", "type", 20, true);
var conjunto = [];
conjunto.push(barroth);
conjunto.push(legiana);
conjunto.push(teostra);
var zoologico = new zoologico_1["default"]("Novo Mundo", conjunto);
console.log(zoologico);
teste.fazerHamburguer();
console.log(teste);
bepis.nadar();
console.log(bepis);
