class Maestro{
    constructor(nombre){
        this.nombre=nombre
    //    this.calificaciones=[]
    }
    promedio(...arg){//split operator ems6
        let temporal=0
        //this.calificaciones=arg
        for(let i=0;i<arg.length;i++){
            temporal=temporal+arg[i]
        }
        return 'El promedio es: '+ temporal/arg.length
    }
}

class MaestroFisica extends Maestro{
    constructor(nombre,antiguedad){
        super(nombre)
        this.antiguedad=antiguedad
        this.materia='Fisica'
    }
}
class MaestroMusica extends Maestro{
    constructor(nombre,edad){
        super(nombre)
        this.edad=edad
        this.materia='Musica'
    }
}

let maestro1 = new MaestroFisica('Juan Fisico',10)
let maestro2 = new MaestroMusica('Pedro Musico',45)

console.log(maestro1.materia)
console.log(maestro2.materia)
console.log(maestro1.promedio(35,5,10))