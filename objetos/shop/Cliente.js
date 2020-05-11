class Cliente {
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
}

module.exports=Cliente;