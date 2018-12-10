import { Produto } from "../components/models/produto.model";

export class ProdutosService{

    public produtos: Produto[] = [
        {
            id: 1,
            nome: 'bepis',
            descricao: 'dingus dongus',
            valor: '10,90'
        },
        {
            id: 2,
            nome: 'pipus',
            descricao: 'haha benis',
            valor: '5,50' 
        }
    ]

    public getProdutos(): (Array<Produto> ){
        return this.produtos
    }
    public getProdutoPorId(id: number): Produto{
        let prdutosInternos: Produto[]
        prdutosInternos = this.getProdutos()
        return prdutosInternos[id -1]
    }
}

