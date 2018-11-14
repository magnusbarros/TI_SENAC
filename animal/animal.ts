export class animal{
    private quantidadeDeDentes:number
    private quantidadeDeOlhos:number
    private tipoDeAnimal:string
    private nomeDoAnimal:string

    /*Construtor da classe
    Para que o animal seja criado,
    quero que defina a quantidade
    de olhos e dentes*/

    constructor(){
       
    }

    public definirNome(nome: string):void{
        this.nomeDoAnimal = nome
    }

    public definirOlhos(numero: number):void{
        this.quantidadeDeOlhos = numero
    }

    public definirDentes(numero: number):void{
        this.quantidadeDeDentes = numero
    }

    public definirTipo(tipo: string):void{
        this.tipoDeAnimal = tipo
    }
}