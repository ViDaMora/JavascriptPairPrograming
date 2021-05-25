class Electrodomestico{

    constructor(consumo,procedencia){
        this.consumo=consumo;
        this.procedencia=procedencia;
        this.valor = 0
    }

     getProcedencia(){
      
        if (this.procedencia=='nacional') {
            this.valor= this.valor+250000;
        }else if (this.procedencia=='importado'){
            this.valor= this.valor+ 350000;
        }

    }
    
     getConsumo(){
        switch(this.consumo){
            case "A":
                this.valor= this.valor+ 250000;
                break;
            case "B":
                this.valor= this.valor+ 350000;
                break;
            case "C":
                this.valor= this.valor+ 350000;
                break;
        }

    }

    valorTotal(){
        this.getConsumo();
        this.getProcedencia()
    }
}

module.exports= Electrodomestico