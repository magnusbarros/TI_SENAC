

export class pessoa{
    protected nome:string
    protected cpf:string
    protected nascimento: string
    
    public agendamento() {
        console.log("dong")
        console.log(this.nome + " " + this.cpf + " " + this.nascimento)
      }
  
}