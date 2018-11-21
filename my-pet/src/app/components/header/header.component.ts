import { Component } from "@angular/core"
import { interpolation1 } from "@angular/core/src/render3";
import { TestBed } from "@angular/core/testing";

@Component({
    /* Selector é onome que eu quero
    para o meu componente*/
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    test:string = 'Valor'
}