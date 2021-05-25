let Electrodomestico = require('./Electrodomestico')


class Nevera extends Electrodomestico{

    constructor(consumo,procedencia,litros){
        super(consumo,procedencia)
        this.litros=litros
        this.valor
    }

    valorTotal(consumo,procedencia){
        super.valorTotal(consumo,procedencia)
        if (this.litros>120){
            let aumento = (this.litros-120)/10;
            let valorTotal = this.valor+(this.valor*(aumento*0.05));
            this.valor=valorTotal;
        }
    }

} 


module.exports= Nevera