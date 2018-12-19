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
