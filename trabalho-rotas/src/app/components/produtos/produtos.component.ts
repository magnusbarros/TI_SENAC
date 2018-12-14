import { Component, OnInit } from '@angular/core';
import { produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
 //Metadatas...
 selector: 'app-produtos',
 templateUrl: './produtos.component.html',
 styleUrls: ['./produtos.component.css'],
 //palavra reservada do componente, informando quem irá prover
 //os serviços para meu componente, chamado "injeção de serviços"
 providers: [ ProdutosService ]
})
export class ProdutosComponent implements OnInit {

 public produtos: produto[]

 constructor(private produtosService: ProdutosService) { }

 ngOnInit() {
   this.produtos = this.produtosService.getprodutos()
   
 }
}
