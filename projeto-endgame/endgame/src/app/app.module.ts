import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { rotaconstante } from './app.route';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContatoComponent,
    ServicosComponent,
    ProdutosComponent,
    FooterComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotaconstante),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
