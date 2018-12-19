import {servico} from '../models/produto.model'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()

export class ServicoService{

    constructor(private http: Http){

    }

    public servicos: servico[] = 
[
   
]
    public getServicoPromiseAPI(): Promise<servico[]>{
        
        return this.http.get('http://localhost:3000/services')
        .toPromise()
        .then((serv: any)=>serv.json())
    }
    public getServicoPorIdAPI(id: number):
    Promise<servico>{
        return this.http.get(`http://localhost:3000/services?id=${id}`)
        .toPromise()
        .then((serv: any)=>serv.json())
    }
}