import { Component, OnInit, Input} from '@angular/core'

@Component({
    /* Selector é onome que eu quero
    para o meu componente*/
    selector: 'app-esquerdo',
    templateUrl: './esquerdo.component.html',
    styleUrls: ['./esquerdo.component.css']
})

export class EsquerdoComponent implements OnInit {
    ngOnInit(){}
    @Input() public Numero: number
}