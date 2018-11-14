"use strict";
exports.__esModule = true;
var dungeon = /** @class */ (function () {
    function dungeon() {
        this.tipo = 1; //Math.floor(Math.random() * 6) + 1  
        this.portas_por_sala = Math.floor(Math.random() * 6) + 1;
        this.condicao = Math.floor(Math.random() * 6) + 1;
        this.dimensao_sala = Math.floor(Math.random() * 6) + 1;
    }
    dungeon.prototype.gerar = function () {
        if (this.tipo == 1) {
            this.descrever = this.descrever + "O corredor é ";
            if (this.dimensao_sala == 1) {
                this.descrever = this.descrever + "amplo e ";
                if (this.condicao == 1) {
                    this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 2) {
                    this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 3) {
                    this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 4) {
                    this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 5) {
                    this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 6) {
                    this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
            }
            else if (this.dimensao_sala == 2) {
                this.descrever = this.descrever + "curto e ";
                if (this.condicao == 1) {
                    this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 2) {
                    this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 3) {
                    this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 4) {
                    this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 5) {
                    this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 6) {
                    this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
            }
            else if (this.dimensao_sala == 3) {
                this.descrever = this.descrever + "esguio e ";
                if (this.condicao == 1) {
                    this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 2) {
                    this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 3) {
                    this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 4) {
                    this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 5) {
                    this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 6) {
                    this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
            }
            else if (this.dimensao_sala == 4) {
                this.descrever = this.descrever + "ziguezagueado e ";
                if (this.condicao == 1) {
                    this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 2) {
                    this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 3) {
                    this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 4) {
                    this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 5) {
                    this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 6) {
                    this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
            }
            else if (this.dimensao_sala == 5) {
                this.descrever = this.descrever + "longo e ";
                if (this.condicao == 1) {
                    this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 2) {
                    this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 3) {
                    this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 4) {
                    this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 5) {
                    this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 6) {
                    this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
            }
            else if (this.dimensao_sala == 6) {
                this.descrever = this.descrever + "baixo e";
                if (this.condicao == 1) {
                    this.descrever = this.descrever + "quente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 2) {
                    this.descrever = this.descrever + "frio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 3) {
                    this.descrever = this.descrever + "escorregadio. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 4) {
                    this.descrever = this.descrever + "íngreme. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 5) {
                    this.descrever = this.descrever + "ascendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
                else if (this.condicao == 6) {
                    this.descrever = this.descrever + "descendente. Na sua frente, você vê " + this.portas_por_sala + " portas. O que você faz?";
                    console.log(this.descrever);
                }
            }
        }
    };
    return dungeon;
}());
exports.dungeon = dungeon;
var calabouco = new dungeon();
calabouco.gerar();
