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

    public getservicos(): Array<servico>{
        return this.servicos
    }
    public getServicoPorId(id: number):
    servico{
        let servicosinternos: servico[]
            servicosinternos = this.getservicos()
                return servicosinternos[id -1]
    }
    public getServicosPromise(): Promise<servico[]>{
        return new Promise((resolve, reject) =>{
            let works = true

            if(works){
                resolve(this.servicos)
            }else{
                reject({error_type: 'serviço falso', message: 'erro: serviço inexistente'})
            }
        })
    }
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