import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produto.service';
import { Produto } from '../components/models/produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  //Metadatas...
  selector: 'app-produtos',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  //palavra reservada do componente, informando quem irá prover
  //os serviços para meu componente, chamado "injeção de serviços"
  providers: [ProdutosService]
 })
 export class ProdutoComponent implements OnInit {
 
  private produtos: Produto
 
  constructor(private route: ActivatedRoute, private produtosService: ProdutosService) { }
 
  ngOnInit() {
    this.produtos = this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
  }
 }