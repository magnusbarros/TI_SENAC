import { animal } from "./animal";
import zoo from "./zoologico";
import { invertebrado } from "./porifero";
import { vertebrado } from "./vertebrados";
import { peixe } from "./peixe";

/*Definida uma variável,
que no caso é um objeto,
quero que defina a quan-
tidade de dentes e olhos*/


let barroth = new animal(30,2,"Barroth","Serpe Bruta")

let legiana = new animal(25,2,"Legiana","Serpe Alada")

let teostra = new animal(30,2,"Teostra","Dragão Ancião")

let teste = new invertebrado(1,0,2,"bepis","dingus",0)

let bepis = new peixe(15,2,"fishstick fish","type",20,true)

let conjunto: Array<animal> = []

conjunto.push(barroth)
conjunto.push(legiana)
conjunto.push(teostra)

let zoologico = new zoo("Novo Mundo",conjunto)
console.log(zoologico)

teste.fazerHamburguer()
console.log(teste)

bepis.nadar()
console.log(bepis)