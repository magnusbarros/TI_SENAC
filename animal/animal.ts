export class animal{
    private quantidadeDeDentes:number
    private quantidadeDeOlhos:number

    /*Construtor da classe
    Para que o animal seja criado,
    quero que defina a quantidade
    de olhos e dentes*/

    constructor(qtdDentes: number, qtdOlhos:number){
        this.quantidadeDeDentes = qtdDentes
        this.quantidadeDeOlhos = qtdOlhos
    }

}