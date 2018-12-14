import {produto} from '../models/produto.model'


export class ProdutosService{
    public produtos: produto[] = 
[
    {
        id:1,
        nome: 'Bepis',
        descricao: 'haha benis',
        valor: '69',
        quantidade: '5'
    },

    {
        id:2,
        nome: 'dingus',
        descricao: 'droga ilícita para cachorros',
        valor: '36',
        quantidade: '1'
    },
    {
    id:3,
        nome: 'boaconha',
        descricao: 'é bão memo',
        valor: '50',
        quantidade: '4'
    },
    {
    id:4,
        nome: 'máconha ',
        descricao: 'essa nem tanto',
        valor: '5',
        quantidade: '6'
    },
    {
    id:5,
    nome: 'revolve ',
        descricao: 'diretamente do mr. Pussy',
        valor: '500 conto',
        quantidade: '7'
    },
    {
    id:6,
        nome: 'a esse ponto, a criatividade morreu e a entrega atrasou',
        descricao: 'SOCORRO, ME AJUDA SENHOR!',
        valor: '666',
        quantidade: '6'
    },
    {
    id:7,
    nome: 'pistola',
    descricao: 'eu nesse exato momento',
    valor: '19',
    quantidade: '2'
    },
    {
    id:8,
        nome: 'Processador AMD Ryzen 5',
        descricao: 'O AMD Ryzen™ de 2ª Geração chegou: um processador para desktop de alta performance que traz a tecnologia Precision Boost 2 com velocidades de clock mais altas e compatibilidade com memórias de baixa latência, incorporado em um chip de 12 nanômetros, para permitir experiências incríveis em jogos. ',
        valor: '946.99',
        quantidade: '4'
    },
    {
    id:9,
        nome: 'a',
        descricao: 'b',
        valor: '111',
        quantidade: '3'
    },
    {
    id:10,
        nome: 'JoJo no Kimyou na Boken - Ogon no Kaze',
        descricao: 'A quinta parte da série JoJo no Kimyou na Boken, Ogon no Kaze conta a história de Giorno Giovanna, um jovem italiano que almeja ser um Gangstar!',
        valor: '200',
        quantidade: '1'
    }
]

    public getprodutos(): Array<produto>{
        return this.produtos
    }
    public getProdutoPorId(id: number):
    produto{
        let produtosinternos: produto[]
            produtosinternos = this.getprodutos()
                return produtosinternos[id -1]
    }
}
