import { Component, OnInit, Input, Output} from '@angular/core'
import { EventEmitter } from 'events';

@Component({
    /* Selector é onome que eu quero
    para o meu componente*/
    selector: 'app-direito',
    templateUrl: './direito.component.html',
    styleUrls: ['./direito.component.css']
})

export class DireitoComponent implements OnInit {
    ngOnInit(){}
   // @Output() public definirTexto: EventEmitter<string> = new EventEmitter()
}