import { vertebrado } from "./vertebrados";

export class repteis extends vertebrado{
    protected zucc:boolean

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, BONES:number, numzei:boolean){
        super(qtdDentes, qtdOlhos, nome, tipo, BONES)
        this.zucc = numzei
    }

    public platipusszation(){
        if(this.zucc == true){
            console.log("FOSTES ZUCADO")
            for(let i = 1;i > 0; i++){
                console.log("01101011100110001")
            }
        }
        else{
            console.log("a")
        }
    }

    public PIMP_UP(){
        console.log("INTERIOR CROCODILE ALLIGATOR")
    }
}