import { vertebrado } from "./vertebrados";

export class anfibio extends vertebrado{
    protected eh_um_ornitorrinco:boolean

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, BONES:number, numzei:boolean){
        super(qtdDentes, qtdOlhos, nome, tipo, BONES)
        this.eh_um_ornitorrinco = numzei
    }

    public platipusszation(){
        if(this.eh_um_ornitorrinco == true){
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        }
        else{
            console.log("ele n é um ornitorrinco")
        }
    }

    public pular(){
        console.log("anfíbios podem pular")
    }
}