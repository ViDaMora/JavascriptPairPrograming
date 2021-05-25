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
        let i = arr.indexOf( electrodomestico );
        if ( i !== -1 ) {
            this.electrodomesticos.splice( i, 1 );
        }
    }

}