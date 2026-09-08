export class operador{
    private nome:string
    private cpf:string
    private nascimento: string

    constructor(nome1:string, cpf1:string, nascimento1:string){
        this.nome = nome1
        this.cpf = cpf1
        this.nascimento = nascimento1
    }

    public agendamento() {
      console.log("bepis")
      console.log(this.nome + " " + this.cpf + " " + this.nascimento)
    }
    
    public consulta() {
        console.log("Consultado")
    }
}