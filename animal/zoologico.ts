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
            this.listaDeAnimais = list
            this.endereco = end
        }


       /* definirEndereco(end: string): void{
            this.endereco = end
        }*/

        public mostrarEndereco(): string{
            return this.endereco
        }

        public mostrarAnimais(): Array<animal>{
            return this.listaDeAnimais
        }

        
}