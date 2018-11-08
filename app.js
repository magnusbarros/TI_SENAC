"use strict";
exports.__esModule = true;
var metralhadora_1 = require("./metralhadora");
var arma_1 = require("./arma");
var metralha = new metralhadora_1.metranca(20, 20, 20);
metralha.atirar(21);
//metralha.recarregar()
metralha.informarBalas();
var pistola = new arma_1.arma(10, 10);
pistola.atirar(1);
