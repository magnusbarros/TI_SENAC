import { vertebrado } from "./vertebrados";

export class mamifero extends vertebrado{
    protected terreno:string

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, BONES:number, terreno:string){
        super(qtdDentes, qtdOlhos, nome, tipo, BONES)
        this.terreno= terreno
    }

    public nadar(){
        console.log("*SWIMS AWAY*")
    }

    public pular(){
        console.log("*JUMP*")
    }

    public eat(){
        console.log("*OM NOM NOM*")
    }

    public sleep(){
        console.log("*ZZZZzzzz...*")
    }
}