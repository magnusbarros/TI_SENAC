import { animal } from "./animal";
import zoo from "./zoologico";

/*Definida uma variável,
que no caso é um objeto,
quero que defina a quan-
tidade de dentes e olhos*/


let barroth = new animal(30,2,"Barroth","Serpe Bruta")

let legiana = new animal(25,2,"Legiana","Serpe Alada")

let teostra = new animal(30,2,"Teostra","Dragão Ancião")

let conjunto: Array<animal> = []

conjunto.push(barroth)
conjunto.push(legiana)
conjunto.push(teostra)

let zoologico = new zoo("Novo Mundo",conjunto)
console.log(zoologico)