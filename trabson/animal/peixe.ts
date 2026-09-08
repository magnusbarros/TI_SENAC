import { vertebrado } from "./vertebrados";

export class peixe extends vertebrado{
    protected tipoAgua:boolean

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, BONES:number, aguas:boolean){
        super(qtdDentes, qtdOlhos, nome, tipo, BONES)
        this.tipoAgua = aguas
    }

    public nadar(){
        console.log("*SWIMS AWAY*")
    }

    public pular(){
        console.log("Peixes podem pular?")
    }
}