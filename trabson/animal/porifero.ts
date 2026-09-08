import { animal } from "./animal"

export class invertebrado extends animal{
    protected quantidadeDePoros:number
    protected type:number

    constructor(type:number,qtdDentes:number, qtdOlhos:number, nome:string, tipo:string, qtdPoros:number){
        super(qtdDentes,qtdOlhos,nome,tipo)
        if(type == 1){
            this.quantidadeDePoros = qtdPoros
            this.quantidadeDeOlhos = 0
            this.tipoDeAnimal = "Porífero"
        }else{
            this.quantidadeDePoros = null
            this.quantidadeDeOlhos = qtdOlhos
            this.tipoDeAnimal = "Platelminto"
        }
        this.quantidadeDeDentes = null
        this.nomeDoAnimal = nome
        this.type = type
    }

    public fazerHamburguer(){
        if(this.type == 1){
            console.log("*flips burger*")
        }
        else{
            console.log("apenas poríferos fazem isso")
        }
    }

    public fotossintese(){
        if(this.type == 1){
            console.log("FOTOSSÍNTESE")
        }
        else{
            console.log("apenas poríferos fazem isso")
        }
    }

    
    public uuuuh(): void{
        if(this.type == 2){
            for(let i = 1;i > 0; i++){
                console.log("END MY EXISTANCE")
            }
        }  
        else{
            console.log("apenas platelmintos fazem isso")
        }
    }

    
    public fazerCoisa():void{
        if(this.type == 2){
            console.log("Bepis " + this.nomeDoAnimal)
        }
        else{
            console.log("apenas platelmintos fazem isso")
        }
    }
    
}