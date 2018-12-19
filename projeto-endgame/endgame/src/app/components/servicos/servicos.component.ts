import { Component, OnInit } from '@angular/core';
import { servico } from '../models/produto.model';
import { ServicoService } from '../services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  providers: [ ServicoService ]
})
export class ServicosComponent implements OnInit {

  

  public servicos: servico[]

  constructor(private servicosService: ServicoService) { }

  ngOnInit() {
    this.servicosService.getServicoPromiseAPI()
    .then(
      (serv: servico[]) => {
        this.servicos = serv
      }
    ),
    (erro: any) => {console.log(erro)}
     
  }
  

}
