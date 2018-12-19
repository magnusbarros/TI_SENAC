import { Component, OnInit } from '@angular/core';
import { servico } from '../../models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../../services/servicos.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  
  providers: [ ServicoService ]
})
export class ServicoComponent implements OnInit {
  private servico: servico[]
  constructor(private route: ActivatedRoute, private servicosService: ServicoService){}
   ngOnInit() { 
     this.servicosService.getServicoPorIdAPI(this.route.snapshot.params['id'])
     .then((serv: servico)=>{
       console.log(serv)
       this.servico = serv[0]
     })
   }
  

}
