import { vertebrado } from "./vertebrados";

export class aves extends vertebrado{
    protected terreno:string

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, BONES:number, terreno:string){
        super(qtdDentes, qtdOlhos, nome, tipo, BONES)
        this.terreno= terreno
    }

    public nadar(){
        console.log("ded")
    }

    public voar(){
        console.log("*FLAP FLAP FLAP*")
    }

    public eat(){
        console.log("*PECK PECK PECK*")
    }

    public sleep(){
        console.log("*ZZZZzzzz...*")
    }
}