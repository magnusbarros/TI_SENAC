import { Component, OnInit } from '@angular/core';
import { produto } from '../../models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ ProdutosService ]
})
export class ProdutoComponent implements OnInit {

 private Produto: produto
 constructor(private route: ActivatedRoute, private produtosService: ProdutosService){}
  ngOnInit() { this.Produto = this.produtosService.getProdutoPorId(this.route.snapshot.params['id']) 
}
 

}
