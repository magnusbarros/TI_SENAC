import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { Hero } from "../models/hero.model";

@Component({
    /* Selector é onome que eu quero
    para o meu componente*/
    selector: 'main',
    templateUrl: './main.component.html'
})

export class MainComponent implements OnInit{
    tru:boolean = true;
    teste:string = 'Biggus Dickus Innmäi Pantus'
    imagem:string = './../../assets/waifu.png'
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    posx:number = 150;
    totalx:string = "left: " + this.posx + "px"
    posy:number = 3000;
    totaly:string = ";top: " + this.posy + "px;"
    totalxy:string = this.totalx + this.totaly;
    testes:string = this.totalxy;
    exibirImg:boolean = true;
    true1:string = ""
    true2:string = ""
    public numbahtwho:number = 666
    public fugma:string = 'fugma ass. gotcha. '

    ngOnInit(){
        this.doTheThing();
    }
   
    clickButton():void{
        if(this.imagem == ''){
            this.imagem = './../../assets/waifu.png';
        }
        else{
            this.imagem = '';
        }
    }

    invertext():void{
        let txt1 = ((document.getElementById("txt1") as HTMLInputElement).value);
        let txt2 = ((document.getElementById("txt2") as HTMLInputElement).value);
        this.true1 = txt2
        this.true2 = txt1
    }
    tecsto:string = ""
    prima:string = ""
    tecc:string = "abcd"
    disparar(valor:Event):void{
        console.log((<HTMLInputElement>valor.target).value)
        this.tecsto = (<HTMLInputElement>valor.target).value
        
     
    }
   /* exibirImagem(): void{
        this.imagem = './../../assets/waifu.png';
    }
    ocultarImagem(): void{
        this.imagem = '';
    }*/

    public definirTexto (x:string):void{
        this.fugma = x
    }
/*
    filhoPai():void{
        this.definirTexto.emit('fugg')
    }

    OnInit(){
        this.enviarTexto()
    }
*/

heroes = [
    new Hero(1, 'Benis'),
    new Hero(2, 'Ebin'),
    new Hero(3, 'Gondola')
]

//myHero = this.heroes[0].heroName + ", " + this.heroes[0].heroId
myHero = []
public doTheThing():void{
    for (let i = 0; i < this.heroes.length; i++) {
        
    }
}
public pessoas = []
public number:number
public doIt():void{
    let txt1 = ((document.getElementById("do1") as HTMLInputElement).value);
    let txt2 = ((document.getElementById("do2") as HTMLInputElement).value);
    let total = txt1 + " " + txt2
    this.pessoas.push(total)
    this.number = this.pessoas.length
    console.log(this.pessoas)
}
}