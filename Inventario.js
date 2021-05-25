let Electrodomestico = require('./Electrodomestico')
let Nevera = require('./Nevera')
let Televisor = require('./Televisor')


class Inventario{

    constructor(){
        this.electrodomesticos=[]
    }

    addItem(electrodomestico){
        this.electrodomesticos.push(electrodomestico)
    }
    
    deleteItem(electrodomestico){
        let i = this.electrodomesticos.indexOf( electrodomestico );
        if ( i !== -1 ) {
            this.electrodomesticos.splice( i, 1 );
        }
    }
    mostrar(){
        console.log("-----------------Stock---------------------- " )
        for (let index = 0; index < this.electrodomesticos.length; index++) {
            console.log("Item con el id: " +(index+1) + " caracteristicas: " + JSON.stringify(this.electrodomesticos[index]))
        }
        console.log("-------------------------------------------- " )

    }

}


module.exports=Inventario