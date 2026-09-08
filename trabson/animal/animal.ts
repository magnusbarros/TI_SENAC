export class animal{
    protected quantidadeDeDentes:number
    protected quantidadeDeOlhos:number
    protected tipoDeAnimal:string
    protected nomeDoAnimal:string

    /*Construtor da classe
    Para que o animal seja criado,
    quero que defina a quantidade
    de olhos e dentes*/

    constructor(qtdDentes:number, qtdOlhos:number, nome:string, tipo:string){
       this.quantidadeDeDentes = qtdDentes
       this.quantidadeDeOlhos = qtdOlhos
       this.nomeDoAnimal = nome
       this.tipoDeAnimal = tipo
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