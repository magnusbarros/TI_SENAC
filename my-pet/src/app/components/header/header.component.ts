import { Component } from "@angular/core"

@Component({
    /* Selector é onome que eu quero
    para o meu componente*/
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    title = 'header'
}