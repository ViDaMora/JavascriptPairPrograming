let Electrodomestico = require('./Electrodomestico')
let Nevera = require('./Nevera')
let Televisor = require('./Televisor')
let Inventario = require('./Inventario')
let Facturacion = require('./Facturacion')

const prompt = require('prompt-sync')();



function main(){

    let stock = new Inventario();
    let facturaList =[];
    let menu;
        
    while (menu !== '0') {
        console.log("1. Administrar inventario")
        console.log("2. Facturar")
        console.log("3. mostrar inventario")
        console.log("0. Salir")
        menu= prompt()
        if (menu === '1') {
            inventario(stock)
            console.log(stock)
        } else if (menu === '2') {
            facturar(facturaList,stock)
            facturaList=[];
        }else if(menu ==='3'){
            stock.mostrar()
        }
    }
}

function inventario(stock) {
    let numero= prompt("Cuantos electrodomesticos piensa agregar?")
    console.log("Deje el campo vacio si no aplica")
    for (let index = 0; index < numero; index++) {
        let consumo,procedencia,tdd,pulgadas,volumen,litros
         consumo= prompt("Consumo del electrodomestico? ")
         procedencia= prompt("procedencia del electrodomestico? ")
         tdd= prompt("Es un televisor con sistema tdd? (true/false) ")
         pulgadas= prompt("Cuantas pulgadas tiene el televisor? ")
         volumen= prompt("Cuanto volumen tiene la nevera? ")
      identificador(consumo,procedencia,tdd,litros,pulgadas,volumen,stock)
        console.log("------------ siguiente item --------------")
        console.log(" ")

    }
}


function identificador(consumo,procedencia,tdd,litros,pulgadas,volumen,stock) {
        if (tdd =! '' && pulgadas != '') {
            let televisor = new Televisor(consumo,procedencia,pulgadas,tdd)
            televisor.valorTotal()
            stock.addItem(televisor)
            
        } else if( volumen != ''){
            let nevera = new Nevera(consumo,procedencia,litros)
            nevera.valorTotal()
            stock.addItem(nevera)
        }else{
            let electrodomestico = new Electrodomestico(consumo,procedencia)
            electrodomestico.valorTotal()
            stock.addItem(electrodomestico)
        }
}

function  facturar(facturaList,stock) {
    console.log("Se desplegara el inventario actual, escriba el id de los items seleccionados para facturacion")
    stock.mostrar()
    let numero= prompt("Cuantos electrodomesticos piensa facturar?")
    for (let index = 0; index < numero; index++) {
        const element = prompt("Id del "+ (index+1)+" electrodomestico")
        facturaList.push(stock.electrodomesticos[element-1])
        stock.deleteItem(stock.electrodomesticos[element-1])
    }
    let factura = new Facturacion(facturaList);
    factura.generarfactura()

}



/*if(JSON.stringify(m) === JSON.stringify(m1)){
    console.log("melonjas")
}*/
main()
