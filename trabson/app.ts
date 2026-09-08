
import {metranca} from './metralhadora'
import { arma } from './arma';

let metralha = new metranca(20, 20, 20)
metralha.atirar(21)
//metralha.recarregar()
metralha.informarBalas()

let pistola = new arma(10, 10)
pistola.atirar(1)