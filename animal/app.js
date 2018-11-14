"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
/*Definida uma variável,
que no caso é um objeto,
quero que defina a quan-
tidade de dentes e olhos*/
var barroth = new animal_1.animal();
barroth.definirNome("Barroth");
barroth.definirDentes(30);
barroth.definirOlhos(2);
barroth.definirTipo("Serpe Bruta");
console.log(barroth);
