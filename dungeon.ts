export class dungeon{
    //private salas:number
    private tipo:number
    private portas_por_sala:number
    private condicao:number
    //private tamanho_sala:Array<>
    private dimensao_sala:number
    private descrever:string;
    
constructor(){
    this.tipo = 1 //Math.floor(Math.random() * 6) + 1  
    this.portas_por_sala = Math.floor(Math.random() * 6) + 1  
    this.condicao = Math.floor(Math.random() * 6) + 1
    this.dimensao_sala = Math.floor(Math.random() * 6) + 1
}

public gerar(): void{
    if(this.tipo == 1){
        this.descrever = this.descrever + "O corredor é "
        if (this.dimensao_sala == 1){
            this.descrever = this.descrever + "amplo e "
            if (this.condicao == 1){
                this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 2){
                this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 3){
                this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 4){
                this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 5){
                this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 6){
                this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
        }
        else if (this.dimensao_sala == 2){
            this.descrever = this.descrever + "curto e "
            if (this.condicao == 1){
                this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 2){
                this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 3){
                this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 4){
                this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 5){
                this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 6){
                this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
        }
        else if (this.dimensao_sala == 3){
            this.descrever = this.descrever + "esguio e "
            if (this.condicao == 1){
                this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 2){
                this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 3){
                this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 4){
                this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 5){
                this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 6){
                this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
        }
        else if (this.dimensao_sala == 4){
            this.descrever = this.descrever + "ziguezagueado e "
            if (this.condicao == 1){
                this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 2){
                this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 3){
                this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 4){
                this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 5){
                this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 6){
                this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
        }
        else if (this.dimensao_sala == 5){
            this.descrever = this.descrever + "longo e "
            if (this.condicao == 1){
                this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 2){
                this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 3){
                this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 4){
                this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 5){
                this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 6){
                this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
        }
        else if (this.dimensao_sala == 6){
            this.descrever = this.descrever + "baixo e"
            if (this.condicao == 1){
                this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 2){
                this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 3){
                this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 4){
                this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 5){
                this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
            else if (this.condicao == 6){
                this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?"
                console.log(this.descrever)
            }
        }
        
    }
    
}

}

let calabouco = new dungeon()
calabouco.gerar()
