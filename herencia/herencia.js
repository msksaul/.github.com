class Mascota{
    constructor (nombre,color){
        this.nombre=nombre
        this.color=color
    }
    comer(alimento){
        return `${this.nombre} esta comiento ${alimento}` //agregar variables a texto, concatenar facil
    }
    saludar(){
        return `Hola soy ${this.nombre} te saludo humano`
    }
}

class Perro extends Mascota{
    constructor (nombre,color,patas,raza,peso){
        super(nombre,color)
        this.patas=patas
        this.raza=raza
        this.peso=peso
    }

}

class Pez extends Mascota{
    constructor (nombre,color,tipoPecera,tipoAgua,cantidadAlimento){
        super(nombre,color)
        this.tipoPecera=tipoPecera
        this.tipoAgua=tipoAgua
        this.cantidadAlimento=cantidadAlimento
    }
    nadar(){
        return `${this.nombre} esta nadando feliz en su pecera ${this.tipoPecera}`
    }
    saludar(){ // override
        return 'glug glug'
    }
}

let nemo =new Pez('nemo','naranja','cristal templado','salado','2g')

console.log(nemo.nombre)
console.log(nemo.saludar())
//console.log(nemo.comer('alimento especial'))
console.log(nemo.nadar())



let huesos = new Perro('huesos','cafe',4,'galgo','5kg')

console.log(huesos.saludar())
//console.log(huesos.nombre)
//console.log(huesos.raza)
//console.log(huesos.comer('carnita'))