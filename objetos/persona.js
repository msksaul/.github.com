class Persona {
    constructor (primer_nombre,segundo_nombre,
                 primer_apellido,segundo_apellido,fecha_nacimiento,edad,sexo,peso,altura){
        this.primer_nombre=primer_nombre
        this.segundo_nombre=segundo_nombre
        this.primer_apellido=primer_apellido
        this.segundo_apellido=segundo_apellido
        this.fecha_nacimiento=fecha_nacimiento
        this.edad=edad
        this.sexo=sexo
        this.peso=peso
        this.altura=altura
        this.RFC=primer_apellido[0]+primer_apellido[1].toUpperCase()+
             segundo_apellido[0]+primer_nombre[0]+fecha_nacimiento[6]+fecha_nacimiento[7]
             +fecha_nacimiento[0]+fecha_nacimiento[1]+'1H0'
    }

    calcularIMC(){
        return Math.round((this.peso / Math.pow(this.altura,2))*10)/10
    }
    
    esMayorDeEdad(){
        if (this.edad<18){return 'No es mayor de edad'}
        else {return 'Es mayor de edad'}
    }
}

let persona1 = new Persona('Pablo','Emilio','Escobar','Gabiria','12/01/80',40,'M',80,'1.70')

console.log('RFC=',persona1.RFC)
console.log(persona1.calcularIMC())
console.log(persona1.esMayorDeEdad())