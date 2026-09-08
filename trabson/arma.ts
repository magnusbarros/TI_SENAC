export class arma {
    // private calibre:string
    // private marca:string
    // private tipo:string
    protected capacidade:number
    protected municoesNoCarregador:number

    constructor(projeteis:number, capacidade:number){
        this.capacidade = capacidade
        this.municoesNoCarregador = projeteis
    }

    public atirar(N:number): void { 
        if (this.municoesNoCarregador == 0)
            console.log("*click click*")
        else {
            this.municoesNoCarregador = this.municoesNoCarregador - N
            console.log("BANG")
            
        }
    }

    public recarregar(): void {
        this.municoesNoCarregador = this.capacidade
        console.log("*CLICK, CLACK, CA-TCHIN!*")
    }

    public informarBalas(): void {
        
        console.log("*CLICK* Ainda tem " + this.municoesNoCarregador + "munições carregadas!")
    }
}

