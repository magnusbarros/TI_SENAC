import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produto.service';
import { Produto } from '../components/models/produto.model';

@Component({
  //Metadatas...
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  //palavra reservada do componente, informando quem irá prover
  //os serviços para meu componente, chamado "injeção de serviços"
  providers: [ProdutosService]
 })
 export class ProdutosComponent implements OnInit {
 
  public produtos: Produto[]
 
  constructor(private produtosService: ProdutosService) { }
 
  ngOnInit() {
    this.produtos = this.produtosService.getProdutos()
  }
 }