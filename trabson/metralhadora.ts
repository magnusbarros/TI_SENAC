import { arma } from "./arma";

export class metranca extends arma{

    private TPS:number
    private tirosPorSegundo:number

    constructor(projeteis:number, capacidade:number, TPS:number){
        super(projeteis, capacidade)
        this.capacidade = capacidade
        this.municoesNoCarregador = projeteis
        this.tirosPorSegundo = TPS
    }

    public atirar(N:number): void {
        
        if (this.municoesNoCarregador == 0)
        console.log("*click click*")
        else{
            if(N != 0){
                for(let i=0; i<N; i++){
                   if (this.municoesNoCarregador != 0){
                       console.log("*CLANK*")
                       this.municoesNoCarregador -=1
                       }
                      else{
                           console.log("*click click*")
                     }
                }
            }
            else{
            for(let i=0; i<this.tirosPorSegundo; i++){
                if (this.municoesNoCarregador != 0){
                console.log("*CLANK*")
                this.municoesNoCarregador -=1
                }
                else{
                    console.log("*click click*")
                }
            }
            console.log("I AM FUCKING RAMBOOOOOOOOOOOOO")}
        }
    }

}

