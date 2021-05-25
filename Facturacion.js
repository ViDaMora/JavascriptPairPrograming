class Facturacion{
    
    constructor(electrodomesticos){
        this.electrodomesticos=electrodomesticos;
        this.valorProductos=0
    }

   generarfactura(){
    console.log("-----------------Factura---------------------- " )
       let valorTotal= 0
       this.electrodomesticos.map((element)=>{
            console.log(element)
            valorTotal=element.valor+ valorTotal
       })
       console.log("El valor total de los productos es de: " + valorTotal)
       console.log("--------------------------------------- " )

   }


} 


module.exports = Facturacion