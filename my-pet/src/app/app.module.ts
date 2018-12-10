import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { EsquerdoComponent } from './components/main/esquerdo/esquerdo.component';
import { DireitoComponent } from './components/main/direito/direito.component';
import { TesteComponent } from './components/teste/teste.component';
import { ProdutoComponent } from './produto/produto.component';
import { RouterModule } from '@angular/router';
import { rota } from './app.route';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EsquerdoComponent,
    DireitoComponent,
    MainComponent,
    FooterComponent,
    TesteComponent,
    ProdutoComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rota)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
