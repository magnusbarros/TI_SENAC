import { animal } from "./animal";

/*Definida uma variável,
que no caso é um objeto,
quero que defina a quan-
tidade de dentes e olhos*/


let barroth = new animal()
barroth.definirNome("Barroth")
barroth.definirDentes(30)
barroth.definirOlhos(2)
barroth.definirTipo("Serpe Bruta")

console.log(barroth)