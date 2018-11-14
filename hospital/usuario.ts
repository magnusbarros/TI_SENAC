import {pessoa} from "./pessoa"

export class usuario extends pessoa{

    constructor(nome1:string, cpf1:string, nascimento1:string){
        super()
        this.nome = nome1
        this.cpf = cpf1
        this.nascimento = nascimento1
    }    

    public agendamento() {
        console.log("bepis")
        console.log(this.nome + " " + this.cpf + " " + this.nascimento)
      }
    
}