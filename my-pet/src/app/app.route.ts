import {Routes} from '@angular/router'
import { ProdutoComponent } from './produto/produto.component';

export const rota: Routes = [
    {path: 'produtos', component: ProdutoComponent},
    {path: 'produto/:id', component: ProdutoComponent},
    {path: '**', redirectTo: 'produtos'}
]