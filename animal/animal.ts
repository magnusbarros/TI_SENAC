export class animal{
    private quantidadeDeDentes:number
    private quantidadeDeOlhos:number

    /*Construtor da classe
    Para que o animal seja criado,
    quero que defina a quantidade
    de olhos e dentes*/

    constructor(){
       
    }

    public definirOlhos(numero: number):void{
        this.quantidadeDeOlhos = numero
    }

    public definirDentes(numero: number):void{
        this.quantidadeDeDentes = numero
    }
}