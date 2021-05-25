let Electrodomestico = require('./Electrodomestico')

class Televisor extends Electrodomestico{

    constructor(consumo,procedencia,pulgadas,tdd){
        super(consumo,procedencia)
        this.pulgadas=pulgadas
        this.tdd=tdd
        this.valor
    }

    valorTotal(){
        super.valorTotal(this.consumo,this.procedencia)
        if (this.pulgadas >40){
            this.valor=this.valor+(0.3*this.valor);
        }
        if (this.tdd) {
            this.valor=this.valor+250000
        }
    }

} 


module.exports= Televisor