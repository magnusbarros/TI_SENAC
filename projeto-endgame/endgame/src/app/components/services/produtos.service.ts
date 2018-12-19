import {produto} from '../models/produto.model'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()


export class ProdutosService{

    constructor(private http: Http){

    }

    public produtos: produto[] = 
[
   
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
    public getProdutosPromise(): Promise<produto[]>{
        return new Promise((resolve, reject) =>{
            let works = true

            if(works){
                resolve(this.produtos)
            }else{
                reject({error_type: 'produto falso', message: 'erro: produto inexistente'})
            }
        })
    }
    public getProdutosPromiseAPI(): Promise<produto[]>{
        
        return this.http.get('http://localhost:3000/produtos')
        .toPromise()
        .then((prod: any)=>prod.json())
    }
    public getProdutoPorIdAPI(id: number):
    Promise<produto>{
        return this.http.get(`http://localhost:3000/produtos?id=${id}`)
        .toPromise()
        .then((prod: any)=>prod.json())
    }
    
}
