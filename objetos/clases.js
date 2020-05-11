class Perro {

    constructor(nombre,color,num_patas,peso,altura){// crea un objeto a partir de la plantilla
        console.log('desde el constructor de ',nombre)
        this.nombre=nombre
        this.color=color
        this.num_patas=num_patas
        this.peso=peso
        this.altura=altura
    }

    saluda(){//metodo
        return 'hola soy '+this.nombre
    }
}

let snoopy = new Perro('snoopy', 'blanco con negro',2,'9kg','1m')
let scooby = new Perro('scooby doo','cafe con negro',4,'15kg','1.5m')
let huesos = new Perro('huesos','cafe',4,'4kg','1.1m')

console.log(snoopy.saluda())
console.log(scooby.saluda())
console.log(huesos.saluda())

console.log(snoopy.color)
console.log(scooby.color)
console.log(huesos.color)
console.log()

/* class Cliente {
    constructor(id,nombre,edad,genero,email,tel){
        this.id=id
        this.nombre=nombre
        this.edad=edad
        this.genero=genero
        this.email=email
        this.tel=tel
        this.carrito=[]
        this.suscrito=false
    }

    agregarCarrito(producto){
        this.carrito.push(producto)
    }
    checarCarrito(){
        return this.carrito
    }
    comprar(){
        let total=0;
        for(let i=0;i<this.carrito.length;i++){
            console.log('estas comprando '+this.carrito[i].nombre+' por '+this.carrito[i].precio),
            total=total+this.carrito[i].precio
        } 
            return 'el total de tu compra es '+ total
    }
    suscribirse(){
        if(this.suscrito){return 'el cliente ya esta suscrito'}
        else{
            this.suscrito=true
            return 'el cliente se suscribio correctamente'
        }
    }
} */

/* class Producto{
    constructor(nombre,precio){
        this.nombre=nombre
        this.precio=precio
    }
} */

/* let ipad = new Producto('ipad 16g',7000)
let iphone = new Producto('iphone',60000)
let cliente1 = new Cliente(1,'Edwin',27,'M','edwin@gmail.com',57004444)

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar()) */