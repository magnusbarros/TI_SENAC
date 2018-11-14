import { animal } from "./animal";

export default class zoo{
    private endereco: string
    private listaDeAnimais: Array<animal>

    /*Todo parâmetro e/ou atributo
    definido no início do meu método
    ou função só poderá ser acessado
    por ele mesmo
    */
   
    constructor(end: string,
        list: Array<animal>){
            this.endereco = end
            this.listaDeAnimais = list
        }

        public mostrarEndereco(): string{
            return this.endereco
        }

        public mostrarAnimais(): Array<animal>{
            return this.listaDeAnimais
        }
}