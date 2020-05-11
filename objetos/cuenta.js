class Cuenta  {
    constructor (titular,cantidad){
        this._titular=titular
        this._cantidad=cantidad
    }
    getNombre(){
        return this._nombre
    }
    getCantidad(){
        return this._cantidad
    }
    setCantidad(newCantidad){
        this._cantidad=newCantidad
    }
    ingresar(abono){
        let temp1=0
        temp1=this.getCantidad()+abono
        if (temp1>900){
            return 'Se ha excedido de la cantidad maxima'}
        else{this.setCantidad(temp1);
            return 'Su nuevo saldo es ' + this.getCantidad() + '$'
        }
    }
    retirar(debito){
        let temp2=0
        temp2=this.getCantidad()-debito
        if (temp2<10){
            return 'Se ha excedido de la cantidad minima'}
        else{this.setCantidad(temp2);
            return 'Su nuevo saldo es ' + this.getCantidad() + '$'
        }
    }
}

let cuenta1 = new Cuenta('Joanquin Guzman',200)

console.log(cuenta1)
console.log(cuenta1.ingresar(800))
console.log(cuenta1.getCantidad())