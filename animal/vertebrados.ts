import { animal } from "./animal";

export class vertebrado extends animal{
    protected BONEZONE:number

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, BONES:number){
        super(qtdDentes, qtdOlhos, nome, tipo)
        this.BONEZONE = BONES
    }
}