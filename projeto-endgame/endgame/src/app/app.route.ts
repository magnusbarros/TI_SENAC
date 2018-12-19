import {Routes} from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { ServicoComponent } from './components/servicos/servico/servico.component';

export const rotaconstante:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'servicos', component: ServicosComponent},
    {path: 'servicos/:id', component: ServicoComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'produtos/:id', component: ProdutoComponent},
    {path: '**', redirectTo: 'home'}
    
]