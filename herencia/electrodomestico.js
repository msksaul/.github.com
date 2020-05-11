class Electrodomestico{
    constructor(precio,color,capacidad){
        this.precio=precio
        this.color=color
        this.capacidad=capacidad
        this.consumoEnergetico=100
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio,color,capacidad,carga){
        super(precio,color,capacidad)
        this.carga=carga
    }
    precioFinal(){
        return 'El precio final es:' + this.carga * this.consumoEnergetico
    }
}

let lavadora1 = new Lavadora(80,'cafe','80kg',40)

console.log(lavadora1.precioFinal())