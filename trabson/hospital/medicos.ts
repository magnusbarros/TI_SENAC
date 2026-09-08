import {pessoa} from "./pessoa"

export class medico{
    private nome:string
    private cpf:string
    private nascimento: string

    constructor(nome1:string, cpf1:string, nascimento1:string){
        this.nome = nome1
        this.cpf = cpf1
        this.nascimento = nascimento1
    }

    public agendamento() {
        console.log("dingus")
        console.log(this.nome + " " + this.cpf + " " + this.nascimento)
      }
    
    public medicina() {
        console.log("Medicado")
    }
}